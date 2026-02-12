
-- Phase 2-3: Add slug, view_count, full-text search, feedback table, query log table

-- Add slug and view_count to qa_items
ALTER TABLE public.qa_items ADD COLUMN slug text UNIQUE;
ALTER TABLE public.qa_items ADD COLUMN view_count integer NOT NULL DEFAULT 0;

-- Full-text search index on qa_items
ALTER TABLE public.qa_items ADD COLUMN fts tsvector
  GENERATED ALWAYS AS (to_tsvector('english', coalesce(question, '') || ' ' || coalesce(answer, ''))) STORED;
CREATE INDEX idx_qa_items_fts ON public.qa_items USING GIN(fts);

-- Feedback table
CREATE TABLE public.qa_feedback (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  qa_item_id uuid REFERENCES public.qa_items(id) ON DELETE SET NULL,
  ai_query text,
  helpful boolean NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
ALTER TABLE public.qa_feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit feedback" ON public.qa_feedback FOR INSERT WITH CHECK (true);

-- Query log table
CREATE TABLE public.qa_query_log (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  query text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
ALTER TABLE public.qa_query_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Only service role can access query log" ON public.qa_query_log FOR ALL USING (false);

-- Update RLS on qa_items to allow reading slug-based single items (already covered by existing SELECT policy)
