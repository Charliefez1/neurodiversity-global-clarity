import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Ready to move beyond awareness?
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Book a free discovery call. We'll listen, understand your context, and explain how we can help — with no obligation and no sales pressure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-accent text-accent-foreground font-display font-semibold text-base hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Book a discovery call
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border text-foreground font-display font-semibold text-base hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Email us directly
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Most conversations start with a 30-minute call. We'll discuss your needs, answer questions, and suggest next steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
