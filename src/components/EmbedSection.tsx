const EmbedSection = () => (
  <section id="embed" className="bg-background py-16 lg:py-24" aria-label="Understand Magic">
    <div className="mx-auto max-w-wide px-6 lg:px-10">
      <div className="max-w-2xl mb-10">
        <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
          Explore
        </p>
        <h2 className="font-display font-bold text-lg md:text-xl leading-tight text-foreground">
          Understand Magic
        </h2>
      </div>
      <div className="rounded-xl border border-border overflow-hidden shadow-sm" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://understand-magic.lovable.app/"
          title="Understand Magic"
          className="w-full h-full border-0"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>
    </div>
  </section>
);

export default EmbedSection;
