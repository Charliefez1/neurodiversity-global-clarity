import { ReactNode } from "react";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";

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
        <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            {description}
          </p>
        )}
        {children}
        <img
          src={ndgLogo}
          alt="Neurodiversity Global"
          className="mt-8 h-10 md:h-12 w-auto opacity-80"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default PageHero;
