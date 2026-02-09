import { BookOpen, LayoutList, Volume2 } from "lucide-react";
import { useExperienceMode, type ExperienceMode } from "@/contexts/ExperienceModeContext";

const modes: { value: ExperienceMode; label: string; icon: typeof BookOpen; description: string }[] = [
  { value: "read", label: "Read", icon: BookOpen, description: "Full text" },
  { value: "scan", label: "Scan", icon: LayoutList, description: "Summaries & bullets" },
  { value: "listen", label: "Listen", icon: Volume2, description: "Audio summaries" },
];

const ExperienceSelector = () => {
  const { mode, setMode } = useExperienceMode();

  return (
    <div className="bg-secondary border-b border-border">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <p className="font-display font-semibold text-sm text-foreground whitespace-nowrap">
            How do you want to take this in today?
          </p>
          <div className="flex gap-2">
            {modes.map((m) => {
              const active = mode === m.value;
              return (
                <button
                  key={m.value}
                  onClick={() => setMode(m.value)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all
                    ${active
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                    }
                  `}
                  aria-pressed={active}
                >
                  <m.icon size={16} aria-hidden="true" />
                  <span>{m.label}</span>
                  <span className="hidden sm:inline text-xs opacity-70 font-normal">— {m.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSelector;
