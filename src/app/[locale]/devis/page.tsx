import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { QuoteContent } from '@/components/pages/QuoteContent';
import { paths } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr' ? 'Devis & réservation chauffeur' : 'Quote & booking',
    locale === 'fr'
      ? 'Demandez un devis rapide pour un transfert ou une mise à disposition avec chauffeur.'
      : 'Request a fast quote for transfers or hourly hire with chauffeur.',
    `/${locale}/${locale === 'fr' ? 'devis' : 'quote'}`,
    { fr: paths.quote.fr, en: paths.quote.en }
  );
}

export default function DevisPage({ params }: { params: { locale: 'fr' | 'en' } }) {
  if (params.locale === 'en') {
    redirect('/en/quote');
  }
  return <QuoteContent locale={params.locale} />;
}
