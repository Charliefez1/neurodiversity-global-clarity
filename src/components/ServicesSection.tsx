import { GraduationCap, Users, Settings, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Accredited programmes for managers, HR teams, and leaders — designed to change practice, not just raise awareness.",
  },
  {
    icon: Users,
    title: "In-Work Coaching & Support",
    description:
      "One-to-one and group coaching for neurodivergent employees and the managers who support them.",
  },
  {
    icon: Settings,
    title: "Strategy & Organisational Change",
    description:
      "Policy review, systems redesign, and neurodiversity strategy that embeds inclusion into how your organisation operates.",
  },
  {
    icon: Headphones,
    title: "Customer-Facing Capability",
    description:
      "Help your teams recognise and respond to neurodivergent customers, service users, and citizens with confidence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-3">
            What we deliver
          </p>
          <h2 id="services-heading" className="font-display font-extrabold text-3xl md:text-4xl text-secondary-foreground">
            Practical expertise across the full scope of neurodiversity in work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-lg bg-card border border-border p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <s.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Find out more <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
