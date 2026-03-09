import { NEURO_COLOURS } from "@/data/neuroColours";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  org: string;
  variant?: "light" | "dark";
  accentIndex?: number;
  /** Optional stat to highlight alongside the quote */
  stat?: { value: string; label: string };
}

const TestimonialBlock = ({ quote, author, org, variant = "light", accentIndex = 0, stat }: TestimonialBlockProps) => {
  const isDark = variant === "dark";
  const colour = NEURO_COLOURS[accentIndex % NEURO_COLOURS.length];

  return (
    <blockquote
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-primary-foreground/[0.06] border border-primary-foreground/10 hover:bg-primary-foreground/[0.1]"
          : "bg-card border border-border shadow-md hover:shadow-xl"
      }`}
    >
      {/* NEURO accent top bar */}
      <div className="h-1" style={{ backgroundColor: colour }} />

      <div className="p-7 lg:p-9 flex flex-col min-h-[220px]">
        {/* Oversized decorative quote mark */}
        <div className="select-none pointer-events-none" aria-hidden="true">
          <span
            className="font-display font-black text-[5rem] lg:text-[6.5rem] leading-none -mb-10 block"
            style={{ color: `${colour}20` }}
          >
            "
          </span>
        </div>

        <p className={`text-base lg:text-lg leading-[1.7] font-medium italic flex-1 -mt-4 ${
          isDark ? "text-primary-foreground/85" : "text-foreground/85"
        }`}>
          {quote}
        </p>

        {/* Stat callout */}
        {stat && (
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display font-extrabold text-2xl" style={{ color: colour }}>{stat.value}</span>
            <span className={`text-xs ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{stat.label}</span>
          </div>
        )}

        <footer className={`mt-6 pt-5 border-t flex items-center gap-4 ${
          isDark ? "border-primary-foreground/10" : "border-border"
        }`}>
          {/* Author initial avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: `${colour}20`, color: colour }}
          >
            <span className="font-display font-extrabold text-sm">{author.charAt(0)}</span>
          </div>
          <div>
            <p className={`font-display font-bold text-sm ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}>{author}</p>
            <p className={`text-xs mt-0.5 ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{org}</p>
          </div>
        </footer>
      </div>
    </blockquote>
  );
};

export default TestimonialBlock;
