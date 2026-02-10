import { ArrowRight, Phone, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 id="cta-heading" className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              Ready to{" "}
              <span className="text-accent">start?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A 30-minute discovery call. No obligation, no sales pressure. Just a conversation about what working together could look like.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@neurodiversityglobal.com"
                className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-accent text-accent-foreground font-display font-bold text-lg shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all"
              >
                <Phone size={20} aria-hidden="true" />
                Book a discovery call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@neurodiversityglobal.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-display font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
                Email us directly
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-12 p-8 rounded-3xl bg-card border border-border text-left max-w-md mx-auto shadow-sm">
              <p className="font-display font-bold text-base text-foreground mb-4">What happens next</p>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display font-black text-2xl text-accent leading-none">1</span>
                  <span className="pt-1">We arrange a 30-minute call at a time that suits you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-black text-2xl text-accent leading-none">2</span>
                  <span className="pt-1">We listen, ask questions, and understand your needs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-black text-2xl text-accent leading-none">3</span>
                  <span className="pt-1">We recommend next steps, or point you elsewhere if we're not the right fit.</span>
                </li>
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
