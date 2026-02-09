import { ArrowRight, Phone } from "lucide-react";

interface PageCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const PageCTA = ({
  title = "Ready to take the next step?",
  description = "Book a free discovery call. We'll listen, understand your context, and recommend next steps — with no obligation.",
  primaryLabel = "Book a discovery call",
  primaryHref = "mailto:hello@neurodiversityglobal.com",
  secondaryLabel = "Email us directly",
  secondaryHref = "mailto:hello@neurodiversityglobal.com",
}: PageCTAProps) => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryHref}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-accent text-accent-foreground font-display font-bold text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Phone size={18} aria-hidden="true" />
              {primaryLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            {secondaryLabel && (
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-display font-semibold text-sm hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
