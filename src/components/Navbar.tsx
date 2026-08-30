import type { Ref } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

type NavbarProps = {
  onToggleTheme: () => void;
  scrolled: boolean;
  ref?: Ref<HTMLElement>;
};

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export function Navbar({ onToggleTheme, scrolled, ref }: NavbarProps) {
  return (
    <nav
      ref={ref}
      style={{
        borderRadius: scrolled ? "100px" : "0",
        maxWidth: scrolled ? "min(1024px, calc(100% - 1.5rem))" : "100%",
        top: scrolled ? "1.25rem" : "0",
      }}
      className={`sticky z-50 mx-auto flex justify-between items-center border backdrop-blur-md text-zinc-900 dark:text-zinc-100 text-xs transition-all duration-1000 ease-in-out tracking-widest ${
        scrolled
          ? "py-3.5 px-3 sm:px-8 shadow-xl border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 shadow-black/10 dark:shadow-black/50"
          : "py-5 px-6 sm:px-8 lg:px-12 border-transparent bg-transparent"
      }`}
    >
      <a
        href="#"
        aria-label="Tjernström — back to top"
        className="font-heading text-sm font-extralight uppercase tracking-[0.3em] leading-none whitespace-nowrap transition-opacity hover:opacity-70"
      >
        Tjernstrom
      </a>

      <div className="flex items-center gap-1 uppercase">
        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link font-light">
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
          className="-mr-1 flex items-center justify-center rounded-md p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-zinc-500"
        >
          <FiSun size={15} className="dark:hidden" />
          <FiMoon size={15} className="hidden dark:inline" />
        </button>
      </div>
    </nav>
  );
}
