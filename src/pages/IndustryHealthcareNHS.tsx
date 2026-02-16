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
import { Heart, Shield, Users } from "lucide-react";

const faqs = [
  { question: "How does neurodiversity training work in the NHS?", answer: "We deliver training adapted to clinical and non-clinical teams, covering disclosure, reasonable adjustments, masking, and burnout in high-pressure healthcare settings." },
  { question: "Do you work with Integrated Care Systems?", answer: "Yes. We work across ICS structures, supporting system-wide approaches to neuroinclusion in workforce planning, service design, and leadership development." },
  { question: "Is the training accredited?", answer: "Our programmes are CPD-accredited and designed to meet NHS workforce development standards." },
];

const IndustryHealthcareNHS = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Healthcare & NHS"
        description="Neurodiversity training and consultancy for NHS Trusts and healthcare organisations. Support clinical teams, reduce burnout, and build neuroinclusive systems."
        path="/industries/healthcare-nhs"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Healthcare & NHS", url: "https://www.neurodiversityglobal.com/industries/healthcare-nhs" },
      ])} />
      <JsonLd data={serviceSchema("Neurodiversity in Healthcare & NHS", "Sector-adapted neurodiversity training and consultancy for NHS Trusts, Integrated Care Systems, and healthcare organisations.", "https://www.neurodiversityglobal.com/industries/healthcare-nhs")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Healthcare & NHS" }]} />
      <main>
        <PageHero
          badge="Neurodiversity in healthcare"
          title="Neuroinclusive healthcare starts with the workforce, not just the patients"
          description="NHS Trusts and healthcare organisations face unique pressures: burnout, disclosure anxiety, shift-based demands, and a culture that often expects everyone to cope the same way."
        />

        <PageSection id="challenges" badge="Sector challenges" title="Where healthcare organisations typically struggle" description="The NHS's strengths — resilience, dedication, pace — can become barriers when systems aren't designed for cognitive diversity.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
              <ul className="space-y-2">
                {[
                  "Disclosure feels unsafe in clinical environments where 'coping' is the norm.",
                  "Reasonable adjustments are inconsistent — depending on which manager you report to.",
                  "Shift patterns and sensory environments overwhelm neurodivergent staff.",
                  "Recruitment and Occupational Health processes that screen out rather than support.",
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
                "Staff burnout and retention costs in a workforce already under extreme pressure.",
                "Patient safety implications when neurodivergent staff aren't properly supported.",
                "Equality Act compliance gaps in reasonable adjustment processes.",
              ]}
            />
          </div>
        </PageSection>

        <PageSection id="approach" badge="Our approach" title="How we work with healthcare organisations" variant="secondary" description="We understand clinical and non-clinical contexts, NHS structures, and the pace of healthcare delivery.">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Heart, title: "Clinical team training", description: "Programmes designed for clinical staff, addressing masking, burnout, and patient communication through a neurodiversity lens." },
              { icon: Users, title: "Leadership and management", description: "Support for managers in making reasonable adjustments, having disclosure conversations, and leading neurodivergent teams." },
              { icon: Shield, title: "Systems and policy review", description: "Review of Occupational Health processes, HR policies, and workforce planning through a neuroinclusive lens." },
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
            <AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to clinical and non-clinical team needs." />
          </div>
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What healthcare clients see" description="Outcomes that show up in retention, wellbeing, and service quality.">
          <OutcomeBlock
            title="Healthcare outcomes"
            outcomes={[
              { metric: "35%", label: "reduction in neurodivergent staff turnover in the first year." },
              { label: "Improved disclosure rates as staff feel safer to share." },
              { label: "More consistent reasonable adjustments across teams and departments." },
              { label: "Better patient experience when staff are properly supported." },
            ]}
          />
        </PageSection>

        <PageSection id="evidence" badge="Experience" title="Our work in healthcare" variant="secondary" description="We've delivered training, coaching, and strategy across NHS Trusts and healthcare organisations.">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="This changed how we design services and how our teams work together, not just what they know about neurodiversity."
              author="Director of Operations"
              org="NHS Trust"
            />
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30+", label: "NHS Trusts supported" },
                  { value: "3,000+", label: "Healthcare staff trained" },
                  { value: "15+", label: "Years in healthcare" },
                  { value: "UK-wide", label: "Delivery reach" },
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

        {/* FAQ section for SEO */}
        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in healthcare">
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

        <PageCTA title="Ready to make neurodiversity work in healthcare?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryHealthcareNHS;
