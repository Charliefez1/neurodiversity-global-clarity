import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Heart, Eye, Lightbulb, School, Users, Compass, FileText, CalendarCheck, RefreshCw, CheckCircle2, HelpCircle, Home, Ear, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-parents-hero.png";
import understandingImg from "@/assets/pathway/parents-understanding.jpg";
import schoolImg from "@/assets/pathway/parents-school.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const understandingAreas = [
  { label: "ADHD", icon: Lightbulb, desc: "Focus, impulsivity, and energy regulation" },
  { label: "Autism", icon: Brain, desc: "Social communication and sensory processing" },
  { label: "Sensory processing", icon: Ear, desc: "How environments can overwhelm" },
  { label: "Emotional regulation", icon: Heart, desc: "Big feelings and managing them" },
  { label: "Masking & exhaustion", icon: Eye, desc: "The hidden cost of fitting in" },
  { label: "Confidence & self-esteem", icon: Sparkles, desc: "Building belief from within" },
];

const sendNavigatorFeatures = [
  { title: "SEND process explanations", icon: FileText, desc: "Clear breakdowns of how the system works at each stage." },
  { title: "EHCP pathway guidance", icon: Compass, desc: "Step-by-step guidance through assessments and reviews." },
  { title: "Meeting preparation tools", icon: CalendarCheck, desc: "Help parents prepare for conversations with schools and authorities." },
  { title: "SEND reform updates", icon: RefreshCw, desc: "Stay informed about changes that affect your child." },
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
        UNDERSTANDING YOUR CHILD — image + text
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={understandingImg}
                alt="Parent and child reading together in a warm home setting"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
              <p className="font-display font-bold text-sm text-foreground">Understanding first</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">The goal is not to label children. The goal is understanding what sits beneath behaviour.</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              Understanding your child
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
              What is actually happening{" "}
              <span className="text-accent">for my child?</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Before meetings, assessments, or paperwork, most parents want to understand one thing. Neurodivergent children often experience the world in ways that are not always obvious to others.
            </p>

            <div className="mt-6 space-y-3">
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

            <Link
              to="/ask-rich"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Sparkles size={16} />
              Ask Rich about your child
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        AREAS WE COVER — icon grid
        ═══════════════════════════════════════════ */}
    <PageSection
      id="areas"
      badge="What we help parents understand"
      title="The reality of neurodivergence in everyday life"
      variant="sand"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {understandingAreas.map((area, i) => (
          <motion.div
            key={area.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <area.icon size={22} className="text-accent" />
            </div>
            <h3 className="font-display font-bold text-sm text-foreground">{area.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageSection>

    {/* ═══════════════════════════════════════════
        UNDERSTANDING SCHOOL — image + text
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text first on this one */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              Understanding school
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
              How environments{" "}
              <span className="text-accent">influence behaviour</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              School environments can work well for many children. For others, they can create pressure that is not always visible. Noise, social expectations, constant transitions, and unclear communication can all affect how a child copes.
            </p>

            <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <School size={20} className="text-accent" />
                </div>
                <p className="font-display font-bold text-sm text-foreground">What parents learn to recognise</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Signs of overwhelm that may not be obvious",
                  "Sensory challenges in classroom environments",
                  "Why behaviour can change across environments",
                  "How expectations and communication affect children",
                ].map((factor, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <span className="font-display font-bold text-xs text-accent">{i + 1}</span>
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{factor}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={schoolImg}
                alt="Colorful classroom environment"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <PullQuote quote="Understanding these factors often changes how parents approach both home and school." />
      </div>
    </section>

    {/* ═══════════════════════════════════════════
        SEND NAVIGATOR — dark section
        ═══════════════════════════════════════════ */}
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
            SEND Navigator
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
            Making the SEND system{" "}
            <span className="text-accent">easier for parents to understand</span>
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-base leading-relaxed">
            Alongside supporting their child, many parents find themselves navigating conversations with SENCOs, school support plans, EHCP assessments, and local authority processes. SEND Navigator was created to translate policy and process into clear explanations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {sendNavigatorFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 hover:bg-primary-foreground/[0.1] hover:border-primary-foreground/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-sm text-primary-foreground mb-1.5">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl bg-accent/15 border border-accent/25 p-6 text-center">
          <p className="font-display font-bold text-base text-primary-foreground">
            The aim is clarity.
          </p>
          <p className="text-sm text-primary-foreground/50 mt-1">
            Not advice. Not campaigning. Just helping parents understand the system they are navigating.
          </p>
        </div>
      </div>
    </section>

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
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Questions */}
        <div>
          <p className="font-display font-bold text-sm text-foreground mb-5">
            Questions parents often want to explore
          </p>
          <div className="space-y-3">
            {[
              "Why does my child cope well one day and struggle the next?",
              "Why do small changes sometimes lead to big reactions?",
              "How can I help my child regulate when they feel overwhelmed?",
            ].map((q, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl bg-accent/[0.04] border border-accent/10 p-5"
              >
                <HelpCircle size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground leading-relaxed italic">{q}</p>
              </motion.div>
            ))}
          </div>
        </div>

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
    <section className="bg-warm-stone py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Why we do this work
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
            Built by a family raising{" "}
            <span className="text-accent">neurodivergent children</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Neurodiversity Global is a neurodivergent-led organisation. Our work combines lived experience with professional insight gained from working with organisations, schools, and public services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: Home,
              title: "Lived experience",
              desc: "We understand that parents are not only navigating systems. They are supporting children they care deeply about.",
            },
            {
              icon: ShieldCheck,
              title: "Professional insight",
              desc: "Decades of experience working with organisations, schools, and public services informs everything we do.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-lg transition-shadow flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon size={26} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

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
