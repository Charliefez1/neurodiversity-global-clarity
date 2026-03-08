import ContactForm from "@/components/ContactForm";

interface PageCTAProps {
  title?: string;
  description?: string;
  /** Page identifier for contact form tracking */
  pageSource?: string;
}

const PageCTA = ({
  title = "Start a conversation",
  description = "Whether it's a question, a project, or just a conversation, reach out and we'll get back to you.",
  pageSource,
}: PageCTAProps) => {
  return (
    <section className="bg-warm-stone py-16 lg:py-24">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
            Get in touch
          </p>
          <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-3">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[52ch] mx-auto">
            {description}
          </p>
        </div>

        {/* Form card spanning full width */}
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 md:p-8 shadow-md">
          <ContactForm pageSource={pageSource} />
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
