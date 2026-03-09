import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import NewsHeadlines from "@/components/NewsHeadlines";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <SEOHead
        title="Blog | Neurodiversity Global"
        description="Expert articles on neurodiversity in the workplace. Practical guidance for HR professionals and neurodivergent employees on ADHD, dyslexia, dyspraxia, and inclusion."
        path="/blog"
      />
      <Navbar />
      <NewsHeadlines />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
            Insights and Guidance
          </p>
          <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] max-w-3xl">
            The Neurodiversity Blog
          </h1>
          <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
            Evidence-informed articles for HR professionals, managers, and neurodivergent individuals navigating work, inclusion, and performance.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-display font-bold ${featured.category === "White Paper" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      {featured.category === "White Paper" && <FileText size={11} className="inline mr-1 -mt-0.5" />}
                      {featured.category}
                    </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {new Date(featured.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <h2 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-display font-bold text-accent group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-display font-bold ${post.category === "White Paper" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      {post.category === "White Paper" && <FileText size={10} className="inline mr-1 -mt-0.5" />}
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base leading-snug text-foreground group-hover:text-accent transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      <span className="flex items-center gap-1"><Calendar size={11} /> {new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                    </div>
                    <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  );
};

export default Blog;
