import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  org: string;
  variant?: "light" | "dark";
  portraitSrc?: string;
}

const TestimonialBlock = ({ quote, author, org, variant = "light", portraitSrc }: TestimonialBlockProps) => {
  const isDark = variant === "dark";

  return (
    <blockquote
      className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
        isDark
          ? "bg-primary border border-primary-foreground/10"
          : "bg-card border border-border"
      }`}
    >
      {/* Background portrait */}
      {portraitSrc && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={portraitSrc}
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-full w-3/5 object-cover object-top opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700 scale-110 group-hover:scale-105 transition-transform"
          />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-r from-primary via-primary/95 to-primary/60" : "bg-gradient-to-r from-card via-card/95 to-card/60"}`} />
        </div>
      )}

      <div className="relative p-6 lg:p-8 flex flex-col min-h-[200px]">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-xl" />

        <Quote
          size={28}
          className={`mb-4 shrink-0 ${isDark ? "text-accent/60" : "text-accent/40"}`}
          aria-hidden="true"
        />
        <p className={`text-sm leading-relaxed flex-1 italic ${
          isDark ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}>
          "{quote}"
        </p>
        <footer className={`mt-6 pt-4 border-t flex items-center gap-3 ${
          isDark ? "border-primary-foreground/10" : "border-border"
        }`}>
          {portraitSrc && (
            <img
              src={portraitSrc}
              alt={author}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30 shadow-sm"
            />
          )}
          <div>
            <p className={`font-display font-semibold text-sm ${
              isDark ? "text-primary-foreground" : "text-card-foreground"
            }`}>{author}</p>
            <p className={`text-xs mt-0.5 ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{org}</p>
          </div>
        </footer>
      </div>
    </blockquote>
  );
};

export default TestimonialBlock;
