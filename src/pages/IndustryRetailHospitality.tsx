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
import { Scale, Ear, Clock, Users, RefreshCw } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndRetailImg from "@/assets/blog/neurodiversity-retail.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };
const faqs = [
  { question: "Our front-line managers have very little HR training. Is this appropriate?", answer: "Yes. We design sessions specifically for people without HR backgrounds. We use plain language, practical scenarios, and tools that can be applied immediately." },
  { question: "How do we make scheduling adjustments without inconsistency?", answer: "Scheduling flexibility is a reasonable adjustment, not a special favour. We help managers understand the legal framework and practical tools." },
  { question: "We have very high seasonal attrition. Can this make a difference?", answer: "Yes. Many seasonal exits are linked to onboarding failures and sensory issues that are entirely preventable." },
  { question: "Our head office and store teams have different needs.", answer: "Yes. We adapt delivery to both contexts. Head office receives strategic content. Stores receive practical, front-line focused sessions." },
];
const keyIssues = [
  { title: "Sensory environment intensity", description: "Bright lighting, music, crowds, and constant movement create sustained sensory overload invisible to management.", icon: Ear },
  { title: "Unpredictable shift patterns", description: "Last-minute changes and seasonal variation make the job unsustainable for staff who rely on predictability.", icon: Clock },
  { title: "Customer-facing social demand", description: "Sustained interaction with high volumes of diverse customers creates cumulative demand across a shift.", icon: Users },
  { title: "High task variety and context-switching", description: "Simultaneous stock, service, till, and cleaning tasks demand significantly more from neurodivergent staff.", icon: RefreshCw },
  { title: "Management practice and informal culture", description: "Front-line managers lack training. Neurodivergent behaviour is managed inconsistently or punitively.", icon: Scale },
];

const IndustryRetailHospitality = () => (
  <>
    <SEOHead title="Neurodiversity in Retail & Hospitality" description="Neurodiversity training for retail and hospitality organisations." path="/industries/retail-hospitality" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Retail & Hospitality", url: "https://www.neurodiversityglobal.com/industries/retail-hospitality" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Retail & Hospitality", "Neurodiversity training for retail and hospitality.", "https://www.neurodiversityglobal.com/industries/retail-hospitality")} />
    <JsonLd data={faqSchema(faqs)} /><Navbar /><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Retail & Hospitality" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in retail & hospitality</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where customer-facing demand meets shift-based cognitive load</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Retail and hospitality employ more neurodivergent people than almost any other sector. The sector loses exceptional people because it has not learned to see them.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndRetailImg} alt="Retail and hospitality staff" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">30+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Retail and hospitality organisations</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points retail and hospitality cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Seasonal staff not retained due to unsupported onboarding", "Attendance management applied without sensory or scheduling adjustment", "Customer complaints linked to unrecognised neurodivergent traits", "High attrition in the first three months"]} /></div></section>
      <PullQuote quote="The sector loses exceptional people because it has not learned to see them." accentIndex={1} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why retail and hospitality should lead</h2><PositivesBlock items={[{ title: "Attention to detail improves customer experience", description: "Neurodivergent staff notice when something is not right." }, { title: "Genuine interest builds customer loyalty", description: "Authentic connections are more durable than script adherence." }, { title: "Process adherence in food safety and compliance", description: "Strong adherence to procedure is a regulatory and reputational asset." }, { title: "High prevalence means immediate impact", description: "Neuroinclusion reaches a large proportion of the workforce quickly." }]} opportunity="Move from high attrition accepted as structural to neuroinclusion as a retention strategy." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for retail and hospitality</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Retail & hospitality sessions" description="Adapted for sensory environments, shift-based delivery, and front-line managers." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What retail clients see</h2><OutcomeBlock title="Retail outcomes" outcomes={[{ metric: "30%", label: "more productive teams with neurodivergent professionals." }, { label: "Measurable reduction in attrition in the first six months." }, { label: "Improved onboarding completion rates." }, { label: "Reduction in attendance cases resolved through scheduling." }, { label: "Stronger front-line manager confidence." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to reduce attrition through neuroinclusion?" description="Book a discovery call." />
    </main><Footer />
  </>
);

export default IndustryRetailHospitality;