import { useTranslation } from "react-i18next";
import Internships from "./Internships";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

export default function Realizations() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        {t("about.realizations.title")}
      </h1>

      <Internships />

      <section className="w-full px-4 pt-12" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-10 text-center text-4xl font-bold text-neutral-900"
        >
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
