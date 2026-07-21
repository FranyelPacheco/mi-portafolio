import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/common/ProjectCard";

const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.technologies.includes(activeFilter))
    : projects;

  return (
    <section className="min-h-[calc(100vh-64px)] py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos <span className="text-sky-400">Destacados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Una selección de las aplicaciones web y móviles que he diseñado y
            programado, enfocándome en código limpio y buenas prácticas
            arquitectónicas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
              activeFilter === null
                ? "bg-sky-500 text-slate-900 border-sky-500"
                : "bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500"
            }`}
          >
            Todos
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() =>
                setActiveFilter(activeFilter === tech ? null : tech)
              }
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                activeFilter === tech
                  ? "bg-sky-500 text-slate-900 border-sky-500"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
