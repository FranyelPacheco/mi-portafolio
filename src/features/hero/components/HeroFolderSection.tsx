import { useState, useRef } from "react";
import { CountUp } from "../../../shared/components/CountUp";
import { BlueMedalBadge } from "../../../components/common/GlassIcons";
import avatarImg from "../../../assets/avatar-original.jpg";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Smartphone, Mail } from "lucide-react";

export const HeroFolderSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const folderRef = useRef<HTMLDivElement>(null);

  // Microinteracción 3D suave al mover el mouse sobre la carpeta
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!folderRef.current) return;
    const rect = folderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-visible"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
      {/* ── Encabezado Editorial en Español ── */}
      <div className="text-left z-10">
        <p className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--text-secondary)] font-mono text-xs tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Franyel Pacheco · +3 años de experiencia
        </p>
        <p className="animate-fade-in-up stagger-1 text-[#a1a1aa] font-sans text-lg sm:text-xl font-light tracking-wide mt-6">
          Desarrollador Frontend &amp; Mobile
        </p>
        <h2 className="animate-fade-in-up stagger-2 text-[#e4e4e7] font-medium text-xl sm:text-3xl tracking-tight mt-0.5">
          Apps en Google Play &amp; Plataformas Web
        </h2>

        {/* Gran Título Monumental con la Medalla Azul/Titanio sobre "io" */}
        <div className="animate-fade-in-up stagger-3 relative inline-block mt-2">
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter metallic-text leading-[0.92] select-none">
            Portafoli
            <span className="relative inline-block">
              o
              <BlueMedalBadge className="absolute -top-[0.1em] -right-[0.42em] w-[0.6em] h-[0.72em] pointer-events-none" />
            </span>
          </h1>
        </div>

        <p className="animate-fade-in-up stagger-4 text-sm sm:text-base text-[#a1a1aa] max-w-xl mt-5 leading-relaxed font-sans font-light">
          Construyo productos digitales que combinan velocidad de lanzamiento (time-to-market), fluidez a 60 FPS y arquitectura escalable con React Native, Expo, React y TypeScript.
        </p>

        <div className="animate-fade-in-up stagger-4 flex flex-wrap items-center gap-3 mt-7" style={{ animationDelay: "400ms" }}>
          <a
            href="#proyectos"
            className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm shadow-[0_10px_30px_var(--accent-glow)] transition-colors"
          >
            Ver proyectos <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#contacto"
            className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" /> Hablemos
          </a>
        </div>

        <dl className="animate-fade-in-up stagger-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mt-10 pt-6 border-t border-white/10" style={{ animationDelay: "500ms" }}>
          {[
            [<CountUp to={2} />, "Apps en Google Play"],
            [<CountUp to={3} suffix="+" />, "Años de experiencia"],
            [<CountUp to={7} />, "Proyectos"],
            [<CountUp to={24} prefix="<" suffix="h" />, "Respuesta"],
          ].map(([value, label]) => (
            <div key={label as string}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl sm:text-3xl font-black tracking-tight text-white tabular-nums">{value}</dd>
              <p className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">{label}</p>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Carpeta 3D Frosted Glass con Hojas Completas (Sin Recortes) ── */}
      <div
        className="animate-fade-in-up stagger-3 w-full pt-12 pb-4 flex justify-center items-center z-10 overflow-visible"
        style={{ perspective: 1000 }}
      >
        <div
          ref={folderRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          role="region"
          aria-label="Carpeta interactiva de proyectos y credenciales de Franyel Pacheco"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 250ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
          className="relative w-full max-w-[500px] sm:max-w-[560px] h-[320px] sm:h-[360px] cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded-2xl"
        >
          {/* Pestaña superior izquierda */}
          <div className="absolute -top-7 left-0 w-44 sm:w-52 h-8 bg-white/[0.04] backdrop-blur-xl border-t border-l border-r border-white/15 rounded-t-xl z-0 flex items-center px-4">
            <span className="text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase">
              EXPEDIENTE // 2026
            </span>
          </div>

          {/* Cuerpo posterior de la carpeta */}
          <div className="absolute inset-0 bg-[#0c0c10]/95 backdrop-blur-md border border-white/10 rounded-2xl rounded-tl-none shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-0" />

          {/* ── Documentos / Hojas emergentes ── */}
          {/* Hoja 1 (Atrás - Métricas y Rendimiento) */}
          <div
            className="absolute -top-12 left-4 right-12 h-[230px] sm:h-[260px] bg-[#14141a] border border-white/10 rounded-xl p-4 sm:p-5 shadow-xl transform -rotate-3 transition-transform duration-300 group-hover:-translate-y-6 group-hover:-rotate-5 group-focus-within:-translate-y-6 group-focus-within:-rotate-5 z-10 pointer-events-none"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
              <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                Arquitectura &amp; Rendimiento
              </span>
              <span className="text-[10px] font-mono text-[var(--accent)] font-bold">60 FPS · &lt;30ms</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-[#94a3b8]">
              <p className="text-white font-semibold">Stack: React Native + React + TS</p>
              <p>• Carga instantánea y fluidez a 60 FPS</p>
              <p>• Sincronización en tiempo real sin retrasos</p>
              <p>• Código limpio, modular y fácil de mantener</p>
            </div>
          </div>

          {/* Hoja 2 (Centro - 2 Apps en Google Play) */}
          <div
            className="absolute -top-8 left-8 right-8 h-[230px] sm:h-[260px] bg-[#181822] border border-white/15 rounded-xl p-4 sm:p-5 shadow-2xl transform rotate-2 transition-transform duration-300 group-hover:-translate-y-9 group-hover:rotate-4 group-focus-within:-translate-y-9 group-focus-within:rotate-4 z-20 pointer-events-none"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-2.5">
              <span className="text-[11px] font-mono font-bold text-white tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                2 Apps en Google Play Store
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
                EN PRODUCCIÓN
              </span>
            </div>
            <p className="text-xs text-[#cbd5e1] line-clamp-2 leading-relaxed">
              Impostor Royale y Pa que sufras: software móvil completo en tiendas oficiales, probado con usuarios y validado comercialmente.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#94a3b8]">
              <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5">React Native</span>
              <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5">Expo</span>
              <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5">TypeScript</span>
            </div>
          </div>

          {/* Hoja 3 (Delantera - Foto anterior de Franyel con glasses y avatar original) */}
          <div
            className="absolute -top-3 left-10 right-4 h-[230px] sm:h-[260px] bg-[#1e1e28] border border-white/20 rounded-xl p-4 sm:p-5 shadow-2xl transform -rotate-1 transition-transform duration-300 group-hover:-translate-y-4 group-hover:-rotate-2 group-focus-within:-translate-y-4 group-focus-within:-rotate-2 z-30"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
                <img loading="lazy" decoding="async"
                  src={avatarImg}
                  alt="Avatar de Franyel Pacheco en inicio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white tracking-tight truncate">Franyel Pacheco</h4>
                <p className="text-[11px] text-[var(--accent)] font-mono truncate">Frontend &amp; Mobile Developer</p>
              </div>
            </div>

            {/* Fila de estado y especialidad garantizada */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#cbd5e1]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Disponible
              </span>
              <span className="flex items-center gap-1 text-[#94a3b8] pr-12 sm:pr-16">
                <Smartphone className="w-3.5 h-3.5 text-[var(--accent)]" />
                Mobile &amp; Web
              </span>
            </div>
          </div>

          {/* ── Solapa delantera de Vidrio Esmerilado (Glass Pocket) ── */}
          <div className="absolute top-28 inset-x-0 bottom-0 bg-white/[0.05] backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-40 flex flex-col justify-between p-6 overflow-visible">
            {/* Bisel superior de luz */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Monograma central tipo sello */}
            <div className="my-auto flex flex-col items-center justify-center pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tighter metallic-text">
                  FP
                </span>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                </div>
              </div>
              <p className="text-[11px] font-sans font-semibold text-[#a1a1aa] tracking-[0.3em] uppercase mt-1">
                INGENIERÍA &amp; PRODUCTO
              </p>
            </div>

            {/* ── Insignia con Acento Azul ── */}
            <div className="absolute -top-3.5 right-2 sm:right-3 transform rotate-[6deg] z-50 pointer-events-none">
              <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-3 py-1 rounded-md shadow-[0_8px_20px_rgba(59,130,246,0.55)] border border-blue-400/50 flex flex-col items-center">
                <span className="text-[11px] sm:text-xs font-black tracking-tight leading-none whitespace-nowrap">
                  Google Play Store
                </span>
                <span className="text-[8px] font-bold tracking-wider uppercase leading-tight mt-0.5 whitespace-nowrap text-blue-100">
                  2 Apps Publicadas
                </span>
              </div>
            </div>

            {/* Línea inferior */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8] pt-2 border-t border-white/5">
              <span>franyel.pachecocv@gmail.com</span>
              <a 
                href="#proyectos" 
                className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer"
              >
                Ver Proyectos <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};

export default HeroFolderSection;
