import { useTranslation } from "react-i18next";
import { ContainerProject } from "./Container";
import pos from "../../assets/pos.jpg";
import portefolio from "../../assets/portefolio.jpg";
import vm from "../../assets/vm.jpg";
import { Suspense } from "react";

export default function Projets() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      link: "https://github.com/pradic52/Warehouses-management",
      img: pos,
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      link: "https://github.com/pradic52/portefolio-tnd",
      img: portefolio,
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      link: undefined,
      img: vm,
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-gray-600">{t("projects.title")}</h1>
      <div className="flex flex-row space-x-4 flex-wrap mt-4 max-w-4xl">
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project, index) => (
            <ContainerProject
              key={index}
              title={project.title}
              description={project.description}
              link={project.link ? project.link : undefined}
              img={project.img ? project.img : undefined}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
