import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import MultiCTABar from "@/components/MultiCTABar";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";

const accentMap: Record<string, { badge: string; blockquote: string; h2: string }> = {
  rose: { badge: "bg-rose-100 text-rose-700", blockquote: "border-rose-400 bg-rose-50", h2: "text-rose-600" },
  violet: { badge: "bg-violet-100 text-violet-700", blockquote: "border-violet-400 bg-violet-50", h2: "text-violet-600" },
  amber: { badge: "bg-amber-100 text-amber-700", blockquote: "border-amber-400 bg-amber-50", h2: "text-amber-600" },
  emerald: { badge: "bg-emerald-100 text-emerald-700", blockquote: "border-emerald-400 bg-emerald-50", h2: "text-emerald-600" },
  sky: { badge: "bg-sky-100 text-sky-700", blockquote: "border-sky-400 bg-sky-50", h2: "text-sky-600" },
  orange: { badge: "bg-orange-100 text-orange-700", blockquote: "border-orange-400 bg-orange-50", h2: "text-orange-600" },
  teal: { badge: "bg-teal-100 text-teal-700", blockquote: "border-teal-400 bg-teal-50", h2: "text-teal-600" },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const related = slug ? getRelatedPosts(slug) : [];

  if (!post) return <Navigate to="/blog" replace />;

  const accent = accentMap[post.accentColor] || accentMap.teal;

  return (
    <>
      <SEOHead title={post.metaTitle} description={post.metaDescription} path={`/blog/${post.slug}`} type="article" />
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 lg:py-20">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-primary-foreground/60 hover:text-accent transition-colors mb-6">
            <ArrowLeft size={14} /> Back to all articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-3xl">{post.iconEmoji}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-display font-bold ${accent.badge}`}>
              {post.category}
            </span>
            <span className="text-xs text-primary-foreground/60 flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-xs text-primary-foreground/60 flex items-center gap-1">
              <Calendar size={12} /> {new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1] max-w-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm md:text-base leading-relaxed opacity-70 max-w-[62ch]">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-foreground prose-h2:border-b prose-h2:border-border prose-h2:pb-3
            prose-h3:text-base prose-h3:md:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
            prose-p:text-muted-foreground prose-p:text-sm prose-p:leading-[1.8] prose-p:mb-5
            prose-li:text-muted-foreground prose-li:text-sm prose-li:leading-[1.8]
            prose-strong:text-foreground prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:rounded-r-lg prose-blockquote:px-6 prose-blockquote:py-5 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:shadow-md
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-ul:my-5 prose-ol:my-5
          ">
            <ReactMarkdown
              components={{
                blockquote: ({ children }) => (
                  <blockquote className={`border-l-4 ${accent.blockquote} rounded-r-lg px-6 py-5 my-8 not-italic shadow-md`}>
                    {children}
                  </blockquote>
                ),
                h2: ({ children }) => (
                  <h2 className="font-display font-bold text-xl md:text-2xl mt-12 mb-5 text-foreground border-b border-border pb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-display font-bold text-base md:text-lg mt-8 mb-3 text-foreground">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground text-sm leading-[1.8] mb-5">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="my-5 space-y-2 list-disc list-outside pl-5">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground text-sm leading-[1.8]">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-bold">{children}</strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <MultiCTABar />

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <h2 className="font-display font-bold text-lg md:text-xl mb-8 text-foreground">
              Continue reading
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rp) => {
                const ra = accentMap[rp.accentColor] || accentMap.teal;
                return (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group block rounded-xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-1.5 ${ra.badge.split(" ")[0].replace("bg-", "bg-").replace("/100", "/400")}`} style={{ backgroundColor: `var(--${rp.accentColor}, currentColor)` }} />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{rp.iconEmoji}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-display font-bold ${ra.badge}`}>{rp.category}</span>
                      </div>
                      <h3 className="font-display font-bold text-sm leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1 text-xs text-accent font-display font-bold group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default BlogPost;
