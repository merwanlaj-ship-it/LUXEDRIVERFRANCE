'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import { QuoteSchema, type QuoteInput } from '@/lib/quote-schema';
import { Toast } from './Toast';
import { Button } from './Button';
import { SITE } from '@/lib/site';

const steps = [
  { id: 1, label: { fr: 'Service', en: 'Service' } },
  { id: 2, label: { fr: 'Trajet', en: 'Trip' } },
  { id: 3, label: { fr: 'Passagers', en: 'Passengers' } },
  { id: 4, label: { fr: 'Contexte', en: 'Context' } },
  { id: 5, label: { fr: 'Coordonnées', en: 'Contact' } }
];

const vehicleLabels = {
  van: { fr: 'Van', en: 'Van' },
  'van-vip': { fr: 'Van VIP', en: 'VIP Van' },
  minibus: { fr: 'Minibus', en: 'Minibus' },
  bus: { fr: 'Bus', en: 'Coach' }
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  const parts = digits.match(/.{1,2}/g) || [];
  return parts.join(' ');
}

export function QuoteWizard({ locale }: { locale: 'fr' | 'en' }) {
  const [step, setStep] = useState(1);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<QuoteInput>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      serviceType: 'transfert',
      passengers: 2,
      luggage: 2,
      vehicle: 'van',
      context: 'entreprise',
      consent: false,
      honey: ''
    }
  });

  const phoneRegister = register('phone', {
    onChange: (event) => {
      setValue('phone', formatPhone(event.target.value), { shouldValidate: true });
    }
  });

  const values = watch();
  const progress = (step / steps.length) * 100;

  const nextStep = async () => {
    const fieldsByStep: Record<number, Array<keyof QuoteInput>> = {
      1: ['serviceType'],
      2: ['departure', 'arrival', 'datetime', 'duration'],
      3: ['passengers', 'luggage', 'vehicle'],
      4: ['context', 'notes'],
      5: ['name', 'email', 'phone', 'consent']
    };

    const isValid = await trigger(fieldsByStep[step]);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: QuoteInput) => {
    setToast(null);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.message || 'Erreur');
      }

      setSubmitted(true);
      setToast({
        message: locale === 'fr' ? 'Demande envoyée avec succès.' : 'Quote request sent successfully.',
        type: 'success'
      });
    } catch (error) {
      setToast({
        message:
          locale === 'fr'
            ? 'Une erreur est survenue. Veuillez réessayer.'
            : 'Something went wrong. Please try again.',
        type: 'error'
      });
    }
  };

  if (submitted) {
    return (
      <div className="glass-panel rounded-3xl p-10 text-center">
        <h2 className="font-display text-3xl">
          {locale === 'fr' ? 'Merci pour votre demande.' : 'Thank you for your request.'}
        </h2>
        <p className="mt-4 text-white/70">
          {locale === 'fr'
            ? 'Réponse sous 24h. Nous restons disponibles pour ajuster votre trajet.'
            : 'Reply within 24h. We remain available to refine your itinerary.'}
        </p>
        <Button href={SITE.phoneHref} className="mt-8">
          {locale === 'fr' ? 'Appeler maintenant' : 'Call now'}
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="glass-panel rounded-3xl p-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
            <span>
              {locale === 'fr' ? 'Étape' : 'Step'} {step}/{steps.length}
            </span>
            <span>{steps[step - 1].label[locale]}</span>
          </div>
          <div className="mt-4 h-1 w-full rounded-full bg-white/10">
            <div className="h-1 rounded-full bg-champagne" style={{ width: `${progress}%` }} />
          </div>

          <div className="mt-8 space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm text-white/70">
                  {locale === 'fr' ? 'Type de service' : 'Service type'}
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { value: 'transfert', label: locale === 'fr' ? 'Transfert' : 'Transfer' },
                    { value: 'mise-a-disposition', label: locale === 'fr' ? 'Mise à disposition' : 'Hourly hire' }
                  ].map((option) => (
                    <label key={option.value} className="glass-panel flex cursor-pointer items-center justify-between rounded-2xl px-5 py-4">
                      <span>{option.label}</span>
                      <input type="radio" value={option.value} {...register('serviceType')} />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-white/70" htmlFor="departure">
                    {locale === 'fr' ? 'Départ' : 'Departure'}
                  </label>
                  <input
                    id="departure"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('departure')}
                  />
                  {errors.departure && <p className="mt-2 text-xs text-red-300">{errors.departure.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="arrival">
                    {locale === 'fr' ? 'Arrivée' : 'Arrival'}
                  </label>
                  <input
                    id="arrival"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('arrival')}
                  />
                  {errors.arrival && <p className="mt-2 text-xs text-red-300">{errors.arrival.message}</p>}
                </div>
                {values.serviceType === 'transfert' ? (
                  <div>
                    <label className="block text-sm text-white/70" htmlFor="datetime">
                      {locale === 'fr' ? 'Date & heure' : 'Date & time'}
                    </label>
                    <input
                      id="datetime"
                      type="datetime-local"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                      {...register('datetime')}
                    />
                    {errors.datetime && <p className="mt-2 text-xs text-red-300">{errors.datetime.message}</p>}
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm text-white/70" htmlFor="duration">
                      {locale === 'fr' ? 'Durée' : 'Duration'}
                    </label>
                    <input
                      id="duration"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                      placeholder={locale === 'fr' ? 'Ex: 4 heures' : 'e.g. 4 hours'}
                      {...register('duration')}
                    />
                    {errors.duration && <p className="mt-2 text-xs text-red-300">{errors.duration.message}</p>}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="block text-sm text-white/70" htmlFor="passengers">
                    {locale === 'fr' ? 'Passagers' : 'Passengers'}
                  </label>
                  <input
                    id="passengers"
                    type="number"
                    min={1}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('passengers')}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="luggage">
                    {locale === 'fr' ? 'Bagages' : 'Luggage'}
                  </label>
                  <input
                    id="luggage"
                    type="number"
                    min={0}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('luggage')}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="vehicle">
                    {locale === 'fr' ? 'Véhicule' : 'Vehicle'}
                  </label>
                  <select
                    id="vehicle"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('vehicle')}
                  >
                    {Object.entries(vehicleLabels).map(([value, labels]) => (
                      <option key={value} value={value}>
                        {labels[locale]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <label className="block text-sm text-white/70" htmlFor="context">
                  {locale === 'fr' ? 'Contexte' : 'Context'}
                </label>
                <select
                  id="context"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  {...register('context')}
                >
                  <option value="entreprise">{locale === 'fr' ? 'Entreprise' : 'Corporate'}</option>
                  <option value="ecole">{locale === 'fr' ? 'École' : 'School'}</option>
                  <option value="evenement">{locale === 'fr' ? 'Événement' : 'Event'}</option>
                  <option value="autre">{locale === 'fr' ? 'Autre' : 'Other'}</option>
                </select>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="notes">
                    {locale === 'fr' ? 'Notes (optionnel)' : 'Notes (optional)'}
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('notes')}
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-white/70" htmlFor="name">
                    {locale === 'fr' ? 'Nom' : 'Name'}
                  </label>
                  <input
                    id="name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('name')}
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-300">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...register('email')}
                  />
                  {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white/70" htmlFor="phone">
                    {locale === 'fr' ? 'Téléphone' : 'Phone'}
                  </label>
                  <input
                    id="phone"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    {...phoneRegister}
                  />
                  {errors.phone && <p className="mt-2 text-xs text-red-300">{errors.phone.message}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <input id="consent" type="checkbox" className="h-4 w-4" {...register('consent')} />
                  <label htmlFor="consent" className="text-xs text-white/70">
                    {locale === 'fr'
                      ? 'J’accepte le traitement de mes données (RGPD).'
                      : 'I accept the processing of my data (GDPR).'}
                  </label>
                  {errors.consent && <p className="text-xs text-red-300">{errors.consent.message}</p>}
                </div>
                <div className="hidden">
                  <label htmlFor="honey">Do not fill</label>
                  <input id="honey" {...register('honey')} />
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/70"
              >
                {locale === 'fr' ? 'Retour' : 'Back'}
              </button>
            )}
            {step < steps.length && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-champagne px-6 py-3 text-xs uppercase tracking-[0.3em] text-charcoal"
              >
                {locale === 'fr' ? 'Continuer' : 'Continue'}
              </button>
            )}
            {step === steps.length && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-champagne px-6 py-3 text-xs uppercase tracking-[0.3em] text-charcoal disabled:opacity-50"
              >
                {isSubmitting ? (locale === 'fr' ? 'Envoi…' : 'Sending…') : locale === 'fr' ? 'Envoyer' : 'Send'}
              </button>
            )}
          </div>
        </div>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </form>

      <motion.aside
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel h-fit rounded-3xl p-6"
      >
        <h3 className="text-sm uppercase tracking-[0.3em] text-white/60">
          {locale === 'fr' ? 'Récapitulatif' : 'Summary'}
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li>{locale === 'fr' ? 'Service' : 'Service'}: {values.serviceType === 'transfert' ? (locale === 'fr' ? 'Transfert' : 'Transfer') : locale === 'fr' ? 'Mise à disposition' : 'Hourly hire'}</li>
          <li>{locale === 'fr' ? 'Départ' : 'Departure'}: {values.departure || '—'}</li>
          <li>{locale === 'fr' ? 'Arrivée' : 'Arrival'}: {values.arrival || '—'}</li>
          <li>{locale === 'fr' ? 'Date & heure' : 'Date & time'}: {values.datetime || '—'}</li>
          {values.serviceType === 'mise-a-disposition' && (
            <li>{locale === 'fr' ? 'Durée' : 'Duration'}: {values.duration || '—'}</li>
          )}
          <li>{locale === 'fr' ? 'Passagers' : 'Passengers'}: {values.passengers || '—'}</li>
          <li>{locale === 'fr' ? 'Bagages' : 'Luggage'}: {values.luggage ?? '—'}</li>
          <li>{locale === 'fr' ? 'Véhicule' : 'Vehicle'}: {vehicleLabels[values.vehicle]?.[locale]}</li>
          <li>{locale === 'fr' ? 'Contexte' : 'Context'}: {values.context || '—'}</li>
          <li>{locale === 'fr' ? 'Nom' : 'Name'}: {values.name || '—'}</li>
          <li>Email: {values.email || '—'}</li>
        </ul>
        <p className="mt-6 text-xs text-white/50">{locale === 'fr' ? 'Nous revenons vers vous sous 24h.' : 'We reply within 24h.'}</p>
      </motion.aside>
    </div>
  );
}
