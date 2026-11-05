export interface TimelineItem {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  details?: string[];
}

export function getTimelineData(data: TimelineItem[]): TimelineItem[] {
  return data.map((item) => ({
    ...item,
    title: item.title.trim(),
    organization: item.organization.trim(),
    startDate: item.startDate.trim(),
    endDate: item.endDate?.trim() || undefined,
    details: item.details?.map((detail) => detail.trim()).filter(Boolean),
  }));
}
