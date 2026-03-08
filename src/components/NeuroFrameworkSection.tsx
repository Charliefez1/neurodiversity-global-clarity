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
    color: "bg-[hsl(220,70%,55%)]",
    ring: "ring-[hsl(220,70%,55%)]/25",
  },
  {
    letter: "E",
    title: "Engage",
    description: "Build awareness and buy-in across leadership and teams",
    outcomes: ["Leadership alignment", "Team workshops", "Communication strategy"],
    icon: MessageSquare,
    color: "bg-[hsl(0,70%,55%)]",
    ring: "ring-[hsl(0,70%,55%)]/25",
  },
  {
    letter: "U",
    title: "Upskill",
    description: "Develop practical skills through our award-winning workshops",
    outcomes: ["Practical tools", "Certification paths", "Ongoing support"],
    icon: GraduationCap,
    color: "bg-[hsl(155,60%,42%)]",
    ring: "ring-[hsl(155,60%,42%)]/25",
  },
  {
    letter: "R",
    title: "Redesign",
    description: "Transform policies, processes, and environments for neuroinclusion",
    outcomes: ["Policy updates", "Process improvements", "Environmental changes"],
    icon: Wrench,
    color: "bg-[hsl(270,55%,55%)]",
    ring: "ring-[hsl(270,55%,55%)]/25",
  },
  {
    letter: "O",
    title: "Optimise",
    description: "Measure, iterate, and embed sustainable practices",
    outcomes: ["Metrics tracking", "Continuous improvement", "Long-term sustainability"],
    icon: BarChart3,
    color: "bg-[hsl(40,90%,50%)]",
    ring: "ring-[hsl(40,90%,50%)]/25",
  },
];

/* Curved SVG path connecting the zigzag cards */
const JourneyPath = ({ isInView }: { isInView: boolean }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1000 400"
    preserveAspectRatio="none"
    fill="none"
  >
    <defs>
      <linearGradient id="neuro-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(220,70%,55%)" />
        <stop offset="25%" stopColor="hsl(0,70%,55%)" />
        <stop offset="50%" stopColor="hsl(155,60%,42%)" />
        <stop offset="75%" stopColor="hsl(270,55%,55%)" />
        <stop offset="100%" stopColor="hsl(40,90%,50%)" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 100 300 C 200 300, 200 100, 300 100 C 400 100, 400 300, 500 300 C 600 300, 600 100, 700 100 C 800 100, 800 300, 900 300"
      stroke="url(#neuro-path-grad)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={isInView ? { pathLength: 1 } : {}}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    />
  </svg>
);

/* Desktop phase card */
const DesktopPhaseCard = ({
  phase,
  index,
  isHovered,
  onHover,
  isInView,
}: {
  phase: typeof phases[0];
  index: number;
  isHovered: boolean;
  onHover: (i: number | null) => void;
  isInView: boolean;
}) => {
  const Icon = phase.icon;
  // Zigzag: even indexes at bottom, odd at top
  const isBottom = index % 2 === 0;

  return (
    <motion.div
      className={`absolute flex flex-col items-center ${isBottom ? "top-[50%]" : "bottom-[50%]"}`}
      style={{ left: `${index * 20 + 10}%`, transform: "translateX(-50%)" }}
      initial={{ opacity: 0, y: isBottom ? 30 : -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
    >
      {/* Letter circle: positioned on the path */}
      <div
        className={`w-10 h-10 rounded-full ${phase.color} ring-4 ${phase.ring} flex items-center justify-center text-white font-display font-bold text-sm shadow-lg z-10 ${isBottom ? "-mt-5 mb-3 order-first" : "-mb-5 mt-3 order-last"}`}
      >
        {phase.letter}
      </div>

      {/* Card */}
      <motion.div
        className="w-[180px] rounded-xl bg-card border border-border shadow-md p-5 cursor-pointer"
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        whileHover={{ y: isBottom ? 4 : -4 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} className="text-accent shrink-0" aria-hidden="true" />
          <h3 className="font-display font-bold text-sm text-card-foreground">{phase.title}</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{phase.description}</p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-border">
                <p className="text-xs font-display font-semibold text-card-foreground mb-2">Key Outcomes</p>
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

        <p className="mt-2 text-[11px] text-muted-foreground/60 font-display">Step {index + 1}</p>
      </motion.div>
    </motion.div>
  );
};

/* Mobile card with vertical timeline */
const MobilePhaseCard = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = phase.icon;

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-10 h-10 rounded-full ${phase.color} ring-4 ${phase.ring} flex items-center justify-center text-white font-display font-bold text-sm shadow-lg`}>
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
                <p className="text-xs font-display font-semibold text-card-foreground mb-2">Key Outcomes</p>
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
    <section className="bg-muted py-20 lg:py-28" aria-labelledby="neuro-heading" ref={sectionRef}>
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Our Framework
          </p>
          <h2 id="neuro-heading" className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
            The NEURO Framework
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-[60ch]">
            With Neurodiversity Global, you are able to engage us for one session or a whole project of Neuroinclusion. When we are engaged for a project we follow our NEURO framework, a structured, five-phase approach to embedding neuroinclusion into how your organisation operates.
          </p>
        </div>

        {/* Desktop: zigzag journey */}
        <div className="hidden lg:block relative" style={{ height: "480px" }}>
          <JourneyPath isInView={isInView} />
          {phases.map((phase, index) => (
            <DesktopPhaseCard
              key={phase.letter}
              phase={phase}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
              isInView={isInView}
            />
          ))}
        </div>
        <p className="hidden lg:block text-center mt-4 text-xs text-muted-foreground/60">
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
