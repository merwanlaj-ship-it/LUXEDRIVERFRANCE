'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { LocaleSwitcher } from './LocaleSwitcher';
import { NAV_ITEMS, SITE, getPrimaryCta, getSecondaryCta } from '@/lib/site';
import { getQuotePath } from '@/lib/paths';

export function Header() {
  const pathname = usePathname() || '/fr';
  const locale = pathname.startsWith('/en') ? 'en' : 'fr';
  const navItems = NAV_ITEMS[locale];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-charcoal/80 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-champagne">
            {SITE.shortName}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <Button href={getQuotePath(locale)}>{getPrimaryCta(locale)}</Button>
          <Button href={SITE.phoneHref} variant="secondary">
            {getSecondaryCta(locale)}
          </Button>
        </div>
        <div className="lg:hidden">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
