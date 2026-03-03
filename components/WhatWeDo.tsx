export default function WhatWeDo() {
  return (
    <div className="relative">
      <img
        src="../images/WhatWeDo.png"
        className="w-full object-cover h-135 opacity-70"
      ></img>
      <div className="absolute inset-0 flex flex-col items-center">
        <h1 className="text-4xl font-bold pt-10 tracking-[3px]">What We Do</h1>
        <div className="flex justify-center w-full">
          <div className="bg-white text-center w-1/4 h-90 m-5 mt-6 border-2 border-[#DEE2E6]">
            <h2 className="text-[#003366] m-5">Participation in Summits</h2>
            <p className="text-sm ml-5 mr-5 text-black opacity-70 font-[400]">
              ​We select, train, and dispatch Japanese delegations to Y7 & Y20
              Summits, which are held annually by the host countries of G7 and
              G20 Summits.
            </p>
          </div>
          <div className="bg-white text-center w-1/4 h-90 m-5 mt-6 border-2 border-[#DEE2E6]">
            <h2 className="text-[#003366] m-5">Events</h2>
            <p className="text-sm ml-5 mr-5 text-black opacity-70 font-[400]">
              ​We host Y7 & Y20 Summits when Japan hosts G7 and G20 Summits. We
              hosted Y7 Summit in 2016, Y20 Summit in 2019, and Y7 Summit in
              2023.
            </p>
          </div>
          <div className="bg-white text-center w-1/4 h-90 m-5 mt-6 border-2 border-[#DEE2E6]">
            <h2 className="text-[#003366] m-5">Partnerships</h2>
            <p className="text-sm ml-5 mr-5 text-black opacity-70 font-[400]">
              We form partnerships and engage in activities in addition to
              Y7/Y20 (for example, most recently, proposal to Tokyo Organising
              Committee of the Olympic and Paralympic Games).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
