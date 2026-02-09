import { useState, useRef, useEffect } from "react";
import { Send, X, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/adhdi-ask`;

const sampleQuestions = [
  "What's the difference between ADHD and autism?",
  "How do I ask for reasonable adjustments at work?",
  "Can you be neurodivergent and not know it?",
];

const ADHDi = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Msg = { role: "user", content: trimmed };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          toast({ title: "Too many requests", description: "Please wait a moment and try again.", variant: "destructive" });
        } else if (resp.status === 402) {
          toast({ title: "Service temporarily unavailable", description: "Please try again later.", variant: "destructive" });
        } else {
          toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
        }
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      const upsertAssistant = (chunk: string) => {
        assistantSoFar += chunk;
        const content = assistantSoFar;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content } : m));
          }
          return [...prev, { role: "assistant", content }];
        });
      };

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
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error("ADHDi error:", e);
      toast({ title: "Connection error", description: "Please check your connection and try again.", variant: "destructive" });
    }

    setIsLoading(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Sparkles size={16} className="text-accent" aria-hidden="true" />
        Ask Rich Anything
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:pr-6 sm:pb-6">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative w-full sm:w-[480px] max-h-[85vh] bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-300">
        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              <h2 className="font-display font-bold text-lg text-primary-foreground">
                ADHDi — Ask Rich Anything
              </h2>
            </div>
            <p className="text-primary-foreground/60 text-xs mt-1.5 max-w-[34ch] leading-relaxed">
              Our neurodiversity expert Rich has compiled a huge amount of Q&A for you. Go on, ask a hard one!
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors p-1"
            aria-label="Close ADHDi"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-4 min-h-[200px]">
          {messages.length === 0 && !isLoading && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Ask anything about neurodiversity — ADHD, autism, dyslexia, workplace adjustments, legal rights, or anything else.
              </p>
              <div className="space-y-2">
                <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-muted-foreground">Try asking</p>
                {sampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full text-left px-3.5 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground hover:bg-muted transition-colors leading-snug"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-xl px-4 py-3 flex items-center gap-2">
                <Loader2 size={14} className="text-accent animate-spin" />
                <span className="text-sm text-muted-foreground">Thinking…</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-border px-4 py-3 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about neurodiversity…"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-40"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ADHDi;
