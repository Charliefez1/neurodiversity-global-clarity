import { marqueeClients } from "@/data/clients";

const ClientMarquee = () => {
  // Double the list for seamless loop
  const items = [...marqueeClients, ...marqueeClients];

  return (
    <section className="bg-primary border-t border-primary-foreground/8 overflow-hidden py-10 lg:py-12">
      <div className="mx-auto max-w-wide px-6 lg:px-10 mb-6">
        <p className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-primary-foreground/40">
          Trusted by leading organisations
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center gap-14">
          {items.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center h-10 opacity-50 hover:opacity-90 transition-opacity grayscale brightness-[2] hover:brightness-[2.5]"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto max-w-[120px] object-contain"
                loading="lazy"
                onError={(e) => {
                  // Fallback to text if logo fails
                  const target = e.currentTarget;
                  const parent = target.parentElement;
                  if (parent) {
                    target.style.display = "none";
                    const span = document.createElement("span");
                    span.className = "font-display font-bold text-sm text-primary-foreground/50 whitespace-nowrap";
                    span.textContent = client.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
