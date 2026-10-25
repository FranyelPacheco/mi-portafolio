import { GlassUserIcon } from "../../../components/common/GlassIcons";
import profileImg from "../../../assets/avatar-perfil.webp";
import { MapPin, Smartphone, Code2, Mail, ExternalLink } from "lucide-react";

export const AboutVisualSection = () => {
  return (
    <section
      id="sobre-mi"
      className="relative py-20 sm:py-28 px-4 sm:px-6 flex flex-col items-center overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)]"
    >
      <div className="w-full max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── Columna Izquierda: Perfil y Contacto Rápido ── */}
          <aside aria-label="Tarjeta de perfil rápido" className="lg:col-span-4 flex flex-col items-center sm:items-start lg:sticky lg:top-28">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-3xl p-2.5 bg-gradient-to-b from-white/10 via-white/[0.03] to-black/80 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
              {/* Resplandor sutil */}
              <div className="absolute -inset-2 bg-[var(--accent)]/15 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" aria-hidden="true" />

              {/* Contenedor de la foto con fondo blanco */}
              <figure className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-white/20 shadow-inner flex items-center justify-center m-0">
                <img
                  src={profileImg}
                  alt="Fotografía de Franyel Pacheco con fondo blanco"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Status sobre la foto */}
                <figcaption className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    Disponible
                  </span>
                  <span className="text-[var(--text-secondary)] text-[11px]">Remoto / Full-Time</span>
                </figcaption>
              </figure>

              {/* Ficha rápida bajo la foto */}
              <address className="not-italic mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5 text-xs font-mono block">
                <ul className="space-y-2.5 list-none m-0 p-0">
                  <li className="flex items-center gap-2 text-white font-semibold">
                    <Code2 className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                    <span>Frontend &amp; Mobile Developer</span>
                  </li>
                  <li className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Smartphone className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                    <span>2 Apps en Google Play</span>
                  </li>
                  <li className="flex items-center gap-2 text-[var(--text-muted)]">
                    <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                    <span>Venezuela · 100% Remoto</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-white/10">
                  <a
                    href="mailto:franyel.pachecocv@gmail.com"
                    className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[var(--accent)] hover:opacity-90 text-white font-bold text-[11px] uppercase tracking-wider transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    Escribirme al correo
                  </a>
                </div>
              </address>
            </div>
          </aside>

          {/* ── Columna Derecha: Biografía Editorial ── */}
          <article aria-label="Biografía profesional" className="lg:col-span-8 space-y-7">
            {/* Encabezado con Icono 3D */}
            <header className="flex items-center gap-4 border-b border-white/10 pb-5">
              <GlassUserIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
              <hgroup>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] block">
                  [ PERFIL PROFESIONAL // EXPERIENCIA ]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Sobre mí
                </h2>
              </hgroup>
            </header>

            {/* Texto de carrera resumido, directo y cercano */}
            <div className="space-y-5 text-[#d4d4dc] text-sm sm:text-base leading-relaxed sm:leading-[1.75] font-sans font-light">
              <p>
                Soy <strong className="text-white font-medium">Franyel Pacheco</strong>, desarrollador Frontend y Mobile con más de 3 años de experiencia, radicado en <strong className="text-white font-medium">Venezuela</strong>. Me especializo en crear aplicaciones web y móviles rápidas, visualmente cuidadas y fáciles de usar, utilizando <strong className="text-white font-medium">React, React Native y TypeScript</strong>.
              </p>

              <p>
                Mi trabajo está respaldado por software real en producción. He desarrollado y publicado dos aplicaciones en Google Play Store:{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.impostor.royale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium underline underline-offset-4 decoration-[var(--accent)] hover:text-[var(--accent)] inline-flex items-center gap-1"
                >
                  Impostor Royale <ExternalLink className="w-3 h-3 inline" />
                </a>{" "}
                (party game offline: todos juegan en un solo teléfono) y{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.franyel_pacheco.paquesufras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium underline underline-offset-4 decoration-[var(--accent)] hover:text-[var(--accent)] inline-flex items-center gap-1"
                >
                  Pa que sufras <ExternalLink className="w-3 h-3 inline" />
                </a>{" "}
                (party game de tensión social para grupos). No me quedo en la teoría: llevo las ideas desde el diseño hasta la tienda oficial.
              </p>

              <p>
                Me enfoco en lo que verdaderamente importa para un negocio: <strong className="text-white font-medium">aplicaciones que carguen rápido, funcionen sin errores y retengan a los usuarios</strong>. Tengo más de 3 años de experiencia y domino el desarrollo para Android con Expo y React Native, además de plataformas web modernas, lo que me permite avanzar con agilidad sin depender de múltiples equipos separados.
              </p>

              <footer className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#a1a1aa] font-mono m-0">
                  ¿Tienes una vacante remota o un proyecto en mente?
                </p>
                <a
                  href="mailto:franyel.pachecocv@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Mail className="w-4 h-4 text-[var(--accent)]" />
                  franyel.pachecocv@gmail.com
                </a>
              </footer>
            </div>
          </article>

        </div>
      </div>

      {/* Tarjeta decorativa de fondo sutil */}
      <div
        className="absolute top-1/4 -right-12 sm:right-10 w-64 sm:w-80 h-96 bg-white/[0.01] border border-white/5 rounded-3xl -z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      />
    </section>
  );
};

export default AboutVisualSection;
