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
import { Gavel, Clock, Eye, Users, ShieldAlert } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndLegalImg from "@/assets/blog/neurodiversity-legal.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };

const faqs = [
  { question: "Is neurodiversity training relevant for barristers chambers?", answer: "Yes. Chambers face specific challenges around self-employed status, pupillage, and the pressure of advocacy. We adapt to the chambers context." },
  { question: "How do we handle neurodivergent trainees struggling in seat rotations?", answer: "We work with training principal teams to build adjustment-aware seat allocation and structured support that does not disadvantage trainees." },
  { question: "What are our obligations under the SRA EDI framework?", answer: "We work alongside your compliance team to map neuroinclusion against SRA requirements and identify practical steps." },
  { question: "Our partners are resistant. How do you approach senior buy-in?", answer: "We lead with partnership economics: attrition cost, tribunal exposure, and the loss of high-billing lawyers who exit quietly." },
];

const keyIssues = [
  { title: "Perfectionism and masking in high-stakes work", description: "Perfectionism is a coping mechanism that consumes significantly more cognitive resource than the output suggests. The cost is invisible until crisis.", icon: ShieldAlert },
  { title: "Client-facing performance demands", description: "Meetings, hearings, negotiations create high social and sensory demand. Neurodivergent lawyers spend as much energy managing the environment as doing legal work.", icon: Users },
  { title: "Billing and time-recording systems", description: "Time recording creates a particular burden for lawyers with ADHD or time-blindness. This creates disproportionate administrative stress.", icon: Clock },
  { title: "Partnership culture and unwritten career rules", description: "Progression is influenced by informal sponsorship and social capital. Exceptional substantive work is overlooked.", icon: Eye },
  { title: "High caseload and context-switching", description: "Managing multiple complex matters simultaneously is standard. Constant context-switching is a significant underacknowledged barrier.", icon: Gavel },
];

const IndustryLegal = () => (
  <>
    <SEOHead title="Neurodiversity in Legal" description="Neurodiversity training and consultancy for law firms and legal organisations." path="/industries/legal" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Legal", url: "https://www.neurodiversityglobal.com/industries/legal" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Legal", "Sector-adapted neurodiversity training for law firms and legal organisations.", "https://www.neurodiversityglobal.com/industries/legal")} />
    <JsonLd data={faqSchema(faqs)} />
    <Navbar />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Legal" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in legal</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where analytical brilliance operates under unsustainable pressure</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">The legal profession has one of the highest concentrations of neurodivergent talent. It also has some of the most entrenched cultures of masking and overwork.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndLegalImg} alt="Legal professionals" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">20+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Law firms supported</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points the legal profession cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Senior associates and partners burning out and leaving entirely", "Neurodivergent trainees struggling without structured support", "Firms facing SRA scrutiny and tribunal risk", "Informal performance concerns raised without adjustment conversations"]} /></div></section>
      <PullQuote quote="The profession selects for neurodivergent talent and then burns it out. That is a design choice that can be changed." accentIndex={2} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why legal should lead</h2><PositivesBlock items={[{ title: "Exceptional at complex analysis", description: "Pattern recognition, systemic thinking, and processing large volumes of complex information are core legal competencies." }, { title: "Attention to detail is a professional asset", description: "Many neurodivergent lawyers develop exceptionally rigorous checking systems." }, { title: "Creative legal argument from different thinking", description: "The most effective advocates approach problems from unexpected directions." }, { title: "Strong equality frameworks already exist", description: "The SRA EDI framework provides a regulatory foundation. The gap is implementation." }]} opportunity="Move from a profession that selects for neurodivergent talent and burns it out, to one that retains and develops it." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for legal</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Legal-recommended sessions" description="All adapted to the language, pressures, and realities of the legal profession." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What legal clients see</h2><OutcomeBlock title="Legal outcomes" outcomes={[{ metric: "164%", label: "increase in neurodiversity-related tribunals in four years." }, { label: "Improved retention of neurodivergent associates and senior lawyers." }, { label: "Reduced informal complaints and formal grievances." }, { label: "More consistent adjustments across practice groups." }, { label: "Stronger SRA compliance and reduced regulatory risk." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in legal</h2><div className="grid md:grid-cols-2 gap-6"><TestimonialBlock quote="This connected neuroinclusion to partnership economics in a way our leadership responded to immediately." author="Managing Partner" org="Law Firm" /><div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center"><h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3><div className="grid grid-cols-2 gap-5">{[{ value: "20+", label: "Law firms supported" }, { value: "1,000+", label: "Legal professionals trained" }, { value: "15+", label: "Years in professional services" }, { value: "UK-wide", label: "Including chambers" }].map((s) => (<div key={s.label}><p className="font-display font-extrabold text-xl text-accent">{s.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{s.label}</p></div>))}</div></div></div><div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility." /></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to make neurodiversity work in legal?" description="Book a discovery call." />
    </main>
    <Footer />
  </>
);

export default IndustryLegal;