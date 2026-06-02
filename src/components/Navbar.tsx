
type NavbarProps = {
  onToggleTheme: () => void;
  scrolled: boolean;
};

export function Navbar({ onToggleTheme, scrolled }: NavbarProps) {
  return (
    <nav
      style={{
        borderRadius: scrolled ? '100px' : '0',
        maxWidth: scrolled ? '1024px' : '100%',
        top: scrolled ? '1.25rem' : '0',
      }}
      className={`sticky z-50 mx-auto flex justify-between items-center border backdrop-blur-md text-zinc-900 dark:text-zinc-100 text-xs transition-all duration-1000 ease-in-out tracking-widest ${
        scrolled
          ? 'py-3.5 px-4 sm:px-8 shadow-xl border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 shadow-black/10 dark:shadow-black/50'
          : 'py-5 px-4 sm:px-8 lg:px-12 border-transparent bg-transparent'
      }`}
    >
      <a
        href="#"
        className="flex items-center justify-center w-8 h-8 text-base font-extralight tracking-widest transition-colors"
      >
        AT
      </a>

      <div className="flex items-center gap-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ transition: 'opacity 700ms, background-color 150ms' }}
          className={`nav-link py-0 hidden sm:block ${scrolled ? 'opacity-100 font-light' : 'opacity-0 pointer-events-none'}`}
        >
          BACK TO TOP
        </button>
        <button
          onClick={onToggleTheme}
          className="font-light flex items-center gap-2 border border-black/15 dark:border-white/20 rounded-full px-4 py-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-1000"
        >
          <span className="dark:hidden">Light</span>
          <img
            src="src\assets\modeLight.png"
            alt="Light mode"
            className="dark:hidden w-3 h-3"
          />
          <span className="hidden dark:inline">Dark</span>
          <img
            src="src\assets\modeDark.png"
            alt="Dark mode"
            className="hidden dark:inline w-3 h-3"
          />
        </button>
      </div>
    </nav>
  );
}
