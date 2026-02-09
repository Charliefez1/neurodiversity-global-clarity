import { Accessibility, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Accessibility,
    title: "Accessible by design",
    description: "Our website, training materials, and delivery methods are designed for cognitive accessibility from the start — not retrofitted.",
  },
  {
    icon: Eye,
    title: "Transparent and honest",
    description: "We are clear about what we do, what it costs, and what outcomes to expect. No hidden agendas or upsell pressure.",
  },
  {
    icon: Heart,
    title: "Led by lived experience",
    description: "Our team includes neurodivergent professionals. Our work is informed by research, practice, and the realities of neurodivergent life.",
  },
];

const AccessibilitySection = () => {
  return (
    <section id="values" className="bg-secondary py-20 lg:py-28" aria-labelledby="values-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-3">
            Our commitment
          </p>
          <h2 id="values-heading" className="font-display font-extrabold text-3xl md:text-4xl text-secondary-foreground">
            Accessibility and inclusion are how we work, not what we sell
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We believe organisations working in neurodiversity have a responsibility to model what good looks like. That starts with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                <v.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-secondary-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
