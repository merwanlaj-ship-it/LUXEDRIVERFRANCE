import { MotionSection } from '@/components/MotionSection';
import { Button } from '@/components/Button';
import { buildMetadata } from '@/lib/metadata';
import { getPrimaryCta } from '@/lib/site';
import { getQuotePath } from '@/lib/paths';

export async function generateMetadata({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  return buildMetadata(
    locale,
    locale === 'fr' ? 'Services chauffeur – transferts & mise à disposition' : 'Chauffeur services – transfers & hourly hire',
    locale === 'fr'
      ? 'Transferts aéroport, gare, hôtel et mises à disposition sur Monaco, Côte d’Azur et Paris. Vans, minibus et bus avec chauffeur.'
      : 'Airport, station, hotel transfers and hourly hire across Monaco, the French Riviera and Paris. Vans, minibuses and coaches with chauffeur.',
    `/${locale}/services`
  );
}

export default function ServicesPage({ params }: { params: { locale: 'fr' | 'en' } }) {
  const { locale } = params;
  const services = [
    {
      title: locale === 'fr' ? 'Transferts' : 'Transfers',
      items: [
        locale === 'fr'
          ? 'Aéroports, gares, hôtels, villas, ports et événements.'
          : 'Airports, stations, hotels, villas, ports and events.',
        locale === 'fr'
          ? 'Accueil personnalisé, assistance bagages, timing maîtrisé.'
          : 'Personalized welcome, luggage assistance, controlled timing.',
        locale === 'fr'
          ? 'Vans, vans VIP, minibus et bus avec chauffeur.'
          : 'Vans, VIP vans, minibuses and coaches with chauffeur.'
      ]
    },
    {
      title: locale === 'fr' ? 'Mise à disposition' : 'Hourly hire',
      items: [
        locale === 'fr'
          ? 'À l’heure, demi-journée, journée complète ou multi-stops.'
          : 'Hourly, half-day, full-day or multi-stop itineraries.',
        locale === 'fr'
          ? 'Chauffeur dédié pour rendez-vous, roadshows et visites.'
          : 'Dedicated chauffeur for meetings, roadshows and visits.',
        locale === 'fr'
          ? 'Flexibilité et coordination en temps réel.'
          : 'Flexibility and real-time coordination.'
      ]
    }
  ];

  const useCases = [
    {
      title: locale === 'fr' ? 'Entreprises' : 'Corporate',
      text:
        locale === 'fr'
          ? 'Séminaires, roadshows, congrès, déplacements d’équipes et VIP.'
          : 'Seminars, roadshows, conferences, team and VIP travel.'
    },
    {
      title: locale === 'fr' ? 'Écoles' : 'Schools',
      text:
        locale === 'fr'
          ? 'Séminaires, déplacements ski, événements étudiants en toute sécurité.'
          : 'Seminars, ski trips, student events with full safety.'
    },
    {
      title: locale === 'fr' ? 'Événements' : 'Events',
      text:
        locale === 'fr'
          ? 'Mariages, soirées, hospitality et grands événements.'
          : 'Weddings, soirées, hospitality and major events.'
    }
  ];

  const faq = locale === 'fr'
    ? [
        {
          q: 'Quel délai pour obtenir un devis ?',
          a: 'Nous répondons généralement sous 24h avec une proposition claire et personnalisée.'
        },
        {
          q: 'Proposez-vous des transferts aéroport ?',
          a: 'Oui, transferts aéroport, gare, ports et hôtels sont nos missions quotidiennes.'
        },
        {
          q: 'Puis-je réserver un van VIP aménagé ?',
          a: 'Absolument, nos vans VIP offrent un confort premium et une discrétion totale.'
        },
        {
          q: 'Travaillez-vous pour des séminaires entreprise ?',
          a: 'Oui, nous gérons les déplacements de groupes et les agendas multi-stops.'
        },
        {
          q: 'Quels sont les moyens de paiement ?',
          a: 'Virement, carte et solutions adaptées aux entreprises.'
        },
        {
          q: 'Quels sont les délais de réservation ?',
          a: 'Nous recommandons d’anticiper, mais nous gérons aussi les demandes urgentes.'
        },
        {
          q: 'Puis-je modifier un itinéraire ?',
          a: 'Oui, nous ajustons les trajets en temps réel.'
        }
      ]
    : [
        {
          q: 'How fast do you reply with a quote?',
          a: 'We usually respond within 24h with a tailored proposal.'
        },
        {
          q: 'Do you handle airport transfers?',
          a: 'Yes, airports, stations, ports and hotels are covered daily.'
        },
        {
          q: 'Can I book a VIP van?',
          a: 'Absolutely, our VIP vans provide premium comfort and discretion.'
        },
        {
          q: 'Do you serve corporate seminars?',
          a: 'Yes, we manage group travel and multi-stop schedules.'
        },
        {
          q: 'Which payment methods are accepted?',
          a: 'Bank transfer, card payments and corporate options.'
        },
        {
          q: 'How early should I book?',
          a: 'We recommend advance booking, but urgent requests are possible.'
        },
        {
          q: 'Can I edit my itinerary?',
          a: 'Yes, routes are adjusted in real time.'
        }
      ];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 gradient-overlay" aria-hidden />
        <div className="container-page relative z-10 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne">
            {locale === 'fr' ? 'Services' : 'Services'}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            {locale === 'fr'
              ? 'Transferts & mise à disposition avec chauffeur.'
              : 'Transfers & hourly hire with chauffeur.'}
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            {locale === 'fr'
              ? 'Location van avec chauffeur, van VIP aménagé avec chauffeur, minibus avec chauffeur et bus avec chauffeur pour une mobilité premium.'
              : 'VIP van with chauffeur, minibus with driver, and bus with driver for premium mobility.'}
          </p>
        </div>
      </section>

      <MotionSection>
        <div className="container-page grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="glass-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Button href={getQuotePath(locale)} className="mt-6">
                {getPrimaryCta(locale)}
              </Button>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-black/40">
        <div className="container-page">
          <h2 className="font-display text-3xl">{locale === 'fr' ? 'Cas d’usage' : 'Use cases'}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="glass-panel rounded-3xl p-6">
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm text-white/70">{useCase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl">{locale === 'fr' ? 'Zones desservies' : 'Zones served'}</h2>
            <p className="mt-4 text-white/70">
              {locale === 'fr'
                ? 'Monaco, Côte d’Azur, French Riviera et Paris : une coordination fluide, même sur des trajets multi-stops.'
                : 'Monaco, the French Riviera and Paris: seamless coordination even for multi-stop itineraries.'}
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-lg">
              {locale === 'fr' ? 'Devis simple & rapide' : 'Fast, effortless quotes'}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {locale === 'fr'
                ? 'Indiquez votre besoin, nous vous accompagnons avec précision.'
                : 'Share your needs and we handle the rest with precision.'}
            </p>
            <Button href={getQuotePath(locale)} className="mt-6">
              {getPrimaryCta(locale)}
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-black/40">
        <div className="container-page">
          <h2 className="font-display text-3xl">FAQ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="glass-panel rounded-3xl p-6">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm text-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
