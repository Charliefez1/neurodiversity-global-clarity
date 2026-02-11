
-- Q&A knowledge base items
CREATE TABLE public.qa_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User-submitted questions
CREATE TABLE public.qa_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'answered', 'archived')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS - qa_items are publicly readable, no public write
ALTER TABLE public.qa_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published Q&A" ON public.qa_items FOR SELECT USING (published = true);

-- RLS - qa_submissions: anyone can insert, no public read
ALTER TABLE public.qa_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a question" ON public.qa_submissions FOR INSERT WITH CHECK (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_qa_items_updated_at
BEFORE UPDATE ON public.qa_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
