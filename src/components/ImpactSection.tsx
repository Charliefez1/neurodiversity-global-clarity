const outcomes = [
  {
    metric: "40%",
    label: "reduction in neurodivergent employee turnover reported by clients within 12 months",
  },
  {
    metric: "3×",
    label: "faster reasonable adjustment response times after implementing our frameworks",
  },
  {
    metric: "60%",
    label: "decrease in neurodiversity-related grievances among trained management teams",
  },
  {
    metric: "92%",
    label: "of participants rate our training as directly applicable to their role",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            Outcomes
          </p>
          <h2 id="impact-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
            What changes when organisations work with us
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[55ch]">
            We measure what matters — performance, retention, risk, and culture. Not just training completion rates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
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

        <p className="mt-6 text-xs text-muted-foreground opacity-70">
          Figures are indicative and based on aggregated client-reported data. Individual outcomes vary by context and scope.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
