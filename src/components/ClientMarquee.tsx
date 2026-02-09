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
              className="flex-shrink-0 flex items-center justify-center gap-2 h-10 opacity-60 hover:opacity-100 transition-opacity"
              title={client.name}
            >
              <img
                src={client.logo}
                alt=""
                className="h-6 w-6 object-contain rounded-sm"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
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
