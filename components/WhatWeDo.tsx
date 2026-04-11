const cards = [
  {
    title: 'Participation in Summits',
    text: 'We select, train, and dispatch Japanese delegations to Y7 & Y20 Summits, which are held annually by the host countries of G7 and G20 Summits.',
  },
  {
    title: 'Events',
    text: 'We host Y7 & Y20 Summits when Japan hosts G7 and G20 Summits. We hosted Y7 Summit in 2016, Y20 Summit in 2019, and Y7 Summit in 2023.',
  },
  {
    title: 'Partnerships',
    text: 'We form partnerships and engage in activities in addition to Y7/Y20 (for example, most recently, proposal to Tokyo Organising Committee of the Olympic and Paralympic Games).',
  },
];

export default function WhatWeDo() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/WhatWeDo.png')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center px-4 py-12">
        <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-[3px] mb-8">
          What We Do
        </h1>
        <div className="flex flex-col md:flex-row justify-center w-full max-w-5xl gap-4 pb-4">
          {cards.map(card => (
            <div
              key={card.title}
              className="bg-white text-center w-full md:w-1/3 border-2 border-[#DEE2E6] p-6"
            >
              <h2 className="text-[#003366] text-xl mb-4 font-semibold">{card.title}</h2>
              <p className="text-sm text-black opacity-70 font-[400]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
