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
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

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
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, content_type, content_id)
);

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
