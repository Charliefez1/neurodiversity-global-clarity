import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import KeyIssuesGrid from "@/components/blocks/KeyIssuesGrid";
import WhatIsBreaking from "@/components/blocks/WhatIsBreaking";
import PositivesBlock from "@/components/blocks/PositivesBlock";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import RelevantWorkshops from "@/components/blocks/RelevantWorkshops";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, faqSchema } from "@/components/JsonLd";
import { ShoppingBag, Heart, FileText, BarChart3, Wallet } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndSalesImg from "@/assets/blog/neurodiversity-sales.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };
const faqs = [
  { question: "Our sales culture is results-focused. Will this training land?", answer: "We lead with commercial outcomes. Attrition cost, CRM workarounds, and lost revenue from burnt-out performers are the entry point." },
  { question: "How do we adjust performance management without inconsistency?", answer: "We help you separate output metrics from process compliance. A neurodivergent salesperson who hits target but cannot complete CRM in real-time is a process problem." },
  { question: "Can you help us review our commission structure?", answer: "Yes. We consult on how income variability, target setting, and review cadence interact with neurodivergent regulation needs." },
  { question: "Our sales directors do not believe neurodiversity is relevant.", answer: "We provide a sector briefing with prevalence data, attrition cost, and performance data. Then offer a leadership session to move from scepticism to action." },
];
const keyIssues = [
  { title: "Rejection sensitivity and emotional dysregulation", description: "In a role built on receiving rejection daily, the emotional impact is significantly higher than managers recognise.", icon: Heart },
  { title: "CRM compliance and administrative burden", description: "Executive function challenges make CRM compliance disproportionately demanding and unrelated to actual sales capability.", icon: FileText },
  { title: "Meeting cadence and performance review culture", description: "Constant public scrutiny through dashboards and standups is a sustained stressor, not a motivation tool.", icon: BarChart3 },
  { title: "Variable income and uncertainty", description: "Commission-based structures create income unpredictability that is particularly destabilising for neurodivergent employees.", icon: Wallet },
  { title: "Social stamina in client-facing roles", description: "Extended social performance required in senior commercial roles creates significant cognitive load.", icon: ShoppingBag },
];

const IndustrySales = () => (
  <>
    <SEOHead title="Neurodiversity in Sales & Commercial" description="Neurodiversity training for sales and commercial teams." path="/industries/sales" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Sales & Commercial", url: "https://www.neurodiversityglobal.com/industries/sales" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Sales & Commercial", "Neurodiversity training for sales and commercial teams.", "https://www.neurodiversityglobal.com/industries/sales")} />
    <JsonLd data={faqSchema(faqs)} /><Navbar /><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Sales & Commercial" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in sales</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where performance pressure meets emotional regulation demand</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Sales environments attract neurodivergent talent. Without support, the same traits that drive success create high burnout risk.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndSalesImg} alt="Sales team" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">20+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Sales organisations supported</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points sales cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["High-performing staff leaving due to burnout after sustained pressure", "PIPs applied for CRM non-compliance unrelated to sales capability", "Rejection sensitivity misread as attitude problems", "Commission structures creating instability that compounds regulation challenges"]} /></div></section>
      <PullQuote quote="Rejection sensitive dysphoria is not a motivation problem. It is a physiological response. Treat it accordingly." accentIndex={3} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why sales should lead</h2><PositivesBlock items={[{ title: "Hyperfocus drives exceptional client knowledge", description: "Deep client expertise gives genuine competitive advantage in complex sales." }, { title: "Pattern recognition supports opportunity identification", description: "Identifying buying signals and market patterns is a direct commercial asset." }, { title: "Authenticity builds client trust", description: "Directness and genuine interest are more compelling than polished performance." }, { title: "High energy in pitch environments", description: "Many ADHD salespeople perform at their best in high-stakes, novel situations." }]} opportunity="Move from managing neurodivergent salespeople out of the team to designing environments where cognitive diversity drives revenue." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for sales</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Sales-recommended sessions" description="All adapted to commercial environments and performance culture." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What sales clients see</h2><OutcomeBlock title="Sales outcomes" outcomes={[{ metric: "28%", label: "higher revenue in companies with neurodiverse workforces." }, { label: "Improved retention of high-performing neurodivergent sales staff." }, { label: "Reduction in PIPs linked to administrative non-compliance." }, { label: "Better understanding of rejection sensitivity among managers." }, { label: "Stronger commercial output from cognitively diverse teams." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to make neurodiversity work in sales?" description="Book a discovery call." />
    </main><Footer />
  </>
);

export default IndustrySales;