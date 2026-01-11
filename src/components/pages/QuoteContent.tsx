import { QuoteWizard } from '@/components/QuoteWizard';
import { MotionSection } from '@/components/MotionSection';

export function QuoteContent({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <main>
      <MotionSection className="pt-12">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne">
            {locale === 'fr' ? 'Devis & Réservation' : 'Quote & Booking'}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            {locale === 'fr' ? 'Demander un devis innovant.' : 'Request an innovative quote.'}
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            {locale === 'fr'
              ? 'Formulaire rapide, récapitulatif en temps réel et réponse sous 24h.'
              : 'Fast form, real-time summary and reply within 24h.'}
          </p>
        </div>
      </MotionSection>
      <MotionSection className="pt-0">
        <div className="container-page">
          <QuoteWizard locale={locale} />
        </div>
      </MotionSection>
    </main>
  );
}
