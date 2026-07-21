import type { ProjectConfig } from "../../types/project";
import { getTechIcon } from "../../data/techIcons";

interface ProjectCardProps {
  project: ProjectConfig;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex flex-col bg-slate-800/50 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 hover:-translate-y-1 flex-1 justify-between group">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border ${icon.bg}`}
              >
                <span className={`font-bold ${icon.color}`}>{icon.label}</span>
                <span className="text-slate-400">{tech}</span>
              </span>
            );
          })}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-4 pt-6 border-t border-slate-800 mt-6 justify-end">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Ver Código →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors"
            >
              Ver Demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
