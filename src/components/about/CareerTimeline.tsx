import type { TimelineItem } from "../../utils/getTimelineData";

interface CareerTimelineProps {
  items: TimelineItem[];
}

export default function CareerTimeline({ items }: CareerTimelineProps) {
  return (
    <div className="w-full min-w-0 max-w-full">
      {/* Zone scrollable */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain">
        <div className="relative flex w-max min-w-full">
          {/* Axe horizontal */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-900" />

          {items.map((item, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="
                  relative flex-shrink-0
                  w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]
                  h-[360px]
                "
              >
                {/* Informations */}
                <div
                  className={`
                    absolute left-2 right-2
                    text-center
                    ${isTop ? "top-2" : "bottom-2"}
                  `}
                >
                  <p className="mb-2 text-xs font-semibold text-blue-600">
                    {item.endDate
                      ? `${item.startDate} — ${item.endDate}`
                      : item.startDate}
                  </p>

                  <h3 className="text-sm font-bold leading-snug sm:text-base">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {item.organization}
                  </p>
                  {item.details?.map((detail) => (
                    <span key={detail} className="mt-1 text-xs text-gray-600">
                      * {detail} *
                    </span>
                  ))}
                </div>

                {/* Liaison verticale */}
                <div
                  className={`
                    absolute left-1/2 -translate-x-1/2
                    w-px h-8 bg-gray-300
                    ${isTop ? "top-[160px]" : "bottom-[160px]"}
                  `}
                />

                {/* Point sur l'axe */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-neutral-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
