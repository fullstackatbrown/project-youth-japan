import Link from "next/link";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

const linkStyle = "text-white hover:text-blue-400 transition-colors flex items-center justify-center w-12 h-12 rounded-full bg-[#b91f24]";
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
        <h1 className="relative z-10 text-white font-bold text-center px-6 text-[4.83rem] leading-[1.09] tracking-[0.09px] font-[family-name:var(--font-heading)]">
          G7/G20 Youth Japan: Our Story
        </h1>
      </section>

      {/* How We Started */}
      <section className="bg-[#fff6f6] py-16 px-6">
        <div className="mx-auto max-w-6xl flex gap-12 items-start">
          <div className="shrink-0 w-[412px] h-[510px] bg-[#d9d9d9]" />
          <div className="flex-1 pt-4">
            <h2 className="text-[3.16rem] font-bold text-center mb-4 text-black leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-heading)]">
              It all begins with an idea
            </h2>
            <h3 className="text-[2.1rem] font-medium text-center mb-4 text-black leading-[1.2] tracking-[0.006px] font-[family-name:var(--font-body)]">
              How We Started
            </h3>
            <p className="text-center text-black text-[1.58rem] leading-[2.57rem] tracking-[-0.04px] font-[family-name:var(--font-body)]">
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
            <h2 className="text-white font-bold text-center mb-8 text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-heading)]">
              Our Mission
            </h2>
            <div className="bg-white border border-[#dee2e6] p-8 text-center mt-4">
              <h3 className="text-[#003366] text-[1.54rem] leading-[1.23rem] mb-6 font-[family-name:var(--font-body)]">
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
            <h2 className="text-white font-bold text-center mb-8 text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-heading)]">
              Our Vision
            </h2>
            <div className="bg-white border border-[#dee2e6] p-8 text-center mt-4">
              <h3 className="text-[#003366] text-[1.54rem] leading-[1.23rem] mb-6 font-[family-name:var(--font-body)]">
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
          className="flex items-center justify-center w-full h-[102px] bg-[#b91f24] text-white font-bold text-center rounded-[40px] hover:bg-[#9e1a1f] transition-colors text-[3.16rem] leading-[1.76rem] tracking-[-0.013px] font-[family-name:var(--font-heading)]"
        >
          News
        </Link>
      </div>

      {/* Leadership */}
      <div className="bg-[#B91F24] text-white text-center py-6">
        <h2 className={`${leagueSpartan.className} text-6xl font-bold`}>Leadership</h2>
      </div>

      <div className="w-full px-8 py-12 flex flex-col items-center gap-12">
        {/* Description text */}
        <p className="text-2xl text-gray-800 text-center max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Ut duis enim donec odio leo nam hendrerit ullamcorper elementum. Laoreet interdum mattis varius varius condimentum elit adipiscing sed non. Libero ipsum vitae
        </p>

        {/* Images row with captions */}
        <div className="flex flex-row justify-center items-start gap-10">
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
        </div>
      </div>

       {/* Administration */}
      <div className="bg-[#B91F24] text-white text-center py-6">
        <h2 className={`${leagueSpartan.className} text-6xl font-bold`}>Administration</h2>
      </div>

      <div className="w-full px-8 py-12 flex flex-col items-center gap-12">
        {/* Description text */}
        <p className="text-2xl text-gray-800 text-center max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Ut duis enim donec odio leo nam hendrerit ullamcorper elementum. Laoreet interdum mattis varius varius condimentum elit adipiscing sed non. Libero ipsum vitae
        </p>

        {/* Images row with captions */}
        <div className="flex flex-row justify-center items-start gap-10">
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img className="w-80 h-80 bg-gray-300 rounded-full border border-gray-400 object-cover" src="#" />
            <p className="mt-3 text-[#b91f24] font-semibold text-[0.95rem] leading-snug font-[family-name:var(--font-body)]">
              NAME
            </p>
            <p className="mt-0.5 text-gray-600 font-medium text-[0.72rem] uppercase tracking-wide font-[family-name:var(--font-body)]">
              TITLE
            </p>
            <p className="mt-0.5 text-[#b91f24] text-[0.78rem] font-[family-name:var(--font-body)]">
              Location
            </p>
          </div>
        </div>
      </div>

      {/* Partners section */}
      <div className = "bg-[#D08A8C] py-14 px-6">
          <h2 className = "mx-auto max-w-6xl text-white font-bold text-center mb-8 text-[3.16rem] leading-[3.51rem] tracking-[0.03px] font-[family-name:var(--font-heading)]">
            Our Partners
          </h2>
          <p className="text-white text-center text-[1.23rem] leading-[1.85rem] max-w-xl mx-auto mb-10 font-[family-name:var(--font-body)]">
            Youth Japan  is committed to solidifying partnerships to give delegates the means to 
            achieve their ambitions and uplift youth voices.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-14">
          {["Partner 1", "Partner 2", "Partner 3"].map((name) => (
            <div
              key={name}
              className="bg-white border border-[#dee2e6] flex items-center justify-center h-[60px] text-[#4a5565] text-[1.23rem] font-[family-name:var(--font-body)]"
            >
              {name}
            </div>
            ))}
             </div>

            <h3 className="text-white font-bold text-[1.75rem] leading-[2rem] mb-8 font-[family-name:var(--font-heading)] underline">
              Working with Youth Japan
            </h3>

        <div className="flex flex-col gap-8 mb-14">
          {/* Row 1:*/}
          <div className="flex gap-6">
            <div className="shrink-0 w-[428px] h-[263px] bg-[#d9d9d9]" />
            <div>
              <h4 className="text-white font-bold text-[1.5626rem] leading-[1.6rem] mb-2 font-[family-name:var(--font-body)] underline">
                Access to networking opportunities with young leaders and current decision-makers
              </h4>
              <p className="text-white text-[1.1875rem] leading-[1.6rem] font-[family-name:var(--font-body)]">
                Many of the youth who engage with YDC are leaders in their communities in virtually all
                spaces. Investing in YDC is investing in youth who have an impact.
              </p>
            </div>
          </div>
          </div>

        {/* Row 2*/}
        <div className="flex gap-6 mb-14">
      <div>
        <h4 className="text-white font-bold text-[1.5625rem] leading-[1.6rem] mb-2 font-[family-name:var(--font-body)] underline">
          Opportunity to share your vision of how you're changing the world and bringing solutions
          to policy challenges
        </h4>
        <p className="text-white text-[1.1875rem] leading-[1.6rem] font-[family-name:var(--font-body)]">
          YDC delegations reach youth in Canada and around the world. This provides your
          organization an opportunity to showcase your work and the positive impact you have in
          solving society's challenges.
        </p>
      </div>
      <div className="shrink-0 w-[428px] h-[263px] bg-[#d9d9d9]" />
    </div>
      {/* Row 3 */}
          <div className="flex gap-6">
          <div className="shrink-0 w-[428px] h-[263px] bg-[#d9d9d9]" />
          <div>
            <h4 className="text-white font-bold text-[1.5625em] leading-[1.6rem] mb-2 font-[family-name:var(--font-body)] underline">
              Supporting today's business leaders, community leaders, and future decision-makers
            </h4>
            <p className="text-white text-[1.1875rem] leading-[1.6rem] font-[family-name:var(--font-body)]">
              With a reach of 22,000 people on social media, YDC attracts a lot of attention not just
              from youth but elected officials and other leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Partner with Us Section */}
      <div className="bg-white py-10">
        <div className="bg-[#2F5592] rounded-[20px] py-10 px-10 text-center max-w-lg mx-auto">
        <h3 className="text-white font-bold text-[3.16rem] leading-[3.51rem] mb-4 font-[family-name:var(--font-heading)]">
          Partner with us
        </h3>
        <p className="text-white text-[1.3rem] leading-[1.9rem] mb-4 font-[family-name:var(--font-body)]">
          Are you interested in partnering or collaborating with YDC? Send us an email to learn more
          about our partnerships.
        </p>
        
        <a href="mailto:partnerships.partenariats@youngdiplomats.ca"
          className="text-white text-[1.1rem] underline font-[family-name:var(--font-body)]">
          partnerships.partenariats@youngdiplomats.ca </a>
          </div>
      </div>
   </main>
  );
}
