import { ScrollReveal } from "../../../shared/components/ScrollReveal";
import { GlassCursorIcon } from "../../../components/common/GlassIcons";

interface ToolItem {
  name: string;
  category: string;
  receipt: string;
  badge: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    name: "React Native & Expo",
    category: "Apps Móviles (Android)",
    receipt: "2 Apps en Google Play",
    badge: "Rendimiento Nativo",
    icon: (
      <svg className="w-10 h-10 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "React & Next.js",
    category: "Plataformas Web Modernas",
    receipt: "Carga Rápida y Fluida",
    badge: "Alta Reactividad",
    icon: (
      <svg className="w-10 h-10 text-[#00D8FE]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Código Seguro y Tipado",
    receipt: "Cero Errores Ocultos",
    badge: "Estabilidad Total",
    icon: (
      <div className="w-10 h-10 rounded-md bg-[#3178C6] flex items-center justify-center font-bold text-white text-base font-sans tracking-tight shadow-md">
        TS
      </div>
    ),
  },
  {
    name: "Tailwind & Animaciones",
    category: "Diseño & Microinteracciones",
    receipt: "Visualmente Refinado",
    badge: "Experiencia Fluida",
    icon: (
      <svg className="w-10 h-10 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
];

export const ToolsVisualSection = () => {
  return (
    <section
      id="herramientas"
      className="relative py-20 sm:py-28 px-4 sm:px-6 flex flex-col items-center overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)]"
    >
      <div className="w-full max-w-6xl z-10">
        {/* ── Encabezado en Español con Puntero 3D ── */}
        <div className="flex items-center gap-4 mb-10 sm:mb-14">
          <GlassCursorIcon className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] block">
              [ STACK TECNOLÓGICO // HERRAMIENTAS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Herramientas de Desarrollo
            </h2>
          </div>
        </div>

        {/* ── 4 Tarjetas de Herramientas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center mb-10 sm:mb-12 w-full">
          {TOOLS.map((tool, i) => {
            const radius = 48;
            const circumference = 2 * Math.PI * radius;

            return (
              <ScrollReveal key={tool.name} className="w-full" delay={i * 0.1}>
              <div
                className="h-full w-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--accent)]/50 transition-all flex flex-col items-center group shadow-lg"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 110 110" aria-hidden="true">
                    <circle
                      cx="55"
                      cy="55"
                      r={radius}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="55"
                      cy="55"
                      r={radius}
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * 0.15}
                      strokeLinecap="round"
                      className="ring-spin drop-shadow-[0_0_12px_rgba(59,130,246,0.65)]"
                      style={{ animationDelay: `${-i * 2}s` }}
                    />
                  </svg>

                  <div className="float-y absolute inset-3 rounded-full bg-[#0E0E12] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200" style={{ animationDelay: `${-i * 0.7}s` }}>
                    {tool.icon}
                  </div>
                </div>

                <div className="mt-4 text-center space-y-1 w-full">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {tool.badge}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-medium">
                    {tool.category}
                  </p>
                  <p className="text-[11px] font-mono text-[#a1a1aa] pt-1">
                    {tool.receipt}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Manifiesto de Herramientas claro y resumido ── */}
        <div className="text-[#d4d4dc] text-sm sm:text-base leading-relaxed sm:leading-[1.75] font-sans font-light max-w-3xl">
          <p>
            Utilizo herramientas estándar de la industria elegidas para entregar software rápido y confiable: <strong className="text-white font-medium">React Native y Expo</strong> para apps móviles de alto rendimiento en Android; <strong className="text-white font-medium">React y TypeScript</strong> para aplicaciones web sólidas y seguras; y <strong className="text-white font-medium">Supabase</strong> para sincronización de datos en tiempo real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsVisualSection;
