"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import FilterPanel, {
  type FilterField,
  type FilterValues,
} from "@/components/FilterPanel";
import type { LibraryDocument } from "@/lib/cosmic/library";

const SUMMIT_TYPES = ["Y7", "Y20"];
const RESOURCE_TYPES = [
  "communique",
  "report",
  "translation",
  "slides",
  "other",
];
const RESOURCE_LABEL: Record<string, string> = {
  communique: "Communiqué",
  report: "Report",
  translation: "Translation",
  slides: "Slides",
  other: "Other",
};

function byYearDesc(a: LibraryDocument, b: LibraryDocument) {
  return b.year - a.year;
}

export default function LibraryClient({
  documents,
}: {
  documents: LibraryDocument[];
}) {
  const countries = useMemo(
    () =>
      Array.from(
        new Set(documents.map((d) => d.country).filter(Boolean)),
      ).sort(),
    [documents],
  );

  const years = useMemo(
    () =>
      Array.from(
        new Set(documents.map((d) => d.year).filter(Boolean)),
      ).sort((a, b) => b - a),
    [documents],
  );

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
        id: "resourceType",
        label: "Resource Type",
        selectionMode: "multi",
        includeAllOption: true,
        allLabel: "All",
        options: RESOURCE_TYPES.map((t) => ({
          value: t,
          label: RESOURCE_LABEL[t] ?? t,
        })),
        defaultValue: [],
      },
      {
        id: "country",
        label: "Country",
        selectionMode: "single",
        includeAllOption: true,
        allLabel: "All",
        options: countries.map((c) => ({ value: c, label: c })),
        defaultValue: "ALL",
      },
      {
        id: "year",
        label: "Year",
        selectionMode: "single",
        includeAllOption: true,
        allLabel: "All",
        options: years.map((y) => ({ value: String(y), label: String(y) })),
        defaultValue: "ALL",
      },
    ],
    [countries, years],
  );

  const [filters, setFilters] = useState<FilterValues>({
    summitType: "ALL",
    resourceType: [],
    country: "ALL",
    year: "ALL",
  });

  const filtered = useMemo(() => {
    const summitType = filters.summitType as string;
    const resourceTypes = (filters.resourceType as string[]) ?? [];
    const country = filters.country as string;
    const year = filters.year as string;

    return documents
      .filter((d) => {
        const summitOk =
          summitType === "ALL" ? true : d.summitType === summitType;
        const resourceOk =
          resourceTypes.length === 0
            ? true
            : resourceTypes.includes(d.resourceType);
        const countryOk = country === "ALL" ? true : d.country === country;
        const yearOk = year === "ALL" ? true : String(d.year) === year;
        return summitOk && resourceOk && countryOk && yearOk;
      })
      .sort(byYearDesc);
  }, [filters, documents]);

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

        <FilterPanel
          title="Filter Documents"
          fields={fields}
          onChange={setFilters}
        />

        <div className="mx-auto mt-10 max-w-4xl px-6">
          <div className="space-y-4">
            {grouped.map(({ year, docs }) => (
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
                            {d.summitType} •{" "}
                            {RESOURCE_LABEL[d.resourceType] ?? d.resourceType}
                            {d.country ? ` • ${d.country}` : ""}
                          </p>
                        </div>
                        <a
                          href={d.fileUrl ?? d.externalLink ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
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
