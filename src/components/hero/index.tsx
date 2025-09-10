import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/animate.css";
import profil_picture from "../../assets/profil_picture.jpg";

export default function Hero() {
  return (
    <header id="accueil" className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-center text-md-start animate__animated animate__fadeInUp">
            <h1 className="display-1 fw-bold">Tokpa Noël Doré</h1>
            <p className="lead">
              Étudiant DEP — Soutien informatique • Montréal
            </p>
            <p className="fst-italic text-muted">
              Passionné par le dépannage et le développement web. Recherche
              stage en support TI.
            </p>
            <div className="mt-4 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              <a href="#projets" className="btn btn-primary btn-lg">
                Voir mes projets
              </a>
              <a
                href="/Tokpa_Resume.pdf"
                className="btn btn-outline-secondary btn-lg"
                download
              >
                Télécharger CV
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center animate__animated animate__fadeInRight">
            <img
              src={profil_picture}
              alt="Portrait de Tokpa"
              className="img-fluid rounded-5 shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
