import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import smartestLogoSvg from "@/assets/logos/smartest-energy.svg";
import nhsbtLogo from "@/assets/logos/nhs-bt.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import { NEURO_COLOURS } from "@/data/neuroColours";

const clients = [
  {
    month: "Jan 26'",
    name: "NHS Blood and Transplant",
    sector: "Healthcare",
    logo: nhsbtLogo,
    initial: "N",
    color: NEURO_COLOURS[0],
    quote:
      "The programme gave our teams the language and tools to support neurodivergent colleagues confidently. It changed how we approach workplace adjustments across the organisation.",
  },
  {
    month: "Feb 26'",
    name: "TransPennine Express",
    sector: "Transport",
    logo: tpeLogo,
    initial: "T",
    color: NEURO_COLOURS[2],
    quote:
      "Neurodiversity Global helped us understand that inclusion is not a policy — it is how we operate. The impact on our frontline teams has been measurable and lasting.",
  },
  {
    month: "Mar 26'",
    name: "Smartest Energy",
    sector: "Energy",
    logo: smartestLogoSvg,
    initial: "S",
    color: NEURO_COLOURS[4],
    quote:
      "Neurodiversity Global delivered training that genuinely shifted how our managers think about performance and support. It has had a lasting impact on our culture.",
  },
];

const FeaturedClient = () => (
  <section className="bg-primary text-primary-foreground py-10 lg:py-12">
    <div className="mx-auto max-w-wide px-6 lg:px-10">
      <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">
        Featured clients
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div
            key={client.month}
            className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.06] overflow-hidden"
          >
            <div className="h-0.5" style={{ backgroundColor: client.color }} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-primary-foreground/40 font-display font-bold uppercase tracking-wider">
                  {client.month}
                </span>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-5 w-auto object-contain brightness-0 invert opacity-50"
                />
              </div>
              <p className="text-xs text-primary-foreground/70 leading-relaxed italic mb-3 line-clamp-3">
                "{client.quote}"
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-extrabold"
                  style={{ backgroundColor: `${client.color}20`, color: client.color }}
                >
                  {client.initial}
                </div>
                <div>
                  <p className="font-display font-bold text-xs text-primary-foreground">{client.name}</p>
                  <p className="text-[10px] text-primary-foreground/40">{client.sector}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-2 text-accent font-display font-semibold text-xs hover:gap-3 transition-all"
        >
          Read all client stories <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedClient;
