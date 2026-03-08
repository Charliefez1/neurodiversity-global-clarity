import { GraduationCap, Users, Settings, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";
import SectionAudio from "@/components/SectionAudio";
import coachingDashboard from "@/assets/coaching-dashboard.png";

const services = [
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Accredited programmes for managers, HR teams, and leaders. Designed to change practice, not just raise awareness. Over 50 workshops available.",
    summary: "50+ accredited workshops that change practice, not just awareness.",
    href: "/neurodiversity-training",
  },
  {
    icon: Users,
    title: "In-Work Coaching & Support",
    description: "One-to-one and group coaching for neurodivergent employees and the people who manage them. Practical strategies for managing work day to day.",
    summary: "1:1 and group coaching for neurodivergent employees and their managers.",
  },
  {
    icon: Settings,
    title: "Strategy & Organisational Change",
    description: "Policy review, systems redesign, and neurodiversity strategy embedded into how your organisation operates. From recruitment to exit.",
    summary: "Policy review, systems redesign, and embedded neurodiversity strategy.",
    href: "/neurodiversity-consultancy",
  },
  {
    icon: Headphones,
    title: "Customer-Facing Capability",
    description: "Equip frontline teams to recognise and respond to neurodivergent customers, service users, and citizens. Internal and external delivery.",
    summary: "Frontline training for teams supporting neurodivergent customers.",
  },
];

const sectionAudioText = "What we deliver. We work across four areas: Training and Development with over 50 accredited workshops, In-Work Coaching and Support with one-to-one and group coaching, Strategy and Organisational Change including policy review and systems redesign, and Customer-Facing Capability to equip frontline teams. We also have a digital coaching platform coming soon.";

const ServicesSection = () => {
  const { mode } = useExperienceMode();

  return (
    <section id="services" className="bg-warm-stone text-foreground py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            What we deliver
          </p>
          <h2 id="services-heading" className="font-display font-bold text-lg md:text-xl leading-tight">
            Four areas of expertise. One clear purpose.
          </h2>
          {mode === "read" && (
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-[55ch]">
              We work across the full scope of neurodiversity in organisations, from individual coaching to system-level change. From depots to boardrooms, we meet people where they are and build systems that scale.
            </p>
          )}
          {mode === "listen" && (
            <div className="mt-4">
              <SectionAudio sectionText={sectionAudioText} label="Listen to this section" />
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => {
            const content = (
              <article className="rounded-xl bg-card border border-border p-7 lg:p-8 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-md bg-accent/15 flex items-center justify-center mt-0.5">
                    <s.icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm mb-1.5">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {mode === "scan" ? s.summary : s.description}
                    </p>
                  </div>
                </div>
              </article>
            );

            if (s.href) {
              return (
                <Link key={s.title} to={s.href} className="group hover:shadow-md transition-shadow rounded-lg">
                  {content}
                </Link>
              );
            }

            return <div key={s.title}>{content}</div>;
          })}
        </div>

        {/* Coaching platform teaser */}
        {mode !== "scan" && (
          <div className="mt-14 rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/12 p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8">
            <img
              src={coachingDashboard}
              alt="Coaching platform dashboard showing pending requests, analytics, and team insights"
              className="w-full md:w-1/2 max-w-md rounded-lg"
              loading="lazy"
            />
            <div className="flex-1">
              <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-2">Coming soon</p>
              <h3 className="font-display font-bold text-sm mb-2">Digital Coaching Platform</h3>
              <p className="opacity-75 text-xs leading-relaxed">
                Our integrated coaching solution connects neurodivergent employees with specialist support: tracked, measured, and designed to scale across your organisation.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
