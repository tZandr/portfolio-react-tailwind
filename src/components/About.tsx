const stack = [
  'React',
  'TypeScript',
  'Node.js & Express',
  'Tailwind CSS',
  'WordPress & Shopify',
  'MySQL & MongoDB',
  'Docker',
  'Next.js',
  'Git',
  'Figma',
  'UI/UX',
  'Adobe Creative Suite',
  'SEO',
];

export function About() {
  return (
    <section className="py-16 space-y-12 w-full">
      <div className="border-b border-zinc-800 dark:border-zinc-200/10 pb-5 mb-15">
        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
          Who am i?
        </p>
        <h1 className="text-8xl font-thin tracking-sm uppercase">About</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6">
          {' '}
          <p>
            I'm a fullstack developer based in Stockholm with a strong
            preference for frontend work. I care about the details — typography,
            spacing, interactions — and I believe good software should feel as
            good as it works.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I've built and shipped production sites for real clients, and I'm
            currently looking for a role where I can keep doing that at a higher
            level.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            praesentium veritatis, ut maxime sapiente assumenda cum laboriosam
            blanditiis impedit quae, minima dolore nam, officia est neque. Fugit
            veritatis hic alias.
          </p>
        </div>
        <div className="space-y-8 ml-20">
          <div className="space-y-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="text-xs border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 text-zinc-700 dark:text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Education
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  IT-Högskolan — JavaScript Developer
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  2025 – 2027 · Ongoing
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Högskolan Väst — Webmaster
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  2023 – 2025
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Frontend, backend, databases, UX and web servers. Thesis on
                  AI-related security and career impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="/CV.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center border border-black/15 dark:border-white/20 rounded-full px-5 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-fit dark:text-zinc-400 text-[10px] uppercase tracking-widest"
      >
        View CV ↗
      </a>
    </section>
  );
}
