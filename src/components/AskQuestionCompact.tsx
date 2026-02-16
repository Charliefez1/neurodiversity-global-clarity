import { useState } from "react";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  question: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Maximum 2000 characters"),
});

const AskQuestionCompact = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = schema.safeParse({ question: value });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setStatus("sending");
    const { error: dbError } = await supabase.from("user_questions").insert({
      question: result.data.question,
      page_submitted_from: location.pathname,
    });

    if (dbError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("sent");
    setValue("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  if (status === "sent") {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-center gap-3 shadow-md">
        <CheckCircle size={18} className="text-accent shrink-0" />
        <p className="text-sm font-display font-semibold text-accent">
          Thank you! Your comment has been submitted for review.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-4 shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <MessageCircle size={14} className="text-accent" />
        <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">
          Share your experience
        </span>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Share a comment, question, or lived experience..."
          className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          maxLength={2000}
          disabled={status === "sending"}
        />
        <button
          type="submit"
          disabled={status === "sending" || value.trim().length < 10}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/20 hover:shadow-lg transition-all disabled:opacity-50"
        >
          <Send size={14} />
          Send
        </button>
      </div>
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </form>
  );
};

export default AskQuestionCompact;
