interface NumberedOutcomeListProps {
  title?: string;
  items: string[];
}

const NumberedOutcomeList = ({ title, items }: NumberedOutcomeListProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 lg:p-7">
      {title && (
        <h3 className="font-display font-bold text-sm text-card-foreground mb-5">{title}</h3>
      )}
      <ol className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className="w-8 h-8 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="font-display font-bold text-sm text-accent">{i + 1}</span>
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1.5">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NumberedOutcomeList;
