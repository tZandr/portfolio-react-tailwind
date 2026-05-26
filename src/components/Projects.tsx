import { ProjectCard } from './ProjectCard';
import { clientProjects, personalProjects } from '../data/projects';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
    {children}
  </h2>
);

export function Projects() {
  return (
    <section className="py-16">
      <div className="space-y-18 w-full">
        <div className="space-y-6">
          <div className="border-b border-zinc-800 dark:border-zinc-200/10 pb-5 mb-15">
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Selected Projects
            </p>
            <h1 className="text-8xl font-thin tracking-sm">WORK</h1>
          </div>{' '}
          <SectionLabel>E-Commerce Projects</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {clientProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionLabel>Personal Projects</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
  );
}
