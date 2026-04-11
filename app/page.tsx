import WhatWeDo from "@/components/WhatWeDo";
import PageHero from "@/components/PageHero";
import News from "@/components/News";

export default function HomePage() {
  return (
    <main className="bg-[#f5f2f0] text-slate-900">
      <PageHero
        title={
          <>
            Solving Global Issues
            <span className="block">with Youth&apos;s Perspectives</span>
          </>
        }
        subtitle={"Empowering Japan's next generation of global leaders."}
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[70vh]"
      >
        <a
          href="/apply"
          className="inline-flex rounded-md bg-[#d0242a] px-10 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#b91f24] hover:shadow-xl"
        >
          Apply
        </a>
      </PageHero>

      {/* About */}
      <section className="bg-[#FFF6F6] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#183b5b] md:text-4xl lg:text-5xl">
            About Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
            At Young Diplomats of Japan, we understand that diplomacy extends
            beyond traditional boundaries. Our work focuses on understanding the
            views of the younger generation and delivering their insights to the
            places where policy and strategy are shaped. We aim to ensure that
            youth voices are heard, informed, and impactful in shaping the world
            ahead.
          </p>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex rounded-md bg-[#d0242a] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#b91f24] hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <img
        src="/images/flow-chart.png"
        className="w-full max-w-2xl mx-auto pt-10 pb-20 px-4"
      ></img>
      <News />
    </main>
  );
}
