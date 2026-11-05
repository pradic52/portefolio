export type InternshipMedia = {
  id: string;
  type: "image" | "video";
  src: string;
  titleKey: string;
  descriptionKey: string;
  altKey?: string;
  poster?: string;
};

export type InternshipGallery = {
  id: string;
  companyKey: string;
  media: InternshipMedia[];
};
