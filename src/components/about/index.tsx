import { useTranslation } from "react-i18next";
import "../../i18n";
import Parcours from "./Parcours";
import Objective from "./objective";

function About() {
  const { t } = useTranslation();
  return (
    <div className="animate-fadeIn mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-10">
      <div className="flex w-full min-w-0 max-w-screen-lg flex-col">
        <h4 className="text-xl text-gray-600">{t("about.title")}</h4>
        <section className="mt-6 px-6">
          <h2 className="mb-6 text-center text-4xl font-bold">
            {t("about.howami.title")}
          </h2>
          <p className="text-2xl leading-7">{t("about.howami.content")}</p>
        </section>
      </div>
      <div className="w-full min-w-0 max-w-screen-lg space-y-12">
        <Parcours />
        <Objective />
      </div>
    </div>
  );
}
export default About;
