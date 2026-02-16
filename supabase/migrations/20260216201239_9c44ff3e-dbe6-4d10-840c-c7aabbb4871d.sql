
-- Feature 1: News Headlines
CREATE TABLE public.news_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  source_name TEXT NOT NULL,
  source_domain TEXT,
  topic TEXT NOT NULL DEFAULT 'general',
  summary TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  published_at TIMESTAMPTZ,
  discovered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published news"
ON public.news_items FOR SELECT
USING (status = 'published');

CREATE TRIGGER update_news_items_updated_at
BEFORE UPDATE ON public.news_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Feature 3: Community Questions / Lived Experience
CREATE TABLE public.user_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  page_submitted_from TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.user_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a question"
ON public.user_questions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can read approved questions"
ON public.user_questions FOR SELECT
USING (status = 'approved');

-- Feature 5: Feedback
CREATE TABLE public.user_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  feedback TEXT NOT NULL,
  feedback_type TEXT NOT NULL DEFAULT 'comment',
  name TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  admin_response TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.user_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
ON public.user_feedback FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can read approved feedback"
ON public.user_feedback FOR SELECT
USING (status = 'approved');
