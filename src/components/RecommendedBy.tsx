import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import acasLogo from "@/assets/logos/acas.png";
import nhsLogo from "@/assets/logos/nhs.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import smartestLogo from "@/assets/logos/smartest-energy.png";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";

const partners = [
  { name: "ACAS", logo: acasLogo },
  { name: "NHS", logo: nhsLogo },
  { name: "TransPennine Express", logo: tpeLogo },
  { name: "Smartest Energy", logo: smartestLogo },
  { name: "Suez", logo: suezLogo },
  { name: "Agillio", logo: agillioLogo },
];

const RecommendedBy = () => (
  <div className="bg-secondary/40">
    <div className="mx-auto max-w-wide px-6 lg:px-10 py-10 lg:py-14">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-8">
        Recommended by
      </p>
      <div className="flex flex-wrap items-center gap-10 lg:gap-16 mb-8">
        {partners.map((p) => (
          <div key={p.name} className="flex items-center gap-3">
            <img
              src={p.logo}
              alt={p.name}
              className="h-12 w-12 object-contain rounded-xl bg-white p-1 shadow-sm"
            />
            <span className="font-display font-bold text-lg text-foreground">
              {p.name}
            </span>
          </div>
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
