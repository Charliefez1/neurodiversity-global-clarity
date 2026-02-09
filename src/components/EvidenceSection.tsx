import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Neurodiversity Global transformed how our leadership team thinks about talent. The impact on retention has been remarkable.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
  },
  {
    quote: "This wasn't awareness training. It changed how we design our services and how our teams work together every day.",
    author: "Director of Operations",
    org: "NHS Trust",
  },
  {
    quote: "Finally, an organisation that understands the difference between ticking a box and actually making things better for neurodivergent people.",
    author: "Chief People Officer",
    org: "Global Technology Company",
  },
];

const logos = [
  "NHS", "Civil Service", "Deloitte", "Barclays", "KPMG", "Capita",
];

const EvidenceSection = () => {
  return (
    <section id="evidence" className="bg-primary text-primary-foreground py-20 lg:py-28" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-3">
            Evidence & trust
          </p>
          <h2 id="evidence-heading" className="font-display font-extrabold text-3xl md:text-4xl">
            Trusted by organisations that take this seriously
          </h2>
        </div>

        {/* Logo placeholders */}
        <div className="flex flex-wrap gap-6 mb-16 border-b border-primary-foreground/10 pb-12">
          {logos.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded border border-primary-foreground/15 text-sm font-display font-semibold opacity-60"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 p-8 flex flex-col"
            >
              <Quote size={24} className="text-accent mb-4 shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed opacity-85 flex-1">"{t.quote}"</p>
              <footer className="mt-6 pt-4 border-t border-primary-foreground/10">
                <p className="font-display font-semibold text-sm">{t.author}</p>
                <p className="text-xs opacity-60 mt-0.5">{t.org}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
