import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Compass, MessageSquare, GraduationCap, Wrench, BarChart3, CheckCircle2 } from "lucide-react";

const phases = [
  {
    letter: "N",
    title: "Navigate",
    description: "Understand your current neuroinclusion landscape through audits and assessments",
    outcomes: ["Comprehensive audits", "Baseline metrics", "Gap analysis"],
    icon: Compass,
  },
  {
    letter: "E",
    title: "Engage",
    description: "Build awareness and buy-in across leadership and teams",
    outcomes: ["Leadership alignment", "Team workshops", "Communication strategy"],
    icon: MessageSquare,
  },
  {
    letter: "U",
    title: "Upskill",
    description: "Develop practical skills through our award-winning workshops",
    outcomes: ["Practical tools", "Certification paths", "Ongoing support"],
    icon: GraduationCap,
  },
  {
    letter: "R",
    title: "Redesign",
    description: "Transform policies, processes, and environments for neuroinclusion",
    outcomes: ["Policy updates", "Process improvements", "Environmental changes"],
    icon: Wrench,
  },
  {
    letter: "O",
    title: "Optimise",
    description: "Measure, iterate, and embed sustainable practices",
    outcomes: ["Metrics tracking", "Continuous improvement", "Long-term sustainability"],
    icon: BarChart3,
  },
];

const MobilePhaseCard = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = phase.icon;

  return (
    <div className="relative flex gap-4">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
          {phase.letter}
        </div>
        {index < phases.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      <motion.button
        className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm text-left mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon size={18} className="text-accent" aria-hidden="true" />
            <h3 className="font-display font-bold text-sm text-card-foreground">{phase.title}</h3>
          </div>
          <span className="text-xs text-muted-foreground">{index + 1}/5</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{phase.description}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs font-display font-semibold text-foreground mb-2">Key Outcomes</p>
                <ul className="space-y-1.5">
                  {phase.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={13} className="text-accent shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="text-xs text-accent mt-2 font-display font-semibold">
          {isExpanded ? "Tap to collapse" : "Tap to see outcomes"}
        </p>
      </motion.button>
    </div>
  );
};

const NeuroFrameworkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28" aria-labelledby="neuro-heading" ref={sectionRef}>
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Our Framework
          </p>
          <h2 id="neuro-heading" className="font-display font-bold text-lg md:text-xl leading-tight">
            The NEURO Framework
          </h2>
          <p className="mt-4 opacity-75 text-sm leading-relaxed max-w-[55ch]">
            A structured, five-phase approach to embedding neuroinclusion into how your organisation operates.
          </p>
        </div>

        {/* Desktop: horizontal cards */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={phase.letter}
                className="rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-6 cursor-pointer transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-lg text-accent">{phase.letter}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-accent" aria-hidden="true" />
                  <h3 className="font-display font-bold text-sm">{phase.title}</h3>
                </div>
                <p className="text-xs opacity-75 leading-relaxed mb-3">{phase.description}</p>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-primary-foreground/12">
                        <p className="text-xs font-display font-semibold mb-2">Key Outcomes</p>
                        <ul className="space-y-1.5">
                          {phase.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs opacity-75">
                              <CheckCircle2 size={13} className="text-accent shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <p className="hidden lg:block text-center mt-6 text-xs opacity-50">
          Hover over each phase to explore key outcomes
        </p>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          {phases.map((phase, index) => (
            <MobilePhaseCard key={phase.letter} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeuroFrameworkSection;
