import { useState } from "react";
import { Search, Loader2, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const BlogSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setSearched(true);
    setResults([]);

    try {
      const catalogue = blogPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
      }));

      const { data, error } = await supabase.functions.invoke("blog-search", {
        body: { query: trimmed, posts: catalogue },
      });

      if (error) throw error;

      const slugs: string[] = data?.slugs || [];
      const matched = slugs
        .map((s) => blogPosts.find((p) => p.slug === s))
        .filter(Boolean) as BlogPost[];

      setResults(matched);
    } catch (err) {
      console.error("Blog search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full">
      {/* Search input */}
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/40"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What would you like to learn about? e.g. ADHD adjustments, manager training..."
            className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 pl-11 pr-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="shrink-0 rounded-xl bg-accent px-5 py-3 text-sm font-display font-bold text-white hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Sparkles size={16} />
          )}
          Find articles
        </button>
      </div>

      {/* Results */}
      {searched && !loading && results.length > 0 && (
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {results.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-display font-bold bg-accent/10 text-accent self-start mb-3">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-sm leading-snug text-foreground group-hover:text-accent transition-colors flex-1">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {searched && !loading && results.length === 0 && (
        <p className="mt-4 text-sm text-muted-foreground text-center">
          No matching articles found. Try rephrasing your question.
        </p>
      )}
    </div>
  );
};

export default BlogSearch;
