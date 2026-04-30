"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("Navbar");

  return (
    <nav className="bg-[#fdf6f6] px-6 py-4 text-[#333333] md:px-8">
      <div className="flex w-full items-center justify-between gap-4">
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Youth Japan Logo"
            className="h-10 w-10 cursor-pointer"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-evenly gap-4 lg:flex">
          {links.map((link) => (
            <Link
              key={link.labelKey}
              href={`/${locale}${link.href}`}
              className="whitespace-nowrap text-sm xl:text-base"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            className="whitespace-nowrap rounded-md rounded-tr-lg bg-[#AA302C] px-3 py-2 text-sm text-white xl:text-base"
            href="#"
          >
            {t("donate")}
          </Link>

          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="text-2xl lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-3 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.labelKey}
              href={`/${locale}${link.href}`}
              onClick={() => setIsOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}

          <Link
            className="w-fit whitespace-nowrap rounded-md rounded-tr-lg bg-[#AA302C] px-3 py-2 text-white"
            href="#"
            onClick={() => setIsOpen(false)}
          >
            {t("donate")}
          </Link>

          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}