"use client";

import { useState } from "react";

type Member = {
  id: number;
  name: string;
  title: string;
  location: string;
  image?: string;
};

const MEMBERS: Member[] = [
  { id: 1, name: "Emma Thompson", title: "Chief Operating Officer", location: "Montreal, QC" },
];

export default function MembersPage() {
  const [search, setSearch] = useState("");

  const filtered = MEMBERS.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[#fff6f6]">
      <section className="relative h-[160px] flex items-center overflow-hidden bg-[rgba(70,49,52,0.52)]">
        <div className="relative z-10 flex items-center justify-between w-full max-w-5xl mx-auto px-8 gap-6">
          <h1 className="text-white font-bold text-[3.5rem] leading-[1.1] tracking-[0.09px] whitespace-nowrap font-[family-name:var(--font-heading)]">
            Our Members
          </h1>
          <div className="relative flex-1 max-w-xl">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-md bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b91f24]"
            />
          </div>
        </div>
      </section>

      <div className="w-full bg-[#b91f24] px-8 py-3">
        <div className="relative w-full max-w-5xl mx-auto">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-4 h-4"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search Members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-sm bg-[#b91f24] text-white text-sm placeholder:text-white/80 focus:outline-none"
          />
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20 text-lg">No members found.</p>
        ) : (
          <div className="grid grid-cols-3 gap-x-12 gap-y-16">
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
  return (
    <div className="flex flex-col items-center text-center">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-[180px] h-[180px] rounded-full object-cover border border-gray-200"
        />
      ) : (
        <div className="w-[180px] h-[180px] rounded-full bg-gray-300" />
      )}
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