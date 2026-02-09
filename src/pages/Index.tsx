import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        title="Neurodiversity in Work, Leadership & Systems Design"
        description="UK-based global consultancy specialising in neurodiversity training, coaching, and systems change for organisations that want measurable results."
        path="/"
      />
      <JsonLd data={organisationSchema} />
      <Navbar />
      <HeroSection />
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
