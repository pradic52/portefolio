import InternshipCard, { type Internship } from "./InternshipCard";

interface InternshipListProps {
  internships: Internship[];
  seeMoreLabel: string;
  onOpenGallery: (internshipId: string) => void;
}

export default function InternshipList({
  internships,
  seeMoreLabel,
  onOpenGallery,
}: InternshipListProps) {
  return (
    <div className="w-full flex flex-wrap items-stretch gap-6">
      {internships.map((internship, index) => (
        <div
          key={`${internship.company}-${index}`}
          className="flex-[1_1_320px] min-w-0 max-w-full"
        >
          <InternshipCard
            internship={internship}
            seeMoreLabel={seeMoreLabel}
            onOpenGallery={onOpenGallery}
          />
        </div>
      ))}
    </div>
  );
}
