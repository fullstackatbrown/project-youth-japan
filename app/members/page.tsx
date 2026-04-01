"use client";

import { useState } from "react";

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

export default function MembersPage() {
  const [search, setSearch] = useState("");

  const filtered = MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white">
      <section className="relative h-[460px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="G7/G20 Youth Japan Members"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-between w-full max-w-5xl mx-auto px-8 gap-6">
          <h1 className="text-white font-bold text-[5rem] leading-[1.1] tracking-[0.09px] whitespace-nowrap font-[family-name:var(--font-heading)]">
            Our Members
          </h1>
          <div className="relative flex-1 max-w-xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10"
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
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b91f24]"
            />
            <button className="absolute top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#b91f24] text-white text-sm font-medium" style={{ right: "-3rem" }}>
              All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="w-full bg-white px-8 py-3">
        <div className="relative w-full max-w-5xl mx-auto">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-4 h-4 z-10"
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
            className="w-full pl-10 pr-4 py-3 rounded-full bg-[#b91f24] text-white text-sm placeholder:text-white/80 focus:outline-none"
          />
          <button className="absolute top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200" style={{ right: "-3rem" }}>
            All
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-12 pt-8 pb-16">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20 text-lg">No members found.</p>
        ) : (
          <div className="grid grid-cols-3 gap-x-25 gap-y-10">
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
        className="relative w-full aspect-square cursor-pointer"
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
            }}
          />
        </div>
      </div>
      <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
        {member.name}
      </p>
      <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
        {member.title}
      </p>
      <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
        {member.location}
      </p>
    </div>
  );
}