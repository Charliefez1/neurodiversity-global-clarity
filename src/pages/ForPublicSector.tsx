import PathwayLanding from "@/components/templates/PathwayLanding";
import heroImg from "@/assets/pathway-public-sector-hero.png";

const ForPublicSector = () => (
  <PathwayLanding
    audience="public-sector"
    badge="For Public Sector"
    title="Neuroinclusion for government, NHS, and public services"
    heroDescription="Meet your legal duties, support your workforce, and redesign services so they work for neurodivergent citizens and staff."
    seoTitle="Neurodiversity Support for Public Sector & NHS | Neurodiversity Global"
    seoDescription="Specialist neurodiversity training and consultancy for NHS, government, and public sector organisations. Meet legal duties and improve outcomes."
    breadcrumbLabel="For Public Sector"
    breadcrumbPath="/for-public-sector"
    persona="Charlie"
    whatsappNumber="447000000000"
    heroImage={heroImg}
    heroImageAlt="Public sector and emergency services professionals"
    placeholders={[
      "How do we meet our Equality Act duties around neurodiversity?",
      "What neurodiversity training is available for NHS staff?",
      "How can we make our public services more accessible for neurodivergent people?",
      "We need help redesigning our recruitment process — where do we start?",
      "What does a neuroinclusion strategy look like for local government?",
    ]}
  />
);

export default ForPublicSector;
