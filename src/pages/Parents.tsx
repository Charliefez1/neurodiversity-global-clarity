import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ExternalLink, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { blogPosts } from "@/data/blogPosts";

import sendNavigatorImg from "@/assets/resources/send-navigator.png";
import badParentsImg from "@/assets/resources/are-we-bad-parents.png";
import dopamineImg from "@/assets/resources/dopamine-on-demand.png";

const pageSections = [
  { id: "navigator", label: "SEND Navigator", icon: Compass },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "resources", label: "Resources", icon: ShieldCheck },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const parentBlogs = blogPosts.filter((p) => p.category === "Parents");

const parentResources = [
  {
    title: "Are We Bad Parents?",
    description: "One tired accusation. And the reality of parenting a neurodivergent child. An open letter that resonated with thousands.",
    href: "https://awbp.neuro.support/",
    badge: "Open Letter",
    image: badParentsImg,
  },
  {
    title: "The Day We Gave Our Children Dopamine",
    description: "Smartphones, dopamine, and what it means for neurodivergent young people.",
    href: "https://smartphonefree.neurodiversityglobal.com/",
    badge: "Long Read",
    image: dopamineImg,
  },
];

const Parents = () => {
  return (
    <>
      <SEOHead
        title="For Parents — SEND Navigator & Neurodiversity Resources"
        description="Free tools and resources for parents of neurodivergent children. Use the SEND Navigator, read practical guides, and get support from people who understand."
        path="/parents"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Parents", url: "https://www.neurodiversityglobal.com/parents" },
      ])} />
      <RegisterSections sections={pageSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Parents" }]} />
      <main>
        <PageHero
          badge="For parents"
          title="Tools and resources built for families navigating neurodiversity"
          description="We're parents too. Everything here is built from lived experience — designed to give you clarity, confidence, and something practical you can actually use."
        />

        {/* SEND Navigator embed */}
        <PageSection
          id="navigator"
          badge="Interactive tool"
          title="SEND Reform Navigator"
          description="Plain-English answers about SEND reform. What we know, what's changing, and what hasn't. Use it directly below — no sign-up needed."
          variant="sand"
        >
          <div className="rounded-xl border border-border overflow-hidden shadow-lg bg-background">
            <div className="flex items-center gap-3 px-5 py-3 bg-card border-b border-border">
              <img src={sendNavigatorImg} alt="" className="w-8 h-8 rounded-md object-cover" />
              <div>
                <p className="font-display font-bold text-sm text-card-foreground">SEND Reform Navigator</p>
                <p className="text-xs text-muted-foreground">A practical guide for families</p>
              </div>
              <a
                href="https://sendnavigator.neuro.support"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-xs text-accent font-semibold hover:underline"
              >
                Open full site <ExternalLink size={12} />
              </a>
            </div>
            <iframe
              src="https://sendnavigator.neuro.support"
              title="SEND Reform Navigator"
              className="w-full border-0"
              style={{ height: "80vh", minHeight: "600px" }}
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
        </PageSection>

        {/* Parent blog posts */}
        {parentBlogs.length > 0 && (
          <PageSection
            id="blog"
            badge="Parent guides"
            title="Written for parents, by someone who gets it"
            description="Practical, evidence-informed articles about the real challenges families face — from screen time and meltdowns to navigating a system that wasn't built for your child."
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentBlogs.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-sm leading-tight mb-2 text-card-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Read more <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </PageSection>
        )}

        {/* Other resources */}
        <PageSection
          id="resources"
          badge="Resources"
          title="More from our team"
          variant="sand"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {parentResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-background/60 overflow-hidden hover:bg-background hover:shadow-md transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">
                    {resource.badge}
                  </span>
                  <h3 className="font-display font-bold text-sm leading-tight mb-2">{resource.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{resource.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">
                    Visit <ExternalLink size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </PageSection>

        {/* CTA */}
        <PageCTA
          title="Need support as a parent?"
          description="We understand. Get in touch and we'll point you to the right resources — or just listen."
          primaryLabel="Get in touch"
          primaryHref="mailto:hello@neurodiversityglobal.com"
        />
      </main>
      <Footer />
    </>
  );
};

export default Parents;
