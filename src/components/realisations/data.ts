import type { InternshipGallery, InternshipMedia } from "./types";

function image(stage: string, file: string, titleKey: string): InternshipMedia {
  return {
    id: file,
    type: "image",
    src: `./media/internships/${stage}/${file}`,
    titleKey,
    descriptionKey: "experience.gallery.photoDescription",
  };
}

function video(
  stage: string,
  file: string,
  titleKey: string,
  poster?: string,
): InternshipMedia {
  return {
    id: file,
    type: "video",
    src: `./media/internships/${stage}/${file}`,
    titleKey,
    descriptionKey: "experience.gallery.videoDescription",
    poster: poster ? `./media/internships/${stage}/${poster}` : undefined,
  };
}

// HEIC files are intentionally omitted because browser support is inconsistent.
export const internshipGalleries: InternshipGallery[] = [
  {
    id: "infoquebec",
    companyKey: "internship1.company",
    media: [
      image(
        "info-quebec",
        "disk-reader.jpg",
        "experience.gallery.info.diskReader",
      ),
      image(
        "info-quebec",
        "hard-disk-sentinel-pro.jpg",
        "experience.gallery.info.diskHealth",
      ),
      image(
        "info-quebec",
        "Paragon-interface.jpg",
        "experience.gallery.info.paragon",
      ),
      image("info-quebec", "server-dell.jpg", "experience.gallery.info.server"),
    ],
  },
  {
    id: "mfc-tech",
    companyKey: "internship2.company",
    media: [
      image("mfc-tech", "bios-config.jpg", "experience.gallery.mfc.bios"),
      image("mfc-tech", "NHV-Boot.jpg", "experience.gallery.mfc.nhvBoot"),
      image("mfc-tech", "server-incide.jpg", "experience.gallery.mfc.server"),
      image("mfc-tech", "test-backup.jpg", "experience.gallery.mfc.backup"),
    ],
  },
  {
    id: "sote",
    companyKey: "internship3.company",
    media: [
      image(
        "sote",
        "backup-hiren's-boot.jpg",
        "experience.gallery.sote.hirensBoot",
      ),
      image("sote", "dirty-pc.jpg", "experience.gallery.sote.dirtyPc"),
      image(
        "sote",
        "fan-change-done.jpg",
        "experience.gallery.sote.fanReplaced",
      ),
      image("sote", "work-on-mac.jpg", "experience.gallery.sote.macRepair"),
      video(
        "sote",
        "cleanning-pc.mp4",
        "experience.gallery.sote.cleaningVideo",
        "dirty-pc.jpg",
      ),
      video(
        "sote",
        "fan-change.mp4",
        "experience.gallery.sote.fanVideo",
        "fan-change-done.jpg",
      ),
      video(
        "sote",
        "replacing-fan.mp4",
        "experience.gallery.sote.fanReplacementVideo",
        "cpu-and-gpu-cover.jpg",
      ),
      video(
        "sote",
        "working-microsoft.mp4",
        "experience.gallery.sote.windowsVideo",
        "microsoft-pc.jpg",
      ),
    ],
  },
];
