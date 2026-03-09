import { useState, useCallback } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

/* ── Zone data (visual positions on curve, left to right) ──── */

interface Zone {
  label: string;
  subLabel?: string;
  colorHex: string;
}

const zones: Zone[] = [
  { label: "UNDERLOAD", colorHex: "#ef4444" },
  { label: "AWARENESS", colorHex: "#f59e0b" },
  { label: "INDIVIDUAL ADJUSTMENTS", subLabel: "Without system change", colorHex: "#84cc16" },
  { label: "CULTURE AND FIT", subLabel: "System change for all", colorHex: "#22c55e" },
  { label: "OVERSTRETCH", colorHex: "#f97316" },
  { label: "BURNOUT", colorHex: "#ef4444" },
];

/* ── Narrative stages (click-through order) ────────────────── */

interface NarrativeStage {
  heading: string;
  description: string;
  activeZones: number[]; // which zone indices are lit
  newZone: number | null; // which zone just activated (for label display)
}

const narrativeStages: NarrativeStage[] = [
  {
    heading: "Underload",
    description:
      "One in five of your workforce is neurodivergent. Many of them are in the wrong role, at the wrong level, doing work that uses a fraction of what they can do. Capability is present. The organisation just cannot see it. That is not a talent shortage. That is a design problem.",
    activeZones: [0],
    newZone: 0,
  },
  {
    heading: "Awareness",
    description:
      "Most organisations stop here. A training day. An awareness week. A policy that sits in a drawer. Awareness without action does not reduce attrition. It does not reduce stress. It does not unlock performance. It just tells people you know the problem exists.",
    activeZones: [0, 1],
    newZone: 1,
  },
  {
    heading: "Individual Adjustments",
    description:
      "This is where most HR teams operate. One person asks. One adjustment is made. The system stays the same. It helps that individual. It does not help the next person, or the one after. And it puts the entire burden on the person who already has the least capacity to carry it. This is not inclusion. It is case management.",
    activeZones: [0, 1, 2],
    newZone: 2,
  },
  {
    heading: "Overstretch",
    description:
      "This is where the cost starts showing up in your data. Sickness absence rises. Engagement scores drop. Your best people go quiet. Neurodivergent employees are twice as likely to reach burnout. The reason is not their condition. It is an environment that keeps demanding more than it gives back. The strain is real. It is just invisible until it is not.",
    activeZones: [0, 1, 2, 4],
    newZone: 4,
  },
  {
    heading: "Burnout",
    description:
      "Burnout is not a personal failure. It is the predictable end point of a system that did not adapt. The cost to UK employers averages £2,646 per person per year in lost productivity and absence. Neurodiversity-related employment tribunals have risen 164% in four years. By the time you are managing burnout, you have already lost.",
    activeZones: [0, 1, 2, 4, 5],
    newZone: 5,
  },
  {
    heading: "Culture and Fit",
    description:
      "This is where performance becomes sustainable. Clarity. Predictability. Communication that works for the full range of thinking styles. Masking drops. Energy is freed up for actual work. Strengths that were invisible become visible and usable. Attrition falls. Engagement rises. Output improves. Not because you made exceptions for some people. Because you built a system that works for everyone.",
    activeZones: [0, 1, 2, 3, 4, 5],
    newZone: 3,
  },
  {
    heading: "That is Neuroinclusive Performance",
    description:
      "The organisations that get this right do not just reduce risk. They retain people others lose. They unlock talent others cannot see. They build teams that think differently, solve problems faster, and stay longer. That is what we help you build.",
    activeZones: [0, 1, 2, 3, 4, 5],
    newZone: null,
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
const FIXED_LABEL_Y = -30;

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

  const currentNarrative = activeStage >= 0 ? narrativeStages[activeStage] : null;
  const activeZoneSet = currentNarrative
    ? new Set(currentNarrative.activeZones)
    : new Set<number>();

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
            <line x1="0" y1={BASE_Y} x2={W} y2={BASE_Y} stroke="currentColor" className="text-foreground/15" strokeWidth="1" />
            <line x1="0" y1={BASE_Y} x2="0" y2="10" stroke="currentColor" className="text-foreground/15" strokeWidth="1" />

            <path d={fullCurvePath()} fill="none" stroke="currentColor" className="text-foreground/10" strokeWidth="1.5" />

            {/* Zone fills */}
            {zones.map((zone, zi) => {
              const isActive = activeZoneSet.has(zi);
              const color = isActive ? zone.colorHex : "currentColor";
              const showLabel =
                (currentNarrative?.newZone === zi && activeStage <= 5) || isFinal;
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
                  {showLabel && (
                    <g style={{ animation: "fadeInLabel 0.3s ease-out" }}>
                      <line
                        x1={midX}
                        y1={topY - 2}
                        x2={midX}
                        y2={FIXED_LABEL_Y + 14}
                        stroke="#999"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                      <text
                        x={midX}
                        y={FIXED_LABEL_Y}
                        textAnchor="middle"
                        className="font-display font-bold"
                        fill={LABEL_NAVY}
                        fontSize={isFinal ? "10" : "11"}
                        letterSpacing="0.06em"
                      >
                        {zone.label}
                      </text>
                      {zone.subLabel && !isFinal && (
                        <text
                          x={midX}
                          y={FIXED_LABEL_Y + 13}
                          textAnchor="middle"
                          fill={LABEL_NAVY}
                          fontSize="8"
                          opacity="0.6"
                        >
                          {zone.subLabel}
                        </text>
                      )}
                    </g>
                  )}
                </g>
              );
            })}

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
                  {currentNarrative!.heading}
                </h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed max-w-[60ch]">
                  {currentNarrative!.description}
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

          {!isIntro && (
            <span className="text-xs text-foreground/40 font-display font-semibold">
              Stage {activeStage + 1} of 7
            </span>
          )}
        </div>
      </div>

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
