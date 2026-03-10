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
import { BarChart3, Users, Eye, RefreshCw, ShieldAlert } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndCorporateImg from "@/assets/blog/neurodiversity-corporate.jpg";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }) };

const faqs = [
  { question: "We have a global workforce. Can neuroinclusion work across different cultural contexts?", answer: "Yes, with adaptation. We work with HR and people teams to identify which elements of neuroinclusion are universal and which need cultural calibration." },
  { question: "How do we connect neuroinclusion to our existing DEI strategy?", answer: "Neuroinclusion strengthens every other strand of your DEI work. We help you map the connection points and ensure neurodiversity is embedded in existing frameworks." },
  { question: "Our senior leaders are sceptical. How do you make the business case?", answer: "We lead with data on attrition, tribunal exposure, and productivity. We connect neuroinclusion directly to business risk and performance outcomes." },
  { question: "Can you work with our HR business partners to build internal capability?", answer: "Yes. Building internal capability is central to what we do. We train HR business partners, people leads, and managers to sustain neuroinclusion without ongoing external dependency." },
];

const keyIssues = [
  { title: "Meeting culture and processing speed", description: "Back-to-back meetings and verbal-first decision making disadvantage neurodivergent leaders who process more deeply and need time to think.", icon: Users },
  { title: "Performance management built for linear output", description: "Corporate frameworks undervalue spiky cognitive profiles. Exceptional work in focused bursts is rated as underperformance.", icon: BarChart3 },
  { title: "Unwritten rules and political navigation", description: "Large organisations run on informal norms rarely made explicit. This creates a constant cognitive tax for neurodivergent employees.", icon: Eye },
  { title: "Disclosure at senior level", description: "Senior neurodivergent leaders almost never disclose. This removes role models and suppresses culture change.", icon: ShieldAlert },
  { title: "Transformation and change fatigue", description: "Continuous change programmes create particular pressure for neurodivergent employees who depend on clarity and predictability.", icon: RefreshCw },
];

const IndustryCorporate = () => (
  <>
    <SEOHead title="Neurodiversity in Corporate & Enterprise" description="Neurodiversity training and consultancy for corporate and enterprise organisations." path="/industries/corporate" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Corporate & Enterprise", url: "https://www.neurodiversityglobal.com/industries/corporate" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Corporate & Enterprise", "Sector-adapted neurodiversity training for corporate and enterprise organisations.", "https://www.neurodiversityglobal.com/industries/corporate")} />
    <JsonLd data={faqSchema(faqs)} />
    <Navbar />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Corporate & Enterprise" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in corporate</p>
              <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where high performance and invisible struggle sit side by side</h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Large corporate environments contain high concentrations of neurodivergent talent and entrenched systems that were never designed for cognitive diversity. The gap is a design problem.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndCorporateImg} alt="Corporate enterprise boardroom" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                <p className="font-display font-bold text-2xl text-accent">50+</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">Corporate organisations supported</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points corporate cannot ignore</h2><KeyIssuesGrid issues={keyIssues} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2><WhatIsBreaking items={["Neurodivergent leaders burning out silently at director and VP level", "High-potential employees exiting after poor performance reviews", "Informal complaints rising as managers lack tools to respond", "DEI programmes running with no connection to line management practice"]} /></div></section>
      <PullQuote quote="The gap between potential and performance is not a talent problem. It is a design problem." accentIndex={3} />
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why corporate should lead on neuroinclusion</h2><PositivesBlock items={[{ title: "Neurodivergent leaders drive innovation", description: "Disruptive thinking and pattern recognition that homogeneous leadership teams lack." }, { title: "Authentic inclusion improves retention for everyone", description: "Clarity, structure, and psychological safety are not niche requirements." }, { title: "Legal and reputational risk is manageable", description: "Tribunal claims have risen 164% in four years. Proactive design is cheaper than reactive response." }, { title: "Scale creates leverage", description: "Changing one system in a large organisation reaches hundreds of people." }]} opportunity="Move from neurodiversity as HR compliance to neuroinclusion as a performance and leadership strategy at enterprise scale." /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for corporate</h2><RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Corporate-recommended sessions" description="From 60-minute awareness to full-day strategic programmes, all adapted to corporate and enterprise context." /></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What corporate clients see</h2><OutcomeBlock title="Corporate outcomes" outcomes={[{ metric: "39%", label: "of neurodivergent employees plan to leave within 12 months if not included." }, { label: "Measurable reduction in neurodivergent employee attrition." }, { label: "Improved disclosure rates at senior and leadership levels." }, { label: "More consistent reasonable adjustments across divisions." }, { label: "Reduced tribunal and grievance exposure." }]} /></div></section>
      <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in corporate</h2><div className="grid md:grid-cols-2 gap-6"><TestimonialBlock quote="This shifted how we think about performance management. Not just policy but actual system redesign." author="VP People & Culture" org="Enterprise Organisation" /><div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center"><h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3><div className="grid grid-cols-2 gap-5">{[{ value: "50+", label: "Corporate organisations" }, { value: "5,000+", label: "Corporate staff trained" }, { value: "15+", label: "Years in enterprise" }, { value: "Global", label: "Delivery reach" }].map((s) => (<div key={s.label}><p className="font-display font-extrabold text-xl text-accent">{s.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{s.label}</p></div>))}</div></div></div><div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to your team needs." /></div></div></section>
      <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10"><p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p><h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions</h2><div className="grid gap-4 max-w-2xl">{faqs.map((faq, i) => (<motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"><div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} /><h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></motion.div>))}</div></div></section>
      <PageCTA title="Ready to make neurodiversity work at enterprise scale?" description="Book a discovery call. We will discuss your specific challenges and recommend a practical next step." />
    </main>
    <Footer />
  </>
);

export default IndustryCorporate;