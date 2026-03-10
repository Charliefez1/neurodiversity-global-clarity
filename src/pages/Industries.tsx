import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, GraduationCap, Building2, Cpu, Landmark,
  Flame, Train, Shield, ShoppingBag, Headphones, Factory, BarChart3,
  ArrowRight, Users, CheckCircle2, Scale, Gavel, HandHeart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import { NEURO_COLOURS } from "@/data/neuroColours";
import emergencyImg from "@/assets/industries/emergency-services.png";
import diverseImg from "@/assets/industries/diverse-workforce.png";
import nhsImg from "@/assets/industries/nhs-team.png";
import frontlineImg from "@/assets/industries/frontline-workers.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface Sector {
  name: string;
  tagline: string;
  icon: React.ElementType;
  href?: string;
}

const sectors: Sector[] = [
  { name: "Healthcare & NHS", tagline: "Clinical teams, burnout, disclosure, masking in high-pressure settings.", icon: Heart, href: "/industries/healthcare-nhs" },
  { name: "Education", tagline: "Universities, academic staff, student services, and governance.", icon: GraduationCap, href: "/industries/education" },
  { name: "Public Sector & Government", tagline: "Central and local government, regulators, and policy environments.", icon: Building2, href: "/industries/public-sector" },
  { name: "Technology & Digital", tagline: "Engineering teams, product orgs, and high cognitive demand roles.", icon: Cpu, href: "/industries/technology" },
  { name: "Financial & Professional Services", tagline: "High-regulation, high-pressure, risk-focused environments.", icon: Landmark, href: "/industries/financial-services" },
  { name: "Engineering & Infrastructure", tagline: "Safety-critical roles, structured systems, and frontline teams.", icon: Factory, href: "/industries/engineering" },
  { name: "Corporate & Enterprise", tagline: "Cross-functional leadership, HR, and organisational transformation.", icon: BarChart3, href: "/industries/corporate" },
  { name: "Charity & Third Sector", tagline: "Non-profits, social enterprises, and mission-driven organisations.", icon: HandHeart, href: "/industries/charity" },
  { name: "Legal", tagline: "Law firms, regulatory bodies, and high-detail analytical roles.", icon: Gavel, href: "/industries/legal" },
  { name: "Emergency Services", tagline: "Fire, police, ambulance. High-intensity, structured environments.", icon: Flame, href: "/industries/emergency-services" },
  { name: "Rail & Transport", tagline: "Operators, control rooms, frontline and safety-critical roles.", icon: Train, href: "/industries/rail-transport" },
  { name: "Sales & Commercial", tagline: "Performance pressure, emotional regulation, rejection sensitivity.", icon: ShoppingBag, href: "/industries/sales" },
  { name: "Call & Contact Centres", tagline: "Sensory load, scripted communication, high attrition.", icon: Headphones, href: "/industries/contact-centres" },
  { name: "Defence & National Infrastructure", tagline: "Security-conscious, structured leadership and governance.", icon: Shield, href: "/industries/defence" },
  { name: "Retail & Hospitality", tagline: "Customer-facing roles, shift patterns, and sensory environments.", icon: Scale, href: "/industries/retail-hospitality" },
];

const Industries = () => {
  return (
    <>
      <SEOHead
        title="Industry Solutions | Neurodiversity Training by Sector"
        description="Neurodiversity training and consultancy adapted to your sector. Healthcare, education, public sector, technology, legal, charity, and more."
        path="/industries"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
      ])} />
      <JsonLd data={serviceSchema(
        "Sector-Adapted Neurodiversity Solutions",
        "Neurodiversity training, coaching, and consultancy adapted to your industry's language, risks, and reality.",
        "https://www.neurodiversityglobal.com/industries"
      )} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      <main>
        {/* ═══════════ HERO — image + text split ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Industry solutions
                </p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-primary-foreground">
                  We adapt to your sector.{" "}
                  <span className="text-accent">Not the other way around.</span>
                </h1>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed max-w-[55ch]">
                  Every industry has its own pressures, language, and systems. We deliver neurodiversity training, coaching, and consultancy shaped around your context. Not a generic programme with your logo on it.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Book a discovery call <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#sectors"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-all"
                  >
                    Browse sectors
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "750+", label: "Organisations supported" },
                    { value: "30", label: "Countries reached" },
                    { value: "9.7/10", label: "Average session rating" },
                    { value: "50+", label: "Accredited workshops" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-3 text-center"
                    >
                      <p className="font-display font-bold text-lg text-accent">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={emergencyImg}
                    alt="Emergency services professionals representing diverse industries"
                    className="w-full h-[400px] lg:h-[520px] object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[220px]">
                  <p className="font-display font-bold text-2xl text-accent">15</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">industry sectors with tailored delivery.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ IMAGE STRIP — diverse workforce ═══════════ */}
        <section className="relative">
          <img
            src={diverseImg}
            alt="Diverse workforce across industries"
            className="w-full h-[280px] lg:h-[360px] object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-wide px-6 lg:px-10 pb-8 lg:pb-12">
            <p className="font-display font-bold text-xl md:text-2xl text-white leading-tight max-w-[44ch]">
              Neuroinclusion does not stop at the uniform. It sees the person underneath.
            </p>
            <p className="text-sm text-white/70 mt-2">Be seen. Be understood. Be valued.</p>
          </div>
        </section>

        {/* ═══════════ SECTOR GRID ═══════════ */}
        <section id="sectors" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-14"
            >
              <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">Sectors we work across</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                From the NHS to startups. Government to <span className="text-accent">hospitality</span>.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[55ch]">
                Same rigour. Same lived experience. Completely different delivery for your context. Click through to explore sector-specific challenges and solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((sector, i) => {
                const colour = NEURO_COLOURS[i % NEURO_COLOURS.length];
                const card = (
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={fadeUp}
                    className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
                  >
                    <div className="h-1" style={{ backgroundColor: colour }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${colour}18`, color: colour }}
                        >
                          <sector.icon size={20} />
                        </div>
                        {sector.href && (
                          <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                      <h3 className="font-display font-bold text-sm text-card-foreground group-hover:text-accent transition-colors mb-2">
                        {sector.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {sector.tagline}
                      </p>
                      {sector.href ? (
                        <p className="mt-4 text-xs font-display font-bold text-accent flex items-center gap-1">
                          Explore sector <ArrowRight size={12} />
                        </p>
                      ) : (
                        <p className="mt-4 text-xs text-muted-foreground/60 italic">Sector page coming soon</p>
                      )}
                    </div>
                  </motion.div>
                );

                if (sector.href) {
                  return <Link key={sector.name} to={sector.href} className="block">{card}</Link>;
                }
                return <div key={sector.name}>{card}</div>;
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ NHS IMAGE + APPROACH ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={nhsImg}
                    alt="NHS Blood and Transplant team members"
                    className="w-full h-[400px] lg:h-[480px] object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">30+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">NHS Trusts and healthcare organisations supported.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Our approach
                </p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground">
                  Same evidence base. Completely different{" "}
                  <span className="text-accent">delivery</span>.
                </h2>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed">
                  We do not deliver a generic programme with your logo on it. Every engagement is shaped around your sector's pressures, language, and reality.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: Users, title: "Lived experience first", desc: "Our team is neurodivergent. We do not teach from textbooks." },
                    { icon: CheckCircle2, title: "Sector-adapted", desc: "Same evidence base. Completely different delivery for your context." },
                    { icon: BarChart3, title: "Measured outcomes", desc: "We track impact, not just attendance. 9.7/10 average rating." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex gap-4 items-start rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm text-primary-foreground">{item.title}</h3>
                        <p className="text-sm text-primary-foreground/65 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PullQuote
          quote="We adapt to your sector. Not the other way around."
          accentIndex={1}
        />

        {/* ═══════════ FRONTLINE IMAGE ═══════════ */}
        <section className="relative">
          <img
            src={frontlineImg}
            alt="Frontline workers across sectors"
            className="w-full h-[280px] lg:h-[360px] object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-wide px-6 lg:px-10 pb-8 lg:pb-12">
            <p className="font-display font-bold text-xl md:text-2xl text-white leading-tight max-w-[44ch]">
              Because neuroinclusion does not stop at uniform. It sees the person underneath.
            </p>
          </div>
        </section>

        {/* ═══════════ DON'T SEE YOUR SECTOR ═══════════ */}
        <PageCTA
          title="Don't see your sector?"
          description="We work across every industry. Book a discovery call and we will show you how our approach adapts to your context."
        />
      </main>
      <Footer />
    </>
  );
};

export default Industries;
