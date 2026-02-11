import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display font-bold text-2xl md:text-3xl leading-tight">
            Start a conversation
          </h2>
          <p className="mt-5 opacity-75 text-base leading-relaxed">
            We are not a training company. We are a strategic partner. A 30-minute discovery call to understand your context, answer your questions, and outline what working together could look like. No obligation. No sales pressure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Phone size={18} aria-hidden="true" />
              Book a discovery call
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@neurodiversityglobal.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-bold text-sm hover:bg-primary-foreground/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail size={18} aria-hidden="true" />
              Email us directly
            </a>
          </div>

          <div className="mt-8 p-5 rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/12 text-left max-w-sm mx-auto">
            <p className="font-display font-semibold text-sm mb-2">What happens next</p>
            <ol className="space-y-1.5 text-sm opacity-75">
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
