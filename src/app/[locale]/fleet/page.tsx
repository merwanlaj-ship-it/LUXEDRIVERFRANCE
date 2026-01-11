import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { FleetContent } from '@/components/pages/FleetContent';
import { paths } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr' ? 'Flotte vans, minibus & bus avec chauffeur' : 'Fleet of vans, minibuses & coaches',
    locale === 'fr'
      ? 'Van standard, van VIP aménagé, minibus et bus avec chauffeur. Capacité, confort et usages.'
      : 'Standard van, VIP van, minibus and coach with chauffeur. Capacity, comfort and usage.',
    `/${locale}/${locale === 'fr' ? 'flotte' : 'fleet'}`,
    { fr: paths.fleet.fr, en: paths.fleet.en }
  );
}

export default function FleetPage({ params }: { params: { locale: 'fr' | 'en' } }) {
  if (params.locale === 'fr') {
    redirect('/fr/flotte');
  }
  return <FleetContent locale={params.locale} />;
}
