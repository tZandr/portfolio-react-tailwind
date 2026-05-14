import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="space-y-24 pb-24 px-12">
      <Hero />
      <section className="space-y-8 max-w-5xl mx-auto px-4">
        <h2 className="text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          Live Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <a
          href="https://github.com/tZandr"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-black/15 dark:border-white/20 rounded-full px-5 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}
