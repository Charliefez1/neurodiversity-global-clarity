import { Calendar, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              Contact us
            </p>
            <h2 id="cta-heading" className="font-display font-bold text-lg md:text-xl leading-tight">
              Start a conversation
            </h2>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-[48ch]">
              We are not a training company. We are a strategic partner. A 30-minute discovery call to understand your context, answer your questions, and outline what working together could look like. No obligation. No sales pressure.
            </p>

            <div className="mt-8 p-5 rounded-lg bg-card border border-border text-left max-w-sm">
              <p className="font-display font-semibold text-sm text-foreground mb-2">What happens next</p>
              <ol className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="font-display font-bold text-accent">1.</span> We arrange a 30-minute call at a time that suits you.</li>
                <li className="flex gap-2"><span className="font-display font-bold text-accent">2.</span> We listen, ask questions, and understand your needs.</li>
                <li className="flex gap-2"><span className="font-display font-bold text-accent">3.</span> We recommend next steps, or point you elsewhere if we're not the right fit.</li>
              </ol>
            </div>

            {/* Calendar booking */}
            <div className="mt-6 p-5 rounded-lg border border-accent/20 bg-accent/5 max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Calendar size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">Book a discovery call</p>
                  <p className="text-xs text-muted-foreground">Choose a time that works for you</p>
                </div>
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-display font-bold text-xs shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Calendar size={13} />
                Open calendar
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-md">
            <ContactForm pageSource="homepage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
