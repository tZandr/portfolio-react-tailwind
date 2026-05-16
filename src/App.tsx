import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';
import { clientProjects, personalProjects } from './data/projects';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
    {children}
  </h2>
);

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
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 500);
  };

  return (
    <div className="font-display min-h-screen text-zinc-900 dark:text-zinc-100">
      <Navbar onToggleTheme={toggleTheme} scrolled={scrolled} />
      <div className="pb-24 px-12">
        <Hero />

        <section className="min-h-dvh flex flex-col justify-center">
          <div className="space-y-16 w-full">
            <div className="space-y-6">
              <SectionLabel>Client Work</SectionLabel>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {clientProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <SectionLabel>Personal Projects</SectionLabel>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {personalProjects.map((project, i) => (
                  <ProjectCard key={i} project={project} />
                ))}
              </div>
            </div>

            <a
              href="https://github.com/tZandr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              See more on GitHub ↗
            </a>
          </div>
        </section>

        <About />
      </div>
    </div>
  );
}
