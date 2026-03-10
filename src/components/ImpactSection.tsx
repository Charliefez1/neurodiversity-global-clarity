import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import { TrendingUp, Users, Shield, Zap, Award, BarChart3, PieChart, Activity } from "lucide-react";
import { useEffect, useState, useRef } from "react";

/* ── Animated counter hook ── */
const useCountUp = (end: number, duration = 1800, trigger = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(id);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [trigger, end, duration]);
  return value;
};

/* ── Circular progress ring ── */
const Ring = ({ value, max, size = 88, stroke = 6, colour = "hsl(170,85%,40%)" }: { value: number; max: number; size?: number; stroke?: number; colour?: string }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / max) * circ;
  return (
    <svg width={size} height={size} className="block">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-primary-foreground/10" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={colour} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        className="transition-all duration-[1.8s] ease-out" style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
    </svg>
  );
};

/* ── Micro bar chart ── */
const MiniBar = ({ values, labels }: { values: number[]; labels: string[] }) => {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2 h-16">
      {values.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t bg-accent/80 transition-all duration-[1.6s] ease-out"
            style={{ height: `${(v / max) * 100}%`, minHeight: 4 }}
          />
          <span className="text-[9px] text-primary-foreground/40 leading-none">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
};

const sectionAudioText = "Proven impact dashboard. 25% of the UK workforce may be neurodivergent. Companies which manage performance effectively are 4.2 times more likely to outperform competitors, delivering 30% higher revenue growth. Our clients report 40% reduction in neurodivergent employee turnover, 3 times faster adjustment response times, 60% decrease in grievances, and 92% rate our training as directly applicable.";

const ImpactSection = () => {
  const { mode } = useExperienceMode();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const workforce = useCountUp(25, 1600, visible);
  const productivity = useCountUp(40, 1600, visible);
  const turnover = useCountUp(40, 1400, visible);
  const speed = useCountUp(3, 800, visible);
  const grievances = useCountUp(60, 1400, visible);
  const rating = useCountUp(92, 1600, visible);
  const revenueGrowth = useCountUp(30, 1400, visible);
  const outperform = useCountUp(42, 1200, visible);

  return (
    <section ref={ref} id="impact" className="bg-primary text-primary-foreground py-20 lg:py-28" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-4">
              <Activity size={14} className="text-accent" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent">Live impact dashboard</span>
            </div>
            <h2 id="impact-heading" className="font-display font-bold text-lg md:text-xl leading-tight tracking-[-0.015em]">
              One workforce, stronger together, where difference fuels performance rather than friction.
            </h2>
            {mode === "listen" && (
              <div className="mt-4">
                <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
              </div>
            )}
          </div>
          <p className="text-xs text-primary-foreground/40 max-w-[28ch] text-right hidden lg:block">
            Aggregated from client data and published research
          </p>
        </div>

        {/* ── Top headline cards ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Workforce card */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-primary-foreground/[0.06] p-5 lg:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                <Users size={16} className="text-accent" />
              </div>
              <p className="font-display font-bold text-xs uppercase tracking-[0.12em] text-primary-foreground/50">UK workforce</p>
            </div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-display font-extrabold text-3xl md:text-4xl text-accent leading-none">{workforce}%</span>
              <span className="text-xs text-primary-foreground/50 font-body">may be neurodivergent</span>
            </div>
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[72ch]">
              That is 1 in 4 working adults. Many are undiagnosed or undisclosed. Most are masking. Your organisation is made up of a unique and diverse workforce, with neuroinclusion we make sure everyone is seen, is heard and is supported.
            </p>
            {/* Decorative ring */}
            <div className="absolute -right-2 -bottom-2 opacity-30">
              <Ring value={visible ? 25 : 0} max={100} size={100} stroke={7} />
            </div>
          </div>

          {/* Competitive advantage card */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-400/40 bg-primary-foreground/[0.06] p-5 lg:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-400/15 flex items-center justify-center">
                <BarChart3 size={16} className="text-orange-400" />
              </div>
              <p className="font-display font-bold text-xs uppercase tracking-[0.12em] text-primary-foreground/50">Competitive edge</p>
            </div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-display font-extrabold text-3xl md:text-4xl text-orange-400 leading-none">{outperform > 0 ? `${(outperform / 10).toFixed(1)}` : "0.0"}×</span>
              <span className="text-xs text-primary-foreground/50 font-body">more likely to outperform</span>
            </div>
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[72ch]">
              Companies that manage performance effectively deliver {revenueGrowth}% higher revenue growth and 5% lower attrition.
            </p>
            <p className="text-[10px] text-primary-foreground/30 mt-1.5">McKinsey, 2024</p>
            {/* Mini bar decoration */}
            <div className="absolute right-6 bottom-5 w-24 opacity-40">
              <MiniBar values={visible ? [30, 42, 25, 38, 50] : [0, 0, 0, 0, 0]} labels={["Q1", "Q2", "Q3", "Q4", "Q5"]} />
            </div>
          </div>
        </div>

        {/* ── Metric grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {/* Productivity */}
          <div className="rounded-2xl border border-sky-400/40 bg-primary-foreground/[0.06] p-5 lg:col-span-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-sky-400" />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-primary-foreground/40">Productivity</span>
            </div>
            <div className="flex items-center gap-3">
              <Ring value={visible ? 40 : 0} max={100} size={56} stroke={5} colour="rgb(56,189,248)" />
              <div>
                <p className="font-display font-extrabold text-2xl text-sky-400 leading-none">{productivity}%</p>
                <p className="text-[11px] text-primary-foreground/50 mt-0.5">more productive</p>
              </div>
            </div>
          </div>

          {/* Turnover */}
          <div className="rounded-2xl border border-emerald-400/40 bg-primary-foreground/[0.06] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-emerald-400" />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-primary-foreground/40">Retention</span>
            </div>
            <p className="font-display font-extrabold text-2xl text-emerald-400 leading-none">↓{turnover}%</p>
            <p className="text-[11px] text-primary-foreground/50 mt-1">ND turnover in 12 months</p>
          </div>

          {/* Speed */}
          <div className="rounded-2xl border border-violet-400/40 bg-primary-foreground/[0.06] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-violet-400" />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-primary-foreground/40">Speed</span>
            </div>
            <p className="font-display font-extrabold text-2xl text-violet-400 leading-none">{speed}×</p>
            <p className="text-[11px] text-primary-foreground/50 mt-1">faster adjustment response</p>
          </div>

          {/* Grievances */}
          <div className="rounded-2xl border border-rose-400/40 bg-primary-foreground/[0.06] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={16} className="text-rose-400" />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-primary-foreground/40">Risk</span>
            </div>
            <p className="font-display font-extrabold text-2xl text-rose-400 leading-none">↓{grievances}%</p>
            <p className="text-[11px] text-primary-foreground/50 mt-1">fewer ND-related grievances</p>
          </div>

          {/* Satisfaction */}
          <div className="rounded-2xl border border-amber-400/40 bg-primary-foreground/[0.06] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-amber-400" />
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-primary-foreground/40">Relevance</span>
            </div>
            <div className="flex items-center gap-3">
              <Ring value={visible ? 92 : 0} max={100} size={56} stroke={5} colour="rgb(251,191,36)" />
              <div>
                <p className="font-display font-extrabold text-2xl text-amber-400 leading-none">{rating}%</p>
                <p className="text-[11px] text-primary-foreground/50 mt-0.5">rate training applicable</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── What changes for individuals ── */}
        {mode !== "scan" && (
          <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/10 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-5">
              <PieChart size={16} className="text-accent" />
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.1em]">What changes for individuals</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Practical strategies for managing work day to day",
                "Confidence to disclose without fear of negative impact",
                "Consistent, informed management support",
                "Reduced pressure to mask and self-manage constantly",
                "Systems and policies designed to remove barriers",
                "Visible, ongoing support that evolves as roles change",
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 text-sm text-primary-foreground/75 leading-relaxed">
                  <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 text-xs text-primary-foreground/35">
          Figures are indicative and based on aggregated client-reported data and published research including McKinsey (2024), Birkbeck University, and Neurodiversity in Business. Individual outcomes vary by context and scope.
        </p>

        {/* Share your experience */}
        <div className="mt-8">
          <AskQuestionCompact variant="dark" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
