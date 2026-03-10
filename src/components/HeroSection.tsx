import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Landmark, Heart, GraduationCap, BookOpen, Users, Briefcase, Mic, Shield, Search, Sparkles, Loader2, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Concierge from "@/components/Concierge";
import ClientMarquee from "@/components/ClientMarquee";
import ADHDi from "@/components/ADHDi";
import RecommendedBy from "@/components/RecommendedBy";
import HeroWorkshopSearch from "@/components/HeroWorkshopSearch";
import conciergeTeam from "@/assets/concierge-team.png";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";
import TrustIndicators from "@/components/TrustIndicators";

import heroWorkshop from "@/assets/hero/team-workshop.jpg";
import heroDashboard from "@/assets/hero/analytics-dashboard.jpg";
import heroSpeaker from "@/assets/hero/consultant-speaking.jpg";
import heroHands from "@/assets/hero/hands-collaborating.jpg";

const collageImages = [
  { src: heroWorkshop, alt: "Diverse team in a collaborative workshop", offsetClass: "translate-y-4" },
  { src: heroDashboard, alt: "Analytics dashboard on a desk", offsetClass: "-translate-y-2" },
  { src: heroSpeaker, alt: "Consultant speaking to a group", offsetClass: "-translate-y-2" },
  { src: heroHands, alt: "Hands collaborating over materials", offsetClass: "translate-y-4" },
];

const pathwayKeys = [
  {
    icon: Building2,
    titleKey: "pathways.employers",
    subtitleKey: "pathways.employersSub",
    descKey: "pathways.employersDesc",
    href: "/for-employers",
    accent: "text-accent",
    isRoute: true,
  },
  {
    icon: Landmark,
    titleKey: "pathways.publicSector",
    subtitleKey: "pathways.publicSectorSub",
    descKey: "pathways.publicSectorDesc",
    href: "/for-public-sector",
    accent: "text-accent",
    isRoute: true,
  },
  {
    icon: Heart,
    titleKey: "pathways.parents",
    subtitleKey: "pathways.parentsSub",
    descKey: "pathways.parentsDesc",
    href: "/for-parents",
    accent: "text-red-500",
    isRoute: true,
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
    <section className="bg-background text-foreground" aria-labelledby="hero-heading">
      {/* Main hero: two-column */}
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="lg:flex lg:items-center lg:gap-14">
          {/* Left column */}
          <div className="max-w-2xl lg:flex-1">
            <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
              {t("hero.badge")}
            </p>

            <div className="min-h-[180px] md:min-h-[160px] lg:min-h-[200px]">
              <h1
                id="hero-heading"
                className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.08] transition-all duration-500 ease-in-out"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {messages[currentIndex]}
              </h1>
              <p
                className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground max-w-[58ch] transition-all duration-500 ease-in-out delay-100"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {sublines[currentIndex]}
              </p>
            </div>

            {/* Dot indicators + Rating badge */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex gap-2" role="tablist" aria-label="Hero messages">
                {messages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setIsVisible(false); setTimeout(() => { setCurrentIndex(i); setIsVisible(true); }, 400); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-6' : 'bg-muted-foreground/25 hover:bg-muted-foreground/40'}`}
                    aria-label={`Message ${i + 1}`}
                    aria-selected={i === currentIndex}
                    role="tab"
                  />
                ))}
              </div>

              {/* Rating badge */}
              <div className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/[0.06] px-4 py-2">
                <div className="flex flex-col items-center leading-none">
                  <span className="font-display font-extrabold text-2xl text-accent">9.7</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">/10</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 text-accent fill-current">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.28l-4.77 2.43.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-tight font-medium">
                    Rated <span className="text-accent font-bold">Excellent</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
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
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-border text-foreground font-display font-semibold text-sm hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Users size={16} aria-hidden="true" />
                {t("hero.readTestimonials")}
              </a>
            </div>
          </div>

          {/* Right column: photo collage */}
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:w-[440px] xl:w-[500px]">
            <div className="grid grid-cols-2 gap-3">
              {collageImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  width={240}
                  height={192}
                  className={`rounded-xl shadow-md w-full h-48 object-cover ${img.offsetClass}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : undefined}
                  decoding={i === 0 ? "sync" : "async"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 border-t border-border pt-8"
          aria-label="Key figures"
        >
          {stats.map((stat) => (
            <div key={stat.labelKey}>
              <p className="font-display font-extrabold text-xl md:text-2xl text-accent">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended by — on dark bg */}
      <div className="bg-primary text-primary-foreground">
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
                  className="mt-6 w-full max-w-[200px] object-contain"
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
        <div id="pathways">
          <div className="mx-auto max-w-wide px-6 lg:px-10 border-t border-primary-foreground/8 py-12 lg:py-14">
            <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-8">
              {t("hero.lookingForSupport")}
            </p>
             <div className="grid md:grid-cols-3 gap-5">
               {pathwayKeys.map((p) => (
                 <Link
                   key={p.titleKey}
                   to={p.href}
                   className="group flex flex-col rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-5 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/20 transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
