import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import measuresOfSuccess from "@/assets/measures-of-success.png";

const outcomes = [
  {
    metric: "30–40%",
    label: "Research consistently shows neurodiverse teams in neuroinclusive environments are 30 to 40 percent more productive than those operating under traditional norms.",
    short: "Neurodiverse teams are 30–40% more productive in inclusive environments.",
  },
  {
    metric: "40%",
    label: "Reduction in neurodivergent employee turnover reported by clients within 12 months of implementation.",
    short: "40% reduction in ND employee turnover within 12 months.",
  },
  {
    metric: "3×",
    label: "Faster reasonable adjustment response times after implementing our frameworks.",
    short: "3× faster reasonable adjustment response times.",
  },
  {
    metric: "60%",
    label: "Decrease in neurodiversity-related grievances among trained management teams.",
    short: "60% decrease in ND-related grievances.",
  },
  {
    metric: "92%",
    label: "Of participants rate our training as directly applicable to their role.",
    short: "92% rate training as directly applicable.",
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

const sectionAudioText = "Proven impact. Neurodiverse teams in neuroinclusive environments are 30 to 40 percent more productive. Our clients report 40% reduction in neurodivergent employee turnover within 12 months, 3 times faster reasonable adjustment response times, 60% decrease in related grievances, and 92% of participants rate our training as directly applicable to their role.";

const ImpactSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section className="bg-secondary/40 py-20 lg:py-28" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            Proven impact
          </p>
          <h2 id="impact-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
            One workforce, stronger together, where difference fuels performance rather than friction.
          </h2>
          {mode === "read" && (
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              We measure what matters: performance, retention, risk, and culture. Not just training completion rates. This is not one-off training. It is continuous optimisation.
            </p>
          )}
          {mode === "listen" && (
            <div className="mt-4">
              <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.slice(0, 3).map((o) => (
            <div
              key={o.short}
              className="p-6 lg:p-7 rounded-2xl border border-border bg-card shadow-sm"
            >
              <p className="font-display font-extrabold text-4xl md:text-5xl text-accent leading-none mb-3">
                {o.metric}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mode === "scan" ? o.short : o.label}
              </p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          {outcomes.slice(3).map((o) => (
            <div
              key={o.short}
              className="p-6 lg:p-7 rounded-2xl border border-border bg-card shadow-sm"
            >
              <p className="font-display font-extrabold text-4xl md:text-5xl text-accent leading-none mb-3">
                {o.metric}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mode === "scan" ? o.short : o.label}
              </p>
            </div>
          ))}
        </div>

        {/* What changes for individuals */}
        {mode !== "scan" && (
          <div className="mt-12 rounded-2xl border border-accent/15 bg-accent/5 p-7 lg:p-8">
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
        )}

        {/* Visual */}
        {mode === "read" && (
          <div className="mt-12 flex justify-center">
            <img
              src={measuresOfSuccess}
              alt="Measures of success: pipeline growth, satisfaction score, and session completion"
              className="max-w-2xl w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
        )}

        <p className="mt-6 text-xs text-muted-foreground opacity-70">
          Figures are indicative and based on aggregated client-reported data and published research. Individual outcomes vary by context and scope.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
