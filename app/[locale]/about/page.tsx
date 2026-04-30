"use client";

import Link from "next/link";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";
import { useTranslations } from "next-intl";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const heroImage = "/images/hero.png";
const sectionImage = "/images/section-bg.png";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="bg-[#fff6f6]">
      <section className="relative flex min-h-[260px] md:h-[330px] items-center justify-center overflow-hidden">
        <img src={heroImage} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(70,49,52,0.52)]" />
        <h1 className="relative z-10 px-6 text-center text-4xl font-bold text-white sm:text-5xl md:text-[4.83rem]">
          {t("title")}
        </h1>
      </section>

      <section className="bg-[#fff6f6] px-6 py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="h-[260px] w-full max-w-[412px] shrink-0 bg-[#d9d9d9] md:h-[510px]" />

          <div className="flex-1 pt-4">
            <h2 className="mb-4 text-center font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-[0.03px] text-black md:text-[3.16rem] md:leading-[3.51rem]">
              It all begins with an idea
            </h2>
            <h3 className="mb-4 text-center font-[family-name:var(--font-body)] text-2xl font-medium leading-[1.2] tracking-[0.006px] text-black md:text-[2.1rem]">
              How We Started
            </h3>
            <p className="text-center font-[family-name:var(--font-body)] text-base leading-7 tracking-[-0.04px] text-black md:text-[1.58rem] md:leading-[2.57rem]">
              Lorem ipsum dolor sit amet consectetur. Ut duis enim donec odio leo nam hendrerit
              ullamcorper elementum. Laoreet interdum mattis varius varius condimentum elit
              adipiscing sed non. Libero ipsum vitae pellentesque viverra venenatis elementum neque
              tincidunt elit. Vestibulum et interdum tempus commodo morbi nam vehicula. Vitae congue
              tristique erat orci non. Orci penatibus vitae sit diam velit ut. Nulla sagittis
              habitant auctor feugiat.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2">
        {[
          {
            title: "Our Mission",
            subtitle: "Participation in Summits",
            body: "We select, train, and dispatch Japanese delegations to Y7 & Y20 Summits, which are held annually by the host countries of G7 and G20 Summits.",
          },
          {
            title: "Our Vision",
            subtitle: "Events",
            body: "We host Y7 & Y20 Summits when Japan hosts G7 and G20 Summits. We hosted Y7 Summit in 2016, Y20 Summit in 2019, and Y7 Summit in 2023.",
          },
        ].map((section) => (
          <div key={section.title} className="relative min-h-[420px] overflow-hidden md:min-h-[700px]">
            <img
              src={sectionImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[rgba(81,9,11,0.17)]" />
            <div className="relative z-10 p-6 md:p-8">
              <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-[0.03px] text-white md:text-[3.16rem] md:leading-[3.51rem]">
                {section.title}
              </h2>
              <div className="mt-4 border border-[#dee2e6] bg-white p-6 text-center md:p-8">
                <h3 className="mb-6 font-[family-name:var(--font-body)] text-xl leading-tight text-[#003366] md:text-[1.54rem]">
                  {section.subtitle}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-base leading-7 tracking-[-0.024px] text-[#4a5565] md:text-[1.23rem] md:leading-[1.85rem]">
                  {section.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-12">
        <Link
          href="/events"
          className="flex h-[72px] w-full items-center justify-center rounded-[32px] bg-[#b91f24] text-center font-[family-name:var(--font-heading)] text-3xl font-bold leading-none tracking-[-0.013px] text-white transition-colors hover:bg-[#9e1a1f] md:h-[102px] md:rounded-[40px] md:text-[3.16rem]"
        >
          News
        </Link>
      </div>

      <div className="bg-[#B91F24] py-6 text-center text-white">
        <h2 className={`${leagueSpartan.className} text-4xl font-bold md:text-6xl`}>
          Leadership
        </h2>
      </div>

      <TeamSection />

      <div className="bg-[#B91F24] py-6 text-center text-white">
        <h2 className={`${leagueSpartan.className} text-4xl font-bold md:text-6xl`}>
          Administration
        </h2>
      </div>

      <TeamSection />

      <div className="bg-[#D08A8C] px-6 py-14">
        <h2 className="mx-auto mb-8 max-w-6xl text-center font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-[0.03px] text-white md:text-[3.16rem] md:leading-[3.51rem]">
          Our Partners
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-center font-[family-name:var(--font-body)] text-base leading-7 text-white md:text-[1.23rem] md:leading-[1.85rem]">
          Youth Japan is committed to solidifying partnerships to give delegates the means to
          achieve their ambitions and uplift youth voices.
        </p>

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {["Partner 1", "Partner 2", "Partner 3"].map((name) => (
            <div
              key={name}
              className="flex h-[60px] items-center justify-center border border-[#dee2e6] bg-white font-[family-name:var(--font-body)] text-[1.23rem] text-[#4a5565]"
            >
              {name}
            </div>
          ))}
        </div>

        <h3 className="mb-8 font-[family-name:var(--font-heading)] text-2xl font-bold leading-8 text-white underline">
          Working with Youth Japan
        </h3>

        <div className="mb-14 flex flex-col gap-10">
          <PartnerRow imageFirst />
          <PartnerRow />
          <PartnerRow imageFirst />
        </div>
      </div>

      <div className="bg-white px-6 py-10">
        <div className="mx-auto max-w-lg rounded-[20px] bg-[#2F5592] px-6 py-10 text-center md:px-10">
          <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white md:text-[3.16rem] md:leading-[3.51rem]">
            Partner with us
          </h3>
          <p className="mb-4 font-[family-name:var(--font-body)] text-base leading-7 text-white md:text-[1.3rem] md:leading-[1.9rem]">
            Are you interested in partnering or collaborating with YDC? Send us an email to learn more
            about our partnerships.
          </p>

          <a
            href="mailto:partnerships.partenariats@youngdiplomats.ca"
            className="break-words font-[family-name:var(--font-body)] text-sm text-white underline md:text-[1.1rem]"
          >
            partnerships.partenariats@youngdiplomats.ca
          </a>
        </div>
      </div>
    </main>
  );
}

function TeamSection() {
  return (
    <div className="flex w-full flex-col items-center gap-12 px-6 py-12 md:px-8">
      <p className="max-w-3xl text-center text-lg text-gray-800 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur. Ut duis enim donec odio leo nam hendrerit ullamcorper elementum.
        Laoreet interdum mattis varius varius condimentum elit adipiscing sed non. Libero ipsum vitae
      </p>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((person) => (
          <div key={person} className="flex flex-col items-center gap-3">
            <img
              className="h-56 w-56 rounded-full border border-gray-400 bg-gray-300 object-cover md:h-80 md:w-80"
              src="#"
              alt=""
            />
            <p className="mt-3 font-[family-name:var(--font-body)] text-[0.95rem] font-semibold leading-snug text-[#b91f24]">
              NAME
            </p>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-[0.72rem] font-medium uppercase tracking-wide text-gray-600">
              TITLE
            </p>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-[0.78rem] text-[#b91f24]">
              Location
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerRow({ imageFirst = false }: { imageFirst?: boolean }) {
  const image = <div className="h-[200px] w-full shrink-0 bg-[#d9d9d9] md:h-[263px] md:w-[428px]" />;

  const text = (
    <div>
      <h4 className="mb-2 font-[family-name:var(--font-body)] text-xl font-bold leading-7 text-white underline md:text-[1.5625rem] md:leading-[1.6rem]">
        Access to networking opportunities with young leaders and current decision-makers
      </h4>
      <p className="font-[family-name:var(--font-body)] text-base leading-7 text-white md:text-[1.1875rem] md:leading-[1.6rem]">
        Many of the youth who engage with YDC are leaders in their communities in virtually all
        spaces. Investing in YDC is investing in youth who have an impact.
      </p>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      {imageFirst ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}