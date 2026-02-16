import { AlertTriangle } from "lucide-react";

interface RiskCalloutProps {
  title?: string;
  items: string[];
}

const RiskCallout = ({ title = "Key risks", items }: RiskCalloutProps) => {
  return (
    <div className="rounded-lg border-l-4 border-l-destructive bg-destructive/5 border border-destructive/15 p-6 lg:p-7 shadow-md">
      <div className="flex items-center gap-2.5 mb-4">
        <AlertTriangle size={18} className="text-destructive shrink-0" aria-hidden="true" />
        <p className="font-display font-bold text-sm text-foreground">{title}</p>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskCallout;
