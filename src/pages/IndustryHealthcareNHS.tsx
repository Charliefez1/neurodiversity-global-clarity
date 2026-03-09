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
import { Heart, ShieldAlert, Brain, Cog, BatteryWarning } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import nhsTeamImg from "@/assets/industries/nhs-team.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const faqs = [
  { question: "How does neurodiversity training work in the NHS?", answer: "We deliver training adapted to clinical and non-clinical teams, covering disclosure, reasonable adjustments, masking, and burnout in high-pressure healthcare settings." },
  { question: "Do you work with Integrated Care Systems?", answer: "Yes. We work across ICS structures, supporting system-wide approaches to neuroinclusion in workforce planning, service design, and leadership development." },
  { question: "Is the training accredited?", answer: "Our programmes are CPD-accredited and designed to meet NHS workforce development standards." },
  { question: "Can you help with clinical team dynamics?", answer: "Yes. Many neurodivergent clinicians mask traits in hierarchical environments. We address communication styles, sensory load, and team dynamics specific to clinical settings." },
];

const keyIssues = [
  { title: "Workforce exhaustion is normalised", description: "Chronic understaffing and backlog recovery mean high cognitive load is constant. Neurodivergent staff are often high functioning and deeply committed, which makes burnout invisible until it is severe.", icon: BatteryWarning },
  { title: "Masking in clinical roles", description: "Many clinicians mask traits to survive in hierarchical environments. Perfectionism plus sensory overload equals long-term fatigue.", icon: ShieldAlert },
  { title: "Tribunal and grievance exposure", description: "Failure to recognise ADHD, autism, dyslexia or dyspraxia in clinical settings increases risk around performance management and capability processes.", icon: ShieldAlert },
  { title: "Rigid systems in high-risk environments", description: "Healthcare relies on protocol and speed. Neurodivergent differences in communication or processing can be misinterpreted as incompetence rather than cognitive variation.", icon: Cog },
  { title: "Emotional labour overload", description: "Staff managing patients and trauma while navigating their own regulation needs. The emotional cost is compounded for neurodivergent clinicians.", icon: Heart },
];

const IndustryHealthcareNHS = () => {
  return (
    <>
      <SEOHead title="Neurodiversity in Healthcare & NHS: 2026 Challenges" description="Neurodiversity training and consultancy for NHS Trusts and healthcare organisations." path="/industries/healthcare-nhs" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Healthcare & NHS", url: "https://www.neurodiversityglobal.com/industries/healthcare-nhs" }])} />
      <JsonLd data={serviceSchema("Neurodiversity in Healthcare & NHS", "Sector-adapted neurodiversity training and consultancy for NHS Trusts, Integrated Care Systems, and healthcare organisations.", "https://www.neurodiversityglobal.com/industries/healthcare-nhs")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Healthcare & NHS" }]} />
      <main>
        {/* Hero — split */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in healthcare</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Where burnout hides behind dedication</h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">NHS Trusts and healthcare organisations face unique pressures: normalised exhaustion, masking in clinical roles, tribunal exposure, and systems that mistake cognitive difference for incompetence.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={nhsTeamImg} alt="NHS healthcare team" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">30+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">NHS Trusts supported</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Issues */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">The pressure points healthcare can't ignore</h2>
            <KeyIssuesGrid issues={keyIssues} />
          </div>
        </section>

        {/* Breaking */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2>
            <WhatIsBreaking items={["Informal coping strategies replacing formal support", "Performance procedures used before adjustment conversations", "High absence linked to stress and masking fatigue", "Senior clinicians leaving quietly"]} />
          </div>
        </section>

        <PullQuote quote="The same cognitive profiles driving burnout are also healthcare's greatest clinical assets." accentIndex={1} />

        {/* Positives */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why healthcare should lead on neuroinclusion</h2>
            <PositivesBlock items={[
              { title: "Pattern recognition and hyperfocus are clinical assets", description: "Many neurodivergent clinicians excel at diagnostic thinking and complex case synthesis." },
              { title: "Lived experience improves patient care", description: "Neurodivergent staff often show exceptional empathy for patients navigating chronic illness or mental health." },
              { title: "Systems thinking aligns with neurodivergent cognition", description: "Many neurodivergent professionals see inefficiencies others miss." },
              { title: "NHS already understands disability law", description: "Infrastructure exists. It needs refinement, not reinvention." },
            ]} opportunity="Move from reactive occupational health referrals to proactive cognitive inclusion design." />
          </div>
        </section>

        {/* Workshops */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for healthcare</h2>
            <RelevantWorkshops workshopIds={["nhs", "awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]} title="Healthcare-recommended sessions" description="From 60-minute awareness to full-day strategic programmes, all adapted to your clinical and non-clinical context." />
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What healthcare clients see</h2>
            <OutcomeBlock title="Healthcare outcomes" outcomes={[
              { metric: "35%", label: "reduction in neurodivergent staff turnover in the first year." },
              { label: "Improved disclosure rates as staff feel safer to share." },
              { label: "More consistent reasonable adjustments across teams and departments." },
              { label: "Better patient experience when staff are properly supported." },
              { label: "Reduced tribunal and grievance exposure." },
            ]} />
          </div>
        </section>

        {/* Evidence */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in healthcare</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialBlock quote="This changed how we design services and how our teams work together, not just what they know about neurodiversity." author="Director of Operations" org="NHS Trust" />
              <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[{ value: "30+", label: "NHS Trusts supported" }, { value: "3,000+", label: "Healthcare staff trained" }, { value: "15+", label: "Years in healthcare" }, { value: "UK-wide", label: "Delivery reach" }].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display font-extrabold text-xl text-accent">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to clinical and non-clinical team needs." /></div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions about neurodiversity in healthcare</h2>
            <div className="grid gap-4 max-w-2xl">
              {faqs.map((faq, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden"
                >
                  <div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Ready to make neurodiversity work in healthcare?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryHealthcareNHS;
