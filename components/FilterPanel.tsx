"use client";

import { useEffect, useMemo, useState } from "react";

export type FilterOption = {
  value: string;
  label: string;
};

export type FilterField = {
  id: string;
  label: string;
  options: FilterOption[];
  selectionMode?: "single" | "multi";
  includeAllOption?: boolean;
  allLabel?: string;
  defaultValue?: string | string[];
};

export type FilterValues = Record<string, string | string[]>;

type FilterPanelProps = {
  title: string;
  description?: string;
  fields: FilterField[];
  onChange?: (values: FilterValues) => void;
};

function normalizeDefault(field: FilterField): string | string[] {
  if (field.defaultValue !== undefined) return field.defaultValue;
  return field.selectionMode === "multi" ? [] : "ALL";
}

export default function FilterPanel({
  title,
  description,
  fields,
  onChange,
}: FilterPanelProps) {
  const initial = useMemo(() => {
    const acc: FilterValues = {};
    for (const f of fields) acc[f.id] = normalizeDefault(f);
    return acc;
  }, [fields]);

  const [values, setValues] = useState<FilterValues>(initial);

  useEffect(() => {
    setValues(initial);
  }, [initial]);

  useEffect(() => {
    onChange?.(values);
  }, [values, onChange]);

  return (
    <section className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-700"
          >
            <path
              d="M4 6h16M7 12h10M10 18h4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#183b5b]">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {fields.map((field) => {
          const mode = field.selectionMode ?? "single";
          const includeAll = field.includeAllOption ?? mode === "single";
          const allLabel = field.allLabel ?? "All";
          const current = values[field.id];

          const isSelected = (v: string) => {
            if (mode === "multi") return Array.isArray(current) && current.includes(v);
            return current === v;
          };

          const setSingle = (v: string) => {
            setValues((prev) => ({ ...prev, [field.id]: v }));
          };

          const toggleMulti = (v: string) => {
            setValues((prev) => {
              const cur = prev[field.id];
              const arr = Array.isArray(cur) ? cur : [];
              const next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
              return { ...prev, [field.id]: next };
            });
          };

          const clearMulti = () => {
            setValues((prev) => ({ ...prev, [field.id]: [] }));
          };

          return (
            <div key={field.id}>
              <p className="text-sm font-semibold text-slate-700">{field.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {includeAll ? (
                  <button
                    type="button"
                    onClick={() => (mode === "multi" ? clearMulti() : setSingle("ALL"))}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ring-1 ${
                      mode === "multi"
                        ? Array.isArray(current) && current.length === 0
                          ? "bg-[#183b5b] text-white ring-[#183b5b]"
                          : "bg-slate-100 text-slate-700 ring-slate-200 hover:bg-slate-200"
                        : current === "ALL"
                          ? "bg-[#183b5b] text-white ring-[#183b5b]"
                          : "bg-slate-100 text-slate-700 ring-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {allLabel}
                  </button>
                ) : null}

                {field.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => (mode === "multi" ? toggleMulti(opt.value) : setSingle(opt.value))}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ring-1 ${
                      isSelected(opt.value)
                        ? "bg-[#183b5b] text-white ring-[#183b5b]"
                        : "bg-slate-100 text-slate-700 ring-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

