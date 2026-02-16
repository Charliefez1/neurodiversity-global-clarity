import { ExternalLink } from "lucide-react";

interface SourceCardProps {
  title: string;
  domain: string;
  url: string;
  description?: string;
  category?: string;
}

const SourceCard = ({ title, domain, url, description, category }: SourceCardProps) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-xl p-5 shadow-md hover:shadow-lg hover:border-accent/30 transition-all"
    >
      <div className="flex items-start gap-3">
        <img
          src={faviconUrl}
          alt=""
          className="w-6 h-6 rounded mt-0.5 shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          {category && (
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-accent mb-1 block">
              {category}
            </span>
          )}
          <p className="text-sm font-display font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
            {title}
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">{domain}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
        <ExternalLink size={14} className="text-muted-foreground group-hover:text-accent shrink-0 transition-colors mt-1" />
      </div>
    </a>
  );
};

export default SourceCard;
