import { useTranslation } from "react-i18next";
import "../../i18n";
import {
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  PrinterIcon,
  RssIcon,
  WindowIcon,
  CommandLineIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  ExclamationCircleIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl animate-fadeIn flex flex-col space-y-10 p-4 mx-auto">
      <h1 className="text-xl text-gray-600">{t("services.title")}</h1>

      {/* IT Support */}
      <Category
        icon={ComputerDesktopIcon}
        title={t("services.ItSupport.title")}
        items={[
          {
            icon: PrinterIcon,
            title: t("services.ItSupport.installation"),
            desc: t("services.ItSupport.installationDesc"),
          },
          {
            icon: WrenchScrewdriverIcon,
            title: t("services.ItSupport.troubleshooting"),
            desc: t("services.ItSupport.troubleshootingDesc"),
          },
          {
            icon: ShieldCheckIcon,
            title: t("services.ItSupport.security"),
            desc: t("services.ItSupport.securityDesc"),
          },
        ]}
      />

      {/* Numeric Web */}
      <Category
        icon={WindowIcon}
        title={t("services.numericWeb.title")}
        items={[
          {
            icon: CommandLineIcon,
            title: t("services.numericWeb.webDev"),
            desc: t("services.numericWeb.webDevDesc"),
          },
          {
            icon: RssIcon,
            title: t("services.numericWeb.marketing"),
            desc: t("services.numericWeb.marketingDesc"),
          },
          {
            icon: AdjustmentsHorizontalIcon,
            title: t("services.numericWeb.maintenance"),
            desc: t("services.numericWeb.maintenanceDesc"),
          },
        ]}
      />

      {/* Specialized Niche */}
      <Category
        icon={ExclamationCircleIcon}
        title={t("services.specializedNiche.title")}
        items={[
          {
            icon: MegaphoneIcon,
            title: t("services.specializedNiche.sensibilisation"),
            desc: t("services.specializedNiche.sensibilisationDesc"),
          },
          {
            icon: CloudIcon,
            title: t("services.specializedNiche.modularIT"),
            desc: t("services.specializedNiche.modularITDesc"),
          },
        ]}
      />
    </div>
  );
}

function Category({ icon: Icon, title, items }: any) {
  return (
    <div className="p-4 rounded-lg bg-neutral-300 shadow">
      <div className="flex items-center justify-center mb-6 space-x-2">
        <Icon className="h-6 w-6 text-gray-700" />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item: any, index: number) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
import { ServiceCard } from "./ServiceCard";
