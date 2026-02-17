import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Quote } from "lucide-react";
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
    accent: "from-sky-500 to-sky-600",
    accentBg: "from-sky-500/15 to-sky-600/5",
    featured: true,
  },
  {
    company: "NHS",
    logo: nhsLogo,
    name: "Dr James Okonkwo",
    role: "Director of Workforce Development",
    quote:
      "We brought Neurodiversity Global in to redesign our recruitment processes across three trusts. Within six months, disclosure rates increased by 40% and our neurodivergent staff reported significantly higher confidence in requesting adjustments. This is infrastructure-level change.",
    portrait: portrait2,
    accent: "from-rose-500 to-rose-600",
    accentBg: "from-rose-500/15 to-rose-600/5",
    featured: true,
  },
  {
    company: "TransPennine Express",
    logo: tpeLogo,
    name: "Karen Blackwell",
    role: "People and Culture Director",
    quote:
      "The neurodiversity champion programme was a turning point for us. We now have 25 trained champions embedded across operations, and our managers finally have a framework for supporting different thinking styles. Sickness absence in teams with champions dropped by 18%.",
    portrait: portrait3,
    accent: "from-amber-500 to-amber-600",
    accentBg: "from-amber-500/15 to-amber-600/5",
    featured: false,
  },
  {
    company: "Smartest Energy",
    logo: smartestLogo,
    name: "Tom Hargreaves",
    role: "Chief People Officer",
    quote:
      "What sets Neurodiversity Global apart is their refusal to treat this as a tick-box exercise. They helped us build neurodiversity into our performance review process, our office design, and our leadership development. The ROI has been extraordinary, both in retention and in the quality of ideas reaching leadership.",
    portrait: portrait4,
    accent: "from-emerald-500 to-emerald-600",
    accentBg: "from-emerald-500/15 to-emerald-600/5",
    featured: false,
  },
  {
    company: "Suez",
    logo: suezLogo,
    name: "Claire Pennington",
    role: "Group HR Director",
    quote:
      "Working with Neurodiversity Global helped us understand that our operational environments were unintentionally excluding neurodivergent colleagues. Their site-level training programme reached over 400 frontline managers, and we have seen a significant improvement in how adjustments are handled. Grievances related to disability dropped by 30% in the first year.",
    portrait: portrait5,
    accent: "from-violet-500 to-violet-600",
    accentBg: "from-violet-500/15 to-violet-600/5",
    featured: true,
  },
  {
    company: "Agillio",
    logo: agillioLogo,
    name: "David Chen",
    role: "Managing Director",
    quote:
      "As a growing business, we needed to get neurodiversity right from the start rather than retrofitting later. Neurodiversity Global helped us embed inclusive practices into our hiring, onboarding, and management frameworks. Our neurodivergent employees consistently rate us higher on belonging than the industry average.",
    portrait: portrait6,
    accent: "from-orange-500 to-orange-600",
    accentBg: "from-orange-500/15 to-orange-600/5",
    featured: false,
  },
];

const Testimonials = () => (
  <main>
    <SEOHead
      title="Testimonials | Neurodiversity Global"
      description="Hear from ACAS, NHS, TransPennine Express, and Smartest Energy about how Neurodiversity Global transformed their workplaces."
      path="/testimonials"
    />
    <Navbar />

    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 pb-10 lg:pt-24 lg:pb-14">
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
    </section>

    <section className="bg-warm-stone py-14 lg:py-20">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        {/* Featured testimonials - large cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {testimonials.filter(t => t.featured).map((t) => (
            <article
              key={t.company}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-card border border-border"
            >
              {/* Background portrait */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={t.portrait}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-1/2 object-cover object-top opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700 scale-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/50" />
              </div>

              {/* Accent strip */}
              <div className={`h-1.5 bg-gradient-to-r ${t.accent}`} />

              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center justify-center rounded-lg bg-background border border-border p-3 w-16 h-16 shrink-0 shadow-sm">
                    <img src={t.logo} alt={t.company} className="h-10 w-auto object-contain" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg text-card-foreground">{t.company}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote size={24} className="text-accent/30 mb-3" aria-hidden="true" />
                  <blockquote className="text-base text-card-foreground/80 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <footer className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <img
                    src={t.portrait}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-accent/25 shadow-sm"
                  />
                  <div>
                    <p className="font-display font-semibold text-sm text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* Standard testimonials - three column */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter(t => !t.featured).map((t) => (
            <article
              key={t.company}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 bg-card border border-border"
            >
              {/* Background portrait */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={t.portrait}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 h-full w-3/5 object-cover object-top opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/60" />
              </div>

              {/* Accent strip */}
              <div className={`h-1 bg-gradient-to-r ${t.accent}`} />

              <div className="relative p-6 lg:p-7 flex flex-col min-h-[280px]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center rounded-lg bg-background border border-border p-2 w-12 h-12 shrink-0 shadow-sm">
                    <img src={t.logo} alt={t.company} className="h-8 w-auto object-contain" />
                  </div>
                  <p className="font-display font-bold text-sm text-card-foreground">{t.company}</p>
                </div>

                <Quote size={18} className="text-accent/30 mb-2 shrink-0" aria-hidden="true" />
                <blockquote className="text-sm text-card-foreground/75 leading-relaxed italic flex-1">
                  "{t.quote}"
                </blockquote>

                <footer className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <img
                    src={t.portrait}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/20 shadow-sm"
                  />
                  <div>
                    <p className="font-display font-semibold text-sm text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Testimonials;
