import { SocialIcon } from "react-social-icons";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center py-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-3 text-gray-800"
      >
        {t("contact.title")}
      </motion.h1>

      <p className="text-gray-600 max-w-xl mb-6">{t("contact.description")}</p>

      <a
        href="mailto:tokpanoeld@gmail.com"
        className="text-blue-600 hover:underline font-medium mb-4"
      >
        {t("contact.email")}
      </a>

      <div className="flex justify-center space-x-6 mt-4">
        <SocialIcon
          url="https://discord.gg/ZESq3kb2"
          network="discord"
          className="transition-transform duration-300 hover:scale-110"
          style={{ height: 45, width: 45 }}
        />

        <SocialIcon
          url="https://t.me/pradic52"
          network="telegram"
          className="transition-transform duration-300 hover:scale-110"
          style={{ height: 45, width: 45 }}
        />
      </div>

      <a
        href="mailto:tokpanoeld@gmail.com"
        className="fixed bottom-6 right-6 bg-gray-200 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <EnvelopeIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Contact;
