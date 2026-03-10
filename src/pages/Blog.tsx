import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, FileText, Filter } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/components/JsonLd";
import NewsHeadlines from "@/components/NewsHeadlines";
import BlogSearch from "@/components/BlogSearch";
import { blogPosts } from "@/data/blogPosts";
import { NEURO_COLOURS } from "@/data/neuroColours";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

const CATEGORIES = ["All", "Children & Young People", "Workplace", "White Paper"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

const categoryGroup = (cat: string): string => {
  if (cat === "White Paper") return "White Paper";
  if (cat === "Children & Young People") return "Children & Young People";
  return "Workplace";
};

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const sorted = useMemo(() => [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()), []);
  const filtered = useMemo(() => activeFilter === "All" ? sorted : sorted.filter((p) => categoryGroup(p.category) === activeFilter), [sorted, activeFilter]);

  const latest = activeFilter === "All" ? sorted.slice(0, 3) : [];
  const featured = activeFilter === "All" ? sorted.slice(3, 6) : [];
  const childrenPosts = useMemo(() => sorted.filter((p) => categoryGroup(p.category) === "Children & Young People"), [sorted]);
  const workplacePosts = useMemo(() => sorted.filter((p) => categoryGroup(p.category) === "Workplace"), [sorted]);
  const whitePapers = useMemo(() => sorted.filter((p) => categoryGroup(p.category) === "White Paper"), [sorted]);

  const PostCard = ({ post, index = 0 }: { post: (typeof blogPosts)[0]; index?: number }) => (
    <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fadeUp}>
      <Link to={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="h-1" style={{ backgroundColor: NEURO_COLOURS[index % NEURO_COLOURS.length] }} />
        <div className="aspect-[16/9] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-display font-bold ${post.category === "White Paper" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
              {post.category === "White Paper" && <FileText size={10} className="inline mr-1 -mt-0.5" />}
              {post.category}
            </span>
          </div>
          <h3 className="font-display font-bold text-base leading-snug text-foreground group-hover:text-accent transition-colors flex-1">{post.title}</h3>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              <span className="flex items-center gap-1"><Calendar size={11} /> {new Date(post.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
            <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
    </motion.div>
  );

  const SectionBlock = ({ badge, title, posts, bg = "bg-warm-stone" }: { badge?: string; title: string; posts: (typeof blogPosts)[0][]; bg?: string }) =>
    posts.length > 0 ? (
      <section className={`py-20 lg:py-28 ${bg}`}>
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          {badge && <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-2">{badge}</p>}
          <h2 className={`font-display font-bold text-xl md:text-2xl mb-10 ${bg.includes("primary") ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
          </div>
        </div>
      </section>
    ) : null;

  return (
    <>
      <SEOHead title="Blog | Neurodiversity Global" description="Expert articles on neurodiversity in the workplace and for children and young people." path="/blog" />
      <Navbar />
      <NewsHeadlines />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Insights and Guidance</p>
          <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] max-w-3xl">The Neurodiversity Blog</h1>
          <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">Evidence-informed articles for HR professionals, parents, managers, and neurodivergent individuals navigating work, education, and inclusion.</p>
          <div className="mt-8 max-w-3xl"><BlogSearch /></div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-warm-stone border-b border-border sticky top-0 z-30">
        <div className="mx-auto max-w-wide px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto">
          <Filter size={16} className="text-muted-foreground shrink-0" />
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-bold whitespace-nowrap transition-colors ${activeFilter === cat ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-accent/10"}`}
            >{cat}</button>
          ))}
        </div>
      </div>

      {activeFilter !== "All" && <SectionBlock title={activeFilter} posts={filtered} />}
      {activeFilter === "All" && (
        <>
          <SectionBlock badge="Just published" title="New articles from Neurodiversity Global" posts={latest} />
          <SectionBlock title="Featured articles" posts={featured} bg="bg-primary" />
          <SectionBlock badge="For parents and carers" title="Children and Young People" posts={childrenPosts} />
          <SectionBlock badge="For employers and HR" title="Workplace" posts={workplacePosts} bg="bg-primary" />
          <SectionBlock badge="In-depth research" title="White Papers" posts={whitePapers} />
        </>
      )}

      <Footer />
    </>
  );
};

export default Blog;
