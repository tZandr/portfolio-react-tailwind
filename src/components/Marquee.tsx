const items = [
  'Clean, Scalable Frontends',
  'React & TypeScript',
  'Design × Development',
  'E-commerce Solutions',
  'Fast, Discoverable Websites',
  'Easy Client Handoffs',
  'AI-Assisted Workflows',
  'End-to-End Web Projects',
  'Shopify & WordPress',
  'Pixel-Perfect UI',
  'Swedish & English',
  'Good Vibes',
];

import { Fragment } from 'react';

const Row = () => (
  <div className="flex items-center gap-6 sm:gap-12 mr-6 sm:mr-12 uppercase font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 tracking-[0.12em]">
    {items.map((item) => (
      <Fragment key={item}>
        <span>{item}</span>
        <span className="text-zinc-400 dark:text-zinc-600">•</span>
      </Fragment>
    ))}
  </div>
);

export function Marquee() {
  return (
    <div className="w-full shrink-0 border-t border-b border-zinc-300 dark:border-zinc-200/10 py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
