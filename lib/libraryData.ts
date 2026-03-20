export type SummitType = "Y7" | "Y20";
export type DocumentType =
  | "Communique"
  | "Declaration"
  | "Policy Brief"
  | "Report"
  | "Summary";

export type LibraryDocument = {
  id: string;
  year: number;
  summitType: SummitType;
  documentType: DocumentType;
  title: string;
  href: string;
};

export const LIBRARY_DOCUMENTS: LibraryDocument[] = [
  {
    id: "2023-y7-communique",
    year: 2023,
    summitType: "Y7",
    documentType: "Communique",
    title: "Y7 2023 Communiqué",
    href: "#",
  },
  {
    id: "2023-y7-policy-brief",
    year: 2023,
    summitType: "Y7",
    documentType: "Policy Brief",
    title: "Y7 2023 Policy Brief",
    href: "#",
  },
  {
    id: "2019-y20-communique",
    year: 2019,
    summitType: "Y20",
    documentType: "Communique",
    title: "Y20 2019 Communiqué",
    href: "#",
  },
  {
    id: "2019-y20-declaration",
    year: 2019,
    summitType: "Y20",
    documentType: "Declaration",
    title: "Y20 2019 Declaration",
    href: "#",
  },
  {
    id: "2016-y7-report",
    year: 2016,
    summitType: "Y7",
    documentType: "Report",
    title: "Y7 2016 Final Report",
    href: "#",
  },
  {
    id: "2016-y7-summary",
    year: 2016,
    summitType: "Y7",
    documentType: "Summary",
    title: "Y7 2016 Executive Summary",
    href: "#",
  },
];

