import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useState, useEffect } from 'react';

export default function MainLayout() {
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
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 500);
  };
  return (
    <div className="font-display min-h-screen text-zinc-900 dark:text-zinc-100">
      <Navbar onToggleTheme={toggleTheme} scrolled={scrolled} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
