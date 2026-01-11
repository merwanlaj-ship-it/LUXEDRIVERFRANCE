'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['fr', 'en'] as const;

const routeMap: Record<'fr' | 'en', Record<string, string>> = {
  fr: {
    services: 'services',
    fleet: 'flotte',
    groups: 'groupes',
    quote: 'devis',
    terms: 'conditions'
  },
  en: {
    services: 'services',
    flotte: 'fleet',
    groupes: 'groups',
    devis: 'quote',
    conditions: 'terms'
  }
};

function getOppositeLocale(pathname: string) {
  return pathname.startsWith('/fr') ? 'en' : 'fr';
}

function swapLocale(pathname: string, locale: 'fr' | 'en') {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${locale}`;
  }
  const [, route] = segments;
  segments[0] = locale;
  if (route && routeMap[locale][route]) {
    segments[1] = routeMap[locale][route];
  }
  return `/${segments.join('/')}`;
}

export function LocaleSwitcher() {
  const pathname = usePathname() || '/fr';
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'fr';
  const nextLocale = getOppositeLocale(pathname);

  return (
    <div className="flex items-center gap-2 text-sm text-white/70">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={swapLocale(pathname, locale)}
          className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em] ${
            locale === currentLocale ? 'bg-white/10 text-white' : 'hover:text-white'
          }`}
          aria-current={locale === currentLocale ? 'true' : 'false'}
        >
          {locale}
        </Link>
      ))}
      <span className="sr-only">Current locale {currentLocale}. Switch to {nextLocale}.</span>
    </div>
  );
}
