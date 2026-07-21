import type { SkillCategory } from "../../types/skill";
import { Code, Smartphone, Database, Wrench } from "lucide-react";

// Categorías organizadas de tu perfil técnico
const skillCategories: (SkillCategory & { icon: React.ReactNode })[] = [
  {
    title: "Desarrollo Frontend",
    icon: <Code className="w-5 h-5 text-sky-400" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5/CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Desarrollo Móvil",
    icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    skills: ["React Native", "Expo", "Cross-Platform UI"],
  },
  {
    title: "Backend & Bases de Datos",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: ["MySQL", "MongoDB", "Node.js", "REST APIs"],
  },
  {
    title: "Herramientas & Entorno",
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    skills: ["Git", "GitHub", "VS Code", "npm/pnpm"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Título de la sección */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tech <span className="text-sky-400">Stack</span> & Competencias
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Las tecnologías y herramientas que utilizo a diario para construir software escalable y de alto rendimiento.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition-colors"
            >
              {/* Encabezado de la Tarjeta */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {category.title}
                </h4>
              </div>

              {/* Lista de Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;