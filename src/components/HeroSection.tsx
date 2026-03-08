import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Building2, Landmark, Heart, GraduationCap, BookOpen, Users, Briefcase, Mic, Shield, Search, Sparkles, Loader2, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Concierge from "@/components/Concierge";
import ClientMarquee from "@/components/ClientMarquee";
import ADHDi from "@/components/ADHDi";
import RecommendedBy from "@/components/RecommendedBy";
import HeroWorkshopSearch from "@/components/HeroWorkshopSearch";
import conciergeTeam from "@/assets/concierge-team.png";
import TrustIndicators from "@/components/TrustIndicators";

const pathwayKeys = [
  {
    icon: Building2,
    titleKey: "pathways.employers",
    subtitleKey: "pathways.employersSub",
    descKey: "pathways.employersDesc",
    href: "#services",
    accent: "text-accent",
  },
  {
    icon: Landmark,
    titleKey: "pathways.publicSector",
    subtitleKey: "pathways.publicSectorSub",
    descKey: "pathways.publicSectorDesc",
    href: "#services",
    accent: "text-accent",
  },
  {
    icon: Heart,
    titleKey: "pathways.parents",
    subtitleKey: "pathways.parentsSub",
    descKey: "pathways.parentsDesc",
    href: "#services",
    accent: "text-red-500",
  },
];

const stats = [
  { value: "20+", labelKey: "stats.years" },
  { value: "750+", labelKey: "stats.orgs" },
  { value: "1,000+", labelKey: "stats.projects" },
  { value: "30,000+", labelKey: "stats.trained" },
];

const trainingCategoryKeys = [
  { labelKey: "training.coreAwareness", icon: BookOpen, href: "/workshops#core" },
  { labelKey: "training.champions", icon: Shield, href: "/workshops#core" },
  { labelKey: "training.managers", icon: Briefcase, href: "/workshops#core" },
  { labelKey: "training.leaders", icon: Users, href: "/workshops#core" },
  { labelKey: "training.executive", icon: Building2, href: "/workshops#core" },
  { labelKey: "training.hr", icon: Heart, href: "/workshops#role-function" },
  { labelKey: "training.ld", icon: GraduationCap, href: "/workshops#role-function" },
  { labelKey: "training.industry", icon: Building2, href: "/workshops#industry" },
  { labelKey: "training.strategyLeadership", icon: Shield, href: "/workshops#strategy" },
  { labelKey: "training.keynotes", icon: Mic, href: "/workshops#keynotes" },
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = t("hero.messages", { returnObjects: true }) as string[];
  const sublines = t("hero.sublines", { returnObjects: true }) as string[];

  const rotateMessage = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setIsVisible(true);
    }, 600);
  }, [messages.length]);

  useEffect(() => {
    const interval = setInterval(rotateMessage, 10000);
    return () => clearInterval(interval);
  }, [rotateMessage]);

  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 lg:pt-24">
        {/* Headline + Training Card */}
        <div className="lg:flex lg:items-end lg:gap-12">
          <div className="max-w-3xl lg:flex-1">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              {t("hero.badge")}
            </p>
            <div className="min-h-[220px] md:min-h-[200px] lg:min-h-[240px]">
              <h1
                id="hero-heading"
                className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.08] transition-all duration-500 ease-in-out"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {messages[currentIndex]}
              </h1>
              <p
                className="mt-6 text-sm md:text-base leading-relaxed text-primary-foreground/85 max-w-[58ch] transition-all duration-500 ease-in-out delay-100"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {sublines[currentIndex]}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6" role="tablist" aria-label="Hero messages">
              {messages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsVisible(false); setTimeout(() => { setCurrentIndex(i); setIsVisible(true); }, 400); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-6' : 'bg-primary-foreground/25 hover:bg-primary-foreground/40'}`}
                  aria-label={`Message ${i + 1}`}
                  aria-selected={i === currentIndex}
                  role="tab"
                />
              ))}
            </div>

            {/* Discovery CTA */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {t("hero.bookDiscovery")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Users size={16} aria-hidden="true" />
                {t("hero.readTestimonials")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Mail size={16} aria-hidden="true" />
                {t("hero.contactUs")}
              </a>
            </div>

            {/* Ask Rich explainer + CTA */}
            <div className="mt-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                <strong className="text-[hsl(20,100%,55%)] font-display font-bold">{t("hero.askRichTitle")}</strong>{" "}
                {t("hero.askRichDesc")}
              </p>
              <a
                href="/ask-rich"
                className="mt-4 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[hsl(20,100%,55%)] text-white font-display font-bold text-sm shadow-lg shadow-[hsl(20,100%,55%)]/30 hover:shadow-xl hover:shadow-[hsl(20,100%,55%)]/45 hover:scale-[1.02] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(20,100%,55%)]"
              >
                <Sparkles size={16} aria-hidden="true" />
                {t("hero.askRichCta")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
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
                  <p className="font-display font-extrabold text-xl text-accent leading-none">50+</p>
                  <p className="text-xs opacity-60 mt-0.5">{t("hero.accreditedSessions")}</p>
                </div>
              </div>

              <p className="text-sm text-primary-foreground/75 leading-relaxed mb-5">
                {t("hero.trainingCardDesc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {trainingCategoryKeys.map((cat) => (
                  <a
                    key={cat.labelKey}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary-foreground/12 bg-primary-foreground/[0.04] text-xs text-primary-foreground/80 hover:bg-primary-foreground/[0.18] transition-colors"
                  >
                    <cat.icon size={12} className="text-accent shrink-0" aria-hidden="true" />
                    {t(cat.labelKey)}
                  </a>
                ))}
              </div>

              <a
                href="/workshops"
                className="flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
              >
                {t("hero.browseCatalogue")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <p className="mt-4 text-xs opacity-40 text-center">
                {t("hero.peopleTrained")}
              </p>
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <TrustIndicators />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 border-t border-primary-foreground/12 pt-8"
          aria-label="Key figures"
        >
          {stats.map((stat) => (
            <div key={stat.labelKey}>
              <p className="font-display font-extrabold text-xl md:text-2xl text-accent">{stat.value}</p>
              <p className="mt-0.5 text-xs text-primary-foreground/70 leading-snug">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Recommended by */}
      <RecommendedBy />

      {/* Tell us why you're here + Workshop Finder */}
      <div>
        <div className="mx-auto max-w-wide px-6 lg:px-10 border-t border-primary-foreground/8 py-12 lg:py-16">
          <div className="lg:flex lg:gap-14">
            <div className="lg:w-[340px] shrink-0 mb-8 lg:mb-0">
              <h2 className="font-display font-bold text-lg md:text-xl leading-tight">
                {t("hero.tellUsTitle")}
              </h2>
              <p className="mt-3 text-sm opacity-60 leading-relaxed max-w-[38ch]">
                {t("hero.tellUsDesc")}
              </p>
              <img
                src={conciergeTeam}
                alt="Our concierge team ready to help"
                className="mt-6 w-full max-w-[280px] object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-8">
              <Concierge />
              <HeroWorkshopSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Pathway cards */}
      <div id="pathways" className="border-t border-primary-foreground/8">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-12 lg:py-14">
          <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-8">
            {t("hero.lookingForSupport")}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pathwayKeys.map((p) => (
              <a
                key={p.titleKey}
                href={p.href}
                className="group flex flex-col rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-7 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/20 transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex items-center gap-3 mb-3">
                  <p.icon size={20} className={`${p.accent} shrink-0`} aria-hidden="true" />
                  <div>
                    <h2 className="font-display font-bold text-base leading-tight">{t(p.titleKey)}</h2>
                    <p className="text-xs opacity-50 mt-0.5">{t(p.subtitleKey)}</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed flex-1">{t(p.descKey)}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                  {t("hero.learnMore")} <ArrowRight size={14} aria-hidden="true" />
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
