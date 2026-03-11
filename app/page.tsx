import WhatWeDo from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <main className="bg-[#f5f2f0] text-slate-900">
          {/* Hero */}
          <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/homepage.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900/90" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-7xl">
                Solving Global Issues
                <span className="block">with Youth's Perspectives</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/90">
                Empowering Japan's next generation of global leaders.
              </p>
              <div className="mt-8">
                <a
                  href="/apply"
                  className="inline-flex rounded-md bg-[#d0242a] px-10 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#b91f24] hover:shadow-xl"
                >
                  Apply
                </a>
              </div>
            </div>
          </section>

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
    </main>
    
  );
}
