import { useState } from "react";
import { MessageSquareText, X, Send, ArrowRight, Mail, Phone, ExternalLink, CheckCircle2, Loader2, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const quickButtons = [
  "We need neurodiversity awareness training for our team",
  "We need 20 champions to be trained on neurodiversity in work",
  "We are looking for a keynote speaker",
  "Do you do lunch and learns?",
  "How much does a session cost?",
  "Are you free on the 15th?",
];

interface BestFitItem {
  title: string;
  why: string;
  link: string;
}

interface Recommendations {
  what_i_heard: string;
  recommended_next_step: string;
  best_fit: BestFitItem[];
  why_these: string | null;
  success_looks_like: string[];
  clarifying_question: string | null;
}

type ConciergeState = "input" | "loading" | "results" | "clarify" | "email-form" | "email-sent";

const Concierge = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ConciergeState>("input");
  const [userInput, setUserInput] = useState("");
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [clarifyQuestion, setClarifyQuestion] = useState("");
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const reset = () => {
    setState("input");
    setUserInput("");
    setRecommendations(null);
    setClarifyQuestion("");
    setConversationHistory([]);
    setFirstName("");
    setEmail("");
  };

  const handleSubmit = async (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setState("loading");
    const fullMessage = [...conversationHistory, trimmed].join("\n\nAdditional context: ");
    setConversationHistory((prev) => [...prev, trimmed]);

    try {
      const { data, error } = await supabase.functions.invoke("concierge", {
        body: { message: fullMessage },
      });

      if (error) throw error;

      if (data.error) {
        toast({ title: "Something went wrong", description: data.error, variant: "destructive" });
        setState("input");
        return;
      }

      if (data.clarifying_question && !data.what_i_heard) {
        setClarifyQuestion(data.clarifying_question);
        setState("clarify");
      } else {
        setRecommendations(data);
        setState("results");
      }
    } catch (e: any) {
      console.error("Concierge error:", e);
      toast({
        title: "Unable to get recommendations",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      setState("input");
    }
  };

  const handleSendToInbox = async () => {
    if (!firstName.trim() || !email.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({ title: "Invalid email", description: "Please enter a valid work email address.", variant: "destructive" });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("send-recommendations", {
        body: {
          firstName: firstName.trim(),
          email: email.trim(),
          originalInput: conversationHistory.join(" — "),
          recommendations,
        },
      });

      if (error) throw error;
      setState("email-sent");
    } catch (e: any) {
      console.error("Send error:", e);
      toast({
        title: "Could not send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent animate-in slide-in-from-bottom-4"
          aria-label="Open AI concierge"
        >
          <MessageSquareText size={18} aria-hidden="true" />
          Tell us why you're here
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:pr-6 sm:pb-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative w-full sm:w-[440px] max-h-[90vh] bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-300">
            {/* Header */}
            <div className="bg-primary px-6 py-5 flex items-start justify-between shrink-0">
              <div>
                <h2 className="font-display font-bold text-lg text-primary-foreground">Tell us why you're here</h2>
                <p className="text-primary-foreground/60 text-xs mt-1">We'll point you to the right options in seconds.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors p-1"
                aria-label="Close concierge"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {state === "input" && <InputView userInput={userInput} setUserInput={setUserInput} onSubmit={handleSubmit} />}
              {state === "loading" && <LoadingView />}
              {state === "clarify" && (
                <ClarifyView
                  question={clarifyQuestion}
                  userInput={userInput}
                  setUserInput={setUserInput}
                  onSubmit={handleSubmit}
                />
              )}
              {state === "results" && recommendations && (
                <ResultsView
                  recommendations={recommendations}
                  onSendToInbox={() => setState("email-form")}
                  onReset={reset}
                />
              )}
              {state === "email-form" && (
                <EmailFormView
                  firstName={firstName}
                  setFirstName={setFirstName}
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleSendToInbox}
                  onBack={() => setState("results")}
                />
              )}
              {state === "email-sent" && <EmailSentView onReset={reset} onClose={() => setOpen(false)} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ---- Sub-views ---- */

const InputView = ({
  userInput,
  setUserInput,
  onSubmit,
}: {
  userInput: string;
  setUserInput: (v: string) => void;
  onSubmit: (v: string) => void;
}) => (
  <div className="space-y-5">
    <div>
      <label htmlFor="concierge-input" className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-2">
        Write it in your own words
      </label>
      <textarea
        id="concierge-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Example: I need manager training for a logistics site. Performance issues are rising and disclosure is becoming more common."
        rows={4}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none leading-relaxed"
      />
    </div>

    <button
      onClick={() => onSubmit(userInput)}
      disabled={!userInput.trim()}
      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
    >
      Get my recommendations
      <ArrowRight size={16} aria-hidden="true" />
    </button>

    <div>
      <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">Or choose a starting point</p>
      <div className="flex flex-wrap gap-2">
        {quickButtons.map((label) => (
          <button
            key={label}
            onClick={() => {
              setUserInput(label);
              onSubmit(label);
            }}
            className="px-3 py-2 rounded-md border border-border bg-card text-xs text-foreground hover:bg-muted transition-colors text-left leading-snug"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const LoadingView = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-4">
    <Loader2 size={28} className="text-accent animate-spin" />
    <p className="font-display font-semibold text-sm text-muted-foreground">Analysing your needs…</p>
    <p className="text-xs text-muted-foreground/60">Reasoning across the full Neurodiversity Global site.</p>
  </div>
);

const ClarifyView = ({
  question,
  userInput,
  setUserInput,
  onSubmit,
}: {
  question: string;
  userInput: string;
  setUserInput: (v: string) => void;
  onSubmit: (v: string) => void;
}) => (
  <div className="space-y-5">
    <div className="rounded-lg bg-secondary p-4 border border-border">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-accent mb-2">Quick question</p>
      <p className="text-sm text-foreground leading-relaxed">{question}</p>
    </div>
    <div>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Your answer…"
        rows={3}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
      />
    </div>
    <button
      onClick={() => onSubmit(userInput)}
      disabled={!userInput.trim()}
      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
    >
      Continue
      <ArrowRight size={16} aria-hidden="true" />
    </button>
  </div>
);

const ResultsView = ({
  recommendations,
  onSendToInbox,
  onReset,
}: {
  recommendations: Recommendations;
  onSendToInbox: () => void;
  onReset: () => void;
}) => (
  <div className="space-y-6">
    {/* What I heard */}
    <div>
      <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground mb-1.5">What I heard</p>
      <p className="text-sm text-foreground leading-relaxed">{recommendations.what_i_heard}</p>
    </div>

    {/* Recommended next step */}
    <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-accent mb-1.5">Recommended next step</p>
      <p className="text-sm text-foreground font-semibold leading-relaxed">{recommendations.recommended_next_step}</p>
    </div>

    {/* Best fit */}
    <div>
      <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">Best fit information</p>
      <div className="space-y-3">
        {recommendations.best_fit?.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="block rounded-lg border border-border bg-card p-4 hover:border-accent/40 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-display font-bold text-sm text-card-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.why}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-0.5" />
            </div>
          </a>
        ))}
      </div>
      {recommendations.why_these && (
        <p className="text-xs text-muted-foreground/70 mt-2 italic">{recommendations.why_these}</p>
      )}
    </div>

    {/* What success looks like */}
    {recommendations.success_looks_like?.length > 0 && (
      <div>
        <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground mb-2">What success looks like</p>
        <ul className="space-y-1.5">
          {recommendations.success_looks_like.map((item, i) => (
            <li key={i} className="text-sm text-foreground leading-relaxed flex gap-2">
              <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Action buttons */}
    <div className="space-y-2 pt-2">
      <a
        href="mailto:hello@neurodiversityglobal.com?subject=Discovery%20Call%20Request"
        className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity"
      >
        <Phone size={15} aria-hidden="true" />
        Book a 30-minute discovery call
      </a>
      <button
        onClick={onSendToInbox}
        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:bg-muted transition-colors"
      >
        <Mail size={15} aria-hidden="true" />
        Send this to my inbox
      </button>
      <div className="flex gap-2">
        <a
          href="mailto:rich@neurodiversityglobal.com"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-xs hover:bg-muted transition-colors"
        >
          <Mail size={13} aria-hidden="true" />
          Email Rich
        </a>
        <a
          href="mailto:charlie@neurodiversityglobal.com"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-xs hover:bg-muted transition-colors"
        >
          <Mail size={13} aria-hidden="true" />
          Email Charlie
        </a>
        <a
          href="tel:+441onal"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-xs hover:bg-muted transition-colors"
        >
          <Phone size={13} aria-hidden="true" />
          Call us
        </a>
      </div>
    </div>

    <button
      onClick={onReset}
      className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2"
    >
      Start again
    </button>
  </div>
);

const EmailFormView = ({
  firstName,
  setFirstName,
  email,
  setEmail,
  onSubmit,
  onBack,
}: {
  firstName: string;
  setFirstName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}) => (
  <div className="space-y-5">
    <div>
      <p className="font-display font-bold text-sm text-foreground mb-1">Send to your inbox</p>
      <p className="text-xs text-muted-foreground">We'll email your personalised recommendations.</p>
    </div>

    <div className="space-y-3">
      <div>
        <label htmlFor="concierge-name" className="block text-xs font-display font-semibold text-foreground mb-1.5">
          First name
        </label>
        <input
          id="concierge-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
          maxLength={100}
        />
      </div>
      <div>
        <label htmlFor="concierge-email" className="block text-xs font-display font-semibold text-foreground mb-1.5">
          Work email address
        </label>
        <input
          id="concierge-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
          maxLength={255}
        />
      </div>
    </div>

    <button
      onClick={onSubmit}
      disabled={!firstName.trim() || !email.trim()}
      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
    >
      <Send size={15} aria-hidden="true" />
      Send recommendations
    </button>

    <button
      onClick={onBack}
      className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
    >
      ← Back to recommendations
    </button>
  </div>
);

const EmailSentView = ({ onReset, onClose }: { onReset: () => void; onClose: () => void }) => (
  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
      <CheckCircle2 size={28} className="text-accent" />
    </div>
    <div>
      <p className="font-display font-bold text-base text-foreground">Sent successfully</p>
      <p className="text-sm text-muted-foreground mt-1">Check your inbox for your personalised recommendations.</p>
    </div>
    <div className="flex gap-3 mt-4">
      <button
        onClick={onReset}
        className="px-5 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:bg-muted transition-colors"
      >
        Start again
      </button>
      <button
        onClick={onClose}
        className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Close
      </button>
    </div>
  </div>
);

export default Concierge;
