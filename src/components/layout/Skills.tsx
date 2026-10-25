import type { SkillCategory } from "../../types/skill";
import { getTechIcon } from "../../data/techIcons";

const skillCategories: (SkillCategory & { code: string; summary: string })[] = [
  {
    code: "01 // WEB",
    title: "Desarrollo Frontend",
    summary: "Interfaces reactivas, componentes tipados y estilos modulares.",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML", "CSS"],
  },
  {
    code: "02 // MÓVIL",
    title: "Aplicaciones Nativas",
    summary: "Desarrollo móvil para Android con estado en tiempo real.",
    skills: ["React Native", "Expo"],
  },
  {
    code: "03 // DATOS & API",
    title: "Backend & Persistencia",
    summary: "Diseño de esquemas relacionales, consultas SQL y servicios de servidor.",
    skills: ["Node.js", "MySQL", "MongoDB", "PHP"],
  },
  {
    code: "04 // OPERACIONES",
    title: "Control & Despliegue",
    summary: "Versionado colaborativo, integración continua y publicación en la nube.",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-zinc-800 bg-[#121212]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              [ 02 // STACK TÉCNICO ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Tecnologías y Herramientas
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono">
            Herramientas empleadas en proyectos reales publicados y repositorios activos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#161618] p-6 sm:p-8 flex flex-col justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                  {category.code}
                </span>
                <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {category.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                {category.skills.map((skill) => {
                  const icon = getTechIcon(skill);
                  return (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono border ${icon.bg}`}
                    >
                      <span className={`font-bold ${icon.color}`}>{icon.label}</span>
                      <span className="text-zinc-200">{skill}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
