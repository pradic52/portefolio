export type PortfolioProject = {
  id: string;
  titleKey: string;
  technologiesKey: string;
  featureKeys: string[];
  imageSrc: string;
  githubUrl?: string;
};

const projects: PortfolioProject[] = [
  {
    id: "club-info",
    titleKey: "project1.name",
    technologiesKey: "project1.technologiesUsed",
    featureKeys: [
      "project1.feature1",
      "project1.feature2",
      "project1.feature3",
    ],
    imageSrc: "./media/project/clubInfo/img.png",
    githubUrl: "https://github.com/pradic52/infoDep",
  },
  {
    id: "warehouse-pos",
    titleKey: "project2.name",
    technologiesKey: "project2.technologiesUsed",
    featureKeys: [
      "project2.feature1",
      "project2.feature2",
      "project2.feature3",
    ],
    imageSrc: "./media/project/ubcaisse/img.png",
    githubUrl: "https://github.com/pradic52/ubc_2",
  },
  {
    id: "portfolio",
    titleKey: "project3.name",
    technologiesKey: "project3.technologiesUsed",
    featureKeys: [
      "project3.feature1",
      "project3.feature2",
      "project3.feature3",
    ],
    imageSrc: "./media/project/portefolio/img.jpg",
    githubUrl: "https://github.com/pradic52/portefolio-tnd",
  },
  {
    id: "store-inventory",
    titleKey: "project4.name",
    technologiesKey: "project4.technologiesUsed",
    featureKeys: [
      "project4.feature1",
      "project4.feature2",
      "project4.feature3",
    ],
    imageSrc: "./media/project/alb1/img.png",
    githubUrl: "https://github.com/pradic52/ubc_2",
  },
];

export default projects;
