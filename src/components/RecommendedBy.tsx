import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import nhsBtLogo from "@/assets/logos/nhs-bt.png";
import smartestLogo from "@/assets/logos/smartest-energy-full.png";
import smartestLogoSvg from "@/assets/logos/smartest-energy.svg";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";
import acasLogo from "@/assets/logos/acas.png";
import kyndrylLogo from "@/assets/logos/kyndryl.png";
import fareshareLogo from "@/assets/logos/fareshare.png";
import portrait4 from "@/assets/testimonials/portrait-4.jpg";

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

    {/* Featured Client - reimagined */}
    <div className="mx-auto max-w-wide px-6 lg:px-10 pb-10 lg:pb-14">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-6">
        Featured client
      </p>
      <div className="group relative rounded-xl border border-primary-foreground/12 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
        {/* Background portrait */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={portrait4}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-2/5 object-cover opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/98 to-primary/70" />
        </div>

        <div className="relative p-6 lg:p-8 lg:flex lg:items-start lg:gap-10">
          <div className="shrink-0 mb-5 lg:mb-0">
            <img
              src={smartestLogoSvg}
              alt="Smartest Energy"
              className="h-8 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex gap-3 mb-3">
              <Quote size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-primary-foreground/85 leading-relaxed italic">
                "Neurodiversity Global delivered training that genuinely shifted how our managers think about performance and support. The sessions were practical, engaging, and led by people who truly understand the workplace challenges. It has had a lasting impact on our culture."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:ml-[30px]">
              <img
                src={portrait4}
                alt="Smartest Energy representative"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-accent/20"
              />
              <p className="text-xs text-primary-foreground/50">
                Smartest Energy · Energy sector
              </p>
            </div>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-accent font-display font-semibold text-xs mt-4 lg:ml-[30px] hover:gap-3 transition-all"
            >
              Read the full story <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedBy;
