import { ReactNode } from "react";

interface LongFormTextProps {
  children: ReactNode;
}

/**
 * Prose wrapper for long-form content pages.
 * Constrains line length, sets consistent spacing, and ensures readability.
 */
const LongFormText = ({ children }: LongFormTextProps) => {
  return (
    <div className="max-w-content font-body text-base text-foreground leading-[1.8] [&>p]:mb-5 [&>p:last-child]:mb-0 [&>h2]:font-display [&>h2]:font-extrabold [&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:leading-tight [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-lg [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:leading-tight [&>ul]:mb-5 [&>ul]:space-y-2 [&>ol]:mb-5 [&>ol]:space-y-2 [&>ul>li]:flex [&>ul>li]:gap-2 [&>ul>li]:text-muted-foreground [&>ol>li]:text-muted-foreground [&>strong]:font-bold [&>strong]:text-foreground">
      {children}
    </div>
  );
};

export default LongFormText;
