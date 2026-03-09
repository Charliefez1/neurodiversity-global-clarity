import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import RiskCallout from "@/components/blocks/RiskCallout";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { motion } from "framer-motion";
import { NEURO_COLOURS } from "@/data/neuroColours";
import { Users, GraduationCap, Headphones, Settings, AlertTriangle, Award, TrendingUp } from "lucide-react";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import communityImg from "@/assets/industries/community-workers.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "reality", label: "Your Reality", icon: AlertTriangle },
  { id: "support", label: "How We Help", icon: GraduationCap },
  { id: "outcomes", label: "Outcomes", icon: TrendingUp },
  { id: "evidence", label: "Evidence", icon: Award },
];

const supportAreas = [
  { icon: GraduationCap, title: "Manager and HR training", description: "Accredited programmes that build confidence and change practice, not just raise awareness.", colour: NEURO_COLOURS[0] },
  { icon: Headphones, title: "Coaching and in-work support", description: "One-to-one coaching for neurodivergent employees and the managers who support them.", colour: NEURO_COLOURS[1] },
  { icon: Settings, title: "Strategy and policy review", description: "Audit your current approach, redesign systems, and embed neurodiversity into how your organisation works.", colour: NEURO_COLOURS[2] },
];

const WhoWeWorkWithTemplate = () => {
  return (
    <>
      <SEOHead title="HR & People Leaders" description="Neurodiversity training, coaching, and strategy support for HR and People leaders navigating neurodiversity in work." path="/who-we-work-with" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Who We Work With", url: "https://www.neurodiversityglobal.com/who-we-work-with" }])} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Who We Work With" }]} />
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Who we work with</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-primary-foreground">
                  HR and People leaders navigating <span className="text-accent">neurodiversity in work</span>
                </h1>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed max-w-[50ch]">
                  You are responsible for policy, culture, and compliance, but the guidance is unclear, the risks are rising, and awareness training has not changed enough.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={communityImg} alt="Diverse workforce across industries" className="w-full h-[400px] lg:h-[480px] object-cover object-top" loading="eager" />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">500+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">organisations supported by our People team programmes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ YOUR REALITY ═══════════ */}
        <section id="reality" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Your reality</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  The pressure <span className="text-accent">you are under</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Neurodiversity sits across employment law, wellbeing, EDI, and talent strategy. Most HR teams are expected to lead on it without specialist expertise.
                </p>
                <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Common failure points</h3>
                  <ul className="space-y-2">
                    {[
                      "Reasonable adjustment processes are slow, inconsistent, or invisible.",
                      "Managers lack confidence to have conversations about cognitive difference.",
                      "Policies exist on paper but are not followed in practice.",
                      "Neurodivergent employees disengage before issues are identified.",
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="block w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <RiskCallout
                  title="Risks you carry"
                  items={[
                    "Employment tribunal claims involving neurodiversity are increasing year on year.",
                    "Failure to make reasonable adjustments is a legal duty, not a discretionary benefit.",
                    "Reputational risk from poor employee experience is difficult to recover from.",
                    "Talent loss in a competitive market is costly and often preventable.",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote quote="Neurodiversity sits across employment law, wellbeing, EDI, and talent strategy. Most HR teams are expected to lead without specialist expertise." accentIndex={1} />

        {/* ═══════════ HOW WE HELP — dark navy ═══════════ */}
        <section id="support" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">How we help</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                What we provide for <span className="text-accent">People teams</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-5">
              {supportAreas.map((s, i) => (
                <motion.article key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 overflow-hidden hover:bg-primary-foreground/[0.1] transition-colors"
                >
                  <div className="h-1" style={{ backgroundColor: s.colour }} />
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${s.colour}25`, color: s.colour }}>
                      <s.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-sm text-primary-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8">
              <AccessibilityNote />
            </motion.div>
          </div>
        </section>

        {/* ═══════════ OUTCOMES ═══════════ */}
        <section id="outcomes" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  What changes for <span className="text-accent">People teams</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Practical outcomes that matter to your role, your organisation, and the people you support.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <OutcomeBlock
                  outcomes={[
                    { metric: "40%", label: "reduction in neurodivergent employee turnover within 12 months." },
                    { metric: "3×", label: "faster reasonable adjustment response times after implementing our frameworks." },
                    { metric: "92%", label: "of HR participants rate our training as directly applicable to their role." },
                    { label: "Increased manager confidence in having neurodiversity conversations." },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ EVIDENCE — dark ═══════════ */}
        <section id="evidence" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-14">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Evidence</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                Experience that is <span className="text-accent">relevant to you</span>
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                We have worked with People teams across sectors, from FTSE 250 companies to NHS trusts and government departments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <TestimonialBlock
                quote="Neurodiversity Global gave our HR team the confidence and the frameworks to actually change how we support neurodivergent employees, not just talk about it."
                author="Director of People"
                org="FTSE 250 Financial Services"
              />
              <TestimonialBlock
                quote="The training was practical, evidence-based, and directly relevant to the challenges our People team faces every day."
                author="Head of EDI"
                org="NHS Trust"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "500+", label: "Organisations supported" },
                { value: "15+", label: "Years of experience" },
                { value: "50,000+", label: "People trained" },
                { value: "30", label: "Countries reached" },
              ].map((stat, i) => (
                <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-4 text-center"
                >
                  <p className="font-display font-bold text-xl text-accent">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Let's talk about your People strategy" description="A 30-minute call to understand your context, identify priorities, and outline what support would look like. No obligation." />
      </main>
      <Footer />
    </>
  );
};

export default WhoWeWorkWithTemplate;
