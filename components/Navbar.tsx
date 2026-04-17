'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Menu, X } from 'lucide-react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Members' },
  { href: '/apply', label: 'Apply' },
  { href: '/events', label: 'Events' },
  { href: '/library', label: 'Library' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${plusJakartaSans.className} relative z-50 text-[#333333] bg-[#fdf6f6] px-8 py-4`}>
      {/* Desktop — original layout: logo + all links spread with justify-between */}
      <div className="hidden md:flex items-center space-x-4 justify-between">
        <Image src="/logo.svg" width={100} height={100} alt="Youth Japan Logo" className="w-10 h-10" />
        {links.map(l => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <Link className="bg-[#AA302C] text-white rounded-tr-lg rounded-md p-1 whitespace-nowrap" href="#">
          Donate Now
        </Link>
      </div>

      {/* Mobile — logo + hamburger */}
      <div className="md:hidden flex items-center justify-between">
        <Image src="/logo.svg" width={40} height={40} alt="Youth Japan Logo" />
        <button className="p-1" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 flex flex-col border-t border-[#e5e5e5] pt-3 pb-2 gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 px-1 text-base hover:text-[#AA302C] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#AA302C] text-white rounded-md px-3 py-2 text-center"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
