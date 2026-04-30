export type EventType = "#Y7" | "#Y20" | "#Committee" | "#Other";
export type EventStatus = "Unfinished" | "Finished";

export type Event = {
  id: string;
  date: string;
  imageID?: string;
  tags: EventType[];
  status: EventStatus;
  title: string;
  href: string;
  description: string;
};

export const EVENTS_DOCUMENTS: Event[] = [
  {
    id: "2022-y7-y20",
    date: "2022-07-04",
    imageID: "#",
    tags: ["#Y7", "#Y20"],
    status: "Finished",
    title: "Title placeholder",
    href: "#",
    description: "Lorem ipsum",
  },
];