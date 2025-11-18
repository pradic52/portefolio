import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import profil from "../../assets/profil.jpg";
import cvEn from "../../assets/cv-en.pdf";
import cvFr from "../../assets/cv-fr.pdf";
import { MapPinIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

const cv = navigator.language.startsWith("fr") ? cvFr : cvEn;
export default function Hero() {
  const { t } = useTranslation();
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = t("CV file name") || "cv.pdf";
    link.click();
  };
  return (
    <header
      id="homeHero"
      className="animate-fadeIn flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10"
    >
      <div className="aspect-video">
        <img
          src={profil}
          alt="Profile"
          className="h-100 shadow-lg opacity-90 rounded-full object-cover m-4 p-4"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-4 max-w-2xl">
        <span className="text-xl text-gray-600">{t("hero.lookingFor")}</span>
        <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
        <h3 className="text-3xl font-bold">
          <Typewriter
            words={[
              t("hero.subtitle1"),
              t("hero.subtitle2"),
              t("hero.subtitle3"),
              t("hero.subtitle4"),
              t("hero.subtitle5"),
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p className="text-2xl leading-7">{t("hero.summary")}</p>

        <ul id="someInfo" className="flex space-x-6 mt-4">
          <li className="flex text-nowrap">
            <MapPinIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />{" "}
            {t("hero.location")}
          </li>
          <li className="flex text-nowrap">
            <GlobeAmericasIcon
              className="h-6 w-6 text-gray-500"
              aria-hidden="true"
            />{" "}
            {t("hero.evailable")}
          </li>
        </ul>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            {t("hero.hireMe")}
          </button>
          <button
            onClick={downloadCV}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {t("hero.downloadCV")}
          </button>
        </div>
        <hr />

        <ul className="flex space-x-2 mt-4 items-center ">
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
