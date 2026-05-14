export function Hero() {
  return (
    <section className="pb-16 space-y-6 w-full flex flex-col justify-end" style={{ height: 'calc(100dvh - 64px)' }}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
        Fullstack Developer
      </p>
      <h1 className="text-8xl font-black tracking-tight">
        ALEXANDER <br /> TJERNSTRÖM
      </h1>
      <div className="flex flex-row justify-between">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed w-sm">
          I build clean, focused web experiences for businesses that care about
          how they show up online. Based in Sweden, open to new opportunities.
        </p>
        <div className="flex flex-col justify-end items-end gap-2">
          <p className="flex items-center gap-2 border border-green-500/40 rounded-full py-2 px-4 text-xs text-green-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
            Looking for work
          </p>
          <p className="flex items-center justify-center border rounded-full py-2 px-5 text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
            Stockholm, Sweden
          </p>
        </div>
      </div>

    </section>
  );
}
