import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FollowOurJourney from "../components/FollowOurJourney";

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
      <body>
        <Navbar />
        {children}
         <FollowOurJourney />
        <Footer />
      </body>
    </html>
  );
}
