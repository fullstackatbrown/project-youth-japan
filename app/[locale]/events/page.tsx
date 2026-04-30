"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { EVENTS_DOCUMENTS, type EventType, type Event } from "@/lib/eventsData";

const EVENT_TYPES: EventType[] = ["#Y7", "#Y20", "#Committee", "#Other"];
const YEARS = ["2026", "2023", "2019", "2016", "2022"];
const STATUS_TYPES = ["Unfinished", "Finished"];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full max-w-md">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <input
        type="text"
        placeholder="Search events…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-[#B91F24] focus:outline-none focus:ring-2 focus:ring-[#B91F24]/20"
      />
    </div>
  );
}

function TagChip({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    "#Committee": "bg-[#B91F24] text-white",
    "#Y7": "bg-[#1a3a6b] text-white",
    "#Y20": "bg-[#1a3a6b] text-white",
    "#Other": "bg-slate-500 text-white",
  };

  const isYear = /^#\d{4}$/.test(label);

  const colorClass = isYear
    ? "bg-[#1a3a6b] text-white"
    : colorMap[label] ?? "bg-slate-400 text-white";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${colorClass}`}
    >
      {label}
    </span>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
      <div className="aspect-[4/3] w-full flex-shrink-0 bg-slate-200" />

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs text-slate-500">{formatDate(event.date)}</p>

        <h3 className="text-lg font-bold leading-snug text-[#1a3a6b]">
          {event.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          {event.description}
        </p>

        {event.tags && event.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}

        <a
          href={event.href ?? "#"}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#B91F24] hover:underline"
        >
          READ MORE
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [activeYears, setActiveYears] = useState<string[]>([]);
  const [activeEventTypes, setActiveEventTypes] = useState<string[]>([]);
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return EVENTS_DOCUMENTS.filter((event) => {
      const eventYear = String(new Date(event.date).getFullYear());

      const yearOk =
        activeYears.length === 0 || activeYears.includes(eventYear);

      const typeOk =
        activeEventTypes.length === 0 ||
        activeEventTypes.some((type) => event.tags?.includes(type as EventType));

      const statusOk =
        activeStatus === "All" || event.status === activeStatus;

      const searchOk =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);

      return yearOk && typeOk && statusOk && searchOk;
    });
  }, [activeYears, activeEventTypes, activeStatus, search]);

  function toggleYear(year: string) {
    if (year === "All") {
      setActiveYears([]);
      return;
    }

    setActiveYears((prev) =>
      prev.includes(year)
        ? prev.filter((existingYear) => existingYear !== year)
        : [...prev, year],
    );
  }

  function toggleEventType(type: string) {
    setActiveEventTypes((prev) =>
      prev.includes(type)
        ? prev.filter((existingType) => existingType !== type)
        : [...prev, type],
    );
  }

  function chipClass(active: boolean, filled = false) {
    if (filled) {
      return active
        ? "rounded-full px-3 py-1 text-sm font-medium bg-[#1a3a6b] text-white"
        : "rounded-full px-3 py-1 text-sm font-medium bg-white text-slate-600 border border-slate-300 hover:border-[#1a3a6b]";
    }

    return active
      ? "rounded-full px-3 py-1 text-sm font-medium bg-[#1a3a6b] text-white"
      : "rounded-full px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200";
  }

  function statusChipClass(value: string) {
    const active = activeStatus === value;

    return active
      ? "rounded-full px-3 py-1 text-sm font-medium bg-[#1a3a6b] text-white"
      : "rounded-full px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200";
  }

  return (
    <main className="bg-[#f5f2f0] text-slate-900">
      <PageHero
        title="Events"
        subtitle="Join us in shaping the future"
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[45vh]"
      />

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mt-10 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#1a3a6b]"
              >
                <path
                  d="M3 6h18M7 12h10M11 18h2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-lg font-bold text-slate-800">
                Filter Events
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Year
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => toggleYear("All")}
                  className={chipClass(activeYears.length === 0, true)}
                >
                  All
                </button>

                {YEARS.map((year) => (
                  <button
                    type="button"
                    key={year}
                    onClick={() => toggleYear(year)}
                    className={chipClass(activeYears.includes(year), true)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Event Type
              </p>

              <div className="flex flex-wrap gap-2">
                {EVENT_TYPES.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => toggleEventType(type)}
                    className={chipClass(activeEventTypes.includes(type))}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Type
              </p>

              <div className="flex flex-wrap gap-2">
                {["All", ...STATUS_TYPES].map((status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={statusChipClass(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-100">
              No events match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}