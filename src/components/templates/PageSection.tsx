import { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  variant?: "default" | "secondary" | "dark" | "sand" | "sage" | "lavender";
  children: ReactNode;
}

const bgMap = {
  default: "bg-background",
  secondary: "bg-secondary",
  dark: "bg-primary text-primary-foreground",
  sand: "bg-warm-stone",
  sage: "bg-warm-stone",
  lavender: "bg-warm-stone",
};

const fgMap = {
  default: "text-foreground",
  secondary: "text-secondary-foreground",
  dark: "text-primary-foreground",
  sand: "text-foreground",
  sage: "text-foreground",
  lavender: "text-foreground",
};

const mutedMap = {
  default: "text-muted-foreground",
  secondary: "text-muted-foreground",
  dark: "opacity-75",
  sand: "text-muted-foreground",
  sage: "text-muted-foreground",
  lavender: "text-muted-foreground",
};

const PageSection = ({ id, badge, title, description, variant = "default", children }: PageSectionProps) => {
  return (
    <section id={id} className={`${bgMap[variant]} py-12 lg:py-16`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          {badge && (
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              {badge}
            </p>
          )}
          <h2
            id={id ? `${id}-heading` : undefined}
            className={`font-display font-bold text-lg md:text-xl leading-tight ${fgMap[variant]}`}
          >
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-base leading-relaxed max-w-[55ch] ${mutedMap[variant]}`}>
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
