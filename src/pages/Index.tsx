import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import EvidenceSection from "@/components/EvidenceSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
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
