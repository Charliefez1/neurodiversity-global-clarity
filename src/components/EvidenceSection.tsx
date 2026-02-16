import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import industryCoaching from "@/assets/industry-coaching.png";

const industries = [
  {
    name: "Healthcare & NHS",
    description: "Clinical teams, burnout, disclosure, and masking in high-pressure settings.",
    href: "/industries/healthcare-nhs",
  },
  {
    name: "Education",
    description: "Universities, academic staff, student services, and governance.",
    href: "/industries/education",
  },
  {
    name: "Public Sector & Government",
    description: "Central and local government, regulators, and policy environments.",
    href: "/industries/public-sector",
  },
  {
    name: "Technology & Digital",
    description: "Tech companies, engineering teams, and high cognitive demand roles.",
    href: "/industries/technology",
  },
  {
    name: "Financial Services",
    description: "High-regulation, high-pressure, risk-focused environments.",
    href: "/industries/financial-services",
  },
];

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
  },
  {
    quote: "This changed how we design services and how our teams work together, not just what they know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better for neurodivergent people.",
    author: "Chief People Officer",
    org: "Global Technology Company",
  },
];

const sectionAudioText = "Industry solutions. We deliver neurodiversity training and consultancy adapted to your sector, including healthcare, education, public sector, technology, and financial services. Clients report remarkable impact on retention, changed service design, and genuine improvements for neurodivergent people.";

const EvidenceSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="evidence" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
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
              className="group rounded-lg border border-border bg-card p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <h3 className="font-display font-bold text-sm text-card-foreground group-hover:text-accent transition-colors mb-2">
                {ind.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
              <p className="mt-3 text-xs font-display font-bold text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View sector detail <ArrowRight size={12} />
              </p>
            </Link>
          ))}
          {/* "See all" card */}
          <Link
            to="/industries"
            className="group rounded-lg border-2 border-dashed border-accent/30 bg-accent/5 p-6 flex flex-col items-center justify-center hover:bg-accent/10 hover:border-accent/50 transition-all"
          >
            <p className="font-display font-bold text-sm text-accent mb-1">See all industries</p>
            <p className="text-xs text-muted-foreground text-center">Emergency services, engineering, manufacturing, retail, and more</p>
            <ArrowRight size={16} className="text-accent mt-3" />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-b border-border mb-14 pb-4" />

        {/* Testimonials */}
        {mode === "scan" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-lg bg-card border border-border p-5">
                <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                <p className="text-xs text-muted-foreground/70 mt-2">{t.author}, {t.org}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-lg bg-card border border-border p-7 flex flex-col"
              >
                <Quote size={20} className="text-accent mb-3 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">{t.quote}</p>
                <footer className="mt-5 pt-4 border-t border-border">
                  <p className="font-display font-semibold text-sm text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{t.org}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EvidenceSection;
