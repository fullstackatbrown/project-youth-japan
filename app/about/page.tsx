import Link from "next/link";

const heroImage = "/images/hero.png";
const sectionImage = "/images/section-bg.png";

export default function AboutPage() {
  return (
    <main className="bg-[#fff6f6]">
      {/* Hero — 330px tall, overlay rgba(70,49,52,0.52) */}
      <section className="relative h-[330px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="G7/G20 Youth Japan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(70,49,52,0.52)]" />
        <h1 className="relative z-10 text-white font-bold text-center px-6 text-[4.83rem] leading-[1.09] tracking-[0.09px] font-[family-name:var(--font-spartan)]">
          G7/G20 Youth Japan: Our Story
        </h1>
      </section>

      {/* How We Started */}
      <section className="bg-[#fff6f6] py-16 px-6">
        <div className="mx-auto max-w-6xl flex gap-12 items-start">
          <div className="shrink-0 w-[412px] h-[510px] bg-[#d9d9d9]" />
          <div className="flex-1 pt-4">
            <h2 className="text-[3.16rem] font-bold text-center mb-4 text-black leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-spartan)]">
              It all begins with an idea
            </h2>
            <h3 className="text-[2.1rem] font-medium text-center mb-4 text-black leading-[1.2] tracking-[0.006px] font-[family-name:var(--font-jakarta)]">
              How We Started
            </h3>
            <p className="text-center text-black text-[1.58rem] leading-[2.57rem] tracking-[-0.04px] font-[family-name:var(--font-jakarta)]">
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

      {/* Our Mission & Our Vision — each 550×700px in Figma */}
      <section className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 gap-8">
        {/* Our Mission */}
        <div className="relative overflow-hidden min-h-[700px]">
          <img src={sectionImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[rgba(81,9,11,0.17)]" />
          <div className="relative z-10 p-8">
            <h2 className="text-white font-bold text-center mb-8 text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-spartan)]">
              Our Mission
            </h2>
            <div className="bg-white border border-[#dee2e6] p-8 text-center mt-4">
              <h3 className="text-[#003366] text-[1.54rem] leading-[1.23rem] mb-6 font-[family-name:var(--font-jakarta)]">
                Participation in Summits
              </h3>
              <p className="text-[#4a5565] text-[1.23rem] leading-[1.85rem] tracking-[-0.024px] font-[family-name:var(--font-inter)]">
                We select, train, and dispatch Japanese delegations to Y7 &amp; Y20 Summits, which
                are held annually by the host countries of G7 and G20 Summits.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="relative overflow-hidden min-h-[700px]">
          <img src={sectionImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[rgba(81,9,11,0.17)]" />
          <div className="relative z-10 p-8">
            <h2 className="text-white font-bold text-center mb-8 text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-spartan)]">
              Our Vision
            </h2>
            <div className="bg-white border border-[#dee2e6] p-8 text-center mt-4">
              <h3 className="text-[#003366] text-[1.54rem] leading-[1.23rem] mb-6 font-[family-name:var(--font-jakarta)]">
                Events
              </h3>
              <p className="text-[#4a5565] text-[1.23rem] leading-[1.85rem] tracking-[-0.024px] font-[family-name:var(--font-inter)]">
                We host Y7 &amp; Y20 Summits when Japan hosts G7 and G20 Summits. We hosted Y7
                Summit in 2016, Y20 Summit in 2019, and Y7 Summit in 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News button — h-[102px], rounded-[40px] */}
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <Link
          href="/events"
          className="flex items-center justify-center w-full h-[102px] bg-[#b91f24] text-white font-bold text-center rounded-[40px] hover:bg-[#9e1a1f] transition-colors text-[3.16rem] leading-[1.76rem] tracking-[-0.013px] font-[family-name:var(--font-spartan)]"
        >
          News
        </Link>
      </div>

    </main>
  );
}
