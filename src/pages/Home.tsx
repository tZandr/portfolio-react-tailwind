import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <section className="space-y-8">
        <h2 className="text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">Live Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
