import { TrendingUp, Shield, Users, BarChart3 } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Improved retention",
    description: "Organisations we work with report measurable reductions in turnover among neurodivergent employees within 12 months.",
  },
  {
    icon: Shield,
    title: "Reduced legal and compliance risk",
    description: "Proactive adjustments and informed management reduce tribunal exposure and strengthen duty of care.",
  },
  {
    icon: Users,
    title: "Stronger team performance",
    description: "When managers understand cognitive difference, teams communicate better, collaborate more effectively, and solve problems faster.",
  },
  {
    icon: BarChart3,
    title: "Measurable culture change",
    description: "We track outcomes — not just attendance. Our clients see shifts in engagement scores, adjustment request times, and employee confidence.",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-3">
            Impact
          </p>
          <h2 id="impact-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            What changes when organisations work with us
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We measure what matters. Our work shows up in performance, retention, risk reduction, and culture — not just in completed training hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="flex gap-5 p-6 rounded-lg border border-border bg-card"
            >
              <div className="w-11 h-11 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                <o.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-card-foreground mb-1">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
