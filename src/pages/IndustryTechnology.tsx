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
import { Cpu, Zap, MessageSquare, BarChart3, Brain } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import diverseImg from "@/assets/industries/diverse-workforce.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const faqs = [
  { question: "Why does tech need neurodiversity training?", answer: "Technology attracts a high proportion of neurodivergent talent, but fast-paced, open-plan, always-on cultures can undermine the very people who drive innovation." },
  { question: "Do you work with engineering and product teams?", answer: "Yes. We deliver training adapted to engineering, product, design, and data teams, using language and scenarios they recognise." },
  { question: "Can you help with neurodiverse hiring?", answer: "We review and adapt recruitment processes to remove barriers for neurodivergent candidates, from job descriptions to interview formats." },
  { question: "How do you address sprint culture burnout?", answer: "Hyperfocus is exploited and recovery is ignored. We help design cognitive sustainability into delivery models so performance is maintained without burning out your best people." },
];

const keyIssues = [
  { title: "Extreme cognitive load", description: "Constant change, product iteration, AI integration. The cognitive demand in tech is relentless and increasing.", icon: Brain },
  { title: "High prevalence of neurodivergent talent", description: "Tech has a disproportionate number of autistic, ADHD, and dyslexic professionals. Yet support is inconsistent.", icon: Cpu },
  { title: "Burnout from sprint culture", description: "Hyperfocus is exploited. Recovery is ignored. Sprint cycles extract maximum output without understanding regulation needs.", icon: Zap },
  { title: "Communication mismatch", description: "Asynchronous communication and remote working can amplify misunderstanding when neurodivergent communication styles aren't recognised.", icon: MessageSquare },
  { title: "Performance metrics over energy sustainability", description: "Output is valued without understanding regulation cycles. Brilliant contributors are stalled at promotion due to social expectations.", icon: BarChart3 },
];

const IndustryTechnology = () => {
  return (
    <>
      <SEOHead title="Neurodiversity in Technology & Digital: 2026 Challenges" description="Neurodiversity training and consultancy for tech companies." path="/industries/technology" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" }, { name: "Technology & Digital", url: "https://www.neurodiversityglobal.com/industries/technology" }])} />
      <JsonLd data={serviceSchema("Neurodiversity in Technology & Digital", "Neurodiversity training and consultancy for tech companies, digital teams, and innovation functions.", "https://www.neurodiversityglobal.com/industries/technology")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Technology & Digital" }]} />
      <main>
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in technology</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">High cognitive demand. Low cognitive support.</h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Technology companies rely on cognitive diversity for innovation, but extreme cognitive load, sprint culture burnout, and communication mismatch drive neurodivergent talent out.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl"><img src={diverseImg} alt="Technology team collaborating" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">25+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Tech companies supported</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Key issues in 2026</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">The pressure points tech can't ignore</h2>
          <KeyIssuesGrid issues={keyIssues} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-8">What is breaking right now</h2>
          <WhatIsBreaking items={["Senior engineers leaving due to burnout", "Brilliant contributors stalled at promotion due to social expectations", "Inclusion initiatives that ignore technical reality", "Communication mismatch amplified by remote and hybrid working"]} />
        </div></section>

        <PullQuote quote="The sector's greatest strength — cognitive diversity — is also the thing it's worst at supporting." accentIndex={3} />

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">The positives</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Why tech should invest in cognitive sustainability</h2>
          <PositivesBlock items={[
            { title: "Neurodivergent cognition aligns with complex problem solving", description: "Systems architecture, AI modelling, cybersecurity pattern detection. These are neurodivergent strengths." },
            { title: "Flexibility is culturally possible", description: "Remote, asynchronous, output-based work models already exist. The infrastructure is there." },
            { title: "Appetite for innovation", description: "Digital sector is more open to cognitive diversity framing than any other sector." },
          ]} opportunity="Design cognitive sustainability into delivery models." />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Your starting point</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Workshops built for technology</h2>
          <RelevantWorkshops workshopIds={["technology-sector", "tech-function", "awareness", "champions", "line-manager", "mental-health", "react", "exec-briefing"]} title="Technology-recommended sessions" description="From engineering team workshops to executive briefings, all using language and scenarios from tech environments." />
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What tech clients see</h2>
          <OutcomeBlock title="Technology outcomes" outcomes={[
            { metric: "45%", label: "reduction in neurodivergent employee turnover." },
            { label: "Improved team performance and collaboration." },
            { label: "More inclusive recruitment attracting wider talent pools." },
            { label: "Reduced burnout and better retention of high-value engineers." },
            { label: "Cognitive sustainability designed into sprint and delivery cycles." },
          ]} />
        </div></section>

        <section className="bg-primary py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in technology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock quote="The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently." author="VP of Engineering" org="Global Technology Company" />
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[{ value: "25+", label: "Tech companies supported" }, { value: "2,500+", label: "Tech staff trained" }, { value: "UK & global", label: "Delivery reach" }, { value: "SaaS to enterprise", label: "Company range" }].map((stat) => (
                  <div key={stat.label}><p className="font-display font-extrabold text-xl text-accent">{stat.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to fast-paced tech delivery environments." /></div>
        </div></section>

        <section className="bg-warm-stone py-20 lg:py-28"><div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">FAQs</p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Common questions about neurodiversity in tech</h2>
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

        <PageCTA title="Ready to make neurodiversity work in tech?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryTechnology;
