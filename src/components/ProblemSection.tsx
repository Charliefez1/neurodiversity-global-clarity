import { AlertTriangle, TrendingDown, Lightbulb } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import challengeStats from "@/assets/challenge-stats.png";
import challengeBg from "@/assets/challenge-bg.png";

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
    <section
      id="problem"
      className="relative bg-cover bg-top bg-no-repeat py-20 lg:py-28"
      style={{ backgroundImage: `url(${challengeBg})` }}
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="max-w-2xl">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              The challenge
            </p>
            <h2 id="problem-heading" className="font-display font-bold text-lg md:text-xl text-white leading-tight">
              Most organisations treat neurodiversity as a training issue. We treat it as infrastructure.
            </h2>
            {mode === "read" && (
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-[55ch]">
                That means inclusion is designed into operations, tied to performance and risk, owned by leadership, and measured, reviewed, and improved over time.
              </p>
            )}
            {mode === "listen" && (
              <div className="mt-4">
                <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={challengeStats}
              alt="Training statistics dashboard showing neurodiversity workshop engagement and a team video call"
              className="rounded-xl shadow-md w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-white/10 bg-primary p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-4 leading-snug">{p.title}</h3>

              {mode === "scan" ? (
                <p className="text-white/70 text-sm leading-relaxed">{p.summary}</p>
              ) : mode === "read" ? (
                <ul className="space-y-2.5">
                  {p.points.map((point, i) => (
                    <li key={i} className="text-white/70 text-xs leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-white/70 text-sm leading-relaxed">{p.summary}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
