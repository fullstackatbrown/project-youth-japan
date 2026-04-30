'use client';

import {useTranslations} from 'next-intl';

export default function DelegationsPage() {
  const t = useTranslations();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-semibold">{t('Delegations.title')}</h1>
      <p className="mt-4 text-lg opacity-80">{t('Delegations.description')}</p>
    </main>
  );
}