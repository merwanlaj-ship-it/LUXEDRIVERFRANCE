import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileBar } from '@/components/MobileBar';
import { JsonLd } from '@/components/JsonLd';
import { LOCALES, SITE } from '@/lib/site';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!LOCALES.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    areaServed: ['Monaco', 'French Riviera', 'Paris'],
    url: SITE.siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Chauffeur privé van, minibus et bus',
    areaServed: ['Monaco', 'French Riviera', 'Paris'],
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name
    }
  };

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      {children}
      <Footer locale={locale as 'fr' | 'en'} />
      <MobileBar />
      <JsonLd data={localBusiness} />
      <JsonLd data={serviceSchema} />
    </NextIntlClientProvider>
  );
}
