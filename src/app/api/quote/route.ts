import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { QuoteSchema } from '@/lib/quote-schema';
import { rateLimit, rateLimitConfig } from '@/lib/rate-limit';
import { SITE } from '@/lib/site';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const rate = rateLimit(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        message: 'Too many requests',
        retryAfterMs: rate.retryAfter,
        hint: `Rate limit: ${rateLimitConfig.max} requests per ${rateLimitConfig.windowMs / 1000}s.`
      },
      { status: 429 }
    );
  }

  const json = await request.json();
  const parsed = QuoteSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid payload', errors: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.honey) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL || !FROM_EMAIL) {
    return NextResponse.json(
      {
        message: 'SMTP configuration missing. Please try again later.'
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  const data = parsed.data;

  const html = `
    <h2>Nouvelle demande de devis</h2>
    <p><strong>Service:</strong> ${data.serviceType}</p>
    <p><strong>Départ:</strong> ${data.departure}</p>
    <p><strong>Arrivée:</strong> ${data.arrival}</p>
    <p><strong>Date/Heure:</strong> ${data.datetime}</p>
    <p><strong>Durée:</strong> ${data.duration || 'N/A'}</p>
    <p><strong>Passagers:</strong> ${data.passengers}</p>
    <p><strong>Bagages:</strong> ${data.luggage}</p>
    <p><strong>Véhicule:</strong> ${data.vehicle}</p>
    <p><strong>Contexte:</strong> ${data.context}</p>
    <p><strong>Notes:</strong> ${data.notes || '—'}</p>
    <hr />
    <p><strong>Nom:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
  `;

  await transporter.sendMail({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Nouveau devis - ${data.name}`,
    html
  });

  await transporter.sendMail({
    from: FROM_EMAIL,
    to: data.email,
    subject: 'Nous avons bien reçu votre demande',
    html: `<p>Bonjour ${data.name},</p><p>Merci pour votre demande de devis. ${SITE.responseTime}.</p>`
  });

  return NextResponse.json({ ok: true });
}
