import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/animate.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="bg-light py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center animate__animated animate__fadeInUp">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold">Compétences</h2>
            <p className="lead text-muted">
              {t(
                "Here are some of my technical skills and proficiencies that I have developed through my education and hands-on experience in the IT field."
              )}
            </p>
          </div>
        </div>

        <div className="row g-4 animate__animated animate__fadeInUp">
          {[
            {
              img: "images/skill1.png",
              title: "Hardware Troubleshooting",
              desc: "Diagnosing and resolving hardware issues, including assembling and upgrading computer systems.",
            },
            {
              img: "images/skill2.png",
              title: "Software Installation & Configuration",
              desc: "Installing, configuring, and updating software applications to ensure optimal performance.",
            },
            {
              img: "images/skill3.png",
              title: "Network Setup & Maintenance",
              desc: "Setting up and maintaining local area networks (LANs) and troubleshooting connectivity issues.",
            },
            {
              img: "images/skill4.png",
              title: "Customer Support",
              desc: "Providing technical support and assistance to users, ensuring their issues are resolved promptly.",
            },
            {
              img: "images/skill5.png",
              title: "System Maintenance",
              desc: "Performing regular maintenance tasks to ensure system reliability and security.",
            },
            {
              img: "images/skill6.png",
              title: "IT Documentation",
              desc: "Creating and maintaining documentation for IT processes, procedures, and configurations.",
            },
          ].map((skill, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="mb-3 mx-auto"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="fw-bold">{t(skill.title)}</h5>
                <p className="text-muted">{t(skill.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
