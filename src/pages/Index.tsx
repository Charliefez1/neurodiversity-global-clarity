import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrainingCatalogueBanner from "@/components/TrainingCatalogueBanner";
import PageContents from "@/components/PageContents";
import NeuroFrameworkSection from "@/components/NeuroFrameworkSection";
import InclusivePerformanceSection from "@/components/InclusivePerformanceSection";
import ProblemSection from "@/components/ProblemSection";
import challengeBg from "@/assets/challenge-bg.png";
import industryBg from "@/assets/industry-bg.png";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import EvidenceSection from "@/components/EvidenceSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FinalCTA from "@/components/FinalCTA";
import ResourcesSection from "@/components/ResourcesSection";
import FloatingContactButton from "@/components/FloatingContactButton";

import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd, { organisationSchema } from "@/components/JsonLd";
import NewsHeadlines from "@/components/NewsHeadlines";
import AskQuestionCompact from "@/components/AskQuestionCompact";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { AlertTriangle, Settings, TrendingUp, Award, Heart, Phone, Sparkles, BookOpen, ArrowRight } from "lucide-react";

const indexSections = [
  { id: "problem", label: "The Challenge", icon: AlertTriangle },
  { id: "services", label: "Services", icon: Settings },
  { id: "impact", label: "Impact", icon: TrendingUp },
  { id: "evidence", label: "Evidence", icon: Award },
  { id: "values", label: "Values", icon: Heart },
  { id: "contact", label: "Contact", icon: Phone },
  
  { id: "resources", label: "Resources", icon: BookOpen },
];

const Index = () => {
  return (
    <main>
      <SEOHead
        title="Neurodiversity in Work. Designed as Infrastructure"
        description="UK-based, neurodivergent-led consultancy redefining neuroinclusion as business-critical infrastructure. Strategic redesign, workforce capability building, and 50+ accredited workshops."
        path="/"
      />
      <JsonLd data={organisationSchema} />
      <RegisterSections sections={indexSections} />
      <Navbar />
      <NewsHeadlines />
      <HeroSection />
      <TrainingCatalogueBanner />
      <PageContents />
      <FloatingContactButton />
      {/* Ask Rich Anything — compact CTA */}
      <section className="bg-primary py-14 lg:py-18">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
            <div className="max-w-xl">
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-burnt-orange mb-3">Ask Rich Anything</p>
              <h2 className="font-display font-bold text-xl md:text-2xl text-primary-foreground leading-tight">
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
      <NeuroFrameworkSection />
      <InclusivePerformanceSection />

      <FinalCTA />
      
      <ResourcesSection />
      <section className="py-12 lg:py-16 bg-muted">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="max-w-2xl mx-auto">
            <AskQuestionCompact />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;
