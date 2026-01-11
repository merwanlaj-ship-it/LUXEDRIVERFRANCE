import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne';

export function Button({
  href,
  children,
  variant = 'primary',
  className
}: {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const styles =
    variant === 'primary'
      ? 'bg-champagne text-charcoal hover:bg-gold'
      : 'border border-champagne/60 text-champagne hover:bg-white/10';

  if (href) {
    return (
      <Link href={href} className={clsx(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={clsx(base, styles, className)}>
      {children}
    </button>
  );
}
