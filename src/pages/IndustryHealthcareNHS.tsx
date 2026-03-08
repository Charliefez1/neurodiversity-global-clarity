import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";

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

const faqs = [
  { question: "How does neurodiversity training work in the NHS?", answer: "We deliver training adapted to clinical and non-clinical teams, covering disclosure, reasonable adjustments, masking, and burnout in high-pressure healthcare settings." },
  { question: "Do you work with Integrated Care Systems?", answer: "Yes. We work across ICS structures, supporting system-wide approaches to neuroinclusion in workforce planning, service design, and leadership development." },
  { question: "Is the training accredited?", answer: "Our programmes are CPD-accredited and designed to meet NHS workforce development standards." },
  { question: "Can you help with clinical team dynamics?", answer: "Yes. Many neurodivergent clinicians mask traits in hierarchical environments. We address communication styles, sensory load, and team dynamics specific to clinical settings." },
];

const keyIssues = [
  {
    title: "Workforce exhaustion is normalised",
    description: "Chronic understaffing and backlog recovery mean high cognitive load is constant. Neurodivergent staff are often high functioning and deeply committed, which makes burnout invisible until it is severe.",
    icon: BatteryWarning,
  },
  {
    title: "Masking in clinical roles",
    description: "Many clinicians mask traits to survive in hierarchical environments. Perfectionism plus sensory overload equals long-term fatigue.",
    icon: ShieldAlert,
  },
  {
    title: "Tribunal and grievance exposure",
    description: "Failure to recognise ADHD, autism, dyslexia or dyspraxia in clinical settings increases risk around performance management and capability processes.",
    icon: ShieldAlert,
  },
  {
    title: "Rigid systems in high-risk environments",
    description: "Healthcare relies on protocol and speed. Neurodivergent differences in communication or processing can be misinterpreted as incompetence rather than cognitive variation.",
    icon: Cog,
  },
  {
    title: "Emotional labour overload",
    description: "Staff managing patients and trauma while navigating their own regulation needs. The emotional cost is compounded for neurodivergent clinicians.",
    icon: Heart,
  },
];

const IndustryHealthcareNHS = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Healthcare & NHS — 2026 Challenges"
        description="Neurodiversity training and consultancy for NHS Trusts and healthcare organisations. Tackle burnout, masking in clinical roles, and tribunal risk with sector-adapted programmes."
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
          title="Where burnout hides behind dedication"
          description="NHS Trusts and healthcare organisations face unique pressures: normalised exhaustion, masking in clinical roles, tribunal exposure, and systems that mistake cognitive difference for incompetence."
        />

        {/* Key Issues 2026 */}
        <PageSection id="challenges" badge="Key issues in 2026" title="The pressure points healthcare can't ignore" description="The NHS's strengths — resilience, dedication, pace — become barriers when systems aren't designed for cognitive diversity.">
          <KeyIssuesGrid issues={keyIssues} />
        </PageSection>

        {/* What Is Breaking */}
        <PageSection id="breaking" title="What is breaking right now" variant="secondary">
          <WhatIsBreaking
            items={[
              "Informal coping strategies replacing formal support",
              "Performance procedures used before adjustment conversations",
              "High absence linked to stress and masking fatigue",
              "Senior clinicians leaving quietly",
            ]}
          />
        </PageSection>

        {/* The Positives */}
        <PageSection id="positives" badge="The positives" title="Why healthcare should lead on neuroinclusion" description="The same cognitive profiles driving burnout are also healthcare's greatest assets.">
          <PositivesBlock
            items={[
              { title: "Pattern recognition and hyperfocus are clinical assets", description: "Many neurodivergent clinicians excel at diagnostic thinking and complex case synthesis." },
              { title: "Lived experience improves patient care", description: "Neurodivergent staff often show exceptional empathy for patients navigating chronic illness or mental health." },
              { title: "Systems thinking aligns with neurodivergent cognition", description: "Many neurodivergent professionals see inefficiencies others miss." },
              { title: "NHS already understands disability law", description: "Infrastructure exists. It needs refinement, not reinvention." },
            ]}
            opportunity="Move from reactive occupational health referrals to proactive cognitive inclusion design."
          />
        </PageSection>

        {/* Relevant Workshops */}
        <PageSection id="workshops" badge="Your starting point" title="Workshops built for healthcare" variant="secondary" description="Each session is adapted to NHS language, clinical pressures, and the realities of healthcare delivery.">
          <RelevantWorkshops
            workshopIds={["nhs", "awareness", "champions", "line-manager", "mental-health", "disclosure", "hr-training", "exec-briefing"]}
            title="Healthcare-recommended sessions"
            description="From 60-minute awareness to full-day strategic programmes — all adapted to your clinical and non-clinical context."
          />
        </PageSection>

        {/* Outcomes */}
        <PageSection id="outcomes" badge="Outcomes" title="What healthcare clients see">
          <OutcomeBlock
            title="Healthcare outcomes"
            outcomes={[
              { metric: "35%", label: "reduction in neurodivergent staff turnover in the first year." },
              { label: "Improved disclosure rates as staff feel safer to share." },
              { label: "More consistent reasonable adjustments across teams and departments." },
              { label: "Better patient experience when staff are properly supported." },
              { label: "Reduced tribunal and grievance exposure." },
            ]}
          />
        </PageSection>

        {/* Evidence */}
        <PageSection id="evidence" badge="Experience" title="Our work in healthcare" variant="secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="This changed how we design services and how our teams work together, not just what they know about neurodiversity."
              author="Director of Operations"
              org="NHS Trust"
            />
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
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
          <div className="mt-8">
            <AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to clinical and non-clinical team needs." />
          </div>
        </PageSection>

        {/* FAQ */}
        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in healthcare">
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

        <PageCTA title="Ready to make neurodiversity work in healthcare?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryHealthcareNHS;
