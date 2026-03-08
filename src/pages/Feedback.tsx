import { useState, useEffect } from "react";
import { MessageSquare, Send, CheckCircle, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";


const feedbackSchema = z.object({
  feedback: z.string().trim().min(10, "Please write at least 10 characters").max(5000, "Maximum 5000 characters"),
  feedback_type: z.enum(["comment", "suggestion", "issue"]),
  name: z.string().trim().max(100).optional(),
});

interface FeedbackItem {
  id: string;
  feedback: string;
  feedback_type: string;
  name: string | null;
  admin_response: string | null;
  created_at: string;
}

const typeLabels: Record<string, { label: string; colour: string }> = {
  comment: { label: "Comment", colour: "bg-accent/10 text-accent" },
  suggestion: { label: "Suggestion", colour: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  issue: { label: "Issue", colour: "bg-destructive/10 text-destructive" },
};

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<"comment" | "suggestion" | "issue">("comment");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [items, setItems] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase
        .from("user_feedback")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .limit(30);
      if (data) setItems(data as FeedbackItem[]);
    };
    fetchItems();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = feedbackSchema.safeParse({
      feedback,
      feedback_type: feedbackType,
      name: name || undefined,
    });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setStatus("sending");
    const { error: dbError } = await supabase.from("user_feedback").insert({
      feedback: result.data.feedback,
      feedback_type: result.data.feedback_type,
      name: result.data.name || null,
    });

    if (dbError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("sent");
    setFeedback("");
    setName("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <main>
      <SEOHead
        title="Feedback, Suggestions and Issues | Neurodiversity Global"
        description="Share your feedback, suggestions, or report issues. We value every perspective in building better neuroinclusion."
        path="/feedback"
      />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare size={20} className="text-accent" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-primary-foreground/50">
              Your Voice
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
            Feedback, Suggestions and Issues
          </h1>
          <p className="text-base text-primary-foreground/70 max-w-content">
            Help us improve. Whether it is a comment, a feature suggestion, or something that is not working, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            {status === "sent" ? (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 flex items-center gap-3 shadow-md">
                <CheckCircle size={20} className="text-accent shrink-0" />
                <p className="text-sm font-display font-semibold text-accent">
                  Thank you! Your feedback has been submitted for review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 shadow-md space-y-4">
                <div>
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                    Type
                  </label>
                  <div className="flex gap-2">
                    {(["comment", "suggestion", "issue"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFeedbackType(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold transition-all ${
                          feedbackType === t
                            ? "bg-accent text-accent-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {typeLabels[t].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                    Your feedback
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what you think..."
                    rows={4}
                    maxLength={5000}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Anonymous if left blank"
                    maxLength={100}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    disabled={status === "sending"}
                  />
                </div>

                {error && <p className="text-xs text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "sending" || feedback.trim().length < 10}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/20 hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Send size={14} />
                  Submit Feedback
                </button>
              </form>
            )}
          </div>

          {items.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-lg mb-4">Community Feedback</h2>
              <div className="grid gap-4">
                {items.map((item) => {
                  const t = typeLabels[item.feedback_type] || typeLabels.comment;
                  return (
                    <div
                      key={item.id}
                      className="bg-card border border-border rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <User size={14} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-display font-bold px-2 py-0.5 rounded-full ${t.colour}`}>
                              {t.label}
                            </span>
                            {item.name && (
                              <span className="text-[11px] font-display font-semibold text-muted-foreground">
                                {item.name}
                              </span>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed">{item.feedback}</p>
                          {item.admin_response && (
                            <div className="mt-3 pl-4 border-l-2 border-accent/30">
                              <p className="text-xs font-display font-bold text-accent mb-1">Response</p>
                              <p className="text-sm text-muted-foreground">{item.admin_response}</p>
                            </div>
                          )}
                          <p className="text-[10px] text-muted-foreground mt-2">
                            {new Date(item.created_at).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      
      <Footer />
    </main>
  );
};

export default Feedback;
