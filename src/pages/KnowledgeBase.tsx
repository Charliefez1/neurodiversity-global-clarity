import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

type ContentStatus = "extracted" | "needs-content" | "ready";

interface KnowledgeItem {
  title: string;
  oldUrl: string;
  status: ContentStatus;
  pageTitle?: string;
  extractedContent?: string;
  notes?: string;
  newLocation?: string;
}

interface KnowledgeCategory {
  category: string;
  description: string;
  items: KnowledgeItem[];
}

const knowledgeData: KnowledgeCategory[] = [
  {
    category: "Workshops",
    description: "Four workshop tiers targeting different audiences within organisations. These map to the 'What We Do' section of the new site.",
    items: [
      {
        title: "Aware Workshops",
        oldUrl: "https://neurodiversityglobal.com/aware-workshops/",
        status: "needs-content",
        pageTitle: "Aware Neurodiversity Training and Workshops",
        extractedContent: "Foundation-level workshop. Appears to be the entry point for organisations new to neurodiversity. Likely covers: what neurodiversity is, why it matters, and basic awareness for all staff.",
        notes: "This content should map to a detailed service page under /what-we-do/training or be part of the training breakdown. Full body copy could not be extracted — site blocks scraping.",
        newLocation: "/what-we-do",
      },
      {
        title: "Champions Workshops",
        oldUrl: "https://neurodiversityglobal.com/champion-workshops/",
        status: "needs-content",
        pageTitle: "Turning Knowledge into Action: Leading the Way in Neuroinclusion.",
        extractedContent: "Mid-level workshop. Targets employees who want to become neurodiversity champions and advocates within their organisations. Focuses on turning knowledge into action and leading inclusive change.",
        notes: "Strong tagline extracted: 'Turning Knowledge into Action: Leading the Way in Neuroinclusion.' This should be preserved. Full page content needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "Managers Workshops",
        oldUrl: "https://neurodiversityglobal.com/managers-workshops/",
        status: "extracted",
        pageTitle: "Great Managers Don't Just Lead—They Understand. They Listen. They Act.",
        extractedContent: "Workshop for people with management responsibility. Key content extracted: 'Partnering with Neurodiversity Global offers truly disproportionate value to your organisation—driving lasting change in culture, performance, and profitability, far exceeding the return of higher-cost services and tools. Instead of transformation through system development and dependency, we create real, measurable impact by equipping people at all levels—regardless of role or seniority—with the understanding, skills, and confidence to drive neuroinclusion from within.'",
        notes: "Best extracted content. The value proposition here is strong and should be carried forward. Maps to both /what-we-do and /who-we-work-with (managers audience).",
        newLocation: "/what-we-do",
      },
      {
        title: "Leaders Workshops",
        oldUrl: "https://neurodiversityglobal.com/leaders-workshops/",
        status: "needs-content",
        pageTitle: "Empower Leadership: Join Neurodiversity Global Workshops",
        extractedContent: "Senior leadership workshop. Targets executives and board-level leaders. Likely covers strategic value of neurodiversity, organisational risk, and leadership responsibility.",
        notes: "Full body copy not available. This maps to /who-we-work-with (senior leaders audience) and /what-we-do (training service).",
        newLocation: "/what-we-do",
      },
      {
        title: "All Workshops Overview",
        oldUrl: "https://neurodiversityglobal.com/all-workshops/",
        status: "needs-content",
        pageTitle: "Neurodiversity Training Workshops | Inclusive & Engaging Learning",
        extractedContent: "Landing page that aggregates all four workshop tiers. Acts as an overview and comparison page.",
        notes: "In the new site, this becomes the /what-we-do page or a subsection of it.",
        newLocation: "/what-we-do",
      },
    ],
  },
  {
    category: "Services",
    description: "Specialist services beyond workshops. These map to both 'What We Do' and industry-specific pages.",
    items: [
      {
        title: "Consultancy and Advisory Services",
        oldUrl: "https://neurodiversityglobal.com/all-services/",
        status: "needs-content",
        pageTitle: "Neurodiversity Training & Consultancy Services | All Offerings",
        extractedContent: "Umbrella services page covering all consultancy offerings. Likely includes strategic advisory, organisational change support, and bespoke consultancy packages.",
        notes: "Maps to /what-we-do (strategy and organisational change section). Full content needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "Crisis Management Services",
        oldUrl: "https://neurodiversityglobal.com/crisis-management/",
        status: "needs-content",
        extractedContent: "Specialist service for organisations facing neurodiversity-related crises — likely tribunal preparation, urgent culture issues, or reputational situations.",
        notes: "This is a differentiator. Could be a standalone service page or a prominent section within /what-we-do. Full content needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "HR & Training Team Workshops",
        oldUrl: "https://neurodiversityglobal.com/hr-and-training-teams/",
        status: "needs-content",
        pageTitle: "Neurodiversity HR & Training Team Workshops",
        extractedContent: "Workshops specifically designed for HR and L&D teams. Likely focuses on building internal capability to deliver and sustain neurodiversity practice.",
        notes: "Maps to /who-we-work-with (HR audience). Full content needed.",
        newLocation: "/who-we-work-with",
      },
      {
        title: "Neurodivergent Coaching — Group & 1:1",
        oldUrl: "https://neurodiversityglobal.com/coaching-mentoring-121/",
        status: "needs-content",
        pageTitle: "Neurodivergent Coaching, Mentoring and Advisory Services",
        extractedContent: "Coaching services for neurodivergent individuals — both group and one-to-one formats. Includes mentoring and advisory support.",
        notes: "Core service. Maps to /what-we-do (coaching section). Full body copy needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "Research, Policy & Audits",
        oldUrl: "https://neurodiversityglobal.com/research-policy-audits/",
        status: "needs-content",
        pageTitle: "Neurodiversity Research, Policy & Audits",
        extractedContent: "Service covering neurodiversity research, policy development, and organisational audits. Likely includes policy review, gap analysis, and evidence-based recommendations.",
        notes: "Maps to /what-we-do (strategy section). Audits are a strong procurement hook. Full content needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "Keynotes, Panels & Speaking Engagements",
        oldUrl: "https://neurodiversityglobal.com/speaking-events/",
        status: "needs-content",
        pageTitle: "Neurodiversity Keynotes, Panels & Speaking Engagements",
        extractedContent: "Speaking services for conferences, events, and internal leadership sessions. Likely covers keynote topics, panel participation, and bespoke speaking engagements.",
        notes: "Consider whether this deserves a standalone page or sits within /what-we-do. Full content needed.",
        newLocation: "/what-we-do",
      },
      {
        title: "Centre of Excellence",
        oldUrl: "https://neurodiversityglobal.com/centre-of-excellence/",
        status: "needs-content",
        extractedContent: "Appears to be a premium or embedded service — likely an ongoing partnership model where Neurodiversity Global acts as an external centre of excellence for client organisations.",
        notes: "This is potentially a key differentiator and revenue model. Needs full content extraction. Could map to a premium tier within /what-we-do.",
        newLocation: "/what-we-do",
      },
    ],
  },
  {
    category: "Resources & Content",
    description: "Supporting content including blog, FAQ, and educational resources.",
    items: [
      {
        title: "Blog",
        oldUrl: "https://neurodiversityglobal.com/theblog/",
        status: "needs-content",
        pageTitle: "Neurodiversity Insights: Strategies for Inclusion",
        extractedContent: "Blog section with articles on neurodiversity topics. Individual post titles and content not extracted.",
        notes: "Blog posts should be catalogued separately. Consider whether the new site needs a blog or whether content is better served through thought leadership pages. Full post list needed.",
      },
      {
        title: "Key Questions",
        oldUrl: "https://neurodiversityglobal.com/key-questions/",
        status: "needs-content",
        pageTitle: "Key Questions",
        extractedContent: "Q&A or FAQ-style resource page. Likely covers common questions about neurodiversity in work.",
        notes: "This content is valuable for SEO (FAQ schema). Should be migrated or repurposed across relevant pages. Full content needed.",
      },
      {
        title: "FAQ / ACAS",
        oldUrl: "https://neurodiversityglobal.com/acas/",
        status: "needs-content",
        pageTitle: "Frequently Asked Questions",
        extractedContent: "Additional FAQ page, possibly with ACAS-related guidance on neurodiversity and employment law.",
        notes: "ACAS guidance content is high-value for HR audiences. Consider embedding in /who-we-work-with pages. Full content needed.",
      },
      {
        title: "Resources Hub",
        oldUrl: "https://neurodiversityglobal.com/resources/",
        status: "needs-content",
        pageTitle: "Neurodiversity Insights for Empowering Workplace Inclusion",
        extractedContent: "Resources landing page aggregating blog, guides, and educational content.",
        notes: "In the new site, consider whether this becomes a standalone section or is distributed across service and audience pages.",
      },
      {
        title: "HR Guide 2025",
        oldUrl: "https://neurodiversityglobal.com/hr-guide-2025/",
        status: "needs-content",
        pageTitle: "The Neurodiversity Global HR Guide 2025",
        extractedContent: "Annual HR guide — likely a downloadable or web-based guide for HR professionals on neurodiversity practice.",
        notes: "Lead generation asset. Should be prominently featured. Full content needed.",
      },
    ],
  },
  {
    category: "About & Team",
    description: "Organisational identity, team profiles, and values.",
    items: [
      {
        title: "Team",
        oldUrl: "https://neurodiversityglobal.com/team/",
        status: "extracted",
        pageTitle: "Meet Our Neurodiversity Team: Experts in Inclusion Training",
        extractedContent: "Mission statement extracted: 'At Neurodiversity Global, we believe that understanding and inclusion begin with learning. Our Workshops, Training, Courses and Consultancy are designed not just to educate but to inspire a new generation of Allies, Champions, Managers and Leaders who Stand Up, Speak Out, be Role Models and Advocates of Neurodiversity in every space—workplaces, schools, and communities. By investing in knowledge today, you are shaping the leaders of tomorrow.'",
        notes: "Team member names and bios not extracted. This content should feed into an About page and inform the tone of voice across the site.",
      },
      {
        title: "Contact",
        oldUrl: "https://neurodiversityglobal.com/contact/",
        status: "needs-content",
        pageTitle: "Contact Us | Get in Touch with Neurodiversity Global",
        extractedContent: "Contact page with form. Contact details not extracted.",
        notes: "Contact information (email, phone, address) needed. Currently the new site uses anchor links to a CTA section.",
      },
    ],
  },
];

const statusConfig = {
  extracted: { label: "Partial content extracted", icon: CheckCircle2, className: "text-accent" },
  "needs-content": { label: "Needs manual content", icon: AlertCircle, className: "text-amber-500" },
  ready: { label: "Ready for use", icon: CheckCircle2, className: "text-green-600" },
};

const CollapsibleItem = ({ item }: { item: KnowledgeItem }) => {
  const [open, setOpen] = useState(false);
  const StatusIcon = statusConfig[item.status].icon;

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/50 transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
        aria-expanded={open}
      >
        {open ? <ChevronDown size={16} className="text-muted-foreground shrink-0" /> : <ChevronRight size={16} className="text-muted-foreground shrink-0" />}
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm text-card-foreground">{item.title}</p>
          {item.pageTitle && (
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.pageTitle}</p>
          )}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <StatusIcon size={14} className={statusConfig[item.status].className} />
          <span className={`text-xs font-display font-semibold ${statusConfig[item.status].className}`}>
            {statusConfig[item.status].label}
          </span>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-0 border-t border-border mt-0">
          <div className="pt-4 space-y-4">
            <a
              href={item.oldUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
            >
              <ExternalLink size={12} />
              View on old site
            </a>

            {item.extractedContent && (
              <div>
                <p className="font-display font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1.5">
                  Extracted content
                </p>
                <p className="text-sm text-card-foreground leading-relaxed bg-muted/50 rounded p-3">
                  {item.extractedContent}
                </p>
              </div>
            )}

            {item.notes && (
              <div>
                <p className="font-display font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1.5">
                  Migration notes
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.notes}
                </p>
              </div>
            )}

            {item.newLocation && (
              <div>
                <p className="font-display font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1.5">
                  Maps to
                </p>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent/10 text-accent text-xs font-display font-semibold">
                  <FileText size={12} />
                  {item.newLocation}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const KnowledgeBase = () => {
  const totalItems = knowledgeData.reduce((acc, cat) => acc + cat.items.length, 0);
  const extractedItems = knowledgeData.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.status === "extracted").length,
    0
  );
  const needsContent = knowledgeData.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.status === "needs-content").length,
    0
  );

  return (
    <>
      <SEOHead
        title="Knowledge Base — Content Migration"
        description="Internal knowledge base for migrating content from the old Neurodiversity Global website."
        path="/knowledge-base"
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Knowledge Base" }]} />
      <main>
        <PageHero
          badge="Content migration"
          title="Knowledge Base"
          description="All content extracted from the old neurodiversityglobal.com site, organised for review and migration to the new design system."
        />

        {/* Summary stats */}
        <section className="bg-background py-10 border-b border-border">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-display font-extrabold text-2xl text-foreground">{totalItems}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Total pages found</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-accent">{extractedItems}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Content extracted</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-amber-500">{needsContent}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Needs manual input</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {knowledgeData.map((category) => (
          <section key={category.category} className="bg-background py-12 border-b border-border" aria-labelledby={`cat-${category.category}`}>
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <div className="mb-6">
                <h2 id={`cat-${category.category}`} className="font-display font-extrabold text-xl text-foreground">
                  {category.category}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-[60ch]">{category.description}</p>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <CollapsibleItem key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Instructions */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-wide px-6 lg:px-10 max-w-2xl">
            <h2 className="font-display font-extrabold text-xl text-foreground mb-4">How to use this page</h2>
            <ol className="space-y-3 text-sm text-muted-foreground leading-relaxed list-decimal list-inside">
              <li>Review each item and visit the old site page using the link provided.</li>
              <li>Copy the relevant body content from the old page.</li>
              <li>Share it with me and I will rewrite it for the new design system and place it on the correct page.</li>
              <li>Items marked <span className="text-accent font-semibold">extracted</span> already have partial content that can be used immediately.</li>
              <li>Items marked <span className="text-amber-500 font-semibold">needs manual content</span> require you to paste in the copy from the old site.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default KnowledgeBase;
