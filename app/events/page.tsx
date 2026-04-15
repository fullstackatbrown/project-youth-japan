"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import FilterPanel, {
  type FilterField,
  type FilterValues,
} from "@/components/FilterPanel";
import { EVENTS_DOCUMENTS, type EventType, type Event } from "@/lib/eventsData";

//constants
const EVENT_TYPES: EventType[] = ["#Y7", "#Y20", "#Committee", "#Other"];
const YEARS = ["2026", "2023", "2019", "2016"];
const STATUS_TYPES = ["Unfinished", "Finished"];

//helper to do the dates
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

//components
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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

  //year tags
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
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-100">
      {/* image placeholder here */}
      <div className="w-full aspect-[4/3] bg-slate-200 flex-shrink-0" />

      {/* content goes here */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs text-slate-500">{formatDate(event.date)}</p>
        <h3 className="text-lg font-bold text-[#1a3a6b] leading-snug">
          {event.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {event.description}
        </p>

        {/* tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {event.tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}

        <a
          href={event.href ?? "#"}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#B91F24] hover:underline"
        >
          READ MORE{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

//page
export default function EventsPage() {
  // Filter state
  const [activeYears, setActiveYears] = useState<string[]>([]); // empty = All
  const [activeEventTypes, setActiveEventTypes] = useState<string[]>([]); // empty = All
  const [activeStatus, setActiveStatus] = useState<string>("All"); // "All" | "Unfinished" | "Finished"
  const [search, setSearch] = useState("");

  // filter panel fields
  const fields: FilterField[] = useMemo(
    () => [
      {
        id: "year",
        label: "Year",
        selectionMode: "multi",
        includeAllOption: true,
        allLabel: "All",
        options: YEARS.map((y) => ({ value: y, label: y })),
        defaultValue: [],
      },
      {
        id: "eventType",
        label: "Event Type",
        selectionMode: "multi",
        includeAllOption: false,
        allLabel: "All",
        options: EVENT_TYPES.map((t) => ({ value: t, label: t })),
        defaultValue: [],
      },
      {
        id: "status",
        label: "Type",
        selectionMode: "single",
        includeAllOption: true,
        allLabel: "All",
        options: STATUS_TYPES.map((s) => ({ value: s, label: s })),
        defaultValue: "All",
      },
    ],
    [],
  );

  // filtered events
  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return (EVENTS_DOCUMENTS ?? []).filter((event) => {
      // year filter
      const yearOk =
        activeYears.length === 0
          ? true
          : activeYears.includes(String(new Date(event.date).getFullYear()));

      // event type filter
      const typeOk =
        activeEventTypes.length === 0
          ? true
          : activeEventTypes.some((t) => event.tags?.includes(t));

      // staus filter
      const statusOk =
        activeStatus === "All" ? true : event.status === activeStatus;

      // search
      const searchOk =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.description?.toLowerCase().includes(query);

      return yearOk && typeOk && statusOk && searchOk;
    });
  }, [activeYears, activeEventTypes, activeStatus, search]);

  // toggle attribute filters
  function toggleYear(year: string) {
    if (year === "All") {
      setActiveYears([]);
      return;
    }
    setActiveYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );
  }

  function toggleEventType(type: string) {
    setActiveEventTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  // button stuff
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

      <div className="pb-20 mx-auto max-w-5xl px-6">

        {/* filter panel */}
        <div className="mt-10 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 px-6 py-5">
          {/* header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="font-bold text-lg text-slate-800">
                Filter Events
              </span>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-400"
            >
              <path
                d="M3 6h18M7 12h10M11 18h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* filter rows */}
          <div className="grid grid-cols-3 gap-6">
            {/* year */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Year
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => toggleYear("All")}
                  className={chipClass(activeYears.length === 0, true)}
                >
                  All
                </button>
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => toggleYear(year)}
                    className={chipClass(activeYears.includes(year), true)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* event type */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Event Type
              </p>
              <div className="flex flex-wrap gap-2">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleEventType(type)}
                    className={chipClass(activeEventTypes.includes(type))}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* type / status */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Type
              </p>
              <div className="flex flex-wrap gap-2">
                {["All", ...STATUS_TYPES].map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveStatus(s)}
                    className={statusChipClass(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* search bar */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* events grid */}
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