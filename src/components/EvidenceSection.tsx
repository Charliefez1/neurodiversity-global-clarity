import { Quote } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
  },
  {
    quote: "This changed how we design services and how our teams work together, not just what they know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better for neurodivergent people.",
    author: "Chief People Officer",
    org: "Global Technology Company",
  },
];

const logos = [
  "NHS", "Civil Service", "Deloitte", "Barclays", "KPMG", "Capita",
];

const sectionAudioText = "Evidence and trust. We're trusted by organisations including NHS, Civil Service, Deloitte, Barclays, KPMG, and Capita. Clients report remarkable impact on retention, changed service design, and genuine improvements for neurodivergent people, not just box-ticking.";

const EvidenceSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="evidence" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Industry Solutions
          </p>
          <h2 id="evidence-heading" className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
            Public sector, charity, blue light services, legal sector, big tech, engineering and manufacturing, software, facilities and construction
          </h2>
          {mode === "listen" && (
            <div className="mt-4">
              <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
            </div>
          )}
        </div>

        {/* Logo placeholders */}
        <div className="flex flex-wrap gap-4 mb-14 pb-10 border-b border-border" role="list" aria-label="Organisations we have worked with">
          {logos.map((name) => (
            <div
              key={name}
              role="listitem"
              className="px-5 py-2.5 rounded border border-border text-xs font-display font-semibold text-muted-foreground tracking-wide uppercase"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {mode === "scan" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-lg bg-card border border-border p-5">
                <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                <p className="text-xs text-muted-foreground/70 mt-2">— {t.author}, {t.org}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-lg bg-card border border-border p-7 flex flex-col"
              >
                <Quote size={20} className="text-accent mb-3 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">{t.quote}</p>
                <footer className="mt-5 pt-4 border-t border-border">
                  <p className="font-display font-semibold text-sm text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{t.org}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EvidenceSection;
