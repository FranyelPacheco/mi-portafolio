import { useState } from "react";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";
import { ScrollReveal } from "../../shared/components/ScrollReveal";

const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const screens = project.screenshots || [];

  return (
    <article className="group border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col surface-interactive overflow-hidden transition-all duration-300 rounded-xl hover:border-[var(--border-strong)]">
      {/* Vista previa con foto real si tiene capturas */}
      {screens.length > 0 ? (
        <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#07080d] border-b border-[var(--border-subtle)] group/img flex items-center justify-center p-2">
          <img loading="lazy" decoding="async"
            src={screens[activeScreenIndex]}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {screens.length > 1 && (
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
                }}
                className="p-1 rounded-full bg-black/70 text-white hover:bg-[var(--accent)] transition-colors cursor-pointer"
                aria-label="Captura previa"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-sm">
                {activeScreenIndex + 1}/{screens.length}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
                }}
                className="p-1 rounded-full bg-black/70 text-white hover:bg-[var(--accent)] transition-colors cursor-pointer"
                aria-label="Siguiente captura"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      ) : null}

      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            {project.icon && (
              <img loading="lazy" decoding="async"
                src={project.icon}
                alt={`Icono de ${project.title}`}
                className="w-6 h-6 rounded-md object-cover border border-white/10"
              />
            )}
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] block truncate">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono border border-[var(--border-subtle)] bg-white/[0.02] text-[var(--text-muted)] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div className="border-t border-[var(--border-subtle)] px-6 py-3.5 flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors duration-150 uppercase tracking-wider min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)]" strokeWidth={1.5} />
              {project.liveUrl.includes("play.google.com") ? "Google Play" : "Ver Demo"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-colors duration-150 uppercase tracking-wider min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" strokeWidth={1.5} />
              Código
            </a>
          )}
        </div>
      )}

      <div className="h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_8px_var(--accent-glow)]" />
    </article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.technologies.includes(activeFilter))
    : projects;

  return (
    <section className="min-h-[calc(100dvh-130px)] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 bg-[var(--bg-base)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8 animate-fade-in-up">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              [ ARCHIVO // {filteredProjects.length} DE {projects.length} PROYECTOS ]
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight uppercase">
              Proyectos{" "}
              <span className="text-[var(--accent)] drop-shadow-[0_0_20px_var(--accent-glow)]">Publicados</span>
            </h1>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md text-sm leading-relaxed">
            Aplicaciones móviles publicadas en Google Play con capturas reales de producción, plataformas comerciales y utilidades web desarrolladas desde cero.
          </p>
        </div>

        {/* Filtros */}
        <div
          role="group"
          aria-label="Filtrar proyectos por tecnología"
          className="flex flex-wrap gap-2 animate-fade-in-up stagger-1"
        >
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg btn-press cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
              activeFilter === null
                ? "bg-[var(--accent)] text-white border-[var(--accent)] font-semibold shadow-[0_0_15px_var(--accent-glow)]"
                : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-white"
            }`}
          >
            Todos ({projects.length})
          </button>
          {allTechnologies.map((tech) => {
            const isSelected = activeFilter === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setActiveFilter(isSelected ? null : tech)}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg btn-press cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                  isSelected
                    ? "bg-[var(--accent)] text-white border-[var(--accent)] font-semibold shadow-[0_0_15px_var(--accent-glow)]"
                    : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-white"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-12 text-center space-y-4 rounded-xl">
            <p className="text-[var(--text-secondary)] font-medium">
              No hay proyectos con la tecnología «{activeFilter}».
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider bg-[var(--accent)] text-white font-semibold rounded-lg btn-press cursor-pointer min-h-[44px] shadow-[0_0_15px_var(--accent-glow)]"
            >
              Mostrar todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
