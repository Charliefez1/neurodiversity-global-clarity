import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import RiskCallout from "@/components/blocks/RiskCallout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, faqSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NEURO_COLOURS } from "@/data/neuroColours";
import {
  AlertTriangle, BookOpen, Users, TrendingUp, GraduationCap,
  ArrowRight, Shield, Briefcase, Brain, MessageSquare, Settings,
} from "lucide-react";
import workshopImg from "@/assets/industries/diverse-professions-hero.png";
import diverseImg from "@/assets/industries/community-workers.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "why-training", label: "Why Training Matters", icon: AlertTriangle },
  { id: "what-we-cover", label: "What We Cover", icon: BookOpen },
  { id: "who-its-for", label: "Who It's For", icon: Users },
  { id: "outcomes", label: "Outcomes", icon: TrendingUp },
  { id: "workshops", label: "Our Workshops", icon: GraduationCap },
];

const trainingFAQ = [
  { question: "What is neurodiversity training?", answer: "Neurodiversity training equips managers, HR professionals, and leaders with practical skills to support neurodivergent employees. It covers conditions like ADHD, autism, dyslexia, and dyspraxia in the workplace, focusing on reasonable adjustments, communication, and inclusive management practices." },
  { question: "Who should attend neurodiversity training?", answer: "Line managers, HR teams, senior leaders, employee resource group members, and anyone responsible for managing, supporting, or working alongside neurodivergent colleagues. We offer tailored sessions for each audience." },
  { question: "How is your neurodiversity training different from awareness training?", answer: "Awareness training tells people neurodiversity exists. Our training changes what people actually do. We focus on practical skills, management behaviour, and systemic change, not just knowledge transfer." },
  { question: "Is neurodiversity training a legal requirement in the UK?", answer: "While not explicitly mandated, the Equality Act 2010 requires employers to make reasonable adjustments for disabled employees, which includes many neurodivergent conditions. Training managers to understand and implement adjustments is a key part of meeting this duty." },
  { question: "How long does neurodiversity training take?", answer: "Our workshops range from 60-minute awareness sessions to full-day strategic programmes. Most organisations start with a 3-hour session for managers and build from there based on need." },
];

const coverageAreas = [
  { title: "ADHD in the workplace", description: "Attention regulation, motivation, time perception, emotional regulation, and practical management strategies.", icon: Brain, colour: NEURO_COLOURS[0] },
  { title: "Autism in the workplace", description: "Communication differences, predictability needs, sensory considerations, and inclusive team design.", icon: MessageSquare, colour: NEURO_COLOURS[1] },
  { title: "Dyslexia at work", description: "Processing speed, memory, written communication adjustments, and strengths-based approaches.", icon: BookOpen, colour: NEURO_COLOURS[2] },
  { title: "Reasonable adjustments", description: "Legal framework, practical implementation, cost-effective solutions, and documentation.", icon: Settings, colour: NEURO_COLOURS[3] },
  { title: "Inclusive management", description: "Communication styles, workload design, performance reviews, and early intervention.", icon: Briefcase, colour: NEURO_COLOURS[4] },
  { title: "Organisational strategy", description: "Systems change, policy review, culture shaping, and measuring neuroinclusion.", icon: TrendingUp, colour: NEURO_COLOURS[0] },
];

const audiences = [
  { title: "Line managers", description: "Day-to-day management, reasonable adjustments, performance conversations, and early intervention.", icon: Briefcase, colour: NEURO_COLOURS[0] },
  { title: "HR and People teams", description: "Legal compliance, complex cases, policy frameworks, and adjustments processes.", icon: Shield, colour: NEURO_COLOURS[1] },
  { title: "Senior leaders", description: "Strategic risk, culture shaping, governance, and investment decisions.", icon: Users, colour: NEURO_COLOURS[2] },
  { title: "All employees", description: "Awareness sessions that build understanding and reduce stigma across the organisation.", icon: GraduationCap, colour: NEURO_COLOURS[3] },
];

const NeurodiversityTraining = () => {
  return (
    <>
      <SEOHead title="Neurodiversity Training" description="Accredited neurodiversity training for managers, HR teams and leaders. 50+ workshops covering ADHD, autism, dyslexia in the workplace. UK and global delivery." path="/neurodiversity-training" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Neurodiversity Training", url: "https://www.neurodiversityglobal.com/neurodiversity-training" }])} />
      <JsonLd data={serviceSchema("Neurodiversity Training", "Accredited neurodiversity training workshops for managers, HR teams, and leaders.", "https://www.neurodiversityglobal.com/neurodiversity-training")} />
      <JsonLd data={faqSchema(trainingFAQ)} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Neurodiversity Training" }]} />

      <main>
        {/* ═══════════ HERO — image + text split ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity Training</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-primary-foreground">
                  Training that changes <span className="text-accent">how organisations work</span>
                </h1>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed max-w-[50ch]">
                  Accredited, evidence-based neurodiversity training for managers, HR professionals, and leaders. Designed by neurodivergent professionals, delivered globally. 50+ workshops covering ADHD, autism, dyslexia, and more.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/workshops" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
                    Browse all workshops <ArrowRight size={16} />
                  </Link>
                  <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
                    Book a discovery call
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={workshopImg} alt="Workshop facilitation in action" className="w-full h-[400px] lg:h-[480px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">50+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">accredited workshops covering every level.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY TRAINING — warm stone ═══════════ */}
        <section id="why-training" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Why this matters</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  Why neurodiversity training is <span className="text-accent">essential</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  1 in 5 people are neurodivergent. Most workplaces were not designed for how they think, work, or communicate. Training bridges that gap.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <RiskCallout
                  title="The cost of not training"
                  items={[
                    "Employment tribunal claims involving neurodivergent employees are rising year on year.",
                    "Untrained managers are the number one reason neurodivergent employees leave.",
                    "Generic awareness sessions create a false sense of competence without changing behaviour.",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote quote="Awareness training tells people neurodiversity exists. Our training changes what people actually do." accentIndex={1} />

        {/* ═══════════ WHAT WE COVER — dark navy ═══════════ */}
        <section id="what-we-cover" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">What we cover</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                Practical neurodiversity training, <span className="text-accent">not just theory</span>
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                Our training covers the conditions, the workplace context, and the management skills needed to create genuinely inclusive teams.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coverageAreas.map((item, i) => (
                <motion.article key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}
                  className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 overflow-hidden hover:bg-primary-foreground/[0.1] transition-colors"
                >
                  <div className="h-1" style={{ backgroundColor: item.colour }} />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.colour}25`, color: item.colour }}>
                        <item.icon size={18} />
                      </div>
                      <h3 className="font-display font-bold text-sm text-primary-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-primary-foreground/65 leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHO IT'S FOR — image + cards ═══════════ */}
        <section id="who-its-for" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={diverseImg} alt="Diverse workforce across sectors" className="w-full h-[380px] lg:h-[460px] object-cover object-top" loading="lazy" />
                </div>
                <div className="absolute -top-5 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-sm text-foreground">Every level</p>
                  <p className="text-xs text-muted-foreground mt-1">From frontline to boardroom.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Who it's for</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  Training for <span className="text-accent">every level</span> of your organisation
                </h2>
                <div className="mt-6 space-y-4">
                  {audiences.map((item, i) => (
                    <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                      className="flex gap-4 items-start rounded-xl bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.colour}18`, color: item.colour }}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm text-card-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ OUTCOMES — dark ═══════════ */}
        <section id="outcomes" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                  Measurable results from <span className="text-accent">neurodiversity training</span>
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "92%", label: "rate training as directly applicable" },
                    { value: "60%", label: "decrease in related grievances" },
                    { value: "9.7/10", label: "average session rating" },
                    { value: "50+", label: "workshops available" },
                  ].map((stat, i) => (
                    <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                      className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-4 text-center"
                    >
                      <p className="font-display font-bold text-xl text-accent">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <TestimonialBlock
                  quote="This wasn't awareness training. It was the most practical, relevant session we've ever run. Managers left knowing exactly what to do differently."
                  author="Head of Learning & Development"
                  org="FTSE 250 Organisation"
                />
                <div className="mt-6">
                  <OutcomeBlock
                    outcomes={[
                      { label: "Managers report significantly higher confidence in supporting neurodivergent team members." },
                      { label: "Organisations see faster, more consistent reasonable adjustment processes." },
                    ]}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote quote="Training starts the conversation. Systems create change." accentIndex={2} />

        {/* ═══════════ FAQ — warm stone ═══════════ */}
        <section id="faq" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">FAQ</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                Frequently asked questions
              </h2>
            </motion.div>
            <div className="space-y-4 max-w-3xl">
              {trainingFAQ.map((faq, i) => (
                <motion.details key={faq.question} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-border bg-card group shadow-sm"
                >
                  <summary className="px-6 py-5 cursor-pointer font-display font-semibold text-foreground text-sm leading-snug list-none hover:bg-muted/50 transition-colors rounded-2xl">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Browse workshops link */}
        <section id="workshops" className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
              50+ neurodiversity training workshops
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-[48ch] mx-auto">
              From 60-minute awareness sessions to full-day strategic programmes, tailored to your setting and industry.
            </p>
            <Link to="/workshops" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
              Browse all workshops <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <PageCTA title="Ready to train your organisation?" description="Book a discovery call and we will recommend the right programme for your context. No obligation." />
      </main>
      <Footer />
    </>
  );
};

export default NeurodiversityTraining;
