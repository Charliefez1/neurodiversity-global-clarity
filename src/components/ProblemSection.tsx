import { AlertTriangle, TrendingDown, Lightbulb } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Systems designed for the neurotypical majority",
    points: [
      "Recruitment filters out neurodivergent candidates before they start.",
      "Performance management penalises different working styles.",
      "Workplace norms assume one way of thinking — and punish the rest.",
    ],
  },
  {
    icon: TrendingDown,
    title: "The cost of inaction is measurable",
    points: [
      "Employment tribunal claims involving neurodiversity are rising year on year.",
      "Talented employees leave when adjustments fail or never arrive.",
      "Sickness absence and disengagement increase where systems are misaligned.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Awareness training alone changes nothing",
    points: [
      "Most organisations have ticked the awareness box.",
      "Very few have changed how they recruit, manage, or design work.",
      "The gap between intention and impact is where we operate.",
    ],
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            The challenge
          </p>
          <h2 id="problem-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
            Most organisations approach neurodiversity as training. We approach it as infrastructure.
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[55ch]">
            That means inclusion is designed into operations, tied to performance and risk, owned by leadership, and measured, reviewed, and improved over time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-card p-7 lg:p-8"
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-card-foreground mb-4 leading-snug">{p.title}</h3>
              <ul className="space-y-2.5">
                {p.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
