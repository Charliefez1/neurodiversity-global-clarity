import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import NewsHeadlines from "@/components/NewsHeadlines";
import BlogSearch from "@/components/BlogSearch";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  // Sort all posts by date descending
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const latest = sorted.slice(0, 3);
  const featured = sorted.slice(3, 6);
  const remaining = sorted.slice(6);

  const PostCard = ({ post, size = "default" }: { post: typeof blogPosts[0]; size?: "default" | "compact" }) => (
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
      <div className={`${size === "compact" ? "p-5" : "p-6"} flex-1 flex flex-col`}>
        <div className="flex items-center gap-3 mb-3">
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
            <span className="flex items-center gap-1"><Calendar size={11} /> {new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
          </div>
          <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  );

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
          <div className="mt-8 max-w-3xl">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* New Articles */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-2">
            Just published
          </p>
          <h2 className="font-display font-bold text-xl md:text-2xl mb-8 text-foreground">
            New articles from Neurodiversity Global
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl md:text-2xl mb-8 text-foreground">
            Featured articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      {remaining.length > 0 && (
        <section className="py-12 lg:py-20 bg-muted">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-xl md:text-2xl mb-8 text-foreground">
              More from the blog
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remaining.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Blog;
