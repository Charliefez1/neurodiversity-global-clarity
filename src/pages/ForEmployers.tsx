import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Target, Briefcase, TrendingUp, CheckCircle2, Building2, Cpu, Landmark, HeartPulse, Train, Scale } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import WhatIsBreaking from "@/components/blocks/WhatIsBreaking";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-employers-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const journeyStages = [
  {
    stage: "Aware",
    icon: Users,
    color: "hsl(var(--accent))",
    summary: "Build shared understanding and remove stigma across teams.",
  },
  {
    stage: "Champions",
    icon: Shield,
    color: "hsl(155, 60%, 42%)",
    summary: "Develop internal advocates who strengthen everyday inclusion.",
  },
  {
    stage: "Managers",
    icon: Brain,
    color: "hsl(270, 55%, 55%)",
    summary: "Equip managers with practical tools for supporting neurodivergent colleagues.",
  },
  {
    stage: "Leaders",
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
        NEUROINCLUSION THAT IMPROVES PERFORMANCE
        ═══════════════════════════════════════════ */}
    <PageSection
      id="performance"
      badge="The reality"
      title="Neuroinclusion that improves performance"
      description="Most organisations already employ neurodivergent people. The question is whether your workplace enables them to succeed."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            Neurodiversity Global works with organisations that want to move beyond awareness and build workplaces where neurodivergent employees can contribute fully, managers feel confident, and teams operate with clarity.
          </p>
          <p className="font-display font-bold text-foreground">
            We focus on the reality of work. Not theory.
          </p>
        </div>
        <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
              <Scale size={20} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">The gap we close</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Many organisations have invested in neurodiversity awareness. Yet managers still feel unsure, HR teams see situations escalate, and talented people quietly leave organisations that were trying to support them.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            Often the difficulty is not intent. It is that workplaces were never designed with different thinking styles in mind.
          </p>
        </div>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        THE CHALLENGE
        ═══════════════════════════════════════════ */}
    <PageSection
      id="challenge"
      badge="The challenge"
      title="When expectations, communication, and environments are unclear"
      description="Most organisations do not lack commitment. They lack practical capability."
      variant="sand"
    >
      <WhatIsBreaking
        title="What organisations experience without neuroinclusion infrastructure"
        items={[
          "Avoidable attrition of talented neurodivergent employees",
          "Rising HR casework and grievances that could have been prevented",
          "Stressed managers who want to help but lack tools and confidence",
          "Disengaged employees struggling in environments not designed for them",
          "Unnecessary performance concerns driven by misunderstanding, not ability",
        ]}
      />

      <PullQuote
        quote="Managers want to do the right thing but feel unsure how. HR teams see situations escalate that could have been resolved earlier. Talented people quietly leave."
      />
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHAT WE DO
        ═══════════════════════════════════════════ */}
    <PageSection
      id="what-we-do"
      badge="What we do"
      title="From good intentions to practical capability"
      description="We help organisations build environments where neurodivergent people can perform at their best."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            Our work focuses on leadership behaviour, communication, psychological safety, and everyday working practices.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This is not about labels or awareness campaigns. It is about creating workplaces where different ways of thinking can operate effectively.
          </p>
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

      <div className="mt-8 rounded-xl bg-accent/[0.06] border border-accent/15 p-6 flex items-start gap-4">
        <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-display font-bold text-foreground">Inclusive organisations consistently report stronger innovation and productivity outcomes.</span>
          {" "}Neuroinclusion is not just the right thing to do. It is a business advantage.
        </p>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        HOW WE WORK — Journey stages
        ═══════════════════════════════════════════ */}
    <PageSection
      id="how-we-work"
      badge="How we work"
      title="Programmes for every stage of the neuroinclusion journey"
      description="Our programmes support organisations from first awareness through to strategic leadership embedding."
      variant="dark"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {journeyStages.map((s, i) => (
          <motion.div
            key={s.stage}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 hover:bg-primary-foreground/[0.1] hover:border-primary-foreground/20 transition-all group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${s.color}20`, color: s.color }}
            >
              <s.icon size={24} />
            </div>
            <h3 className="font-display font-bold text-base text-primary-foreground mb-2">
              {s.stage}
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {s.summary}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-accent/15 border border-accent/25 p-6 text-center">
        <p className="font-display font-bold text-sm text-primary-foreground">
          These programmes form part of the NEURO Value Creation Cycle
        </p>
        <p className="text-sm text-primary-foreground/60 mt-1">
          A structured approach to measurable neuroinclusion.
        </p>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHY ORGANISATIONS WORK WITH US
        ═══════════════════════════════════════════ */}
    <PageSection
      id="why-us"
      badge="Why us"
      title="A neurodivergent-led consultancy. No hand-offs. No generic training."
      description="Neurodiversity Global is founded by Rich and Charlie Ferriman. Our work combines lived experience with decades of leadership experience inside complex organisations."
      variant="sand"
    >
      <div className="grid lg:grid-cols-3 gap-5">
        {[
          {
            stat: "30,000+",
            label: "People trained across hundreds of organisations",
          },
          {
            stat: "Direct",
            label: "Clients work directly with the founders",
          },
          {
            stat: "Decades",
            label: "Of leadership experience inside complex organisations",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card p-6 shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <p className="font-display font-extrabold text-2xl md:text-3xl text-accent mb-2">
              {item.stat}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      <PullQuote quote="Just practical guidance grounded in real organisational environments. No hand-offs. No generic training." />
    </PageSection>

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
            className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
              <sector.icon size={20} className="text-accent" />
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
