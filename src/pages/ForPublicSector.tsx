import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Target, Stethoscope, Train, ShieldAlert, Landmark, GraduationCap, CheckCircle2, Megaphone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import WhatIsBreaking from "@/components/blocks/WhatIsBreaking";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-public-sector-hero.png";
import frontlineImg from "@/assets/pathway/public-sector-frontline.jpg";
import servicesImg from "@/assets/pathway/public-sector-services.jpg";

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
    number: "01",
    icon: Megaphone,
    color: "hsl(var(--accent))",
    summary: "Building shared understanding across departments and teams.",
  },
  {
    stage: "Frontline scenario training",
    number: "02",
    icon: ShieldAlert,
    color: "hsl(155, 60%, 42%)",
    summary: "Practical sessions built around real situations staff encounter in their roles.",
  },
  {
    stage: "Managers & leaders",
    number: "03",
    icon: Brain,
    color: "hsl(270, 55%, 55%)",
    summary: "Helping managers support neurodivergent staff and respond confidently to complex situations.",
  },
  {
    stage: "Strategic advisory",
    number: "04",
    icon: Target,
    color: "hsl(20, 100%, 55%)",
    summary: "Embedding neuroinclusion within policy, culture, and service design.",
  },
];

const sectors = [
  { label: "NHS services", icon: Stethoscope },
  { label: "Rail & transport", icon: Train },
  { label: "Police & emergency", icon: ShieldAlert },
  { label: "Local authorities", icon: Landmark },
  { label: "Universities & education", icon: GraduationCap },
];

const frontlineRoles = [
  "Teachers", "Nurses", "Police officers",
  "Rail staff", "Local authority teams", "University support services",
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
        THE REALITY — image + text split
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={frontlineImg}
                alt="NHS staff supporting patients with care"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating callout */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[220px]">
              <p className="font-display font-bold text-sm text-foreground">6 frontline roles</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">supporting neurodivergent people every day — often without the tools</p>
            </div>
          </motion.div>

          {/* Text */}
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
              Services built to serve everyone.{" "}
              <span className="text-accent">Systems designed for no one in particular.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Across the public sector, staff increasingly support neurodivergent people in their daily work. Yet many frontline professionals tell us the same thing — they want to help, but they have not been given the tools.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {frontlineRoles.map((role) => (
                <div key={role} className="flex items-center gap-2.5 rounded-lg bg-accent/[0.06] border border-accent/10 px-3 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <p className="text-sm text-muted-foreground font-medium">{role}</p>
                </div>
              ))}
            </div>

            <Link
              to="/feedback"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Sparkles size={16} />
              Talk to us about your team
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

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
        WHAT WE DO — 3 focus areas with image
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Text + cards */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              What we do
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
              Training, advisory work, and{" "}
              <span className="text-accent">real-world scenarios</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We help public sector organisations design environments and services that work better for neurodivergent people and the staff who support them.
            </p>

            <div className="mt-8 space-y-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <area.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-accent/[0.06] border border-accent/15 p-5 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="font-display font-bold text-foreground">This approach strengthens services while supporting the people delivering them.</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={servicesImg}
                alt="Community members accessing public services"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        HOW WE WORK — Journey stages on dark
        ═══════════════════════════════════════════ */}
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
            How we work
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
            Programmes designed for{" "}
            <span className="text-accent">frontline teams and leadership</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journeyStages.map((s, i) => (
            <motion.div
              key={s.stage}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 hover:bg-primary-foreground/[0.1] hover:border-primary-foreground/20 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${s.color}20`, color: s.color }}
              >
                <span className="font-display font-extrabold text-sm">{s.number}</span>
              </div>
              <h3 className="font-display font-bold text-base text-primary-foreground mb-2">
                {s.stage}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {s.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

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
            className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
              <sector.icon size={22} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground leading-tight">
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
