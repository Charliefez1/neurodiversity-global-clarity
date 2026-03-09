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
import { NEURO_COLOURS } from "@/data/neuroColours";

/* ─── All sectors — no hierarchy ─── */

interface Sector {
  name: string;
  tagline: string;
  icon: React.ElementType;
  href?: string;
  color: string;
}

const sectors: Sector[] = [
  { name: "Healthcare & NHS", tagline: "Clinical teams, burnout, disclosure, masking in high-pressure settings.", icon: Heart, href: "/industries/healthcare-nhs", color: "text-rose-500" },
  { name: "Education", tagline: "Universities, academic staff, student services, and governance.", icon: GraduationCap, href: "/industries/education", color: "text-amber-500" },
  { name: "Public Sector & Government", tagline: "Central and local government, regulators, and policy environments.", icon: Building2, href: "/industries/public-sector", color: "text-sky-500" },
  { name: "Technology & Digital", tagline: "Engineering teams, product orgs, and high cognitive demand roles.", icon: Cpu, href: "/industries/technology", color: "text-violet-500" },
  { name: "Financial & Professional Services", tagline: "High-regulation, high-pressure, risk-focused environments.", icon: Landmark, href: "/industries/financial-services", color: "text-emerald-500" },
  { name: "Engineering & Infrastructure", tagline: "Safety-critical roles, structured systems, and frontline teams.", icon: Factory, color: "text-orange-500" },
  { name: "Corporate & Enterprise", tagline: "Cross-functional leadership, HR, and organisational transformation.", icon: BarChart3, color: "text-indigo-500" },
  { name: "Charity & Third Sector", tagline: "Non-profits, social enterprises, and mission-driven organisations.", icon: HandHeart, color: "text-pink-500" },
  { name: "Legal", tagline: "Law firms, regulatory bodies, and high-detail analytical roles.", icon: Gavel, color: "text-teal-500" },
  { name: "Emergency Services", tagline: "Fire, police, ambulance. High-intensity, structured environments.", icon: Flame, color: "text-red-500" },
  { name: "Rail & Transport", tagline: "Operators, control rooms, frontline and safety-critical roles.", icon: Train, color: "text-cyan-500" },
  { name: "Sales & Commercial", tagline: "Performance pressure, emotional regulation, rejection sensitivity.", icon: ShoppingBag, color: "text-lime-500" },
  { name: "Call & Contact Centres", tagline: "Sensory load, scripted communication, high attrition.", icon: Headphones, color: "text-fuchsia-500" },
  { name: "Defence & National Infrastructure", tagline: "Security-conscious, structured leadership and governance.", icon: Shield, color: "text-slate-400" },
  { name: "Retail & Hospitality", tagline: "Customer-facing roles, shift patterns, and sensory environments.", icon: Scale, color: "text-yellow-500" },
];

/* ─── Page ─── */

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
        {/* ── Hero ── */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          <div className="relative mx-auto max-w-wide px-6 lg:px-10 py-20 lg:py-28">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display font-bold text-sm uppercase tracking-[0.2em] text-accent mb-5"
              >
                Industry solutions
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display font-bold text-3xl md:text-4xl lg:text-[2.8rem] tracking-tight leading-[1.08]"
              >
                We adapt to your sector.
                <span className="block text-accent mt-1">Not the other way around.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 text-base lg:text-lg leading-relaxed opacity-75 max-w-[55ch]"
              >
                Every industry has its own pressures, language, and systems. We deliver neurodiversity training, coaching, and consultancy shaped around your context — not a generic programme with your logo on it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="mailto:hello@neurodiversityglobal.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
                >
                  Book a discovery call <ArrowRight size={16} />
                </a>
                <a
                  href="#sectors"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-primary-foreground/20 font-display font-bold text-sm hover:bg-primary-foreground/10 transition-all"
                >
                  Browse sectors
                </a>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: "750+", label: "Organisations supported" },
                { value: "30", label: "Countries reached" },
                { value: "9.7/10", label: "Average session rating" },
                { value: "50+", label: "Accredited workshops" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 text-center"
                >
                  <p className="font-display font-extrabold text-xl text-accent">{stat.value}</p>
                  <p className="text-xs opacity-60 mt-1 font-display">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Sector Grid — all equal ── */}
        <section id="sectors" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Sectors we work across</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                From the NHS to startups. Government to hospitality.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[55ch]">
                Same rigour. Same lived experience. Completely different delivery for your context. Click through to explore sector-specific challenges and solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((sector, i) => {
                const borderColor = NEURO_COLOURS[i % NEURO_COLOURS.length];
                const card = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="group relative rounded-xl border border-border border-l-4 bg-card p-6 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 h-full flex flex-col"
                    style={{ borderLeftColor: borderColor }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <sector.icon size={20} className={sector.color} />
                      </div>
                      {sector.href && (
                        <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      )}
                    </div>
                    <h3 className="font-display font-bold text-sm text-card-foreground group-hover:text-accent transition-colors mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {sector.tagline}
                    </p>
                    {sector.href && (
                      <p className="mt-4 text-xs font-display font-bold text-accent flex items-center gap-1 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        Explore sector <ArrowRight size={12} />
                      </p>
                    )}
                    {!sector.href && (
                      <p className="mt-4 text-xs text-muted-foreground/60 italic">
                        Sector page coming soon
                      </p>
                    )}
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

        {/* ── Approach strip ── */}
        <section className="bg-accent text-accent-foreground py-14 lg:py-16">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Users, title: "Lived experience first", description: "Our team is neurodivergent. We don't teach from textbooks." },
                { icon: CheckCircle2, title: "Sector-adapted", description: "Same evidence base, completely different delivery for your context." },
                { icon: BarChart3, title: "Measured outcomes", description: "We track impact, not just attendance. 9.7/10 average rating." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed max-w-[30ch]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight">
                Don't see your sector?
              </h2>
              <p className="mt-4 opacity-75 text-base leading-relaxed">
                We work across every industry. Book a discovery call and we'll show you how our approach adapts to your context.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:hello@neurodiversityglobal.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
                >
                  Book a discovery call <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Industries;
