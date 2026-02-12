import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Tag, ThumbsUp, ThumbsDown, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import ReactMarkdown from "react-markdown";

type QAItem = {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  slug: string;
};

const QADetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [item, setItem] = useState<QAItem | null>(null);
  const [related, setRelated] = useState<QAItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedbackSent, setFeedbackSent] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("qa_items")
        .select("id, question, answer, tags, slug")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (data) {
        setItem(data as QAItem);
        // Increment view count (fire-and-forget via edge function not needed, use RPC or just skip for now)
        // Fetch related items by matching tags
        if (data.tags?.length) {
          const { data: relatedData } = await supabase
            .from("qa_items")
            .select("id, question, answer, tags, slug")
            .eq("published", true)
            .neq("id", data.id)
            .overlaps("tags", data.tags)
            .limit(5);
          setRelated((relatedData as QAItem[]) || []);
        }
      }
      setLoading(false);
    };
    if (slug) fetchItem();
  }, [slug]);

  const sendFeedback = async (helpful: boolean) => {
    if (feedbackSent) return;
    setFeedbackSent(true);
    await supabase.from("qa_feedback").insert({
      qa_item_id: item?.id,
      helpful,
    });
  };

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading…</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!item) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Question not found.</p>
            <Link to="/ask-rich" className="text-accent hover:underline font-display font-semibold text-sm">
              ← Back to Ask Rich
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      },
    ],
  };

  return (
    <main>
      <SEOHead
        title={`${item.question} | Ask Rich | Neurodiversity Global`}
        description={item.answer.slice(0, 155)}
        path={`/ask-rich/${item.slug}`}
      />
      <JsonLd data={faqJsonLd} />
      <Navbar />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-wide px-6 lg:px-10 pt-12 pb-8 lg:pt-20 lg:pb-12">
          <Link
            to="/ask-rich"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Ask Rich
          </Link>
          <div className="flex items-center gap-2.5 mb-4">
            <Sparkles size={18} className="text-accent" />
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent">
              Knowledge Base
            </p>
          </div>
          <h1 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight leading-[1.12] max-w-3xl">
            {item.question}
          </h1>
        </div>
      </section>

      <section className="bg-warm-stone">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-10 lg:py-16">
          <div className="max-w-3xl">
            <div className="prose prose-sm md:prose-base max-w-none text-foreground leading-relaxed">
              <ReactMarkdown>{item.answer}</ReactMarkdown>
            </div>

            {item.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-muted text-muted-foreground font-medium"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Feedback */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Was this helpful?</p>
              {feedbackSent ? (
                <p className="text-sm text-accent font-medium">Thanks for your feedback!</p>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => sendFeedback(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <ThumbsUp size={14} /> Yes
                  </button>
                  <button
                    onClick={() => sendFeedback(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <ThumbsDown size={14} /> No
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related questions */}
      {related.length > 0 && (
        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-lg md:text-xl text-foreground mb-6">
              Related questions
            </h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/ask-rich/${r.slug}`}
                  className="block rounded-xl border border-border bg-card px-6 py-5 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-accent font-bold mr-2">Q.</span>
                  <span className="font-display font-semibold text-sm text-foreground">
                    {r.question}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default QADetail;
