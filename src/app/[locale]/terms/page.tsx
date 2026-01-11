import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { TermsContent } from '@/components/pages/TermsContent';
import { paths } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr' ? 'Conditions générales & mentions légales' : 'Terms, legal notice & privacy',
    locale === 'fr'
      ? 'Conditions générales, mentions légales, confidentialité et cookies.'
      : 'Terms, legal notice, privacy and cookies.',
    `/${locale}/${locale === 'fr' ? 'conditions' : 'terms'}`,
    { fr: paths.terms.fr, en: paths.terms.en }
  );
}

export default function TermsPage({ params }: { params: { locale: 'fr' | 'en' } }) {
  if (params.locale === 'fr') {
    redirect('/fr/conditions');
  }
  return <TermsContent locale={params.locale} />;
}
