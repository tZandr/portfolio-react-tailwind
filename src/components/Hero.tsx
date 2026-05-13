export function Hero() {
  return (
    <section className="pt-24 space-y-6 max-w-2xl">
      <p className="text-sm text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">Fullstack Developer</p>
      <h1 className="text-5xl font-bold tracking-tight">Alexander Tjernström</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        I build clean, focused web experiences for businesses that care about how they show up online.
        Based in Sweden, open to new opportunities.
      </p>
      <a
        href="https://github.com/tZandr"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 border border-black/15 dark:border-white/20 rounded-full px-5 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        GitHub
      </a>
    </section>
  );
}
