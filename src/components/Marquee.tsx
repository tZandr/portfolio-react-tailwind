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

const Row = () => (
  <div className="flex items-center gap-6 sm:gap-12 mr-6 sm:mr-12 uppercase font-light text-xs sm:text-sm text-zinc-400 tracking-[0.1em]">
    {items.map((item) => (
      <>
        <span key={item}>{item}</span>
        <span className="text-zinc-600">•</span>
      </>
    ))}
  </div>
);

export function Marquee() {
  return (
    <div className="w-full border-t border-b border-zinc-800 dark:border-zinc-200/10 py-4 overflow-hidden">
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
