-- ============================================================
-- SaturnSite — Supabase Database Schema
-- Run this in your Supabase project: SQL Editor → New Query
-- ============================================================

-- ── NOTES ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS notes (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title        TEXT        NOT NULL DEFAULT 'Untitled',
  content      TEXT        NOT NULL DEFAULT '',
  -- optional link back to a piece of content
  source_type  TEXT,          -- e.g. 'arcane', 'saturn'
  source_id    TEXT,          -- e.g. arcane entry id
  tags         TEXT[]      NOT NULL DEFAULT '{}',
  is_favorite  BOOLEAN     NOT NULL DEFAULT false,
  collection_id UUID,        -- references collections(id) below
  is_public    BOOLEAN     NOT NULL DEFAULT false,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS for public access
CREATE POLICY "notes: read public notes"
  ON notes FOR SELECT
  USING (is_public = true);

-- ── COLLECTIONS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS collections (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name         TEXT        NOT NULL,
  description  TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Update notes to reference collections
ALTER TABLE notes 
  ADD CONSTRAINT fk_notes_collection 
  FOREIGN KEY (collection_id) 
  REFERENCES collections(id) 
  ON DELETE SET NULL;

-- auto-update updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER notes_updated_at
  BEFORE UPDATE ON notes
  FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

-- ── BOOKMARKS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookmarks (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content_type   TEXT        NOT NULL,   -- 'arcane', 'saturn', etc.
  content_id     TEXT        NOT NULL,   -- slug or page key
  content_title  TEXT        NOT NULL,
  is_favorite    BOOLEAN     NOT NULL DEFAULT false,
  collection_id  UUID        REFERENCES collections(id) ON DELETE SET NULL,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, content_type, content_id)
);

-- RLS for collections
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "collections: own rows only"
  ON collections FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ── ROW LEVEL SECURITY ────────────────────────────────────────
ALTER TABLE notes     ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- Notes: users can only see/edit their own rows
CREATE POLICY "notes: own rows only"
  ON notes FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Bookmarks: users can only see/edit their own rows
CREATE POLICY "bookmarks: own rows only"
  ON bookmarks FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
-- Reading Progress
CREATE TABLE IF NOT EXISTS reading_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  path TEXT NOT NULL,
  percentage FLOAT DEFAULT 0,
  chapters_viewed JSONB DEFAULT '[]'::jsonb,
  last_chapter TEXT,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, path)
);

ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'reading_progress' AND policyname = 'users_own_progress') THEN
    CREATE POLICY "users_own_progress" ON reading_progress
      FOR ALL TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

-- ── PROFILES & ROLES ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id           UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role         TEXT        NOT NULL DEFAULT 'user', -- 'admin', 'user'
  full_name    TEXT,
  display_name TEXT,
  updated_at   TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles: view/edit own"
  ON profiles FOR ALL
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Admin viewing: admins can see all profiles if needed
CREATE POLICY "profiles: admins view all"
  ON profiles FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
  ));

-- Trigger profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (new.id, 'user');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
