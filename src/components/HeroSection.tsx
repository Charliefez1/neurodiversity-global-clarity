import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Building2, Landmark, Heart, GraduationCap, BookOpen, Users, Briefcase, Mic, Shield, Search, Sparkles, Loader2 } from "lucide-react";
import Concierge from "@/components/Concierge";
import ClientMarquee from "@/components/ClientMarquee";
import ADHDi from "@/components/ADHDi";
import RecommendedBy from "@/components/RecommendedBy";
import HeroWorkshopSearch from "@/components/HeroWorkshopSearch";
import conciergeTeam from "@/assets/concierge-team.png";
import sendNavigatorImg from "@/assets/resources/send-navigator.png";
import badParentsImg from "@/assets/resources/are-we-bad-parents.png";
import dopamineImg from "@/assets/resources/dopamine-on-demand.png";
import performanceImg from "@/assets/resources/neuroinclusive-performance.png";

const heroMessages = [
  {
    headline: "Neurodiversity training, strategy, and workplace consultancy.",
    subline: "UK-based, neurodivergent-led consultancy delivering accredited neurodiversity training, strategic redesign, and workforce capability building. Helping organisations improve retention, reduce risk, and unlock performance.",
  },
  {
    headline: "We do the hard, human work of making neuroinclusion real.",
    subline: "Live, engaging, lived experience training that changes behaviour, builds trust, and keeps delivering long after the session ends.",
  },
  {
    headline: "Neuroinclusion that actually changes how work feels.",
    subline: "Rated Excellent with a 9.7 out of 10 average because it is an experience that stays with people.",
  },
  {
    headline: "This is not awareness training. This is change.",
    subline: "We work alongside leaders and teams to turn intention into action and conversations into lasting shift.",
  },
  {
    headline: "Neurodiversity at work. Real. Human. Effective.",
    subline: "Practical sessions grounded in lived experience that translate directly into better decisions and better work.",
  },
  {
    headline: "Where inclusion stops being performative and starts working.",
    subline: "Managers leave with language, confidence, and clarity they can use immediately.",
  },
  {
    headline: "We do the hard work most inclusion programmes avoid.",
    subline: "We create the space and structure for honest conversations that actually move things forward.",
  },
  {
    headline: "Be seen. Be valued. Be supported.",
    subline: "Workshops designed to support neurodivergent people and the people carrying responsibility around them.",
  },
];

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
  { label: "Core Awareness", icon: BookOpen, href: "/workshops#core" },
  { label: "Champions", icon: Shield, href: "/workshops#core" },
  { label: "Managers", icon: Briefcase, href: "/workshops#core" },
  { label: "Leaders", icon: Users, href: "/workshops#core" },
  { label: "Executive", icon: Building2, href: "/workshops#core" },
  { label: "HR", icon: Heart, href: "/workshops#role-function" },
  { label: "L&D", icon: GraduationCap, href: "/workshops#role-function" },
  { label: "Industry", icon: Building2, href: "/workshops#industry" },
  { label: "Strategy & Leadership", icon: Shield, href: "/workshops#strategy" },
  { label: "Keynotes & Events", icon: Mic, href: "/workshops#keynotes" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotateMessage = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMessages.length);
      setIsVisible(true);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateMessage, 10000);
    return () => clearInterval(interval);
  }, [rotateMessage]);

  const current = heroMessages[currentIndex];

  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 lg:pt-24">
        {/* Headline + Training Card */}
        <div className="lg:flex lg:items-end lg:gap-12">
          <div className="max-w-3xl lg:flex-1">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              Neurodiversity in work. Designed as infrastructure.
            </p>
            <div className="min-h-[220px] md:min-h-[200px] lg:min-h-[240px]">
              <h1
                id="hero-heading"
                className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.08] transition-all duration-500 ease-in-out"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {current.headline}
              </h1>
              <p
                className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/85 max-w-[58ch] transition-all duration-500 ease-in-out delay-100"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)' }}
              >
                {current.subline}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6" role="tablist" aria-label="Hero messages">
              {heroMessages.map((_, i) => (
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
                Book a discovery call
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Read Testimonials
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact Us
              </a>
            </div>

            {/* Ask Rich explainer + CTA */}
            <div className="mt-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                <strong className="text-[hsl(20,100%,55%)] font-display font-bold">Ask Rich anything.</strong>{" "}
                Rich is our co-founder and resident neurodiversity-in-work expert. Even if you're not looking for training but have a question about neurodiversity at work — ask! Our knowledge base is continually updated, but if you can't find the answer you need, submit your question for Rich and the team to answer. Always strictly confidential.
              </p>
              <a
                href="/ask-rich"
                className="mt-4 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[hsl(20,100%,55%)] text-white font-display font-bold text-sm shadow-lg shadow-[hsl(20,100%,55%)]/30 hover:shadow-xl hover:shadow-[hsl(20,100%,55%)]/45 hover:scale-[1.02] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(20,100%,55%)]"
              >
                <Sparkles size={16} aria-hidden="true" />
                Ask Rich Anything
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
                  <p className="font-display font-extrabold text-2xl text-accent leading-none">50+</p>
                  <p className="text-xs opacity-60 mt-0.5">Accredited sessions</p>
                </div>
              </div>

              <p className="text-sm text-primary-foreground/75 leading-relaxed mb-5">
                Expert-led, always 'live', workshops from 60-minute awareness sessions to full-day strategic programmes tailored to your setting and industry.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {trainingCategories.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary-foreground/12 bg-primary-foreground/[0.04] text-xs text-primary-foreground/80 hover:bg-primary-foreground/[0.1] transition-colors"
                  >
                    <cat.icon size={12} className="text-accent shrink-0" aria-hidden="true" />
                    {cat.label}
                  </a>
                ))}
              </div>

              <a
                href="/workshops"
                className="flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
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
              <p className="mt-0.5 text-sm text-primary-foreground/70 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Recommended by */}
      <RecommendedBy />

      {/* ── Tell us why you're here + Workshop Finder ── */}
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
            I'm looking for support as
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pathways.map((p) => (
              <a
                key={p.title}
                href={p.href}
               className="group flex flex-col rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-7 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/20 transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
             >
                <div className="flex items-center gap-3 mb-3">
                  <p.icon size={22} className={`${p.title === "Parents" ? "text-red-500" : "text-accent"} shrink-0`} aria-hidden="true" />
                  <div>
                    <h2 className="font-display font-bold text-lg leading-tight">{p.title}</h2>
                    <p className="text-xs opacity-50 mt-0.5">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/75 leading-relaxed flex-1">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={14} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Resources */}
      <div id="resources" className="border-t border-primary-foreground/8">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-12 lg:py-14">
          <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-3">
            Resources
          </p>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight mb-8">
            Key resources from our team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "The SEND Navigator",
                description: "Plain English answers about SEND reform — what we know, what's discussed, and what remains uncertain.",
                href: "#send-navigator",
                badge: "Interactive Tool",
                image: sendNavigatorImg,
              },
              {
                title: "Are We Bad Parents?",
                description: "One tired accusation. And the reality of parenting a neurodivergent child. An open letter that resonated with thousands.",
                href: "https://awbp.neuro.support/",
                badge: "Open Letter",
                image: badParentsImg,
                external: true,
              },
              {
                title: "The Day We Gave Our Children Dopamine",
                description: "Then wondered why they couldn't cope. Smartphones, dopamine, and what it means for neurodivergent young people.",
                href: "https://smartphonefree.neurodiversityglobal.com/",
                badge: "Long Read",
                image: dopamineImg,
                external: true,
              },
              {
                title: "Neuroinclusive Performance",
                description: "Understanding the performance curve — from growth to burnout — and where neuroinclusion makes the difference.",
                href: "https://understand-magic.lovable.app/",
                badge: "Interactive",
                image: performanceImg,
                external: true,
              },
            ].map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                {...(resource.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] overflow-hidden hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/20 transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">
                    {resource.badge}
                  </span>
                  <h3 className="font-display font-bold text-base leading-tight mb-2">{resource.title}</h3>
                  <p className="text-sm text-primary-foreground/75 leading-relaxed flex-1">{resource.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                    {resource.external ? "Visit" : "Explore"} <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
