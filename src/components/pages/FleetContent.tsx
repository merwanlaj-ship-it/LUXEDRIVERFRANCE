import { MotionSection } from '@/components/MotionSection';
import { Button } from '@/components/Button';
import { getQuotePath } from '@/lib/paths';

export function FleetContent({ locale }: { locale: 'fr' | 'en' }) {
  const vehicles = [
    {
      title: locale === 'fr' ? 'Van standard' : 'Standard van',
      passengers: '6-7',
      luggage: locale === 'fr' ? '6-8 bagages' : '6-8 luggage',
      comfort: locale === 'fr' ? 'Climatisation, Wi-Fi, sièges confort.' : 'AC, Wi-Fi, comfortable seating.',
      usage: locale === 'fr' ? 'Transferts business, familles, hôtels.' : 'Business transfers, families, hotels.',
      ideal: locale === 'fr' ? 'Idéal pour 1-6 passagers.' : 'Ideal for 1-6 passengers.'
    },
    {
      title: locale === 'fr' ? 'Van VIP aménagé' : 'VIP van',
      passengers: '4-6',
      luggage: locale === 'fr' ? '4-6 bagages' : '4-6 luggage',
      comfort: locale === 'fr' ? 'Salon privé, sellerie premium, boissons.' : 'Private lounge, premium leather, refreshments.',
      usage: locale === 'fr' ? 'VIP, direction, artistes.' : 'VIP, executives, artists.',
      ideal: locale === 'fr' ? 'Idéal pour arrivée VIP.' : 'Ideal for VIP arrival.'
    },
    {
      title: locale === 'fr' ? 'Minibus' : 'Minibus',
      passengers: '12-20',
      luggage: locale === 'fr' ? '12-18 bagages' : '12-18 luggage',
      comfort: locale === 'fr' ? 'Sièges inclinables, grand espace.' : 'Reclining seats, generous space.',
      usage: locale === 'fr' ? 'Séminaires, équipes, écoles.' : 'Seminars, teams, schools.',
      ideal: locale === 'fr' ? 'Idéal pour groupes.' : 'Ideal for groups.'
    },
    {
      title: locale === 'fr' ? 'Bus / Autocar' : 'Coach',
      passengers: '30-55',
      luggage: locale === 'fr' ? 'Soute dédiée' : 'Dedicated luggage hold',
      comfort: locale === 'fr' ? 'Confort long trajet, équipements.' : 'Long-distance comfort, amenities.',
      usage: locale === 'fr' ? 'Congrès, grands événements.' : 'Conferences, major events.',
      ideal: locale === 'fr' ? 'Idéal pour grands groupes.' : 'Ideal for large groups.'
    }
  ];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 gradient-overlay" aria-hidden />
        <div className="container-page relative z-10 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne">
            {locale === 'fr' ? 'Flotte' : 'Fleet'}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            {locale === 'fr'
              ? 'Vans, minibus et bus sélectionnés.'
              : 'Curated vans, minibuses and coaches.'}
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            {locale === 'fr'
              ? 'Confort, discrétion et capacité adaptées à chaque mission.'
              : 'Comfort, discretion, and capacity tailored to each mission.'}
          </p>
        </div>
      </section>

      <MotionSection>
        <div className="container-page grid gap-8 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <div key={vehicle.title} className="glass-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">{vehicle.title}</h2>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p>
                  <span className="text-white">{locale === 'fr' ? 'Passagers' : 'Passengers'}:</span> {vehicle.passengers}
                </p>
                <p>
                  <span className="text-white">{locale === 'fr' ? 'Bagages' : 'Luggage'}:</span> {vehicle.luggage}
                </p>
                <p>
                  <span className="text-white">{locale === 'fr' ? 'Confort' : 'Comfort'}:</span> {vehicle.comfort}
                </p>
                <p>
                  <span className="text-white">{locale === 'fr' ? 'Usages' : 'Uses'}:</span> {vehicle.usage}
                </p>
                <p className="text-champagne">{vehicle.ideal}</p>
              </div>
              <Button href={getQuotePath(locale)} className="mt-6">
                {locale === 'fr' ? 'Demander un devis' : 'Request a quote'}
              </Button>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-black/40">
        <div className="container-page">
          <h2 className="font-display text-3xl">
            {locale === 'fr' ? 'Galerie en arrière-plan' : 'Background gallery'}
          </h2>
          <p className="mt-4 text-white/70">
            {locale === 'fr'
              ? 'Des véhicules sobres et élégants, préparés avec soin avant chaque départ.'
              : 'Elegant vehicles, carefully prepared before every departure.'}
          </p>
        </div>
      </MotionSection>
    </main>
  );
}
