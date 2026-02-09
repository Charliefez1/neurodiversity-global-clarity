import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import RiskCallout from "@/components/blocks/RiskCallout";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PricingSummary from "@/components/blocks/PricingSummary";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import AccessibilityNote from "@/components/blocks/AccessibilityNote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

const WhatWeDoTemplate = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity Training"
        description="Accredited neurodiversity training for managers, HR teams and leaders. Designed to change practice and deliver measurable outcomes."
        path="/what-we-do"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "What We Do", url: "https://www.neurodiversityglobal.com/what-we-do" },
      ])} />
      <JsonLd data={serviceSchema(
        "Neurodiversity Training",
        "Accredited neurodiversity training programmes for managers, HR professionals and leaders.",
        "https://www.neurodiversityglobal.com/what-we-do"
      )} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What We Do" }]} />
      <main>
        {/* 1. Overview */}
        <PageHero
          badge="What we do"
          title="Neurodiversity training that changes practice, not just awareness"
          description="Accredited, evidence-based programmes for managers, HR professionals, and leaders — designed to create lasting change in how organisations include neurodivergent people."
        />

        {/* 2. Why this matters */}
        <PageSection
          id="why"
          badge="Why this matters"
          title="The risk of doing nothing — or doing it badly"
          description="Most organisations have completed some form of neurodiversity awareness training. Very few have changed how they actually work."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">What this is</h3>
              <ul className="space-y-2">
                {[
                  "Practical, skills-based training that changes workplace behaviour.",
                  "Programmes grounded in evidence, not assumptions.",
                  "Content designed by neurodivergent professionals with operational experience.",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display font-bold text-sm text-card-foreground mb-3">What this is not</h3>
              <ul className="space-y-2">
                {[
                  "A one-off awareness session with no follow-up.",
                  "Generic diversity training relabelled for neurodiversity.",
                  "A tick-box exercise that satisfies compliance without creating change.",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <RiskCallout
              title="The cost of getting this wrong"
              items={[
                "Tribunal claims are increasing — awareness alone is not a defence.",
                "Employees lose trust in organisations that train but don't change.",
                "Money spent on ineffective training is budget wasted.",
              ]}
            />
          </div>
        </PageSection>

        {/* 3. What is included */}
        <PageSection
          id="included"
          badge="What's included"
          title="Programme components"
          variant="secondary"
          description="Every programme is tailored to your context, but typically includes the following."
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Core training sessions",
                description: "Interactive, facilitator-led sessions delivered online or in person. Focused on practical application, not theory.",
              },
              {
                title: "Manager toolkits",
                description: "Frameworks, conversation guides, and adjustment templates managers can use immediately.",
              },
              {
                title: "Follow-up coaching",
                description: "Optional one-to-one or group coaching to embed learning and support implementation.",
              },
              {
                title: "Impact measurement",
                description: "Pre- and post-programme evaluation to measure changes in confidence, behaviour, and outcomes.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <AccessibilityNote />
          </div>
        </PageSection>

        {/* 4. How it works */}
        <PageSection
          id="process"
          badge="How it works"
          title="A straightforward process"
        >
          <div className="space-y-0">
            {[
              { step: "1", title: "Discovery call", description: "We understand your context, objectives, and constraints." },
              { step: "2", title: "Scoping and proposal", description: "We recommend a programme structure and provide a clear proposal with pricing." },
              { step: "3", title: "Delivery", description: "Training is delivered at a pace that works for your teams, with full facilitator support." },
              { step: "4", title: "Follow-up and evaluation", description: "We measure impact and provide a summary of outcomes and recommendations." },
            ].map((s, i) => (
              <div key={s.step} className={`flex gap-5 py-6 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-accent">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PageSection>

        {/* 5. Outcomes */}
        <PageSection
          id="outcomes"
          badge="Outcomes"
          title="What changes after training"
          variant="secondary"
        >
          <OutcomeBlock
            outcomes={[
              { metric: "92%", label: "of participants rate our training as directly applicable to their daily role." },
              { metric: "60%", label: "decrease in neurodiversity-related grievances among trained teams." },
              { label: "Managers report significantly higher confidence in supporting neurodivergent team members." },
              { label: "Organisations see faster, more consistent reasonable adjustment processes." },
            ]}
          />
        </PageSection>

        {/* 6. Pricing */}
        <PageSection
          id="pricing"
          badge="Investment"
          title="Clear, transparent pricing"
          description="We provide full pricing in our proposals. No hidden costs, no upsell pressure."
        >
          <PricingSummary
            description="Programmes are priced based on scope, scale, and delivery format. We'll provide a detailed breakdown in your proposal."
            factors={[
              "Number of participants and cohorts",
              "Delivery format (online, in-person, or hybrid)",
              "Level of customisation required",
              "Whether follow-up coaching is included",
            ]}
            note="All pricing is provided upfront before any commitment."
          />

          <div className="mt-6">
            <TestimonialBlock
              quote="The proposal was clear, the pricing was fair, and there were no surprises. That matters when you're presenting to a board."
              author="Head of Learning & Development"
              org="Public Sector Organisation"
            />
          </div>
        </PageSection>

        {/* 7. CTA */}
        <PageCTA
          title="Interested in training for your organisation?"
          description="Book a discovery call and we'll recommend the right programme for your context — no obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default WhatWeDoTemplate;
