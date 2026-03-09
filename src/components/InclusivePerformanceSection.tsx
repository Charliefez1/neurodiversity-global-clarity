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
      "Capability is there. The role just does not use it. Strengths go unnoticed. The work is too small for the person. Low demand, low performance, high untapped potential.",
    color: "text-red-500",
    colorHex: "#ef4444",
  },
  {
    label: "AWARENESS",
    heading: "Awareness",
    description:
      "Understanding begins. People feel seen and heard. Psychological safety starts to build. This is the foundation. Not the destination.",
    color: "text-amber-500",
    colorHex: "#f59e0b",
  },
  {
    label: "INDIVIDUAL ADJUSTMENTS",
    subLabel: "Without system change",
    heading: "Individual Adjustments",
    description:
      "Support improves, but only for the person who asked. The system stays the same. Performance rises briefly but remains fragile. This is not inclusion. It is firefighting.",
    color: "text-lime-500",
    colorHex: "#84cc16",
  },
  {
    label: "CULTURE AND FIT",
    subLabel: "System change for all",
    heading: "Culture and Fit",
    description:
      "Fit, safety, clarity, and healthy challenge. Strengths are used. Masking drops. Energy becomes sustainable. This is the neuroinclusive performance zone.",
    color: "text-green-500",
    colorHex: "#22c55e",
  },
  {
    label: "OVERSTRETCH",
    heading: "Overstretch",
    description:
      "The system stops flexing. Demand rises faster than support. High effort hides the growing strain. Performance looks steady. The cost is invisible until it is not.",
    color: "text-amber-500",
    colorHex: "#f97316",
  },
  {
    label: "BURNOUT",
    heading: "Burnout",
    description:
      "Overload and misfit. The nervous system is overwhelmed. Performance falls sharply. Burnout is not a personal failure. It is the predictable result of an environment that did not adapt.",
    color: "text-red-500",
    colorHex: "#ef4444",
  },
  {
    label: "",
    heading: "That is Neuroinclusive Performance",
    description:
      "If adjustments only help one person, they are not inclusion. They are firefighting. Inclusion is when the system flexes so no one has to ask in the first place. Clarity, predictability, communication, leadership behaviours, and workload patterns built for the full spectrum of thinking styles.",
    color: "text-accent",
    colorHex: "#22c55e",
  },
];

/* ── Bell‑curve geometry ───────────────────────────────────── */

// We split the bell curve into 6 visible zones (stage 7 = "all lit").
// Each zone is a slice of x-range mapped onto a Gaussian.
// x from 0→600, peak at 300, σ ≈ 110.

const W = 600;
const H = 300;
const PEAK = 300;
const SIGMA = 110;
const AMPLITUDE = 260;
const BASE_Y = H - 20; // bottom baseline

function gauss(x: number) {
  return AMPLITUDE * Math.exp(-0.5 * ((x - PEAK) / SIGMA) ** 2);
}

// Zone x-boundaries (6 zones for stages 0-5)
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

function zoneMidY(zoneIndex: number) {
  const mx = zoneMidX(zoneIndex);
  return BASE_Y - gauss(mx);
}

/* Full curve outline for axis reference */
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
  // -1 = intro (nothing active), 0-6 = stage index
  const [activeStage, setActiveStage] = useState(-1);

  const advance = useCallback(() => {
    setActiveStage((prev) => {
      if (prev >= 6) return -1; // reset
      return prev + 1;
    });
  }, []);

  const isIntro = activeStage === -1;
  const isFinal = activeStage === 6;
  const showCallout = activeStage >= 2; // visible from stage 3 (index 2) onwards

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
          {/* Y-axis label */}
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[11px] text-foreground/50 font-display font-semibold tracking-wide whitespace-nowrap select-none">
            Performance Capacity
          </span>

          <svg
            viewBox={`-40 -10 ${W + 60} ${H + 40}`}
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
                  {/* Zone label */}
                  {isActive && activeStage <= 5 && activeStage === zi && (
                    <g
                      style={{
                        opacity: 1,
                        animation: "fadeInLabel 0.3s ease-out",
                      }}
                    >
                      <text
                        x={zoneMidX(zi)}
                        y={Math.max(zoneMidY(zi) - 18, 16)}
                        textAnchor="middle"
                        className="font-display font-bold"
                        fill={stages[zi].colorHex}
                        fontSize="11"
                        letterSpacing="0.06em"
                      >
                        {stages[zi].label}
                      </text>
                      {stages[zi].subLabel && (
                        <text
                          x={zoneMidX(zi)}
                          y={Math.max(zoneMidY(zi) - 5, 30)}
                          textAnchor="middle"
                          fill={stages[zi].colorHex}
                          fontSize="8"
                          opacity="0.75"
                        >
                          {stages[zi].subLabel}
                        </text>
                      )}
                    </g>
                  )}
                  {/* Keep labels visible on final stage */}
                  {isFinal && (
                    <g>
                      <text
                        x={zoneMidX(zi)}
                        y={Math.max(zoneMidY(zi) - 18, 16)}
                        textAnchor="middle"
                        className="font-display font-bold"
                        fill={stages[zi].colorHex}
                        fontSize="10"
                        letterSpacing="0.06em"
                      >
                        {stages[zi].label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Peak arrow on final stage */}
            {isFinal && (
              <g style={{ animation: "fadeInLabel 0.4s ease-out" }}>
                <line
                  x1={PEAK}
                  y1={BASE_Y - AMPLITUDE - 8}
                  x2={PEAK}
                  y2={BASE_Y - AMPLITUDE + 20}
                  stroke="#22c55e"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
                  </marker>
                </defs>
              </g>
            )}

            {/* X-axis label */}
            <text
              x={W / 2}
              y={BASE_Y + 30}
              textAnchor="middle"
              className="font-display"
              fill="currentColor"
              opacity="0.4"
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
