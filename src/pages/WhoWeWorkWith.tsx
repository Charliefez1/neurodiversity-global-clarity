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
import { Users, GraduationCap, Headphones, Settings } from "lucide-react";

const WhoWeWorkWithTemplate = () => {
  return (
    <>
      <SEOHead
        title="HR & People Leaders"
        description="Neurodiversity training, coaching, and strategy support for HR and People leaders navigating neurodiversity in work."
        path="/who-we-work-with"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Who We Work With", url: "https://www.neurodiversityglobal.com/who-we-work-with" },
      ])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Who We Work With" }]} />
      <main>
        {/* 1. Orientation */}
        <PageHero
          badge="Who we work with"
          title="HR and People leaders navigating neurodiversity in work"
          description="You're responsible for policy, culture, and compliance, but the guidance is unclear, the risks are rising, and awareness training hasn't changed enough."
        />

        {/* 2. Their reality */}
        <PageSection
          id="reality"
          badge="Your reality"
          title="The pressure you're under"
          description="Neurodiversity sits across employment law, wellbeing, EDI, and talent strategy. Most HR teams are expected to lead on it without specialist expertise."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-2">Common failure points</h3>
                <ul className="space-y-2">
                  {[
                    "Reasonable adjustment processes are slow, inconsistent, or invisible.",
                    "Managers lack confidence to have conversations about cognitive difference.",
                    "Policies exist on paper but aren't followed in practice.",
                    "Neurodivergent employees disengage before issues are identified.",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <RiskCallout
              title="Risks you carry"
              items={[
                "Employment tribunal claims involving neurodiversity are increasing year on year.",
                "Failure to make reasonable adjustments is a legal duty, not a discretionary benefit.",
                "Reputational risk from poor employee experience is difficult to recover from.",
                "Talent loss in a competitive market is costly and often preventable.",
              ]}
            />
          </div>
        </PageSection>

        {/* 3. How we support them */}
        <PageSection
          id="support"
          badge="How we help"
          title="What Neurodiversity Global provides for People teams"
          variant="sand"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: GraduationCap,
                title: "Manager and HR training",
                description: "Accredited programmes that build confidence and change practice, not just raise awareness.",
              },
              {
                icon: Headphones,
                title: "Coaching and in-work support",
                description: "One-to-one coaching for neurodivergent employees and the managers who support them.",
              },
              {
                icon: Settings,
                title: "Strategy and policy review",
                description: "Audit your current approach, redesign systems, and embed neurodiversity into how your organisation works.",
              },
            ].map((s) => (
              <article key={s.title} className="rounded-lg bg-card border border-border p-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-md bg-accent/10 flex items-center justify-center mt-0.5">
                    <s.icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-card-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <AccessibilityNote />
          </div>
        </PageSection>

        {/* 4. Outcomes */}
        <PageSection
          id="outcomes"
          badge="Outcomes"
          title="What changes for People teams"
          description="Practical outcomes that matter to your role, your organisation, and the people you support."
        >
          <OutcomeBlock
            outcomes={[
              { metric: "40%", label: "reduction in neurodivergent employee turnover within 12 months." },
              { metric: "3×", label: "faster reasonable adjustment response times after implementing our frameworks." },
              { metric: "92%", label: "of HR participants rate our training as directly applicable to their role." },
              { label: "Increased manager confidence in having neurodiversity conversations." },
            ]}
          />
        </PageSection>

        {/* 5. Evidence */}
        <PageSection
          id="evidence"
          badge="Evidence"
          title="Experience that's relevant to you"
          variant="lavender"
          description="We've worked with People teams across sectors, from FTSE 250 companies to NHS trusts and government departments."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock
              quote="Neurodiversity Global gave our HR team the confidence and the frameworks to actually change how we support neurodivergent employees, not just talk about it."
              author="Director of People"
              org="FTSE 250 Financial Services"
            />
            <TestimonialBlock
              quote="The training was practical, evidence-based, and directly relevant to the challenges our People team faces every day."
              author="Head of EDI"
              org="NHS Trust"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Organisations supported" },
              { value: "15+", label: "Years of experience" },
              { value: "50,000+", label: "People trained" },
              { value: "30", label: "Countries reached" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-extrabold text-2xl text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* 6. CTA */}
        <PageCTA
          title="Let's talk about your People strategy"
          description="A 30-minute call to understand your context, identify priorities, and outline what support would look like. No obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default WhoWeWorkWithTemplate;
