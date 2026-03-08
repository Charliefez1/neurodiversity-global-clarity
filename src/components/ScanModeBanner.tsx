import { LayoutList, X } from "lucide-react";
import { useExperienceMode } from "@/contexts/ExperienceModeContext";

const ScanModeBanner = () => {
  const { mode, setMode } = useExperienceMode();

  if (mode !== "scan") return null;

  return (
    <div className="sticky top-16 z-40 bg-accent/10 border-b border-accent/20 backdrop-blur-sm">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutList size={14} className="text-accent" />
          <span className="text-xs font-display font-semibold text-accent">
            Quick Read mode: showing headings and key points only
          </span>
        </div>
        <button
          onClick={() => setMode("read")}
          className="inline-flex items-center gap-1 text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Exit Quick Read mode"
        >
          <X size={12} />
          Exit
        </button>
      </div>
    </div>
  );
};

export default ScanModeBanner;
