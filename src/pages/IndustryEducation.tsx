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
import { TrendingUp, Eye, BatteryWarning, ClipboardCheck, Users } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import communityImg from "@/assets/industries/community-workers.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const faqs = [
  { question: "Do you work with universities?", answer: "Yes. We work with universities and higher education institutions, supporting academic staff, professional services teams, student-facing services, and leadership governance." },
  { question: "How is neurodiversity training different for education?", answer: "Education environments have unique dynamics: academic freedom, student-staff relationships, assessment design, and institutional culture all need a neurodiversity lens." },
  { question: "Can you support SEND and disability services?", answer: "We work alongside existing SEND and disability services to ensure neurodiversity is embedded across the whole institution, not siloed in support teams." },
  { question: "Do you address gender bias in identification?", answer: "Yes. Girls and high-masking pupils continue to be missed. Our training addresses gender bias in ADHD and autism identification specifically." },
];

const keyIssues = [
  { title: "SEND demand continues rising", description: "EHCP applications remain high. Teachers are absorbing unmet need without adequate training.", icon: TrendingUp },
  { title: "Staff neurodivergence is under-recognised", description: "A significant number of teachers and support staff are neurodivergent. Many are late-diagnosed or undiagnosed.", icon: Eye },
  { title: "Burnout linked to emotional regulation load", description: "Managing neurodivergent pupils while masking your own traits is unsustainable.", icon: BatteryWarning },
  { title: "Ofsted pressure and compliance focus", description: "Inclusion is measured, but staff capability is inconsistent across settings.", icon: ClipboardCheck },
  { title: "Gender bias in identification", description: "Girls and high-masking pupils continue to be missed for ADHD and autism identification.", icon: Users },
];

const IndustryEducation = () => {
  return (
    <>
      <SEOHead title="Neurodiversity in Education: 2026 Challenges" description="Neurodiversity training and consultancy for schools, universities, and education institutions." path="/industries/education" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Education", url: "https://www.neurodiversityglobal.com/industries/education" }])} />
      <JsonLd data={serviceSchema("Neurodiversity in Education", "Neurodiversity training and consultancy for universities, schools, and education institutions.", "https://www.neurodiversityglobal.com/industries/education")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Education" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in education</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">Teaching inclusion while struggling with it internally</h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Education institutions support neurodivergent learners, but overlook neurodivergent staff, absorb rising SEND demand without training, and treat inclusion as burden rather than design.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={communityImg} alt="Education professionals collaborating" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">20+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Universities supported</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">The pressure points education can't ignore</h2>
          <KeyIssuesGrid issues={keyIssues} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2>
          <WhatIsBreaking items={["Teachers leaving due to workload and emotional strain", "SENCOs overwhelmed and under-resourced", "Inclusion framed as additional burden rather than core design", "Late or missed identification of neurodivergent staff and pupils"]} />
        </div></section>

        <PullQuote quote="Education already has the language around differentiation. The foundation exists. It just needs extending to staff." accentIndex={2} />

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why education is ready for this shift</h2>
          <PositivesBlock items={[
            { title: "Deep understanding of neurodivergent learners", description: "Education already has language around differentiation. The foundation exists." },
            { title: "Strong appetite for inclusion done well", description: "Many schools want systemic change, not surface compliance." },
            { title: "Neurodivergent educators often innovate", description: "Creative curriculum design and alternative engagement models often come from staff who think differently." },
          ]} opportunity="Support staff neurodivergence alongside pupil support, not as an afterthought." />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for education</h2>
          <RelevantWorkshops workshopIds={["education", "awareness", "champions", "line-manager", "parent", "mental-health", "disclosure", "react"]} title="Education-recommended sessions" description="From awareness sessions to deep-dive workshops on managing neurodivergent pupils and supporting neurodivergent staff." />
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What education clients see</h2>
          <OutcomeBlock title="Education outcomes" outcomes={[
            { label: "Improved staff disclosure rates and access to reasonable adjustments." },
            { label: "More inclusive assessment and feedback practices." },
            { label: "Better integration of neurodiversity across institutional strategy." },
            { label: "Reduced teacher burnout and improved retention." },
            { label: "More effective SEND provision through whole-school understanding." },
          ]} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock quote="They helped us see that neurodiversity isn't just a student support issue. It's an institutional culture issue." author="Pro Vice-Chancellor" org="UK University" />
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[{ value: "20+", label: "Universities supported" }, { value: "2,000+", label: "Education staff trained" }, { value: "UK & global", label: "Delivery reach" }, { value: "HE & FE", label: "Sector coverage" }].map((stat) => (
                  <div key={stat.label}><p className="font-display font-extrabold text-xl text-accent">{stat.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery to academic and professional services contexts." /></div>
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions about neurodiversity in education</h2>
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

        <PageCTA title="Ready to make neurodiversity work in education?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryEducation;
