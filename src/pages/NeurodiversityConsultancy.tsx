import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import RiskCallout from "@/components/blocks/RiskCallout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, faqSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import { AlertTriangle, Lightbulb, ListOrdered, TrendingUp, ArrowRight } from "lucide-react";

const pageSections = [
  { id: "why-consultancy", label: "Why Consultancy", icon: AlertTriangle },
  { id: "what-we-do", label: "What We Do", icon: Lightbulb },
  { id: "how-it-works", label: "How It Works", icon: ListOrdered },
  { id: "outcomes", label: "Outcomes", icon: TrendingUp },
];

const consultancyFAQ = [
  {
    question: "What is neurodiversity consultancy?",
    answer: "Neurodiversity consultancy helps organisations design systems, policies, and cultures that work for neurodivergent employees. It goes beyond training to address the structural and systemic changes needed for genuine neuroinclusion.",
  },
  {
    question: "How is consultancy different from training?",
    answer: "Training builds individual capability. Consultancy changes how your organisation works at a system level — policies, processes, management structures, and culture. Most organisations need both.",
  },
  {
    question: "What does a neurodiversity consultant do?",
    answer: "We audit your current practices, identify where neurodivergent employees are being failed by systems, design practical solutions, and support implementation. This includes policy review, process redesign, leadership coaching, and impact measurement.",
  },
  {
    question: "How long does neurodiversity consultancy take?",
    answer: "Engagements typically range from a focused 4-week review to ongoing strategic partnerships spanning 6-12 months. The scope depends on your organisation's size, complexity, and objectives.",
  },
];

const NeurodiversityConsultancy = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity Consultancy"
        description="Expert neurodiversity consultancy for organisations. Systems change, policy review, leadership coaching and strategic neuroinclusion. UK and global delivery."
        path="/neurodiversity-consultancy"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Neurodiversity Consultancy", url: "https://www.neurodiversityglobal.com/neurodiversity-consultancy" },
      ])} />
      <JsonLd data={serviceSchema(
        "Neurodiversity Consultancy",
        "Expert neurodiversity consultancy helping organisations design inclusive systems, policies, and cultures for neurodivergent employees.",
        "https://www.neurodiversityglobal.com/neurodiversity-consultancy"
      )} />
      <JsonLd data={faqSchema(consultancyFAQ)} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Neurodiversity Consultancy" }]} />

      <main>
        <PageHero
          badge="Neurodiversity Consultancy"
          title="Neurodiversity consultancy that changes how organisations work"
          description="We help organisations move beyond awareness to genuine neuroinclusion. Through systems change, policy review, and leadership coaching, we create workplaces where neurodivergent people thrive."
        />

        {/* Why consultancy */}
        <PageSection
          id="why-consultancy"
          badge="Why consultancy"
          title="Training alone doesn't fix systems"
          description="Most organisations train individuals but leave the systems that exclude neurodivergent people untouched. Consultancy addresses the root causes."
        >
          <RiskCallout
            title="Signs your organisation needs neurodiversity consultancy"
            items={[
              "You've delivered training but nothing has changed in practice.",
              "Neurodivergent employees are leaving, raising grievances, or going off sick.",
              "Managers are unsure how to implement reasonable adjustments consistently.",
              "Your HR processes weren't designed with neurodivergent employees in mind.",
            ]}
          />
        </PageSection>

        {/* What we do */}
        <PageSection
          id="what-we-do"
          badge="What we do"
          title="Practical consultancy, not theoretical advice"
          variant="sand"
          description="We work inside your organisation to understand what's failing and design practical solutions."
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Neuroinclusion audit", description: "A structured review of your policies, processes, management practices, and culture to identify where neurodivergent employees are being excluded." },
              { title: "Policy and process redesign", description: "Practical changes to recruitment, onboarding, performance management, reasonable adjustments, and disciplinary processes." },
              { title: "Leadership coaching", description: "One-to-one and group coaching for senior leaders, helping them understand their role in creating neuroinclusive culture." },
              { title: "Strategic roadmap", description: "A clear, prioritised plan for systemic change with measurable milestones and accountability." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        {/* How it works */}
        <PageSection
          id="how-it-works"
          badge="How it works"
          title="A clear, structured approach"
        >
          <div className="space-y-0">
            {[
              { step: "1", title: "Discovery", description: "We understand your context, challenges, and objectives through stakeholder interviews and data review." },
              { step: "2", title: "Audit and analysis", description: "We assess your current systems against best practice and identify the gaps causing problems." },
              { step: "3", title: "Recommendations", description: "A clear, prioritised set of changes with practical implementation guidance." },
              { step: "4", title: "Implementation support", description: "We work alongside your teams to embed changes and build internal capability." },
              { step: "5", title: "Impact measurement", description: "We measure what's changed and provide evidence for continued investment." },
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

        {/* Outcomes */}
        <PageSection
          id="outcomes"
          badge="Outcomes"
          title="What consultancy delivers"
          variant="lavender"
        >
          <OutcomeBlock
            outcomes={[
              { label: "Reduced legal risk through compliant, well-documented adjustment processes." },
              { label: "Lower attrition among neurodivergent employees and their managers." },
              { label: "Clearer, more consistent management practice across teams." },
              { label: "Measurable improvement in employee experience and engagement scores." },
            ]}
          />
          <div className="mt-6">
            <TestimonialBlock
              quote="The audit gave us a clear picture of where we were failing. The recommendations were practical, not aspirational. We knew exactly what to do and in what order."
              author="Director of People & Culture"
              org="National Organisation"
            />
          </div>
        </PageSection>

        {/* Link to training */}
        <PageSection
          id="training"
          badge="Training"
          title="Combine consultancy with training"
          variant="sand"
          description="Consultancy changes your systems. Training changes your people. Most organisations need both."
        >
          <Link
            to="/neurodiversity-training"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Explore our training workshops <ArrowRight size={16} />
          </Link>
        </PageSection>

        {/* FAQ */}
        <PageSection
          id="faq"
          badge="FAQ"
          title="Frequently asked questions about neurodiversity consultancy"
        >
          <div className="space-y-4 max-w-3xl">
            {consultancyFAQ.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-border bg-card group">
                <summary className="px-6 py-5 cursor-pointer font-display font-semibold text-foreground text-sm leading-snug list-none hover:bg-muted/50 transition-colors rounded-xl">
                  {faq.question}
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </PageSection>

        <PageCTA
          title="Ready to transform your organisation?"
          description="Book a discovery call and we'll scope the right consultancy engagement for your context. No obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default NeurodiversityConsultancy;
