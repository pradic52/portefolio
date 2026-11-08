import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import profil from "../../assets/profil2.jpg.jpeg";
import cvEn from "../../assets/cv-en.pdf";
import cvFr from "../../assets/cv-fr.pdf";
import studyCertificate from "../../assets/Certificatdefindetude.pdf";
import clubCertificate from "../../assets/clubInfoCertificat.pdf";
import { MapPinIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

export default function Hero() {
  const { t } = useTranslation();
  const documentsDialog = useRef<HTMLDialogElement>(null);
  const isFrench = i18n.language.toLowerCase().startsWith("fr");
  const cvFileName = isFrench
    ? "cv-Tokpa-Noël-Doré-Soutien-informatique.pdf"
    : "resume-Tokpa-Noël-Doré-IT-Support.pdf";
  const hireMe = () => {
    const link = document.createElement("a");
    const subject = encodeURIComponent(t("hero.hireMe.object"));
    const body = encodeURIComponent(t("hero.hireMe.body"));

    link.href = `mailto:tokpanoeld@gmail.com?subject=${subject}&body=${body}`;
    link.click();
  };

  return (
    <header
      id="homeHero"
      className="animate-fadeIn flex w-full min-w-0 max-w-6xl flex-col items-center gap-6 md:flex-row md:gap-10"
    >
      <img
        src={profil}
        alt="Portrait de Tokpa Noël Doré"
        className="h-56 w-56 max-w-full rounded-full object-cover opacity-90 shadow-lg sm:h-72 sm:w-72 md:h-96 md:w-72"
        loading="lazy"
      />
      <div className="flex w-full min-w-0 max-w-2xl flex-col gap-4">
        <span className="text-xl text-gray-600">{t("hero.lookingFor")}</span>
        <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
        <h2 className="min-h-14 w-full max-w-sm text-center text-xl font-bold leading-7 md:min-h-7 md:max-w-none md:text-left">
          <Typewriter
            words={[
              t("hero.subtitle1"),
              t("hero.subtitle2"),
              t("hero.subtitle3"),
              t("hero.subtitle4"),
              t("hero.subtitle5"),
              t("hero.subtitle6"),
              t("hero.subtitle7"),
              t("hero.subtitle8"),
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-2xl leading-7">{t("hero.summary1")}</p>
        <p className="text-2xl leading-7">{t("hero.summary2")}</p>
        <p className="text-2xl leading-7">{t("hero.summary3")}</p>

        <ul id="someInfo" className="mt-4 flex w-full min-w-0 flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
          <li className="flex min-w-0 items-center gap-1">
            <MapPinIcon className="h-6 w-6 shrink-0 text-gray-500" aria-hidden="true" />
            <span>{t("hero.location")}</span>
          </li>
          <li className="flex min-w-0 items-center gap-1">
            <GlobeAmericasIcon
              className="h-6 w-6 shrink-0 text-gray-500"
              aria-hidden="true"
            />
            <span>{t("hero.available")}</span>
          </li>
        </ul>
        <div className="mt-4 flex w-full flex-wrap justify-center gap-4 md:justify-start">
          <button
            onClick={hireMe}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {t("hero.hireMe")}
          </button>
          <button
            type="button"
            onClick={() => documentsDialog.current?.showModal()}
            aria-haspopup="dialog"
            aria-controls="hero-documents-dialog"
            className="rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
          >
            {t("hero.documents.button")}
          </button>
        </div>
        <dialog
          ref={documentsDialog}
          id="hero-documents-dialog"
          aria-labelledby="hero-documents-title"
          className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-6 text-gray-900 shadow-xl backdrop:bg-black/50"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 id="hero-documents-title" className="min-h-14 w-full max-w-sm text-center text-xl font-bold leading-7 md:min-h-7 md:max-w-none md:text-left">
              {t("hero.documents.title")}
            </h2>
            <button
              type="button"
              onClick={() => documentsDialog.current?.close()}
              className="rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {t("hero.documents.close")}
            </button>
          </div>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={isFrench ? cvFr : cvEn}
                download={cvFileName}
                onClick={() => documentsDialog.current?.close()}
                className="block rounded-lg border border-gray-200 px-4 py-3 text-blue-700 hover:bg-blue-50 focus:outline-2 focus:outline-blue-600"
              >
                {t("hero.documents.cv")}
              </a>
            </li>
            <li>
              <a
                href={studyCertificate}
                download="certificat-fin-etudes.pdf"
                onClick={() => documentsDialog.current?.close()}
                className="block rounded-lg border border-gray-200 px-4 py-3 text-blue-700 hover:bg-blue-50 focus:outline-2 focus:outline-blue-600"
              >
                {t("hero.documents.studyCertificate")}
              </a>
            </li>
            <li>
              <a
                href={clubCertificate}
                download="certificat-club-informatique.pdf"
                onClick={() => documentsDialog.current?.close()}
                className="block rounded-lg border border-gray-200 px-4 py-3 text-blue-700 hover:bg-blue-50 focus:outline-2 focus:outline-blue-600"
              >
                {t("hero.documents.clubCertificate")}
              </a>
            </li>
          </ul>
        </dialog>
        <hr />

        <ul className="mt-4 flex w-full min-w-0 flex-wrap items-center justify-center gap-2 md:justify-start">
          <li>
            <span>{t("hero.followMe")}:</span>
          </li>
          <li>
            <SocialIcon
              network="x"
              url="https://x.com/tokpa_noel?t=mfDLpkd9Lb4ej2iOXnArAg&s=09"
              className="transition-transform duration-300 hover:scale-110"
            />
          </li>
          <li>
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/pradic_5.2_tnt"
              className="transition-transform duration-300 hover:scale-110"
            />
          </li>
          <li>
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/tokpa-noël-doré-237b93303"
              className="transition-transform duration-300 hover:scale-110"
            />
          </li>
          <li>
            <SocialIcon
              network="github"
              url="https://github.com/pradic52"
              className="transition-transform duration-300 hover:scale-110"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
