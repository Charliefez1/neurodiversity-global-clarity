import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Heart, Eye, Lightbulb, School, Users, Compass, FileText, CalendarCheck, RefreshCw, CheckCircle2, HelpCircle, Home, Ear, Sparkles, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PathwayLanding from "@/components/templates/PathwayLanding";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import OutcomeBlock from "@/components/blocks/OutcomeBlock";
import PullQuote from "@/components/blocks/PullQuote";
import heroImg from "@/assets/pathway-parents-hero.png";
import sendNavigatorHeroImg from "@/assets/send-navigator-hero.png";
import understandingImg from "@/assets/pathway/parents-understanding.jpg";
import schoolImg from "@/assets/pathway/parents-school.jpg";
import sendNavigatorImg from "@/assets/resources/send-navigator.png";
import badParentsImg from "@/assets/resources/are-we-bad-parents.png";
import dopamineImg from "@/assets/resources/dopamine-on-demand.png";
import { blogPosts } from "@/data/blogPosts";

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
    heroImage={sendNavigatorHeroImg}
    heroImageAlt="The SEND Navigator — 6 key parent resources"
    heroVariant="split"
    hideAskSection
    heroCTAs={
      <a
        href="#send-navigator"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
      >
        <Compass size={16} />
        Explore the SEND Navigator
        <ArrowRight size={16} />
      </a>
    }
    badge="For Parents & Carers"
    title="Tools and resources built for families navigating neurodiversity"
    heroDescription="We've built a set of tools that have processed thousands of documents — government policy, research, SEND guidance, and more — so families can access practical advice, strategies, and resources in one place."
    seoTitle="Neurodiversity Tools & Resources for Parents & Carers | Neurodiversity Global"
    seoDescription="Free tools and resources for parents and carers of neurodivergent children. Access SEND guidance, practical strategies, and evidence-based resources built from thousands of documents."
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
              <p className="font-display font-bold text-sm text-foreground">Built from evidence</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">Thousands of documents processed into practical, accessible resources for families.</p>
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
              Understanding neurodivergence
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
              Tools to help you{" "}
              <span className="text-accent">make sense of it all</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Before meetings, assessments, or paperwork, most parents want to understand what's going on. Our tools draw on thousands of processed documents — research, policy, and real-world guidance — to help you find the information that matters.
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
              Try our knowledge base
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>




    {/* ═══════════════════════════════════════════
        THE SEND NAVIGATOR — 6-card feature grid
        ═══════════════════════════════════════════ */}
    <section id="send-navigator" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            ● The SEND Navigator
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
            Everything you need in one place
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {([
            {
              icon: FileText,
              badge: "SEND Reform Report",
              badgeColor: "hsl(var(--accent))",
              borderColor: "hsl(160,55%,48%)",
              title: "Track every aspect of SEND reform",
              desc: "Eight detailed sections covering what's confirmed, what's being discussed, and what hasn't changed.",
              cta: "SEND Reform Report",
              href: "https://sendnavigator.neuro.support",
            },
            {
              icon: ShieldCheck,
              badge: "EHCP Guide",
              badgeColor: "hsl(220,70%,55%)",
              borderColor: "hsl(220,70%,55%)",
              title: "Understand your rights and the process",
              desc: "A plain-English guide to Education, Health and Care Plans. What they are, how they work, and what to do when things go wrong.",
              cta: "EHCP Guide",
              href: "#",
            },
            {
              icon: Heart,
              badge: "This is me",
              badgeColor: "hsl(40,90%,50%)",
              borderColor: "hsl(40,90%,50%)",
              title: "Build a profile to share with schools",
              desc: "Create a professional, structured document about your child that you can share with schools and professionals.",
              cta: "This is me",
              href: "#",
            },
            {
              icon: CheckCircle2,
              badge: "What to do now",
              badgeColor: "hsl(0,70%,55%)",
              borderColor: "hsl(0,70%,55%)",
              title: "Practical steps based on current law",
              desc: "Clear, practical actions you can take right now based on what the law actually says today.",
              cta: "What to do now",
              href: "#",
            },
            {
              icon: Users,
              badge: "Ask Rich",
              badgeColor: "hsl(260,50%,55%)",
              borderColor: "hsl(260,50%,55%)",
              title: "Get plain-English answers",
              desc: "A knowledge base built from thousands of processed documents. Ask a question and get a grounded answer drawn from confirmed sources.",
              cta: "Ask Rich",
              href: "/ask-rich",
            },
            {
              icon: Compass,
              badge: "Sources & Evidence",
              badgeColor: "hsl(160,55%,48%)",
              borderColor: "hsl(160,55%,48%)",
              title: "Every claim traced to its source",
              desc: "Legislation, government research, DfE data, and expert reviews, all in one place so you can verify everything yourself.",
              cta: "Sources & Evidence",
              href: "/sources",
            },
          ] as const).map((card, i) => {
            const isExternal = card.href.startsWith("http");
            const Wrapper = isExternal ? "a" : Link;
            const wrapperProps = isExternal
              ? { href: card.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : { to: card.href };

            return (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                {/* Colored top border */}
                <div className="h-1" style={{ backgroundColor: card.borderColor }} />
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${card.borderColor}18`, color: card.borderColor }}
                  >
                    <card.icon size={22} />
                  </div>
                  <p
                    className="font-display font-bold text-xs uppercase tracking-[0.12em] mb-2"
                    style={{ color: card.badgeColor }}
                  >
                    {card.badge}
                  </p>
                  <h3 className="font-display font-bold text-base leading-tight text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {card.desc}
                  </p>
                  {/* @ts-ignore */}
                  <Wrapper
                    {...wrapperProps}
                    className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg font-display font-bold text-sm transition-all hover:scale-[1.02] shadow-sm"
                    style={{
                      backgroundColor: `${card.borderColor}15`,
                      color: card.borderColor,
                    }}
                  >
                    {card.cta} <ArrowRight size={14} />
                  </Wrapper>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

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

      <PullQuote quote="These sessions give families a starting point — not a diagnosis, not a prescription, just practical understanding they can use at home." />

      {/* Link to full presentation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-2xl border border-accent/20 bg-accent/[0.04] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <div className="flex-1">
          <p className="font-display font-bold text-base text-foreground mb-1">
            Take the presentation home
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is the presentation we give in our live sessions. We have made it available so parents have their own version to revisit, share with family members, or use to explain what they are dealing with.
          </p>
        </div>
        <Link
          to="/for-parents/presentation"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all shrink-0"
        >
          View presentation
          <ArrowRight size={16} />
        </Link>
      </motion.div>
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
        RESOURCES FROM NEURODIVERSITY GLOBAL
        ═══════════════════════════════════════════ */}
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
            Resources
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
            Resources from{" "}
            <span className="text-accent">Neurodiversity Global</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Practical guides, tools, and long reads created by our team — built from lived experience and designed for families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {([
            {
              title: "SEND Reform Navigator",
              description: "Plain-English answers about SEND reform. What we know, what's changing, and what hasn't.",
              href: "https://sendnavigator.neuro.support",
              badge: "Interactive Tool",
              image: sendNavigatorImg,
              external: true,
            },
            {
              title: "Are We Bad Parents?",
              description: "One tired accusation. And the reality of parenting a neurodivergent child. An open letter that resonated with thousands.",
              href: "https://awbp.neuro.support/",
              badge: "Open Letter",
              image: badParentsImg,
              external: true,
            },
            {
              title: "The Day We Gave Our Children Dopamine",
              description: "Smartphones, dopamine, and what it means for neurodivergent young people.",
              href: "https://smartphonefree.neurodiversityglobal.com/",
              badge: "Long Read",
              image: dopamineImg,
              external: true,
            },
          ]).map((resource, i) => (
            <motion.a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:border-accent/30 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">{resource.badge}</span>
                <h3 className="font-display font-bold text-base leading-tight mb-2 text-foreground group-hover:text-accent transition-colors">{resource.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{resource.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-sm font-display font-bold group-hover:gap-2.5 transition-all">Visit <ExternalLink size={14} aria-hidden="true" /></span>
              </div>
            </motion.a>
          ))}
        </div>

        {(() => {
          const parentBlogs = blogPosts.filter((p) => p.category === "Parents");
          if (parentBlogs.length === 0) return null;
          return (
            <>
              <div className="mb-8">
                <h3 className="font-display font-bold text-lg text-foreground">From the blog</h3>
                <p className="text-sm text-muted-foreground mt-1">Practical, evidence-informed articles about the real challenges families face.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parentBlogs.map((post, i) => (
                  <motion.div key={post.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
                    <Link to={`/blog/${post.slug}`} className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-accent/30 transition-all h-full">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">{post.category}</span>
                        <h3 className="font-display font-bold text-sm leading-tight mb-2 text-card-foreground group-hover:text-accent transition-colors">{post.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">Read more <ArrowRight size={14} aria-hidden="true" /></span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          );
        })()}
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
