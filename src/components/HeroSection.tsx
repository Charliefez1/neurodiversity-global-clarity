import { ArrowRight, Building2, Landmark, Heart } from "lucide-react";

const pathways = [
  {
    icon: Building2,
    title: "Employers",
    description: "Build neuroinclusive workplaces that retain talent, reduce risk, and improve performance.",
    href: "#services",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Meet your duties, improve outcomes, and design services that work for neurodivergent citizens.",
    href: "#services",
  },
  {
    icon: Heart,
    title: "Parents",
    description: "Navigate systems, access support, and advocate effectively for your neurodivergent child.",
    href: "#services",
  },
];

const stats = [
  { value: "15+", label: "Years of specialist experience" },
  { value: "500+", label: "Organisations supported" },
  { value: "30+", label: "Countries reached" },
  { value: "50,000+", label: "People trained" },
];

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
        {/* Headline */}
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Neurodiversity changes how organisations think, lead, and perform.
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-85 max-w-content">
            We help organisations move beyond awareness to build systems, cultures, and leadership that include neurodivergent people — and deliver measurable results.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-semibold text-base hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Book a discovery call
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-primary-foreground/30 text-primary-foreground font-display font-semibold text-base hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View training catalogue
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/15 pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-3xl md:text-4xl text-accent">{stat.value}</p>
              <p className="mt-1 text-sm opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pathway cards */}
      <div id="pathways" className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest opacity-60 mb-8">
            Find your pathway
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group block rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-8 hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <p.icon size={28} className="text-accent mb-4" aria-hidden="true" />
                <h2 className="font-display font-bold text-xl mb-2">{p.title}</h2>
                <p className="text-sm opacity-75 leading-relaxed">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
