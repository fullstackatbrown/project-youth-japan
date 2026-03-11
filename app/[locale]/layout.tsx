import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "G7/G20 Youth Japan",
  description: "Official site for G7/G20 Youth Japan",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
