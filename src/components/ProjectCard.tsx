import type { Project } from '../data/projects';
import { MdArrowOutward } from 'react-icons/md';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.placeholder) {
    return (
      <div className="block border border-dashed border-black/10 dark:border-white/10 rounded-2xl p-6">
        <p className="text-sm text-zinc-400 dark:text-zinc-600">In progress</p>
      </div>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col sm:flex-row border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
    >
      <div className="flex flex-col justify-between p-6 sm:w-1/2">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold">{project.name}</h3>
            <span className="text-xs text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
              <MdArrowOutward size={14} />
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-zinc-400">{project.display}</p>
          {project.tags && (
            <div className="flex gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-zinc-500 dark:text-zinc-400 border border-black/10 dark:border-white/10 rounded-full px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="h-48 sm:h-auto sm:w-1/2">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900" />
        )}
      </div>
    </a>
  );
}
