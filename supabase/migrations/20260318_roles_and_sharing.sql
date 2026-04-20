-- ============================================================
-- Migration: Add Roles, Profiles, and Public Sharing
-- To apply: Copy-paste into Supabase SQL Editor
-- ============================================================

-- 1. Add is_public to notes if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'notes' AND COLUMN_NAME = 'is_public') THEN
    ALTER TABLE notes ADD COLUMN is_public BOOLEAN NOT NULL DEFAULT false;
  END IF;
END $$;

-- 2. Add public read policy for shared notes
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'notes: read public notes') THEN
    CREATE POLICY "notes: read public notes" ON notes FOR SELECT USING (is_public = true);
  END IF;
END $$;

-- 3. Create Profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id           UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role         TEXT        NOT NULL DEFAULT 'user', -- 'admin', 'user'
  full_name    TEXT,
  display_name TEXT,
  updated_at   TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. Profile Policies
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'profiles: view/edit own') THEN
    CREATE POLICY "profiles: view/edit own" ON public.profiles FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'profiles: admins view all') THEN
    CREATE POLICY "profiles: admins view all" ON public.profiles FOR SELECT USING (
      EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );
  END IF;
END $$;

-- 5. Handle New Users (Trigger)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (new.id, 'user');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Utility for Admin Elevation
-- RUN THIS MANUALLY with your User ID:
-- UPDATE profiles SET role = 'admin' WHERE id = 'YOUR_USER_ID_HERE';

-- 7. Initialize profiles for existing users
INSERT INTO public.profiles (id, role)
SELECT id, 'user' FROM auth.users
ON CONFLICT (id) DO NOTHING;
