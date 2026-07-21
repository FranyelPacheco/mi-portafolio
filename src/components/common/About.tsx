import { Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Sobre <span className="text-sky-400">Mí</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <Rocket className="w-5 h-5 text-sky-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Quién Soy</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soy Franyel Pacheco, desarrollador Frontend apasionado por
              construir aplicaciones web y móviles escalables. Me enfoco en
              escribir código limpio, bien estructurado y en aprender las
              buenas prácticas de arquitectura de software.
            </p>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Objetivo</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mi meta es consolidarme como Desarrollador Frontend en un equipo
              remoto donde pueda aportar valor real, seguir creciendo
              profesionalmente y trabajar en proyectos que desafíen mis
              capacidades técnicas.
            </p>
          </div>
        </div>

        <div className="text-center">
          <span className="inline-block px-4 py-2 text-sm font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Disponible para oportunidades remotas
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
