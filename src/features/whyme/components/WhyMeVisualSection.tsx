import { GlassUserIcon } from "../../../components/common/GlassIcons";
import { ScrollReveal } from "../../../shared/components/ScrollReveal";

interface Pillar {
  title: string;
  lead: string;
  body?: string;
  points?: string[];
}

const PILLARS: Pillar[] = [
  {
    title: "Apps Reales en Google Play",
    lead: "Software probado con usuarios reales",
    body: "Del diseño y la lógica a la publicación en Google Play Store, con salas multijugador en tiempo real y alta estabilidad.",
  },
  {
    title: "Lanzamiento Rápido y Código Limpio",
    lead: "Menos errores, salidas al mercado más rápidas",
    body: "Estructura modular con TypeScript estricto que previene fallos y permite añadir funciones con rapidez y seguridad.",
  },
  {
    title: "Carga Rápida y Navegación Fluida",
    lead: "Experiencias ágiles a 60 FPS",
    body: "Pantallas que abren al instante y responden con suavidad en cualquier teléfono u ordenador.",
  },
  {
    title: "Web & Móvil Integrados",
    lead: "Un solo desarrollador para tus dos plataformas",
    points: ["Apps móviles (React Native & Expo)", "Sitios y paneles web (React & Next.js)", "Lógica compartida en TypeScript", "Bases de datos y APIs en la nube"],
  },
  {
    title: "Código Preparado para Crecer",
    lead: "Soluciones claras sin complicaciones",
    points: ["Arquitectura fácil de mantener", "Bajo consumo de datos y batería", "Escala con tus usuarios", "Listo para trabajar en equipo"],
  },
  {
    title: "Comunicación Clara y Puntualidad",
    lead: "Alineado con los objetivos de tu negocio",
    body: "Tiempos de entrega realistas, avances continuos y contacto directo por correo o videollamada.",
  },
];

export const WhyMeVisualSection = () => {
  return (
    <section
      id="por-que-yo"
      className="relative py-20 sm:py-28 px-4 sm:px-6 flex flex-col items-center overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)]"
    >
      <div className="w-full max-w-6xl z-10">
        <header className="flex items-center gap-4 mb-10 sm:mb-14">
          <GlassUserIcon className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />
          <hgroup>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] block">
              [ VENTAJAS Y VALOR // RESULTADOS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              ¿Por qué elegirme?
            </h2>
          </hgroup>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none m-0 p-0" aria-label="Ventajas y pilares profesionales">
          {PILLARS.map((p, i) => (
            <li key={p.title} className="flex">
              <ScrollReveal className="w-full" delay={(i % 3) * 0.08}>
                <article className="surface-interactive h-full p-6 rounded-2xl border border-[var(--border-subtle)] bg-white/[0.02] hover:bg-white/[0.04] space-y-2">
                  <span className="font-mono text-xs text-[var(--accent)] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="text-sm font-semibold text-[var(--text-secondary)]">{p.lead}</p>
                  {p.body && <p className="text-sm text-[#a1a1aa] leading-relaxed">{p.body}</p>}
                  {p.points && (
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#a1a1aa] font-mono list-none p-0 m-0 pt-1">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2"><span className="text-[var(--accent)]" aria-hidden="true">›</span>{pt}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhyMeVisualSection;
