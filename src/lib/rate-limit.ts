const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 6;

const requests = new Map<string, { count: number; start: number }>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    requests.set(ip, { count: 1, start: now });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: RATE_LIMIT_WINDOW_MS - (now - entry.start) };
  }

  entry.count += 1;
  requests.set(ip, entry);
  return { allowed: true };
}

export const rateLimitConfig = {
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX
};
