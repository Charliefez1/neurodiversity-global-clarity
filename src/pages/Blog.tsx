import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import MultiCTABar from "@/components/MultiCTABar";
import { blogPosts } from "@/data/blogPosts";

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", badge: "bg-rose-100 text-rose-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", badge: "bg-violet-100 text-violet-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", badge: "bg-amber-100 text-amber-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200", badge: "bg-sky-100 text-sky-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", badge: "bg-teal-100 text-teal-700" },
};

const Blog = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const featuredAccent = accentMap[featured.accentColor] || accentMap.teal;

  return (
    <>
      <SEOHead
        title="Blog | Neurodiversity Global"
        description="Expert articles on neurodiversity in the workplace. Practical guidance for HR professionals and neurodivergent employees on ADHD, dyslexia, dyspraxia, and inclusion."
        path="/blog"
      />
      <Navbar />

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
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <Link
            to={`/blog/${featured.slug}`}
            className={`group block rounded-2xl border ${featuredAccent.border} ${featuredAccent.bg} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
          >
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-3xl">{featured.iconEmoji}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-display font-bold ${featuredAccent.badge}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {featured.readTime}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {new Date(featured.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <h2 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-foreground leading-tight max-w-3xl group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-display font-bold text-accent group-hover:gap-3 transition-all">
                Read article <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-12 lg:pb-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => {
              const accent = accentMap[post.accentColor] || accentMap.teal;
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group flex flex-col rounded-xl border ${accent.border} bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Accent strip */}
                  <div className={`h-1.5 ${accent.text.replace("text-", "bg-")}`} />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{post.iconEmoji}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-display font-bold ${accent.badge}`}>
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
              );
            })}
          </div>
        </div>
      </section>

      <MultiCTABar />
      <Footer />
    </>
  );
};

export default Blog;
