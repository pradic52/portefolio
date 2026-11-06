import { useTranslation } from "react-i18next";

export interface Internship {
  id: string;
  number: string;
  company: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  skills: string[];
}

interface InternshipCardProps {
  internship: Internship;
  seeMoreLabel: string;
  onOpenGallery: (internshipId: string) => void;
}

export default function InternshipCard({
  internship,
  seeMoreLabel,
  onOpenGallery,
}: InternshipCardProps) {
  const { t } = useTranslation();
  return (
    <article
      className="
      w-full h-full
      rounded-2xl
      border border-neutral-100
      p-6
      flex flex-col gap-5
      transition-all duration-300
      hover:shadow-lg hover:border-neutral-100
    "
    >
      {/* En-tête */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {internship.number}
          </span>

          <span className="text-xs text-gray-500">
            {internship.period.start} – {internship.period.end}
          </span>
        </div>

        <div>
          <h4 className="text-xl font-bold text-neutral-900">
            {internship.company}
          </h4>

          <p className="text-sm text-gray-600 mt-1">{internship.position}</p>
        </div>
      </div>

      <div className="border-t border-neutral-200" />

      {/* Compétences */}
      <div className="flex-1">
        <h5 className="text-sm font-semibold text-neutral-900 mb-4">
          {t("internships.skillsHeading")}
        </h5>

        <ul className="space-y-3">
          {internship.skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-gray-500" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton réalisations */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => onOpenGallery(internship.id)}
          aria-haspopup="dialog"
          className="
            inline-flex items-center justify-center gap-2
            w-full
            rounded-lg
            bg-blue-600 hover:bg-blue-700
            text-white text-sm font-semibold
            px-4 py-3
            transition-colors duration-200
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700
          "
        >
          {seeMoreLabel}
          <span className="sr-only"> — {internship.company}</span>

          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </button>
      </div>
    </article>
  );
}
