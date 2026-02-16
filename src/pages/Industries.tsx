import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import { ArrowRight } from "lucide-react";

interface IndustryCard {
  name: string;
  description: string;
  href?: string;
  tags: string[];
}

const coreFocus: IndustryCard[] = [
  {
    name: "Healthcare & NHS",
    description: "NHS Trusts, Integrated Care Systems, clinical and non-clinical teams. High-pressure environments where disclosure, masking, and burnout intersect.",
    href: "/industries/healthcare-nhs",
    tags: ["Mental health", "Burnout", "Disclosure"],
  },
  {
    name: "Education",
    description: "Universities, academic staff, professional services, student-facing teams, and leadership governance contexts.",
    href: "/industries/education",
    tags: ["Higher education", "Student services", "Governance"],
  },
  {
    name: "Public Sector & Government",
    description: "Central government, arms-length bodies, regulators, and local authorities. Policy-heavy, risk-aware environments.",
    href: "/industries/public-sector",
    tags: ["Policy", "Civil service", "Local government"],
  },
  {
    name: "Technology & Digital",
    description: "Tech companies, digital teams, data and innovation functions. Fast-changing environments with high cognitive demand.",
    href: "/industries/technology",
    tags: ["ADHD", "Autism", "Performance"],
  },
];

const strongSecondary: IndustryCard[] = [
  {
    name: "Engineering & Infrastructure",
    description: "Engineering consultancies, transport, utilities, energy. Safety-critical roles and structured systems.",
    tags: ["Safety-critical", "Transport", "Energy"],
  },
  {
    name: "Financial & Professional Services",
    description: "Financial services, legal, consulting and advisory firms. High-regulation, high-pressure, risk-focused roles.",
    href: "/industries/financial-services",
    tags: ["Regulation", "Legal", "Advisory"],
  },
  {
    name: "Corporate & Enterprise",
    description: "Medium and large employers, cross-functional leadership, HR and People functions, enterprise transformation.",
    tags: ["Leadership", "HR", "Transformation"],
  },
];

const workplaceEnvironments: IndustryCard[] = [
  {
    name: "Sales & Commercial Functions",
    description: "Performance pressure, emotional regulation, communication and rejection sensitivity.",
    tags: ["Performance", "Emotional regulation"],
  },
  {
    name: "Call Centres & Contact Centres",
    description: "Sensory load, scripted communication, high-attrition environments.",
    tags: ["Sensory", "Attrition"],
  },
  {
    name: "Manufacturing & Factories",
    description: "Shift work, operational pressure, clear systems and communication needs.",
    tags: ["Shift work", "Operations"],
  },
  {
    name: "Retail & Hospitality",
    description: "Customer-facing roles, emotional labour, neurodivergent customers as well as staff.",
    tags: ["Customer-facing", "Emotional labour"],
  },
];

const specialistAreas: IndustryCard[] = [
  {
    name: "Emergency Services",
    description: "Fire and rescue, police, ambulance services.",
    tags: ["Fire", "Police", "Ambulance"],
  },
  {
    name: "Rail & Transport",
    description: "Train operators, infrastructure and maintenance, control rooms and frontline roles.",
    tags: ["Operators", "Control rooms"],
  },
  {
    name: "Defence & National Infrastructure",
    description: "Safety-critical and security-conscious environments, structured leadership and governance.",
    tags: ["Security", "Governance"],
  },
];

const IndustryCardComponent = ({ industry }: { industry: IndustryCard }) => {
  const content = (
    <article className="rounded-lg border border-border bg-card p-6 flex flex-col h-full hover:shadow-md transition-shadow group">
      <h3 className="font-display font-bold text-sm text-card-foreground mb-2 group-hover:text-accent transition-colors">
        {industry.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{industry.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {industry.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-display font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      {industry.href && (
        <p className="mt-4 text-xs font-display font-bold text-accent flex items-center gap-1">
          View sector detail <ArrowRight size={12} />
        </p>
      )}
    </article>
  );

  if (industry.href) {
    return <Link to={industry.href} className="block">{content}</Link>;
  }
  return content;
};

const IndustryTier = ({ title, description, industries, variant = "default" }: {
  title: string;
  description: string;
  industries: IndustryCard[];
  variant?: "default" | "secondary";
}) => (
  <PageSection badge="Industries" title={title} description={description} variant={variant}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {industries.map((ind) => (
        <IndustryCardComponent key={ind.name} industry={ind} />
      ))}
    </div>
  </PageSection>
);

const Industries = () => {
  return (
    <>
      <SEOHead
        title="Industry Solutions"
        description="Neurodiversity training and consultancy across healthcare, education, public sector, technology, and more. Sector-adapted programmes that change practice."
        path="/industries"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
      ])} />
      <JsonLd data={serviceSchema(
        "Industry-Specific Neurodiversity Solutions",
        "Sector-adapted neurodiversity training, coaching, and consultancy for healthcare, education, public sector, technology, and specialist industries.",
        "https://www.neurodiversityglobal.com/industries"
      )} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <main>
        <PageHero
          badge="Industry solutions"
          title="Neurodiversity expertise adapted to your sector"
          description="Every industry has its own pressures, language, and systems. We adapt our training, coaching, and consultancy to your context — not the other way around."
        />

        <IndustryTier
          title="Core focus industries"
          description="These align most closely with our lived experience, delivery history, and strongest credibility."
          industries={coreFocus}
        />

        <IndustryTier
          title="Strong secondary industries"
          description="Sectors where our approach translates extremely well and where demand is growing."
          industries={strongSecondary}
          variant="secondary"
        />

        <IndustryTier
          title="Sector-specific workplace environments"
          description="Consistent, repeat demand areas with distinct neurodiversity challenges."
          industries={workplaceEnvironments}
        />

        <IndustryTier
          title="Specialist & emerging areas"
          description="Where our work is already moving and where we are well positioned."
          industries={specialistAreas}
          variant="secondary"
        />

        <PageCTA
          title="Don't see your sector?"
          description="We work across industries. Book a discovery call and we'll discuss how our approach adapts to your context."
        />
      </main>
      <Footer />
    </>
  );
};

export default Industries;
