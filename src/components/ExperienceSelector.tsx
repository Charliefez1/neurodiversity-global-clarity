import { BookOpen, LayoutList, Volume2, Sun, Moon, Contrast, Type, Zap } from "lucide-react";
import { useExperienceMode, type ExperienceMode } from "@/contexts/ExperienceModeContext";
import { usePageSections } from "@/contexts/PageSectionsContext";
import { useState, useEffect } from "react";

type ThemeMode = "standard" | "light" | "dark";

const modes: { value: ExperienceMode; label: string; icon: typeof BookOpen }[] = [
  { value: "read", label: "Read", icon: BookOpen },
  { value: "quick-read", label: "Quick Read", icon: Zap },
  { value: "scan", label: "Scan", icon: LayoutList },
  { value: "listen", label: "Listen", icon: Volume2 },
];

const ExperienceSelector = () => {
  const { mode, setMode } = useExperienceMode();
  const { sections } = usePageSections();
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (document.documentElement.classList.contains("dark")) return "dark";
    if (document.documentElement.classList.contains("light")) return "light";
    return "standard";
  });
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    if (theme !== "standard") {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = textSize === "large" ? "112.5%" : "";
  }, [textSize]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-primary text-primary-foreground/70 border-b border-primary-foreground/8">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-1.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Section jump icons */}
        {sections.length > 0 && (
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-primary-foreground/40 hidden sm:inline mr-1">
              Jump to
            </span>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                title={s.label}
                aria-label={`Jump to ${s.label}`}
              >
                <s.icon size={13} aria-hidden="true" />
              </button>
            ))}
          </div>
        )}

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
                <span className="hidden sm:inline">{m.label}</span>
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

          {/* Theme mode */}
          {([
            { value: "light" as ThemeMode, label: "Light", icon: Sun },
            { value: "standard" as ThemeMode, label: "Standard", icon: Contrast },
            { value: "dark" as ThemeMode, label: "Dark", icon: Moon },
          ]).map((t) => {
            const active = theme === t.value;
            return (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-display font-semibold transition-all ${
                  active
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                }`}
                aria-label={`Switch to ${t.label} theme`}
                title={t.label}
              >
                <t.icon size={12} aria-hidden="true" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSelector;
