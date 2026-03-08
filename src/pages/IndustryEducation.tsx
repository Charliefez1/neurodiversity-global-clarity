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
import { TrendingUp, Eye, BatteryWarning, ClipboardCheck, Users } from "lucide-react";

const faqs = [
  { question: "Do you work with universities?", answer: "Yes. We work with universities and higher education institutions, supporting academic staff, professional services teams, student-facing services, and leadership governance." },
  { question: "How is neurodiversity training different for education?", answer: "Education environments have unique dynamics: academic freedom, student-staff relationships, assessment design, and institutional culture all need a neurodiversity lens." },
  { question: "Can you support SEND and disability services?", answer: "We work alongside existing SEND and disability services to ensure neurodiversity is embedded across the whole institution, not siloed in support teams." },
  { question: "Do you address gender bias in identification?", answer: "Yes. Girls and high-masking pupils continue to be missed. Our training addresses gender bias in ADHD and autism identification specifically." },
];

const keyIssues = [
  {
    title: "SEND demand continues rising",
    description: "EHCP applications remain high. Teachers are absorbing unmet need without adequate training.",
    icon: TrendingUp,
  },
  {
    title: "Staff neurodivergence is under-recognised",
    description: "A significant number of teachers and support staff are neurodivergent. Many are late-diagnosed or undiagnosed.",
    icon: Eye,
  },
  {
    title: "Burnout linked to emotional regulation load",
    description: "Managing neurodivergent pupils while masking your own traits is unsustainable.",
    icon: BatteryWarning,
  },
  {
    title: "Ofsted pressure and compliance focus",
    description: "Inclusion is measured, but staff capability is inconsistent across settings.",
    icon: ClipboardCheck,
  },
  {
    title: "Gender bias in identification",
    description: "Girls and high-masking pupils continue to be missed for ADHD and autism identification.",
    icon: Users,
  },
];

const IndustryEducation = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Education: 2026 Challenges"
        description="Neurodiversity training and consultancy for schools, universities, and education institutions. Address SEND demand, staff neurodivergence, and inclusive systems."
        path="/industries/education"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Education", url: "https://www.neurodiversityglobal.com/industries/education" },
      ])} />
      <JsonLd data={serviceSchema("Neurodiversity in Education", "Neurodiversity training and consultancy for universities, schools, and education institutions.", "https://www.neurodiversityglobal.com/industries/education")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Education" }]} />
      <main>
        <PageHero
          badge="Neurodiversity in education"
          title="Teaching inclusion while struggling with it internally"
          description="Education institutions support neurodivergent learners, but overlook neurodivergent staff, absorb rising SEND demand without training, and treat inclusion as burden rather than design."
        />

        <PageSection id="challenges" badge="Key issues in 2026" title="The pressure points education can't ignore">
          <KeyIssuesGrid issues={keyIssues} />
        </PageSection>

        <PageSection id="breaking" title="What is breaking right now" variant="secondary">
          <WhatIsBreaking
            items={[
              "Teachers leaving due to workload and emotional strain",
              "SENCOs overwhelmed and under-resourced",
              "Inclusion framed as additional burden rather than core design",
              "Late or missed identification of neurodivergent staff and pupils",
            ]}
          />
        </PageSection>

        <PageSection id="positives" badge="The positives" title="Why education is ready for this shift">
          <PositivesBlock
            items={[
              { title: "Deep understanding of neurodivergent learners", description: "Education already has language around differentiation. The foundation exists." },
              { title: "Strong appetite for inclusion done well", description: "Many schools want systemic change, not surface compliance." },
              { title: "Neurodivergent educators often innovate", description: "Creative curriculum design and alternative engagement models often come from staff who think differently." },
            ]}
            opportunity="Support staff neurodivergence alongside pupil support — not as an afterthought."
          />
        </PageSection>

        <PageSection id="workshops" badge="Your starting point" title="Workshops built for education" variant="secondary" description="Sessions adapted to classroom realities, SEND pressures, and academic culture.">
          <RelevantWorkshops
            workshopIds={["education", "awareness", "champions", "line-manager", "parent", "mental-health", "disclosure", "react"]}
            title="Education-recommended sessions"
            description="From awareness sessions to deep-dive workshops on managing neurodivergent pupils and supporting neurodivergent staff."
          />
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What education clients see">
          <OutcomeBlock
            title="Education outcomes"
            outcomes={[
              { label: "Improved staff disclosure rates and access to reasonable adjustments." },
              { label: "More inclusive assessment and feedback practices." },
              { label: "Better integration of neurodiversity across institutional strategy." },
              { label: "Reduced teacher burnout and improved retention." },
              { label: "More effective SEND provision through whole-school understanding." },
            ]}
          />
        </PageSection>

        <PageSection id="evidence" badge="Experience" title="Our work in education" variant="secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="They helped us see that neurodiversity isn't just a student support issue — it's an institutional culture issue."
              author="Pro Vice-Chancellor"
              org="UK University"
            />
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-center shadow-md">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-4">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "20+", label: "Universities supported" },
                  { value: "2,000+", label: "Education staff trained" },
                  { value: "UK & global", label: "Delivery reach" },
                  { value: "HE & FE", label: "Sector coverage" },
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
            <AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery to academic and professional services contexts." />
          </div>
        </PageSection>

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in education">
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </PageSection>

        
        <PageCTA title="Ready to make neurodiversity work in education?" description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step." />
      </main>
      <Footer />
    </>
  );
};

export default IndustryEducation;
