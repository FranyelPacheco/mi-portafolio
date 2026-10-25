import { useNavigate } from "react-router-dom";
import { Mail, Download, ArrowUpRight, ChevronDown } from "lucide-react";
import { MagneticButton } from "../../../shared/components/MagneticButton";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import avatar from "../../../assets/avatar-original.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const { containerRef } = useHeroAnimation();

  return (
    <section
      ref={containerRef as React.Ref<HTMLElement>}
      className="relative min-h-[100dvh] flex flex-col justify-between px-4 sm:px-8 md:px-12 pt-28 sm:pt-32 pb-8 sm:pb-12 bg-[var(--bg-base)] transition-colors duration-500 overflow-hidden"
    >
      {/* ── 1. HALO CINEMATOGRÁFICO DE ESTUDIO (Backlight Aura dinámico) ── */}
      <div
        data-hero="aura"
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[780px] h-[340px] sm:h-[580px] lg:h-[700px] rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-0 transition-all duration-700 ease-out"
        style={{
          opacity: 0,
          background: "var(--aura-gradient)",
        }}
        aria-hidden="true"
      />

      {/* ── 2. SECCIÓN SUPERIOR: INTRODUCCIÓN EDITORIAL ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Eyebrow de rol y estatus */}
        <div
          data-hero="eyebrow"
          className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] backdrop-blur-md text-[var(--text-secondary)] text-xs sm:text-sm font-mono tracking-wide transition-colors duration-300"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)]" />
          <span>Frontend Architect · React &amp; React Native</span>
        </div>

        {/* ── 3. TITULAR MONUMENTAL DISPLAY DE GRAN FORMATO ── */}
        <h1 className="text-[clamp(2.8rem,9vw,8.5rem)] font-black text-[var(--text-primary)] tracking-tighter uppercase leading-[0.88] select-none">
          <span className="overflow-hidden block" aria-hidden="true">
            <span
              data-hero="word"
              className="block tracking-tight text-[var(--text-primary)]"
              style={{ opacity: 0 }}
            >
              Franyel
            </span>
          </span>
          <span className="overflow-hidden block" aria-hidden="true">
            <span
              data-hero="word"
              className="block tracking-tight text-transparent bg-clip-text transition-all duration-500"
              style={{
                opacity: 0,
                backgroundImage: "linear-gradient(to bottom, var(--accent), var(--text-primary))",
                filter: "drop-shadow(0 0 35px var(--accent-glow))",
              }}
            >
              Pacheco
            </span>
          </span>
          <span className="sr-only">Franyel Pacheco</span>
        </h1>
      </div>

      {/* ── 4. EJE CENTRAL: RETRATO CON ILUMINACIÓN CINEMATOGRÁFICA ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-6 sm:my-8 flex flex-col items-center">
        <div
          data-hero="portrait"
          className="relative group"
          style={{ opacity: 0 }}
        >
          {/* Resplandor ambiental suave alrededor del marco */}
          <div className="absolute -inset-1 rounded-2xl bg-[var(--accent)]/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

          {/* Marco de cristal con la foto original */}
          <div className="relative w-60 sm:w-68 md:w-72 aspect-square rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-gradient-to-b from-white/10 to-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02]">
            <img
              src={avatar}
              alt="Franyel Pacheco"
              width={384}
              height={384}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Micro badge inferior */}
            <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-lg bg-[var(--bg-base)]/85 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Remoto · Full Time</span>
              </span>
              <span className="text-[var(--accent)] font-semibold tracking-wider">ACTIVO</span>
            </div>
          </div>
        </div>

        {/* Botones de acción principales centrados */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <MagneticButton
            data-hero="cta"
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-[0_0_25px_var(--accent-glow)] btn-press min-h-[44px] transition-all duration-300"
            style={{ opacity: 0 }}
          >
            Explorar Proyectos
          </MagneticButton>

          <MagneticButton
            data-hero="cta"
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full backdrop-blur-md btn-press min-h-[44px] transition-all duration-300"
            style={{ opacity: 0 }}
          >
            <Mail className="w-4 h-4 text-[var(--text-secondary)]" />
            Iniciar Conversación
          </MagneticButton>

          <MagneticButton
            data-hero="cta"
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full backdrop-blur-md btn-press min-h-[44px] transition-all duration-300"
            style={{ opacity: 0 }}
          >
            <Download className="w-4 h-4 text-[var(--text-secondary)]" />
            CV
          </MagneticButton>
        </div>
      </div>

      {/* ── 5. SECCIÓN INFERIOR: METADATA EDITORIAL EN CUADRANTES ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-12 gap-6 items-end text-xs font-mono transition-colors duration-300">
        {/* Esquina inferior izquierda: datos del autor */}
        <div data-hero="meta" className="md:col-span-4 space-y-1 text-[var(--text-muted)]" style={{ opacity: 0 }}>
          <div className="text-[var(--text-primary)] font-semibold uppercase tracking-wider">
            ©2026 // EDICIÓN 03
          </div>
          <p className="text-[var(--text-secondary)]">
            Especialidad: Mobile &amp; High-End Web Architecture
          </p>
          <div className="text-[var(--text-muted)] flex items-center gap-2">
            <span>Disponibilidad:</span>
            <span className="text-[var(--accent)]">Remoto · Internacional</span>
          </div>
        </div>

        {/* Centro inferior: indicador de scroll animado interactivo */}
        <div data-hero="meta" className="md:col-span-4 flex flex-col items-center justify-center text-[var(--text-muted)] hidden md:flex" style={{ opacity: 0 }}>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("perfil");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex flex-col items-center gap-1.5 cursor-pointer py-1 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none min-h-[44px] justify-center"
            aria-label="Desplazarse a la sección de perfil"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">SCROLL</span>
            <div data-hero="scroll-indicator" className="w-px bg-gradient-to-b from-[var(--accent)] to-transparent h-10 group-hover:h-12 transition-all duration-300" />
            <ChevronDown className="w-3.5 h-3.5 text-[var(--accent)] animate-bounce" />
          </button>
        </div>

        {/* Esquina inferior derecha: manifiesto de ingeniería y links sociales */}
        <div data-hero="meta" className="md:col-span-4 md:text-right space-y-2" style={{ opacity: 0 }}>
          <p className="text-[var(--text-secondary)] max-w-sm ml-auto leading-relaxed">
            Construyendo experiencias web y móviles con tipado estricto, microinteracciones táctiles y rendimiento a 60fps.
          </p>
          <div className="flex items-center md:justify-end gap-4 text-[var(--text-secondary)] pt-1">
            <a
              href="https://github.com/FranyelPacheco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
            >
              / GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://www.linkedin.com/in/franyel-franyel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
            >
              / LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
