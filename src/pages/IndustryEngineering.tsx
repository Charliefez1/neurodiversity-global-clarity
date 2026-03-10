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
import { Factory, AlertTriangle, Ear, FileText, ShieldAlert } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import ndEngineeringImg from "@/assets/blog/neurodiversity-engineering.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const faqs = [
  { question: "How do you adapt training for shift-based engineering teams?", answer: "We deliver in formats that work across shift patterns, including short-form sessions, online modules, and manager briefings that can be cascaded. We do not require everyone to be in the same room at the same time." },
  { question: "Can neurodiversity training be integrated with our existing safety culture programme?", answer: "Yes. We regularly embed neuroinclusion into safety culture work, linking cognitive load, masking, and disclosure directly to risk management frameworks your teams already use." },
  { question: "How do we handle disclosure in a safety-critical environment?", answer: "We train managers to separate disclosure from fitness for role, and to focus conversations on adjustments that support performance rather than risk assessment." },
  { question: "Our competency frameworks were built for typical communicators. Can you help us review them?", answer: "Yes. We work with HR and technical leads to audit competency frameworks for neurotypical bias, and to distinguish technical performance from communication style in assessment." },
];

const keyIssues = [
  { title: "Sensory load in operational environments", description: "Plant rooms, construction sites, control rooms, and open-plan offices create high sensory demand. Noise, fluorescent lighting, and constant interruption increase cognitive load disproportionately.", icon: Ear },
  { title: "Communication gaps in technical handovers", description: "Shift handovers and briefings rely on verbal communication and assumed shared context. Neurodivergent engineers who process differently are routinely disadvantaged.", icon: FileText },
  { title: "Rigid assessment and promotion criteria", description: "Competency frameworks measure communication style over technical output. Exceptional engineers are overlooked because they do not present in expected ways.", icon: AlertTriangle },
  { title: "Safety culture and disclosure risk", description: "Disclosure carries stigma around fitness for role. This suppresses disclosure, removes support, and creates hidden risk.", icon: ShieldAlert },
  { title: "Project management and executive function", description: "Large infrastructure projects demand complex coordination. Without structured support, neurodivergent project leads carry a disproportionate cognitive burden.", icon: Factory },
];

const IndustryEngineering = () => (
  <>
    <SEOHead title="Neurodiversity in Engineering & Infrastructure" description="Neurodiversity training and consultancy for engineering and infrastructure organisations. Safety-critical roles, structured systems, and frontline teams." path="/industries/engineering" />
    <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Engineering & Infrastructure", url: "https://www.neurodiversityglobal.com/industries/engineering" }])} />
    <JsonLd data={serviceSchema("Neurodiversity in Engineering & Infrastructure", "Sector-adapted neurodiversity training for engineering and infrastructure organisations.", "https://www.neurodiversityglobal.com/industries/engineering")} />
    <JsonLd data={faqSchema(faqs)} />
    <Navbar />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Engineering & Infrastructure" }]} />
    <main>
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in engineering</p>
              <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where precision meets cognitive difference</h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Engineering and infrastructure environments combine high technical demand with rigid processes, shift patterns, and safety-critical stakes. Neurodivergent engineers often perform at the highest level. They also face the highest cost when systems ignore cognitive diversity.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl"><img src={ndEngineeringImg} alt="Engineering and infrastructure team" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                <p className="font-display font-bold text-2xl text-accent">25+</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">Engineering organisations supported</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-warm-stone py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Pressure points engineering cannot ignore</h2>
          <KeyIssuesGrid issues={keyIssues} />
        </div>
      </section>

      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2>
          <WhatIsBreaking items={["Senior engineers leaving due to unmanaged sensory overload", "Capability processes initiated without adjustment conversations", "Neurodivergent apprentices dropping out in the first year", "Verbal-only handover systems creating errors and exclusion"]} />
        </div>
      </section>

      <PullQuote quote="The same cognitive profiles driving safety concerns are engineering's greatest technical assets." accentIndex={2} />

      <section className="bg-warm-stone py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why engineering should lead on neuroinclusion</h2>
          <PositivesBlock items={[
            { title: "Systems thinking is a neurodivergent strength", description: "Many autistic and ADHD engineers see system-level patterns and failure points that others miss." },
            { title: "Hyperfocus drives technical depth", description: "Neurodivergent engineers frequently develop exceptional specialist expertise in precision engineering." },
            { title: "Pattern recognition supports fault finding", description: "Identifying anomalies in complex systems is a documented neurodivergent cognitive strength." },
            { title: "Diversity of processing reduces groupthink", description: "Teams with different cognitive styles make fewer systematic errors in risk assessment." },
          ]} opportunity="Move from safety-culture stigma around disclosure to proactive cognitive inclusion built into project design and team management." />
        </div>
      </section>

      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for engineering</h2>
          <RelevantWorkshops workshopIds={["awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Engineering-recommended sessions" description="From 60-minute awareness to full-day strategic programmes, all adapted to your engineering and infrastructure context." />
        </div>
      </section>

      <section className="bg-warm-stone py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What engineering clients see</h2>
          <OutcomeBlock title="Engineering outcomes" outcomes={[
            { metric: "35%", label: "reduction in unexplained absence among neurodivergent engineers." },
            { label: "Improved disclosure rates as teams build psychological safety." },
            { label: "Fewer capability escalations as adjustments are made earlier." },
            { label: "Stronger retention of specialist technical talent." },
            { label: "Reduced safety incidents linked to communication and cognitive overload." },
          ]} />
        </div>
      </section>

      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in engineering</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock quote="This changed how we think about safety culture. Not just awareness but actual system change for our engineering teams." author="Head of People" org="Infrastructure Organisation" />
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[{ value: "25+", label: "Engineering organisations" }, { value: "2,000+", label: "Technical staff trained" }, { value: "15+", label: "Years in engineering" }, { value: "UK-wide", label: "Delivery reach" }].map((stat) => (
                  <div key={stat.label}><p className="font-display font-extrabold text-xl text-accent">{stat.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to your team needs." /></div>
        </div>
      </section>

      <section className="bg-warm-stone py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions about neurodiversity in engineering</h2>
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden">
                <div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Ready to make neurodiversity work in engineering?" description="Book a discovery call. We will discuss your specific challenges and recommend a practical next step." />
    </main>
    <Footer />
  </>
);

export default IndustryEngineering;