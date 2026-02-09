import { PoundSterling } from "lucide-react";

interface PricingSummaryProps {
  title?: string;
  description: string;
  factors?: string[];
  note?: string;
}

const PricingSummary = ({
  title = "Pricing and engagement",
  description,
  factors,
  note,
}: PricingSummaryProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 lg:p-7">
      <div className="flex items-center gap-2.5 mb-4">
        <PoundSterling size={18} className="text-accent shrink-0" aria-hidden="true" />
        <p className="font-display font-bold text-sm text-card-foreground">{title}</p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      {factors && factors.length > 0 && (
        <>
          <p className="font-display font-semibold text-xs text-card-foreground mb-2">What affects cost</p>
          <ul className="space-y-1.5">
            {factors.map((f, i) => (
              <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </>
      )}
      {note && <p className="mt-4 text-xs text-muted-foreground opacity-70">{note}</p>}
    </div>
  );
};

export default PricingSummary;
