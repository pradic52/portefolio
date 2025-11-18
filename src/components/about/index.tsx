import { useTranslation } from "react-i18next";
import "../../i18n";
function About() {
  const { t } = useTranslation();
  return (
    <div className="animate-fadeIn flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex flex-col space-y-4 max-w-lg mr-10">
        <h4 className="text-xl text-gray-600">{t("about.title")}</h4>
        <section>
          <header>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {t("about.skills.tech.title")}
            </h2>
            <hr />
          </header>
          <p className="text-gray-700 leading-relaxed">
            {t("about.skills.tech.content")}
          </p>
        </section>
        <section>
          <header>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {t("about.skills.soft.title")}
            </h2>
            <hr />
          </header>
          <p className="text-gray-700 leading-relaxed">
            {t("about.skills.soft.content")}
          </p>
        </section>
        <section>
          <header>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {t("about.skills.others.title")}
            </h2>
            <hr />
          </header>
          <p className="text-gray-700 leading-relaxed">
            {t("about.skills.others.content")}
          </p>
        </section>
      </div>
      <div className="border-l-2 border-neutral-800/50 pl-10 max-w-lg">
        <div className="relative animate-fadeIn">
          <div className="absolute -left-5 top-1 w-3 h-3 bg-rose-600 rounded-full"></div>
          <h3 className="text-xl font-semibold">
            {t("about.education.degree")}
          </h3>
          <time className="text-gray-500"> {t("about.education.period")}</time>
          <p className="text-gray-600"> {t("about.education.institution")}</p>
          <span className="text-neutral-800">
            {t("about.education.status")}
          </span>
        </div>
        <div className="relative animate-fadeIn">
          <div className="absolute -left-5 top-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold">
            {t("about.education.degree2")}
          </h3>
          <time className="text-gray-500"> {t("about.education.period2")}</time>
          <p className="text-gray-600"> {t("about.education.institution2")}</p>
          <span className="text-neutral-800">
            {t("about.education.status2")}
          </span>
        </div>
        <div className="relative animate-fadeIn">
          <div className="absolute -left-5 top-1 w-3 h-3 bg-sky-200 rounded-full"></div>
          <h3 className="text-xl font-semibold">
            {t("about.experience.position1")}
          </h3>
          <time className="text-gray-500">
            {" "}
            {t("about.experience.period1")}
          </time>
          <p className="text-neutral-800"> {t("about.experience.company1")}</p>
          <span className="text-gray-600">
            {t("about.experience.description1")}
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;
