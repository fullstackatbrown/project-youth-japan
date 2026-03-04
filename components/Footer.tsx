import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#740a0d] px-8 py-14 text-[#d1d5dc]">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-16 mb-12">
          <div className="shrink-0 w-48">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/delegations" className="hover:text-white transition-colors">Get Involved</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl">
            Many of YDC&apos;s executives, delegates and alumni live and work across the lands
            colonially known as Canada. We are committed to learning the stories of these lands,
            and to pursuing truth &amp; reconciliation through our work here and abroad.
          </p>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm text-center">
            © 2026 G7/G20 Youth Japan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
