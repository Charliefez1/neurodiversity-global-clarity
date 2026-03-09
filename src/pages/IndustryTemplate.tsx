import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import RiskCallout from "@/components/blocks/RiskCallout";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { GraduationCap, Headphones, Settings } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import diverseImg from "@/assets/industries/diverse-workforce.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const IndustryTemplate = () => {
  return (
    <>
      <SEOHead title="Neurodiversity in Financial Services" description="Neurodiversity training and consultancy for financial services." path="/industries/financial-services" />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Financial Services", url: "https://www.neurodiversityglobal.com/industries/financial-services" },
      ])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Financial Services" }]} />
      <main>
        {/* Hero — split */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Neurodiversity in financial services</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">High-performance cultures need neuroinclusive systems, not just good intentions</h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Financial services organisations face unique pressures: regulatory scrutiny, high staff turnover costs, and performance cultures that often exclude neurodivergent talent.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl"><img src={diverseImg} alt="Financial services professionals" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" /></div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">50+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Financial services clients</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Sector challenges</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">Where financial services organisations typically struggle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-md"
              >
                <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
                <ul className="space-y-2">
                  {["Recruitment processes that filter out neurodivergent candidates before interview.", "Performance frameworks that penalise different working styles.", "Open-plan offices and always-on cultures that overwhelm neurodivergent employees.", "A focus on 'cultural fit' that reinforces neurotypical norms."].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <RiskCallout title="Sector-specific risks" items={["FCA and PRA expectations around diversity and inclusion are increasing.", "High replacement costs in a sector where specialist talent is scarce.", "Reputational risk from poor employee experience in a competitive market."]} />
            </div>
          </div>
        </section>

        <PullQuote quote="High-performance cultures need neuroinclusive systems, not just good intentions." accentIndex={3} />

        {/* Approach */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Our approach</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">How Neurodiversity Global works with financial services</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: GraduationCap, title: "Sector-adapted training", description: "Programmes built around financial services case studies, language, and scenarios your teams recognise." },
                { icon: Headphones, title: "Coaching for high-performance roles", description: "Support for neurodivergent employees in demanding roles, and the managers responsible for their performance." },
                { icon: Settings, title: "Systems and process review", description: "Audit recruitment, onboarding, performance management, and reasonable adjustments against best practice." },
              ].map((s, i) => (
                <motion.article key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 overflow-hidden hover:bg-primary-foreground/[0.1] transition-colors"
                >
                  <div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${NEURO_COLOURS[i % NEURO_COLOURS.length]}25`, color: NEURO_COLOURS[i % NEURO_COLOURS.length] }}>
                    <s.icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-primary-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.description}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-8"><AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to your teams' needs." /></div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Outcomes</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">What financial services clients see</h2>
            <OutcomeBlock title="Sector outcomes" outcomes={[
              { metric: "40%", label: "reduction in neurodivergent employee turnover in the first year." },
              { label: "Stronger compliance positioning with regulators on diversity and inclusion." },
              { label: "Reduced grievance and tribunal risk from more confident, better-informed managers." },
              { label: "Improved team dynamics and collaboration across high-pressure environments." },
            ]} />
          </div>
        </section>

        {/* Evidence */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Experience</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Our work in financial services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialBlock quote="They understood our regulatory environment and commercial pressures from day one. The training felt relevant, not generic." author="Head of People" org="FTSE 250 Financial Services" />
              <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-sm text-primary-foreground mb-3">Delivery experience</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[{ value: "50+", label: "Financial services clients" }, { value: "5,000+", label: "People trained in sector" }, { value: "15+", label: "Years of sector experience" }, { value: "UK & global", label: "Delivery reach" }].map((stat) => (
                    <div key={stat.label}><p className="font-display font-extrabold text-xl text-accent">{stat.value}</p><p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA title="Ready to make neurodiversity work in financial services?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryTemplate;
