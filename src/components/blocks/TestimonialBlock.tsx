import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  org: string;
  variant?: "light" | "dark";
}

const TestimonialBlock = ({ quote, author, org, variant = "light" }: TestimonialBlockProps) => {
  const bg = variant === "dark"
    ? "bg-primary-foreground/[0.04] border-primary-foreground/8"
    : "bg-card border-border";

  const textClass = variant === "dark" ? "opacity-80" : "text-muted-foreground";
  const authorClass = variant === "dark" ? "text-primary-foreground" : "text-card-foreground";
  const orgClass = variant === "dark" ? "opacity-50" : "text-muted-foreground";

  return (
    <blockquote className={`rounded-lg border ${bg} p-6 lg:p-7 flex flex-col shadow-md`}>
      <Quote size={18} className="text-accent mb-3 shrink-0" aria-hidden="true" />
      <p className={`text-sm leading-relaxed flex-1 ${textClass}`}>{quote}</p>
      <footer className={`mt-5 pt-3 border-t ${variant === "dark" ? "border-primary-foreground/8" : "border-border"}`}>
        <p className={`font-display font-semibold text-sm ${authorClass}`}>{author}</p>
        <p className={`text-xs mt-0.5 ${orgClass}`}>{org}</p>
      </footer>
    </blockquote>
  );
};

export default TestimonialBlock;
