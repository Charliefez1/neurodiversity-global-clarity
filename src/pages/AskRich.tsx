import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, Tag, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";

const ASK_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-rich`;

type QAItem = { id: string; question: string; answer: string; tags: string[] };

const AskRich = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [qaItems, setQaItems] = useState<QAItem[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  // Submission form
  const [showSubmit, setShowSubmit] = useState(false);
  const [submitQ, setSubmitQ] = useState("");
  const [submitEmail, setSubmitEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchQA = async () => {
      const { data } = await supabase.from("qa_items").select("id, question, answer, tags").eq("published", true).order("created_at", { ascending: false });
      if (data) {
        setQaItems(data);
        const tags = [...new Set(data.flatMap((d: QAItem) => d.tags || []))].sort();
        setAllTags(tags);
      }
    };
    fetchQA();
  }, []);

  const askRich = async () => {
    const trimmed = query.trim();
    if (!trimmed || isStreaming) return;
    setAnswer("");
    setIsStreaming(true);

    try {
      const resp = await fetch(ASK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ question: trimmed }),
      });

      if (!resp.ok || !resp.body) {
        setAnswer("Sorry, something went wrong. Please try again.");
        setIsStreaming(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              accumulated += content;
              setAnswer(accumulated);
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch {
      setAnswer("Connection error. Please check your connection and try again.");
    }
    setIsStreaming(false);
  };

  const submitQuestion = async () => {
    if (!submitQ.trim() || submitting) return;
    setSubmitting(true);
    await supabase.from("qa_submissions").insert({ question: submitQ.trim(), email: submitEmail.trim() || null });
    setSubmitted(true);
    setSubmitting(false);
  };

  const filteredItems = selectedTag
    ? qaItems.filter((q) => q.tags?.includes(selectedTag))
    : qaItems;

  return (
    <main>
      <SEOHead
        title="Ask Rich Anything | Neurodiversity Global"
        description="Ask Rich Ferriman, neurodiversity expert, anything about neurodiversity at work. Search our knowledge base or submit your own question."
        path="/ask-rich"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <Sparkles size={18} className="text-accent" />
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent">
                Ask Rich Anything
              </p>
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08]">
              Your neurodiversity questions, answered by Rich.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-[58ch]">
              Rich is our co-founder and resident neurodiversity-in-work expert. Even if you're not looking for training but have a question about neurodiversity at work — ask! Our knowledge base is continually updated, but if you can't find the answer you need, submit your question for Rich and the team to answer. Always strictly confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-warm-stone border-b border-border">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-10 lg:py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-xl text-foreground mb-4">Ask a question</h2>
            <form
              onSubmit={(e) => { e.preventDefault(); askRich(); }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. How do I ask for reasonable adjustments at work?"
                className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                disabled={isStreaming}
              />
              <button
                type="submit"
                disabled={!query.trim() || isStreaming}
                className="px-5 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 flex items-center gap-2"
              >
                {isStreaming ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                Ask Rich
              </button>
            </form>

            {/* Answer */}
            {answer && (
              <div ref={answerRef} className="mt-8 rounded-xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                    <Sparkles size={14} className="text-accent" />
                  </div>
                  <p className="font-display font-bold text-sm text-foreground">Rich says</p>
                </div>
                <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
                  <ReactMarkdown>{answer}</ReactMarkdown>
                </div>
                {isStreaming && (
                  <div className="mt-3 flex items-center gap-2 text-muted-foreground text-xs">
                    <Loader2 size={12} className="animate-spin" />
                    Thinking…
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Browse Q&A */}
      <section className="bg-cool-blue py-14 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
            Browse the knowledge base
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Questions and answers personally written by Rich Ferriman.
          </p>

          {/* Tag filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedTag(null)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                  !selectedTag ? "bg-accent text-accent-foreground border-accent" : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                    tag === selectedTag ? "bg-accent text-accent-foreground border-accent" : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <Tag size={10} />
                  {tag}
                </button>
              ))}
            </div>
          )}

          {filteredItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">No Q&A items yet. Check back soon — the knowledge base is being built.</p>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <details key={item.id} className="rounded-xl border border-border bg-card group">
                  <summary className="px-6 py-5 cursor-pointer font-display font-semibold text-foreground text-sm leading-snug list-none flex items-start gap-3 hover:bg-muted/50 transition-colors rounded-xl">
                    <span className="text-accent mt-0.5 shrink-0">Q.</span>
                    <span>{item.question}</span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
                      <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </div>
                    {item.tags?.length > 0 && (
                      <div className="flex gap-1.5 mt-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-muted text-muted-foreground font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit question */}
      <section className="bg-primary text-primary-foreground py-14 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <Lock size={20} className="mx-auto text-accent mb-4" />
            <h2 className="font-display font-bold text-xl md:text-2xl mb-3">
              Can't find your answer?
            </h2>
            <p className="text-primary-foreground/70 text-sm mb-8 max-w-[48ch] mx-auto leading-relaxed">
              Submit your question for Rich and the team to answer personally. All submissions are strictly confidential.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
                <Sparkles size={24} className="text-accent mx-auto mb-3" />
                <p className="font-display font-bold text-lg">Thank you!</p>
                <p className="text-primary-foreground/70 text-sm mt-2">
                  Your question has been received. Rich or the team will review it and the answer will appear in the knowledge base.
                </p>
              </div>
            ) : (
              <div className="text-left space-y-4">
                <textarea
                  value={submitQ}
                  onChange={(e) => setSubmitQ(e.target.value)}
                  placeholder="Type your question here…"
                  rows={3}
                  className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.06] px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <input
                  type="email"
                  value={submitEmail}
                  onChange={(e) => setSubmitEmail(e.target.value)}
                  placeholder="Your email (optional — if you'd like us to notify you)"
                  className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.06] px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={submitQuestion}
                  disabled={!submitQ.trim() || submitting}
                  className="w-full px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 flex items-center justify-center gap-2"
                >
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  Submit question
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AskRich;
