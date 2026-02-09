interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

const PullQuote = ({ quote, attribution }: PullQuoteProps) => {
  return (
    <blockquote className="my-8 border-l-4 border-accent pl-6 py-2">
      <p className="font-display font-semibold text-lg md:text-xl text-foreground leading-snug italic">
        "{quote}"
      </p>
      {attribution && (
        <footer className="mt-3">
          <cite className="text-sm text-muted-foreground not-italic font-body">— {attribution}</cite>
        </footer>
      )}
    </blockquote>
  );
};

export default PullQuote;
