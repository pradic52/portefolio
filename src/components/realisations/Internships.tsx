import { useState } from "react";
import { useTranslation } from "react-i18next";

import InternshipList from "./InternshipList";
import type { Internship } from "./InternshipCard";
import InternshipGalleryDialog from "./InternshipGalleryDialog";
import { internshipGalleries } from "./data";

export default function Internships() {
  const { t } = useTranslation();
  const [activeGalleryId, setActiveGalleryId] = useState<string | null>(null);
  const activeGallery = internshipGalleries.find(
    ({ id }) => id === activeGalleryId,
  );

  const internships: Internship[] = [
    {
      id: "infoquebec",
      number: t("internship1.number"),
      company: t("internship1.company"),
      position: t("internship1.position"),
      period: {
        start: t("internship1.period.start"),
        end: t("internship1.period.end"),
      },
      skills: [
        t("internship1.skill1"),
        t("internship1.skill2"),
        t("internship1.skill3"),
        t("internship1.skill4"),
      ],
    },
    {
      id: "mfc-tech",
      number: t("internship2.number"),
      company: t("internship2.company"),
      position: t("internship2.position"),
      period: {
        start: t("internship2.period.start"),
        end: t("internship2.period.end"),
      },
      skills: [
        t("internship2.skill1"),
        t("internship2.skill2"),
        t("internship2.skill3"),
        t("internship2.skill4"),
      ],
    },
    {
      id: "sote",
      number: t("internship3.number"),
      company: t("internship3.company"),
      position: t("internship3.position"),
      period: {
        start: t("internship3.period.start"),
        end: t("internship3.period.end"),
      },
      skills: [
        t("internship3.skill1"),
        t("internship3.skill2"),
        t("internship3.skill3"),
        t("internship3.skill4"),
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      {/* Titre */}
      <h2 className="text-4xl font-bold text-center mb-10 text-neutral-900">
        {t("about.internships.title")}
      </h2>

      {/* Liste des stages */}
      <div className="max-w-7xl mx-auto">
        <InternshipList
          internships={internships}
          seeMoreLabel={t("about.realizations.seeMoreButton")}
          onOpenGallery={setActiveGalleryId}
        />
      </div>
      {activeGallery && (
        <InternshipGalleryDialog
          key={activeGallery.id}
          company={t(activeGallery.companyKey)}
          items={activeGallery.media}
          open
          onClose={() => setActiveGalleryId(null)}
        />
      )}
    </section>
  );
}
