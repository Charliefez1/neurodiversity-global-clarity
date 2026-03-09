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
  AlertTriangle, Lightbulb, ListOrdered, TrendingUp, ArrowRight,
  Search, Settings, Users, BarChart3, Shield,
} from "lucide-react";
import dashboardImg from "@/assets/coaching-dashboard.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "why-consultancy", label: "Why Consultancy", icon: AlertTriangle },
  { id: "what-we-do", label: "What We Do", icon: Lightbulb },
  { id: "how-it-works", label: "How It Works", icon: ListOrdered },
  { id: "outcomes", label: "Outcomes", icon: TrendingUp },
];

const consultancyFAQ = [
  { question: "What is neurodiversity consultancy?", answer: "Neurodiversity consultancy helps organisations design systems, policies, and cultures that work for neurodivergent employees. It goes beyond training to address the structural and systemic changes needed for genuine neuroinclusion." },
  { question: "How is consultancy different from training?", answer: "Training builds individual capability. Consultancy changes how your organisation works at a system level. Policies, processes, management structures, and culture. Most organisations need both." },
  { question: "What does a neurodiversity consultant do?", answer: "We audit your current practices, identify where neurodivergent employees are being failed by systems, design practical solutions, and support implementation. This includes policy review, process redesign, leadership coaching, and impact measurement." },
  { question: "How long does neurodiversity consultancy take?", answer: "Engagements typically range from a focused 4-week review to ongoing strategic partnerships spanning 6-12 months. The scope depends on your organisation's size, complexity, and objectives." },
];

const consultancyAreas = [
  { title: "Neuroinclusion audit", description: "A structured review of your policies, processes, management practices, and culture to identify where neurodivergent employees are being excluded.", icon: Search, colour: NEURO_COLOURS[0] },
  { title: "Policy and process redesign", description: "Practical changes to recruitment, onboarding, performance management, reasonable adjustments, and disciplinary processes.", icon: Settings, colour: NEURO_COLOURS[1] },
  { title: "Leadership coaching", description: "One-to-one and group coaching for senior leaders, helping them understand their role in creating neuroinclusive culture.", icon: Users, colour: NEURO_COLOURS[2] },
  { title: "Strategic roadmap", description: "A clear, prioritised plan for systemic change with measurable milestones and accountability.", icon: BarChart3, colour: NEURO_COLOURS[3] },
];

const steps = [
  { step: "1", title: "Discovery", description: "We understand your context, challenges, and objectives through stakeholder interviews and data review.", colour: NEURO_COLOURS[0] },
  { step: "2", title: "Audit and analysis", description: "We assess your current systems against best practice and identify the gaps causing problems.", colour: NEURO_COLOURS[1] },
  { step: "3", title: "Recommendations", description: "A clear, prioritised set of changes with practical implementation guidance.", colour: NEURO_COLOURS[2] },
  { step: "4", title: "Implementation support", description: "We work alongside your teams to embed changes and build internal capability.", colour: NEURO_COLOURS[3] },
  { step: "5", title: "Impact measurement", description: "We measure what has changed and provide evidence for continued investment.", colour: NEURO_COLOURS[4] },
];

const NeurodiversityConsultancy = () => {
  return (
    <>
      <SEOHead title="Neurodiversity Consultancy" description="Expert neurodiversity consultancy for organisations. Systems change, policy review, leadership coaching and strategic neuroinclusion. UK and global delivery." path="/neurodiversity-consultancy" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Neurodiversity Consultancy", url: "https://www.neurodiversityglobal.com/neurodiversity-consultancy" }])} />
      <JsonLd data={serviceSchema("Neurodiversity Consultancy", "Expert neurodiversity consultancy helping organisations design inclusive systems, policies, and cultures.", "https://www.neurodiversityglobal.com/neurodiversity-consultancy")} />
      <JsonLd data={faqSchema(consultancyFAQ)} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Neurodiversity Consultancy" }]} />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity Consultancy</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-primary-foreground">
                  Consultancy that changes how <span className="text-accent">organisations work</span>
                </h1>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed max-w-[50ch]">
                  We help organisations move beyond awareness to genuine neuroinclusion. Through systems change, policy review, and leadership coaching, we create workplaces where neurodivergent people thrive.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
                    Book a discovery call <ArrowRight size={16} />
                  </Link>
                  <Link to="/neurodiversity-training" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
                    See our training
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={dashboardImg} alt="Organisational systems and coaching tools" className="w-full h-[400px] lg:h-[480px] object-cover" loading="eager" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-sm text-foreground">Systems-level change</p>
                  <p className="text-xs text-muted-foreground mt-1">Not awareness. Infrastructure.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CONSULTANCY ═══════════ */}
        <section id="why-consultancy" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Why consultancy</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  Training alone does not <span className="text-accent">fix systems</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Most organisations train individuals but leave the systems that exclude neurodivergent people untouched. Consultancy addresses the root causes.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <RiskCallout
                  title="Signs your organisation needs consultancy"
                  items={[
                    "You have delivered training but nothing has changed in practice.",
                    "Neurodivergent employees are leaving, raising grievances, or going off sick.",
                    "Managers are unsure how to implement reasonable adjustments consistently.",
                    "Your HR processes were not designed with neurodivergent employees in mind.",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote quote="Training starts the conversation. Systems create change." accentIndex={2} />

        {/* ═══════════ WHAT WE DO — dark navy ═══════════ */}
        <section id="what-we-do" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">What we do</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                Practical consultancy, <span className="text-accent">not theoretical advice</span>
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                We work inside your organisation to understand what is failing and design practical solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {consultancyAreas.map((item, i) => (
                <motion.article key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}
                  className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 overflow-hidden hover:bg-primary-foreground/[0.1] transition-colors"
                >
                  <div className="h-1" style={{ backgroundColor: item.colour }} />
                  <div className="p-6">
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

        {/* ═══════════ HOW IT WORKS — warm stone ═══════════ */}
        <section id="how-it-works" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">How it works</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                A clear, <span className="text-accent">structured approach</span>
              </h2>
            </motion.div>

            <div className="space-y-4 max-w-3xl">
              {steps.map((s, i) => (
                <motion.div key={s.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex gap-5 rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.colour}18`, color: s.colour }}>
                    <span className="font-display font-bold text-lg">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </motion.div>
              ))}
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
                  What consultancy <span className="text-accent">delivers</span>
                </h2>
                <div className="mt-8">
                  <OutcomeBlock
                    outcomes={[
                      { label: "Reduced legal risk through compliant, well-documented adjustment processes." },
                      { label: "Lower attrition among neurodivergent employees and their managers." },
                      { label: "Clearer, more consistent management practice across teams." },
                      { label: "Measurable improvement in employee experience and engagement scores." },
                    ]}
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <TestimonialBlock
                  quote="The audit gave us a clear picture of where we were failing. The recommendations were practical, not aspirational. We knew exactly what to do and in what order."
                  author="Director of People & Culture"
                  org="National Organisation"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote quote="Consultancy changes your systems. Training changes your people. Most organisations need both." accentIndex={3} />

        {/* ═══════════ COMBINE WITH TRAINING ═══════════ */}
        <section className="bg-warm-stone py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
              Combine consultancy with training
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-[48ch] mx-auto">
              Consultancy changes your systems. Training changes your people. Most organisations need both.
            </p>
            <Link to="/neurodiversity-training" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all">
              Explore our training workshops <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">FAQ</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                Frequently asked questions
              </h2>
            </motion.div>
            <div className="space-y-4 max-w-3xl">
              {consultancyFAQ.map((faq, i) => (
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

        <PageCTA title="Ready to transform your organisation?" description="Book a discovery call and we will scope the right consultancy engagement for your context. No obligation." />
      </main>
      <Footer />
    </>
  );
};

export default NeurodiversityConsultancy;
