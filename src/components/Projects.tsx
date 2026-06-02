import { ProjectCard } from './ProjectCard';
import { clientProjects, personalProjects } from '../data/projects';
import { MdArrowOutward } from 'react-icons/md';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[10px] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
    {children}
  </h2>
);

export function Projects() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-18 w-full">
        <div className="space-y-6">
          <div className="border-b border-zinc-800 dark:border-zinc-200/10 pb-5 mb-15">
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
              Selected Projects
            </p>
            <h1 className="text-6xl sm:text-8xl font-black tracking-sm">WORK</h1>
          </div>{' '}
          <SectionLabel>E-Commerce Projects</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            {clientProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionLabel>Selected Projects</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            {personalProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        <a
          href="https://github.com/tZandr"
          target="_blank"
          rel="noreferrer"
          className="-mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          See more on GitHub <MdArrowOutward size={14} />
        </a>
      </div>
    </section>
  );
}
