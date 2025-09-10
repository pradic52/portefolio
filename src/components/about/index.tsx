import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/animate.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center animate__animated animate__fadeInUp">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4">À propos de moi</h2>
            <p className="lead text-muted">
              {t(
                "I am Tokpa Noël Doré, a passionate and dedicated IT support apprentice. With a strong foundation in computer science and a keen interest in technology, I am committed to providing exceptional technical support and solutions. My goal is to enhance user experiences and ensure smooth operations through effective problem-solving and communication skills."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
