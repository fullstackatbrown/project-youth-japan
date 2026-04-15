"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import FilterPanel, {
  type FilterField,
  type FilterValues,
} from "@/components/FilterPanel";
import {
  LIBRARY_DOCUMENTS,
  type DocumentType,
  type LibraryDocument,
  type SummitType,
} from "@/lib/libraryData";

const SUMMIT_TYPES: SummitType[] = ["Y7", "Y20"];
const DOCUMENT_TYPES: DocumentType[] = [
  "Communique",
  "Declaration",
  "Policy Brief",
  "Report",
  "Summary",
];

function byYearDesc(a: LibraryDocument, b: LibraryDocument) {
  return b.year - a.year;
}

export default function LibraryPage() {
  const fields: FilterField[] = useMemo(
    () => [
      {
        id: "summitType",
        label: "Summit Type",
        selectionMode: "single",
        includeAllOption: true,
        allLabel: "All",
        options: SUMMIT_TYPES.map((t) => ({ value: t, label: t })),
        defaultValue: "ALL",
      },
      {
        id: "documentType",
        label: "Document Type",
        selectionMode: "multi",
        includeAllOption: true,
        allLabel: "All",
        options: DOCUMENT_TYPES.map((t) => ({ value: t, label: t })),
        defaultValue: [],
      },
    ],
    [],
  );

  const [filters, setFilters] = useState<FilterValues>({
    summitType: "ALL",
    documentType: [],
  });

  const filtered = useMemo(() => {
    const summitType = filters.summitType as string;
    const docTypes = (filters.documentType as string[]) ?? [];

    return LIBRARY_DOCUMENTS.filter((d) => {
      const summitOk = summitType === "ALL" ? true : d.summitType === summitType;
      const docOk =
        docTypes.length === 0 ? true : docTypes.includes(d.documentType);
      return summitOk && docOk;
    }).sort(byYearDesc);
  }, [filters]);

  const grouped = useMemo(() => {
    const map = new Map<number, LibraryDocument[]>();
    for (const d of filtered) {
      const arr = map.get(d.year) ?? [];
      arr.push(d);
      map.set(d.year, arr);
    }
    return Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([year, docs]) => ({ year, docs }));
  }, [filtered]);

  return (
    <main className="bg-[#f5f2f0] text-slate-900">
      <PageHero
        title="Library"
        subtitle="Archive of Past Summits & Documents"
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[45vh]"
      />

      <div className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mt-10 text-center text-base leading-relaxed text-slate-700 md:text-lg">
            Access our comprehensive archive of past summit communiqués,
            declarations, policy briefs, and official documents. All materials
            are organized by year and summit type for easy navigation.
          </p>
        </div>

        <FilterPanel title="Filter Documents" fields={fields} onChange={setFilters} />

        <div className="mx-auto mt-10 max-w-4xl px-6">
          <div className="space-y-4">
            {grouped.map(({ year, docs }, idx) => (
              <details
                key={year}
                className="group overflow-hidden rounded-xl bg-[#0f3b63] shadow-md ring-1 ring-slate-900/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-semibold tracking-wide text-white">
                      {year}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <span className="text-sm">{docs.length} documents</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="transition group-open:rotate-180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </summary>

                <div className="bg-[#0b2f50] px-6 pb-6 pt-1">
                  <ul className="divide-y divide-white/10 overflow-hidden rounded-lg bg-white/5">
                    {docs.map((d) => (
                      <li
                        key={d.id}
                        className="flex items-center justify-between gap-4 p-4"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {d.title}
                          </p>
                          <p className="mt-1 text-xs text-white/70">
                            {d.summitType} • {d.documentType}
                          </p>
                        </div>
                        <a
                          href={d.href}
                          className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                        >
                          View
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}

            {grouped.length === 0 ? (
              <div className="rounded-xl bg-white p-8 text-center text-slate-700 shadow-sm ring-1 ring-slate-200">
                No documents match your filters.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
