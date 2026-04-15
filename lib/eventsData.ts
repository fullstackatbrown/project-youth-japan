
export type EventType = "#Y7" | "#Y20" | "#Committee" | "#Other";

export type Event = {
  id: string;
  date: Date;
  imageID : string;
  eventType: EventType[];
  title: string;
  href: string;
  shortDescription : string;
};

export const EVENTS_DOCUMENTS : Event[] = [
    
    {
    id: "2022-y7-y20",
    date: new Date("2022-07-04T10:00:00"),
    imageID : "#",
    eventType: ["#Y7","#Y20"],
    title: "title placeholder",
    href: "#",
    shortDescription : "lorum ipsum"
    }

];
