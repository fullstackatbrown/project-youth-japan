"use client";

import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function Navbar() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <nav className={`${plusJakartaSans.className} flex items-center space-x-4 justify-between text-[#333333] bg-[#fdf6f6] px-8 py-4`}>
      <Image src="/logo.svg" width={100} height={100} alt="Youth Japan Logo" className="w-10 h-10" />
      <Link href={`/${locale}`}>Home</Link>
      <Link href={`/${locale}/about`}>About</Link>
      <Link href={`/${locale}/members`}>Members</Link>
      <Link href={`/${locale}/apply`}>Apply</Link>
      <Link href={`/${locale}/events`}>Events</Link>
      <Link href={`/${locale}/library`}>Library</Link>
      <Link href={`/${locale}/contact`}>Contact Us</Link>
      <Link className="bg-[#AA302C] text-white rounded-tr-lg rounded-md p-1 whitespace-nowrap" href="#">Donate Now</Link>
      <LanguageSwitcher />
    </nav>
  );
}