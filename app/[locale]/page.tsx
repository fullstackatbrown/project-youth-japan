'use client';

import WhatWeDo from "@/components/WhatWeDo";
import PageHero from "@/components/PageHero";
import News from "@/components/News";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main className="bg-[#f5f2f0] text-slate-900">
      <PageHero
        title={
          <>
            {t("title.line1")}
            <span className="block">{t("title.line2")}</span>
          </>
        }
        subtitle={t("subtitle")}
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[70vh]"
      >
        <a
          href="/apply"
          className="inline-flex rounded-md bg-[#d0242a] px-10 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#b91f24] hover:shadow-xl"
        >
          {t("apply")}
        </a>
      </PageHero>

      {/* About */}
      <section className="bg-[#FFF6F6] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#183b5b] md:text-4xl lg:text-5xl">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
            {t("about.description")}
          </p>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex rounded-md bg-[#d0242a] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#b91f24] hover:shadow-lg"
            >
              {t("about.learnMore")}
            </a>
          </div>
        </div>
      </section>

      <WhatWeDo />

      <img
        src="/images/flow-chart.png"
        className="max-w-150 mx-auto pt-10 pb-20"
      />

      <News />
    </main>
  );
}