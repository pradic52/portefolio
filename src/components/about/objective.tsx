import { useTranslation } from "react-i18next";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
export default function Objective() {
  const { t } = useTranslation();
  const objectives = [
    {
      icon: BriefcaseIcon,
      title: t("about.objective.content.carrier.title"),
      description: t("about.objective.content.carrier"),
    },
    {
      icon: AcademicCapIcon,
      title: t("about.objective.content.development.title"),
      description: t("about.objective.content.development"),
    },
    {
      icon: LightBulbIcon,
      title: t("about.objective.content.vision.title"),
      description: t("about.objective.content.vision"),
    },
  ];

  return (
    <section className="px-6">
      <h3 className="text-4xl font-bold text-center mb-10">
        {t("about.objective.title")}
      </h3>
      <div className="flex flex-col space-y-8 mx-auto">
        {objectives.map((objective, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-center w-13 h-13 bg-gray-500 text-white rounded-full mb-4 float-left mr-4">
              <objective.icon className="w-8 h-8" />
            </div>
            <p className="text-2xl font-bold mb-2">{objective.title}</p>
            <p className="text-2xl leading-7">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
