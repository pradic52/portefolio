import { useTranslation } from "react-i18next";
import type { PortfolioProject } from "./projectsData";

type Props = {
  project: PortfolioProject;
};

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslation();
  const title = t(project.titleKey);

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-neutral-200">
        <img
          src={project.imageSrc}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm font-medium text-gray-600">
          {t(project.technologiesKey)}
        </p>

        <ul className="mt-5 flex-1 space-y-3">
          {project.featureKeys.map((featureKey) => (
            <li
              key={featureKey}
              className="flex items-start gap-3 text-sm leading-relaxed text-gray-700"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500"
              />
              <span>{t(featureKey)}</span>
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label={t("projects.githubAriaLabel", { title })}
          >
            {t("projects.githubButton")}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.91.1-.71.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
