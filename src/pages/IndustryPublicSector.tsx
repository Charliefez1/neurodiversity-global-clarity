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
import { Scale, MessageSquare, Wallet, Users, FileCheck } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import frontlineImg from "@/assets/industries/frontline-workers.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const faqs = [
  { question: "Do you work with central government departments?", answer: "Yes. We've delivered training and consultancy across central government departments, arms-length bodies, and regulators." },
  { question: "How do you handle the Public Sector Equality Duty?", answer: "Our programmes are designed with PSED compliance in mind. We help organisations move beyond compliance to genuine neuroinclusion." },
  { question: "Can you work within Civil Service frameworks?", answer: "We understand Civil Service structures, procurement processes, and delivery expectations. We adapt to your operating environment." },
  { question: "How do you address recruitment bias?", answer: "Neurodivergent applicants are disproportionately screened out by traditional interview models. We review and adapt recruitment processes to remove these barriers." },
];

const keyIssues = [
  { title: "Compliance-driven culture", description: "Inclusion is often framed as a legal requirement rather than a performance enabler. This limits its impact.", icon: FileCheck },
  { title: "Performance management under scrutiny", description: "Capability procedures are increasingly challenged under the Equality Act 2010 when neurodivergence isn't considered.", icon: Scale },
  { title: "Decision-making hierarchy", description: "Neurodivergent communication styles can be misread as confrontational or rigid in hierarchical structures.", icon: MessageSquare },
  { title: "Budget constraints", description: "Inclusion is seen as a cost centre rather than a risk reduction tool. The financial case isn't being made.", icon: Wallet },
  { title: "Recruitment bottlenecks", description: "Neurodivergent applicants are disproportionately screened out by traditional interview models.", icon: Users },
];

const IndustryPublicSector = () => {
  return (
    <>
      <SEOHead title="Neurodiversity in Public Sector & Government: 2026 Challenges" description="Neurodiversity training and consultancy for central and local government." path="/industries/public-sector" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Public Sector & Government", url: "https://www.neurodiversityglobal.com/industries/public-sector" }])} />
      <JsonLd data={serviceSchema("Neurodiversity in Public Sector & Government", "Neurodiversity training and consultancy for central government, local authorities, and public sector organisations.", "https://www.neurodiversityglobal.com/industries/public-sector")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Public Sector & Government" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in public sector</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Policy heavy. Risk aware. Slow to change.</h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Government departments and public bodies have the governance structures for neuroinclusion, but compliance culture, budget constraints, and hierarchy mean capability consistently lags behind policy.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl"><img src={frontlineImg} alt="Public sector professionals" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">40+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Public sector clients</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">The pressure points public sector can't ignore</h2>
          <KeyIssuesGrid issues={keyIssues} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2>
          <WhatIsBreaking items={["High grievance volumes related to unrecognised neurodivergence", "Long-term absence linked to masking and stress", "Internal culture fatigue from performative inclusion", "Talent loss to private sector with better neuroinclusive practices"]} />
        </div></section>

        <PullQuote quote="The governance structures exist. It's the capability that's missing." accentIndex={4} />

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why public sector can lead on this</h2>
          <PositivesBlock items={[
            { title: "Clear governance structures", description: "Policy frameworks can embed neuroinclusion at scale once aligned." },
            { title: "Strong ethical mandate", description: "Public service ethos aligns well with fairness-based inclusion." },
            { title: "Structured career pathways", description: "Opportunity to redesign progression routes with cognitive diversity in mind." },
          ]} opportunity="Shift from policy language to practical manager capability." />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for public sector</h2>
          <RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "manager-dev", "hr-training", "exec-briefing", "disclosure", "performance"]} title="Public sector-recommended sessions" description="From manager capability workshops to board-level strategy, adapted to your governance and operating environment." />
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What public sector clients see</h2>
          <OutcomeBlock title="Public sector outcomes" outcomes={[
            { label: "Stronger PSED compliance positioning on neurodiversity." },
            { label: "Improved staff retention and reduced grievance risk." },
            { label: "More confident managers making better reasonable adjustment decisions." },
            { label: "Policy frameworks that account for cognitive diversity." },
            { label: "Recruitment processes that attract wider talent pools." },
          ]} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in public sector</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock quote="They understand the difference between ticking a box and actually making things better for neurodivergent people." author="Chief People Officer" org="Government Department" />
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[{ value: "40+", label: "Public sector clients" }, { value: "4,000+", label: "Staff trained" }, { value: "Central & local", label: "Government coverage" }, { value: "15+", label: "Years of experience" }].map((stat) => (
                  <div key={stat.label}><p className="font-display font-extrabold text-xl text-accent">{stat.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to public sector delivery contexts." /></div>
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions about neurodiversity in public sector</h2>
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden">
                <div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div></section>

        <PageCTA title="Ready to make neurodiversity work in the public sector?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryPublicSector;
