import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import EvidenceSection from "@/components/EvidenceSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd, { organisationSchema } from "@/components/JsonLd";


const Index = () => {
  return (
    <main>
      <SEOHead
        title="Neurodiversity in Work. Designed as Infrastructure"
        description="UK-based, neurodivergent-led consultancy redefining neuroinclusion as business-critical infrastructure. Strategic redesign, workforce capability building, and 50+ accredited workshops."
        path="/"
      />
      <JsonLd data={organisationSchema} />
      <Navbar />
      <HeroSection />
      <ClientMarquee />
      <ProblemSection />
      <ServicesSection />
      <ImpactSection />
      <EvidenceSection />
      <AccessibilitySection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
