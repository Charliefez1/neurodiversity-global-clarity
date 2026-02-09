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
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { GraduationCap, Headphones, Settings } from "lucide-react";

const IndustryTemplate = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity in Financial Services"
        description="Neurodiversity training and consultancy for financial services. Reduce risk, retain talent, and meet regulatory expectations."
        path="/industries/financial-services"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
        { name: "Financial Services", url: "https://www.neurodiversityglobal.com/industries/financial-services" },
      ])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Financial Services" }]} />
      <main>
        {/* 1. Industry context */}
        <PageHero
          badge="Neurodiversity in financial services"
          title="High-performance cultures need neuroinclusive systems — not just good intentions"
          description="Financial services organisations face unique pressures: regulatory scrutiny, high staff turnover costs, and performance cultures that often exclude neurodivergent talent."
        />

        {/* 2. Where things go wrong */}
        <PageSection
          id="challenges"
          badge="Sector challenges"
          title="Where financial services organisations typically struggle"
          description="The sector's strengths — speed, precision, high standards — can become barriers when systems aren't designed for cognitive diversity."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Systemic failure points</h3>
              <ul className="space-y-2">
                {[
                  "Recruitment processes that filter out neurodivergent candidates before interview.",
                  "Performance frameworks that penalise different working styles.",
                  "Open-plan offices and always-on cultures that overwhelm neurodivergent employees.",
                  "A focus on 'cultural fit' that reinforces neurotypical norms.",
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
                "FCA and PRA expectations around diversity and inclusion are increasing.",
                "High replacement costs in a sector where specialist talent is scarce.",
                "Reputational risk from poor employee experience in a competitive market.",
              ]}
            />
          </div>
        </PageSection>

        {/* 3. How we adapt */}
        <PageSection
          id="approach"
          badge="Our approach"
          title="How Neurodiversity Global works with financial services"
          variant="secondary"
          description="We understand the regulatory environment, the pace of work, and the commercial pressures. Our delivery adapts to your sector."
        >
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: GraduationCap,
                title: "Sector-adapted training",
                description: "Programmes built around financial services case studies, language, and scenarios your teams recognise.",
              },
              {
                icon: Headphones,
                title: "Coaching for high-performance roles",
                description: "Support for neurodivergent employees in demanding roles — and the managers responsible for their performance.",
              },
              {
                icon: Settings,
                title: "Systems and process review",
                description: "Audit recruitment, onboarding, performance management, and reasonable adjustments against best practice.",
              },
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
            <AccessibilityNote text="All materials are designed for cognitive accessibility. We adapt delivery format, pace, and content to your teams' needs." />
          </div>
        </PageSection>

        {/* 4. Outcomes */}
        <PageSection
          id="outcomes"
          badge="Outcomes"
          title="What financial services clients see"
          description="Sector-specific results that show up in retention, compliance, and team performance."
        >
          <OutcomeBlock
            title="Sector outcomes"
            outcomes={[
              { metric: "40%", label: "reduction in neurodivergent employee turnover in the first year." },
              { label: "Stronger compliance positioning with regulators on diversity and inclusion." },
              { label: "Reduced grievance and tribunal risk from more confident, better-informed managers." },
              { label: "Improved team dynamics and collaboration across high-pressure environments." },
            ]}
          />
        </PageSection>

        {/* 5. Evidence */}
        <PageSection
          id="evidence"
          badge="Experience"
          title="Our work in financial services"
          variant="secondary"
          description="We've delivered training, coaching, and strategy for some of the UK's largest financial services organisations."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="They understood our regulatory environment and commercial pressures from day one. The training felt relevant, not generic."
              author="Head of People"
              org="FTSE 250 Financial Services"
            />
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col justify-center">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">Delivery experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Financial services clients" },
                  { value: "5,000+", label: "People trained in sector" },
                  { value: "15+", label: "Years of sector experience" },
                  { value: "UK & global", label: "Delivery reach" },
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

        {/* 6. CTA */}
        <PageCTA
          title="Ready to make neurodiversity work in financial services?"
          description="Book a discovery call. We'll discuss your specific challenges and recommend a practical next step."
        />
      </main>
      <Footer />
    </>
  );
};

export default IndustryTemplate;
