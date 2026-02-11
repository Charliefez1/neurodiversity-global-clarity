import { useState, useMemo, useRef } from "react";
import { Search, Clock, User, Sparkles, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import PageHero from "@/components/templates/PageHero";
import PageCTA from "@/components/templates/PageCTA";
import { workshopCategories, allWorkshops, type Workshop } from "@/data/workshops";
import workshopHeroTeam from "@/assets/workshop-hero-team.png";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = workshop.icon;

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className="group text-left w-full rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-accent"
      aria-expanded={expanded}
    >
      <div className="flex items-start gap-4">
         <div className={`w-10 h-10 rounded-lg ${workshop.flagship ? 'bg-burnt-orange/15' : 'bg-accent/10'} flex items-center justify-center shrink-0 group-hover:${workshop.flagship ? 'bg-burnt-orange/25' : 'bg-accent/20'} transition-colors`}>
           <Icon size={20} className={workshop.flagship ? "text-burnt-orange" : "text-accent"} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-sm text-card-foreground leading-snug">
            {workshop.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-1.5">
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} aria-hidden="true" />
              {workshop.duration}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <User size={12} aria-hidden="true" />
              {workshop.ledBy}
            </span>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-accent mb-1">What this covers</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{workshop.summary}</p>
          </div>
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-[0.12em] text-accent mb-1">Outcomes</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{workshop.outcomes}</p>
          </div>
        </div>
      )}
    </button>
  );
};

const Workshops = () => {
  const [query, setQuery] = useState("");
  const [aiQuery, setAiQuery] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResults, setAiResults] = useState<string[] | null>(null);
  const { toast } = useToast();

  const handleAiSearch = async () => {
    const q = aiQuery.trim();
    if (!q) return;
    setAiLoading(true);
    setAiResults(null);
    setQuery("");
    try {
      const { data, error } = await supabase.functions.invoke("workshop-finder", {
        body: { query: q },
      });
      if (error) throw error;
      if (data?.workshopIds) {
        setAiResults(data.workshopIds);
      }
    } catch (e: any) {
      console.error(e);
      toast({ title: "Could not reach our workshop advisor", description: "Try using the text search instead.", variant: "destructive" });
    } finally {
      setAiLoading(false);
    }
  };

  const filteredCategories = useMemo(() => {
    // Recommended results mode
    if (aiResults && aiResults.length > 0) {
      const idSet = new Set(aiResults);
      return workshopCategories
        .map((cat) => ({
          ...cat,
          workshops: cat.workshops.filter((w) => idSet.has(w.id)),
        }))
        .filter((cat) => cat.workshops.length > 0);
    }

    if (!query.trim()) return workshopCategories;

    const q = query.toLowerCase();
    return workshopCategories
      .map((cat) => ({
        ...cat,
        workshops: cat.workshops.filter(
          (w) =>
            w.title.toLowerCase().includes(q) ||
            w.summary.toLowerCase().includes(q) ||
            w.outcomes.toLowerCase().includes(q) ||
            w.ledBy.toLowerCase().includes(q) ||
            w.duration.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.workshops.length > 0);
  }, [query, aiResults]);

  const totalCount = allWorkshops.length;
  const filteredCount = filteredCategories.reduce((sum, c) => sum + c.workshops.length, 0);

  return (
    <>
      <SEOHead
        title="Workshops & Training Sessions"
        description={`${totalCount} neurodiversity training workshops and sessions for managers, HR teams, leaders, and organisations. Accredited, evidence-based, led by lived experience.`}
        path="/workshops"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Workshops", url: "https://www.neurodiversityglobal.com/workshops" },
      ])} />
      <JsonLd data={serviceSchema(
        "Neurodiversity Workshops",
        `${totalCount} accredited neurodiversity training workshops and sessions covering awareness, leadership, condition-specific understanding, and sector-specific delivery.`,
        "https://www.neurodiversityglobal.com/workshops"
      )} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workshops" }]} />

      <main>
        <PageHero
          badge="Workshops"
          title="Neurodiversity training that changes practice"
          description="50+ 'live' (Online or In Person) Workshops covering awareness, leadership, condition-specific understanding, lived experience, sector delivery, and organisational strategy. All designed by neurodivergent professionals."
        />

        {/* Workshop Finder */}
        <section className="bg-primary -mt-8">
          <div className="mx-auto max-w-wide px-6 lg:px-10 py-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-accent" aria-hidden="true" />
                <p className="font-display font-bold text-sm text-primary-foreground">Neurodiversity In Work Workshop Finder</p>
              </div>
              <p className="text-sm text-primary-foreground/75 mb-4">
                Tell us what you're looking for and we'll recommend the best sessions for you.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); handleAiSearch(); }}
                className="flex gap-3"
              >
                <label htmlFor="workshop-search" className="sr-only">Describe what you need</label>
                <input
                  id="workshop-search"
                  type="text"
                  placeholder="e.g. 'Training for line managers who struggle with performance reviews'"
                  value={aiQuery}
                  onChange={(e) => { setAiQuery(e.target.value); if (aiResults) setAiResults(null); }}
                  disabled={aiLoading}
                  className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 pl-4 pr-4 py-3 text-xs text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={aiLoading || !aiQuery.trim()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                  Find
                </button>
              </form>
              {aiResults && (
                <div className="mt-3 flex items-center gap-3">
                  <p className="text-xs text-primary-foreground/75">
                    Found {aiResults.length} recommended workshop{aiResults.length !== 1 ? "s" : ""} below
                  </p>
                  <button
                    onClick={() => { setAiResults(null); setAiQuery(""); }}
                    className="text-xs text-accent hover:underline"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Text search */}
        <section className="bg-warm-sand border-b border-border">
          <div className="mx-auto max-w-wide px-6 lg:px-10 py-6">
            <div className="max-w-xl">
              <label htmlFor="workshop-search" className="sr-only">Search workshops</label>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  id="workshop-search"
                  type="search"
                  placeholder="Or search by name, topic, or audience…"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); if (aiResults) setAiResults(null); }}
                  className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                />
              </div>
              {query.trim() && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Showing {filteredCount} of {totalCount} workshops
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Categories and cards */}
        {filteredCategories.map((category, catIdx) => (
          <section
            key={category.id}
            id={category.id}
            className={`${catIdx % 3 === 0 ? "bg-warm-sand" : catIdx % 3 === 1 ? "bg-sage" : "bg-lavender"} py-16 lg:py-24`}
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <div className="max-w-2xl mb-10">
                <h2
                  id={`${category.id}-heading`}
                  className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground"
                >
                  {category.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-[55ch]">
                  {category.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.workshops.map((workshop) => (
                  <WorkshopCard key={workshop.id} workshop={workshop} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {filteredCategories.length === 0 && query.trim() && (
          <section className="bg-warm-sand py-24">
            <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
              <p className="text-muted-foreground text-base">
                No workshops match "<strong className="text-foreground">{query}</strong>". Try a different search term.
              </p>
            </div>
          </section>
        )}

        <PageCTA
          title="Not sure which workshop is right?"
          description="Book a discovery call and we'll recommend the right sessions for your organisation. No obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default Workshops;
