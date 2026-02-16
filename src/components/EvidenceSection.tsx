import { Quote, ArrowRight, Heart, GraduationCap, Building2, Cpu, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import industryCoaching from "@/assets/industry-coaching.png";
import portrait1 from "@/assets/testimonials/portrait-1.jpg";
import portrait2 from "@/assets/testimonials/portrait-2.jpg";
import portrait3 from "@/assets/testimonials/portrait-3.jpg";

const industries = [
  {
    name: "Healthcare & NHS",
    description: "Clinical teams, burnout, disclosure, and masking in high-pressure settings.",
    href: "/industries/healthcare-nhs",
    icon: Heart,
    accentGradient: "from-rose-500/15 to-rose-600/5",
    iconColor: "text-rose-500",
    borderAccent: "hover:border-rose-400/40",
  },
  {
    name: "Education",
    description: "Universities, academic staff, student services, and governance.",
    href: "/industries/education",
    icon: GraduationCap,
    accentGradient: "from-amber-500/15 to-amber-600/5",
    iconColor: "text-amber-500",
    borderAccent: "hover:border-amber-400/40",
  },
  {
    name: "Public Sector",
    description: "Central and local government, regulators, and policy environments.",
    href: "/industries/public-sector",
    icon: Building2,
    accentGradient: "from-sky-500/15 to-sky-600/5",
    iconColor: "text-sky-500",
    borderAccent: "hover:border-sky-400/40",
  },
  {
    name: "Technology & Digital",
    description: "Tech companies, engineering teams, and high cognitive demand roles.",
    href: "/industries/technology",
    icon: Cpu,
    accentGradient: "from-violet-500/15 to-violet-600/5",
    iconColor: "text-violet-500",
    borderAccent: "hover:border-violet-400/40",
  },
  {
    name: "Financial Services",
    description: "High-regulation, high-pressure, risk-focused environments.",
    href: "/industries/financial-services",
    icon: Landmark,
    accentGradient: "from-emerald-500/15 to-emerald-600/5",
    iconColor: "text-emerald-500",
    borderAccent: "hover:border-emerald-400/40",
  },
];

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
    portrait: portrait1,
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    quote: "This changed how we design services and how our teams work together, not just what they know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
    portrait: portrait2,
    accent: "from-rose-500/20 to-rose-600/5",
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better for neurodivergent people.",
    author: "Chief People Officer",
    org: "Global Technology Company",
    portrait: portrait3,
    accent: "from-violet-500/20 to-violet-600/5",
  },
];

const sectionAudioText = "Industry solutions. We deliver neurodiversity training and consultancy adapted to your sector, including healthcare, education, public sector, technology, and financial services. Clients report remarkable impact on retention, changed service design, and genuine improvements for neurodivergent people.";

const EvidenceSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="evidence" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-14">
          <div className="max-w-2xl">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              Industry Solutions
            </p>
            <h2 id="evidence-heading" className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
              Neurodiversity expertise adapted to your sector
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[55ch]">
              Every industry has its own pressures, language, and systems. We adapt our training, coaching, and consultancy to your context.
            </p>
            {mode === "listen" && (
              <div className="mt-4">
                <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={industryCoaching}
              alt="Coaching statistics showing 230 coaching hours, 117 people coached, and 9.8 out of 10 feedback score"
              className="rounded-xl shadow-md w-full max-w-md"
            />
          </div>
        </div>

        {/* Industry cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              to={ind.href}
              className={`group relative rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${ind.borderAccent}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ind.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`h-1 bg-gradient-to-r ${ind.accentGradient} opacity-60`} />
              <div className="relative p-6">
                <div className="w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ind.icon size={20} className={`${ind.iconColor} transition-colors`} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm text-card-foreground group-hover:text-accent transition-colors mb-1.5">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-display font-bold text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  Explore sector <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/industries"
            className="group relative rounded-xl border-2 border-dashed border-accent/25 bg-accent/[0.04] overflow-hidden flex flex-col items-center justify-center p-6 hover:bg-accent/[0.08] hover:border-accent/50 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight size={18} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-accent mb-1">See all industries</p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">Emergency services, engineering, manufacturing, retail and more</p>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-b border-border mb-14 mt-10" />

        {/* Testimonials - reimagined with portraits */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-card border border-border"
            >
              {/* Faded portrait background */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={t.portrait}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 h-full w-3/5 object-cover object-top opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-700 scale-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/50" />
              </div>

              {/* Accent gradient strip */}
              <div className={`h-1 bg-gradient-to-r ${t.accent}`} />

              <div className="relative p-7 flex flex-col min-h-[220px]">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/30 rounded-l-xl" />
                <Quote size={24} className="text-accent/40 mb-3 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 italic">"{t.quote}"</p>
                <footer className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <img
                    src={t.portrait}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/20 shadow-sm"
                  />
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{t.org}</p>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
