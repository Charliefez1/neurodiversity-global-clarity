import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface PageCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Page identifier for contact form tracking */
  pageSource?: string;
}

const isInternal = (href: string) => href.startsWith("/");

const PageCTA = ({
  title = "Start a conversation",
  description = "We'd love to hear from you. Whether it's a question, a project, or just a conversation, reach out and we'll get back to you.",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  pageSource,
}: PageCTAProps) => {
  return (
    <section className="bg-warm-stone py-16 lg:py-24">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          {/* Left: text and optional buttons */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              Contact us
            </p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-3">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[48ch]">
              {description}
            </p>

            {primaryLabel && primaryHref && (
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {isInternal(primaryHref) ? (
                  <Link
                    to={primaryHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <Phone size={16} />
                    {primaryLabel}
                    <ArrowRight size={14} />
                  </Link>
                ) : (
                  <a
                    href={primaryHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <Phone size={16} />
                    {primaryLabel}
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: contact form */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-md">
            <ContactForm pageSource={pageSource} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
