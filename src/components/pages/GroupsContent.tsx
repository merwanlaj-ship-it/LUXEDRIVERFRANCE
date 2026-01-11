import { MotionSection } from '@/components/MotionSection';
import { Button } from '@/components/Button';
import { JsonLd } from '@/components/JsonLd';
import { getQuotePath } from '@/lib/paths';

export function GroupsContent({ locale }: { locale: 'fr' | 'en' }) {
  const faq = locale === 'fr'
    ? [
        ['Travaillez-vous avec les écoles de commerce ?', 'Oui, nous gérons les séminaires, forums et déplacements étudiants.'],
        ['Pouvez-vous couvrir plusieurs arrêts ?', 'Oui, nos chauffeurs coordonnent les multi-stops avec souplesse.'],
        ['Proposez-vous des solutions pour roadshows ?', 'Nous organisons les trajets d’équipes et de dirigeants.'],
        ['Avez-vous des bus pour grands groupes ?', 'Oui, bus et autocars disponibles avec chauffeur.'],
        ['Comment se déroule la réservation ?', 'Demande, confirmation, puis prise en charge le jour J.'],
        ['Gérez-vous les transferts ski ?', 'Oui, nous assurons les itinéraires en montagne et conditions spécifiques.'],
        ['Quel niveau de flexibilité ?', 'Nous ajustons les horaires selon votre programme.'],
        ['Fournissez-vous un contact dédié ?', 'Un interlocuteur unique suit votre dossier.'],
        ['Vos chauffeurs sont-ils bilingues ?', 'Oui, pour un accueil fluide des groupes internationaux.']
      ]
    : [
        ['Do you work with business schools?', 'Yes, we handle seminars, forums, and student travel.'],
        ['Can you manage multi-stop itineraries?', 'Yes, our chauffeurs coordinate multi-stops smoothly.'],
        ['Do you support roadshows?', 'We organize travel for teams and executives.'],
        ['Do you offer coaches for large groups?', 'Yes, buses and coaches are available with chauffeur.'],
        ['How does booking work?', 'Request, confirmation, then day-of pickup.'],
        ['Do you handle ski transfers?', 'Yes, mountain routes and specific conditions are covered.'],
        ['How flexible are schedules?', 'We adapt timing to your program.'],
        ['Is there a dedicated contact?', 'A single point of contact follows your file.'],
        ['Are chauffeurs bilingual?', 'Yes, for international groups.']
      ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'fr' ? 'Transport de groupe avec chauffeur' : 'Group transport with chauffeur',
    serviceType: locale === 'fr' ? 'Transport séminaire entreprise' : 'Corporate seminar transport',
    areaServed: ['Monaco', 'French Riviera', 'Paris']
  };

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 gradient-overlay" aria-hidden />
        <div className="container-page relative z-10 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne">
            {locale === 'fr' ? 'Groupes & Séminaires' : 'Groups & Seminars'}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            {locale === 'fr'
              ? 'Transport premium pour écoles de commerce et entreprises.'
              : 'Premium transport for business schools and companies.'}
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            {locale === 'fr'
              ? 'Logistique fluide pour vos événements, congrès, séminaires et déplacements de groupes.'
              : 'Seamless logistics for events, conferences, seminars and group travel.'}
          </p>
        </div>
      </section>

      <MotionSection>
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-display text-3xl">
              {locale === 'fr'
                ? 'Pourquoi un van/minibus/bus avec chauffeur ?'
                : 'Why a van/minibus/coach with chauffeur?'}
            </h2>
            <p className="text-white/70">
              {locale === 'fr'
                ? 'Gain de temps, cohésion d’équipe, coordination simplifiée et ponctualité maîtrisée.'
                : 'Time savings, team cohesion, simplified coordination and controlled punctuality.'}
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-sm text-white/70">
              {locale === 'fr'
                ? 'Notre expertise couvre le transport de séminaire entreprise, transport écoles et événementiel.'
                : 'Our expertise covers corporate seminar transport, school transport and event logistics.'}
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-black/40">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">{locale === 'fr' ? 'Ski & séminaires' : 'Ski & seminars'}</h2>
            <p className="mt-4 text-white/70">
              {locale === 'fr'
                ? 'Déplacements multi-stops, horaires serrés, coordination logistique optimale vers les Alpes.'
                : 'Multi-stop travel, tight schedules, optimized logistics to the Alps.'}
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl">{locale === 'fr' ? 'Process en 3 étapes' : '3-step process'}</h2>
            <ol className="mt-4 space-y-3 text-sm text-white/70">
              <li>1. {locale === 'fr' ? 'Demande de devis' : 'Request a quote'}</li>
              <li>2. {locale === 'fr' ? 'Confirmation & planification' : 'Confirmation & planning'}</li>
              <li>3. {locale === 'fr' ? 'Prise en charge le jour J' : 'Day-of pickup'}</li>
            </ol>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="text-xl font-semibold">{locale === 'fr' ? 'Garanties' : 'Guarantees'}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>{locale === 'fr' ? 'Ponctualité & suivi en temps réel' : 'Punctuality & real-time tracking'}</li>
              <li>{locale === 'fr' ? 'Sécurité et chauffeurs professionnels' : 'Safety and professional chauffeurs'}</li>
              <li>{locale === 'fr' ? 'Flexibilité sur vos horaires' : 'Flexibility with schedules'}</li>
            </ul>
          </div>
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="text-xl font-semibold">{locale === 'fr' ? 'Zones' : 'Zones'}</h3>
            <p className="mt-4 text-sm text-white/70">
              {locale === 'fr'
                ? 'Monaco, Côte d’Azur, French Riviera et Paris pour vos groupes et séminaires.'
                : 'Monaco, the French Riviera and Paris for groups and seminars.'}
            </p>
            <Button href={getQuotePath(locale)} className="mt-6">
              {locale === 'fr' ? 'Demander un devis' : 'Request a quote'}
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-black/40">
        <div className="container-page">
          <h2 className="font-display text-3xl">FAQ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faq.map(([question, answer]) => (
              <div key={question} className="glass-panel rounded-3xl p-6">
                <h3 className="text-base font-semibold">{question}</h3>
                <p className="mt-3 text-sm text-white/70">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
    </main>
  );
}
