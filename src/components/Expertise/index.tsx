import { useTranslation } from "react-i18next";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseCategories } from "./data";

export default function Expertise() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-6xl animate-fadeIn px-4">
      <h2 className="mb-10 text-center text-4xl font-bold text-neutral-900">
        {t("expertise.title")}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {expertiseCategories.map((category) => (
          <ExpertiseCard
            key={category.id}
            title={t(category.titleKey)}
            skills={category.skillKeys.map((key) => t(key))}
          />
        ))}
      </div>
    </div>
  );
}
