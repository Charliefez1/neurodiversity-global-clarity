import { Accessibility, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Accessibility,
    title: "Accessible by design",
    description: "Our materials, delivery, and digital platforms are built for cognitive accessibility from the start.",
  },
  {
    icon: Eye,
    title: "Transparent and honest",
    description: "Clear about what we do, what it costs, and what to expect. No hidden agendas.",
  },
  {
    icon: Heart,
    title: "Led by lived experience",
    description: "Our team includes neurodivergent professionals. Our work is grounded in research and real experience.",
  },
];

const AccessibilitySection = () => {
  return (
    <section id="values" className="bg-secondary py-16 lg:py-20" aria-labelledby="values-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="lg:flex lg:items-start lg:gap-16">
          <div className="max-w-md mb-10 lg:mb-0 lg:shrink-0">
            <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
              How we work
            </p>
            <h2 id="values-heading" className="font-display font-extrabold text-2xl md:text-3xl text-secondary-foreground leading-tight">
              Accessibility is how we operate, not a feature we sell.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 flex-1">
            {values.map((v) => (
              <div key={v.title}>
                <v.icon size={22} className="text-accent mb-3" aria-hidden="true" />
                <h3 className="font-display font-bold text-sm text-secondary-foreground mb-1.5">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
