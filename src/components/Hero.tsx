export function Hero() {
  return (
    <section
      className="relative pb-16 space-y-6 w-full flex flex-col justify-end"
      style={{ height: 'calc(100dvh - 64px)' }}
    >
      <div className="absolute top-0 right-0 flex flex-col items-center gap-2 mt-12">
        <div className="w-px h-16 overflow-hidden relative bg-zinc-700/30">
          <div
            className="absolute inset-x-0 h-full bg-red-500"
            style={{ animation: 'scroll-line 2.4s ease infinite' }}
          />
        </div>
        <span
          style={{ writingMode: 'vertical-lr' }}
          className="text-[9px] tracking-[0.2em] text-zinc-400 uppercase"
        >
          Scroll
        </span>
      </div>
      <div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase mb-3">
          Fullstack Developer
        </p>
        <h1 className="text-[clamp(2.8rem,10vw,7.5rem)] font-black tracking-sm leading-none">
          <span className="block">ALEXANDER</span>
          <span className="block">TJERNSTRÖM</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
          I build clean, focused web experiences for businesses that care about
          how they show up online.
        </p>
        <div className="flex flex-col items-start sm:justify-end sm:items-end gap-2">
          <p className="flex items-center gap-2 border border-green-500/40 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 text-[10px] sm:text-xs text-green-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
            Looking for work
          </p>
          <p className="flex items-center justify-center border rounded-full py-1.5 sm:py-2 px-3 sm:px-5 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
            Stockholm, Sweden
          </p>
        </div>
      </div>
    </section>
  );
}
