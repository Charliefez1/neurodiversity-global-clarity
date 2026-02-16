import { useEffect, useState } from "react";
import { Newspaper, ExternalLink, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsItem {
  id: string;
  title: string;
  url: string;
  source_name: string;
  source_domain: string | null;
  topic: string;
  summary: string | null;
  published_at: string | null;
  discovered_at: string;
}

const NewsHeadlines = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news_items")
        .select("*")
        .eq("status", "published")
        .order("discovered_at", { ascending: false })
        .limit(6);
      if (data) setItems(data as NewsItem[]);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="bg-primary py-3">
        <div className="mx-auto max-w-wide px-6 lg:px-10 flex items-center gap-3">
          <Newspaper size={14} className="text-accent shrink-0" />
          <span className="text-xs text-primary-foreground/50 font-display font-semibold">Loading headlines...</span>
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <section className="bg-primary border-b border-primary-foreground/8">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-3">
        <div className="flex items-center gap-3 mb-3">
          <Newspaper size={14} className="text-accent shrink-0" />
          <span className="text-xs font-display font-bold uppercase tracking-widest text-primary-foreground/50">
            Breaking News
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 px-4 py-3 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-display font-semibold text-primary-foreground/90 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] font-display font-semibold text-accent/70">
                    {item.source_name}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-primary-foreground/40">
                    <Clock size={9} />
                    {timeAgo(item.published_at || item.discovered_at)}
                  </span>
                </div>
              </div>
              <ExternalLink size={12} className="text-primary-foreground/30 group-hover:text-accent shrink-0 mt-1 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHeadlines;
