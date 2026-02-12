import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enGB from "./locales/en-GB.json";
import enUS from "./locales/en-US.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";
import pt from "./locales/pt.json";
import ar from "./locales/ar.json";

export const supportedLanguages = [
  { code: "en-GB", label: "English (UK)", flag: "🇬🇧", dir: "ltr" as const },
  { code: "en-US", label: "English (US)", flag: "🇺🇸", dir: "ltr" as const },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" as const },
  { code: "es", label: "Español", flag: "🇪🇸", dir: "ltr" as const },
  { code: "ko", label: "한국어", flag: "🇰🇷", dir: "ltr" as const },
  { code: "ja", label: "日本語", flag: "🇯🇵", dir: "ltr" as const },
  { code: "pt", label: "Português", flag: "🇧🇷", dir: "ltr" as const },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl" as const },
] as const;

export type LanguageCode = (typeof supportedLanguages)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-GB": { translation: enGB },
      "en-US": { translation: enUS },
      de: { translation: de },
      es: { translation: es },
      ko: { translation: ko },
      ja: { translation: ja },
      pt: { translation: pt },
      ar: { translation: ar },
    },
    fallbackLng: "en-GB",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

export default i18n;
