import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { allWorkshops, type Workshop } from "@/data/workshops";

interface RelevantWorkshopsProps {
  workshopIds: string[];
  title?: string;
  description?: string;
}

const RelevantWorkshops = ({
  workshopIds,
  title = "Recommended workshops",
  description = "Expert-led, always live sessions tailored to your sector.",
}: RelevantWorkshopsProps) => {
  const workshops = workshopIds
    .map((id) => allWorkshops.find((w) => w.id === id))
    .filter(Boolean) as Workshop[];

  if (workshops.length === 0) return null;

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display font-bold text-base text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshops.map((w) => (
          <div
            key={w.id}
            className="group rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <w.icon size={18} className="text-accent" aria-hidden="true" />
            </div>
            <h4 className="font-display font-bold text-sm text-card-foreground mb-2 leading-tight">
              {w.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
              {w.summary}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/70 mb-3">
              <span className="flex items-center gap-1">
                <Clock size={12} aria-hidden="true" /> {w.duration}
              </span>
              <span className="flex items-center gap-1">
                <User size={12} aria-hidden="true" /> {w.ledBy}
              </span>
            </div>
            {w.flagship && (
              <span className="inline-block text-[10px] font-display font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                Flagship
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/workshops"
          className="inline-flex items-center gap-2 font-display font-bold text-sm text-accent hover:underline"
        >
          View all 50+ workshops <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default RelevantWorkshops;
