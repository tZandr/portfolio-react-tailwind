import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="flex justify-between border border-white/20 rounded-full bg-white/10 backdrop-blur-md mx-8 laptop:mx-32 desktop:mx-50 py-4 px-8 text-zinc-100 text-sm">
      <Link to="/" className="font-bold font-display">AT</Link>
      <ul className="flex justify-between gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
