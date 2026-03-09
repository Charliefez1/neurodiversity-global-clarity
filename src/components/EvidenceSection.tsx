import { ArrowRight, Heart, GraduationCap, Building2, Cpu, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { NEURO_COLOURS } from "@/data/neuroColours";

const industries = [
  {
    name: "Healthcare & NHS",
    description: "Clinical teams, burnout, disclosure, and masking in high-pressure settings.",
    href: "/industries/healthcare-nhs",
    icon: Heart,
  },
  {
    name: "Education",
    description: "Universities, academic staff, student services, and governance.",
    href: "/industries/education",
    icon: GraduationCap,
  },
  {
    name: "Public Sector",
    description: "Central and local government, regulators, and policy environments.",
    href: "/industries/public-sector",
    icon: Building2,
  },
  {
    name: "Technology & Digital",
    description: "Tech companies, engineering teams, and high cognitive demand roles.",
    href: "/industries/technology",
    icon: Cpu,
  },
  {
    name: "Financial Services",
    description: "High-regulation, high-pressure, risk-focused environments.",
    href: "/industries/financial-services",
    icon: Landmark,
  },
];

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
    portrait: portrait1,
  },
  {
    quote: "This changed how we design services and how our teams work together, not just what they know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
    portrait: portrait2,
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better for neurodivergent people.",
    author: "Chief People Officer",
    org: "Global Technology Company",
    portrait: portrait3,
  },
];

const sectionAudioText = "Industry solutions. We deliver neurodiversity training and consultancy adapted to your sector, including healthcare, education, public sector, technology, and financial services. Clients report remarkable impact on retention, changed service design, and genuine improvements for neurodivergent people.";

const EvidenceSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="evidence" className="relative py-20 lg:py-28" aria-labelledby="evidence-heading">
      <div className="relative z-10 mx-auto max-w-wide px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Industry Solutions
          </p>
          <h2 id="evidence-heading" className="font-display font-bold text-lg md:text-xl leading-tight text-white">
            Neurodiversity expertise adapted to your sector
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-[55ch]">
            Every industry has its own pressures, language, and systems. We adapt our training, coaching, and consultancy to your context.
          </p>
          {mode === "listen" && (
            <div className="mt-4">
              <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
            </div>
          )}
        </div>

        {/* Industry cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {industries.map((ind, idx) => (
            <Link
              key={ind.name}
              to={ind.href}
              className="group rounded-xl border border-white/15 border-l-4 bg-white/10 backdrop-blur-md p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ borderLeftColor: NEURO_COLOURS[idx % NEURO_COLOURS.length] }}
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <ind.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-sm text-white group-hover:text-accent transition-colors mb-2">
                {ind.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{ind.description}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-display font-bold text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                Explore sector <ArrowRight size={13} />
              </div>
            </Link>
          ))}
          <Link
            to="/industries"
            className="group rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center p-7 lg:p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight size={18} className="text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-accent mb-1">See all industries</p>
            <p className="text-xs text-white/50 text-center leading-relaxed">Emergency services, engineering, manufacturing, retail and more</p>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-b border-white/10 mb-14 mt-10" />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="group rounded-xl border border-white/15 bg-white/10 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-7 flex flex-col min-h-[220px]">
                <Quote size={24} className="text-accent/40 mb-3 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/80 flex-1 italic">"{t.quote}"</p>
                <footer className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={t.portrait}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/20 shadow-sm"
                  />
                  <div>
                    <p className="font-display font-semibold text-sm text-white">{t.author}</p>
                    <p className="text-xs text-white/50 mt-0.5">{t.org}</p>
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
