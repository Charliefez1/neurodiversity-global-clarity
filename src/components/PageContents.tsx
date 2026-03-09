import { useCallback } from "react";
import { 
  Briefcase, AlertTriangle, TrendingUp, Award, 
  Brain, BarChart3, Heart, BookOpen, HelpCircle 
} from "lucide-react";

const sections = [
  { id: "services", label: "What we deliver", icon: Briefcase, accent: "border-blue-500/40 hover:bg-blue-500/5" },
  { id: "problem", label: "The challenge", icon: AlertTriangle, accent: "border-red-500/40 hover:bg-red-500/5" },
  { id: "impact", label: "Impact & outcomes", icon: TrendingUp, accent: "border-green-500/40 hover:bg-green-500/5" },
  { id: "evidence", label: "Evidence base", icon: Award, accent: "border-purple-500/40 hover:bg-purple-500/5" },
  { id: "neuro-framework", label: "The framework", icon: Brain, accent: "border-amber-500/40 hover:bg-amber-500/5" },
  { id: "inclusive-performance", label: "The model", icon: BarChart3, accent: "border-blue-500/40 hover:bg-blue-500/5" },
  { id: "values", label: "Accessibility", icon: Heart, accent: "border-red-500/40 hover:bg-red-500/5" },
  { id: "resources", label: "Resources", icon: BookOpen, accent: "border-green-500/40 hover:bg-green-500/5" },
  { id: "contact", label: "Get in touch", icon: HelpCircle, accent: "border-purple-500/40 hover:bg-purple-500/5" },
];

const PageContents = () => {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="bg-muted/50 border-y border-border/40">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-4">
        <p className="text-xs font-display font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
          On this page
        </p>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-medium text-foreground/70 bg-background border-l-2 border ${s.accent} hover:text-foreground transition-colors`}
            >
              <s.icon size={12} className="shrink-0" />
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContents;
