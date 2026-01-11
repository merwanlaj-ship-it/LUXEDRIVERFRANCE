'use client';

import clsx from 'clsx';

export function Toast({
  message,
  type = 'success'
}: {
  message: string;
  type?: 'success' | 'error';
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'rounded-2xl px-4 py-3 text-sm',
        type === 'success' ? 'bg-emerald-500/20 text-emerald-200' : 'bg-red-500/20 text-red-200'
      )}
    >
      {message}
    </div>
  );
}
