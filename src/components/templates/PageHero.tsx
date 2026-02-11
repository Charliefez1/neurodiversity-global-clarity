import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ badge, title, description, children }: PageHeroProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
          {badge}
        </p>
        <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg md:text-xl leading-relaxed opacity-80 max-w-[58ch]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
