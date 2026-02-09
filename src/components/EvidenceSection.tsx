import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The impact on retention has been remarkable. Our leadership team now thinks about talent completely differently.",
    author: "Head of People",
    org: "FTSE 250 Financial Services",
  },
  {
    quote: "This changed how we design services and how our teams work together — not just what they know about neurodiversity.",
    author: "Director of Operations",
    org: "NHS Trust",
  },
  {
    quote: "They understand the difference between ticking a box and actually making things better for neurodivergent people.",
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
        <div className="max-w-2xl mb-12">
          <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-3">
            Evidence & trust
          </p>
          <h2 id="evidence-heading" className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
            Trusted by organisations that take this seriously
          </h2>
        </div>

        {/* Logo placeholders */}
        <div className="flex flex-wrap gap-4 mb-14 pb-10 border-b border-primary-foreground/8" role="list" aria-label="Organisations we have worked with">
          {logos.map((name) => (
            <div
              key={name}
              role="listitem"
              className="px-5 py-2.5 rounded border border-primary-foreground/12 text-xs font-display font-semibold opacity-50 tracking-wide uppercase"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-lg bg-primary-foreground/[0.04] border border-primary-foreground/8 p-7 flex flex-col"
            >
              <Quote size={20} className="text-accent mb-3 shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed opacity-80 flex-1">{t.quote}</p>
              <footer className="mt-5 pt-4 border-t border-primary-foreground/8">
                <p className="font-display font-semibold text-sm">{t.author}</p>
                <p className="text-xs opacity-50 mt-0.5">{t.org}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
