import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NEURO_COLOURS } from "@/data/neuroColours";
import {
  Heart,
  Eye,
  Globe,
  ArrowRight,
  Building2,
  Stethoscope,
  GraduationCap,
  Landmark,
  Truck,
  DollarSign,
  Users,
  Sparkles,
} from "lucide-react";
import storyImg from "@/assets/about-story.jpg";
import networkImg from "@/assets/global-network-map.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const pageSections = [
  { id: "story", label: "Our Story", icon: Heart },
  { id: "perspective", label: "Our Perspective", icon: Eye },
  { id: "reach", label: "Global Reach", icon: Globe },
];

const sectors = [
  { label: "Technology and engineering", icon: Building2, colour: NEURO_COLOURS[0] },
  { label: "Healthcare", icon: Stethoscope, colour: NEURO_COLOURS[1] },
  { label: "Education", icon: GraduationCap, colour: NEURO_COLOURS[2] },
  { label: "Finance", icon: DollarSign, colour: NEURO_COLOURS[3] },
  { label: "Logistics and transport", icon: Truck, colour: NEURO_COLOURS[4] },
  { label: "Public sector organisations", icon: Landmark, colour: NEURO_COLOURS[0] },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Neurodiversity Global. Our Story and Mission"
        description="Neurodiversity Global is a UK company founded by Rich and Charlie Ferriman. A neurodivergent-led consultancy built on lived experience and decades of leadership."
        path="/about"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "About", url: "https://www.neurodiversityglobal.com/about" },
        ])}
      />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <main>
        <PageHero
          badge="About us"
          title="Built by people who live it"
          description="Neurodiversity Global is a UK company founded by Rich Ferriman and Charlie Ferriman, a father and son team working to change how organisations understand and support different ways of thinking."
        >
          <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            What began as a small, family-run initiative in the United Kingdom now supports organisations across multiple countries. We help leaders redesign workplaces so people with different cognitive styles can succeed.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            The company is proudly neurodivergent-led. Our work is shaped not only by professional experience, but by lived experience. We know the challenges because we have lived them.
          </p>
        </PageHero>

        {/* ═══════════ OUR STORY — image + text split ═══════════ */}
        <section id="story" className="bg-background py-20 lg:py-28" aria-labelledby="story-heading">
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
                    src={storyImg}
                    alt="Collaborative workspace with team working together"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-sm text-foreground">Family-led</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Independent, practical, and focused on long-term impact.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Our story
                </p>
                <h2 id="story-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  Most workplaces were designed{" "}
                  <span className="text-accent">before we understood how differently human brains work</span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Many organisations still expect everyone to focus, communicate, and manage pressure in exactly the same way. When people struggle in those environments, the system rarely questions itself.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Instead, individuals are asked to adapt.
                </p>

                <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6">
                  <p className="font-display font-bold text-base text-foreground">
                    We believe that approach is backwards.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Our work focuses on redesigning environments so that different ways of thinking become an advantage rather than a barrier.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote
          quote="Neurodivergence is not a niche issue. It is part of how every organisation already works."
          accentIndex={0}
        />

        {/* ═══════════ WHY WE DO THIS — warm stone ═══════════ */}
        <section id="perspective" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="perspective-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                Why we do this work
              </p>
              <h2 id="perspective-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                Neurodiversity Global was not built as a{" "}
                <span className="text-accent">traditional consultancy</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  It was built because the founders saw the same pattern repeated again and again.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Talented people struggling in environments that were never designed with them in mind. Managers wanting to help but lacking the tools. Organisations losing capable individuals without understanding why.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We believe organisations can do better. When environments change, performance changes with them. When people are able to work in ways that match how their minds operate, the results are extraordinary.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { text: "Different ways of thinking exist in every team, every industry, and every country.", icon: Globe },
                  { text: "The question is not whether neurodiversity exists in your organisation.", icon: Eye },
                  { text: "The question is whether your systems allow people with different minds to succeed.", icon: Sparkles },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${NEURO_COLOURS[i % NEURO_COLOURS.length]}18`, color: NEURO_COLOURS[i % NEURO_COLOURS.length] }}
                    >
                      <item.icon size={18} />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed font-display font-bold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FAMILY RUN — dark navy section ═══════════ */}
        <section id="family" className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Family run
                </p>
                <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight text-primary-foreground">
                  Neurodiversity Global remains{" "}
                  <span className="text-accent">proudly family run</span>
                </h2>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed">
                  That matters to us. It keeps our work grounded in real experience rather than corporate theory. It also allows us to remain independent, practical, and focused on long-term impact rather than trends.
                </p>
                <p className="mt-3 text-base text-primary-foreground/75 leading-relaxed">
                  We work closely with a network of associates and specialists around the world. Our core leadership remains deliberately small and focused. That structure allows us to stay close to the organisations we support and the people we work with.
                </p>

                <Link
                  to="/about/team"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Meet Rich and Charlie <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="flex flex-col gap-4"
              >
                {[
                  { metric: "30+", label: "years of combined leadership experience" },
                  { metric: "1,000+", label: "complex projects delivered globally" },
                  { metric: "Neurodivergent-led", label: "lived experience informs everything" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 flex items-center gap-5"
                  >
                    <p className="font-display font-bold text-2xl text-accent shrink-0 min-w-[4rem]">{stat.metric}</p>
                    <p className="text-sm text-primary-foreground/75 leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ GLOBAL REACH — image + card grid ═══════════ */}
        <section id="reach" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="reach-heading">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Working across the world
                </p>
                <h2 id="reach-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight text-foreground">
                  Our work reaches organisations across{" "}
                  <span className="text-accent">multiple countries and sectors</span>
                </h2>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {sectors.map((sector, i) => (
                    <motion.div
                      key={sector.label}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeUp}
                      className="rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="h-1" style={{ backgroundColor: sector.colour }} />
                      <div className="p-5 flex gap-3 items-center">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${sector.colour}18`, color: sector.colour }}
                        >
                          <sector.icon size={16} />
                        </div>
                        <p className="text-sm text-card-foreground font-display font-bold">{sector.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-8 text-base text-muted-foreground leading-relaxed">
                  From frontline teams to executive leadership groups, our goal is the same. Help organisations build environments where different ways of thinking are understood, respected, and supported.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl bg-primary p-8">
                  <img
                    src={networkImg}
                    alt="Global network map showing international reach"
                    className="w-full opacity-80"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ MANIFESTO — dramatic dark section ═══════════ */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="font-display font-bold text-2xl md:text-3xl leading-tight mb-6">
                We do not run awareness campaigns.{" "}
                <span className="text-accent">We redesign systems.</span>
              </p>
              <p className="text-base text-primary-foreground/75 leading-relaxed">
                Because the goal is not simply inclusion. The goal is better organisations.
              </p>
            </motion.div>
          </div>
        </section>

        <PageCTA
          title="Start a conversation"
          description="Whether it is a question, a project, or a conversation about where to start, we would like to hear from you."
          pageSource="about"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
