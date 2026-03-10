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
import { Shield, Lock, Brain, Users, RefreshCw } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndDefenceImg from "@/assets/blog/neurodiversity-defence.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };
const faqs = [
  { question: "Will neurodiversity training compromise our security culture?", answer: "No. We design all programmes with operational security in mind. We do not require disclosure or create records that affect clearance." },
  { question: "How do we address the misconception about security clearance?", answer: "We provide factual guidance on the relationship between neurodivergence and security clearance grounded in UKSV policy." },
  { question: "Can you support transition programmes for service leavers?", answer: "Yes. We work with resettlement teams to include neurodiversity support in career planning and civilian workplace preparation." },
  { question: "Our environment requires significant confidentiality.", answer: "Yes. We deliver exclusively in-house for defence clients, adapted to your operational context and security requirements." },
];
const keyIssues = [
  { title: "Security clearance and disclosure risk", description: "Personnel believe disclosure will affect clearance. This belief is often unfounded but never corrected, resulting in widespread masking.", icon: Lock },
  { title: "Analytical demand in intelligence roles", description: "Exceptionally capable analysts carry sustained high cognitive load without recognition or structural support.", icon: Brain },
  { title: "Hierarchical culture and rank-based communication", description: "Direct communication or questioning procedures is misread as insubordination.", icon: Users },
  { title: "Transition and career change pressure", description: "Neurodivergent traits that were assets in military structure become barriers in civilian settings.", icon: RefreshCw },
  { title: "Physical and environmental demand", description: "Operational environments combine physical demand, sensory intensity, and disrupted routine.", icon: Shield },
];

const IndustryDefence = () => (
  <>
    <SEOHead title="Neurodiversity in Defence & National Infrastructure" description="Neurodiversity training for defence and national infrastructure organisations." path="/industries/defence" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Defence", url: "https://www.neurodiversityglobal.com/industries/defence" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Defence & National Infrastructure", "Neurodiversity training for defence and national infrastructure.", "https://www.neurodiversityglobal.com/industries/defence")} />
    <JsonLd data={faqSchema(faqs)} /><Navbar /><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Defence" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in defence</p><h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where security-conscious culture meets unacknowledged cognitive diversity</h1><p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Defence environments contain high concentrations of neurodivergent professionals in technical and analytical roles. Security culture inadvertently suppresses the talent it relies on.</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative"><div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndDefenceImg} alt="Defence operations" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div><div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]"><p className="font-display font-bold text-2xl text-accent">10+</p><p className="text-xs text-muted-foreground mt-1 leading-snug">Defence organisations supported</p></div></motion.div></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points defence cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Highly capable analysts leaving due to unacknowledged burnout", "Veterans leaving without recognition of their cognitive profile", "Disclosure suppressed by security clearance anxiety", "Capability processes initiated without adjustment conversations"]} /></div></section>
      <PullQuote quote="Security culture that inadvertently suppresses neurodivergent talent is weakening operational capability." accentIndex={4} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why defence should lead</h2><PositivesBlock items={[{ title: "Analytical capability is a direct operational asset", description: "Exceptional capability in intelligence analysis, pattern recognition, and systems monitoring." }, { title: "Procedural rigour aligns with neurodivergent processing", description: "Clear protocols are enabling. The gap is in people management, not operational procedure." }, { title: "Technical depth supports complex problem-solving", description: "Specialist expertise represents significant institutional knowledge." }, { title: "Security-conscious confidentiality already understood", description: "Neurodiversity support can be delivered respecting classification and operational sensitivity." }]} opportunity="Move from security culture that suppresses neurodivergent talent to one that recognises cognitive diversity as strategic capability." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for defence</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Defence-recommended sessions" description="Adapted for security-conscious, hierarchical environments." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What defence clients see</h2><OutcomeBlock title="Defence outcomes" outcomes={[{ metric: "20%", label: "of the workforce estimated neurodivergent. In analytical roles, significantly higher." }, { label: "Improved disclosure rates as security misconceptions are addressed." }, { label: "Stronger retention of specialist analytical and technical personnel." }, { label: "Reduced capability process initiations." }, { label: "Better transition support for neurodivergent service leavers." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to make neurodiversity work in defence?" description="Book a discovery call." />
    </main><Footer />
  </>
);

export default IndustryDefence;