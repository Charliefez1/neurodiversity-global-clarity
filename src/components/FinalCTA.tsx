import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
            Start a conversation
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            We are not a training company. We are a strategic partner. A 30-minute discovery call to understand your context, answer your questions, and outline what working together could look like. No obligation. No sales pressure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-display font-bold text-base shadow-lg shadow-accent/15 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Phone size={18} aria-hidden="true" />
              Book a discovery call
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-display font-semibold text-sm hover:bg-secondary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail size={16} aria-hidden="true" />
              Email us directly
            </a>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-card border border-border text-left max-w-sm mx-auto shadow-sm">
            <p className="font-display font-semibold text-sm text-foreground mb-3">What happens next</p>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="font-display font-bold text-accent">1.</span> We arrange a 30-minute call at a time that suits you.</li>
              <li className="flex gap-2"><span className="font-display font-bold text-accent">2.</span> We listen, ask questions, and understand your needs.</li>
              <li className="flex gap-2"><span className="font-display font-bold text-accent">3.</span> We recommend next steps, or point you elsewhere if we're not the right fit.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
