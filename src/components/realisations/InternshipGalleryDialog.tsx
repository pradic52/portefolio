import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { InternshipMedia } from "./types";

type Props = {
  company: string;
  items: InternshipMedia[];
  open: boolean;
  onClose: () => void;
};

export default function InternshipGalleryDialog({
  company,
  items,
  open,
  onClose,
}: Props) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeDialog = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="internship-gallery-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
      className="m-auto flex max-h-[90dvh] w-[min(92vw,64rem)] flex-col overflow-hidden rounded-2xl bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-gray-900/70"
    >
      <div className="flex items-start justify-between gap-4 border-b border-gray-200 p-5 sm:p-7">
        <div>
          <p className="text-sm font-semibold text-blue-700">
            {t("experience.gallery.label")}
          </p>
          <h2 id="internship-gallery-title" className="mt-1 text-2xl font-bold">
            {company}
          </h2>
        </div>
        <button
          type="button"
          onClick={closeDialog}
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          {t("experience.gallery.close")}
        </button>
      </div>
      <div className="grid min-h-0 flex-1 gap-4 overflow-y-auto p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-xl bg-gray-100"
          >
            {item.type === "video" ? (
              <video
                className="aspect-video w-full object-cover"
                controls
                preload="none"
                poster={item.poster}
                aria-label={t(item.titleKey)}
              >
                <source src={item.src} />
              </video>
            ) : (
              <img
                className="aspect-video w-full object-cover"
                src={item.src}
                alt={t(item.altKey ?? item.titleKey)}
                loading="lazy"
                decoding="async"
              />
            )}
            <figcaption className="p-3">
              <h3 className="font-semibold">{t(item.titleKey)}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {t(item.descriptionKey)}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </dialog>
  );
}
