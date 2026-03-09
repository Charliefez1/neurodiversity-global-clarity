import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { motion } from "framer-motion";
import { NEURO_COLOURS } from "@/data/neuroColours";
import {
  User,
  Briefcase,
  GraduationCap,
  Globe,
  Heart,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import teamHeroImg from "@/assets/about-team-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "rich", label: "Rich Ferriman", icon: User },
  { id: "charlie", label: "Charlie Ferriman", icon: User },
];

const richCredentials = [
  { metric: "30+", label: "years of leadership experience", icon: Briefcase },
  { metric: "$100M", label: "business unit managed", icon: Globe },
  { metric: "1,000+", label: "complex projects delivered", icon: Zap },
];

const charlieCredentials = [
  { label: "Training and facilitation", icon: GraduationCap, colour: NEURO_COLOURS[0] },
  { label: "Mentoring and youth programmes", icon: Heart, colour: NEURO_COLOURS[1] },
  { label: "University and charity partnerships", icon: Users, colour: NEURO_COLOURS[2] },
  { label: "Generational perspective on inclusion", icon: Lightbulb, colour: NEURO_COLOURS[3] },
];

const AboutTeam = () => {
  return (
    <>
      <SEOHead
        title="Meet the Team. Rich and Charlie Ferriman"
        description="Neurodiversity Global is led by Rich and Charlie Ferriman. A father and son team with decades of experience, bringing lived neurodivergent perspective to organisational change."
        path="/about/team"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "About", url: "https://www.neurodiversityglobal.com/about" },
          { name: "Team", url: "https://www.neurodiversityglobal.com/about/team" },
        ])}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Team" }]} />
      <main>
        <PageHero
          badge="Our team"
          title="Two perspectives. One mission."
          description="Neurodiversity Global is led by Rich and Charlie Ferriman, a father and son team bringing decades of leadership, lived experience, and a shared belief that workplaces can be redesigned to work for everyone."
        />

        {/* ═══════════ RICH — image + text split ═══════════ */}
        <section id="rich" className="bg-background py-20 lg:py-28" aria-labelledby="rich-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={teamHeroImg}
                    alt="Abstract representation of collaboration and complementary perspectives"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-sm text-foreground">Autistic & ADHD</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Lived experience informs every recommendation.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Co-founder
                </p>
                <h2 id="rich-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  Rich Ferriman
                </h2>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  More than 30 years of industry and leadership experience.
                </p>

                <div className="mt-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rich has led large teams, managed major transformation programmes, and delivered more than 1,000 complex projects across global organisations.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    During his career Rich ran a $100 million business unit, built and scaled international teams, and worked in highly regulated and technically complex environments.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Alongside that professional experience, Rich is also autistic and ADHD, and the parent of neurodivergent children. That lived experience informs everything the organisation does.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rich focuses on the strategic side of Neurodiversity Global's work, supporting leadership teams to rethink how organisations communicate, lead, and operate.
                  </p>
                </div>

                {/* Credential cards */}
                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {richCredentials.map((cred, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeUp}
                      className="rounded-xl bg-accent/5 border border-accent/15 p-4 text-center"
                    >
                      <cred.icon size={18} className="text-accent mx-auto mb-2" />
                      <p className="font-display font-bold text-lg text-accent">{cred.metric}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">{cred.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote
          quote="Neurodivergence is not the problem. Outdated systems are."
          attribution="Rich Ferriman"
          accentIndex={0}
        />

        {/* ═══════════ CHARLIE — dark navy section ═══════════ */}
        <section id="charlie" className="bg-primary py-20 lg:py-28" aria-labelledby="charlie-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Co-founder
                </p>
                <h2 id="charlie-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-primary-foreground">
                  Charlie Ferriman
                </h2>
                <p className="mt-2 text-base text-primary-foreground/75 leading-relaxed">
                  The next generation of neurodiversity leadership.
                </p>

                <div className="mt-6 space-y-4">
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    Diagnosed with ADHD as a teenager, Charlie experienced first hand how traditional education and early career pathways can fail people who think differently.
                  </p>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    Rather than following a conventional route, he began working internationally at a young age, managing teams and building businesses while developing his own understanding of leadership and inclusion.
                  </p>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    Charlie now delivers training, mentoring, and youth-focused programmes that bring a powerful generational perspective to organisational change.
                  </p>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    His work focuses on helping organisations understand how younger neurodivergent talent thinks, learns, and communicates.
                  </p>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    He also works closely with universities, charities, and youth groups to ensure neurodivergent young people have pathways into leadership and entrepreneurship.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="flex flex-col gap-4"
              >
                {charlieCredentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 flex gap-4 items-center hover:bg-primary-foreground/[0.1] transition-colors overflow-hidden"
                  >
                    <div className="h-full w-1 rounded-full shrink-0" style={{ backgroundColor: cred.colour }} />
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cred.colour}25`, color: cred.colour }}
                    >
                      <cred.icon size={18} />
                    </div>
                    <p className="text-sm text-primary-foreground font-display font-bold">{cred.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <PageCTA
          title="Work with us"
          description="Whether you are looking for training, strategic advisory, or a conversation about where to start, reach out."
          pageSource="about-team"
        />
      </main>
      <Footer />
    </>
  );
};

export default AboutTeam;
