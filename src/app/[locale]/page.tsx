import { Hero } from '@/components/Hero';
import { MotionSection } from '@/components/MotionSection';
import { Button } from '@/components/Button';
import { buildMetadata } from '@/lib/metadata';
import { SITE, getPrimaryCta } from '@/lib/site';
import { getQuotePath } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr'
      ? 'Majestic Luxury Van & Bus Chauffeur | Chauffeur premium Monaco, Riviera, Paris'
      : 'Majestic Luxury Van & Bus Chauffeur | Premium chauffeur Monaco, Riviera, Paris',
    locale === 'fr'
      ? 'Service chauffeur discret et haut de gamme pour vans, minibus et bus. Transferts aéroport, gares et mises à disposition sur Monaco, Côte d’Azur et Paris.'
      : 'Discreet premium chauffeur service for vans, minibuses and coaches. Airport transfers and hourly hire across Monaco, the French Riviera and Paris.',
    `/${locale}`
  );
}

export default function HomePage({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;

  return (
    <main>
      <Hero locale={locale} />
      <MotionSection className="bg-black/40">
        <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">
              {locale === 'fr'
                ? 'Transport privé haut de gamme, orchestré avec précision.'
                : 'Premium private transport, orchestrated with precision.'}
            </h2>
            <p className="text-white/70">
              {locale === 'fr'
                ? 'Nous accompagnons vos déplacements professionnels et personnels avec une exigence constante : confort, discrétion et timing impeccable. Chaque détail est pensé pour faciliter votre logistique, du premier contact à la prise en charge.'
                : 'We accompany your professional and personal journeys with one constant: comfort, discretion, and impeccable timing. Every detail is considered, from first contact to final drop-off.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={`/${locale}/services`} variant="secondary">
                {locale === 'fr' ? 'Découvrir les services' : 'Explore services'}
              </Button>
              <Button href={getQuotePath(locale)}>{getPrimaryCta(locale)}</Button>
            </div>
          </div>
          <div className="glass-panel space-y-4 rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-champagne">
              {locale === 'fr' ? 'Réponse sous 24h' : 'Reply within 24h'}
            </p>
            <p className="text-lg">
              {locale === 'fr'
                ? 'Une équipe réactive, joignable et dédiée à votre planning.'
                : 'A responsive team dedicated to your schedule.'}
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>{locale === 'fr' ? 'Chauffeurs professionnels & bilingues' : 'Professional & bilingual chauffeurs'}</li>
              <li>{locale === 'fr' ? 'Véhicules premium & impeccables' : 'Premium, impeccable vehicles'}</li>
              <li>{locale === 'fr' ? 'Suivi en temps réel des horaires' : 'Real-time timing follow-up'}</li>
            </ul>
          </div>
        </div>
      </MotionSection>
      <MotionSection>
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            {
              title: locale === 'fr' ? 'Transferts sur-mesure' : 'Tailored transfers',
              text:
                locale === 'fr'
                  ? 'Aéroports, gares, ports, villas et hôtels. Vos trajets sont fluides, vos arrivées soignées.'
                  : 'Airports, stations, ports, villas, and hotels. Smooth journeys and refined arrivals.'
            },
            {
              title: locale === 'fr' ? 'Mise à disposition' : 'Hourly hire',
              text:
                locale === 'fr'
                  ? 'À l’heure, demi-journée ou journée complète. Un chauffeur dédié pour votre agenda.'
                  : 'Hourly, half-day, or full-day. A dedicated chauffeur for your agenda.'
            },
            {
              title: locale === 'fr' ? 'Transport de groupe' : 'Group transport',
              text:
                locale === 'fr'
                  ? 'Vans VIP, minibus et bus pour séminaires, événements et déplacements stratégiques.'
                  : 'VIP vans, minibuses, and coaches for seminars, events, and strategic travel.'
            }
          ].map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl p-8 transition hover:border-champagne/40">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </MotionSection>
      <MotionSection className="bg-black/40">
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              {locale === 'fr' ? 'Zones' : 'Zones'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              {locale === 'fr'
                ? 'Monaco, Côte d’Azur, French Riviera & Paris.'
                : 'Monaco, French Riviera & Paris.'}
            </h2>
            <p className="text-white/70">
              {locale === 'fr'
                ? 'Une présence locale pour les transferts aéroport, les rendez-vous business et les événements internationaux.'
                : 'Local presence for airport transfers, business appointments, and international events.'}
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-lg">
              {locale === 'fr'
                ? 'Devis simple & rapide, avec récapitulatif immédiat.'
                : 'Simple & fast quotes with instant recap.'}
            </p>
            <p className="mt-4 text-sm text-white/70">
              {locale === 'fr'
                ? 'Renseignez quelques informations, nous nous chargeons du reste.'
                : 'Share a few details and we take care of the rest.'}
            </p>
            <Button href={getQuotePath(locale)} className="mt-6">
              {getPrimaryCta(locale)}
            </Button>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
