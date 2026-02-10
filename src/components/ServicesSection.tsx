import { GraduationCap, Users, Settings, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import coachingDashboard from "@/assets/coaching-dashboard.png";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const services = [
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Accredited programmes for managers, HR teams, and leaders. Designed to change practice, not just raise awareness. Over 50 workshops available.",
    summary: "50+ accredited workshops that change practice, not just awareness.",
    href: "/workshops",
    color: "from-accent/10 to-accent/5",
  },
  {
    icon: Users,
    title: "In-Work Coaching & Support",
    description: "One-to-one and group coaching for neurodivergent employees and the people who manage them. Practical strategies for managing work day to day.",
    summary: "1:1 and group coaching for neurodivergent employees and their managers.",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: Settings,
    title: "Strategy & Organisational Change",
    description: "Policy review, systems redesign, and neurodiversity strategy embedded into how your organisation operates. From recruitment to exit.",
    summary: "Policy review, systems redesign, and embedded neurodiversity strategy.",
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: Headphones,
    title: "Customer-Facing Capability",
    description: "Equip frontline teams to recognise and respond to neurodivergent customers, service users, and citizens. Internal and external delivery.",
    summary: "Frontline training for teams supporting neurodivergent customers.",
    color: "from-purple-500/10 to-purple-500/5",
  },
];

const sectionAudioText = "What we deliver. We work across four areas: Training and Development with over 50 accredited workshops, In-Work Coaching and Support with one-to-one and group coaching, Strategy and Organisational Change including policy review and systems redesign, and Customer-Facing Capability to equip frontline teams. We also have a digital coaching platform coming soon.";

const ServicesSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="services" className="bg-secondary/30 py-24 lg:py-32 overflow-hidden" aria-labelledby="services-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="lg:flex lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-4">
                What we deliver
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 id="services-heading" className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-[1.08]">
                Four areas of expertise.{" "}
                <span className="text-muted-foreground">One clear purpose.</span>
              </h2>
            </FadeIn>
          </div>
          {mode === "read" && (
            <FadeIn delay={0.2}>
              <p className="mt-4 lg:mt-0 text-muted-foreground text-base leading-relaxed max-w-[42ch]">
                From depots to boardrooms, we meet people where they are and build systems that scale.
              </p>
            </FadeIn>
          )}
          {mode === "listen" && (
            <div className="mt-4">
              <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
            </div>
          )}
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
          {services.map((s) => {
            const content = (
              <article className={`group rounded-3xl border border-border bg-gradient-to-br ${s.color} p-8 lg:p-10 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-sm">
                  <s.icon size={24} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-card-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mode === "scan" ? s.summary : s.description}
                </p>
                {s.href && (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-accent text-sm font-bold group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </article>
            );

            if (s.href) {
              return (
                <StaggerItem key={s.title}>
                  <Link to={s.href} className="block h-full">
                    {content}
                  </Link>
                </StaggerItem>
              );
            }

            return <StaggerItem key={s.title}>{content}</StaggerItem>;
          })}
        </StaggerContainer>

        {/* Coaching platform — full-bleed banner feel */}
        {mode !== "scan" && (
          <FadeIn delay={0.2} className="mt-16">
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
              <img
                src={coachingDashboard}
                alt="Coaching platform dashboard"
                className="w-full md:w-1/2 max-w-md rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
              />
              <div className="flex-1 relative z-10">
                <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-3">Coming soon</p>
                <h3 className="font-display font-bold text-2xl mb-3">Digital Coaching Platform</h3>
                <p className="text-primary-foreground/70 text-base leading-relaxed">
                  Our integrated coaching solution connects neurodivergent employees with specialist support: tracked, measured, and designed to scale.
                </p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
