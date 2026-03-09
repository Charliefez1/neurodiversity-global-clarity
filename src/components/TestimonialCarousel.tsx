import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";

interface Testimonial {
  quote: string;
  author: string;
  org: string;
  stat?: { value: string; label: string };
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  variant?: "light" | "dark";
  autoPlayMs?: number;
}

const TestimonialCarousel = ({ testimonials, variant = "dark", autoPlayMs = 6000 }: TestimonialCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const isDark = variant === "dark";

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), [testimonials.length]);

  useEffect(() => {
    if (autoPlayMs <= 0) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [next, autoPlayMs]);

  const t = testimonials[current];
  const colour = NEURO_COLOURS[current % NEURO_COLOURS.length];

  return (
    <div className="relative">
      <div className={`rounded-2xl overflow-hidden ${isDark ? "bg-primary-foreground/[0.06] border border-primary-foreground/10" : "bg-card border border-border shadow-lg"}`}>
        {/* Accent bar */}
        <div className="h-1 transition-colors duration-500" style={{ backgroundColor: colour }} />

        <div className="p-8 lg:p-12 min-h-[280px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              {/* Oversized quote mark */}
              <span
                className="font-display font-black text-[5rem] leading-none block select-none pointer-events-none -mb-8"
                style={{ color: `${colour}25` }}
                aria-hidden="true"
              >"</span>

              <p className={`text-lg lg:text-xl leading-[1.7] font-medium italic max-w-3xl ${isDark ? "text-primary-foreground/85" : "text-foreground/85"}`}>
                {t.quote}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-sm shrink-0"
                    style={{ backgroundColor: `${colour}20`, color: colour }}
                  >
                    <span className="font-display font-extrabold text-sm">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm ${isDark ? "text-primary-foreground" : "text-foreground"}`}>{t.author}</p>
                    <p className={`text-xs ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{t.org}</p>
                  </div>
                </div>

                {t.stat && (
                  <>
                    <div className={`hidden sm:block w-px h-8 ${isDark ? "bg-primary-foreground/15" : "bg-border"}`} />
                    <div>
                      <span className="font-display font-extrabold text-2xl" style={{ color: colour }}>{t.stat.value}</span>
                      <span className={`ml-2 text-xs ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{t.stat.label}</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8" : "w-3"}`}
                style={{ backgroundColor: i === current ? colour : isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)" }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isDark ? "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/60" : "bg-muted hover:bg-muted/80 text-muted-foreground"}`}
              aria-label="Previous testimonial"
            ><ChevronLeft size={16} /></button>
            <button
              onClick={next}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isDark ? "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/60" : "bg-muted hover:bg-muted/80 text-muted-foreground"}`}
              aria-label="Next testimonial"
            ><ChevronRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
