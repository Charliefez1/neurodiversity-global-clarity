import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import acasLogo from "@/assets/logos/acas.png";
import nhsLogo from "@/assets/logos/nhs.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import smartestLogo from "@/assets/logos/smartest-energy.png";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";
import fareshareLogo from "@/assets/logos/fareshare.png";
import kyndrylLogo from "@/assets/logos/kyndryl.png";
import nasaLogo from "@/assets/logos/nasa.png";
import cwaLogo from "@/assets/logos/college-west-anglia.png";

const partners = [
  { name: "ACAS", logo: acasLogo },
  { name: "NHS Blood and Transplant", logo: nhsLogo },
  { name: "TransPennine Express", logo: tpeLogo },
  { name: "Smartest Energy", logo: smartestLogo },
  { name: "Suez", logo: suezLogo },
  { name: "Agilio", logo: agillioLogo },
  { name: "FareShare", logo: fareshareLogo },
  { name: "Kyndryl", logo: kyndrylLogo },
  { name: "NASA", logo: nasaLogo },
  { name: "The College of West Anglia", logo: cwaLogo },
];

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
            className="h-10 md:h-12 max-w-[140px] object-contain"
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
