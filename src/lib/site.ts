export const SITE = {
  name: 'Majestic Luxury Van & Bus Chauffeur',
  shortName: 'Majestic Vans',
  phoneDisplay: '07 80 93 47 54',
  phoneHref: 'tel:+33780934754',
  email: 'reservation.majesticvans@gmail.com',
  zones: 'South of France • Monaco • Paris',
  responseTime: 'Réponse sous 24h',
  siteUrl: process.env.SITE_URL || 'https://majesticvans.com'
};

export const CTA = {
  primary: { fr: 'Demander un devis', en: 'Request a quote' },
  secondary: { fr: 'Appeler 07 80 93 47 54', en: 'Call 07 80 93 47 54' }
};

export function getPrimaryCta(locale: 'fr' | 'en') {
  return CTA.primary[locale];
}

export function getSecondaryCta(locale: 'fr' | 'en') {
  return CTA.secondary[locale];
}

export const NAV_ITEMS = {
  fr: [
    { label: 'Accueil', href: '/fr' },
    { label: 'Services', href: '/fr/services' },
    { label: 'Flotte', href: '/fr/flotte' },
    { label: 'Groupes & Séminaires', href: '/fr/groupes' },
    { label: 'Devis & Réservation', href: '/fr/devis' },
    { label: 'Conditions', href: '/fr/conditions' }
  ],
  en: [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Fleet', href: '/en/fleet' },
    { label: 'Groups & Seminars', href: '/en/groups' },
    { label: 'Quote & Booking', href: '/en/quote' },
    { label: 'Terms', href: '/en/terms' }
  ]
};

export const LOCALES = ['fr', 'en'] as const;
