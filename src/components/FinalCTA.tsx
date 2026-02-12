import { ArrowRight, Phone, Mail } from "lucide-react";
import coachingDashboard from "@/assets/coaching-dashboard.png";

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-warm-stone py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex items-center justify-center">
            <img
              src={coachingDashboard}
              alt="Coaching statistics: 230 coaching hours, 117 people coached, 9.8 out of 10 feedback score, rated excellent on Trustpilot"
              className="rounded-xl shadow-md w-full max-w-md"
            />
          </div>
          <div className="text-center lg:text-left">
          <h2 id="cta-heading" className="font-display font-bold text-lg md:text-xl leading-tight">
            Start a conversation
          </h2>
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            We are not a training company. We are a strategic partner. A 30-minute discovery call to understand your context, answer your questions, and outline what working together could look like. No obligation. No sales pressure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-border text-foreground font-display font-bold text-sm hover:bg-muted transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail size={18} aria-hidden="true" />
              Email us directly
            </a>
          </div>

          <div className="mt-8 p-5 rounded-lg bg-card border border-border text-left max-w-sm lg:mx-0 mx-auto">
            <p className="font-display font-semibold text-sm text-foreground mb-2">What happens next</p>
            <ol className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="font-display font-bold text-accent">1.</span> We arrange a 30-minute call at a time that suits you.</li>
              <li className="flex gap-2"><span className="font-display font-bold text-accent">2.</span> We listen, ask questions, and understand your needs.</li>
              <li className="flex gap-2"><span className="font-display font-bold text-accent">3.</span> We recommend next steps, or point you elsewhere if we're not the right fit.</li>
            </ol>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
