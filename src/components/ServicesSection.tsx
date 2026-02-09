import { GraduationCap, Users, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Accredited programmes for managers, HR teams, and leaders. Designed to change practice, not just raise awareness.",
  },
  {
    icon: Users,
    title: "In-Work Coaching & Support",
    description: "One-to-one and group coaching for neurodivergent employees and the people who manage them.",
  },
  {
    icon: Settings,
    title: "Strategy & Organisational Change",
    description: "Policy review, systems redesign, and neurodiversity strategy embedded into how your organisation operates.",
  },
  {
    icon: Headphones,
    title: "Customer-Facing Capability",
    description: "Equip frontline teams to recognise and respond to neurodivergent customers, service users, and citizens.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            What we deliver
          </p>
          <h2 id="services-heading" className="font-display font-extrabold text-3xl md:text-4xl text-secondary-foreground leading-tight">
            Four areas of expertise. One clear purpose.
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[55ch]">
            We work across the full scope of neurodiversity in organisations — from individual coaching to system-level change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-lg bg-card border border-border p-7 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-md bg-accent/10 flex items-center justify-center mt-0.5">
                  <s.icon size={20} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-card-foreground mb-1.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
