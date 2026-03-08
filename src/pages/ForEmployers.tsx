import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Target, Briefcase, TrendingUp, CheckCircle2, Building2, Cpu, Landmark, HeartPulse, Train, Scale, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import WhatIsBreaking from "@/components/blocks/WhatIsBreaking";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-employers-hero.png";
import teamworkImg from "@/assets/pathway/employers-teamwork.jpg";
import journeyImg from "@/assets/pathway/employers-journey.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const journeyStages = [
  {
    stage: "Aware",
    number: "01",
    icon: Users,
    color: "hsl(var(--accent))",
    summary: "Build shared understanding and remove stigma across teams.",
  },
  {
    stage: "Champions",
    number: "02",
    icon: Shield,
    color: "hsl(155, 60%, 42%)",
    summary: "Develop internal advocates who strengthen everyday inclusion.",
  },
  {
    stage: "Managers",
    number: "03",
    icon: Brain,
    color: "hsl(270, 55%, 55%)",
    summary: "Equip managers with practical tools for supporting neurodivergent colleagues.",
  },
  {
    stage: "Leaders",
    number: "04",
    icon: Target,
    color: "hsl(20, 100%, 55%)",
    summary: "Embed neuroinclusion into culture, policy, and strategy at senior level.",
  },
];

const sectors = [
  { label: "Technology", icon: Cpu },
  { label: "Professional services", icon: Briefcase },
  { label: "Financial services", icon: TrendingUp },
  { label: "Infrastructure & transport", icon: Train },
  { label: "Public sector", icon: Landmark },
  { label: "Healthcare", icon: HeartPulse },
];

const ForEmployers = () => (
  <PathwayLanding
    audience="employers"
    badge="For Employers"
    title="Neurodiversity support that actually changes how your workplace works"
    heroDescription="Whether you're starting from scratch or already on the journey, we help employers reduce risk, retain talent, and build neuroinclusive cultures that perform."
    seoTitle="Neurodiversity Support for Employers | Neurodiversity Global"
    seoDescription="Expert neurodiversity training, consultancy, and coaching for employers. Reduce risk, retain talent, and build neuroinclusive workplaces that perform."
    breadcrumbLabel="For Employers"
    breadcrumbPath="/for-employers"
    persona="Charlie"
    whatsappNumber="447000000000"
    heroImage={heroImg}
    heroImageAlt="Diverse workforce across industries"
    placeholders={[
      "We've had a grievance involving a neurodivergent employee — what should we do?",
      "How do I make our recruitment process more neuroinclusive?",
      "What training do our managers need on neurodiversity?",
      "We want to set up a neurodiversity network — where do we start?",
      "How do we handle reasonable adjustments without it becoming unmanageable?",
    ]}
  >
    {/* ═══════════════════════════════════════════
        NEUROINCLUSION THAT IMPROVES PERFORMANCE — image + text split
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamworkImg}
                alt="Diverse team collaborating in a modern workplace"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
              <p className="font-display font-extrabold text-3xl text-accent">30,000+</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">people trained across hundreds of organisations</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              The reality
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
              Neuroinclusion that improves{" "}
              <span className="text-accent">performance</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Most organisations already employ neurodivergent people. The question is whether your workplace enables them to succeed.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Neurodiversity Global works with organisations that want to move beyond awareness and build workplaces where neurodivergent employees can contribute fully, managers feel confident, and teams operate with clarity.
            </p>
            <div className="mt-6 rounded-xl bg-accent/[0.06] border border-accent/15 p-5">
              <p className="font-display font-bold text-base text-foreground">
                We focus on the reality of work. Not theory.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Leadership behaviour, communication, psychological safety, and everyday working practices.
              </p>
            </div>
            <Link
              to="/feedback"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Sparkles size={16} />
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        THE CHALLENGE — dramatic full-width
        ═══════════════════════════════════════════ */}
    <PageSection
      id="challenge"
      badge="The challenge"
      title="When expectations, communication, and environments are unclear"
      description="Many organisations have invested in neurodiversity awareness. Yet leaders still tell us the same things."
      variant="sand"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div className="space-y-5">
          <div className="space-y-3">
            {[
              "Managers want to do the right thing but feel unsure how.",
              "HR teams see situations escalate that could have been resolved earlier.",
              "Talented people quietly leave organisations that were trying to support them.",
            ].map((line, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-lg bg-card border border-border p-4 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{line}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Often the difficulty is not intent. It is that workplaces were never designed with different thinking styles in mind.
          </p>
        </div>

        <WhatIsBreaking
          title="What organisations experience without practical capability"
          items={[
            "Avoidable attrition of talented neurodivergent employees",
            "Rising HR casework and grievances that could have been prevented",
            "Stressed managers who want to help but lack tools and confidence",
            "Disengaged employees struggling in environments not designed for them",
            "Unnecessary performance concerns driven by misunderstanding, not ability",
          ]}
        />
      </div>

      <PullQuote
        quote="Most organisations do not lack commitment. They lack practical capability."
      />
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHAT WE DO — text + outcomes side by side
        ═══════════════════════════════════════════ */}
    <PageSection
      id="what-we-do"
      badge="What we do"
      title="From good intentions to practical capability"
      description="We help organisations build environments where neurodivergent people can perform at their best."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            Our work focuses on leadership behaviour, communication, psychological safety, and everyday working practices.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This is not about labels or awareness campaigns. It is about creating workplaces where different ways of thinking can operate effectively.
          </p>
          <div className="rounded-xl bg-accent/[0.06] border border-accent/15 p-5 flex items-start gap-4">
            <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-display font-bold text-foreground">Inclusive organisations consistently report stronger innovation and productivity outcomes.</span>
            </p>
          </div>
        </div>
        <OutcomeBlock
          title="What organisations commonly see"
          outcomes={[
            { label: "Stronger retention of talented employees" },
            { label: "More confident managers across the organisation" },
            { label: "Clearer communication across teams" },
            { label: "Fewer escalations and grievances" },
            { label: "Improved engagement and psychological safety" },
          ]}
        />
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        HOW WE WORK — Journey stages with image
        ═══════════════════════════════════════════ */}
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              How we work
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
              Programmes for every stage of the{" "}
              <span className="text-accent">neuroinclusion journey</span>
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-base leading-relaxed max-w-[50ch]">
              Our programmes support organisations from first awareness through to strategic leadership embedding.
            </p>

            <div className="mt-8 space-y-4">
              {journeyStages.map((s, i) => (
                <motion.div
                  key={s.stage}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 hover:bg-primary-foreground/[0.1] transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  >
                    <span className="font-display font-extrabold text-sm">{s.number}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-primary-foreground">{s.stage}</h3>
                    <p className="text-sm text-primary-foreground/60 leading-relaxed mt-1">{s.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-accent/15 border border-accent/25 p-5 text-center">
              <p className="font-display font-bold text-sm text-primary-foreground">
                Part of the NEURO Value Creation Cycle
              </p>
              <p className="text-xs text-primary-foreground/50 mt-1">A structured approach to measurable neuroinclusion.</p>
            </div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={journeyImg}
                alt="Stages of organisational growth"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        WHY US — dramatic stats + founders
        ═══════════════════════════════════════════ */}
    <section className="bg-warm-stone py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Why us
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
            A neurodivergent-led consultancy.
            <br />
            <span className="text-accent">No hand-offs. No generic training.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Neurodiversity Global is founded by Rich and Charlie Ferriman. Our work combines lived experience with decades of leadership experience inside complex organisations.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            { stat: "30,000+", label: "People trained across hundreds of organisations" },
            { stat: "Direct access", label: "Clients work directly with the founders" },
            { stat: "Decades", label: "Of leadership experience inside complex organisations" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <p className="font-display font-extrabold text-3xl md:text-4xl text-accent mb-3">
                {item.stat}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <PullQuote quote="Just practical guidance grounded in real organisational environments. No hand-offs. No generic training." />
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        WHO WE SUPPORT — Sectors
        ═══════════════════════════════════════════ */}
    <PageSection
      id="sectors"
      badge="Who we support"
      title="Helping organisations turn neuroinclusion into everyday leadership capability"
      description="We work with organisations across sectors. Our focus remains the same."
      variant="default"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
              <sector.icon size={22} className="text-accent" />
            </div>
            <p className="font-display font-bold text-xs text-foreground leading-tight">
              {sector.label}
            </p>
          </motion.div>
        ))}
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        FINAL CTA
        ═══════════════════════════════════════════ */}
    <PageCTA
      title="Start the conversation"
      description="If your organisation wants to improve leadership capability, retain neurodivergent talent, and create workplaces where people can succeed, we would be happy to talk. Speak with our founders to explore how neuroinclusion can strengthen your organisation."
      primaryLabel="Book a discovery call"
      primaryHref="/feedback"
      secondaryLabel="Send us a message"
      secondaryHref="/feedback"
    />
  </PathwayLanding>
);

export default ForEmployers;
