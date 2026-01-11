import { z } from 'zod';

export const QuoteSchema = z.object({
  serviceType: z.enum(['transfert', 'mise-a-disposition']),
  departure: z.string().min(2),
  arrival: z.string().min(2),
  datetime: z.string().optional(),
  duration: z.string().optional(),
  passengers: z.coerce.number().min(1).max(80),
  luggage: z.coerce.number().min(0).max(80),
  vehicle: z.enum(['van', 'van-vip', 'minibus', 'bus']),
  context: z.enum(['entreprise', 'ecole', 'evenement', 'autre']),
  notes: z.string().max(500).optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  consent: z.boolean().refine((value) => value, {
    message: 'Consent required'
  }),
  honey: z.string().max(0).optional()
}).superRefine((data, ctx) => {
  if (data.serviceType === 'transfert' && (!data.datetime || data.datetime.length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Date/heure requise',
      path: ['datetime']
    });
  }

  if (data.serviceType === 'mise-a-disposition' && (!data.duration || data.duration.length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Durée requise',
      path: ['duration']
    });
  }
});

export type QuoteInput = z.infer<typeof QuoteSchema>;
