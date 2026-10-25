import { ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectConfig } from "../../types/project";
import { getTechIcon } from "../../data/techIcons";

export interface ProjectCardProps {
  project: ProjectConfig;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className={`flex flex-col justify-between bg-[#161618] border border-zinc-800 p-6 sm:p-8 surface-interactive min-w-0 ${
        project.featured ? "md:col-span-2 bg-[#18181C]" : ""
      }`}
    >
      <div className="space-y-4 min-w-0">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider truncate">
            {project.category}
          </span>
          <span
            className={`font-mono text-xs px-2 py-0.5 border shrink-0 tabular-nums ${
              project.featured
                ? "border-[#CCFF00]/40 text-[#CCFF00] bg-[#CCFF00]/5"
                : "border-zinc-800 text-zinc-500 bg-zinc-900"
            }`}
          >
            {project.featured ? `DESTACADO · ${project.id}` : `#${project.id}`}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight break-words">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed break-words">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border shrink-0 ${icon.bg}`}
              >
                <span className={`font-bold ${icon.color}`}>{icon.label}</span>
                <span className="text-zinc-300">{tech}</span>
              </span>
            );
          })}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800 mt-8 justify-end">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 btn-press focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCFF00]"
            >
              <Code2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              Repositorio
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold bg-[#CCFF00] text-[#121212] hover:bg-[#B8E600] btn-press focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CCFF00]"
            >
              Ver Producción
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
