import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QuoteSchema } from '@/lib/quote-schema';
import { POST } from '@/app/api/quote/route';

vi.mock('nodemailer', () => ({
  default: {
    createTransport: () => ({
      sendMail: vi.fn().mockResolvedValue(true)
    })
  }
}));

describe('QuoteSchema', () => {
  it('validates a minimal quote payload', () => {
    const result = QuoteSchema.safeParse({
      serviceType: 'transfert',
      departure: 'Aéroport Nice',
      arrival: 'Monaco',
      datetime: '2024-05-01T10:30',
      passengers: 2,
      luggage: 2,
      vehicle: 'van',
      context: 'entreprise',
      name: 'Test',
      email: 'test@example.com',
      phone: '07 80 93 47 54',
      consent: true,
      honey: ''
    });

    expect(result.success).toBe(true);
  });
});

describe('POST /api/quote', () => {
  beforeEach(() => {
    process.env.SMTP_HOST = 'smtp.test';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'user';
    process.env.SMTP_PASS = 'pass';
    process.env.TO_EMAIL = 'to@test.com';
    process.env.FROM_EMAIL = 'from@test.com';
  });

  it('returns ok on valid payload', async () => {
    const request = new Request('http://localhost/api/quote', {
      method: 'POST',
      body: JSON.stringify({
        serviceType: 'transfert',
        departure: 'Aéroport Nice',
        arrival: 'Monaco',
        datetime: '2024-05-01T10:30',
        passengers: 2,
        luggage: 2,
        vehicle: 'van',
        context: 'entreprise',
        name: 'Test',
        email: 'test@example.com',
        phone: '07 80 93 47 54',
        consent: true,
        honey: ''
      })
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
  });
});
