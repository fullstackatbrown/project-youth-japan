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

      {/* Follow Our Journey — bg #003366, h-[179px] */}
      <section className="bg-[#003366] h-[179px] px-6 flex items-center">
        <div className="mx-auto max-w-6xl w-full flex items-center justify-between">
          <h2 className="text-white font-bold text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-spartan)]">
            Follow Our Journey
          </h2>
          <div className="flex gap-[74px]">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="bg-[#b91f24] rounded-full w-[68px] h-[68px] flex items-center justify-center hover:bg-[#9e1a1f] transition-colors">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="bg-[#b91f24] rounded-full w-[68px] h-[68px] flex items-center justify-center hover:bg-[#9e1a1f] transition-colors">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="#003366" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#003366" strokeWidth="2"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="bg-[#b91f24] rounded-full w-[68px] h-[68px] flex items-center justify-center hover:bg-[#9e1a1f] transition-colors">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="bg-[#b91f24] rounded-full w-[68px] h-[68px] flex items-center justify-center hover:bg-[#9e1a1f] transition-colors">
              <svg className="w-7 h-7 fill-none" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4 4 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
