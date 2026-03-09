import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageCTA from "@/components/templates/PageCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { blogPosts } from "@/data/blogPosts";
import { NEURO_COLOURS } from "@/data/neuroColours";

import sendNavigatorImg from "@/assets/resources/send-navigator.png";
import badParentsImg from "@/assets/resources/are-we-bad-parents.png";
import dopamineImg from "@/assets/resources/dopamine-on-demand.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

const pageSections = [
  { id: "navigator", label: "SEND Navigator", icon: Compass },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "resources", label: "Resources", icon: ShieldCheck },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const parentBlogs = blogPosts.filter((p) => p.category === "Parents");

const parentResources = [
  { title: "Are We Bad Parents?", description: "One tired accusation. And the reality of parenting a neurodivergent child. An open letter that resonated with thousands.", href: "https://awbp.neuro.support/", badge: "Open Letter", image: badParentsImg },
  { title: "The Day We Gave Our Children Dopamine", description: "Smartphones, dopamine, and what it means for neurodivergent young people.", href: "https://smartphonefree.neurodiversityglobal.com/", badge: "Long Read", image: dopamineImg },
];

const Parents = () => {
  return (
    <>
      <SEOHead title="For Parents: SEND Navigator & Neurodiversity Resources" description="Free tools and resources for parents of neurodivergent children." path="/parents" />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.neurodiversityglobal.com/" }, { name: "Parents", url: "https://www.neurodiversityglobal.com/parents" }])} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Parents" }]} />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">For parents</p>
            <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] max-w-3xl">Tools and resources built for families navigating neurodiversity</h1>
            <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">We're parents too. Everything here is built from lived experience, designed to give you clarity, confidence, and something practical you can actually use.</p>
          </div>
        </section>

        {/* SEND Navigator */}
        <section id="navigator" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Interactive tool</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-3">SEND Reform Navigator</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">Plain-English answers about SEND reform. What we know, what's changing, and what hasn't. Use it directly below. No sign-up needed.</p>
            <div className="rounded-2xl border border-border overflow-hidden shadow-lg bg-card">
              <div className="flex items-center gap-3 px-5 py-3 border-b border-border">
                <img src={sendNavigatorImg} alt="" className="w-8 h-8 rounded-md object-cover" />
                <div>
                  <p className="font-display font-bold text-sm text-card-foreground">SEND Reform Navigator</p>
                  <p className="text-xs text-muted-foreground">A practical guide for families</p>
                </div>
                <a href="https://sendnavigator.neuro.support" target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-xs text-accent font-semibold hover:underline">
                  Open full site <ExternalLink size={12} />
                </a>
              </div>
              <iframe src="https://sendnavigator.neuro.support" title="SEND Reform Navigator" className="w-full border-0" style={{ height: "80vh", minHeight: "600px" }} loading="lazy" allow="clipboard-write" />
            </div>
          </div>
        </section>

        {/* Blog */}
        {parentBlogs.length > 0 && (
          <section id="blog" className="bg-primary py-20 lg:py-28">
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Parent guides</p>
              <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-10">Written for parents, by someone who gets it</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parentBlogs.map((post, i) => (
                  <motion.div key={post.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fadeUp}>
                    <Link to={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] overflow-hidden hover:bg-primary-foreground/[0.1] transition-all">
                      <div className="h-1" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/20 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">{post.category}</span>
                        <h3 className="font-display font-bold text-sm leading-tight mb-2 text-primary-foreground group-hover:text-accent transition-colors">{post.title}</h3>
                        <p className="text-xs text-primary-foreground/60 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">Read more <ArrowRight size={14} /></span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Resources */}
        <section id="resources" className="bg-warm-stone py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Resources</p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground mb-10">More from our team</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {parentResources.map((resource, i) => (
                <motion.a key={resource.title} href={resource.href} target="_blank" rel="noopener noreferrer" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-1" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">{resource.badge}</span>
                    <h3 className="font-display font-bold text-sm leading-tight mb-2">{resource.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{resource.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">Visit <ExternalLink size={14} /></span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Need support as a parent?" description="We understand. Get in touch and we'll point you to the right resources, or just listen." />
      </main>
      <Footer />
    </>
  );
};

export default Parents;
