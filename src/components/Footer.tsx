import Link from 'next/link';
import { NAV_ITEMS, SITE } from '@/lib/site';

export function Footer({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal/95">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne">{SITE.shortName}</p>
          <p className="text-white/70">
            {locale === 'fr'
              ? 'Chauffeur privé premium pour vans, minibus et bus. Discrétion, ponctualité et confort sur les axes Monaco, Côte d’Azur et Paris.'
              : 'Premium chauffeur service for vans, minibuses, and coaches. Discreet, punctual, and refined across Monaco, the French Riviera, and Paris.'}
          </p>
          <p className="text-sm text-white/60">{SITE.zones}</p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {locale === 'fr' ? 'Navigation' : 'Navigation'}
          </p>
          {NAV_ITEMS[locale].map((item) => (
            <Link key={item.href} href={item.href} className="block hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </p>
          <a href={SITE.phoneHref} className="block hover:text-white">
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="block hover:text-white">
            {SITE.email}
          </a>
          <p className="text-white/50">{SITE.name}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
      </div>
    </footer>
  );
}
