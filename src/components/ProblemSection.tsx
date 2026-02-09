import { AlertTriangle, TrendingDown, Lightbulb } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Current systems weren't designed for neurodivergent people",
    description:
      "Recruitment, performance management, and workplace design follow neurotypical norms. Neurodivergent employees are expected to adapt — or leave.",
  },
  {
    icon: TrendingDown,
    title: "The cost of getting this wrong is significant",
    description:
      "Tribunal claims are rising. Talent leaves. Sickness absence increases. Reasonable adjustment processes fail. Organisations carry avoidable risk.",
  },
  {
    icon: Lightbulb,
    title: "Awareness is not the same as change",
    description:
      "Most organisations have completed awareness training. Very few have changed how they recruit, manage, or design work. The gap between intention and impact is where we work.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-3">
            The challenge
          </p>
          <h2 id="problem-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Why awareness alone isn't working
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Organisations are spending more on neurodiversity than ever before. Yet outcomes for neurodivergent employees remain poor. Here's why.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-card-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
