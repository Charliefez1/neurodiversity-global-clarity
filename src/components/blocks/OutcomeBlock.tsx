import { TrendingUp } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";

interface OutcomeBlockProps {
  title?: string;
  outcomes: Array<{ metric?: string; label: string }>;
}

const OutcomeBlock = ({ title = "Expected outcomes", outcomes }: OutcomeBlockProps) => {
  return (
    <div className="rounded-lg border border-accent/20 bg-accent/5 p-6 lg:p-7 shadow-md">
      <div className="flex items-center gap-2.5 mb-5">
        <TrendingUp size={18} className="text-accent shrink-0" aria-hidden="true" />
        <p className="font-display font-bold text-sm text-foreground">{title}</p>
      </div>
      <div className="space-y-4">
        {outcomes.map((o, i) => (
          <div key={i} className="flex items-start gap-4">
            <span
              className="block w-2 h-2 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }}
              aria-hidden="true"
            />
            {o.metric && (
              <p className="font-display font-extrabold text-2xl text-accent shrink-0 min-w-[3rem] leading-none mt-0.5">
                {o.metric}
              </p>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">{o.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutcomeBlock;
