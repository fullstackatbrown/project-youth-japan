import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FollowOurJourney from "../components/FollowOurJourney";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const headingFont = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "G7/G20 Youth Japan",
  description: "Official site for G7/G20 Youth Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
