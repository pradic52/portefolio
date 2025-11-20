import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  WrenchIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "../../i18n";
import i18n from "../../i18n";
import { useEffect, useState } from "react";
function MainNav() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    {
      name: t("nav.home"),
      icon: <HomeIcon className="w-6 h-6" />,
      href: "#hero",
    },
    {
      name: t("nav.about"),
      icon: <UserIcon className="w-6 h-6" />,
      href: "#about",
    },
    {
      name: t("nav.projects"),
      icon: <BriefcaseIcon className="w-6 h-6" />,
      href: "#projects",
    },
    {
      name: t("nav.services"),
      icon: <WrenchIcon className="w-6 h-6" />,
      href: "#services",
    },
    {
      name: t("nav.contact"),
      icon: <EnvelopeIcon className="w-6 h-6" />,
      href: "#contact",
    },
  ];
  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <nav
      className="bg-transparent fixed top-0 left-0 w-full z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-1 lg:px-8 mt-4 rounded-2xl shadow-md backdrop-blur-md bg-white/20 border border-white/10">
        <ul className="flex space-x-4 py-4 justify-center font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`px-2 py-2 rounded-2xl transition-all flex items-center space-x-2 
    ${
      activeSection === link.href.substring(1)
        ? "bg-gray-800 text-white scale-105 shadow"
        : "text-gray-700 hover:bg-gray-700 hover:text-white"
    }`}
              >
                <span>{link.icon}</span>
                <span className="hidden md:inline">{link.name}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="px-2 py-2 font-semibold text-gray-700 hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300 ease-in-out"
            >
              {i18n.language === "en" ? "FR" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
