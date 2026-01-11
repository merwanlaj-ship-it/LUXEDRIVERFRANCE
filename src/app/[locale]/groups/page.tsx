import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { GroupsContent } from '@/components/pages/GroupsContent';
import { paths } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr'
      ? 'Groupes & séminaires – transport écoles et entreprises'
      : 'Groups & seminars – corporate and school transport',
    locale === 'fr'
      ? 'Transport de groupe pour écoles de commerce, entreprises et événements. Vans, minibus et bus avec chauffeur.'
      : 'Group transport for business schools, corporations and events. Vans, minibuses and coaches with chauffeur.',
    `/${locale}/${locale === 'fr' ? 'groupes' : 'groups'}`,
    { fr: paths.groups.fr, en: paths.groups.en }
  );
}

export default function GroupsPage({ params }: { params: { locale: 'fr' | 'en' } }) {
  if (params.locale === 'fr') {
    redirect('/fr/groupes');
  }
  return <GroupsContent locale={params.locale} />;
}
