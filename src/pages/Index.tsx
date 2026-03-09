import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeuroFrameworkSection from "@/components/NeuroFrameworkSection";
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
import { AlertTriangle, Settings, TrendingUp, Award, Heart, Phone, Sparkles, BookOpen } from "lucide-react";

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
      <AccessibilitySection />
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
