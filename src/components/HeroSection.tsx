import { ArrowRight, Building2, Landmark, Heart, GraduationCap, BookOpen, Users, Briefcase, Mic, Shield } from "lucide-react";
import Concierge from "@/components/Concierge";
import ClientMarquee from "@/components/ClientMarquee";
import ADHDi from "@/components/ADHDi";
import conciergeTeam from "@/assets/concierge-team.png";

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

const trainingCategories = [
  { label: "Core Awareness", icon: BookOpen },
  { label: "Role-Specific", icon: Briefcase },
  { label: "Industry", icon: Building2 },
  { label: "Strategy & Leadership", icon: Shield },
  { label: "Lived Experience", icon: Users },
  { label: "Keynotes & Events", icon: Mic },
];

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 lg:pt-24">
        {/* Headline + Training Card */}
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="max-w-3xl lg:flex-1">
            <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-4">
              Neurodiversity in work. Designed as infrastructure.
            </p>
            <h1
              id="hero-heading"
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.08]"
            >
              Neurodiversity training, strategy, and workplace consultancy.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-80 max-w-[58ch]">
              UK-based, neurodivergent-led consultancy delivering accredited neurodiversity training, strategic redesign, and workforce capability building. Helping organisations improve retention, reduce risk, and unlock performance.
            </p>

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
              <ADHDi />
            </div>
          </div>

          {/* Training Card */}
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:w-[380px] xl:w-[420px]">
            <div className="rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.05] p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl text-accent leading-none">50+</p>
                  <p className="text-xs opacity-60 mt-0.5">Accredited sessions</p>
                </div>
              </div>

              <p className="text-sm opacity-70 leading-relaxed mb-5">
                Expert-led training across 6 categories, from 60-minute awareness sessions to full-day strategic programmes. CPD-accredited and tailored to your sector.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {trainingCategories.map((cat) => (
                  <a
                    key={cat.label}
                    href="/workshops"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary-foreground/12 bg-primary-foreground/[0.04] text-xs text-primary-foreground/80 hover:bg-primary-foreground/[0.1] transition-colors"
                  >
                    <cat.icon size={12} className="text-accent shrink-0" aria-hidden="true" />
                    {cat.label}
                  </a>
                ))}
              </div>

              <a
                href="/workshops"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
              >
                Browse training catalogue
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <p className="mt-4 text-xs opacity-40 text-center">
                30,000+ people trained · 750+ organisations
              </p>
            </div>
          </div>
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

      {/* Client logos — full width */}
      <div className="mt-10 pb-14 lg:pb-20">
        <ClientMarquee embedded />
      </div>

      {/* ── Tell us why you're here ── */}
      <div className="border-t border-primary-foreground/8">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-12 lg:py-16">
          <div className="lg:flex lg:gap-14">
            <div className="lg:w-[340px] shrink-0 mb-8 lg:mb-0">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">
                Tell us why you're here
              </h2>
              <p className="mt-3 text-sm opacity-60 leading-relaxed max-w-[38ch]">
                Describe what you need and we'll point you to the right training, service, or next step.
              </p>
              <img
                src={conciergeTeam}
                alt="Our concierge team ready to help"
                className="mt-6 w-full max-w-[150px] object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Concierge />
            </div>
          </div>
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
