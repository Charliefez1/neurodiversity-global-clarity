import { ArrowRight, TrendingUp, Users, Target, CheckCircle2, Building2, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";

const caseStudies = [
  {
    slug: "financial-services-retention",
    client: "Global Financial Services Firm",
    industry: "Financial Services",
    size: "10,000+ employees",
    location: "London, UK",
    challenge: "High turnover among neurodivergent staff and low disclosure rates were costing the firm talent and limiting inclusion efforts.",
    services: ["Consultancy", "Manager Training", "Policy Review"],
    outcomes: [
      { metric: "23%", label: "Reduction in neurodivergent turnover over 12 months", icon: TrendingUp },
      { metric: "42%", label: "Increase in engagement scores among neurodivergent employees", icon: Users },
      { metric: "87%", label: "Of managers report confidence supporting neurodivergent colleagues", icon: Target },
    ],
    testimonial: {
      quote: "The combination of lived experience and practical strategies made this training stand out. Our managers now feel confident supporting neurodivergent colleagues.",
      author: "James Chen",
      role: "HR Director",
    },
    featured: true,
  },
  {
    slug: "tech-company-disclosure",
    client: "Enterprise Technology Company",
    industry: "Technology",
    size: "5,000+ employees",
    location: "Global",
    challenge: "Low disclosure rates meant the organisation couldn't provide targeted support or measure the impact of neuroinclusion efforts.",
    services: ["Awareness Training", "Champions Programme", "Policy Design"],
    outcomes: [
      { metric: "3x", label: "Increase in disclosure rates within 6 months", icon: TrendingUp },
      { metric: "96%", label: "Of participants would recommend the training", icon: Users },
      { metric: "15%", label: "Improvement in team psychological safety scores", icon: Target },
    ],
    testimonial: {
      quote: "Finally, training that goes beyond awareness to give us real tools. The NEURO framework has become embedded in how we approach inclusion.",
      author: "Dr Emma Williams",
      role: "Chief People Officer",
    },
    featured: false,
  },
  {
    slug: "healthcare-champions",
    client: "NHS Trust",
    industry: "Healthcare",
    size: "8,000+ employees",
    location: "UK",
    challenge: "Frontline managers lacked confidence and practical tools to support neurodivergent staff in high-pressure clinical environments.",
    services: ["Manager Training", "Champions Programme", "Ongoing Coaching"],
    outcomes: [
      { metric: "92%", label: "Of managers report increased confidence after training", icon: Target },
      { metric: "34%", label: "Reduction in reasonable adjustment request processing time", icon: TrendingUp },
      { metric: "50+", label: "Neuroinclusion champions trained across the trust", icon: Users },
    ],
    testimonial: {
      quote: "The Champions programme created a network of advocates who are driving real change across our organisation. Highly recommend.",
      author: "Michael Thompson",
      role: "Diversity and Inclusion Lead",
    },
    featured: false,
  },
];

const industryEvidence = [
  {
    value: "92%",
    label: "Retention rate",
    desc: "EY's Neurodiverse Centres of Excellence report 92% retention, significantly above industry averages.",
    source: "https://www.bbc.com/worklife/article/20240320-ey-karyn-twaronite-neurodiversity-bbc-executive-interview",
    sourceLabel: "BBC Worklife",
  },
  {
    value: "1.2-1.4x",
    label: "Productivity increase",
    desc: "JPMorgan's Autism at Work programme found participants 90-140% more productive when properly supported.",
    source: "https://welcomebrain.com/blog/deloitte-research-shows-the-data-benefits-of-neuroinclusion-in-the-workplace",
    sourceLabel: "Deloitte Research",
  },
  {
    value: "30%",
    label: "Better risk spotting",
    desc: "Deloitte research shows cognitively diverse teams are 30% better at identifying risks and 20% more innovative.",
    source: "https://www.deloitte.com/us/en/insights/topics/diversity-equity-inclusion/unleashing-innovation-with-neuroinclusion.html",
    sourceLabel: "Deloitte Insights",
  },
];

const CaseStudies = () => {
  const featuredCase = caseStudies.find((cs) => cs.featured);

  return (
    <>
      <SEOHead
        title="Case Studies | Proof That Neuroinclusion Works"
        description="Real organisations, real outcomes. See how we've helped companies reduce turnover, improve engagement, and build confident, inclusive teams."
        path="/case-studies"
      />
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", url: "/case-studies" }])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Case Studies
                </p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] max-w-3xl">
                  Proof that neuroinclusion works
                </h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
                  Real organisations, real outcomes. See how we've helped companies reduce turnover, improve engagement, and build confident, inclusive teams.
                </p>
              </div>
              {featuredCase && (
                <div className="rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-display font-bold text-accent uppercase tracking-wider">Featured</span>
                    <span className="text-xs opacity-60">•</span>
                    <span className="text-xs opacity-60">{featuredCase.industry}</span>
                  </div>
                  <p className="font-display font-bold text-sm">{featuredCase.client}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display font-bold text-xl text-accent">
                      {featuredCase.outcomes[0].metric}
                    </span>
                    <p className="text-xs opacity-75">{featuredCase.outcomes[0].label}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies
          .filter((cs) => cs.featured)
          .map((caseStudy) => (
            <section key={caseStudy.slug} className="bg-warm-stone py-16 lg:py-24">
              <div className="mx-auto max-w-wide px-6 lg:px-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent">
                    Featured Case Study
                  </span>
                  <span className="text-xs text-muted-foreground">{caseStudy.industry}</span>
                </div>
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left: narrative */}
                  <div>
                    <h2 className="font-display font-bold text-lg text-foreground">{caseStudy.client}</h2>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Building2 size={14} aria-hidden="true" />
                      <span>{caseStudy.size}</span>
                      <span>•</span>
                      <span>{caseStudy.location}</span>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-display font-semibold text-sm text-foreground mb-2">The Challenge</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-display font-semibold text-sm text-foreground mb-2">Services Delivered</h3>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-display font-semibold"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    {caseStudy.testimonial && (
                      <blockquote className="mt-8 border-l-2 border-accent pl-4">
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <footer className="mt-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                            <span className="text-xs font-bold text-accent">
                              {caseStudy.testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-display font-semibold text-foreground">
                              {caseStudy.testimonial.author}
                            </p>
                            <p className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</p>
                          </div>
                        </footer>
                      </blockquote>
                    )}
                  </div>

                  {/* Right: outcomes */}
                  <div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-5">The Outcomes</h3>
                    <div className="space-y-4">
                      {caseStudy.outcomes.map((outcome, i) => (
                        <motion.div
                          key={i}
                          className="rounded-xl border border-border bg-card p-5 shadow-sm"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                              <outcome.icon size={20} className="text-accent" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-display font-bold text-xl text-foreground">{outcome.metric}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{outcome.label}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground italic">
                      Data source: NDG client impact data, measured over 12-month engagement period (2024)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

        {/* Other Case Studies Grid */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-lg text-foreground mb-10">More Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies
                .filter((cs) => !cs.featured)
                .map((caseStudy) => (
                  <article
                    key={caseStudy.slug}
                    className="rounded-xl border border-border bg-card p-7 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-display font-bold text-accent">{caseStudy.industry}</span>
                      <span className="text-xs text-muted-foreground">{caseStudy.size}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-card-foreground mb-2">{caseStudy.client}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{caseStudy.challenge}</p>
                    <div className="space-y-3 mb-5">
                      {caseStudy.outcomes.slice(0, 2).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                            <outcome.icon size={16} className="text-accent" aria-hidden="true" />
                          </div>
                          <div>
                            <span className="font-display font-bold text-sm text-foreground">{outcome.metric}</span>
                            <span className="text-xs text-muted-foreground ml-1.5">{outcome.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {caseStudy.testimonial && (
                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          "{caseStudy.testimonial.quote.slice(0, 120)}..."
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1.5">
                          {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Industry Evidence */}
        <section className="bg-warm-stone py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-lg text-foreground mb-10">Industry Evidence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {industryEvidence.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-card p-7 shadow-sm"
                >
                  <p className="font-display font-bold text-xl text-foreground">{item.value}</p>
                  <p className="font-display font-semibold text-sm text-foreground mt-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-accent hover:underline"
                  >
                    Source: {item.sourceLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
            <h2 className="font-display font-bold text-lg md:text-xl leading-tight">
              Ready to create your own success story?
            </h2>
            <p className="mt-4 opacity-75 text-base leading-relaxed max-w-[50ch] mx-auto">
              Book a discovery call to discuss how we can help you achieve similar outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@neurodiversityglobal.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
              >
                Book a Discovery Call
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary-foreground/25 text-primary-foreground font-display font-bold text-sm hover:bg-primary-foreground/10 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudies;
