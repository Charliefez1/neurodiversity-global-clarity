import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import MultiCTABar from "@/components/MultiCTABar";
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

const faqs = [
  { question: "Why does tech need neurodiversity training?", answer: "Technology attracts a high proportion of neurodivergent talent — but fast-paced, open-plan, always-on cultures can undermine the very people who drive innovation." },
  { question: "Do you work with engineering and product teams?", answer: "Yes. We deliver training adapted to engineering, product, design, and data teams, using language and scenarios they recognise." },
  { question: "Can you help with neurodiverse hiring?", answer: "We review and adapt recruitment processes to remove barriers for neurodivergent candidates, from job descriptions to interview formats." },
  { question: "How do you address sprint culture burnout?", answer: "Hyperfocus is exploited and recovery is ignored. We help design cognitive sustainability into delivery models so performance is maintained without burning out your best people." },
];

const keyIssues = [
  {
    title: "Extreme cognitive load",
    description: "Constant change, product iteration, AI integration. The cognitive demand in tech is relentless and increasing.",
    icon: Brain,
  },
  {
    title: "High prevalence of neurodivergent talent",
    description: "Tech has a disproportionate number of autistic, ADHD, and dyslexic professionals. Yet support is inconsistent.",
    icon: Cpu,
  },
  {
    title: "Burnout from sprint culture",
    description: "Hyperfocus is exploited. Recovery is ignored. Sprint cycles extract maximum output without understanding regulation needs.",
    icon: Zap,
  },
  {
    title: "Communication mismatch",
    description: "Asynchronous communication and remote working can amplify misunderstanding when neurodivergent communication styles aren't recognised.",
    icon: MessageSquare,
  },
  {
    title: "Performance metrics over energy sustainability",
    description: "Output is valued without understanding regulation cycles. Brilliant contributors are stalled at promotion due to social expectations.",
    icon: BarChart3,
  },
];

const IndustryTechnology = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Technology & Digital — 2026 Challenges"
        description="Neurodiversity training and consultancy for tech companies. Retain neurodivergent talent, design cognitive sustainability into delivery, and build inclusive engineering cultures."
        path="/industries/technology"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Technology & Digital", url: "https://www.neurodiversityglobal.com/industries/technology" },
      ])} />
      <JsonLd data={serviceSchema("Neurodiversity in Technology & Digital", "Neurodiversity training and consultancy for tech companies, digital teams, and innovation functions.", "https://www.neurodiversityglobal.com/industries/technology")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Technology & Digital" }]} />
      <main>
        <PageHero
          badge="Neurodiversity in technology"
          title="High cognitive demand. Low cognitive support."
          description="Technology companies rely on cognitive diversity for innovation — but extreme cognitive load, sprint culture burnout, and communication mismatch drive neurodivergent talent out."
        />

        <PageSection id="challenges" badge="Key issues in 2026" title="The pressure points tech can't ignore">
          <KeyIssuesGrid issues={keyIssues} />
        </PageSection>

        <PageSection id="breaking" title="What is breaking right now" variant="secondary">
          <WhatIsBreaking
            items={[
              "Senior engineers leaving due to burnout",
              "Brilliant contributors stalled at promotion due to social expectations",
              "Inclusion initiatives that ignore technical reality",
              "Communication mismatch amplified by remote and hybrid working",
            ]}
          />
        </PageSection>

        <PageSection id="positives" badge="The positives" title="Why tech should invest in cognitive sustainability">
          <PositivesBlock
            items={[
              { title: "Neurodivergent cognition aligns with complex problem solving", description: "Systems architecture, AI modelling, cybersecurity pattern detection — these are neurodivergent strengths." },
              { title: "Flexibility is culturally possible", description: "Remote, asynchronous, output-based work models already exist. The infrastructure is there." },
              { title: "Appetite for innovation", description: "Digital sector is more open to cognitive diversity framing than any other sector." },
            ]}
            opportunity="Design cognitive sustainability into delivery models."
          />
        </PageSection>

        <PageSection id="workshops" badge="Your starting point" title="Workshops built for technology" variant="secondary" description="Sessions adapted to engineering culture, agile environments, and the pace of tech delivery.">
          <RelevantWorkshops
            workshopIds={["technology-sector", "tech-function", "awareness", "champions", "line-manager", "mental-health", "react", "exec-briefing"]}
            title="Technology-recommended sessions"
            description="From engineering team workshops to executive briefings — all using language and scenarios from tech environments."
          />
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What tech clients see">
          <OutcomeBlock
            title="Technology outcomes"
            outcomes={[
              { metric: "45%", label: "reduction in neurodivergent employee turnover." },
              { label: "Improved team performance and collaboration." },
              { label: "More inclusive recruitment attracting wider talent pools." },
              { label: "Reduced burnout and better retention of high-value engineers." },
              { label: "Cognitive sustainability designed into sprint and delivery cycles." },
            ]}
          />
        </PageSection>

        <PageSection id="evidence" badge="Experience" title="Our work in technology" variant="secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently."
              author="VP of Engineering"
              org="Global Technology Company"
            />
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "25+", label: "Tech companies supported" },
                  { value: "2,500+", label: "Tech staff trained" },
                  { value: "UK & global", label: "Delivery reach" },
                  { value: "SaaS to enterprise", label: "Company range" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-extrabold text-xl text-accent">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to fast-paced tech delivery environments." />
          </div>
        </PageSection>

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in tech">
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <MultiCTABar />
        <PageCTA title="Ready to make neurodiversity work in tech?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryTechnology;
