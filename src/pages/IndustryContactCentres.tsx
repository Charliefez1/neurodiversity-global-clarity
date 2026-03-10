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
import { Headphones, Ear, FileText, BarChart3, Clock } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndContactCentreImg from "@/assets/blog/neurodiversity-contact-centre.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };
const faqs = [
  { question: "Can neuroinclusion actually make a measurable difference to attrition?", answer: "Yes. In contact centres the return is often visible faster than in other sectors. We typically see measurable attrition reduction within six months." },
  { question: "How do we adjust performance metrics without compromising quality?", answer: "We work with operations and quality teams to separate efficiency from quality metrics. Quality and inclusion are not in conflict." },
  { question: "Can you work with our workforce management team on scheduling?", answer: "Yes. Scheduling flexibility is one of the most impactful and low-cost adjustments available. We identify what is genuinely constrained and what can flex." },
  { question: "We operate a remote or hybrid contact centre. Does this change your approach?", answer: "Remote settings often reduce sensory load significantly. We help you understand what is working better and what still needs active support." },
];
const keyIssues = [
  { title: "Open-plan sensory environments", description: "Constant noise, competing conversations, and bright lighting consume cognitive capacity that should be directed at customers.", icon: Ear },
  { title: "Scripted communication and rigid process", description: "The effort to adhere to a script while processing customer information simultaneously is significantly higher than it appears.", icon: FileText },
  { title: "Real-time monitoring and performance pressure", description: "Average handling time and dashboards create constant surveillance that is acutely dysregulating.", icon: BarChart3 },
  { title: "Shift patterns and scheduling inflexibility", description: "Inflexible shift allocation creates difficulty for agents who perform best in predictable patterns.", icon: Clock },
  { title: "High emotional demand in customer interactions", description: "Managing emotional labour and sensory overload simultaneously stretches regulation capacity.", icon: Headphones },
];

const IndustryContactCentres = () => (
  <>
    <SEOHead title="Neurodiversity in Call & Contact Centres" description="Neurodiversity training for contact centre and customer service operations." path="/industries/contact-centres" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Contact Centres", url: "https://www.neurodiversityglobal.com/industries/contact-centres" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Contact Centres", "Neurodiversity training for contact centre operations.", "https://www.neurodiversityglobal.com/industries/contact-centres")} />
    <JsonLd data={faqSchema(faqs)} /><Navbar /><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Contact Centres" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in contact centres</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where sensory load, scripted communication, and high attrition meet</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Contact centres have the highest neurodivergent representation and highest attrition. The combination is not coincidental.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndContactCentreImg} alt="Contact centre team" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">25+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Contact centres supported</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points contact centres cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Attrition at 30-40% with neurodivergent staff disproportionately represented", "PIPs applied for handling time rather than quality", "Absence managed as conduct without exploring cognitive causes", "New agent dropout in the first 90 days at high rates"]} /></div></section>
      <PullQuote quote="The systems that maximise call handling also create the conditions for disproportionate burnout." accentIndex={2} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why contact centres should lead</h2><PositivesBlock items={[{ title: "Exceptional empathy from lived experience", description: "Many neurodivergent agents create genuine connection with frustrated customers." }, { title: "Hyperfocus supports complex query resolution", description: "Higher first-contact resolution rates from agents who engage deeply." }, { title: "Pattern recognition improves fraud detection", description: "Identifying unusual patterns is operationally valuable." }, { title: "Retention ROI is immediate and measurable", description: "Even marginal attrition reduction generates measurable return quickly." }]} opportunity="Move from designing for throughput to designing environments where cognitive diversity reduces attrition and improves outcomes." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for contact centres</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Contact centre sessions" description="Adapted for open-plan, scripted, high-volume environments." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What contact centre clients see</h2><OutcomeBlock title="Contact centre outcomes" outcomes={[{ metric: "40%", label: "of neurodivergent employees report being impacted most days at work." }, { label: "Measurable reduction in neurodivergent staff attrition." }, { label: "Improved first-contact resolution from better agent support." }, { label: "Reduction in absence managed as conduct." }, { label: "Stronger Equality Act compliance in performance management." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to reduce attrition through neuroinclusion?" description="Book a discovery call." />
    </main><Footer />
  </>
);

export default IndustryContactCentres;