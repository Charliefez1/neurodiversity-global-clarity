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
            className="h-10 w-auto object-contain"
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

    {/* Featured Client — editorial style */}
    <div className="mx-auto max-w-wide px-6 lg:px-10 pb-10 lg:pb-14">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-6">
        March 26' Featured client
      </p>
      <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] overflow-hidden">
        {/* NEURO accent bar */}
        <div className="h-1" style={{ backgroundColor: NEURO_COLOURS[4] }} />

        <div className="p-7 lg:p-10">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={smartestLogoSvg}
              alt="Smartest Energy"
              className="h-7 w-auto object-contain brightness-0 invert opacity-70"
            />
            <div className="w-px h-6 bg-primary-foreground/15" />
            <span className="text-xs text-primary-foreground/50 font-display font-bold">Energy sector</span>
          </div>

          {/* Oversized quote mark */}
          <span
            className="font-display font-black text-[4.5rem] leading-none block select-none pointer-events-none -mb-6"
            style={{ color: `${NEURO_COLOURS[4]}20` }}
            aria-hidden="true"
          >"</span>

          <p className="text-base lg:text-lg text-primary-foreground/85 leading-[1.7] italic max-w-3xl">
            Neurodiversity Global delivered training that genuinely shifted how our managers think about performance and support. The sessions were practical, engaging, and led by people who truly understand the workplace challenges. It has had a lasting impact on our culture.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${NEURO_COLOURS[4]}20`, color: NEURO_COLOURS[4] }}
            >
              <span className="font-display font-extrabold text-sm">S</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-primary-foreground">Smartest Energy</p>
              <p className="text-xs text-primary-foreground/50">Energy sector</p>
            </div>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-accent font-display font-semibold text-xs mt-6 hover:gap-3 transition-all"
          >
            Read the full story <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedBy;
