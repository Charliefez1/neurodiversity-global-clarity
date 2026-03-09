import { ArrowRight, TrendingUp, Users, Target, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import PullQuote from "@/components/blocks/PullQuote";
import PageCTA from "@/components/templates/PageCTA";
import { NEURO_COLOURS } from "@/data/neuroColours";
import diverseImg from "@/assets/industries/diverse-workforce.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

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
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />

      <main>
        {/* Hero — split with image */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Case Studies</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">
                  Proof that neuroinclusion works
                </h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
                  Real organisations, real outcomes. See how we've helped companies reduce turnover, improve engagement, and build confident, inclusive teams.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={diverseImg} alt="Diverse team collaborating" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                {featuredCase && (
                  <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[220px]">
                    <p className="font-display font-bold text-2xl text-accent">{featuredCase.outcomes[0].metric}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{featuredCase.outcomes[0].label}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.filter((cs) => cs.featured).map((caseStudy) => (
          <section key={caseStudy.slug} className="bg-warm-stone py-20 lg:py-28">
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Featured Case Study</p>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">{caseStudy.client}</h2>
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
                        <span key={service} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-display font-semibold">{service}</span>
                      ))}
                    </div>
                  </div>
                  {caseStudy.testimonial && (
                    <blockquote className="mt-8 border-l-4 border-accent pl-4 rounded-r-lg bg-card p-5">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">"{caseStudy.testimonial.quote}"</p>
                      <footer className="mt-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">{caseStudy.testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-xs font-display font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                          <p className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  )}
                </motion.div>

                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">The Outcomes</h3>
                  {caseStudy.outcomes.map((outcome, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="rounded-2xl border border-border bg-card p-6 shadow-md overflow-hidden"
                    >
                      <div className="h-1 -mx-6 -mt-6 mb-5" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${NEURO_COLOURS[i % NEURO_COLOURS.length]}18`, color: NEURO_COLOURS[i % NEURO_COLOURS.length] }}>
                          <outcome.icon size={20} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-xl text-foreground">{outcome.metric}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{outcome.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <PullQuote quote="The question is no longer whether neuroinclusion works. The question is how quickly you can implement it." accentIndex={2} />

        {/* Other Case Studies */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">More results</p>
            <h2 className="font-display font-bold text-xl md:text-2xl mb-10 text-primary-foreground">More Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.filter((cs) => !cs.featured).map((caseStudy, idx) => (
                <motion.article
                  key={caseStudy.slug}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-7 hover:bg-primary-foreground/[0.1] transition-all overflow-hidden"
                >
                  <div className="h-1 -mx-7 -mt-7 mb-6" style={{ backgroundColor: NEURO_COLOURS[idx % NEURO_COLOURS.length] }} />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-display font-bold text-accent">{caseStudy.industry}</span>
                    <span className="text-xs text-primary-foreground/50">{caseStudy.size}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-primary-foreground mb-2">{caseStudy.client}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed mb-5">{caseStudy.challenge}</p>
                  <div className="space-y-3 mb-5">
                    {caseStudy.outcomes.slice(0, 2).map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${NEURO_COLOURS[i % NEURO_COLOURS.length]}25`, color: NEURO_COLOURS[i % NEURO_COLOURS.length] }}>
                          <outcome.icon size={16} aria-hidden="true" />
                        </div>
                        <div>
                          <span className="font-display font-bold text-sm text-primary-foreground">{outcome.metric}</span>
                          <span className="text-xs text-primary-foreground/60 ml-1.5">{outcome.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {caseStudy.testimonial && (
                    <div className="border-t border-primary-foreground/10 pt-4">
                      <p className="text-xs text-primary-foreground/50 italic leading-relaxed">"{caseStudy.testimonial.quote.slice(0, 120)}..."</p>
                      <p className="text-xs text-primary-foreground/40 mt-1.5">{caseStudy.testimonial.author}, {caseStudy.testimonial.role}</p>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Evidence */}
        <section className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Independent evidence</p>
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-10">Industry Evidence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {industryEvidence.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-7 shadow-md overflow-hidden"
                >
                  <div className="h-1 -mx-7 -mt-7 mb-6" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <p className="font-display font-bold text-2xl text-foreground">{item.value}</p>
                  <p className="font-display font-semibold text-sm text-foreground mt-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-accent hover:underline">
                    Source: {item.sourceLabel}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Ready to create your own success story?" description="Book a discovery call to discuss how we can help you achieve similar outcomes." />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
