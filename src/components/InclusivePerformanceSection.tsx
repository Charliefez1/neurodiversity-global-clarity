import { useState, useCallback } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

/* ── Stage data ─────────────────────────────────────────────── */

interface Stage {
  label: string;
  subLabel?: string;
  heading: string;
  description: string;
  color: string;        // tailwind-safe fill for active
  colorHex: string;     // raw hex for SVG
}

const stages: Stage[] = [
  {
    label: "UNDERLOAD",
    heading: "Underload",
    description:
      "One in five of your workforce is neurodivergent. Many of them are in the wrong role, at the wrong level, doing work that uses a fraction of what they can do. Capability is present. The organisation just cannot see it. That is not a talent shortage. That is a design problem.",
    color: "text-red-500",
    colorHex: "#ef4444",
  },
  {
    label: "AWARENESS",
    heading: "Awareness",
    description:
      "Most organisations stop here. A training day. An awareness week. A policy that sits in a drawer. Awareness without action does not reduce attrition. It does not reduce stress. It does not unlock performance. It just tells people you know the problem exists.",
    color: "text-amber-500",
    colorHex: "#f59e0b",
  },
  {
    label: "INDIVIDUAL ADJUSTMENTS",
    subLabel: "Without system change",
    heading: "Individual Adjustments",
    description:
      "This is where most HR teams operate. One person asks. One adjustment is made. The system stays the same. It helps that individual. It does not help the next person, or the one after. And it puts the entire burden on the person who already has the least capacity to carry it. This is not inclusion. It is case management.",
    color: "text-lime-500",
    colorHex: "#84cc16",
  },
  {
    label: "OVERSTRETCH",
    heading: "Overstretch",
    description:
      "This is where the cost starts showing up in your data. Sickness absence rises. Engagement scores drop. Your best people go quiet. Neurodivergent employees are twice as likely to reach burnout. The reason is not their condition. It is an environment that keeps demanding more than it gives back. The strain is real. It is just invisible until it is not.",
    color: "text-amber-500",
    colorHex: "#f97316",
  },
  {
    label: "BURNOUT",
    heading: "Burnout",
    description:
      "Burnout is not a personal failure. It is the predictable end point of a system that did not adapt. The cost to UK employers averages £2,646 per person per year in lost productivity and absence. Neurodiversity-related employment tribunals have risen 164% in four years. By the time you are managing burnout, you have already lost.",
    color: "text-red-500",
    colorHex: "#ef4444",
  },
  {
    label: "CULTURE AND FIT",
    subLabel: "System change for all",
    heading: "Culture and Fit",
    description:
      "This is where performance becomes sustainable. Clarity. Predictability. Communication that works for the full range of thinking styles. Masking drops. Energy is freed up for actual work. Strengths that were invisible become visible and usable. Attrition falls. Engagement rises. Output improves. Not because you made exceptions for some people. Because you built a system that works for everyone.",
    color: "text-green-500",
    colorHex: "#22c55e",
  },
  {
    label: "",
    heading: "That is Neuroinclusive Performance",
    description:
      "The organisations that get this right do not just reduce risk. They retain people others lose. They unlock talent others cannot see. They build teams that think differently, solve problems faster, and stay longer. That is what we help you build.",
    color: "text-accent",
    colorHex: "#22c55e",
  },
];

/* ── Bell‑curve geometry ───────────────────────────────────── */

const W = 600;
const H = 300;
const PEAK = 300;
const SIGMA = 110;
const AMPLITUDE = 260;
const BASE_Y = H - 20;
const LABEL_NAVY = "#1B2B6B";
const FIXED_LABEL_Y = -30; // all labels at the same fixed Y coordinate above chart

function gauss(x: number) {
  return AMPLITUDE * Math.exp(-0.5 * ((x - PEAK) / SIGMA) ** 2);
}

const zoneEdges = [0, 100, 180, 260, 340, 420, 540, 600];

function buildZonePath(zoneIndex: number): string {
  const x0 = zoneEdges[zoneIndex];
  const x1 = zoneEdges[zoneIndex + 1];
  const step = 2;
  let d = `M ${x0} ${BASE_Y}`;
  for (let x = x0; x <= x1; x += step) {
    d += ` L ${x} ${BASE_Y - gauss(x)}`;
  }
  d += ` L ${x1} ${BASE_Y - gauss(x1)}`;
  d += ` L ${x1} ${BASE_Y} Z`;
  return d;
}

function zoneMidX(zoneIndex: number) {
  return (zoneEdges[zoneIndex] + zoneEdges[zoneIndex + 1]) / 2;
}

/** Highest point of the curve within this zone */
function zoneTopY(zoneIndex: number) {
  const x0 = zoneEdges[zoneIndex];
  const x1 = zoneEdges[zoneIndex + 1];
  let minY = BASE_Y;
  for (let x = x0; x <= x1; x += 2) {
    const y = BASE_Y - gauss(x);
    if (y < minY) minY = y;
  }
  return minY;
}

function fullCurvePath(): string {
  let d = `M 0 ${BASE_Y}`;
  for (let x = 0; x <= W; x += 2) {
    d += ` L ${x} ${BASE_Y - gauss(x)}`;
  }
  d += ` L ${W} ${BASE_Y}`;
  return d;
}

/* ── Component ─────────────────────────────────────────────── */

const InclusivePerformanceSection = () => {
  const [activeStage, setActiveStage] = useState(-1);

  const advance = useCallback(() => {
    setActiveStage((prev) => {
      if (prev >= 6) return -1;
      return prev + 1;
    });
  }, []);

  const isIntro = activeStage === -1;
  const isFinal = activeStage === 6;
  const showCallout = activeStage >= 2;

  const currentStage = activeStage >= 0 ? stages[activeStage] : null;

  return (
    <section className="py-16 lg:py-24 bg-background" id="inclusive-performance">
      <div className="mx-auto max-w-[960px] px-6">
        {/* Section header */}
        <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
          The model
        </p>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1] mb-10 max-w-2xl">
          Inclusive Performance
        </h2>

        {/* ── Chart ──────────────────────────────────────── */}
        <div className="relative w-full">
          {/* Y-axis label — rotated, positioned left of chart with gap */}
          <span
            className="absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[11px] font-display font-semibold tracking-wide whitespace-nowrap select-none"
            style={{ left: "-36px", color: LABEL_NAVY, opacity: 0.6 }}
          >
            Performance Capacity
          </span>

          <svg
            viewBox={`-60 -50 ${W + 80} ${H + 80}`}
            className="w-full h-auto"
            aria-label="Inclusive Performance bell curve"
            role="img"
          >
            {/* Axis lines */}
            <line x1="0" y1={BASE_Y} x2={W} y2={BASE_Y} stroke="currentColor" className="text-foreground/15" strokeWidth="1" />
            <line x1="0" y1={BASE_Y} x2="0" y2="10" stroke="currentColor" className="text-foreground/15" strokeWidth="1" />

            {/* Full curve outline (subtle) */}
            <path d={fullCurvePath()} fill="none" stroke="currentColor" className="text-foreground/10" strokeWidth="1.5" />

            {/* Zone fills */}
            {[0, 1, 2, 3, 4, 5].map((zi) => {
              const isActive = activeStage >= zi;
              const color = isActive ? stages[zi].colorHex : "currentColor";
              const showLabel = (isActive && activeStage <= 5 && activeStage === zi) || isFinal;
              const topY = zoneTopY(zi);
              const midX = zoneMidX(zi);

              return (
                <g key={zi}>
                  <path
                    d={buildZonePath(zi)}
                    fill={color}
                    className={isActive ? "" : "text-foreground/[0.04]"}
                    style={{
                      opacity: isActive ? 0.7 : 1,
                      transition: "fill 0.4s ease, opacity 0.4s ease",
                    }}
                  />
                  {/* Label above curve with tick line */}
                  {showLabel && (
                    <g style={{ animation: "fadeInLabel 0.3s ease-out" }}>
                      {/* Tick line from label down to curve top — stops at curve surface */}
                      <line
                        x1={midX}
                        y1={topY - 2}
                        x2={midX}
                        y2={FIXED_LABEL_Y + 14}
                        stroke="#999"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                      {/* Main label — fixed Y for all */}
                      <text
                        x={midX}
                        y={FIXED_LABEL_Y}
                        textAnchor="middle"
                        className="font-display font-bold"
                        fill={LABEL_NAVY}
                        fontSize={isFinal ? "10" : "11"}
                        letterSpacing="0.06em"
                      >
                        {stages[zi].label}
                      </text>
                      {/* Sub-label */}
                      {stages[zi].subLabel && !isFinal && (
                        <text
                          x={midX}
                          y={FIXED_LABEL_Y + 13}
                          textAnchor="middle"
                          fill={LABEL_NAVY}
                          fontSize="8"
                          opacity="0.6"
                        >
                          {stages[zi].subLabel}
                        </text>
                      )}
                    </g>
                  )}
                </g>
              );
            })}

            {/* X-axis label — centred beneath baseline */}
            <text
              x={W / 2}
              y={BASE_Y + 45}
              textAnchor="middle"
              className="font-display"
              fill={LABEL_NAVY}
              opacity="0.45"
              fontSize="11"
            >
              Environmental Demand and Psychological Safety
            </text>
          </svg>
        </div>

        {/* ── Text panel ────────────────────────────────── */}
        <div className="mt-8 min-h-[140px]">
          <div
            key={activeStage}
            className="animate-fade-in"
            style={{ animationDuration: "0.2s" }}
          >
            {isIntro ? (
              <p className="text-sm text-foreground/60 leading-relaxed">
                Click <strong>Next</strong> to explore the model.
              </p>
            ) : (
              <>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-3">
                  {currentStage!.heading}
                </h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed max-w-[60ch]">
                  {currentStage!.description}
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── Callout ───────────────────────────────────── */}
        <div
          className="mt-6 transition-opacity duration-300"
          style={{ opacity: showCallout ? 1 : 0, pointerEvents: showCallout ? "auto" : "none" }}
        >
          <p className="text-sm italic text-foreground/60 border-l-2 border-accent pl-4 max-w-[52ch]">
            The goal is not to manage neurodivergent people better. It is to build systems that work for everyone.
          </p>
        </div>

        {/* ── Navigation ────────────────────────────────── */}
        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={advance}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            {isFinal ? (
              <>
                <RotateCcw size={15} aria-hidden="true" />
                Start again
              </>
            ) : (
              <>
                Next
                <ArrowRight size={15} aria-hidden="true" />
              </>
            )}
          </button>

          {/* Stage counter */}
          {!isIntro && (
            <span className="text-xs text-foreground/40 font-display font-semibold">
              Stage {activeStage + 1} of 7
            </span>
          )}
        </div>
      </div>

      {/* Inline keyframes for SVG label fade */}
      <style>{`
        @keyframes fadeInLabel {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default InclusivePerformanceSection;
