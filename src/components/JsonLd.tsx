import type { ReactNode } from 'react';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdBlock({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
