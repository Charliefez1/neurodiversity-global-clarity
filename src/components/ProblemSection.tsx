import { AlertTriangle, TrendingDown, Lightbulb } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const problems = [
  {
    icon: AlertTriangle,
    title: "Systems designed for the neurotypical majority",
    summary: "Recruitment, performance management, and workplace norms assume one way of thinking and penalise the rest.",
    points: [
      "Recruitment filters out neurodivergent candidates before they start.",
      "Performance management penalises different working styles.",
      "Workplace norms assume one way of thinking and punish the rest.",
    ],
  },
  {
    icon: TrendingDown,
    title: "The cost of inaction is measurable",
    summary: "Tribunal claims are rising, talent leaves when adjustments fail, and disengagement increases where systems are misaligned.",
    points: [
      "Employment tribunal claims involving neurodiversity are rising year on year.",
      "Talented employees leave when adjustments fail or never arrive.",
      "Sickness absence and disengagement increase where systems are misaligned.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Awareness training alone changes nothing",
    summary: "Most organisations have ticked the awareness box but haven't changed how they recruit, manage, or design work.",
    points: [
      "Most organisations have ticked the awareness box.",
      "Very few have changed how they recruit, manage, or design work.",
      "The gap between intention and impact is where we operate.",
    ],
  },
];

const sectionAudioText = "The challenge. Most organisations treat neurodiversity as a training issue. We treat it as infrastructure. Systems designed for the neurotypical majority filter out neurodivergent candidates, penalise different working styles, and assume one way of thinking. The cost of inaction is measurable: tribunal claims are rising, talent leaves, and disengagement increases. Awareness training alone changes nothing. The gap between intention and impact is where we operate.";

const ProblemSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section className="py-24 lg:py-32 overflow-hidden" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Big dramatic statement */}
        <FadeIn>
          <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-4">
            The challenge
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 id="problem-heading" className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] max-w-4xl">
            Most organisations treat neurodiversity as a training issue.{" "}
            <span className="text-accent">We treat it as infrastructure.</span>
          </h2>
        </FadeIn>
        {mode === "read" && (
          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[55ch]">
              That means inclusion is designed into operations, tied to performance and risk, owned by leadership, and measured, reviewed, and improved over time.
            </p>
          </FadeIn>
        )}
        {mode === "listen" && (
          <div className="mt-4">
            <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
          </div>
        )}

        {/* Cards — staggered heights, not uniform */}
        <StaggerContainer className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 items-start" staggerDelay={0.15}>
          {problems.map((p, i) => (
            <StaggerItem key={p.title} className={i === 1 ? "md:mt-8" : ""}>
              <article className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <p.icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-card-foreground mb-4 leading-snug">{p.title}</h3>

                {mode === "scan" ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
                ) : mode === "read" ? (
                  <ul className="space-y-3">
                    {p.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2.5">
                        <span className="block w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProblemSection;
