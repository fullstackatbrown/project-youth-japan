import Link from "next/link";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";
import { faTwitter, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export default function ApplyPage() {
    return (
      <main className="w-screen">
        {/* Background image */}
        <div className="relative w-full">
          <img src="/images/apply-bg.png" className="w-full h-auto" alt="Apply background"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 py-16 bg-black/40 space-y-8">
            <div className="space-y-6">
              <p className={`${leagueSpartan.className} text-7xl font-bold`}>Get Involved</p>
              <div>
                <p className={`${plusJakartaSans.className} text-xl font-bold max-w-3xl`}>Interested in becoming a delegate or joining our executive team?</p>
                <p className={`${plusJakartaSans.className} text-xl font-bold max-w-3xl`}>You're in the right place!</p>
              </div>
              <p className={`${plusJakartaSans.className} text-lg max-w-3xl`}>On this page you'll find details on the recruitment process and important deadlines.</p>
            </div>

            <div className="flex gap-32 mt-6">
              <Link href="#" className="bg-[#B91F24] hover:bg-[#a31b1f] px-8 py-4 rounded-md text-lg font-semibold transition">Become a Delegate</Link>
              <Link href="#" className="bg-[#B91F24] hover:bg-[#a31b1f] px-8 py-4 rounded-md text-lg font-semibold transition">Join the Executive Team</Link>
            </div>
          </div>
        </div>

        {/* Become a delegate */}
        <section className="w-full bg-[#e9e4e2]">
          <div className="bg-[#c63734] text-white text-center py-6">
            <h2 className={`${leagueSpartan.className} text-4xl font-bold`}>Become a Delegate</h2>
          </div>

          <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-800">

              <p className="text-2xl font-semibold text-[#b32626]">We are currently recruiting for Y7 and Y20!</p>
              <Link className="underline" href="#">Click Here to Apply for Y7 and Y20</Link>
              <p className="text-[#b32626]">Applications close on Wednesday, December 3rd, 2025</p>

              <p className="leading-relaxed">Each year, YDC offers several opportunities for youth to represent young Canadians abroad at international meetings and speak to decision-makers on behalf of Canadian youth. Our delegations meet leaders, experts, and activists from around the world, and develop skills that will serve them in Canada and abroad.</p>
              <p className="text-[#b32626]">Before applying, learn more about the different{" "}
                <Link className="underline cursor-pointer" href="#">delegations</Link>.
              </p>

              <div>
                <p className="mb-3">As an indication, here is the timeline we follow for different recruitment cycles:</p> 
                <ul className="list-disc pl-6 space-y-1">
                  <li><Link className="underline" href="#">ECOSOC delegations</Link>: End of Summer</li>
                  <li><Link className="underline" href="#">Advocacy delegations</Link>: Late Fall/early Winter</li>
                  <li><Link className="underline" href="#">Observer delegations</Link>: Spring</li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-6">
                <FontAwesomeIcon className="w-12 h-12 bg-[#b32626] rounded-full flex items-center justify-center text-white text-xl" icon={faFacebook}/>
                <FontAwesomeIcon className="w-12 h-12 bg-[#b32626] rounded-full flex items-center justify-center text-white text-xl" icon={faInstagram}/>
                <FontAwesomeIcon className="w-12 h-12 bg-[#b32626] rounded-full flex items-center justify-center text-white text-xl" icon={faLinkedinIn}/>
                <FontAwesomeIcon className="w-12 h-12 bg-[#b32626] rounded-full flex items-center justify-center text-white text-xl" icon={faTwitter}/>
              </div>

            </div>

            {/* Image placeholders */}
            <div className="flex flex-col items-center gap-10">
              <img className="w-48 h-48 bg-gray-300 rounded-full border border-gray-400" src="#"/>
              <img className="w-48 h-48 bg-gray-300 rounded-full border border-gray-400" src="#"/>
              <img className="w-48 h-48 bg-gray-300 rounded-full border border-gray-400" src="#"/>
            </div>

          </div>

          {/* Bottom Divider */}
          <div className="max-w-6xl mx-auto px-8 pb-8">
            <div className="border-t border-gray-400"></div>
          </div>
        </section>

        {/* Recruitment process */}
        <section className="w-full bg-[#c77f7f] py-16 flex flex-col items-center gap-16">

          {/* Timeline */}
          <div className="w-[90%] max-w-6xl text-white p-6">
            <h2 className="text-2xl font-semibold text-left mb-6">Our Recruitment Process for Delegates:</h2>
            <img src="/images/recruitment-timeline.png" className="w-full h-auto" alt="Apply background"/>
          </div>

          {/* Steps */}
          <div className="w-[90%] max-w-5xl text-white flex flex-col gap-10">
            <div className="border-t border-white/40 pt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#2F5592]">Step 1:</h3>
              </div>

              <p className="text-lg leading-relaxed opacity-90">Delegate applications are completed through a Google Form. The application consists of three main parts: personal information, open-answer questions specific to the requirements of the delegation, and a recorded personal statement.</p>
            </div>

            <div className="border-t border-white/40 pt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#2F5592]">Step 2:</h3>
              </div>

              <p className="text-lg leading-relaxed opacity-90 mb-4">If your application passes the screening in Step 1, congratulations! Our recruitment team will invite you to a 30-minute interview.</p>
              <p className="text-lg leading-relaxed opacity-90 mb-4"> In the interview, we are trying to learn what applicants are hoping to accomplish from their experience, how well they understand the issues, and how they will work with their fellow delegates.</p>
              <p className="text-lg leading-relaxed opacity-90 mb-4">You will know the results of your interview within two weeks. Delegations can range in size anywhere from three to six individuals, depending on the event.</p>
            </div>
          </div>
        </section>

        {/* Executive team */}
        <section className="w-full bg-gray-200 pb-16">
          {/* Header */}
          <div className="w-full bg-[#3b5f95] py-6 text-center">
            <h2 className="text-4xl font-semibold text-white">Join the Executive Team</h2>
          </div>

          <div className="max-w-6xl mx-auto px-6 pt-10">
            {/* Image placeholders */}
            <div className="flex flex-row items-center justify-center gap-30">
              <img className="w-48 h-48 bg-gray-300 border border-gray-400" src="#"/>
              <img className="w-48 h-48 bg-gray-300 border border-gray-400" src="#"/>
              <img className="w-48 h-48 bg-gray-300 border border-gray-400" src="#"/>
            </div>

            <div className="mt-10 text-[#B91F24] space-y-6 max-w-4xl">
              <h3 className="text-2xl font-semibold">We are currently recruiting for Y7 and Y20!</h3>
              <p>YDC is run by an all-youth, all-volunteer executive. We're a dedicated group from across the country that cares about empowering youth and elevating young voices in the global policy arena. We're focused on creating excellent opportunities, building networks, and opening doors for the young leaders in our country.</p>
              <p>Before applying, learn more about{" "}<Link className="underline" href="#"> our executive teams and their responsibilities</Link>.</p>
              <p>There are currently no open positions.</p>
              <p>As an indication, YDC usually holds one executive recruitment cycle per year, generally taking place in the summer.</p>
              <p>Please check back here and keep an eye on our social media for announcements when applications open!</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  