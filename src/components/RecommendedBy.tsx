import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import nhsBtLogo from "@/assets/logos/nhs-bt.png";
import smartestLogo from "@/assets/logos/smartest-energy-full.png";
import smartestLogoSvg from "@/assets/logos/smartest-energy.svg";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";
import acasLogo from "@/assets/logos/acas.png";
import kyndrylLogo from "@/assets/logos/kyndryl.png";
import fareshareLogo from "@/assets/logos/fareshare.png";
import { NEURO_COLOURS } from "@/data/neuroColours";

const partners = [
  { name: "NHS Blood and Transplant", logo: nhsBtLogo },
  { name: "ACAS", logo: acasLogo },
  { name: "Kyndryl", logo: kyndrylLogo },
  { name: "Suez", logo: suezLogo },
  { name: "Smartest Energy", logo: smartestLogo },
  { name: "FareShare", logo: fareshareLogo },
  { name: "Agillio", logo: agillioLogo },
];

const RecommendedBy = () => (
  <div>
    <div className="mx-auto max-w-wide px-6 lg:px-10 py-10 lg:py-14">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-8">
        Recommended by
      </p>
      <div className="flex flex-wrap items-center gap-10 lg:gap-14 mb-8">
        {partners.map((p) => (
          <img
            key={p.name}
            src={p.logo}
            alt={p.name}
            className={`w-auto object-contain ${p.name === "Smartest Energy" ? "h-20" : "h-10"}`}
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
