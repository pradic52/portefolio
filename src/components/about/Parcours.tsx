import { useTranslation } from "react-i18next";
import CareerTimeline from "./CareerTimeline";
import { getTimelineData } from "../../utils/getTimelineData";

export default function Parcours() {
  const { t } = useTranslation();
  const timeline = getTimelineData([
    {
      title: t("school1.degree"),
      organization: t("school1.name"),
      startDate: t("school1.period.start"),
      endDate: t("school1.period.end"),
      details: [t("school1.status"), t("school1.location")],
    },
    {
      title: t("school2.degree"),
      organization: t("school2.name"),
      startDate: t("school2.period.start"),
      endDate: t("school2.period.end"),
      details: [t("school2.status"), t("school2.location")],
    },
    {
      title: t("internship1.position"),
      organization: t("internship1.company"),
      startDate: t("internship1.period.start"),
      endDate: t("internship1.period.end"),
    },
    {
      title: t("internship2.position"),
      organization: t("internship2.company"),
      startDate: t("internship2.period.start"),
      endDate: t("internship2.period.end"),
    },
    {
      title: t("internship3.position"),
      organization: t("internship3.company"),
      startDate: t("internship3.period.start"),
      endDate: t("internship3.period.end"),
    },
    {
      title: t("about.parcours.graduation.title"),
      organization: t("school2.name"),
      startDate: t("about.parcours.awardedOn"),
    },
    {
      title: t("about.parcours.clubCertificate.title"),
      organization: t("about.parcours.clubCertificate.organization"),
      startDate: t("about.parcours.awardedOn"),
    },
  ]);

  return (
    <section className="w-full min-w-0 px-6">
      <h2 className="mb-10 text-center text-4xl font-bold">
        {t("about.parcours.title")}
      </h2>

      <CareerTimeline items={timeline} />
      <p className="mt-8 text-center text-lg">
        {t("about.parcours.description")}
      </p>
    </section>
  );
}
