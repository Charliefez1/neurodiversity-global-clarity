import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Target, Stethoscope, Train, ShieldAlert, Landmark, GraduationCap, CheckCircle2, AlertTriangle, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import WhatIsBreaking from "@/components/blocks/WhatIsBreaking";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-public-sector-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const focusAreas = [
  {
    title: "Staff capability",
    icon: Users,
    description: "Helping teams understand how neurodivergence can affect communication, behaviour, and decision making.",
  },
  {
    title: "Service design",
    icon: Target,
    description: "Supporting organisations to review policies, environments, and processes through a neuroinclusive lens.",
  },
  {
    title: "Leadership confidence",
    icon: Shield,
    description: "Helping leaders create systems that support both staff and the communities they serve.",
  },
];

const journeyStages = [
  {
    stage: "Workforce awareness",
    icon: Megaphone,
    color: "hsl(var(--accent))",
    summary: "Building shared understanding across departments and teams.",
  },
  {
    stage: "Frontline scenario training",
    icon: ShieldAlert,
    color: "hsl(155, 60%, 42%)",
    summary: "Practical sessions built around real situations staff encounter in their roles.",
  },
  {
    stage: "Managers & leaders",
    icon: Brain,
    color: "hsl(270, 55%, 55%)",
    summary: "Helping managers support neurodivergent staff and respond confidently to complex situations.",
  },
  {
    stage: "Strategic advisory",
    icon: Target,
    color: "hsl(20, 100%, 55%)",
    summary: "Embedding neuroinclusion within policy, culture, and service design.",
  },
];

const sectors = [
  { label: "NHS services", icon: Stethoscope },
  { label: "Rail & transport", icon: Train },
  { label: "Police & emergency services", icon: ShieldAlert },
  { label: "Local authorities", icon: Landmark },
  { label: "Universities & education", icon: GraduationCap },
];

const frontlineRoles = [
  "Teachers",
  "Nurses",
  "Police officers",
  "Rail staff",
  "Local authority teams",
  "University support services",
];

const ForPublicSector = () => (
  <PathwayLanding
    audience="public-sector"
    badge="For Public Sector"
    title="Neuroinclusion for government, NHS, and public services"
    heroDescription="Meet your legal duties, support your workforce, and redesign services so they work for neurodivergent citizens and staff."
    seoTitle="Neurodiversity Support for Public Sector & NHS | Neurodiversity Global"
    seoDescription="Specialist neurodiversity training and consultancy for NHS, government, and public sector organisations. Meet legal duties and improve outcomes."
    breadcrumbLabel="For Public Sector"
    breadcrumbPath="/for-public-sector"
    persona="Charlie"
    whatsappNumber="447000000000"
    heroImage={heroImg}
    heroImageAlt="Public sector and emergency services professionals"
    placeholders={[
      "How do we meet our Equality Act duties around neurodiversity?",
      "What neurodiversity training is available for NHS staff?",
      "How can we make our public services more accessible for neurodivergent people?",
      "We need help redesigning our recruitment process — where do we start?",
      "What does a neuroinclusion strategy look like for local government?",
    ]}
  >
    {/* ═══════════════════════════════════════════
        SERVICES THAT WORK IN THE REAL WORLD
        ═══════════════════════════════════════════ */}
    <PageSection
      id="real-world"
      badge="The reality"
      title="Neuroinclusive services that work in the real world"
      description="Public services are built to serve everyone. The challenge is that many systems were never designed with neurodivergent people in mind."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            Neurodiversity Global works with public sector organisations to strengthen staff capability, improve service delivery, and create environments where neurodivergent citizens and employees can succeed.
          </p>
          <p className="font-display font-bold text-foreground">
            Our focus is practical. Helping teams deliver services with confidence, consistency, and clarity.
          </p>
        </div>

        {/* Frontline roles callout */}
        <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-6">
          <p className="font-display font-bold text-sm text-foreground mb-4">
            Staff who support neurodivergent people every day
          </p>
          <div className="grid grid-cols-2 gap-2">
            {frontlineRoles.map((role) => (
              <div key={role} className="flex items-center gap-2.5 rounded-lg bg-accent/[0.06] px-3 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-muted-foreground font-medium">{role}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Yet many tell us the same thing: they want to help, but they have not been given the tools.
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
      title="When staff are unsure how to respond"
      description="Staff often face situations where behaviour, communication, or emotional regulation becomes difficult to understand."
      variant="sand"
    >
      <WhatIsBreaking
        title="What happens without neuroinclusion infrastructure"
        items={[
          "Inconsistent service experiences for neurodivergent citizens",
          "Unnecessary escalation of situations that could have been managed",
          "Safeguarding concerns arising from misunderstanding, not risk",
          "Rising complaints that erode trust in services",
          "Staff feeling overwhelmed and unsupported in frontline roles",
        ]}
      />

      <PullQuote
        quote="Most public sector professionals care deeply about the people they serve. What they often lack is practical understanding and organisational support."
      />
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHAT WE DO — Three focus areas
        ═══════════════════════════════════════════ */}
    <PageSection
      id="what-we-do"
      badge="What we do"
      title="Training, advisory work, and real-world scenarios grounded in frontline experience"
      description="We help public sector organisations design environments and services that work better for neurodivergent people and the staff who support them."
      variant="default"
    >
      <div className="grid sm:grid-cols-3 gap-5">
        {focusAreas.map((area, i) => (
          <motion.div
            key={area.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <area.icon size={24} className="text-accent" />
            </div>
            <h3 className="font-display font-bold text-sm text-foreground mb-2">{area.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-accent/[0.06] border border-accent/15 p-6 flex items-start gap-4">
        <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-display font-bold text-foreground">This approach strengthens services while supporting the people delivering them.</span>
        </p>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        HOW WE WORK — Journey stages
        ═══════════════════════════════════════════ */}
    <PageSection
      id="how-we-work"
      badge="How we work"
      title="Programmes designed for frontline teams and leadership"
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
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHERE WE WORK — Sectors
        ═══════════════════════════════════════════ */}
    <PageSection
      id="sectors"
      badge="Where we work"
      title="Supporting organisations across the public sector"
      description="Each environment has different pressures and responsibilities. Our work is always adapted to the realities of that sector."
      variant="sand"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
        THE OUTCOME
        ═══════════════════════════════════════════ */}
    <PageSection
      id="outcomes"
      badge="The outcome"
      title="When staff feel confident and environments are designed with neurodivergence in mind"
      variant="default"
    >
      <OutcomeBlock
        title="What organisations commonly experience"
        outcomes={[
          { label: "Improved service consistency across departments" },
          { label: "Fewer escalations and complaints" },
          { label: "More confident frontline staff" },
          { label: "Better outcomes for neurodivergent citizens" },
          { label: "Stronger organisational trust" },
        ]}
      />

      <div className="mt-6 rounded-xl bg-accent/[0.06] border border-accent/15 p-6 flex items-start gap-4">
        <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-display font-bold text-foreground">Neuroinclusion strengthens both the workforce and the services they deliver.</span>
        </p>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        FINAL CTA
        ═══════════════════════════════════════════ */}
    <PageCTA
      title="Work with us"
      description="If your organisation wants to equip staff, improve service design, and support neurodivergent citizens more effectively, we would be happy to talk. Speak with our founders to explore how neuroinclusive services can strengthen your organisation."
      primaryLabel="Book a discovery call"
      primaryHref="/feedback"
      secondaryLabel="Send us a message"
      secondaryHref="/feedback"
    />
  </PathwayLanding>
);

export default ForPublicSector;
