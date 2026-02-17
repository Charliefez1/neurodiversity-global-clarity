import { Sparkles } from "lucide-react";

interface Positive {
  title: string;
  description: string;
}

interface PositivesBlockProps {
  items: Positive[];
  opportunity: string;
}

const PositivesBlock = ({ items, opportunity }: PositivesBlockProps) => {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5 hover:bg-accent/[0.08] transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-display font-bold text-xs text-accent">{i + 1}</span>
              </span>
              <div>
                <h4 className="font-display font-bold text-sm text-card-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The opportunity */}
      <div className="rounded-xl bg-accent/10 border border-accent/25 p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
          <Sparkles size={18} className="text-accent" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display font-bold text-sm text-foreground mb-1">The opportunity</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{opportunity}</p>
        </div>
      </div>
    </div>
  );
};

export default PositivesBlock;
