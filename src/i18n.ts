import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: navigator.language.startsWith("fr") ? "fr" : "en", // Detect language from browser
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18next;
