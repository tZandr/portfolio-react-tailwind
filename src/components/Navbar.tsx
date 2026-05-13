import { Link } from 'react-router-dom';

type NavbarProps = {
  onToggleTheme: () => void;
};

export function Navbar({ onToggleTheme }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center border border-black/10 dark:border-white/20 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md mx-7 laptop:mx-24 desktop:mx-auto desktop:max-w-5xl py-4 px-8 text-zinc-900 dark:text-zinc-100 text-sm shadow-xl shadow-black/10 dark:shadow-black/50">
      <Link
        to="/"
        className="flex items-center justify-center w-8 h-8 text-base font-bold tracking-widest transition-colors"
      >
        AT
      </Link>
      <ul className="flex justify-between gap-10">
        <li>
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>
      </ul>
      <button onClick={onToggleTheme} className="text-base">
        <img
          src="src\assets\modeLight.png"
          alt="Light mode"
          className="dark:hidden w-5 h-5"
        />
        <img
          src="src\assets\modeDark.png"
          alt="Dark mode"
          className="hidden dark:inline w-5 h-5 mb-0.5"
        />
      </button>
    </nav>
  );
}
