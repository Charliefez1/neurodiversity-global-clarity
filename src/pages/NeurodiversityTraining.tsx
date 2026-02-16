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
import { AlertTriangle, BookOpen, Users, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";

const pageSections = [
  { id: "why-training", label: "Why Training Matters", icon: AlertTriangle },
  { id: "what-we-cover", label: "What We Cover", icon: BookOpen },
  { id: "who-its-for", label: "Who It's For", icon: Users },
  { id: "outcomes", label: "Outcomes", icon: TrendingUp },
  { id: "workshops", label: "Our Workshops", icon: GraduationCap },
];

const trainingFAQ = [
  {
    question: "What is neurodiversity training?",
    answer: "Neurodiversity training equips managers, HR professionals, and leaders with practical skills to support neurodivergent employees. It covers conditions like ADHD, autism, dyslexia, and dyspraxia in the workplace, focusing on reasonable adjustments, communication, and inclusive management practices.",
  },
  {
    question: "Who should attend neurodiversity training?",
    answer: "Line managers, HR teams, senior leaders, employee resource group members, and anyone responsible for managing, supporting, or working alongside neurodivergent colleagues. We offer tailored sessions for each audience.",
  },
  {
    question: "How is your neurodiversity training different from awareness training?",
    answer: "Awareness training tells people neurodiversity exists. Our training changes what people actually do. We focus on practical skills, management behaviour, and systemic change — not just knowledge transfer.",
  },
  {
    question: "Is neurodiversity training a legal requirement in the UK?",
    answer: "While not explicitly mandated, the Equality Act 2010 requires employers to make reasonable adjustments for disabled employees, which includes many neurodivergent conditions. Training managers to understand and implement adjustments is a key part of meeting this duty.",
  },
  {
    question: "How long does neurodiversity training take?",
    answer: "Our workshops range from 60-minute awareness sessions to full-day strategic programmes. Most organisations start with a 3-hour session for managers and build from there based on need.",
  },
];

const NeurodiversityTraining = () => {
  return (
    <>
      <SEOHead
        title="Neurodiversity Training"
        description="Accredited neurodiversity training for managers, HR teams and leaders. 50+ workshops covering ADHD, autism, dyslexia in the workplace. UK and global delivery."
        path="/neurodiversity-training"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Neurodiversity Training", url: "https://www.neurodiversityglobal.com/neurodiversity-training" },
      ])} />
      <JsonLd data={serviceSchema(
        "Neurodiversity Training",
        "Accredited neurodiversity training workshops for managers, HR teams, and leaders. Covering ADHD, autism, dyslexia and more in the workplace.",
        "https://www.neurodiversityglobal.com/neurodiversity-training"
      )} />
      <JsonLd data={faqSchema(trainingFAQ)} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Neurodiversity Training" }]} />

      <main>
        <PageHero
          badge="Neurodiversity Training"
          title="Neurodiversity training that changes how organisations work"
          description="Accredited, evidence-based neurodiversity training for managers, HR professionals, and leaders. Designed by neurodivergent professionals, delivered globally. 50+ workshops covering ADHD, autism, dyslexia, and more."
        />

        {/* Why training matters */}
        <PageSection
          id="why-training"
          badge="Why this matters"
          title="Why neurodiversity training is essential for every organisation"
          description="1 in 5 people are neurodivergent. Most workplaces weren't designed for how they think, work, or communicate. Training bridges that gap."
        >
          <RiskCallout
            title="The cost of not training"
            items={[
              "Employment tribunal claims involving neurodivergent employees are rising year on year.",
              "Untrained managers are the number one reason neurodivergent employees leave.",
              "Generic awareness sessions create a false sense of competence without changing behaviour.",
            ]}
          />
        </PageSection>

        {/* What we cover */}
        <PageSection
          id="what-we-cover"
          badge="What we cover"
          title="Practical neurodiversity training, not just theory"
          variant="sand"
          description="Our training covers the conditions, the workplace context, and the management skills needed to create genuinely inclusive teams."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "ADHD in the workplace", description: "Attention regulation, motivation, time perception, emotional regulation, and practical management strategies." },
              { title: "Autism in the workplace", description: "Communication differences, predictability needs, sensory considerations, and inclusive team design." },
              { title: "Dyslexia at work", description: "Processing speed, memory, written communication adjustments, and strengths-based approaches." },
              { title: "Reasonable adjustments", description: "Legal framework, practical implementation, cost-effective solutions, and documentation." },
              { title: "Inclusive management", description: "Communication styles, workload design, performance reviews, and early intervention." },
              { title: "Organisational strategy", description: "Systems change, policy review, culture shaping, and measuring neuroinclusion." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        {/* Who it's for */}
        <PageSection
          id="who-its-for"
          badge="Who it's for"
          title="Neurodiversity training for every level of your organisation"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Line managers", description: "Day-to-day management, reasonable adjustments, performance conversations, and early intervention." },
              { title: "HR and People teams", description: "Legal compliance, complex cases, policy frameworks, and adjustments processes." },
              { title: "Senior leaders", description: "Strategic risk, culture shaping, governance, and investment decisions." },
              { title: "All employees", description: "Awareness sessions that build understanding and reduce stigma across the organisation." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6">
                <h3 className="font-display font-bold text-sm text-card-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        {/* Outcomes */}
        <PageSection
          id="outcomes"
          badge="Outcomes"
          title="Measurable results from neurodiversity training"
          variant="lavender"
        >
          <OutcomeBlock
            outcomes={[
              { metric: "92%", label: "of participants rate our training as directly applicable to their daily role." },
              { metric: "60%", label: "decrease in neurodiversity-related grievances among trained teams." },
              { label: "Managers report significantly higher confidence in supporting neurodivergent team members." },
              { label: "Organisations see faster, more consistent reasonable adjustment processes." },
            ]}
          />
          <div className="mt-6">
            <TestimonialBlock
              quote="This wasn't awareness training. It was the most practical, relevant session we've ever run. Managers left knowing exactly what to do differently."
              author="Head of Learning & Development"
              org="FTSE 250 Organisation"
            />
          </div>
        </PageSection>

        {/* Browse workshops */}
        <PageSection
          id="workshops"
          badge="Our workshops"
          title="50+ neurodiversity training workshops"
          variant="sand"
          description="From 60-minute awareness sessions to full-day strategic programmes, tailored to your setting and industry."
        >
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Browse all workshops <ArrowRight size={16} />
          </Link>
        </PageSection>

        {/* FAQ */}
        <PageSection
          id="faq"
          badge="FAQ"
          title="Frequently asked questions about neurodiversity training"
        >
          <div className="space-y-4 max-w-3xl">
            {trainingFAQ.map((faq) => (
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
          title="Ready to train your organisation?"
          description="Book a discovery call and we'll recommend the right programme for your context. No obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default NeurodiversityTraining;
