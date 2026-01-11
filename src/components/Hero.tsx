'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { SITE, getPrimaryCta, getSecondaryCta } from '@/lib/site';
import { getQuotePath } from '@/lib/paths';

export function Hero({ locale }: { locale: 'fr' | 'en' }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 gradient-overlay" aria-hidden="true" />
      <div className="container-page relative z-10 flex min-h-[90vh] flex-col justify-center gap-10 py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-champagne">
            {locale === 'fr' ? 'Service chauffeur premium' : 'Premium chauffeur service'}
          </p>
          <h1 className="text-balance font-display text-4xl md:text-6xl">
            {locale === 'fr'
              ? 'Majestic Luxury Van & Bus Chauffeur — l’élégance discrète pour vos trajets essentiels.'
              : 'Majestic Luxury Van & Bus Chauffeur — discreet elegance for essential journeys.'}
          </h1>
          <p className="text-lg text-white/75">
            {locale === 'fr'
              ? 'Transferts aéroport, gares, hôtels et mises à disposition sur-mesure. Vans VIP, minibus et bus avec chauffeur pour Monaco, Côte d’Azur et Paris.'
              : 'Airport, station, hotel transfers and on-demand hire. VIP vans, minibuses and coaches with chauffeur across Monaco, the French Riviera and Paris.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={getQuotePath(locale)}>{getPrimaryCta(locale)}</Button>
            <Button href={SITE.phoneHref} variant="secondary">
              {getSecondaryCta(locale)}
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
            <span>Monaco</span>
            <span className="relative flex-1">
              <span className="absolute left-0 top-1/2 h-px w-full bg-white/20" />
              {!reduceMotion && (
                <motion.span
                  className="absolute left-0 top-1/2 h-px w-full bg-champagne"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                />
              )}
            </span>
            <span>Paris</span>
            <span className="relative flex-1">
              <span className="absolute left-0 top-1/2 h-px w-full bg-white/20" />
              {!reduceMotion && (
                <motion.span
                  className="absolute left-0 top-1/2 h-px w-full bg-champagne"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.6, ease: 'easeInOut' }}
                />
              )}
            </span>
            <span>Riviera</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
