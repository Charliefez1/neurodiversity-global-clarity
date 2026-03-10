import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import smartestLogoSvg from "@/assets/logos/smartest-energy.svg";
import { NEURO_COLOURS } from "@/data/neuroColours";

const FeaturedClient = () => (
  <section className="bg-primary text-primary-foreground py-10 lg:py-14">
    <div className="mx-auto max-w-wide px-6 lg:px-10">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-6">
        March 26' Featured client
      </p>
      <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] overflow-hidden">
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
  </section>
);

export default FeaturedClient;
