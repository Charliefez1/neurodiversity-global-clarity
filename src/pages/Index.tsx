import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOHead from "@/components/SEOHead";
import JsonLd, { organisationSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { AlertTriangle, Settings, TrendingUp, Award, Heart, Phone, BookOpen, ArrowRight } from "lucide-react";

// Lazy-load all below-fold sections
const TrainingCatalogueBanner = lazy(() => import("@/components/TrainingCatalogueBanner"));
const PageContents = lazy(() => import("@/components/PageContents"));
const FloatingContactButton = lazy(() => import("@/components/FloatingContactButton"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const StatsBar = lazy(() => import("@/components/StatsBar"));
const ImpactSection = lazy(() => import("@/components/ImpactSection"));
const EvidenceSection = lazy(() => import("@/components/EvidenceSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const ResourcesSection = lazy(() => import("@/components/ResourcesSection"));
const FeaturedClient = lazy(() => import("@/components/FeaturedClient"));
const InclusivePerformanceSection = lazy(() => import("@/components/InclusivePerformanceSection"));
const Footer = lazy(() => import("@/components/Footer"));
const NewsHeadlines = lazy(() => import("@/components/NewsHeadlines"));

// Lazy-load heavy background images only when needed
const challengeBg = new URL("@/assets/challenge-bg.png", import.meta.url).href;
const industryBg = new URL("@/assets/industry-bg.png", import.meta.url).href;

const indexSections = [
  { id: "problem", label: "The Challenge", icon: AlertTriangle },
  { id: "services", label: "Services", icon: Settings },
  { id: "impact", label: "Impact", icon: TrendingUp },
  { id: "evidence", label: "Evidence", icon: Award },
  { id: "values", label: "Values", icon: Heart },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "resources", label: "Resources", icon: BookOpen },
];

/** Invisible placeholder that reserves vertical space to prevent CLS */
const SectionPlaceholder = () => (
  <div className="min-h-[200px]" aria-hidden="true" />
);

const Index = () => {
  return (
    <main>
      <SEOHead
        title="Neurodiversity in Work. Designed as Infrastructure"
        description="UK-based, neurodivergent-led consultancy redefining neuroinclusion as business-critical infrastructure. Strategic redesign, workforce capability building, and 50+ accredited workshops."
        path="/"
      />
      <JsonLd data={organisationSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Neurodiversity Global",
        url: "https://www.neurodiversityglobal.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.neurodiversityglobal.com/ask-rich?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }} />
      <RegisterSections sections={indexSections} />
      <Navbar />

      <Suspense fallback={null}>
        <NewsHeadlines />
      </Suspense>

      <HeroSection />

      {/* Below-fold content — lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <TrainingCatalogueBanner />
        <PageContents />
        <FloatingContactButton />

        {/* Ask Rich Anything — compact CTA */}
        <section className="bg-primary py-10 lg:py-12">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
              <div className="max-w-xl">
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Ask Rich Anything</p>
                <h2 className="font-display font-bold text-lg md:text-xl text-primary-foreground leading-tight">
                  Got a question about neurodiversity at work?
                </h2>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                  Search our knowledge base or ask Rich directly. Answers written personally by our co-founder. Always confidential.
                </p>
              </div>
              <a
                href="/ask-rich"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-burnt-orange text-white font-display font-bold text-sm shadow-lg shadow-burnt-orange/30 hover:shadow-xl hover:shadow-burnt-orange/45 hover:scale-[1.02] transition-all shrink-0"
              >
                Ask Rich
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <ServicesSection />

        <div
          className="relative bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${challengeBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <ProblemSection />
            <StatsBar />
          </div>
        </div>

        <ImpactSection />

        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${industryBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <EvidenceSection />
          </div>
        </div>

        <FeaturedClient />
        <InclusivePerformanceSection />
        <FinalCTA />
        <ResourcesSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
