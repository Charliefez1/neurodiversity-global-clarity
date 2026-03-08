import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, GraduationCap, Building2, Cpu, Landmark,
  Flame, Train, Shield, ShoppingBag, Headphones, Factory, BarChart3,
  ArrowRight, ChevronRight, Users, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import industryCoaching from "@/assets/industry-coaching.png";
import portrait1 from "@/assets/testimonials/portrait-1.jpg";
import portrait2 from "@/assets/testimonials/portrait-2.jpg";
import portrait3 from "@/assets/testimonials/portrait-3.jpg";

/* ─── Data ─── */

interface Industry {
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  href?: string;
  challenges: string[];
  stat?: { value: string; label: string };
  color: string;
  gradient: string;
}

const coreFocus: Industry[] = [
  {
    name: "Healthcare & NHS",
    tagline: "Where burnout hides behind dedication",
    description: "NHS Trusts, Integrated Care Systems, clinical and non-clinical teams. High-pressure environments where disclosure, masking, and burnout intersect with patient safety.",
    icon: Heart,
    href: "/industries/healthcare-nhs",
    challenges: ["Staff disclosure anxiety", "Shift-based adjustments", "Clinical masking", "Burnout misdiagnosis"],
    stat: { value: "47%", label: "of NHS staff report workplace stress" },
    color: "text-rose-500",
    gradient: "from-rose-500/20 via-rose-500/5 to-transparent",
  },
  {
    name: "Education",
    tagline: "Teaching inclusion while struggling with it internally",
    description: "Universities, academic staff, professional services, student-facing teams, and leadership governance. Where the gap between policy and practice is widest.",
    icon: GraduationCap,
    href: "/industries/education",
    challenges: ["Assessment inflexibility", "Academic masking", "Student support gaps", "Staff disclosure barriers"],
    stat: { value: "3×", label: "higher neurodivergent dropout rates" },
    color: "text-amber-500",
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
  },
  {
    name: "Public Sector",
    tagline: "Policy-heavy. Risk-aware. Slow to change.",
    description: "Central government, arms-length bodies, regulators, and local authorities. Environments where compliance culture can inadvertently exclude the people it aims to protect.",
    icon: Building2,
    href: "/industries/public-sector",
    challenges: ["Rigid processes", "Assessment backlogs", "Siloed support", "Invisible talent loss"],
    stat: { value: "82%", label: "say adjustments took too long" },
    color: "text-sky-500",
    gradient: "from-sky-500/20 via-sky-500/5 to-transparent",
  },
  {
    name: "Technology & Digital",
    tagline: "High cognitive demand. Low cognitive support.",
    description: "Tech companies, engineering teams, data and innovation functions. Environments that attract neurodivergent talent, then fail to retain it.",
    icon: Cpu,
    href: "/industries/technology",
    challenges: ["Open-plan sensory overload", "Context-switching fatigue", "Imposter syndrome", "Unstructured onboarding"],
    stat: { value: "2×", label: "neurodivergent representation in tech" },
    color: "text-violet-500",
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
  },
];

const secondaryIndustries: { name: string; icon: React.ElementType; href?: string; description: string }[] = [
  { name: "Financial & Professional Services", icon: Landmark, href: "/industries/financial-services", description: "High-regulation, high-pressure, risk-focused roles." },
  { name: "Engineering & Infrastructure", icon: Factory, description: "Safety-critical roles and structured systems." },
  { name: "Corporate & Enterprise", icon: BarChart3, description: "Cross-functional leadership, HR, and transformation." },
  { name: "Emergency Services", icon: Flame, description: "Fire, police, ambulance. High-intensity, structured environments." },
  { name: "Rail & Transport", icon: Train, description: "Operators, control rooms, frontline roles." },
  { name: "Sales & Commercial", icon: ShoppingBag, description: "Performance pressure, emotional regulation, rejection sensitivity." },
  { name: "Call & Contact Centres", icon: Headphones, description: "Sensory load, scripted communication, high attrition." },
  { name: "Defence & National Infrastructure", icon: Shield, description: "Security-conscious, structured leadership and governance." },
];

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
    portrait: portrait1,
  },
  {
    quote: "This changed how we design services, not just what we know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
    portrait: portrait2,
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better.",
    author: "Chief People Officer",
    org: "Global Technology Company",
    portrait: portrait3,
  },
];

/* ─── Components ─── */

const CoreIndustryCard = ({ industry, isActive, onClick }: { industry: Industry; isActive: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`group relative text-left w-full rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
      isActive
        ? "border-accent bg-primary text-primary-foreground shadow-xl shadow-accent/15 scale-[1.01]"
        : "border-border bg-card text-card-foreground hover:border-accent/40 hover:shadow-lg"
    }`}
  >
    {/* Gradient accent */}
    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 ${isActive ? "opacity-100" : "group-hover:opacity-60"} transition-opacity duration-500`} />
    <div className={`absolute top-0 left-0 w-1.5 h-full ${isActive ? "bg-accent" : "bg-transparent group-hover:bg-accent/30"} transition-colors duration-300 rounded-l-2xl`} />

    <div className="relative p-6 lg:p-8">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-accent/20 scale-110" : "bg-muted group-hover:bg-accent/10"
        }`}>
          <industry.icon size={24} className={`${isActive ? "text-accent" : industry.color} transition-colors`} />
        </div>
        <ChevronRight size={18} className={`transition-all duration-300 ${isActive ? "text-accent rotate-90" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`} />
      </div>

      <h3 className="font-display font-bold text-base mb-1">{industry.name}</h3>
      <p className={`font-display text-sm italic ${isActive ? "text-accent" : "text-muted-foreground"} transition-colors`}>
        {industry.tagline}
      </p>
    </div>
  </button>
);

const CoreIndustryDetail = ({ industry }: { industry: Industry }) => (
  <motion.div
    key={industry.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10 shadow-xl"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 ${industry.color} text-xs font-display font-bold uppercase tracking-wider mb-5`}>
          <industry.icon size={14} />
          {industry.name}
        </div>
        <p className="text-base leading-relaxed opacity-85 mb-6">{industry.description}</p>

        {industry.stat && (
          <div className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-5 mb-6">
            <p className="font-display font-extrabold text-2xl text-accent">{industry.stat.value}</p>
            <p className="text-sm opacity-70 mt-1">{industry.stat.label}</p>
          </div>
        )}

        {industry.href && (
          <Link
            to={industry.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
          >
            Explore {industry.name} <ArrowRight size={16} />
          </Link>
        )}
      </div>

      <div>
        <p className="font-display font-bold text-sm uppercase tracking-wider text-accent mb-4">Common challenges</p>
        <div className="space-y-3">
          {industry.challenges.map((challenge, i) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-start gap-3 rounded-lg bg-primary-foreground/[0.05] border border-primary-foreground/8 p-4"
            >
              <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm opacity-85">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Page ─── */

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = coreFocus[activeIndex];

  return (
    <>
      <SEOHead
        title="Industry Solutions"
        description="Neurodiversity training and consultancy across healthcare, education, public sector, technology, and more. Sector-adapted programmes that change practice."
        path="/industries"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Industries", url: "https://www.neurodiversityglobal.com/industries" },
      ])} />
      <JsonLd data={serviceSchema(
        "Industry-Specific Neurodiversity Solutions",
        "Sector-adapted neurodiversity training, coaching, and consultancy for healthcare, education, public sector, technology, and specialist industries.",
        "https://www.neurodiversityglobal.com/industries"
      )} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          <div className="relative mx-auto max-w-wide px-6 lg:px-10 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
                  Every sector has its own
                  <span className="block text-accent mt-1">pressure points.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 text-base lg:text-lg leading-relaxed opacity-75 max-w-[50ch]"
                >
                  We don't sell generic inclusion. We adapt our training, coaching, and consultancy to your industry — its language, its risks, and its reality.
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
                    Explore sectors
                  </a>
                </motion.div>
              </div>

              {/* Stats cluster */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                {[
                  { value: "750+", label: "Organisations supported", delay: 0.5 },
                  { value: "30", label: "Countries reached", delay: 0.6 },
                  { value: "9.7/10", label: "Average session rating", delay: 0.7 },
                  { value: "50+", label: "Accredited workshops", delay: 0.8 },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: stat.delay }}
                    className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6 text-center hover:bg-primary-foreground/[0.1] transition-colors"
                  >
                    <p className="font-display font-extrabold text-2xl text-accent">{stat.value}</p>
                    <p className="text-xs opacity-60 mt-1.5 font-display">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Core Focus: Interactive Explorer ── */}
        <section id="sectors" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Core focus</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                Four sectors where our impact runs deepest
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[55ch]">
                These are the industries where our lived experience, delivery history, and strongest client relationships converge. Click any sector to explore.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
              {/* Selector cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {coreFocus.map((ind, i) => (
                  <CoreIndustryCard
                    key={ind.name}
                    industry={ind}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>

              {/* Detail panel */}
              <AnimatePresence mode="wait">
                <CoreIndustryDetail industry={activeIndustry} />
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">What clients say</p>
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
                Results that speak for themselves
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-500"
                >
                  {/* Portrait background */}
                  <div className="absolute inset-0 pointer-events-none">
                    <img src={t.portrait} alt="" aria-hidden="true" className="absolute right-0 bottom-0 h-full w-3/5 object-cover object-top opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/50" />
                  </div>

                  <div className="h-1 bg-gradient-to-r from-accent/60 to-accent/10" />

                  <div className="relative p-7 flex flex-col min-h-[220px]">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent/25 rounded-l-2xl" />
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1 italic">"{t.quote}"</p>
                    <footer className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                      <img src={t.portrait} alt={t.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/20 shadow-sm" />
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">{t.author}</p>
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{t.org}</p>
                      </div>
                    </footer>
                  </div>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Beyond Core: Expanded Sectors ── */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Beyond core</p>
                <h2 className="font-display font-bold text-lg md:text-xl leading-tight mb-4">
                  We work across every sector
                </h2>
                <p className="text-base opacity-70 leading-relaxed mb-6">
                  Our approach adapts. The same rigour, lived experience, and evidence base — applied to your industry's specific challenges.
                </p>
                <img
                  src={industryCoaching}
                  alt="Coaching impact statistics"
                  className="rounded-xl shadow-md w-full max-w-sm opacity-80"
                  loading="lazy"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {secondaryIndustries.map((ind, i) => {
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="group rounded-xl bg-primary-foreground/[0.05] border border-primary-foreground/10 p-6 hover:bg-primary-foreground/[0.1] hover:border-accent/30 transition-all duration-300 h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <ind.icon size={20} className="text-accent" />
                      </div>
                      <h3 className="font-display font-bold text-sm mb-1.5 group-hover:text-accent transition-colors">{ind.name}</h3>
                      <p className="text-sm opacity-60 leading-relaxed">{ind.description}</p>
                      {ind.href && (
                        <p className="mt-3 text-xs font-display font-bold text-accent flex items-center gap-1 translate-x-0 group-hover:translate-x-1 transition-transform">
                          View details <ArrowRight size={12} />
                        </p>
                      )}
                    </motion.div>
                  );

                  if (ind.href) {
                    return <Link key={ind.name} to={ind.href} className="block">{content}</Link>;
                  }
                  return <div key={ind.name}>{content}</div>;
                })}
              </div>
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

        

        {/* ── Final CTA ── */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight">
                Don't see your sector?
              </h2>
              <p className="mt-4 opacity-75 text-base leading-relaxed">
                We work across industries. Book a discovery call and we'll show you how our approach adapts to your context.
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
