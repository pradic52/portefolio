import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const initialLanguage = navigator.language.toLowerCase().startsWith("fr")
  ? "fr"
  : "en";

function updateDocumentLanguage(language: string) {
  document.documentElement.lang = language.startsWith("fr") ? "fr-CA" : "en-CA";
}

updateDocumentLanguage(initialLanguage);

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18next.on("languageChanged", updateDocumentLanguage);

export default i18next;
