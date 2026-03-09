import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import {
  Heart,
  Eye,
  Globe,
  ArrowRight,
  Building2,
  Stethoscope,
  GraduationCap,
  Landmark,
  Truck,
  DollarSign,
} from "lucide-react";

const pageSections = [
  { id: "story", label: "Our Story", icon: Heart },
  { id: "perspective", label: "Our Perspective", icon: Eye },
  { id: "reach", label: "Global Reach", icon: Globe },
];

const sectors = [
  { label: "Technology and engineering", icon: Building2 },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Education", icon: GraduationCap },
  { label: "Finance", icon: DollarSign },
  { label: "Logistics and transport", icon: Truck },
  { label: "Public sector organisations", icon: Landmark },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Neurodiversity Global. Our Story and Mission"
        description="Neurodiversity Global is a UK company founded by Rich and Charlie Ferriman. A neurodivergent-led consultancy built on lived experience and decades of leadership."
        path="/about"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "About", url: "https://www.neurodiversityglobal.com/about" },
        ])}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <main>
        <PageHero
          badge="About us"
          title="Built by people who live it"
          description="Neurodiversity Global is a UK company founded by Rich Ferriman and Charlie Ferriman, a father and son team working to change how organisations understand and support different ways of thinking."
        >
          <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            What began as a small, family-run initiative in the United Kingdom now supports organisations across multiple countries, helping leaders redesign workplaces so people with different cognitive styles can succeed.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            The company is proudly neurodivergent-led. Our work is shaped not only by professional experience, but by lived experience. We know the challenges because we have lived them.
          </p>
        </PageHero>

        {/* Our Story */}
        <PageSection
          id="story"
          badge="Our story"
          title="Most workplaces were designed long before people understood how differently human brains process information"
        >
          <div className="space-y-5 max-w-[55ch]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many organisations still expect everyone to focus, communicate, and manage pressure in exactly the same way. When people struggle in those environments, the system rarely questions itself.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instead, individuals are asked to adapt.
            </p>
            <p className="text-sm text-foreground font-display font-bold leading-relaxed">
              We believe that approach is backwards.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our work focuses on redesigning environments so that different ways of thinking become an advantage rather than a barrier.
            </p>
          </div>
        </PageSection>

        {/* Why We Do This */}
        <PageSection
          id="perspective"
          badge="Why we do this work"
          title="Neurodiversity Global was not built as a traditional consultancy"
          variant="sand"
        >
          <div className="space-y-5 max-w-[55ch]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              It was built because the founders saw the same pattern repeated again and again.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Talented people struggling in environments that were never designed with them in mind. Managers wanting to help but lacking the tools. Organisations losing capable individuals without understanding why.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We believe organisations can do better. When environments change, performance changes with them. And when people are able to work in ways that match how their minds operate, the results are extraordinary.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6 max-w-[55ch]">
            <p className="text-sm text-foreground leading-relaxed">
              <strong className="font-display font-bold">Neurodiversity is not a niche issue.</strong> It is part of how every organisation already works. Different ways of thinking exist in every team, every industry, and every country.
            </p>
            <p className="text-sm text-foreground mt-3 leading-relaxed">
              The question is not whether neurodiversity exists in your organisation. The question is whether your systems allow people with different minds to succeed.
            </p>
          </div>
        </PageSection>

        {/* A Family Run Organisation */}
        <PageSection
          id="family"
          badge="Family run"
          title="Neurodiversity Global remains proudly family run"
        >
          <div className="space-y-5 max-w-[55ch]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              That matters to us. It keeps our work grounded in real experience rather than corporate theory. It also allows us to remain independent, practical, and focused on long-term impact rather than trends.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We work closely with a network of associates and specialists around the world, but our core leadership remains deliberately small and focused. That structure allows us to stay close to the organisations we support and the people we work with.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/about/team"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-accent hover:underline"
            >
              Meet Rich and Charlie <ArrowRight size={16} />
            </Link>
          </div>
        </PageSection>

        {/* Global Reach */}
        <PageSection
          id="reach"
          badge="Working across the world"
          title="Our work now reaches organisations across multiple countries and sectors"
          variant="sand"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector) => (
              <div key={sector.label} className="rounded-lg border border-border bg-card p-5 flex gap-3 items-center">
                <sector.icon size={18} className="text-accent shrink-0" />
                <p className="text-sm text-card-foreground font-display font-bold">{sector.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-[55ch]">
            From frontline teams to executive leadership groups, our goal is the same. Help organisations build environments where different ways of thinking are understood, respected, and supported.
          </p>
        </PageSection>

        {/* Manifesto */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10 max-w-2xl text-center">
            <p className="font-display font-bold text-xl md:text-2xl leading-tight mb-6">
              We do not run awareness campaigns. We redesign systems.
            </p>
            <p className="text-base opacity-80 leading-relaxed">
              Because the goal is not simply inclusion. The goal is better organisations.
            </p>
          </div>
        </section>

        <PageCTA
          title="Start a conversation"
          description="Whether it is a question, a project, or a conversation about where to start, we would like to hear from you."
          pageSource="about"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
