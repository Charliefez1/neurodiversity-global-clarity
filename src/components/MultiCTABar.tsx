import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, Calendar, ArrowRight } from "lucide-react";

interface MultiCTABarProps {
  variant?: "light" | "dark";
  /** Which CTAs to show. Defaults to all four. */
  show?: Array<"ask-rich" | "contact" | "discovery" | "taster">;
}

const ctas = [
  {
    id: "discovery" as const,
    label: "Book a discovery call",
    description: "30 minutes, no obligation",
    href: "mailto:hello@neurodiversityglobal.com",
    icon: Phone,
    style: "bg-accent text-accent-foreground shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 hover:scale-[1.02]",
  },
  {
    id: "taster" as const,
    label: "Free taster session",
    description: "Experience our approach first",
    href: "mailto:hello@neurodiversityglobal.com?subject=Free%20taster%20session%20enquiry",
    icon: Calendar,
    style: "bg-accent/10 text-accent border border-accent/25 shadow-md shadow-accent/10 hover:bg-accent/20 hover:shadow-lg hover:scale-[1.02]",
  },
  {
    id: "ask-rich" as const,
    label: "Ask Rich anything",
    description: "Get expert answers fast",
    href: "/ask-rich",
    icon: MessageCircle,
    isRoute: true,
    style: "bg-[hsl(20,100%,55%)] text-white shadow-md shadow-[hsl(20,100%,55%)]/25 hover:shadow-lg hover:shadow-[hsl(20,100%,55%)]/40 hover:scale-[1.02]",
  },
  {
    id: "contact" as const,
    label: "Email us directly",
    description: "hello@neurodiversityglobal.com",
    href: "mailto:hello@neurodiversityglobal.com",
    icon: Mail,
    style: "bg-card text-foreground border border-border shadow-md hover:shadow-lg hover:scale-[1.02]",
  },
];

const MultiCTABar = ({ variant = "light", show }: MultiCTABarProps) => {
  const visibleCTAs = show ? ctas.filter((c) => show.includes(c.id)) : ctas;
  const bgClass = variant === "dark" ? "bg-primary" : "bg-warm-stone";

  return (
    <section className={`${bgClass} py-12 lg:py-16`}>
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCTAs.map((cta) => {
            const inner = (
              <div
                className={`rounded-xl px-6 py-5 flex items-center gap-4 font-display font-bold text-sm transition-all duration-200 min-h-[80px] ${cta.style}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <cta.icon size={18} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="leading-tight">{cta.label}</p>
                  <p className="text-xs font-body font-normal opacity-75 mt-0.5">{cta.description}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 opacity-60" aria-hidden="true" />
              </div>
            );

            if (cta.isRoute) {
              return (
                <Link key={cta.id} to={cta.href} className="block">
                  {inner}
                </Link>
              );
            }
            return (
              <a key={cta.id} href={cta.href} className="block">
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MultiCTABar;
