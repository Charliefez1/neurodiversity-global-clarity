import { Star, CheckCircle2 } from "lucide-react";

const TrustIndicators = () => {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm">
      {/* Star Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>
        <span className="text-muted-foreground">4.9/5 from 300+ reviews</span>
      </div>

      {/* Companies Count */}
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={16} className="text-accent" />
        <span className="text-muted-foreground">600+ Companies Trained</span>
      </div>
    </div>
  );
};

export default TrustIndicators;
