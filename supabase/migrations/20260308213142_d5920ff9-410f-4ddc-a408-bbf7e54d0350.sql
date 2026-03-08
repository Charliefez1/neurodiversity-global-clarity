CREATE TABLE public.presentation_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  use_context text NOT NULL DEFAULT 'home',
  presentation text NOT NULL DEFAULT 'parents'
);

ALTER TABLE public.presentation_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up"
  ON public.presentation_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.presentation_signups
  FOR SELECT
  USING (false);