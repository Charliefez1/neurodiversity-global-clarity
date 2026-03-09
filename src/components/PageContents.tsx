import { useCallback } from "react";
import { 
  Briefcase, AlertTriangle, TrendingUp, Award, 
  Brain, BarChart3, Heart, BookOpen, HelpCircle 
} from "lucide-react";

const sections = [
  { id: "services", label: "What we deliver", icon: Briefcase },
  { id: "problem", label: "The challenge", icon: AlertTriangle },
  { id: "impact", label: "Impact & outcomes", icon: TrendingUp },
  { id: "evidence", label: "Evidence base", icon: Award },
  { id: "neuro-framework", label: "The framework", icon: Brain },
  { id: "inclusive-performance", label: "The model", icon: BarChart3 },
  { id: "values", label: "Accessibility", icon: Heart },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "contact", label: "Get in touch", icon: HelpCircle },
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-medium text-foreground/70 bg-background border border-border/50 hover:border-accent/40 hover:text-accent transition-colors"
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
