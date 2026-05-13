import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useState, useEffect } from 'react';

export default function MainLayout() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return (
    <div className="font-display min-h-screen text-zinc-900 dark:text-zinc-100 pt-10">
      <Navbar onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
