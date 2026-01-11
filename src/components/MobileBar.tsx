'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { getQuotePath } from '@/lib/paths';

export function MobileBar() {
  const pathname = usePathname() || '/fr';
  const locale = pathname.startsWith('/en') ? 'en' : 'fr';

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-[92%] max-w-md items-center gap-3 rounded-full border border-white/10 bg-charcoal/90 p-2 shadow-glow backdrop-blur lg:hidden">
      <Link
        href={getQuotePath(locale)}
        className="flex-1 rounded-full bg-champagne px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
      >
        {locale === 'fr' ? 'Devis' : 'Quote'}
      </Link>
      <Link
        href={SITE.phoneHref}
        className="flex-1 rounded-full border border-champagne/60 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-champagne"
      >
        {locale === 'fr' ? 'Appeler' : 'Call'}
      </Link>
    </div>
  );
}
