import { Accessibility, Eye, Heart, Shield } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";

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

const sectionAudioText = "What neuroinclusion means to us. Inclusion is not comfort, it is clarity. We build environments where people can say 'this is me' without fear. We are accessible by design, transparent and honest, and led by lived experience with over 20 years of delivery across 1,000 projects.";

const AccessibilitySection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="values" className="bg-secondary py-16 lg:py-20" aria-labelledby="values-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="lg:flex lg:items-start lg:gap-16">
          <div className="max-w-md mb-10 lg:mb-0 lg:shrink-0">
            <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
              What neuroinclusion means to us
            </p>
            <h2 id="values-heading" className="font-display font-extrabold text-2xl md:text-3xl text-secondary-foreground leading-tight">
              Inclusion is not comfort. It is clarity.
            </h2>
            {mode === "read" && (
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                We build environments where people can say, "This is me," without fear.
              </p>
            )}
            {mode === "listen" && (
              <div className="mt-4">
                <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
              </div>
            )}
            {mode !== "scan" && (
              <ul className="mt-5 space-y-2">
                {inclusionMeans.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 flex-1">
            {values.map((v) => (
              <div key={v.title}>
                <v.icon size={22} className="text-accent mb-3" aria-hidden="true" />
                <h3 className="font-display font-bold text-sm text-secondary-foreground mb-1.5">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
