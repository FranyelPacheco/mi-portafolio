import { BlueMedalBadge } from "../../../components/common/GlassIcons";
import { CountUp } from "../../../shared/components/CountUp";
import { ArrowUpRight, Mail } from "lucide-react";
import { lazy, Suspense } from "react";

// La carpeta pesa ~70 KB: se carga aparte para no frenar el primer render del texto
const HeroFolder = lazy(() => import("./HeroFolder"));

export const HeroFolderSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-x-clip"
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

      <div className="animate-fade-in-up stagger-3 w-full pt-36 lg:pt-40 pb-4 flex justify-center items-center z-10">
        <Suspense fallback={<div className="h-[330px] w-[426px] max-w-full" aria-hidden="true" />}>
          <HeroFolder />
        </Suspense>
      </div>
      </div>
    </section>
  );
};

export default HeroFolderSection;
