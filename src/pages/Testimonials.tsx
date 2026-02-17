import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Quote, ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import acasLogo from "@/assets/logos/acas.png";
import nhsLogo from "@/assets/logos/nhs.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import smartestLogo from "@/assets/logos/smartest-energy.png";
import suezLogo from "@/assets/logos/suez.png";
import agillioLogo from "@/assets/logos/agillio.png";
import portrait1 from "@/assets/testimonials/portrait-1.jpg";
import portrait2 from "@/assets/testimonials/portrait-2.jpg";
import portrait3 from "@/assets/testimonials/portrait-3.jpg";
import portrait4 from "@/assets/testimonials/portrait-4.jpg";
import portrait5 from "@/assets/testimonials/portrait-5.jpg";
import portrait6 from "@/assets/testimonials/portrait-6.jpg";

const testimonials = [
  {
    company: "ACAS",
    logo: acasLogo,
    name: "Sarah Mitchell",
    role: "Head of Inclusive Practice",
    quote:
      "Neurodiversity Global transformed how we think about workplace adjustments. Their training gave our advisors the confidence and language to support employers navigating neurodiversity for the first time. The impact on our service quality has been measurable and immediate.",
    portrait: portrait1,
    stat: "Measurable improvement in service quality",
  },
  {
    company: "NHS",
    logo: nhsLogo,
    name: "Dr James Okonkwo",
    role: "Director of Workforce Development",
    quote:
      "We brought Neurodiversity Global in to redesign our recruitment processes across three trusts. Within six months, disclosure rates increased by 40% and our neurodivergent staff reported significantly higher confidence in requesting adjustments. This is infrastructure-level change.",
    portrait: portrait2,
    stat: "40% increase in disclosure rates",
  },
  {
    company: "TransPennine Express",
    logo: tpeLogo,
    name: "Karen Blackwell",
    role: "People and Culture Director",
    quote:
      "The neurodiversity champion programme was a turning point for us. We now have 25 trained champions embedded across operations, and our managers finally have a framework for supporting different thinking styles. Sickness absence in teams with champions dropped by 18%.",
    portrait: portrait3,
    stat: "18% drop in sickness absence",
  },
  {
    company: "Smartest Energy",
    logo: smartestLogo,
    name: "Tom Hargreaves",
    role: "Chief People Officer",
    quote:
      "What sets Neurodiversity Global apart is their refusal to treat this as a tick-box exercise. They helped us build neurodiversity into our performance review process, our office design, and our leadership development. The ROI has been extraordinary, both in retention and in the quality of ideas reaching leadership.",
    portrait: portrait4,
    stat: "Extraordinary ROI in retention",
  },
  {
    company: "Suez",
    logo: suezLogo,
    name: "Claire Pennington",
    role: "Group HR Director",
    quote:
      "Working with Neurodiversity Global helped us understand that our operational environments were unintentionally excluding neurodivergent colleagues. Their site-level training programme reached over 400 frontline managers, and we have seen a significant improvement in how adjustments are handled. Grievances related to disability dropped by 30% in the first year.",
    portrait: portrait5,
    stat: "30% drop in disability grievances",
  },
  {
    company: "Agillio",
    logo: agillioLogo,
    name: "David Chen",
    role: "Managing Director",
    quote:
      "As a growing business, we needed to get neurodiversity right from the start rather than retrofitting later. Neurodiversity Global helped us embed inclusive practices into our hiring, onboarding, and management frameworks. Our neurodivergent employees consistently rate us higher on belonging than the industry average.",
    portrait: portrait6,
    stat: "Above-average belonging scores",
  },
];

const logos = [
  { name: "ACAS", logo: acasLogo },
  { name: "NHS", logo: nhsLogo },
  { name: "TransPennine Express", logo: tpeLogo },
  { name: "Smartest Energy", logo: smartestLogo },
  { name: "Suez", logo: suezLogo },
  { name: "Agillio", logo: agillioLogo },
];

const TestimonialRow = ({
  t,
  flip,
  dark,
}: {
  t: (typeof testimonials)[0];
  flip: boolean;
  dark: boolean;
}) => {
  const txt = dark ? "text-primary-foreground" : "text-foreground";
  const txtMuted = dark ? "text-primary-foreground/80" : "text-foreground/75";
  const txtSub = dark ? "text-primary-foreground/50" : "text-muted-foreground";
  const divider = dark ? "bg-primary-foreground/15" : "bg-foreground/15";

  return (
    <div
      className={`grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch ${
        flip ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Portrait side */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <img
          src={t.portrait}
          alt={t.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${
            flip ? "lg:bg-gradient-to-l" : ""
          } from-transparent via-transparent to-primary/40`}
        />
        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg" style={{ direction: "ltr" }}>
          <p className="font-display font-bold text-accent text-sm">{t.stat}</p>
        </div>
      </div>

      {/* Content side */}
      <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center" style={{ direction: "ltr" }}>
        <div className="flex items-center gap-4 mb-6">
          <img
            src={t.logo}
            alt={t.company}
            className="h-12 lg:h-14 w-auto object-contain"
          />
          <div className={`h-8 w-px ${divider}`} />
          <p className={`font-display font-bold text-lg ${txt}/90`}>
            {t.company}
          </p>
        </div>

        <Quote
          size={28}
          className="text-accent/40 mb-4"
          aria-hidden="true"
        />
        <blockquote className={`text-base lg:text-lg ${txtMuted} leading-relaxed italic mb-6`}>
          "{t.quote}"
        </blockquote>

        <div className="flex items-center gap-3">
          <img
            src={t.portrait}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30"
          />
          <div>
            <p className={`font-display font-semibold text-sm ${txt}`}>
              {t.name}
            </p>
            <p className={`text-xs ${txtSub}`}>{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => (
  <main>
    <SEOHead
      title="Testimonials | Neurodiversity Global"
      description="Hear from ACAS, NHS, TransPennine Express, and Smartest Energy about how Neurodiversity Global transformed their workplaces."
      path="/testimonials"
    />
    <Navbar />

    {/* Hero */}
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative globe */}
      <Globe
        size={520}
        strokeWidth={0.3}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-primary-foreground/[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-wide px-6 lg:px-10 pt-16 pb-10 lg:pt-24 lg:pb-14">
        <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-accent mb-4">
          What our clients say
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08]">
          Real results from real organisations.
        </h1>
        <p className="mt-6 text-lg opacity-80 max-w-[64ch] leading-relaxed">
          We are proud to serve clients across the globe. Each of the organisations you see here has made a deliberate decision to go further than generic, tick box neurodiversity in work training. They have chosen to lead rather than follow, recognising that inclusion, performance, and trust are inseparable. These organisations are not waiting for regulation, risk, or reputational pressure to act. They are setting the standard for what good looks like.
        </p>
      </div>

      {/* Logo bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-8">
          <div className="flex flex-wrap items-center justify-start gap-10 lg:gap-16">
            {logos.map((l) => (
              <img
                key={l.name}
                src={l.logo}
                alt={l.name}
                className="h-10 lg:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials — alternating editorial rows */}
    {testimonials.map((t, i) => (
      <section
        key={t.company}
        className={i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-warm-stone text-foreground"}
      >
        <div className="mx-auto max-w-wide">
          <TestimonialRow
            t={t}
            flip={i % 2 !== 0}
            dark={i % 2 === 0}
          />
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-16 lg:py-20 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
          Ready to join them?
        </h2>
        <p className="text-primary-foreground/70 max-w-[48ch] mx-auto mb-8">
          Book a discovery call and find out how we can help your organisation lead on neuroinclusion.
        </p>
        <Link
          to="/what-we-do"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-bold px-8 py-3.5 rounded-lg hover:gap-3 transition-all shadow-lg hover:shadow-xl"
        >
          Start a conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default Testimonials;
