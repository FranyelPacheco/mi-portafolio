import type { SkillCategory } from "../../../types/skill";
import { getTechIcon } from "../../../data/techIcons";
import { ScrollReveal } from "../../../shared/components/ScrollReveal";
import { Cpu, Smartphone, Database, Terminal } from "lucide-react";

interface CategoryWithMeta extends SkillCategory {
  code: string;
  summary: string;
  icon: typeof Cpu;
}

const skillCategories: CategoryWithMeta[] = [
  {
    code: "01 // CORE",
    title: "Ingeniería Frontend Web",
    summary: "Arquitectura reactiva escalable, componentes desacoplados con tipado estricto y renderizado fluido a 60fps.",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML", "CSS"],
    icon: Cpu,
  },
  {
    code: "02 // MOBILE",
    title: "Desarrollo Nativo Móvil",
    summary: "Aplicaciones móviles para Android. Publicación en tiendas oficiales.",
    skills: ["React Native", "Expo"],
    icon: Smartphone,
  },
  {
    code: "03 // DATA",
    title: "Servicios & Persistencia",
    summary: "Diseño de esquemas relacionales, integración de APIs RESTful y servicios de backend eficientes.",
    skills: ["Node.js", "MySQL", "MongoDB", "PHP"],
    icon: Database,
  },
  {
    code: "04 // DEVOPS",
    title: "Flujo & Despliegue",
    summary: "Flujos de integración continua, control de versiones colaborativo y despliegues optimizados en la nube.",
    skills: ["Git", "GitHub"],
    icon: Terminal,
  },
];

const StackSection = () => {
  return (
    <section className="py-28 px-4 sm:px-6 md:px-12 border-t border-white/[0.08] bg-[#080808]">
      <div className="max-w-6xl mx-auto space-y-14">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">
                [ 02 // CAPACIDADES DE INGENIERÍA ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-100 tracking-tight uppercase">
                Stack &amp; Metodología
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm font-mono leading-relaxed">
              Herramientas y fundamentos técnicos aplicados en entornos de producción y software publicado.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de 4 categorías con diseño de hardware y acabados de cristal ahumado */}
        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121214] to-[#0c0c0e] p-7 sm:p-9 flex flex-col justify-between gap-8 hover:border-white/20 transition-all duration-300 group shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#CCFF00] tracking-widest uppercase">
                        {category.code}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/40 transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {category.summary}
                    </p>
                  </div>

                  {/* Pills de tecnología estilizadas */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                    {category.skills.map((skill) => {
                      const icon = getTechIcon(skill);
                      return (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#CCFF00]/30 transition-all duration-200"
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${icon.color} bg-white/5 border border-white/10`}>
                            {icon.label}
                          </span>
                          <span className="text-zinc-200 font-medium">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StackSection;
