import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FollowOurJourney from "../../components/FollowOurJourney";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <FollowOurJourney />
      <Footer />
    </NextIntlClientProvider>
  );
}