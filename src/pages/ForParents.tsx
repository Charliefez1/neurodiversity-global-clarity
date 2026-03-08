import PathwayLanding from "@/components/templates/PathwayLanding";

const ForParents = () => (
  <PathwayLanding
    audience="parents"
    badge="For Parents & Carers"
    title="You're not failing. The system wasn't built for your child."
    heroDescription="Navigate SEND systems, understand your rights, and get practical support from people who genuinely understand what you're going through."
    seoTitle="Neurodiversity Support for Parents & Carers | Neurodiversity Global"
    seoDescription="Expert guidance for parents and carers of neurodivergent children. Navigate SEND systems, understand rights, and get practical, compassionate support."
    breadcrumbLabel="For Parents"
    breadcrumbPath="/for-parents"
    persona="Rich"
    whatsappNumber="447000000000"
    placeholders={[
      "My child's school says they don't need an EHCP — are they right?",
      "How do I get my child assessed for ADHD or autism?",
      "What are my rights if the school isn't supporting my child?",
      "My child is masking at school and melting down at home — what do I do?",
      "How do I find the right support without going private?",
    ]}
  />
);

export default ForParents;
