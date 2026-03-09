import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import TestimonialBlock from "@/components/blocks/TestimonialBlock";
import RelevantWorkshops from "@/components/blocks/RelevantWorkshops";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Target,
  GraduationCap,
  Settings,
  Wrench,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Shield,
  Briefcase,
  Users,
} from "lucide-react";

const pageSections = [
  { id: "problem", label: "The Problem", icon: AlertTriangle },
  { id: "difference", label: "What Makes Us Different", icon: Target },
  { id: "training", label: "Training", icon: GraduationCap },
  { id: "advisory", label: "Strategic Advisory", icon: Settings },
  { id: "tools", label: "Implementation Tools", icon: Wrench },
  { id: "performance", label: "Performance", icon: TrendingUp },
];

const WhatWeDo = () => {
  return (
    <>
      <SEOHead
        title="What We Do. Neurodiversity Training, Strategy and Systems Redesign"
        description="Neurodiversity Global helps organisations move from awareness to operational change. Training that changes behaviour, strategic advisory, and practical implementation tools."
        path="/what-we-do"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "What We Do", url: "https://www.neurodiversityglobal.com/what-we-do" },
        ])}
      />
      <JsonLd
        data={serviceSchema(
          "Neurodiversity Training, Strategy & Systems Redesign",
          "Helping organisations move from awareness to operational change through training, strategic advisory, and practical implementation tools.",
          "https://www.neurodiversityglobal.com/what-we-do"
        )}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What We Do" }]} />
      <main>
        <PageHero
          badge="What we do"
          title="The world has changed. Most workplaces have not."
          description="Every organisation talks about talent. Very few have built environments where that talent can actually succeed. Neurodiversity Global exists to redesign how organisations work so different minds can perform at their best."
        />

        {/* The Problem */}
        <PageSection
          id="problem"
          badge="The reality"
          title="The problem most organisations are avoiding"
          description="Up to 30 per cent of the workforce processes information differently. That includes people with ADHD, autism, dyslexia, dyspraxia, and other cognitive differences. They are already in every organisation. But most systems were never designed with them in mind."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Managers struggling to support their teams",
              "Miscommunication and unnecessary friction",
              "Employees masking or over-adapting to survive the day",
              "Skilled people leaving roles they should have succeeded in",
              "Awareness campaigns that rarely change how work actually happens",
              "Generic diversity training where neurodiversity appears as one small module",
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="block w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" aria-hidden="true" />
                  {item}
                </p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* What Makes Us Different */}
        <PageSection
          id="difference"
          badge="Our approach"
          title="We work at the level where real change happens. The system."
          variant="sand"
          description="The problem is not the individual. The problem is how organisations are designed. We help organisations redesign how work operates so different ways of thinking become an advantage."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Leadership behaviour", icon: Users },
              { title: "Communication structures", icon: Settings },
              { title: "Team dynamics", icon: Briefcase },
              { title: "Recruitment processes", icon: Target },
              { title: "Performance expectations", icon: TrendingUp },
              { title: "Workplace environments", icon: Wrench },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-card-foreground">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6">
            <p className="font-display font-bold text-base text-foreground">
              Inclusion is not a campaign. It is infrastructure.
            </p>
          </div>
        </PageSection>

        {/* Training */}
        <PageSection
          id="training"
          badge="Training that changes behaviour"
          title="Practical tools teams can use immediately"
          description="Our programmes are interactive, honest, and grounded in real workplace experience. We deliver four core workshops."
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Aware",
                icon: BookOpen,
                description: "Building shared understanding across the organisation.",
              },
              {
                title: "Champions",
                icon: Shield,
                description: "Developing internal advocates who drive change within teams.",
              },
              {
                title: "Managers",
                icon: Briefcase,
                description: "Practical leadership tools for managing different working styles.",
              },
              {
                title: "Leaders",
                icon: Users,
                description: "Strategic sessions connecting neuroinclusion to organisational performance.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-card-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-accent hover:underline"
            >
              Browse all 50+ workshops <ArrowRight size={16} />
            </Link>
          </div>
        </PageSection>

        {/* Strategic Advisory */}
        <PageSection
          id="advisory"
          badge="Strategic advisory"
          title="Training starts the conversation. Systems create change."
          variant="sand"
          description="We work directly with leadership teams to embed neuroinclusion into organisational structures."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Recruitment processes",
              "Leadership development",
              "Communication frameworks",
              "Workplace adjustments",
              "Psychological safety",
              "Performance management",
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm text-card-foreground font-display font-bold">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[55ch]">
              The aim is simple. Make inclusion part of how the organisation operates.
            </p>
          </div>
        </PageSection>

        {/* Implementation Tools */}
        <PageSection
          id="tools"
          badge="Practical tools"
          title="Understanding is not enough. Organisations need tools that work in real teams."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Strengths and challenges mapping",
              "Communication tools for managers",
              "Inclusive meeting frameworks",
              "Workplace adjustment guidance",
              "Organisational benchmarking",
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5 flex gap-3 items-center">
                <span className="block w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <p className="text-sm text-card-foreground">{item}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Performance */}
        <PageSection
          id="performance"
          badge="The business case"
          title="Neuroinclusion is a performance strategy"
          variant="sand"
          description="The organisations leading in neuroinclusion are not doing it for reputation. They are doing it for performance."
        >
          <OutcomeBlock
            outcomes={[
              { label: "Stronger innovation across teams" },
              { label: "Higher productivity in specialist roles" },
              { label: "Improved retention of talented people" },
              { label: "Faster problem solving" },
              { label: "Better collaboration across teams" },
            ]}
          />

          <div className="mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[55ch]">
              When communication improves and people can work in ways that match how they think, teams simply perform better.
            </p>
          </div>
        </PageSection>

        {/* Recommended workshops */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <RelevantWorkshops
              workshopIds={["core-awareness", "champions", "managers", "leaders"]}
              title="Our core training programmes"
              description="Interactive, facilitator-led sessions delivered online or in person."
            />
          </div>
        </section>

        <PageCTA
          title="Ready to move from awareness to action?"
          description="Book a discovery call and we will recommend the right programme for your context. No obligation."
          pageSource="what-we-do"
        />
      </main>
      <Footer />
    </>
  );
};

export default WhatWeDo;
