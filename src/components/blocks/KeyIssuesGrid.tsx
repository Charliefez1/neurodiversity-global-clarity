import { type LucideIcon } from "lucide-react";

interface KeyIssue {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface KeyIssuesGridProps {
  issues: KeyIssue[];
}

const KeyIssuesGrid = ({ issues }: KeyIssuesGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {issues.map((issue, i) => (
        <article
          key={i}
          className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
              {issue.icon ? (
                <issue.icon size={16} className="text-accent" aria-hidden="true" />
              ) : (
                <span className="font-display font-bold text-xs text-accent">{i + 1}</span>
              )}
            </span>
            <h3 className="font-display font-bold text-sm text-card-foreground leading-tight">{issue.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{issue.description}</p>
        </article>
      ))}
    </div>
  );
};

export default KeyIssuesGrid;
