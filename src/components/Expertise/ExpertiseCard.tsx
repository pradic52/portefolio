type Props = {
  title: string;
  skills: string[];
};

export default function ExpertiseCard({ title, skills }: Props) {
  return (
    <article className="h-full rounded-2xl border border-neutral-200 bg-neutral-200 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <div className="my-4 h-px bg-neutral-300" />
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-start gap-3 text-sm leading-relaxed text-gray-700"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
