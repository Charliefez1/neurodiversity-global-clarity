import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SourceCard from "@/components/SourceCard";

import { Database, BookOpen, Scale, Microscope, Building2 } from "lucide-react";

const sources = [
  {
    category: "Research",
    items: [
      { title: "CIPD: Neurodiversity at Work", domain: "cipd.org", url: "https://www.cipd.org/uk/knowledge/reports/neurodiversity-work/", description: "Guide to creating neuroinclusive workplaces, covering recruitment, management, and reasonable adjustments." },
      { title: "Birkbeck: Centre for Neurodiversity Research", domain: "bbk.ac.uk", url: "https://www.bbk.ac.uk/research/centres/neurodiversity", description: "Academic research centre focused on neurodiversity across the lifespan." },
      { title: "ACAS: Neurodiversity in the Workplace", domain: "acas.org.uk", url: "https://www.acas.org.uk/neurodiversity", description: "Practical guidance for employers on supporting neurodivergent staff." },
      { title: "Harvard Business Review: Neurodiversity as a Competitive Advantage", domain: "hbr.org", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage", description: "Landmark article on how organisations benefit from neurodivergent talent." },
    ],
  },
  {
    category: "Legislation and Policy",
    items: [
      { title: "Equality Act 2010", domain: "legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents", description: "The primary legislation protecting disabled people, including neurodivergent individuals, from discrimination." },
      { title: "EHRC: Reasonable Adjustments for Disabled Workers", domain: "equalityhumanrights.com", url: "https://www.equalityhumanrights.com/guidance/reasonable-adjustments-practice", description: "Guidance on the duty to make reasonable adjustments under the Equality Act." },
      { title: "NHS England: Neurodiversity", domain: "england.nhs.uk", url: "https://www.england.nhs.uk/", description: "NHS guidance and resources on neurodevelopmental conditions." },
    ],
  },
  {
    category: "Organisations",
    items: [
      { title: "ADHD Foundation", domain: "adhdfoundation.org.uk", url: "https://www.adhdfoundation.org.uk/", description: "The UK's leading ADHD charity, providing training, resources, and advocacy." },
      { title: "British Dyslexia Association", domain: "bdadyslexia.org.uk", url: "https://www.bdadyslexia.org.uk/", description: "National charity offering guidance, accreditation, and employer support." },
      { title: "Autism Alliance UK", domain: "autism-alliance.org.uk", url: "https://www.autism-alliance.org.uk/", description: "Network of specialist autism charities across the UK." },
      { title: "Dyspraxia Foundation", domain: "dyspraxiafoundation.org.uk", url: "https://dyspraxiafoundation.org.uk/", description: "Charity raising awareness of dyspraxia/DCD and supporting affected individuals." },
    ],
  },
  {
    category: "Business Case",
    items: [
      { title: "Deloitte: The Value of Diversity", domain: "deloitte.com", url: "https://www2.deloitte.com/", description: "Research on how diversity of thought drives innovation and business performance." },
      { title: "McKinsey: Diversity Wins", domain: "mckinsey.com", url: "https://www.mckinsey.com/featured-insights/diversity-and-inclusion", description: "Evidence that diverse teams outperform their peers across key business metrics." },
    ],
  },
];

const categoryIcons: Record<string, typeof Database> = {
  Research: Microscope,
  "Legislation and Policy": Scale,
  Organisations: Building2,
  "Business Case": BookOpen,
};

const Sources = () => {
  return (
    <main>
      <SEOHead
        title="Data and Sources | Neurodiversity Global"
        description="Curated sources, research, and references on neurodiversity in the workplace. Evidence-based resources for HR professionals and leaders."
        path="/sources"
      />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <Database size={20} className="text-accent" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-primary-foreground/50">
              Evidence Base
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
            Data and Sources
          </h1>
          <p className="text-base text-primary-foreground/70 max-w-content">
            Curated research, legislation, and key organisations shaping neuroinclusion policy and practice in the UK.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-wide px-6 lg:px-10 space-y-12">
          {sources.map((group) => {
            const Icon = categoryIcons[group.category] || Database;
            return (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={16} className="text-accent" />
                  <h2 className="font-display font-bold text-lg text-foreground">
                    {group.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((s) => (
                    <SourceCard
                      key={s.url}
                      title={s.title}
                      domain={s.domain}
                      url={s.url}
                      description={s.description}
                      category={group.category}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
      <Footer />
    </main>
  );
};

export default Sources;
