export type ExpertiseCategory = {
  id: string;
  titleKey: string;
  skillKeys: string[];
};

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "it-support",
    titleKey: "expertise.support.title",
    skillKeys: [
      "expertise.support.diagnostics",
      "expertise.support.userSupport",
      "expertise.support.deployment",
      "expertise.support.incidents",
      "expertise.support.customerService",
    ],
  },
  {
    id: "systems",
    titleKey: "expertise.systems.title",
    skillKeys: [
      "expertise.systems.windows",
      "expertise.systems.windowsServer",
      "expertise.systems.ubuntu",
      "expertise.systems.linuxMint",
      "expertise.systems.macOS",
    ],
  },
  {
    id: "networks",
    titleKey: "expertise.networks.title",
    skillKeys: [
      "expertise.networks.tcpIp",
      "expertise.networks.dhcp",
      "expertise.networks.dns",
      "expertise.networks.wifi",
      "expertise.networks.sharing",
    ],
  },
  {
    id: "infrastructure",
    titleKey: "expertise.infrastructure.title",
    skillKeys: [
      "expertise.infrastructure.activeDirectory",
      "expertise.infrastructure.hyperV",
      "expertise.infrastructure.virtualBox",
      "expertise.infrastructure.proxmox",
      "expertise.infrastructure.ubuntuServer",
    ],
  },
  {
    id: "development",
    titleKey: "expertise.development.title",
    skillKeys: [
      "expertise.development.javascript",
      "expertise.development.typescript",
      "expertise.development.python",
      "expertise.development.react",
      "expertise.development.django",
    ],
  },
  {
    id: "databases",
    titleKey: "expertise.databases.title",
    skillKeys: [
      "expertise.databases.sql",
      "expertise.databases.modeling",
      "expertise.databases.queries",
      "expertise.databases.postgresql",
      "expertise.databases.mongodb",
    ],
  },
];
