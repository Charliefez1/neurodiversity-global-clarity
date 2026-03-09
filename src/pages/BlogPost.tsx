import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageCTA from "@/components/templates/PageCTA";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import { NEURO_COLOURS } from "@/data/neuroColours";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const related = slug ? getRelatedPosts(slug) : [];

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEOHead title={post.metaTitle} description={post.metaDescription} path={`/blog/${post.slug}`} type="article" />
      <Navbar />

      {/* Hero with image */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="relative mx-auto max-w-wide px-6 lg:px-10 py-16 lg:py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-primary-foreground/60 hover:text-accent transition-colors mb-6">
            <ArrowLeft size={14} /> Back to all articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-display font-bold bg-accent/20 text-accent">{post.category}</span>
            <span className="text-xs text-primary-foreground/60 flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span className="text-xs text-primary-foreground/60 flex items-center gap-1"><Calendar size={12} /> {new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1] max-w-4xl">{post.title}</h1>
          <p className="mt-5 text-sm md:text-base leading-relaxed opacity-70 max-w-[62ch]">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-warm-stone">
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
                  <blockquote className="border-l-4 border-accent bg-accent/5 rounded-r-lg px-6 py-5 my-8 not-italic shadow-md">{children}</blockquote>
                ),
                h2: ({ children }) => (
                  <h2 className="font-display font-bold text-xl md:text-2xl mt-12 mb-5 text-foreground border-b border-border pb-3">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-display font-bold text-base md:text-lg mt-8 mb-3 text-foreground">{children}</h3>
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

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-primary">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Keep reading</p>
            <h2 className="font-display font-bold text-xl md:text-2xl mb-10 text-primary-foreground">Continue reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rp, i) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`}
                  className="group block rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] shadow-md hover:shadow-xl hover:bg-primary-foreground/[0.1] transition-all duration-300 overflow-hidden"
                >
                  <div className="h-1" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="px-2 py-0.5 rounded-full text-xs font-display font-bold bg-accent/20 text-accent">{rp.category}</span>
                    <h3 className="mt-3 font-display font-bold text-sm leading-snug text-primary-foreground group-hover:text-accent transition-colors line-clamp-2">{rp.title}</h3>
                    <div className="mt-3 flex items-center gap-1 text-xs text-accent font-display font-bold group-hover:gap-2 transition-all">Read <ArrowRight size={12} /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA title="Want to explore more?" description="Browse our full blog or get in touch to discuss how we can support your organisation." />
      <Footer />
    </>
  );
};

export default BlogPost;
