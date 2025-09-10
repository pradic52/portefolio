import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/animate.css";

export default function About() {

  return (
    <section id="about" className="bg-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center animate__animated animate__fadeInUp">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4">À propos de moi</h2>
            <p className="lead text-muted">
              Je suis étudiant en DEP en soutien informatique à Montréal. Après avoir obtenu mon 
              baccalauréat scientifique en Guinée et commencé des études en NTIC à l'Université Gamal
              Abdel Nasser, j'ai choisi de poursuivre mon parcours au Québec pour développer mes compétences
              techniques et profissionnelles. <br />
              Curieux et motivé, je combine mon expérience en service à la clientèle avec ma passion poursuivre
              l'informatique. Je recherche actuellement un stage en soutien TI afin d'appliquer mes connaissances
              et acquérir de l'expérience concrète sur le terrain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

