"use client";

import { useState, useRef, useEffect } from "react";

const heroImage = "/images/youthJapanGroupPhoto.jpg";

type Member = {
  id: number;
  name: string;
  title: string;
  location: string;
  image?: string;
};

const MEMBERS: Member[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: "Emma Thompson",
  title: "Chief Operating Officer",
  location: "Montreal, QC",
}));

const FILTER_OPTIONS = [
  "Item 01",
  "Item 02",
  "Item 03",
  "Item 04",
  "Item 05",
];

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filters");
  const filterRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [selectedFilter]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white">
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden md:h-[460px]">
        <img
          src={heroImage}
          alt="G7/G20 Youth Japan Members"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:px-8 md:text-left">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.1] tracking-[0.09px] text-white sm:text-5xl md:text-[5rem] md:whitespace-nowrap">
            Our Members
          </h1>

          <div className="relative w-full max-w-xl">
            <svg
              className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-white py-3 pl-10 pr-20 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b91f24]"
            />

            <button className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#b91f24] px-4 py-2.5 text-sm font-medium text-white md:px-6">
              All
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="relative z-30 w-full bg-white px-6 py-3 md:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="text"
              placeholder="Search Members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-[#b91f24] py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/80 focus:outline-none"
            />
          </div>

          <div className="relative w-full sm:w-auto" ref={filterRef}>
            <button
              ref={buttonRef}
              onClick={() => setFilterOpen((prev) => !prev)}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#8b1a1e] px-6 py-3 text-sm font-medium text-white sm:w-auto"
            >
              {selectedFilter}
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200"
                style={{ transform: filterOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {filterOpen && (
              <div
                className="absolute right-0 top-full z-[9999] overflow-hidden rounded-b-lg bg-[#8b1a1e] shadow-lg"
                style={{ width: buttonWidth > 0 ? buttonWidth : "100%" }}
              >
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setFilterOpen(false);
                    }}
                    className="w-full px-5 py-2.5 text-left text-sm text-white transition-colors duration-150 hover:bg-[#b91f24]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-12">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-lg text-gray-500">No members found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function MemberCard({ member }: { member: Member }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative aspect-square w-full max-w-[260px] cursor-pointer sm:max-w-none"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s ease",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "9999px",
              backfaceVisibility: "hidden",
              backgroundColor: "#d1d5db",
              overflow: "hidden",
            }}
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "9999px",
              backfaceVisibility: "hidden",
              backgroundColor: "#d1d5db",
              transform: "rotateY(180deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <p className="text-center font-[family-name:var(--font-body)] text-sm leading-relaxed text-gray-600">
              Sample text
            </p>
          </div>
        </div>
      </div>

      <p className="mt-3 font-[family-name:var(--font-body)] text-[0.95rem] font-semibold leading-snug text-[#b91f24]">
        {member.name}
      </p>
      <p className="mt-0.5 font-[family-name:var(--font-body)] text-[0.72rem] font-medium uppercase tracking-wide text-gray-600">
        {member.title}
      </p>
      <p className="mt-0.5 font-[family-name:var(--font-body)] text-[0.78rem] text-[#b91f24]">
        {member.location}
      </p>
    </div>
  );
}