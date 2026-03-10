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
import { HandHeart, Heart, Users, BatteryWarning, ShieldAlert } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndCharityImg from "@/assets/blog/neurodiversity-charity.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };

const faqs = [
  { question: "We have a very small team. What can you offer?", answer: "We offer formats from 60-minute awareness sessions to modular programmes spread across weeks. Everything is adapted to your capacity." },
  { question: "We do not have an HR team. How do we manage adjustments?", answer: "We train line managers to handle adjustments without a dedicated HR function. We provide practical tools and templates that work in resource-light environments." },
  { question: "Our trustees need to understand neurodiversity at governance level. Can you support this?", answer: "Yes. We deliver executive and trustee briefings specifically designed to address governance risk, legal exposure, and strategic opportunity." },
  { question: "How do we fund neuroinclusion on a constrained budget?", answer: "We work with organisations to identify funding routes including workforce development grants and funder requirements. We also offer scaled pricing for smaller charities." },
];

const keyIssues = [
  { title: "Resource scarcity and cognitive overload", description: "Small teams with wide remits create constant context-switching. The sector normalises overload as commitment.", icon: BatteryWarning },
  { title: "Emotional labour and regulation demands", description: "Direct work with vulnerable people plus navigating own regulation needs creates cumulative load rarely acknowledged.", icon: Heart },
  { title: "Flat structures with unclear expectations", description: "Ambiguity in structure is a performance barrier for neurodivergent employees, not an empowering feature.", icon: Users },
  { title: "Underfunded HR and people infrastructure", description: "Informal processes and unsupported managers create legal exposure the organisation does not realise it carries.", icon: ShieldAlert },
  { title: "Volunteer management complexity", description: "Neurodivergent staff coordinating volunteers carry significant social and organisational demand that is often invisible.", icon: HandHeart },
];

const IndustryCharity = () => (
  <>
    <SEOHead title="Neurodiversity in Charity & Third Sector" description="Neurodiversity training for charities and third sector organisations." path="/industries/charity" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Charity & Third Sector", url: "https://www.neurodiversityglobal.com/industries/charity" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Charity & Third Sector", "Sector-adapted neurodiversity training for charities and social enterprises.", "https://www.neurodiversityglobal.com/industries/charity")} />
    <JsonLd data={faqSchema(faqs)} />
    <Navbar />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Charity & Third Sector" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in the third sector</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where mission-driven work meets unsupported people</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">The third sector employs a disproportionately high number of neurodivergent people. High commitment is masking high risk.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndCharityImg} alt="Charity and third sector team" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">40+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Charities supported</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points the third sector cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Experienced staff leaving due to unmanaged burnout", "Informal complaints increasing as HR capacity is stretched", "Neurodivergent staff carrying disproportionate workload", "Governance boards unaware of neurodiversity risk"]} /></div></section>
      <PullQuote quote="Mission cannot substitute for structure. The people doing the work need systems that sustain them." accentIndex={1} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why the third sector should lead</h2><PositivesBlock items={[{ title: "Mission alignment drives exceptional performance", description: "Neurodivergent employees in values-aligned roles produce exceptional output." }, { title: "Creativity and systems thinking support service design", description: "Neurodivergent professionals see gaps in delivery others do not." }, { title: "Authentic inclusion strengthens funder relationships", description: "Funders increasingly scrutinise workforce inclusion as part of grant criteria." }, { title: "Infrastructure exists to build on", description: "Values frameworks, safeguarding structures, and wellbeing policies are already in place." }]} opportunity="Move from mission as a substitute for structure to mission supported by systems that sustain the people doing the work." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for the third sector</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Third sector sessions" description="All adapted to resource-constrained, mission-driven environments." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What charity clients see</h2><OutcomeBlock title="Third sector outcomes" outcomes={[{ metric: "63%", label: "of employees in neuroinclusive organisations report higher wellbeing." }, { label: "Reduced burnout and unplanned absence among delivery staff." }, { label: "Stronger manager confidence in handling disclosure." }, { label: "Improved funder and governance reporting." }, { label: "Better retention of experienced specialist staff." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in the third sector</h2><div className="grid md:grid-cols-2 gap-6"><TestimonialBlock quote="We thought we were too small to need this. We were wrong. It changed how our team works together." author="CEO" org="National Charity" /><div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center"><h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3><div className="grid grid-cols-2 gap-5">{[{ value: "40+", label: "Charities supported" }, { value: "1,500+", label: "Third sector staff trained" }, { value: "15+", label: "Years in sector" }, { value: "UK-wide", label: "Delivery reach" }].map((s) => (<div key={s.label}><p className="font-display font-extrabold text-xl text-accent">{s.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{s.label}</p></div>))}</div></div></div><div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery to your team needs." /></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to make neurodiversity work in your charity?" description="Book a discovery call." />
    </main>
    <Footer />
  </>
);

export default IndustryCharity;