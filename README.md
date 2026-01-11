# LUXEDRIVERFRANCE

## Majestic Luxury Van & Bus Chauffeur

Premium multi-page website for a chauffeur-driven van, minibus, and coach service with bilingual (FR/EN) support, SEO-ready metadata, and an innovative quote wizard.

### Requirements

- Node.js 18+
- SMTP credentials for email delivery

### Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `SITE_URL` | Public site URL used for sitemap and metadata. |
| `SMTP_HOST` | SMTP server host. |
| `SMTP_PORT` | SMTP server port. |
| `SMTP_USER` | SMTP username. |
| `SMTP_PASS` | SMTP password. |
| `TO_EMAIL` | Inbox that receives quote requests. |
| `FROM_EMAIL` | Sender used for emails. |

### Quote wizard notes

- Honeypot field: `honey`.
- Lightweight rate limit: 6 requests per minute per IP (in-memory, see `src/lib/rate-limit.ts`).
- If SMTP config is missing, the API returns a user-friendly error.

### Scripts

- `npm run dev` — start local dev server.
- `npm run build` — build the production bundle.
- `npm run start` — start production server.
- `npm run test` — run minimal validation tests.
- `npm run sitemap` — generate sitemap and robots.txt.
