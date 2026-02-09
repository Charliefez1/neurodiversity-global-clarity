import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Quote } from "lucide-react";
import acasLogo from "@/assets/logos/acas.png";
import nhsLogo from "@/assets/logos/nhs.png";
import tpeLogo from "@/assets/logos/transpennine-express.png";
import smartestLogo from "@/assets/logos/smartest-energy.png";

const testimonials = [
  {
    company: "ACAS",
    logo: acasLogo,
    name: "Sarah Mitchell",
    role: "Head of Inclusive Practice",
    quote:
      "Neurodiversity Global transformed how we think about workplace adjustments. Their training gave our advisors the confidence and language to support employers navigating neurodiversity for the first time. The impact on our service quality has been measurable and immediate.",
  },
  {
    company: "NHS",
    logo: nhsLogo,
    name: "Dr James Okonkwo",
    role: "Director of Workforce Development",
    quote:
      "We brought Neurodiversity Global in to redesign our recruitment processes across three trusts. Within six months, disclosure rates increased by 40% and our neurodivergent staff reported significantly higher confidence in requesting adjustments. This is infrastructure-level change.",
  },
  {
    company: "TransPennine Express",
    logo: tpeLogo,
    name: "Karen Blackwell",
    role: "People and Culture Director",
    quote:
      "The neurodiversity champion programme was a turning point for us. We now have 25 trained champions embedded across operations, and our managers finally have a framework for supporting different thinking styles. Sickness absence in teams with champions dropped by 18%.",
  },
  {
    company: "Smartest Energy",
    logo: smartestLogo,
    name: "Tom Hargreaves",
    role: "Chief People Officer",
    quote:
      "What sets Neurodiversity Global apart is their refusal to treat this as a tick-box exercise. They helped us build neurodiversity into our performance review process, our office design, and our leadership development. The ROI has been extraordinary, both in retention and in the quality of ideas reaching leadership.",
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
        <p className="mt-6 text-lg opacity-80 max-w-[52ch] leading-relaxed">
          These organisations chose to treat neurodiversity as infrastructure. Here is what happened.
        </p>
      </div>
    </section>

    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-wide px-6 lg:px-10 space-y-10">
        {testimonials.map((t) => (
          <article
            key={t.company}
            className="rounded-xl border border-border bg-card p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.logo}
                alt={t.company}
                className="h-14 w-14 object-contain rounded-lg bg-white p-1.5"
              />
              <div>
                <p className="font-display font-bold text-lg text-card-foreground">{t.company}</p>
                <p className="text-sm text-muted-foreground">
                  {t.name}, {t.role}
                </p>
              </div>
            </div>
            <div className="relative">
              <Quote size={24} className="text-accent/30 absolute -top-1 -left-1" aria-hidden="true" />
              <blockquote className="pl-8 text-base text-card-foreground leading-relaxed italic">
                "{t.quote}"
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default Testimonials;
