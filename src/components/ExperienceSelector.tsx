import { BookOpen, LayoutList, Volume2, Sun, Moon, Type } from "lucide-react";
import { useExperienceMode, type ExperienceMode } from "@/contexts/ExperienceModeContext";
import { useState, useEffect } from "react";

const modes: { value: ExperienceMode; label: string; icon: typeof BookOpen }[] = [
  { value: "read", label: "Read", icon: BookOpen },
  { value: "scan", label: "Scan", icon: LayoutList },
  { value: "listen", label: "Listen", icon: Volume2 },
];

const ExperienceSelector = () => {
  const { mode, setMode } = useExperienceMode();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    document.documentElement.style.fontSize = textSize === "large" ? "112.5%" : "";
  }, [textSize]);

  return (
    <div className="bg-primary text-primary-foreground/70 border-b border-primary-foreground/8">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-1.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Experience mode */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-primary-foreground/40 hidden sm:inline mr-1">
            Experience
          </span>
          {modes.map((m) => {
            const active = mode === m.value;
            return (
              <button
                key={m.value}
                onClick={() => setMode(m.value)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-display font-semibold transition-all ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                }`}
                aria-pressed={active}
                title={m.label}
              >
                <m.icon size={12} aria-hidden="true" />
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Accessibility tools */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-primary-foreground/40 hidden sm:inline mr-1">
            Accessibility
          </span>

          {/* Text size */}
          <button
            onClick={() => setTextSize(textSize === "normal" ? "large" : "normal")}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-display font-semibold transition-all ${
              textSize === "large"
                ? "bg-primary-foreground/15 text-primary-foreground"
                : "text-primary-foreground/50 hover:text-primary-foreground/80"
            }`}
            aria-label={textSize === "large" ? "Use normal text size" : "Use larger text size"}
            title="Text size"
          >
            <Type size={12} aria-hidden="true" />
            <span className="hidden sm:inline">{textSize === "large" ? "A+" : "A"}</span>
          </button>

          {/* Dark / Light */}
          <button
            onClick={() => setDark(!dark)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-display font-semibold text-primary-foreground/50 hover:text-primary-foreground/80 transition-all"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? <Sun size={12} aria-hidden="true" /> : <Moon size={12} aria-hidden="true" />}
            <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSelector;
