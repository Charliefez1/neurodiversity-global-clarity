import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partners: { name: string; logo: string; className: string }[] = [];

const RecommendedBy = () => (
  <div>
    <div className="mx-auto max-w-wide px-6 lg:px-10 py-10 lg:py-14">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-8">
        Recommended by
      </p>
      <div className="flex flex-wrap items-center gap-8 lg:gap-12 mb-8">
        {partners.map((p) => (
          <img
            key={p.name}
            src={p.logo}
            alt={p.name}
            className={`object-contain opacity-90 ${p.className}`}
          />
        ))}
      </div>
      <Link
        to="/testimonials"
        className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm hover:gap-3 transition-all"
      >
        Read testimonials <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  </div>
);

export default RecommendedBy;
