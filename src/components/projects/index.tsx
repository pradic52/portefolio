import { useTranslation } from "react-i18next";

export default function Projets() {
    const { t } = useTranslation();
    return (
        <header id="projets" className="bg-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 text-center text-md-start animate__animated animate__fadeInUp">
                        <h1 className="display-1 fw-bold">{t('projects.title')}</h1>
                        <p className="lead">
                            {t('projects.subtitle')}
                        </p>
                        <p className="fst-italic text-muted">
                            {t('projects.description')}
                        </p>
                        <div className="mt-4 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
                            <a href="#projets" className="btn btn-primary btn-lg">
                                {t('projects.viewProjects')}
                            </a>
                            <a
                                href="/Tokpa_Resume.pdf"
                                className="btn btn-outline-secondary btn-lg"
                                download
                            >
                                {t('projects.downloadCV')}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 text-center animate__animated animate__fadeInRight">
                        {/* Tu peux insérer une image ici */}
                        <img
                            src="/ton-image.jpg"
                            alt="Portrait de Tokpa"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}