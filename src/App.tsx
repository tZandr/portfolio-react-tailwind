import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Marquee } from './components/Marquee';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark',
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transitioning');
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    setTimeout(
      () => document.documentElement.classList.remove('theme-transitioning'),
      500,
    );
  };

  return (
    <div className="font-display min-h-screen text-zinc-900 dark:text-zinc-100">
      <Navbar onToggleTheme={toggleTheme} scrolled={scrolled} />
      <div className="px-12">
        <Hero />
      </div>
      <Marquee />
      <div className="pb-24 px-12">
        <Projects />
        <About />
      </div>
    </div>
  );
}
