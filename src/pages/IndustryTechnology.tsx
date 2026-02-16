import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import MultiCTABar from "@/components/MultiCTABar";
import RiskCallout from "@/components/blocks/RiskCallout";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, faqSchema } from "@/components/JsonLd";
import { Cpu, Zap, Users } from "lucide-react";

const faqs = [
  { question: "Why does tech need neurodiversity training?", answer: "Technology attracts a high proportion of neurodivergent talent — but fast-paced, open-plan, always-on cultures can undermine the very people who drive innovation." },
  { question: "Do you work with engineering and product teams?", answer: "Yes. We deliver training adapted to engineering, product, design, and data teams, using language and scenarios they recognise." },
  { question: "Can you help with neurodiverse hiring?", answer: "We review and adapt recruitment processes to remove barriers for neurodivergent candidates, from job descriptions to interview formats." },
];

const IndustryTechnology = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Technology & Digital"
        description="Neurodiversity training and consultancy for tech companies and digital teams. Retain neurodivergent talent, reduce burnout, and build inclusive engineering cultures."
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
          title="Tech attracts neurodivergent talent — but too often fails to keep it"
          description="Technology companies rely on cognitive diversity for innovation, but open-plan offices, always-on cultures, and one-size-fits-all management often drive neurodivergent employees out."
        />

        <PageSection id="challenges" badge="Sector challenges" title="Where tech companies typically struggle">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
              <ul className="space-y-2">
                {[
                  "Open-plan offices and constant collaboration that overwhelm neurodivergent employees.",
                  "Performance cultures that reward speed over depth and visible output over quality thinking.",
                  "Recruitment processes biased toward neurotypical communication styles.",
                  "Burnout and masking in 'move fast' cultures where vulnerability feels unsafe.",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <RiskCallout
              title="Sector-specific risks"
              items={[
                "Losing high-value neurodivergent talent to competitors with better support.",
                "Innovation decline when cognitive diversity is suppressed by cultural norms.",
                "Legal and reputational risk from inadequate reasonable adjustments.",
              ]}
            />
          </div>
        </PageSection>

        <PageSection id="approach" badge="Our approach" title="How we work with tech companies" variant="secondary" description="We understand agile environments, engineering culture, and the pace of technology delivery.">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Cpu, title: "Engineering-adapted training", description: "Programmes built for engineering, product, and design teams using language, case studies, and scenarios from tech environments." },
              { icon: Users, title: "Management coaching", description: "Support for engineering managers and team leads in managing neurodivergent team members effectively." },
              { icon: Zap, title: "Culture and systems review", description: "Review of recruitment, onboarding, workspace design, and performance management for neuroinclusion." },
            ].map((s) => (
              <article key={s.title} className="rounded-lg bg-card border border-border p-6 shadow-md">
                <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to fast-paced tech delivery environments." />
          </div>
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What tech clients see">
          <OutcomeBlock
            title="Technology outcomes"
            outcomes={[
              { metric: "45%", label: "reduction in neurodivergent employee turnover." },
              { label: "Improved team performance and collaboration." },
              { label: "More inclusive recruitment attracting wider talent pools." },
              { label: "Reduced burnout and better retention of high-value engineers." },
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
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-4">
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
        </PageSection>

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in tech">
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-md">
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
