import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import measuresOfSuccess from "@/assets/measures-of-success.png";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/motion/FadeIn";

const outcomes = [
  { metric: "30–40%", label: "Research consistently shows neurodiverse teams in neuroinclusive environments are 30 to 40 percent more productive than those operating under traditional norms.", short: "More productive in inclusive environments." },
  { metric: "40%", label: "Reduction in neurodivergent employee turnover reported by clients within 12 months of implementation.", short: "Reduction in ND employee turnover." },
  { metric: "3×", label: "Faster reasonable adjustment response times after implementing our frameworks.", short: "Faster adjustment response times." },
  { metric: "60%", label: "Decrease in neurodiversity-related grievances among trained management teams.", short: "Decrease in ND-related grievances." },
  { metric: "92%", label: "Of participants rate our training as directly applicable to their role.", short: "Rate training as directly applicable." },
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
    <section className="py-24 lg:py-32 overflow-hidden" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <FadeIn>
          <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Proven impact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 id="impact-heading" className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-[1.08] max-w-3xl">
            Where difference fuels{" "}
            <span className="text-accent">performance</span>, not friction.
          </h2>
        </FadeIn>
        {mode === "read" && (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[55ch]">
              We measure what matters: performance, retention, risk, and culture. Not just training completion rates.
            </p>
          </FadeIn>
        )}
        {mode === "listen" && (
          <div className="mt-4">
            <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
          </div>
        )}

        {/* Big number strip — horizontal, dramatic */}
        <StaggerContainer className="mt-16 flex flex-wrap gap-4 lg:gap-6" staggerDelay={0.1}>
          {outcomes.map((o) => (
            <StaggerItem key={o.short} className="flex-1 min-w-[160px]">
              <div className="rounded-3xl bg-card border border-border p-6 lg:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CountUp
                  value={o.metric}
                  className="font-display font-black text-4xl lg:text-5xl text-accent block mb-3"
                />
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {mode === "scan" ? o.short : o.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* What changes for individuals — pull quote style */}
        {mode !== "scan" && (
          <FadeIn delay={0.2} className="mt-16">
            <div className="relative rounded-3xl bg-gradient-to-br from-accent/[0.08] to-transparent border border-accent/15 p-8 lg:p-12">
              <div className="absolute -top-4 left-8 bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wider">
                For individuals
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-6 mt-2">What changes when we get involved</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {individualOutcomes.map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="block w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {mode === "read" && (
          <FadeIn delay={0.3} className="mt-12 flex justify-center">
            <img
              src={measuresOfSuccess}
              alt="Measures of success: pipeline growth, satisfaction score, and session completion"
              className="max-w-2xl w-full h-auto rounded-3xl shadow-xl"
              loading="lazy"
            />
          </FadeIn>
        )}

        <p className="mt-8 text-xs text-muted-foreground/60">
          Figures are indicative and based on aggregated client-reported data and published research.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
