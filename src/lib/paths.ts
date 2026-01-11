export const paths = {
  home: { fr: '/fr', en: '/en' },
  services: { fr: '/fr/services', en: '/en/services' },
  fleet: { fr: '/fr/flotte', en: '/en/fleet' },
  groups: { fr: '/fr/groupes', en: '/en/groups' },
  quote: { fr: '/fr/devis', en: '/en/quote' },
  terms: { fr: '/fr/conditions', en: '/en/terms' }
};

export function getQuotePath(locale: 'fr' | 'en') {
  return paths.quote[locale];
}
