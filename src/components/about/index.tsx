import { useTranslation } from "react-i18next";
import "../../i18n";
function About() {
  const { t } = useTranslation();
  const educations = [
    {
      degree: t("about.education.degree"),
      institution: t("about.education.institution"),
      period: t("about.education.period"),
      status: t("about.education.status"),
    },
    {
      degree: t("about.education.degree2"),
      institution: t("about.education.institution2"),
      period: t("about.education.period2"),
      status: t("about.education.status2"),
    },
  ];
  const experiences = [
    {
      position: t("about.experience.position1"),
      company: t("about.experience.company1"),
      period: t("about.experience.period1"),
      description: t("about.experience.description1"),
    },
    {
      position: t("about.experience.position2"),
      company: t("about.experience.company2"),
      period: t("about.experience.period2"),
      description: t("about.experience.description2"),
    },
  ];
  const skills = [
    {
      title: t("about.skills.tech.title"),
      content: t("about.skills.tech.content"),
    },
    {
      title: t("about.skills.dev.title"),
      content: t("about.skills.dev.content"),
    },
    {
      title: t("about.skills.soft.title"),
      content: t("about.skills.soft.content"),
    },
    {
      title: t("about.skills.others.title"),
      content: t("about.skills.others.content"),
    },
  ];
  return (
    <div className="animate-fadeIn flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex flex-col space-y-4 max-w-lg mr-10">
        <h4 className="text-xl text-gray-600">{t("about.title")}</h4>
        {skills.map((skill, index) => (
          <section key={index}>
            <header>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {skill.title}
              </h2>
              <hr />
            </header>
            <p className="text-gray-700 leading-relaxed">
              {skill.content.includes("\n") ? (
                <ul>
                  {skill.content.split("\n").map((line, i) => (
                    <li key={i}>
                      <strong>{line.split(":")[0]}:</strong>{" "}
                      {line.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              ) : (
                skill.content
              )}
            </p>
          </section>
        ))}
      </div>
      <div className="border-l-2 border-neutral-800/50 pl-10 max-w-lg">
        {educations.map((education, index) => (
          <div key={index} className="relative animate-fadeIn mb-6">
            <div className="absolute -left-5 top-2 w-3 h-3 bg-gray-400 rounded-full"></div>
            <h3>
              <strong className="text-xl font-semibold">
                {education.degree}
              </strong>
            </h3>
            <time className="text-gray-500"> {education.period}</time>
            <p className="text-gray-600"> {education.institution}</p>
            <span className="text-neutral-800">{education.status}</span>
          </div>
        ))}
        <hr className="my-6" />
        {experiences.map((experience, index) => (
          <div key={index} className="relative animate-fadeIn mb-6">
            <div className="absolute -left-5 top-2 w-3 h-3 bg-gray-400 rounded-full"></div>
            <h3>
              <strong className="text-xl font-semibold">
                {experience.position}
              </strong>
            </h3>
            <time className="text-gray-500"> {experience.period}</time>
            <p className="text-neutral-800"> {experience.company}</p>
            <h4 className="text-lg mt-2">{t("about.experience.learnTitle")}</h4>
            <span className="text-gray-600">
              <ul className="list-disc list-inside">
                {experience.description.split(";").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
