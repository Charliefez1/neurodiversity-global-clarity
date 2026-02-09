import { marqueeClients } from "@/data/clients";

interface ClientMarqueeProps {
  /** When true, renders without the outer section wrapper (for embedding inside another section) */
  embedded?: boolean;
}

const ClientMarquee = ({ embedded = false }: ClientMarqueeProps) => {
  const items = [...marqueeClients, ...marqueeClients];

  const inner = (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee items-center gap-14">
        {items.map((client, i) => (
          <a
            key={`${client.name}-${i}`}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center gap-2.5 h-12 opacity-50 hover:opacity-90 transition-opacity"
            title={client.name}
          >
            <img
              src={client.logo}
              alt=""
              className="h-8 w-8 object-contain rounded-sm"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{client.name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return inner;
  }

  return (
    <section className="bg-secondary/30 border-t border-border overflow-hidden py-10 lg:py-12">
      <div className="mx-auto max-w-wide px-6 lg:px-10 mb-6">
        <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-muted-foreground/50">
          Trusted by leading organisations
        </p>
      </div>
      {inner}
    </section>
  );
};

export default ClientMarquee;
