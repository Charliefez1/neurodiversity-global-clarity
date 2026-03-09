import { NEURO_COLOURS } from "@/data/neuroColours";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  portraitSrc?: string;
  accentIndex?: number;
}

const PullQuote = ({ quote, attribution, accentIndex = 0 }: PullQuoteProps) => {
  const colour = NEURO_COLOURS[accentIndex % NEURO_COLOURS.length];

  return (
    <section className="bg-warm-stone py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-8 h-1 w-16 rounded-full" style={{ backgroundColor: colour }} />

        <blockquote>
          <p className="font-display font-bold text-xl md:text-2xl lg:text-3xl leading-[1.35] text-foreground tracking-tight">
            "{quote}"
          </p>
        </blockquote>

        {attribution && (
          <footer className="mt-6">
            <div className="inline-flex items-center gap-2">
              <span className="block h-px w-6" style={{ backgroundColor: colour }} />
              <cite className="text-sm text-muted-foreground not-italic font-body font-medium tracking-wide uppercase">
                {attribution}
              </cite>
            </div>
          </footer>
        )}

        {/* Decorative line */}
        <div className="mx-auto mt-8 h-1 w-16 rounded-full" style={{ backgroundColor: colour }} />
      </div>
    </section>
  );
};

export default PullQuote;
