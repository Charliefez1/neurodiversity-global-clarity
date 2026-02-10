import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import acasLogo from "@/assets/logos/acas.png";
import nhsLogo from "@/assets/logos/nhs.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import smartestLogo from "@/assets/logos/smartest-energy.png";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const partners = [
  { name: "ACAS", logo: acasLogo },
  { name: "NHS", logo: nhsLogo },
  { name: "TransPennine Express", logo: tpeLogo },
  { name: "Smartest Energy", logo: smartestLogo },
  { name: "Suez", logo: suezLogo },
  { name: "Agillio", logo: agillioLogo },
];

const RecommendedBy = () => (
  <div className="py-12 lg:py-16">
    <div className="mx-auto max-w-wide px-6 lg:px-10">
      <FadeIn>
        <p className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
          Recommended by
        </p>
      </FadeIn>
      <StaggerContainer className="flex flex-wrap items-center gap-8 lg:gap-14 mb-8" staggerDelay={0.08}>
        {partners.map((p) => (
          <StaggerItem key={p.name}>
            <div className="flex items-center gap-3 group">
              <img
                src={p.logo}
                alt={p.name}
                className="h-12 w-12 object-contain rounded-xl bg-white p-1.5 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <span className="font-display font-bold text-lg text-foreground">
                {p.name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeIn delay={0.3}>
        <Link
          to="/testimonials"
          className="group inline-flex items-center gap-2 text-accent font-display font-bold text-sm hover:gap-3 transition-all"
        >
          Read testimonials <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </FadeIn>
    </div>
  </div>
);

export default RecommendedBy;
