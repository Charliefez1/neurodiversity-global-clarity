import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageCTAProps {
  title?: string;
  description?: string;
  /** Page identifier for contact form tracking */
  pageSource?: string;
}

const PageCTA = ({
  title = "Start a conversation",
  description = "A 30-minute discovery call to understand your context and outline what working together could look like. No obligation.",
}: PageCTAProps) => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">
              Get in touch
            </p>
            <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-primary-foreground">
              {title}
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed max-w-[52ch] mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <Calendar size={15} />
              Book a discovery call
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
            >
              Send a message
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageCTA;
