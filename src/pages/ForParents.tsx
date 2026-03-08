import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Heart, Eye, Lightbulb, School, Users, Compass, FileText, CalendarCheck, RefreshCw, CheckCircle2, HelpCircle, Home, Ear, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-parents-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const understandingAreas = [
  { label: "ADHD", icon: Lightbulb },
  { label: "Autism", icon: Brain },
  { label: "Sensory processing", icon: Ear },
  { label: "Emotional regulation", icon: Heart },
  { label: "Masking & exhaustion", icon: Eye },
  { label: "Confidence & self-esteem", icon: Sparkles },
];

const schoolFactors = [
  "Signs of overwhelm that may not be obvious",
  "Sensory challenges in classroom environments",
  "Why behaviour can change across different environments",
  "How expectations and communication affect children",
];

const sendNavigatorFeatures = [
  { title: "SEND process explanations", icon: FileText, desc: "Clear breakdowns of how the system works at each stage." },
  { title: "EHCP pathway guidance", icon: Compass, desc: "Step-by-step guidance through assessments and reviews." },
  { title: "Meeting preparation tools", icon: CalendarCheck, desc: "Help parents prepare for conversations with schools and authorities." },
  { title: "SEND reform updates", icon: RefreshCw, desc: "Stay informed about changes that affect your child." },
];

const workshopQuestions = [
  "Why does my child cope well one day and struggle the next?",
  "Why do small changes sometimes lead to big reactions?",
  "How can I help my child regulate when they feel overwhelmed?",
];

const workshopOutcomes = [
  "Understand neurodivergence in real life",
  "Recognise signs of overwhelm and stress",
  "Support emotional regulation at home",
  "Strengthen communication with their child",
  "Approach school conversations with greater confidence",
];

const ForParents = () => (
  <PathwayLanding
    audience="parents"
    heroImage={heroImg}
    heroImageAlt="Diverse families and children together"
    badge="For Parents & Carers"
    title="Understanding neurodivergent children and the systems around them"
    heroDescription="Many parents realise something about their child long before anyone else does. We help you understand your child and navigate the systems around them."
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
  >
    {/* ═══════════════════════════════════════════
        UNDERSTANDING YOUR CHILD
        ═══════════════════════════════════════════ */}
    <PageSection
      id="understanding"
      badge="Understanding your child"
      title="What is actually happening for my child?"
      description="Before meetings, assessments, or paperwork, most parents want to understand one thing. Neurodivergent children often experience the world in ways that are not always obvious to others."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-5">
          <div className="space-y-3">
            {[
              "Sensory environments may feel overwhelming.",
              "Changes may feel unpredictable.",
              "Emotions may build quickly and become difficult to regulate.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-accent/[0.04] border border-accent/10 p-4">
                <Heart size={16} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our work helps parents understand the reality of neurodivergence in everyday life.
          </p>
          <div className="rounded-xl bg-accent/[0.06] border border-accent/15 p-5">
            <p className="font-display font-bold text-sm text-foreground mb-1">The goal is not to label children.</p>
            <p className="text-sm text-muted-foreground">The goal is understanding what sits beneath behaviour.</p>
          </div>
        </div>

        {/* Understanding areas grid */}
        <div className="grid grid-cols-2 gap-3">
          {understandingAreas.map((area, i) => (
            <motion.div
              key={area.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2.5 group-hover:bg-accent/20 transition-colors">
                <area.icon size={20} className="text-accent" />
              </div>
              <p className="font-display font-bold text-xs text-foreground">{area.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        UNDERSTANDING SCHOOL
        ═══════════════════════════════════════════ */}
    <PageSection
      id="school"
      badge="Understanding school"
      title="How environments influence behaviour"
      description="School environments can work well for many children. For others, they can create pressure that is not always visible."
      variant="sand"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            Noise, social expectations, constant transitions, and unclear communication can all affect how a child copes during the school day.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            When parents understand how environments influence behaviour, conversations with schools often become clearer and more constructive.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
              <School size={20} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">What parents learn to recognise</p>
          </div>
          <ul className="space-y-3">
            {schoolFactors.map((factor, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 shrink-0 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <span className="font-display font-bold text-xs text-accent">{i + 1}</span>
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{factor}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PullQuote quote="Understanding these factors often changes how parents approach both home and school." />
    </PageSection>

    {/* ═══════════════════════════════════════════
        SEND NAVIGATOR
        ═══════════════════════════════════════════ */}
    <PageSection
      id="send-navigator"
      badge="SEND Navigator"
      title="Making the SEND system easier for parents to understand"
      description="Alongside supporting their child, many parents find themselves navigating conversations with SENCOs, school support plans, EHCP assessments, and local authority processes."
      variant="dark"
    >
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {sendNavigatorFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 hover:bg-primary-foreground/[0.1] hover:border-primary-foreground/20 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <feature.icon size={22} className="text-accent" />
            </div>
            <h3 className="font-display font-bold text-sm text-primary-foreground mb-1.5">{feature.title}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl bg-accent/15 border border-accent/25 p-6">
        <p className="font-display font-bold text-sm text-primary-foreground mb-1">
          The aim is clarity.
        </p>
        <p className="text-sm text-primary-foreground/60">
          Not advice. Not campaigning. Just helping parents understand the system they are navigating.
        </p>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        PARENT WORKSHOPS
        ═══════════════════════════════════════════ */}
    <PageSection
      id="workshops"
      badge="Parent workshops"
      title="Helping families understand neurodivergence in practical, everyday terms"
      description="We deliver sessions for parent groups through schools, organisations, and community programmes."
      variant="default"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Questions parents explore */}
        <div>
          <p className="font-display font-bold text-sm text-foreground mb-4">
            Questions parents often want to explore
          </p>
          <div className="space-y-3">
            {workshopQuestions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-accent/[0.04] border border-accent/10 p-4">
                <HelpCircle size={16} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What sessions help with */}
        <OutcomeBlock
          title="What parents take away"
          outcomes={workshopOutcomes.map((item) => ({ label: item }))}
        />
      </div>

      <PullQuote quote="Many parents tell us that simply understanding their child more clearly changes how they support them." />
    </PageSection>

    {/* ═══════════════════════════════════════════
        WHY WE DO THIS WORK
        ═══════════════════════════════════════════ */}
    <PageSection
      id="why-us"
      badge="Why we do this work"
      title="Built by a family raising neurodivergent children"
      description="Neurodiversity Global is a neurodivergent-led organisation. Our work combines lived experience with professional insight gained from working with organisations, schools, and public services."
      variant="sand"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-md flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Home size={22} className="text-accent" />
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground mb-1">Lived experience</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We understand that parents are not only navigating systems. They are supporting children they care deeply about.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-md flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <ShieldCheck size={22} className="text-accent" />
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground mb-1">Professional insight</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Decades of experience working with organisations, schools, and public services informs everything we do.
            </p>
          </div>
        </div>
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        FINAL CTA
        ═══════════════════════════════════════════ */}
    <PageCTA
      title="Work with us"
      description="If you are a school, organisation, or community group supporting parents of neurodivergent children, we would be happy to work with you. Our sessions help families better understand neurodivergence, their child, and the environments around them."
      primaryLabel="Get in touch"
      primaryHref="/feedback"
      secondaryLabel="Send us a message"
      secondaryHref="/feedback"
    />
  </PathwayLanding>
);

export default ForParents;
