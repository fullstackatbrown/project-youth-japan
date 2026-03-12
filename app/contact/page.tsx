export default function ContactPage() {
  return (
    <main className="bg-[#fff6f6]">

      {/* Hero — red bg with dark overlay, "Contact Us" title + contact info */}
      <section className="bg-[#b91f24] relative">
        <div className="bg-[rgba(70,49,52,0.52)] px-6 py-20 text-center">
          <h1 className="text-[4.83rem] font-bold text-white leading-[1.09] tracking-[0.09px] font-[family-name:var(--font-heading)]">
            Contact Us
          </h1>
          {/* Divider */}
          <div className="mx-auto mt-4 mb-10 h-px w-[463px] bg-white/40" />
          <p className="text-[2.1rem] font-medium leading-[1.2] tracking-[0.006px] text-[#fd898c] font-[family-name:var(--font-body)]">
            Have questions about YDC? Our Delegations? Partnership opportunities?
          </p>
          <p className="mt-6 text-[2.1rem] font-medium leading-[1.2] tracking-[0.006px] text-[#fd898c] font-[family-name:var(--font-body)]">
            Send us an email:
            <br />
            info@youngdiplomats.ca
          </p>
        </div>

        {/* Contact Form */}
        <form className="mx-auto max-w-5xl px-6 pb-20 pt-10">

          {/* Name row */}
          <div className="mb-6">
            <p className="text-[1.58rem] font-normal text-white mb-2 font-[family-name:var(--font-body)]">
              Name
            </p>
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-[1.4rem] text-white mb-1 font-[family-name:var(--font-inter)]">
                  First Name <span className="text-white/70">(required)</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-[49px] bg-[#d9d9d9] rounded-[17px] px-4 text-black text-[1.4rem] font-[family-name:var(--font-inter)] outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[1.4rem] text-white mb-1 font-[family-name:var(--font-inter)]">
                  Last Name <span className="text-white/70">(required)</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-[49px] bg-[#d9d9d9] rounded-[17px] px-4 text-black text-[1.4rem] font-[family-name:var(--font-inter)] outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[1.58rem] font-normal text-white mb-1 font-[family-name:var(--font-body)]">
              Email <span className="text-[1.4rem] font-[family-name:var(--font-inter)] text-white/70">(required)</span>
            </label>
            <input
              type="email"
              required
              className="w-full h-[49px] bg-[#d9d9d9] px-4 text-black text-[1.4rem] font-[family-name:var(--font-inter)] outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Newsletter checkbox */}
          <div className="mb-6 flex items-center gap-3">
            <input
              type="checkbox"
              id="newsletter"
              className="w-5 h-5 accent-white"
            />
            <label htmlFor="newsletter" className="text-[1.4rem] text-white font-[family-name:var(--font-inter)]">
              Sign up for news and updates
            </label>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-[1.58rem] font-normal text-white mb-1 font-[family-name:var(--font-body)]">
              Subject <span className="text-[1.4rem] font-[family-name:var(--font-inter)] text-white/70">(required)</span>
            </label>
            <input
              type="text"
              required
              className="w-full h-[96px] bg-[#d9d9d9] px-4 py-3 text-black text-[1.4rem] font-[family-name:var(--font-inter)] outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block text-[1.58rem] font-normal text-white mb-1 font-[family-name:var(--font-body)]">
              Message <span className="text-[1.4rem] font-[family-name:var(--font-inter)] text-white/70">(required)</span>
            </label>
            <textarea
              required
              rows={8}
              className="w-full bg-[#d9d9d9] px-4 py-3 text-black text-[1.4rem] font-[family-name:var(--font-inter)] outline-none focus:ring-2 focus:ring-white/50 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-white rounded-full px-10 h-[66px] text-[#2f5592] text-[1.875rem] font-medium font-[family-name:var(--font-body)] hover:bg-white/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Stay in Touch! */}
      <section className="relative h-[560px] flex items-center justify-center overflow-hidden bg-gray-400">
        <div className="absolute inset-0 bg-[rgba(70,49,52,0.52)]" />
        <h2 className="relative z-10 text-white font-bold text-[4.83rem] leading-[1.09] tracking-[0.09px] text-center font-[family-name:var(--font-heading)]">
          Stay in Touch!
        </h2>
      </section>

    </main>
  );
}
