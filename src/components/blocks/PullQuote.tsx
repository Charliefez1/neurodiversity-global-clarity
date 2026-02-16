import { Quote } from "lucide-react";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  portraitSrc?: string;
}

const PullQuote = ({ quote, attribution, portraitSrc }: PullQuoteProps) => {
  return (
    <blockquote className="group relative my-10 rounded-xl bg-primary overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Background portrait */}
      {portraitSrc && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={portraitSrc}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-2/5 object-cover opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
      )}

      <div className="relative p-8 lg:p-10 flex items-start gap-5">
        <Quote size={32} className="text-accent/50 shrink-0 mt-1" aria-hidden="true" />
        <div>
          <p className="font-display font-semibold text-lg md:text-xl text-primary-foreground leading-snug italic">
            "{quote}"
          </p>
          {attribution && (
            <footer className="mt-4 flex items-center gap-3">
              {portraitSrc && (
                <img
                  src={portraitSrc}
                  alt={attribution}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/30"
                />
              )}
              <cite className="text-sm text-primary-foreground/60 not-italic font-body">{attribution}</cite>
            </footer>
          )}
        </div>
      </div>
    </blockquote>
  );
};

export default PullQuote;
