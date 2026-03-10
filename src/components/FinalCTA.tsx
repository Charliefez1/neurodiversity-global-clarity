import { Calendar, ExternalLink, ArrowRight, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { NEURO_COLOURS } from "@/data/neuroColours";

const stats = [
  { icon: Clock, value: "< 24 hrs", label: "Typical response time" },
  { icon: Users, value: "200+", label: "Organisations supported" },
  { icon: Zap, value: "Free", label: "Discovery call, no obligation" },
];

const FinalCTA = () => {
  return (
    <section id="contact" className="bg-primary py-16 lg:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Top — bold headline banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Let's talk
          </p>
          <h2
            id="cta-heading"
            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.1] text-primary-foreground tracking-tight"
          >
            Ready to make neurodiversity
            <br className="hidden md:block" />
            <span className="text-accent"> work in your organisation?</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-primary-foreground/60 leading-relaxed max-w-[52ch] mx-auto">
            Most organisations know they need to act. The question is how and where to start.
            That's what the first conversation is for.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mb-12 lg:mb-16 max-w-xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${NEURO_COLOURS[i]}20` }}
              >
                <stat.icon size={18} style={{ color: NEURO_COLOURS[i] }} />
              </div>
              <p className="font-display font-extrabold text-base text-primary-foreground">{stat.value}</p>
              <p className="text-[11px] text-primary-foreground/50 mt-0.5 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main grid — form + side options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-start"
        >
          {/* Left — form card */}
          <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-8 rounded-full bg-accent" />
              <p className="font-display font-bold text-sm text-primary-foreground/80">Send us a message</p>
            </div>
            <ContactForm pageSource="homepage" dark />
          </div>

          {/* Right — side panels */}
          <div className="space-y-4">
            {/* Discovery call card */}
            <div className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Calendar size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-primary-foreground">Book a discovery call</p>
                    <p className="text-xs text-primary-foreground/50">30 minutes · No obligation</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
                  A focused conversation to understand your context, answer questions, and outline what working together could look like.
                </p>
                <a
                  href="mailto:hello@neurodiversityglobal.com?subject=Discovery%20call%20request"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  <Calendar size={14} />
                  Request a time
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
              <p className="font-display font-bold text-sm text-primary-foreground mb-4">What happens next</p>
              <ol className="space-y-3">
                {[
                  { step: "1", text: "We respond within 24 hours with availability.", colour: NEURO_COLOURS[0] },
                  { step: "2", text: "A 30-minute call to understand your needs.", colour: NEURO_COLOURS[1] },
                  { step: "3", text: "A clear recommendation, or we point you elsewhere.", colour: NEURO_COLOURS[2] },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3 items-start">
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-display font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: item.colour }}
                    >
                      {item.step}
                    </span>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct contact */}
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
              <p className="font-display font-bold text-sm text-primary-foreground mb-2">Prefer to email directly?</p>
              <a
                href="mailto:hello@neurodiversityglobal.com"
                className="text-accent font-display font-bold text-sm hover:underline underline-offset-4 transition-colors"
              >
                hello@neurodiversityglobal.com
                <ExternalLink size={12} className="inline ml-1.5 -mt-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
