const stack = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Git', 'Figma',
];

export function About() {
  return (
    <section className="min-h-dvh flex flex-col justify-center space-y-12 w-full">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">About</p>

      <div className="space-y-4">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I'm a fullstack developer based in Stockholm with a strong preference for frontend work.
          I care about the details — typography, spacing, interactions — and I believe good software
          should feel as good as it works.
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I've built and shipped production sites for real clients, and I'm currently looking for
          a role where I can keep doing that at a higher level.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">Stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="text-sm border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 border border-black/15 dark:border-white/20 rounded-full px-5 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-fit"
      >
        Download CV ↓
      </a>
    </section>
  );
}
