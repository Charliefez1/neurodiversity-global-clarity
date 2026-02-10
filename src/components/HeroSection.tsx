import { ArrowRight, GraduationCap, BookOpen, Briefcase, Building2, Shield, Users, Mic, Heart, Landmark } from "lucide-react";
import Concierge from "@/components/Concierge";
import ADHDi from "@/components/ADHDi";
import RecommendedBy from "@/components/RecommendedBy";
import ClientMarquee from "@/components/ClientMarquee";
import conciergeTeam from "@/assets/concierge-team.png";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/motion/FadeIn";

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
    <section className="bg-background text-foreground overflow-hidden" aria-labelledby="hero-heading">
      {/* ── Main Hero ── */}
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-20 lg:pt-32 pb-6">
        <div className="lg:flex lg:items-start lg:gap-14">
          <div className="max-w-3xl lg:flex-1">
            <FadeIn delay={0.1} direction="none">
              <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-5">
                Neurodiversity in work
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1
                id="hero-heading"
                className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-foreground"
              >
                Training. Strategy.{" "}
                <span className="text-accent">Workplace change.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[52ch]">
                UK-based, neurodivergent-led consultancy helping organisations improve retention, reduce risk, and unlock the performance of every mind.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-accent-foreground font-display font-bold text-base shadow-lg shadow-accent/15 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 transition-all"
                >
                  Book a discovery call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a
                  href="/workshops"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-display font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  View training catalogue
                </a>
                <ADHDi />
              </div>
            </FadeIn>
          </div>

          {/* Training Card — floating, offset */}
          <FadeIn delay={0.6} direction="right" className="mt-12 lg:mt-4 lg:flex-shrink-0 lg:w-[380px] xl:w-[420px]">
            <div className="rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-xl shadow-foreground/[0.03] rotate-0 lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={22} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-3xl text-accent leading-none">50+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Accredited sessions</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Expert-led training across 6 categories. CPD-accredited and tailored to your sector.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {trainingCategories.map((cat) => (
                  <a
                    key={cat.label}
                    href="/workshops"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <cat.icon size={12} className="text-accent shrink-0" aria-hidden="true" />
                    {cat.label}
                  </a>
                ))}
              </div>

              <a
                href="/workshops"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all"
              >
                Browse catalogue
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Stats — big, dramatic numbers */}
        <StaggerContainer className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.12}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <CountUp
                value={stat.value}
                className="font-display font-black text-4xl md:text-5xl text-foreground block"
              />
              <p className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Client logos — full bleed */}
      <div className="py-10 lg:py-14 border-y border-border/50">
        <ClientMarquee embedded />
      </div>

      {/* Recommended by */}
      <RecommendedBy />

      {/* ── Tell us why you're here ── */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-16 lg:py-24 relative">
          <div className="lg:flex lg:gap-16 lg:items-center">
            <FadeIn direction="left" className="lg:w-[380px] shrink-0 mb-10 lg:mb-0">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight text-foreground">
                Tell us why{" "}
                <span className="text-accent">you're here</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
                Describe what you need and we'll point you to the right training, service, or next step.
              </p>
              <img
                src={conciergeTeam}
                alt="Our concierge team ready to help"
                className="mt-8 w-full max-w-[150px] object-contain"
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex-1 min-w-0">
              <Concierge />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Pathway cards — staggered grid */}
      <div id="pathways" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-16 lg:py-24">
          <FadeIn>
            <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-3">
              Choose your path
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-12">
              I'm looking for support as...
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {pathways.map((p) => (
              <StaggerItem key={p.title}>
                <a
                  href={p.href}
                  className="group flex flex-col rounded-3xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-8 hover:bg-primary-foreground/[0.12] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                    <p.icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl leading-tight mb-1">{p.title}</h3>
                  <p className="text-xs text-primary-foreground/50 mb-3">{p.subtitle}</p>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed flex-1">{p.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-accent text-sm font-bold group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
