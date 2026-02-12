import { useState } from "react";
import { Search, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { allWorkshops } from "@/data/workshops";
import { useToast } from "@/hooks/use-toast";

const HeroWorkshopSearch = () => {
  const [query, setQuery] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [results, setResults] = useState<typeof allWorkshops | null>(null);
  const { toast } = useToast();

  const handleSearch = async () => {
    const q = query.trim();
    if (!q) return;
    setAiLoading(true);
    setResults(null);
    try {
      const { data, error } = await supabase.functions.invoke("workshop-finder", {
        body: { query: q },
      });
      if (error) throw error;
      if (data?.workshopIds) {
        const idSet = new Set(data.workshopIds as string[]);
        setResults(allWorkshops.filter((w) => idSet.has(w.id)));
      }
    } catch {
      toast({ title: "Could not reach the workshop finder", description: "Try again shortly.", variant: "destructive" });
    } finally {
      setAiLoading(false);
    }
  };

  const handleTextFilter = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const matched = allWorkshops.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.summary.toLowerCase().includes(q) ||
        w.outcomes.toLowerCase().includes(q)
    );
    setResults(matched);
  };

  return (
    <div className="rounded-xl border border-primary-foreground/12 bg-primary-foreground/[0.05] p-6 relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-accent" aria-hidden="true" />
        <p className="font-display font-bold text-sm text-primary-foreground">
          Neurodiversity In Work Workshop Finder
        </p>
      </div>
      <p className="text-xs text-primary-foreground/60 mb-4">
        Search by name or topic, or describe what you need and our team will recommend the best sessions.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
        className="flex gap-3"
      >
        <label htmlFor="hero-workshop-search" className="sr-only">Search workshops</label>
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/40" aria-hidden="true" />
          <input
            id="hero-workshop-search"
            type="text"
            placeholder="e.g. 'manager training' or 'performance reviews for neurodivergent staff'"
            value={query}
            onChange={(e) => { setQuery(e.target.value); if (results) setResults(null); }}
            disabled={aiLoading}
            className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.06] pl-10 pr-4 py-3 text-xs text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-burnt-orange transition-colors disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={aiLoading || !query.trim()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-burnt-orange text-burnt-orange-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-burnt-orange/20"
        >
          {aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          Find
        </button>
        <button
          type="button"
          onClick={handleTextFilter}
          disabled={!query.trim()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-display font-semibold text-sm hover:bg-primary-foreground/10 transition-colors disabled:opacity-50"
        >
          <Search size={16} />
          Search
        </button>
      </form>

      {results && (
        <div className="mt-4">
          {results.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-primary-foreground/70">
                  Found {results.length} workshop{results.length !== 1 ? "s" : ""}
                </p>
                <button
                  onClick={() => { setResults(null); setQuery(""); }}
                  className="text-xs text-accent hover:underline"
                >
                  Clear
                </button>
              </div>
              <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
                {results.map((w) => (
                  <a
                    key={w.id}
                    href="/workshops"
                    className="block rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-3 hover:bg-primary-foreground/[0.08] transition-colors"
                  >
                    <p className="font-display font-bold text-sm text-primary-foreground leading-snug">{w.title}</p>
                    <p className="text-xs text-primary-foreground/50 mt-1">{w.duration} · {w.ledBy}</p>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <p className="text-xs text-primary-foreground/60">No workshops matched. Try a different search term.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroWorkshopSearch;
