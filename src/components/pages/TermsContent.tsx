import { MotionSection } from '@/components/MotionSection';

export function TermsContent({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <main>
      <MotionSection className="pt-12">
        <div className="container-page space-y-6">
          <h1 className="font-display text-4xl">
            {locale === 'fr' ? 'Conditions générales & informations légales' : 'Terms & legal information'}
          </h1>
          <p className="text-white/70">
            {locale === 'fr'
              ? 'Modèle à adapter et faire valider juridiquement.'
              : 'Template to adapt and validate with legal counsel.'}
          </p>
          <nav className="flex flex-wrap gap-4 text-sm text-champagne">
            <a href="#conditions">{locale === 'fr' ? 'Conditions générales' : 'Terms'}</a>
            <a href="#legal">{locale === 'fr' ? 'Mentions légales' : 'Legal notice'}</a>
            <a href="#privacy">{locale === 'fr' ? 'Confidentialité' : 'Privacy'}</a>
            <a href="#cookies">Cookies</a>
          </nav>
        </div>
      </MotionSection>

      <MotionSection className="pt-0">
        <div className="container-page space-y-12">
          <section id="conditions" className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">{locale === 'fr' ? 'Conditions générales' : 'Terms & conditions'}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>{locale === 'fr' ? 'Service 24/7 selon disponibilité, réservation confirmée par écrit.' : 'Service 24/7 subject to availability, booking confirmed in writing.'}</li>
              <li>{locale === 'fr' ? 'Tarifs communiqués au devis, ajustables selon options.' : 'Prices provided in the quote, adjustable with options.'}</li>
              <li>{locale === 'fr' ? 'Paiement avant prestation ou selon accord entreprise.' : 'Payment before service or per corporate agreement.'}</li>
              <li>{locale === 'fr' ? 'Annulation possible selon délai convenu.' : 'Cancellation possible according to agreed notice.'}</li>
              <li>{locale === 'fr' ? 'Retards dus à des tiers gérés avec flexibilité.' : 'Third-party delays handled with flexibility.'}</li>
              <li>{locale === 'fr' ? 'Responsabilité limitée aux conditions d’assurance.' : 'Liability limited to insurance conditions.'}</li>
              <li>{locale === 'fr' ? 'Objets perdus conservés 30 jours.' : 'Lost items kept for 30 days.'}</li>
              <li>{locale === 'fr' ? 'Force majeure selon droit français.' : 'Force majeure per French law.'}</li>
            </ul>
          </section>

          <section id="legal" className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">{locale === 'fr' ? 'Mentions légales' : 'Legal notice'}</h2>
            <p className="mt-4 text-sm text-white/70">
              {locale === 'fr'
                ? 'Éditeur : Majestic Luxury Van & Bus Chauffeur. Contact : reservation.majesticvans@gmail.com.'
                : 'Publisher: Majestic Luxury Van & Bus Chauffeur. Contact: reservation.majesticvans@gmail.com.'}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {locale === 'fr'
                ? 'Hébergeur : À compléter (ex: Vercel, AWS, OVH).' 
                : 'Hosting: To be completed (e.g. Vercel, AWS, OVH).'}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {locale === 'fr'
                ? 'Propriété intellectuelle : contenus protégés.'
                : 'Intellectual property: content protected.'}
            </p>
          </section>

          <section id="privacy" className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">{locale === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}</h2>
            <p className="mt-4 text-sm text-white/70">
              {locale === 'fr'
                ? 'Les données collectées via le formulaire sont utilisées pour répondre à votre demande, conservées 12 mois et non partagées.'
                : 'Data collected via the form is used to answer your request, stored for 12 months, and not shared.'}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {locale === 'fr'
                ? 'Vous pouvez exercer vos droits RGPD en écrivant à reservation.majesticvans@gmail.com.'
                : 'You can exercise your GDPR rights by emailing reservation.majesticvans@gmail.com.'}
            </p>
          </section>

          <section id="cookies" className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p className="mt-4 text-sm text-white/70">
              {locale === 'fr'
                ? 'Cookies techniques nécessaires au fonctionnement du site, mesure d’audience générique et préférences.'
                : 'Technical cookies required for the site, generic audience measurement and preferences.'}
            </p>
            <p className="mt-3 text-sm text-white/70">
              {locale === 'fr'
                ? 'Consentement à gérer via votre navigateur ou une bannière dédiée.'
                : 'Consent managed through your browser or a dedicated banner.'}
            </p>
          </section>
        </div>
      </MotionSection>
    </main>
  );
}
