import { Quote } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

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

const sectionAudioText = "Evidence and trust. We're trusted by organisations including NHS, Civil Service, Deloitte, Barclays, KPMG, and Capita.";

const EvidenceSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="evidence" className="bg-primary text-primary-foreground py-24 lg:py-32 overflow-hidden" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <FadeIn>
          <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Evidence & trust
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 id="evidence-heading" className="font-display font-extrabold text-4xl md:text-5xl leading-[1.08] max-w-3xl">
            Trusted by organisations that{" "}
            <span className="text-accent">take this seriously</span>
          </h2>
        </FadeIn>
        {mode === "listen" && (
          <div className="mt-4">
            <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
          </div>
        )}

        {/* Logo strip */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4 mt-12 mb-16 pb-12 border-b border-primary-foreground/10" role="list">
            {logos.map((name) => (
              <div
                key={name}
                role="listitem"
                className="px-6 py-3 rounded-full border border-primary-foreground/15 text-sm font-display font-semibold opacity-60 tracking-wide"
              >
                {name}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials — asymmetric layout */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 items-start" staggerDelay={0.15}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i} className={i === 0 ? "md:row-span-1" : i === 1 ? "md:-mt-4" : "md:mt-4"}>
              <blockquote className="rounded-3xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-8 flex flex-col hover:bg-primary-foreground/[0.1] transition-colors duration-300">
                <Quote size={24} className="text-accent mb-4 shrink-0" aria-hidden="true" />
                <p className="text-base leading-relaxed opacity-85 flex-1 italic">{t.quote}</p>
                <footer className="mt-6 pt-4 border-t border-primary-foreground/10">
                  <p className="font-display font-bold text-sm">{t.author}</p>
                  <p className="text-xs opacity-50 mt-0.5">{t.org}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EvidenceSection;
