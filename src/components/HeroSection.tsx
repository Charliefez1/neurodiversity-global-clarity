import { ArrowRight, Building2, Landmark, Heart } from "lucide-react";


const pathways = [
  {
    icon: Building2,
    title: "Employers",
    subtitle: "Private & corporate",
    description: "Reduce risk, retain talent, and build workplaces where neurodivergent employees perform.",
    href: "#services",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    subtitle: "Government & NHS",
    description: "Meet legal duties, redesign services, and improve outcomes for neurodivergent citizens and staff.",
    href: "#services",
  },
  {
    icon: Heart,
    title: "Parents",
    subtitle: "Families & carers",
    description: "Navigate systems, understand rights, and advocate effectively for your neurodivergent child.",
    href: "#services",
  },
];

const stats = [
  { value: "20+", label: "Years of specialist delivery" },
  { value: "750+", label: "Organisations supported" },
  { value: "1,000+", label: "Projects delivered" },
  { value: "30,000+", label: "People trained" },
];

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 pb-14 lg:pt-24 lg:pb-20">
        {/* Headline + Image */}
        <div className="lg:flex lg:items-center lg:gap-12">
        <div className="max-w-3xl lg:flex-1">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-4">
            Neurodiversity in work. Designed as infrastructure.
          </p>
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.08]"
          >
            We redesign the systems that decide who succeeds, who burns out, and who leaves.
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-80 max-w-[58ch]">
            Neurodiversity Global is a UK-based, neurodivergent-led consultancy specialising in strategic redesign, workforce capability building, and digital enablement — helping organisations improve retention, reduce risk, and unlock performance that traditional systems leave behind.
          </p>
        </div>

        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-accent text-accent-foreground font-display font-bold text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Book a discovery call
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="/workshops"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View training catalogue
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 border-t border-primary-foreground/12 pt-8"
          aria-label="Key figures"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-2xl md:text-3xl text-accent">{stat.value}</p>
              <p className="mt-0.5 text-sm opacity-65 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pathway cards */}
      <div id="pathways" className="border-t border-primary-foreground/8">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-12 lg:py-14">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] opacity-50 mb-8">
            I'm looking for support as
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pathways.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-lg border border-primary-foreground/12 bg-primary-foreground/[0.04] p-7 hover:bg-primary-foreground/[0.08] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex items-center gap-3 mb-3">
                  <p.icon size={22} className="text-accent shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="font-display font-bold text-lg leading-tight">{p.title}</h2>
                    <p className="text-xs opacity-50 mt-0.5">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 leading-relaxed flex-1">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={14} aria-hidden="true" />
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
