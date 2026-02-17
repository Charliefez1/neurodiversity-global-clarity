import { AlertTriangle } from "lucide-react";

interface WhatIsBreakingProps {
  items: string[];
  title?: string;
}

const WhatIsBreaking = ({ items, title = "What is breaking" }: WhatIsBreakingProps) => {
  return (
    <div className="rounded-xl border-l-4 border-l-destructive bg-destructive/[0.04] border border-destructive/10 p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={18} className="text-destructive" aria-hidden="true" />
        </div>
        <h3 className="font-display font-bold text-base text-foreground">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start rounded-lg bg-destructive/[0.04] p-3">
            <span className="block w-2 h-2 rounded-full bg-destructive mt-1.5 shrink-0" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIsBreaking;
