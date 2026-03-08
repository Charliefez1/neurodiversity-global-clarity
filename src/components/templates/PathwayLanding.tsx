import { useState, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowRight, Send, Loader2, Headset } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import MultiCTABar from "@/components/MultiCTABar";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/components/JsonLd";
import { NEURO_COLOURS } from "@/data/neuroColours";

const ASK_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pathway-ask`;

interface PathwayLandingProps {
  audience: "employers" | "public-sector" | "parents";
  badge: string;
  title: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  /** Persona name shown in responses */
  persona: string;
  /** WhatsApp number with country code, no spaces */
  whatsappNumber: string;
  /** Placeholder prompts for the search box */
  placeholders: string[];
  /** Additional page content below the core sections */
  children?: ReactNode;
}

const PathwayLanding = ({
  audience,
  badge,
  title,
  heroDescription,
  seoTitle,
  seoDescription,
  breadcrumbLabel,
  breadcrumbPath,
  persona,
  whatsappNumber,
  placeholders,
  children,
}: PathwayLandingProps) => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!query.trim() || isStreaming) return;
    setAnswer("");
    setIsStreaming(true);
    setHasAsked(true);

    try {
      const resp = await fetch(ASK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ question: query.trim(), audience }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong." }));
        setAnswer(err.error || "Something went wrong. Please try again.");
        setIsStreaming(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              accumulated += content;
              setAnswer(accumulated);
            }
          } catch {
            // partial JSON, ignore
          }
        }
      }
    } catch {
      setAnswer("Sorry, something went wrong. Please try again or contact us directly.");
    }
    setIsStreaming(false);
  };

  const ctaItems = [
    {
      icon: Phone,
      label: "Book a discovery call",
      description: "30 mins, no obligation",
      href: "mailto:hello@neurodiversityglobal.com?subject=Discovery%20call%20request",
      colour: NEURO_COLOURS[0],
    },
    {
      icon: Mail,
      label: "Send us a message",
      description: "We'll reply within 24 hours",
      href: "/feedback",
      colour: NEURO_COLOURS[2],
      isRoute: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp us",
      description: "Chat with the team",
      href: `https://wa.me/${whatsappNumber}`,
      colour: NEURO_COLOURS[3],
    },
    {
      icon: Headset,
      label: "Live chat",
      description: "See if we're online",
      href: "#tawk-chat",
      colour: NEURO_COLOURS[4],
      isTawk: true,
    },
  ];

  const placeholderIndex = Math.floor(Date.now() / 8000) % placeholders.length;

  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} path={breadcrumbPath} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: breadcrumbLabel, url: breadcrumbPath }])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]} />

      <main>
        <PageHero badge={badge} title={title} description={heroDescription} />

        {/* ── In your own words search ── */}
        <section className="bg-warm-stone py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">In your own words</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                Tell us what you need — {persona} will help
              </h2>
              <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                Describe your situation in your own words. {persona} from our team will give you a personal, thoughtful answer.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholders[placeholderIndex]}
                  rows={3}
                  className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 resize-none transition-all"
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAsk(); } }}
                />
                <button
                  onClick={handleAsk}
                  disabled={!query.trim() || isStreaming}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isStreaming ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {isStreaming ? "Thinking…" : "Ask"}
                </button>
              </div>

              {hasAsked && (
                <div ref={answerRef} className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-display font-bold text-xs text-accent">{persona[0]}</span>
                    </div>
                    <span className="font-display font-bold text-sm text-foreground">{persona}</span>
                  </div>
                  {answer ? (
                    <div className="prose prose-sm max-w-none text-foreground [&>p]:mb-3 [&>ul]:mb-3 [&>ol]:mb-3">
                      <ReactMarkdown>{answer}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-sm">{persona} is thinking…</span>
                    </div>
                  )}
                  {!isStreaming && answer && (
                    <p className="mt-4 text-xs text-muted-foreground">
                      This is AI-generated guidance from our team's expertise — not medical or legal advice.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Ask Rich ── */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Knowledge base</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-primary-foreground">
                Ask Rich about neurodiversity
              </h2>
              <p className="mt-3 text-primary-foreground/75 text-base leading-relaxed">
                Rich is our co-founder and neurodiversity-in-work expert with 20+ years of experience.
                Ask any question — our knowledge base has 60+ expert answers, and if yours isn't there, submit it.
              </p>
              <Link
                to="/ask-rich"
                className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[hsl(20,100%,55%)] text-white font-display font-bold text-sm shadow-lg shadow-[hsl(20,100%,55%)]/25 hover:shadow-xl hover:shadow-[hsl(20,100%,55%)]/40 hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={18} />
                Ask Rich Anything
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Contact CTAs ── */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Get in touch</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                Talk to a real person
              </h2>
              <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                We're a small, specialist team. Every conversation matters to us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {ctaItems.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={cta.isTawk ? (e) => {
                    e.preventDefault();
                    // Tawk.to toggle
                    if (typeof (window as any).Tawk_API !== "undefined") {
                      (window as any).Tawk_API.toggle();
                    }
                  } : undefined}
                  className="rounded-xl border-2 border-border bg-card p-5 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all group"
                  style={{ borderLeftColor: cta.colour, borderLeftWidth: 4 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cta.colour}20`, color: cta.colour }}
                  >
                    <cta.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm text-foreground leading-tight">{cta.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cta.description}</p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Extra content from each page ── */}
        {children}

        <MultiCTABar />
      </main>
      <Footer />
    </>
  );
};

export default PathwayLanding;
