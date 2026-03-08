import coachingDashboard from "@/assets/coaching-dashboard.png";
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

            <div className="mt-6">
              <img
                src={coachingDashboard}
                alt="Coaching statistics: 230 coaching hours, 117 people coached, 9.8 out of 10 feedback score, rated excellent on Trustpilot"
                className="rounded-xl shadow-md w-full max-w-sm"
              />
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
