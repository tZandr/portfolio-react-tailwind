import { ProjectCard } from "./ProjectCard";
import { clientProjects, personalProjects } from "../data/projects";
import { MdArrowOutward } from "react-icons/md";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">
    {children}
  </h3>
);

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-14">
      <div className="flex flex-col gap-18 w-full">
        <div className="space-y-6">
          <div className="border-b border-zinc-300 dark:border-zinc-200/10 pb-5 mb-8 sm:mb-12">
            <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 tracking-[0.2em] uppercase">
              Selected Projects
            </p>
            <h2 className="font-heading text-[clamp(2rem,5.5vw,3.5rem)] font-light tracking-[0.15em] uppercase">
              Work<span className="text-red-500">.</span>
            </h2>
          </div>
          <SectionLabel>Client Work</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
            {clientProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionLabel>Personal Projects</SectionLabel>
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
          className="-mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
        >
          See more on GitHub <MdArrowOutward size={14} />
        </a>
      </div>
    </section>
  );
}
