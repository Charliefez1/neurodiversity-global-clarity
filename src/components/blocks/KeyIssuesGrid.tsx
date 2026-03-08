import { type LucideIcon } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";

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
      {issues.map((issue, i) => {
        const accentColour = NEURO_COLOURS[i % NEURO_COLOURS.length];
        return (
          <article
            key={i}
            className="rounded-xl border border-border border-t-3 bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            style={{ borderTopColor: accentColour }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accentColour}20`, color: accentColour }}
              >
                {issue.icon ? (
                  <issue.icon size={16} aria-hidden="true" />
                ) : (
                  <span className="font-display font-bold text-xs">{i + 1}</span>
                )}
              </span>
              <h3 className="font-display font-bold text-sm text-card-foreground leading-tight">{issue.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{issue.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default KeyIssuesGrid;
