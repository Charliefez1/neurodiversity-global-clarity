import { Accessibility } from "lucide-react";

interface AccessibilityNoteProps {
  text?: string;
}

const AccessibilityNote = ({
  text = "All our training materials, delivery methods, and digital content are designed for cognitive accessibility. If you have specific access needs, we'll adapt.",
}: AccessibilityNoteProps) => {
  return (
    <div className="rounded-lg border border-accent/20 bg-accent/5 p-5 flex items-start gap-3">
      <Accessibility size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

export default AccessibilityNote;
