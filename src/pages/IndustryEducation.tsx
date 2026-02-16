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
import { BookOpen, GraduationCap, Settings } from "lucide-react";

const faqs = [
  { question: "Do you work with universities?", answer: "Yes. We work with universities and higher education institutions, supporting academic staff, professional services teams, student-facing services, and leadership governance." },
  { question: "How is neurodiversity training different for education?", answer: "Education environments have unique dynamics — academic freedom, student-staff relationships, assessment design, and institutional culture all need a neurodiversity lens." },
  { question: "Can you support SEND and disability services?", answer: "We work alongside existing SEND and disability services to ensure neurodiversity is embedded across the whole institution, not siloed in support teams." },
];

const IndustryEducation = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Education"
        description="Neurodiversity training and consultancy for universities and education institutions. Support staff, improve student outcomes, and build neuroinclusive systems."
        path="/industries/education"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Education", url: "https://www.neurodiversityglobal.com/industries/education" },
      ])} />
      <JsonLd data={serviceSchema("Neurodiversity in Education", "Neurodiversity training and consultancy for universities, higher education, and education institutions.", "https://www.neurodiversityglobal.com/industries/education")} />
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Education" }]} />
      <main>
        <PageHero
          badge="Neurodiversity in education"
          title="Education institutions that understand neurodiversity create better outcomes for everyone"
          description="Universities and education providers support neurodivergent students — but often overlook neurodivergent staff and the systems they work within."
        />

        <PageSection id="challenges" badge="Sector challenges" title="Where education institutions typically struggle">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
              <ul className="space-y-2">
                {[
                  "Student support is well-developed, but staff support is often absent.",
                  "Academic culture rewards a narrow range of working and communication styles.",
                  "Assessment and feedback processes don't account for cognitive differences.",
                  "SEND expertise is siloed in support teams rather than embedded institution-wide.",
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
                "Staff retention and wellbeing in an already stretched sector.",
                "Equality Act and Public Sector Equality Duty compliance gaps.",
                "Student experience and outcomes affected by neurotypical-default systems.",
              ]}
            />
          </div>
        </PageSection>

        <PageSection id="approach" badge="Our approach" title="How we work with education institutions" variant="secondary" description="We understand academic culture, governance structures, and the unique demands of higher education.">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: GraduationCap, title: "Staff development programmes", description: "Training for academic and professional services staff, covering neurodiversity awareness, reasonable adjustments, and inclusive practice." },
              { icon: BookOpen, title: "Curriculum and assessment review", description: "Review assessment, feedback, and teaching approaches through a neuroinclusive lens." },
              { icon: Settings, title: "Institutional strategy", description: "Support for embedding neurodiversity into institutional strategy, EDI frameworks, and governance." },
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
            <AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery to academic and professional services contexts." />
          </div>
        </PageSection>

        <PageSection id="outcomes" badge="Outcomes" title="What education clients see">
          <OutcomeBlock
            title="Education outcomes"
            outcomes={[
              { label: "Improved staff disclosure rates and access to reasonable adjustments." },
              { label: "More inclusive assessment and feedback practices." },
              { label: "Better integration of neurodiversity across institutional EDI strategy." },
              { label: "Improved student experience through neuroinclusive teaching." },
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
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-4">
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
        </PageSection>

        <PageSection id="faq" badge="FAQs" title="Common questions about neurodiversity in education">
          <div className="grid gap-4 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
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
