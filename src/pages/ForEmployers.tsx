import PathwayLanding from "@/components/templates/PathwayLanding";
import heroImg from "@/assets/pathway-employers-hero.png";

const ForEmployers = () => (
  <PathwayLanding
    audience="employers"
    badge="For Employers"
    title="Neurodiversity support that actually changes how your workplace works"
    heroDescription="Whether you're starting from scratch or already on the journey, we help employers reduce risk, retain talent, and build neuroinclusive cultures that perform."
    seoTitle="Neurodiversity Support for Employers | Neurodiversity Global"
    seoDescription="Expert neurodiversity training, consultancy, and coaching for employers. Reduce risk, retain talent, and build neuroinclusive workplaces that perform."
    breadcrumbLabel="For Employers"
    breadcrumbPath="/for-employers"
    persona="Charlie"
    whatsappNumber="447000000000"
    placeholders={[
      "We've had a grievance involving a neurodivergent employee — what should we do?",
      "How do I make our recruitment process more neuroinclusive?",
      "What training do our managers need on neurodiversity?",
      "We want to set up a neurodiversity network — where do we start?",
      "How do we handle reasonable adjustments without it becoming unmanageable?",
    ]}
  />
);

export default ForEmployers;
