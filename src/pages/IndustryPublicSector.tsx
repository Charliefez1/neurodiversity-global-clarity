import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import RiskCallout from "@/components/blocks/RiskCallout";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, faqSchema } from "@/components/JsonLd";
import { Building2, Shield, FileText } from "lucide-react";

const faqs = [
  { question: "Do you work with central government departments?", answer: "Yes. We've delivered training and consultancy across central government departments, arms-length bodies, and regulators." },
  { question: "How do you handle the Public Sector Equality Duty?", answer: "Our programmes are designed with PSED compliance in mind. We help organisations move beyond compliance to genuine neuroinclusion." },
  { question: "Can you work within Civil Service frameworks?", answer: "We understand Civil Service structures, procurement processes, and delivery expectations. We adapt to your operating environment." },
];

const IndustryPublicSector = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Public Sector & Government"
        description="Neurodiversity training and consultancy for central and local government, civil service, and public sector organisations. Meet PSED obligations and retain talent."
        path="/industries/public-sector"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Public Sector & Government", url: "https://www.neurodiversityglobal.com/industries/public-sector" },
      ])} />
      <JsonLd data={serviceSchema("Neurodiversity in Public Sector & Government", "Neurodiversity training and consultancy for central government, local authorities, and public sector organisations.", "https://www.neurodiversityglobal.com/industries/public-sector")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Public Sector & Government" }]} />
      <main>
        <PageHero
          badge="Neurodiversity in public sector"
          title="Public sector organisations set the standard — neuroinclusion should be part of that"
          description="Government departments and public bodies face unique expectations around equality, diversity, and inclusion. Neurodiversity is often the missing piece."
        />

        <PageSection id="challenges" badge="Sector challenges" title="Where public sector organisations typically struggle">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
              <ul className="space-y-2">
                {[
                  "Policy-heavy environments where reasonable adjustments get lost in process.",
                  "Recruitment systems that inadvertently filter out neurodivergent candidates.",
                  "Performance frameworks that don't account for different working styles.",
                  "A culture of conformity that conflicts with cognitive diversity.",
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
                "Public Sector Equality Duty compliance gaps around neurodiversity.",
                "Talent retention in a competitive market for specialist skills.",
                "Reputational risk when public bodies don't meet their own inclusion standards.",
              ]}
            />
          </div>
        </PageSection>

        <PageSection id="approach" badge="Our approach" title="How we work with public sector organisations" variant="secondary" description="We understand government structures, procurement, and the pace of public sector delivery.">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: "Department-wide training", description: "Programmes adapted for civil service and local government contexts, covering managers, HR, and policy teams." },
              { icon: FileText, title: "Policy and process review", description: "Review of recruitment, reasonable adjustments, performance management, and workforce planning policies." },
              { icon: Shield, title: "PSED and compliance support", description: "Help meeting Public Sector Equality Duty obligations through practical, embedded neuroinclusion." },
            ].map((s) => (
              <article key={s.title} className="rounded-lg bg-card border border-border p-6">
                <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to public sector delivery contexts." />
          </div>
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What public sector clients see">
          <OutcomeBlock
            title="Public sector outcomes"
            outcomes={[
              { label: "Stronger PSED compliance positioning on neurodiversity." },
              { label: "Improved staff retention and reduced grievance risk." },
              { label: "More confident managers making better reasonable adjustment decisions." },
              { label: "Policy frameworks that account for cognitive diversity." },
            ]}
          />
        </PageSection>

        <PageSection id="evidence" badge="Experience" title="Our work in public sector" variant="secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="They understand the difference between ticking a box and actually making things better for neurodivergent people."
              author="Chief People Officer"
              org="Government Department"
            />
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "40+", label: "Public sector clients" },
                  { value: "4,000+", label: "Staff trained" },
                  { value: "Central & local", label: "Government coverage" },
                  { value: "15+", label: "Years of experience" },
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

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in public sector">
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageCTA title="Ready to make neurodiversity work in the public sector?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryPublicSector;
