import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "@/i18n/config";

/**
 * Sets the html lang and dir attributes reactively based on the current i18n language.
 * Mount once at the app root.
 */
const useLanguageDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = supportedLanguages.find((l) => l.code === i18n.language);
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = lang?.dir ?? "ltr";
  }, [i18n.language]);
};

export default useLanguageDirection;
