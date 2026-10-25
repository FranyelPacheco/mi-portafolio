import { ScrollReveal } from "../../shared/components/ScrollReveal";

const metrics = [
  { value: "05", label: "Proyectos en producción & código abierto" },
  { value: "02", label: "Plataformas nativas dominadas (Web & Android)" },
  { value: "100%", label: "Disponibilidad remota inmediata" },
];

const principles = [
  {
    id: "01",
    title: "Arquitectura Modular y Desacoplada",
    detail:
      "Separación estricta entre vistas declarativas, hooks de control y adaptadores de datos. Cero pantallas monolíticas y máxima predictibilidad.",
  },
  {
    id: "02",
    title: "Tipado Estricto de Extremo a Extremo",
    detail:
      "Inferencia profunda en TypeScript sin 'any'. Validación en límites del sistema con Zod, previniendo fallos en tiempo de ejecución.",
  },
  {
    id: "03",
    title: "Criterio de Producto y Ejecución Real",
    detail:
      "Experiencia llevando software desde el diseño de interfaz hasta su publicación en tiendas oficiales como Google Play y entornos cloud.",
  },
];

const About = () => {
  return (
    <section id="perfil" className="py-28 px-4 sm:px-6 md:px-12 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ── Columna izquierda ── */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                  [ 01 // CRITERIO Y PERFIL ]
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-[1.05] uppercase">
                  Interfaces rápidas, legibles y de alto calibre.
                </h2>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Soy Franyel Pacheco, ingeniero frontend enfocado en React, React Native y TypeScript. Diseño y construyo software cuidando con igual rigor la solidez de la arquitectura interna y la fluidez táctil en cada interacción.
                </p>
              </div>
            </ScrollReveal>

            {/* Métricas destacadas */}
            <ScrollReveal delay={0.1}>
              <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 pt-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-[var(--border-subtle)] bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-base)] p-4 flex items-center justify-between gap-4"
                  >
                    <dt className="text-xs text-[var(--text-secondary)] leading-snug">
                      {metric.label}
                    </dt>
                    <dd className="font-mono text-2xl font-black text-[var(--accent)] tabular-nums shrink-0 drop-shadow-[0_0_12px_var(--accent-glow)]">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          {/* ── Columna derecha: principios de ingeniería ── */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.05}>
              <div className="rounded-2xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-base)] divide-y divide-[var(--border-subtle)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                {principles.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-3 py-1.5 rounded-md tabular-nums shrink-0">
                      {item.id}
                    </span>
                    <div className="space-y-2 min-w-0">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
