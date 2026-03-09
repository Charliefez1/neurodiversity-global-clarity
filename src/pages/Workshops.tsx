import { useState, useMemo } from "react";
import { Search, Clock, User, Loader2, GraduationCap, ArrowRight, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema, serviceSchema, courseListSchema } from "@/components/JsonLd";
import PageCTA from "@/components/templates/PageCTA";
import PullQuote from "@/components/blocks/PullQuote";
import { workshopCategories, allWorkshops, type Workshop } from "@/data/workshops";
import workshopHeroImg from "@/assets/workshop-hero-team.png";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RegisterSections } from "@/contexts/PageSectionsContext";
import { NEURO_COLOURS } from "@/data/neuroColours";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const workshopSections = [
  { id: "workshop-finder", label: "Workshop Finder", icon: Search },
  ...workshopCategories.map((cat) => ({ id: cat.id, label: cat.title, icon: GraduationCap })),
];

/* ─── Workshop Card ─── */
const WorkshopCard = ({ workshop, index }: { workshop: Workshop; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = workshop.icon;
  const colour = NEURO_COLOURS[index % NEURO_COLOURS.length];

  return (
    <motion.button
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      onClick={() => setExpanded(!expanded)}
      className="group text-left w-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-accent"
      aria-expanded={expanded}
    >
      <div className="h-1" style={{ backgroundColor: workshop.flagship ? undefined : colour }} 
           {...(workshop.flagship ? { className: "h-1 bg-burnt-orange" } : {})} />
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
            style={
              workshop.flagship
                ? { backgroundColor: "hsl(var(--burnt-orange) / 0.12)", color: "hsl(var(--burnt-orange))" }
                : { backgroundColor: `${colour}18`, color: colour }
            }
          >
            <Icon size={20} aria-hidden="true" />
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
          <ChevronDown
            size={16}
            className={`shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

/* ─── Page ─── */
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
    if (aiResults && aiResults.length > 0) {
      const idSet = new Set(aiResults);
      return workshopCategories
        .map((cat) => ({ ...cat, workshops: cat.workshops.filter((w) => idSet.has(w.id)) }))
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

  const coreStats = [
    { value: `${totalCount}+`, label: "Live workshops" },
    { value: "4", label: "Core programmes" },
    { value: "100%", label: "Facilitator-led" },
    { value: "Online & In Person", label: "Delivery" },
  ];

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
      <JsonLd data={courseListSchema(
        allWorkshops.map((w) => ({ name: w.title, description: w.summary, duration: w.duration, instructor: w.ledBy }))
      )} />
      <RegisterSections sections={workshopSections} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workshops" }]} />

      <main>
        {/* ═══════════ HERO — image + text split ═══════════ */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                  Workshops & Training
                </p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-primary-foreground">
                  Neurodiversity training that{" "}
                  <span className="text-accent">changes practice</span>
                </h1>
                <p className="mt-5 text-base text-primary-foreground/75 leading-relaxed max-w-[50ch]">
                  Expert-led, always live workshops from 60-minute awareness sessions to full-day strategic programmes. All designed by neurodivergent professionals and grounded in real workplace experience.
                </p>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {coreStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-3 text-center"
                    >
                      <p className="font-display font-bold text-lg text-accent">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="#workshop-finder"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Find the right workshop
                  <ArrowRight size={16} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={workshopHeroImg}
                    alt="Workshop facilitation in action"
                    className="w-full h-[400px] lg:h-[480px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 lg:-left-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[220px]">
                  <p className="font-display font-bold text-2xl text-accent">{totalCount}+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">workshops covering every level of the organisation.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ WORKSHOP FINDER — warm stone ═══════════ */}
        <section id="workshop-finder" className="bg-warm-stone py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
              {/* Left — intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-accent mb-3">
                  Workshop Finder
                </p>
                <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
                  Not sure where to <span className="text-accent">start</span>?
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Describe your situation and our workshop advisor will recommend the best sessions for your team. Or use the text search to browse by name or topic.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-card border border-border p-4 max-w-sm">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Users size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-foreground">Core programmes</p>
                    <p className="text-xs text-muted-foreground">Aware · Champions · Managers · Leaders</p>
                  </div>
                </div>
              </motion.div>

              {/* Right — search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-md"
              >
                {/* AI search */}
                <form
                  onSubmit={(e) => { e.preventDefault(); handleAiSearch(); }}
                  className="space-y-3"
                >
                  <label className="text-xs font-display font-semibold text-muted-foreground block">
                    Describe what you need
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="e.g. 'Training for line managers who struggle with performance reviews'"
                      value={aiQuery}
                      onChange={(e) => { setAiQuery(e.target.value); if (aiResults) setAiResults(null); }}
                      disabled={aiLoading}
                      className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-colors disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={aiLoading || !aiQuery.trim()}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-burnt-orange text-burnt-orange-foreground font-display font-bold text-sm shadow-md shadow-burnt-orange/20 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
                      Find
                    </button>
                  </div>
                </form>

                {aiResults && (
                  <div className="mt-3 flex items-center gap-3">
                    <p className="text-xs text-muted-foreground">
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

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground font-display">or search by name</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Text search */}
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search by name, topic, or audience…"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); if (aiResults) setAiResults(null); }}
                    className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
                {(query.trim() || aiResults) && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Showing {filteredCount} of {totalCount} workshops
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ CATEGORIES ═══════════ */}
        {filteredCategories.map((category, catIdx) => {
          const isDark = catIdx % 2 !== 0;
          return (
            <section
              key={category.id}
              id={category.id}
              className={`${isDark ? "bg-primary" : "bg-background"} py-16 lg:py-24`}
              aria-labelledby={`${category.id}-heading`}
            >
              <div className="mx-auto max-w-wide px-6 lg:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mb-10"
                >
                  <div
                    className="w-12 h-1 rounded-full mb-4"
                    style={{ backgroundColor: NEURO_COLOURS[catIdx % NEURO_COLOURS.length] }}
                  />
                  <h2
                    id={`${category.id}-heading`}
                    className={`font-display font-bold text-xl md:text-2xl leading-tight ${isDark ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {category.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-relaxed max-w-[55ch] ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.workshops.map((workshop, i) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} index={i} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {filteredCategories.length === 0 && (query.trim() || aiResults) && (
          <section className="bg-warm-stone py-24">
            <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
              <p className="text-muted-foreground text-base">
                No workshops match your search. Try a different term or{" "}
                <button
                  onClick={() => { setQuery(""); setAiResults(null); setAiQuery(""); }}
                  className="text-accent hover:underline"
                >
                  clear filters
                </button>
                .
              </p>
            </div>
          </section>
        )}

        <PullQuote
          quote="Training starts the conversation. Systems create change."
          accentIndex={2}
        />

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
