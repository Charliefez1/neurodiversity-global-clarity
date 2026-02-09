import measuresOfSuccess from "@/assets/measures-of-success.png";

const outcomes = [
  {
    metric: "30–40%",
    label: "Research consistently shows neurodiverse teams in neuroinclusive environments are 30 to 40 percent more productive than those operating under traditional norms.",
  },
  {
    metric: "40%",
    label: "Reduction in neurodivergent employee turnover reported by clients within 12 months of implementation.",
  },
  {
    metric: "3×",
    label: "Faster reasonable adjustment response times after implementing our frameworks.",
  },
  {
    metric: "60%",
    label: "Decrease in neurodiversity-related grievances among trained management teams.",
  },
  {
    metric: "92%",
    label: "Of participants rate our training as directly applicable to their role.",
  },
];

const individualOutcomes = [
  "Practical strategies for managing work day to day",
  "Confidence to disclose without fear of negative impact",
  "Consistent, informed management support",
  "Reduced pressure to mask and self-manage constantly",
  "Systems and policies designed to remove barriers",
  "Visible, ongoing support that evolves as roles change",
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            Proven impact
          </p>
          <h2 id="impact-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
            One workforce, stronger together, where difference fuels performance rather than friction.
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[55ch]">
            We measure what matters — performance, retention, risk, and culture. Not just training completion rates. This is not one-off training. It is continuous optimisation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o) => (
            <div
              key={o.label}
              className="flex items-start gap-5 p-6 lg:p-7 rounded-lg border border-border bg-card"
            >
              <p className="font-display font-extrabold text-3xl md:text-4xl text-accent shrink-0 leading-none mt-0.5 min-w-[3.5rem]">
                {o.metric}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed pt-1">{o.label}</p>
            </div>
          ))}
        </div>

        {/* What changes for individuals */}
        <div className="mt-12 rounded-lg border border-accent/20 bg-accent/5 p-7 lg:p-8">
          <h3 className="font-display font-bold text-base text-foreground mb-5">What changes for individuals</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {individualOutcomes.map((item, i) => (
              <div key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="mt-12 flex justify-center">
          <img
            src={measuresOfSuccess}
            alt="Measures of success — pipeline growth, satisfaction score, and session completion"
            className="max-w-2xl w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>

        <p className="mt-6 text-xs text-muted-foreground opacity-70">
          Figures are indicative and based on aggregated client-reported data and published research. Individual outcomes vary by context and scope.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
