import { Accessibility, Eye, Heart } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const values = [
  {
    icon: Accessibility,
    title: "Accessible by design",
    description: "Our materials, delivery, and digital platforms are built for cognitive accessibility from the start.",
  },
  {
    icon: Eye,
    title: "Transparent and honest",
    description: "Clear about what we do, what it costs, and what to expect. No hidden agendas.",
  },
  {
    icon: Heart,
    title: "Led by lived experience",
    description: "Founded on lived experience and backed by 20+ years of delivery. We have led over 1,000 projects across public, private, and education sectors.",
  },
];

const inclusionMeans = [
  "Everyone has language",
  "Everyone has agency",
  "Everyone is treated with dignity, even when it is messy",
  "Everyone is invited into the conversation, not forced into silence",
];

const sectionAudioText = "What neuroinclusion means to us. Inclusion is not comfort, it is clarity. We build environments where people can say 'this is me' without fear.";

const AccessibilitySection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="values" className="bg-secondary/30 py-24 lg:py-32 overflow-hidden" aria-labelledby="values-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Big manifesto-style statement */}
        <FadeIn>
          <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-4">
            What neuroinclusion means to us
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 id="values-heading" className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] max-w-3xl">
            Inclusion is not comfort.{" "}
            <span className="text-accent">It is clarity.</span>
          </h2>
        </FadeIn>

        {mode === "read" && (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[48ch]">
              We build environments where people can say, "This is me," without fear.
            </p>
          </FadeIn>
        )}
        {mode === "listen" && (
          <div className="mt-4">
            <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
          </div>
        )}

        {mode !== "scan" && (
          <FadeIn delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {inclusionMeans.map((item, i) => (
                <li key={i} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground font-medium shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        {/* Value cards — horizontal on desktop */}
        <StaggerContainer className="mt-16 grid lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="rounded-3xl bg-card border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AccessibilitySection;
