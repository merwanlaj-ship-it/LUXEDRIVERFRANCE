import type { Metadata } from 'next';
import { SITE } from './site';

export function buildMetadata(
  locale: 'fr' | 'en',
  title: string,
  description: string,
  path: string,
  alternates?: { fr: string; en: string }
): Metadata {
  const url = `${SITE.siteUrl}${path}`;
  const alternatePaths = alternates ?? {
    fr: path.replace(/^\/en/, '/fr'),
    en: path.replace(/^\/fr/, '/en')
  };
  return {
    title,
    description,
    metadataBase: new URL(SITE.siteUrl),
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE.siteUrl}${alternatePaths.fr}`,
        en: `${SITE.siteUrl}${alternatePaths.en}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
