import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import EvidenceSection from "@/components/EvidenceSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FinalCTA from "@/components/FinalCTA";
import ResourcesSection from "@/components/ResourcesSection";
import EmbedSection from "@/components/EmbedSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd, { organisationSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { AlertTriangle, Settings, TrendingUp, Award, Heart, Phone, Sparkles, BookOpen } from "lucide-react";

const indexSections = [
  { id: "problem", label: "The Challenge", icon: AlertTriangle },
  { id: "services", label: "Services", icon: Settings },
  { id: "impact", label: "Impact", icon: TrendingUp },
  { id: "evidence", label: "Evidence", icon: Award },
  { id: "values", label: "Values", icon: Heart },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "embed", label: "Explore", icon: Sparkles },
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
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ImpactSection />
      <EvidenceSection />
      <AccessibilitySection />
      <FinalCTA />
      <EmbedSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
};

export default Index;
