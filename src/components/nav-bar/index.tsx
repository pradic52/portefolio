import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import i18n from "../../i18n";

const navigationItems = [
  { key: "nav.home", href: "#hero", Icon: HomeIcon },
  { key: "nav.about", href: "#about", Icon: UserIcon },
  { key: "nav.realizations", href: "#realizations", Icon: TrophyIcon },
  { key: "nav.expertise", href: "#expertise", Icon: BriefcaseIcon },
  { key: "nav.contact", href: "#contact", Icon: EnvelopeIcon },
];

const sectionIds = ["hero", "about", "realizations", "expertise", "contact"];

export default function MainNav() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.3;
      let current = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top + window.scrollY <= marker) {
          current = section;
        } else {
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1) ?? current;
      }

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language.toLowerCase().startsWith("en") ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50"
      aria-label={t("nav.ariaLabel")}
    >
      <div className="mx-2 mt-3 rounded-2xl border border-white/10 bg-white/30 px-1 shadow-md backdrop-blur-md sm:mx-auto sm:max-w-4xl sm:px-3">
        <ul className="flex items-center justify-center gap-0 py-2 font-medium text-gray-700 sm:gap-1 md:gap-2 md:py-3">
          {navigationItems.map(({ key, href, Icon }) => {
            const isActive = activeSection === href.slice(1);
            const label = t(key);

            return (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  aria-current={isActive ? "location" : undefined}
                  title={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:h-11 md:w-auto md:gap-2 md:rounded-xl md:px-3 ${
                    isActive
                      ? "bg-gray-800 text-white shadow ring-2 ring-blue-500/60"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                    <Icon className="block h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="hidden whitespace-nowrap md:inline">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t("nav.changeLanguage")}
              className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-gray-700 transition-colors hover:bg-gray-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:h-11 md:w-auto md:rounded-xl md:px-3 md:text-sm"
            >
              {i18n.language.toLowerCase().startsWith("en") ? "FR" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
