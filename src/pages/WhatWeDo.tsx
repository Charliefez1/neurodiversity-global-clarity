import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import RelevantWorkshops from "@/components/blocks/RelevantWorkshops";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NEURO_COLOURS } from "@/data/neuroColours";
import {
  AlertTriangle,
  Target,
  GraduationCap,
  Settings,
  Wrench,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Shield,
  Briefcase,
  Users,
  Zap,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import systemsImg from "@/assets/what-we-do-systems.jpg";
import workshopImg from "@/assets/workshop-hero-team.png";
import dashboardImg from "@/assets/coaching-dashboard.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "problem", label: "The Problem", icon: AlertTriangle },
  { id: "difference", label: "What Makes Us Different", icon: Target },
  { id: "training", label: "Training", icon: GraduationCap },
  { id: "advisory", label: "Strategic Advisory", icon: Settings },
  { id: "tools", label: "Implementation Tools", icon: Wrench },
  { id: "performance", label: "Performance", icon: TrendingUp },
];

const problemCards = [
  { text: "Managers struggling to support their teams", icon: Users },
  { text: "Miscommunication and unnecessary friction", icon: Zap },
  { text: "Employees masking or over-adapting to survive the day", icon: Shield },
  { text: "Skilled people leaving roles they should have succeeded in", icon: AlertTriangle },
  { text: "Awareness campaigns that rarely change how work actually happens", icon: Lightbulb },
  { text: "Generic diversity training where neurodiversity appears as one small module", icon: BookOpen },
];

const approachPillars = [
  {
    title: "Diagnose the system, not the person",
    description: "We audit how your organisation communicates, manages, and measures performance — identifying where neurodivergent talent is being lost to design, not deficit.",
    icon: Target,
    colour: NEURO_COLOURS[0],
  },
  {
    title: "Train for behaviour change, not just awareness",
    description: "Every session is facilitator-led, interactive, and grounded in real workplace scenarios. We do not lecture. We equip people with tools they use the next day.",
    icon: GraduationCap,
    colour: NEURO_COLOURS[1],
  },
  {
    title: "Redesign structures that create friction",
    description: "Recruitment processes, meeting formats, performance reviews, communication norms — we work with you to redesign the systems that silently exclude.",
    icon: Settings,
    colour: NEURO_COLOURS[2],
  },
  {
    title: "Embed, measure, and sustain",
    description: "Change that disappears after a workshop is not change. We build internal capability, track outcomes, and ensure neuroinclusion becomes part of how you operate.",
    icon: TrendingUp,
    colour: NEURO_COLOURS[3],
  },
];

const whatWeChange = [
  { label: "Leadership behaviour", icon: Users, colour: NEURO_COLOURS[0] },
  { label: "Communication structures", icon: Settings, colour: NEURO_COLOURS[1] },
  { label: "Team dynamics", icon: Briefcase, colour: NEURO_COLOURS[2] },
  { label: "Recruitment processes", icon: Target, colour: NEURO_COLOURS[3] },
  { label: "Performance management", icon: TrendingUp, colour: NEURO_COLOURS[4] },
  { label: "Workplace environments", icon: Wrench, colour: NEURO_COLOURS[0] },
];

const trainingProgrammes = [
  {
    title: "Aware",
    icon: BookOpen,
    description: "Building shared understanding across the organisation.",
    colour: NEURO_COLOURS[0],
  },
  {
    title: "Champions",
    icon: Shield,
    description: "Developing internal advocates who drive change within teams.",
    colour: NEURO_COLOURS[1],
  },
  {
    title: "Managers",
    icon: Briefcase,
    description: "Practical leadership tools for managing different working styles.",
    colour: NEURO_COLOURS[2],
  },
  {
    title: "Leaders",
    icon: Users,
    description: "Strategic sessions connecting neuroinclusion to organisational performance.",
    colour: NEURO_COLOURS[3],
  },
];

const advisoryAreas = [
  "Recruitment processes",
  "Leadership development",
  "Communication frameworks",
  "Workplace adjustments",
  "Psychological safety",
  "Performance management",
];

const WhatWeDo = () => {
  return (
    <>
      <SEOHead
        title="What We Do. Neurodiversity Training, Strategy and Systems Redesign"
        description="Neurodiversity Global helps organisations move from awareness to operational change. Training that changes behaviour, strategic advisory, and practical implementation tools."
        path="/what-we-do"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "What We Do", url: "https://www.neurodiversityglobal.com/what-we-do" },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Neurodiversity Training, Strategy & Systems Redesign",
          "Helping organisations move from awareness to operational change through training, strategic advisory, and practical implementation tools.",
          "https://www.neurodiversityglobal.com/what-we-do"
        )}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What We Do" }]} />
      <main>
        <PageHero
          badge="What we do"
          title="The world has changed. Most workplaces have not."
          description="Every organisation talks about talent. Very few have built environments where that talent can actually succeed. Neurodiversity Global exists to redesign how organisations work so different minds can perform at their best."
        />

        {/* ═══════════ THE PROBLEM — image + text split ═══════════ */}
        <section id="problem" className="bg-background py-20 lg:py-28" aria-labelledby="problem-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={systemsImg}
                    alt="Modern glass building representing organisational systems"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">~20%</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">of the workforce processes information differently.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  The reality
                </p>
                <h2 id="problem-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  The problem most organisations{" "}
                  <span className="text-accent">are avoiding</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Up to 30 per cent of the workforce processes information differently. That includes people with ADHD, autism, dyslexia, dyspraxia, and other cognitive differences. They are already in every organisation. Most systems were never designed with them in mind.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {problemCards.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeUp}
                      className="flex items-start gap-3 rounded-lg bg-destructive/[0.04] border border-destructive/10 p-4"
                    >
                      <item.icon size={16} className="text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote
          quote="Neurodivergence is not the problem. Outdated systems are."
          attribution="Rich Ferriman, Co-founder"
          accentIndex={0}
        />

        {/* ═══════════ OUR APPROACH — expanded pillars ═══════════ */}
        <section id="difference" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="difference-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                Our approach
              </p>
              <h2 id="difference-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                Most organisations treat neurodiversity as a{" "}
                <span className="text-accent">training issue</span>. We treat it as{" "}
                <span className="text-accent">infrastructure</span>.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                The problem is not the individual. The problem is how organisations are designed. We help you redesign how work operates so different ways of thinking become an advantage, not a friction point.
              </p>
            </div>

            {/* Four pillars — numbered cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              {approachPillars.map((pillar, i) => (
                <motion.article
                  key={pillar.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="h-1" style={{ backgroundColor: pillar.colour }} />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${pillar.colour}18`, color: pillar.colour }}
                      >
                        <pillar.icon size={22} />
                      </div>
                      <div>
                        <span className="font-display font-bold text-xs uppercase tracking-wider" style={{ color: pillar.colour }}>
                          Step {i + 1}
                        </span>
                        <h3 className="font-display font-bold text-base text-card-foreground leading-snug">{pillar.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* What we change — compact chip grid */}
            <div>
              <h3 className="font-display font-bold text-base text-foreground mb-5">What we change</h3>
              <div className="flex flex-wrap gap-3">
                {whatWeChange.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="inline-flex items-center gap-2.5 rounded-full bg-card border border-border px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <item.icon size={14} style={{ color: item.colour }} />
                    <span className="text-sm font-display font-bold text-card-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Manifesto callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6 max-w-xl"
            >
              <p className="font-display font-bold text-base text-foreground">
                Inclusion is not a campaign. It is infrastructure.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                That is not a tagline. It is how we design every engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ TRAINING — dark navy section ═══════════ */}
        <section id="training" className="bg-primary py-20 lg:py-28" aria-labelledby="training-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Training that changes behaviour
                </p>
                <h2 id="training-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-primary-foreground">
                  Practical tools teams can{" "}
                  <span className="text-accent">use immediately</span>
                </h2>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed">
                  Our programmes are interactive, honest, and grounded in real workplace experience. We deliver four core workshops.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {trainingProgrammes.map((item, i) => (
                    <motion.article
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeUp}
                      className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 hover:bg-primary-foreground/[0.1] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${item.colour}25`, color: item.colour }}
                        >
                          <item.icon size={18} />
                        </div>
                        <h3 className="font-display font-bold text-sm text-primary-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-primary-foreground/65 leading-relaxed">{item.description}</p>
                    </motion.article>
                  ))}
                </div>

                <Link
                  to="/workshops"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Browse all 50+ workshops <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={workshopImg}
                    alt="Workshop facilitation in action"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">50+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">workshops covering every level of the organisation.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote
          quote="Training starts the conversation. Systems create change."
          accentIndex={2}
        />

        {/* ═══════════ STRATEGIC ADVISORY — image + text split ═══════════ */}
        <section id="advisory" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="advisory-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Strategic advisory
                </p>
                <h2 id="advisory-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  Embedding neuroinclusion into{" "}
                  <span className="text-accent">how you operate</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  We work directly with leadership teams to embed neuroinclusion into organisational structures. The aim is simple. Make inclusion part of how the organisation operates.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {advisoryAreas.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeUp}
                      className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span
                        className="block w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }}
                        aria-hidden="true"
                      />
                      <p className="text-sm text-card-foreground font-display font-bold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={dashboardImg}
                    alt="Coaching platform dashboard showing organisational tools"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-5 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-sm text-foreground">Systems-level change</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Not awareness. Infrastructure.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ IMPLEMENTATION TOOLS — dark section ═══════════ */}
        <section id="tools" className="bg-primary py-20 lg:py-28" aria-labelledby="tools-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                Practical tools
              </p>
              <h2 id="tools-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-primary-foreground">
                Understanding is not enough.{" "}
                <span className="text-accent">Organisations need tools that work.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { text: "Strengths and challenges mapping", icon: BarChart3 },
                { text: "Communication tools for managers", icon: Settings },
                { text: "Inclusive meeting frameworks", icon: Users },
                { text: "Workplace adjustment guidance", icon: Wrench },
                { text: "Organisational benchmarking", icon: TrendingUp },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 flex gap-3 items-center hover:bg-primary-foreground/[0.1] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-accent" />
                  </div>
                  <p className="text-sm text-primary-foreground font-display font-bold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PERFORMANCE — warm stone + outcomes ═══════════ */}
        <section id="performance" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="performance-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  The business case
                </p>
                <h2 id="performance-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  Neuroinclusion is a{" "}
                  <span className="text-accent">performance strategy</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  The organisations leading in neuroinclusion are not doing it for reputation. They are doing it for performance.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  When communication improves and people can work in ways that match how they think, teams simply perform better.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <OutcomeBlock
                  outcomes={[
                    { label: "Stronger innovation across teams" },
                    { label: "Higher productivity in specialist roles" },
                    { label: "Improved retention of talented people" },
                    { label: "Faster problem solving" },
                    { label: "Better collaboration across teams" },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recommended workshops */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <RelevantWorkshops
              workshopIds={["core-awareness", "champions", "managers", "leaders"]}
              title="Our core training programmes"
              description="Interactive, facilitator-led sessions delivered online or in person."
            />
          </div>
        </section>

        <PageCTA
          title="Ready to move from awareness to action?"
          description="Book a discovery call and we will recommend the right programme for your context. No obligation."
          pageSource="what-we-do"
        />
      </main>
      <Footer />
    </>
  );
};

export default WhatWeDo;
