"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const links = [
  { href: "", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/members", labelKey: "members" },
  { href: "/apply", labelKey: "apply" },
  { href: "/events", labelKey: "events" },
  { href: "/library", labelKey: "library" },
  { href: "/contact", labelKey: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("Navbar");

  return (
    <nav className="flex items-center space-x-4 justify-between text-[#333333] bg-[#fdf6f6] px-8 py-4">
      <Link href={`/${locale}`}>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Youth Japan Logo"
          className="w-10 h-10"
        />
      </Link>

      {links.map((link) => (
        <Link key={link.labelKey} href={`/${locale}${link.href}`}>
          {t(link.labelKey)}
        </Link>
      ))}

      <Link
        className="bg-[#AA302C] text-white rounded-tr-lg rounded-md p-1 whitespace-nowrap"
        href="#"
      >
        {t("donate")}
      </Link>

      <LanguageSwitcher />
    </nav>
  );
}