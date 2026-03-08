import { useState, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowRight, Send, Loader2, Headset, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/components/JsonLd";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";

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
  persona: string;
  whatsappNumber: string;
  placeholders: string[];
  heroImage?: string;
  heroImageAlt?: string;
  /** When true, hero uses split layout with image on right instead of background overlay */
  heroVariant?: "background" | "split";
  /** Custom hero CTA buttons: overrides default buttons */
  heroCTAs?: ReactNode;
  /** Hide the "In your own words" AI search section */
  hideAskSection?: boolean;
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
  heroImage,
  heroImageAlt,
  heroVariant = "background",
  heroCTAs,
  hideAskSection = false,
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
            // partial JSON
          }
        }
      }
    } catch {
      setAnswer("Sorry, something went wrong. Please try again or contact us directly.");
    }
    setIsStreaming(false);
  };

  const placeholderIndex = Math.floor(Date.now() / 8000) % placeholders.length;

  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} path={breadcrumbPath} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: breadcrumbLabel, url: breadcrumbPath }])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]} />

      <main>
        {/* ═══════════════════════════════════════════
            HERO: full-bleed image with gradient overlay
            ═══════════════════════════════════════════ */}
        {heroVariant === "split" ? (
          /* Split hero: text left, image right */
          <section className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-wide px-6 lg:px-10 py-20 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-5">
                    {badge}
                  </p>
                  <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
                    {title}
                  </h1>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-primary-foreground/80 max-w-[50ch]">
                    {heroDescription}
                  </p>
                  {heroCTAs && <div className="mt-8 flex flex-wrap gap-3">{heroCTAs}</div>}
                  <img
                    src={ndgLogo}
                    alt="Neurodiversity Global"
                    className="mt-10 h-10 md:h-12 w-auto opacity-60"
                    loading="lazy"
                  />
                </div>
                {heroImage && (
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={heroImage}
                      alt={heroImageAlt || ""}
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          /* Background hero: original layout */
          <section className="relative bg-primary text-primary-foreground overflow-hidden">
          {heroImage && (
            <img
              src={heroImage}
              alt={heroImageAlt || ""}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40" />
          <div className="relative mx-auto max-w-wide px-6 lg:px-10 py-20 lg:py-32">
            <div className="max-w-2xl">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-5">
                {badge}
              </p>
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
                {title}
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-primary-foreground/80 max-w-[50ch]">
                {heroDescription}
              </p>
              {heroCTAs ? (
                <div className="mt-8 flex flex-wrap gap-3">{heroCTAs}</div>
              ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ask-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
                >
                  <Sparkles size={16} />
                  Tell us what you need
                </a>
                <Link
                  to="/ask-rich"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(20,100%,55%)] text-white font-display font-bold text-sm shadow-lg shadow-[hsl(20,100%,55%)]/25 hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  <MessageCircle size={16} />
                  Ask Rich anything
                </Link>
              </div>
              )}
              <img
                src={ndgLogo}
                alt="Neurodiversity Global"
                className="mt-10 h-10 md:h-12 w-auto opacity-60"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        )}

        {/* ═══════════════════════════════════════════
            IN YOUR OWN WORDS: conversational AI search
            ═══════════════════════════════════════════ */}
        {!hideAskSection && (
        <section id="ask-section" className="bg-warm-stone py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
              {/* Left intro */}
              <div className="lg:sticky lg:top-28">
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                  In your own words
                </p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  Describe what you're dealing with.
                  <br />
                  <span className="text-accent">{persona} will help.</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[42ch]">
                  No jargon, no forms. Just tell us what's happening in your own words and {persona} from our team will give you a real, thoughtful answer.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-accent">{persona[0]}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{persona}</p>
                    <p className="text-xs text-muted-foreground">Neurodiversity Global</p>
                  </div>
                </div>
              </div>

              {/* Right — search + answer */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholders[placeholderIndex]}
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 resize-none transition-all"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAsk(); }
                    }}
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={handleAsk}
                      disabled={!query.trim() || isStreaming}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isStreaming ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                      {isStreaming ? "Thinking…" : `Ask ${persona}`}
                    </button>
                  </div>
                </div>

                {hasAsked && (
                  <div ref={answerRef} className="mt-6 rounded-2xl border border-accent/20 bg-card p-6 shadow-md">
                    <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-border">
                      <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                        <span className="font-display font-bold text-xs text-accent">{persona[0]}</span>
                      </div>
                      <div>
                        <span className="font-display font-bold text-sm text-foreground">{persona}</span>
                        <span className="text-xs text-muted-foreground ml-2">Neurodiversity Global</span>
                      </div>
                    </div>
                    {answer ? (
                      <div className="prose prose-sm max-w-none text-foreground [&>p]:mb-3 [&>ul]:mb-3 [&>ol]:mb-3 [&>ul>li]:text-muted-foreground [&>p:first-child]:font-medium">
                        <ReactMarkdown>{answer}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-muted-foreground py-4">
                        <Loader2 size={16} className="animate-spin" />
                        <span className="text-sm">{persona} is thinking…</span>
                      </div>
                    )}
                    {!isStreaming && answer && (
                      <p className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
                        This is AI-generated guidance from our team's expertise — not medical or legal advice.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        )}

        {children}

        {/* ═══════════════════════════════════════════
            ASK RICH — knowledge base on navy
            ═══════════════════════════════════════════ */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                  Knowledge base
                </p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                  Got a question about neurodiversity at work?
                </h2>
                <p className="mt-4 text-primary-foreground/70 text-base leading-relaxed max-w-[48ch]">
                  Rich is our co-founder with 20+ years of neurodiversity expertise. Our knowledge base has 60+ expert answers — and if yours isn't there, submit it and Rich will answer personally.
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
              {/* Right side — example topics */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Reasonable adjustments",
                  "Workplace assessments",
                  "Disclosing neurodivergence",
                  "Manager conversations",
                  "Legal obligations",
                  "Building a strategy",
                ].map((topic) => (
                  <Link
                    key={topic}
                    to={`/ask-rich`}
                    className="rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground/80 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/20 transition-all font-display font-medium"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            GET IN TOUCH — contact CTAs
            ═══════════════════════════════════════════ */}
        <section className="bg-warm-stone py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="text-center mb-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                Get in touch
              </p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                Talk to a real person
              </h2>
              <p className="mt-3 text-muted-foreground text-base max-w-lg mx-auto">
                We're a small, specialist team. Every conversation matters to us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch">
              {([
                {
                  icon: Phone,
                  label: "Book a discovery call",
                  desc: "30 mins, no obligation",
                  href: "mailto:hello@neurodiversityglobal.com?subject=Discovery%20call%20request",
                  accent: "hsl(220,70%,55%)",
                  isRoute: false, isTawk: false, external: false,
                },
                {
                  icon: Mail,
                  label: "Contact us",
                  desc: "We'll reply within 24 hours",
                  href: "/feedback",
                  accent: "hsl(155,60%,42%)",
                  isRoute: true, isTawk: false, external: false,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp us",
                  desc: "Chat with the team",
                  href: `https://wa.me/${whatsappNumber}`,
                  accent: "hsl(270,55%,55%)",
                  isRoute: false, isTawk: false, external: true,
                },
                {
                  icon: Headset,
                  label: "Live chat",
                  desc: "See if we're online",
                  href: "#tawk",
                  accent: "hsl(40,90%,50%)",
                  isRoute: false, isTawk: true, external: false,
                },
              ]).map((cta) => {
                const card = (
                  <div className="rounded-xl bg-card border border-border p-5 flex items-center gap-4 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all h-full group">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cta.accent}18`, color: cta.accent }}
                    >
                      <cta.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-sm text-foreground leading-tight">{cta.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{cta.desc}</p>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                  </div>
                );

                if (cta.isRoute) return <Link key={cta.label} to={cta.href} className="block">{card}</Link>;
                if (cta.isTawk) return (
                  <button key={cta.label} onClick={() => { if (typeof (window as any).Tawk_API !== "undefined") (window as any).Tawk_API.toggle(); }} className="block text-left w-full">
                    {card}
                  </button>
                );
                return (
                  <a key={cta.label} href={cta.href} target={cta.external ? "_blank" : undefined} rel={cta.external ? "noopener noreferrer" : undefined} className="block">
                    {card}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  );
};

export default PathwayLanding;
