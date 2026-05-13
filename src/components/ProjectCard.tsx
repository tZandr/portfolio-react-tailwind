import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group block border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <span className="text-xs text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">↗</span>
      </div>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.description}</p>
      <p className="mt-4 text-xs text-zinc-400">{project.display}</p>
    </a>
  );
}
