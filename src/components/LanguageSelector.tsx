import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supportedLanguages, type LanguageCode } from "@/i18n/config";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = supportedLanguages.find((l) => l.code === i18n.language) ?? supportedLanguages[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLang = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    const lang = supportedLanguages.find((l) => l.code === code);
    document.documentElement.lang = code;
    document.documentElement.dir = lang?.dir ?? "ltr";
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded px-2 py-1"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("nav.language")}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="hidden sm:inline">{current.flag}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="absolute top-full end-0 mt-2 w-52 bg-card border border-border rounded-lg shadow-lg py-1.5 z-50"
          role="listbox"
          aria-label={t("nav.language")}
        >
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={lang.code === i18n.language}
              onClick={() => switchLang(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                lang.code === i18n.language ? "text-accent font-semibold" : "text-foreground"
              }`}
              dir={lang.dir}
            >
              <span className="text-base" aria-hidden="true">{lang.flag}</span>
              <span className="flex-1 text-start">{lang.label}</span>
              {lang.code === i18n.language && <Check size={14} className="text-accent shrink-0" aria-hidden="true" />}
            </button>
          ))}

          <div className="mt-1.5 mx-3 pt-1.5 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed py-1">
              {t("i18nNotice")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
