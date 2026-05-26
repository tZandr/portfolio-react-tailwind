export function Contact() {
  return (
    <section className="py-16 space-y-12 w-full">
      <div className="flex flex-col pb-5 mb-15">
        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase pb-5">
          Get in touch
        </p>
        <span className="text-8xl font-thin tracking-sm uppercase pb-2">
          Say Hi!
        </span>
        <span className="text-8xl font-thin tracking-sm uppercase">
          <a
            href="mailto:alex_tjernstrom@hotmail.com"
            className="hover:underline"
          >
            Let's Talk ↗
          </a>
        </span>
      </div>
      <div className="flex justify-between items-end border-b border-zinc-800 dark:border-zinc-200/10 pb-5">
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest pb-2">
          <button>
            <p>alex_tjernstrom@hotmail.com</p>
            <img src="#" alt="" />
          </button>
          <p>Stockholm, Sweden</p>
        </div>
        <div className="flex gap-5 text-[11px] text-zinc-500 dark:text-zinc-400 tracking-widest pb-2">
          <a className="hover:text-zinc-200 transition-color" href="https://www.linkedin.com/in/alexandertjernstrom/">
            LinkedIn
          </a>
          <a href="https://github.com/tZandr">Github</a>
        </div>
      </div>
      <div className="flex justify-center text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest pb-5">
        <p>@ 2026 Alexander Tjernström</p>
      </div>
    </section>
  );
}
