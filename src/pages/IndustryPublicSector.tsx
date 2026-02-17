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
import { Scale, MessageSquare, Wallet, Users, FileCheck } from "lucide-react";

const faqs = [
  { question: "Do you work with central government departments?", answer: "Yes. We've delivered training and consultancy across central government departments, arms-length bodies, and regulators." },
  { question: "How do you handle the Public Sector Equality Duty?", answer: "Our programmes are designed with PSED compliance in mind. We help organisations move beyond compliance to genuine neuroinclusion." },
  { question: "Can you work within Civil Service frameworks?", answer: "We understand Civil Service structures, procurement processes, and delivery expectations. We adapt to your operating environment." },
  { question: "How do you address recruitment bias?", answer: "Neurodivergent applicants are disproportionately screened out by traditional interview models. We review and adapt recruitment processes to remove these barriers." },
];

const keyIssues = [
  {
    title: "Compliance-driven culture",
    description: "Inclusion is often framed as a legal requirement rather than a performance enabler. This limits its impact.",
    icon: FileCheck,
  },
  {
    title: "Performance management under scrutiny",
    description: "Capability procedures are increasingly challenged under the Equality Act 2010 when neurodivergence isn't considered.",
    icon: Scale,
  },
  {
    title: "Decision-making hierarchy",
    description: "Neurodivergent communication styles can be misread as confrontational or rigid in hierarchical structures.",
    icon: MessageSquare,
  },
  {
    title: "Budget constraints",
    description: "Inclusion is seen as a cost centre rather than a risk reduction tool. The financial case isn't being made.",
    icon: Wallet,
  },
  {
    title: "Recruitment bottlenecks",
    description: "Neurodivergent applicants are disproportionately screened out by traditional interview models.",
    icon: Users,
  },
];

const IndustryPublicSector = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Public Sector & Government — 2026 Challenges"
        description="Neurodiversity training and consultancy for central and local government. Move from compliance to capability with sector-adapted programmes."
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
          title="Policy heavy. Risk aware. Slow to change."
          description="Government departments and public bodies have the governance structures for neuroinclusion — but compliance culture, budget constraints, and hierarchy mean capability consistently lags behind policy."
        />

        <PageSection id="challenges" badge="Key issues in 2026" title="The pressure points public sector can't ignore">
          <KeyIssuesGrid issues={keyIssues} />
        </PageSection>

        <PageSection id="breaking" title="What is breaking right now" variant="secondary">
          <WhatIsBreaking
            items={[
              "High grievance volumes related to unrecognised neurodivergence",
              "Long-term absence linked to masking and stress",
              "Internal culture fatigue from performative inclusion",
              "Talent loss to private sector with better neuroinclusive practices",
            ]}
          />
        </PageSection>

        <PageSection id="positives" badge="The positives" title="Why public sector can lead on this">
          <PositivesBlock
            items={[
              { title: "Clear governance structures", description: "Policy frameworks can embed neuroinclusion at scale once aligned." },
              { title: "Strong ethical mandate", description: "Public service ethos aligns well with fairness-based inclusion." },
              { title: "Structured career pathways", description: "Opportunity to redesign progression routes with cognitive diversity in mind." },
            ]}
            opportunity="Shift from policy language to practical manager capability."
          />
        </PageSection>

        <PageSection id="workshops" badge="Your starting point" title="Workshops built for public sector" variant="secondary" description="Sessions adapted to Civil Service structures, procurement contexts, and policy-heavy environments.">
          <RelevantWorkshops
            workshopIds={["awareness", "champions", "line-manager", "manager-dev", "hr-training", "exec-briefing", "disclosure", "performance"]}
            title="Public sector-recommended sessions"
            description="From manager capability workshops to board-level strategy — adapted to your governance and operating environment."
          />
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What public sector clients see">
          <OutcomeBlock
            title="Public sector outcomes"
            outcomes={[
              { label: "Stronger PSED compliance positioning on neurodiversity." },
              { label: "Improved staff retention and reduced grievance risk." },
              { label: "More confident managers making better reasonable adjustment decisions." },
              { label: "Policy frameworks that account for cognitive diversity." },
              { label: "Recruitment processes that attract wider talent pools." },
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
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
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
          <div className="mt-8">
            <AccessibilityNote text="All materials are designed for cognitive accessibility and adapted to public sector delivery contexts." />
          </div>
        </PageSection>

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in public sector">
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
        <PageCTA title="Ready to make neurodiversity work in the public sector?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryPublicSector;
