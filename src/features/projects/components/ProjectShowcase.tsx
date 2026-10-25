import { useState, useRef } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Globe,
  Wrench,
  Sparkles,
  Target,
  Layers,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "../../../shared/components/ScrollReveal";
import { projects as allProjects } from "../../../data/projects";
import { CardSwap, Card, type CardSwapHandle } from "./CardSwap/CardSwap";
import {
  GithubIcon,
  RaycastArrow,
  GooglePlayIcon,
  type FilterId,
  FILTERS,
  CardMobileIllustration,
  CardOpticaIllustration,
  CardDolarIllustration,
  CardSPIllustration,
  CardPortafolioIllustration,
  CardTikTokIllustration,
} from "./ProjectIllustrations";
/* ──────────────────────────────────────────────
   Main Section Component (Semántica HTML)
────────────────────────────────────────────── */
export const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>("todas");
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardSwapRef = useRef<CardSwapHandle>(null);

  // Filtered projects
  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "todas") return true;
    return p.filterCategory === activeFilter;
  });

  // Current project focused at the front of the stack
  const safeIndex = activeCardIndex % (filteredProjects.length || 1);
  const currentProject = filteredProjects[safeIndex] ?? filteredProjects[0];

  // Reset active index when filter changes
  const handleSelectFilter = (id: FilterId) => {
    setActiveFilter(id);
    setActiveCardIndex(0);
  };

  return (
    <section
      id="proyectos"
      className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[220px] pointer-events-none -z-0 opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(225,29,72,0.1) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 relative z-10">

        {/* ── Top Header (Semántica HTML: header + hgroup + nav) ── */}
        <ScrollReveal>
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            
            {/* Title & Tagline con <hgroup> */}
            <hgroup className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Stack Interactivo 3D</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Hay un proyecto para cada necesidad.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Interactúa con las tarjetas: arrastra, haz clic o usa las flechas para explorar mis proyectos destacados en mobile, web y herramientas.
              </p>
            </hgroup>

            {/* Filter Capsule con <nav> y lista de botones <ul> */}
            <nav
              role="tablist"
              aria-label="Filtrar proyectos por categoría"
              className="relative p-1.5 bg-gradient-to-b from-[#18191f] to-[#0c0d12] border border-white/10 rounded-full flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] self-start md:self-end"
            >
              <ul className="flex items-center list-none m-0 p-0">
                {FILTERS.map(({ id, label }) => {
                  const isActive = activeFilter === id;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => handleSelectFilter(id)}
                        className={`relative z-10 px-4 sm:px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                          isActive ? "text-white" : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="raycastActiveTabBackdrop"
                            className="absolute inset-0 rounded-full z-[-1]"
                            style={{
                              background: "radial-gradient(51.07% 92.4% at 51% 7.61%, rgb(90, 90, 90) 0%, rgb(26, 26, 26) 100%)",
                              boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0 4px 12px rgba(0, 0, 0, 0.5)",
                              border: "1px solid rgba(255, 255, 255, 0.12)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

          </header>
        </ScrollReveal>

        {/* ── Main Showcase: Two-column Interactive Layout (Details Console + CardSwap 3D) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Active Project Console */}
          <article className="lg:col-span-5 bg-gradient-to-b from-[#13141a]/90 to-[#0b0c10]/95 border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl h-[540px] sm:h-[560px] lg:h-[580px]">
            {/* Background accent light based on active project */}
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-25 transition-all duration-700"
              style={{ background: currentProject?.themeColor?.glow || "rgba(59,130,246,0.3)" }}
              aria-hidden="true"
            />

            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {/* Header meta */}
              <header className="space-y-2.5 pb-3 border-b border-white/[0.06] relative z-10 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Proyecto {currentProject?.id} / {filteredProjects.length.toString().padStart(2, "0")}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${currentProject?.themeColor?.badge || "text-blue-400 bg-blue-500/10 border-blue-500/20"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {currentProject?.filterCategory?.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-0.5">
                  {currentProject?.icon ? (
                    <img loading="lazy" decoding="async"
                      src={currentProject.icon}
                      alt={currentProject.title}
                      className="w-11 h-11 rounded-2xl object-contain p-1 bg-black/80 border border-white/15 shadow-md flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      {currentProject?.filterCategory === "utilidades" ? (
                        <Wrench className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Globe className="w-5 h-5 text-teal-400" />
                      )}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                      {currentProject?.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {currentProject?.category}
                    </p>
                  </div>
                </div>
              </header>

              {/* Description & Case Study Details */}
              <div className="py-3 space-y-2.5 relative z-10 overflow-hidden flex-1 flex flex-col justify-center">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {currentProject?.description}
                </p>

                {currentProject?.problemSolved && (
                  <div className="p-2.5 rounded-xl bg-blue-500/[0.07] border border-blue-500/20 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                      <Target className="w-3 h-3 text-blue-400" /> ¿Qué problema resuelve?
                    </span>
                    <p className="text-xs text-zinc-200 leading-relaxed">
                      {currentProject.problemSolved}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-1 pt-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Tecnologías &amp; Herramientas:
                  </span>
                  <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Tecnologías del proyecto">
                    {currentProject?.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="inline-block text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-zinc-200">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTAs and Stack Controls */}
            <footer className="pt-4 border-t border-white/[0.06] space-y-3.5 relative z-10 flex-shrink-0">
              <nav aria-label="Enlaces directos del proyecto" className="flex flex-wrap items-center gap-2.5">
                {currentProject?.liveUrl?.includes("play.google.com") ? (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer"
                  >
                    <GooglePlayIcon className="w-4 h-4" />
                    <span>Ver en Google Play</span>
                  </a>
                ) : currentProject?.liveUrl ? (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Visitar Sitio Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}

                {currentProject?.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 text-xs sm:text-sm font-medium transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Código GitHub</span>
                  </a>
                )}
              </nav>

              {/* Stack Controls Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => cardSwapRef.current?.prev()}
                    aria-label="Tarjeta anterior"
                    className="w-10 h-10 rounded-full border border-white/10 bg-gradient-to-b from-[#18191f] to-[#0c0d11] flex items-center justify-center text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer active:scale-95 shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4 text-zinc-300" />
                  </button>
                  <button
                    type="button"
                    onClick={() => cardSwapRef.current?.next()}
                    aria-label="Siguiente tarjeta"
                    className="w-10 h-10 rounded-full border border-white/10 bg-gradient-to-b from-[#18191f] to-[#0c0d11] flex items-center justify-center text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer active:scale-95 shadow-md"
                  >
                    <ChevronRight className="w-4 h-4 text-zinc-300" />
                  </button>
                  <span className="text-xs font-mono text-zinc-400 pl-2">
                    Navegar stack
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Arrastra o haz clic en las cartas</span>
                  <span className="sm:hidden">Desliza cartas</span>
                </div>
              </div>
            </footer>
          </article>

          {/* Right Column (7 cols): 3D CardSwap Stage */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            {/* Container with explicit dimensions for CardSwap's ResizeObserver */}
            <div className="relative w-full h-[430px] sm:h-[480px] md:h-[530px] flex items-center justify-center overflow-hidden rounded-3xl p-2 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04]">
              
              {/* Subtle background stage glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl opacity-30"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <CardSwap
                key={activeFilter}
                ref={cardSwapRef}
                width={420}
                height={315}
                cardDistance={48}
                verticalDistance={55}
                depth={85}
                skewAmount={5}
                visibleCards={Math.min(4, filteredProjects.length)}
                delay={4500}
                autoplay={false}
                pauseOnHover={true}
                draggable={true}
                cardRadius={22}
                onChange={(idx) => setActiveCardIndex(idx)}
                onCardClick={(idx) => setActiveCardIndex(idx)}
                className="w-full h-full"
              >
                {filteredProjects.map((project, idx) => (
                  <Card key={`${project.id}-${idx}`}>
                    <div
                      className="w-full h-full p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden select-none"
                      style={{
                        background: project.themeColor?.gradient || "#111216",
                        boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset, 0 0 0 1px rgba(255, 255, 255, 0.05) inset`,
                      }}
                    >
                      {/* Ambient corner light */}
                      <div
                        className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[55px] pointer-events-none opacity-40"
                        style={{ background: project.themeColor?.glow || "rgba(59,130,246,0.3)" }}
                        aria-hidden="true"
                      />

                      {/* Card Header */}
                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {project.icon ? (
                            <img loading="lazy" decoding="async"
                              src={project.icon}
                              alt={project.title}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain p-1 bg-black/70 border border-white/15 shadow flex-shrink-0"
                            />
                          ) : (
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                              {project.filterCategory === "utilidades" ? (
                                <Wrench className="w-4 h-4 text-amber-400" />
                              ) : (
                                <Globe className="w-4 h-4 text-teal-400" />
                              )}
                            </div>
                          )}
                          <div className="min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                              {project.title}
                            </h4>
                            <span className="text-[10px] font-mono text-zinc-400 block truncate">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-zinc-300 flex-shrink-0 uppercase tracking-wider">
                          #{project.id}
                        </span>
                      </div>

                      {/* Illustration area */}
                      <div className="relative z-10 my-auto">
                        {project.id === "01" || project.id === "02" ? (
                          <CardMobileIllustration project={project} />
                        ) : project.id === "03" ? (
                          <CardTikTokIllustration />
                        ) : project.id === "04" ? (
                          <CardOpticaIllustration />
                        ) : project.id === "05" ? (
                          <CardSPIllustration />
                        ) : project.id === "06" ? (
                          <CardDolarIllustration />
                        ) : (
                          <CardPortafolioIllustration />
                        )}
                      </div>

                      {/* Card Bottom Meta */}
                      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <span className="text-[10px] font-mono text-blue-400 font-semibold flex items-center gap-1">
                          Explorar <RaycastArrow className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar: Browse more link & GitHub Repo (Semántica HTML: footer) ── */}
        <ScrollReveal delay={0.1}>
          <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <a
              href="https://github.com/FranyelPacheco?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 hover:text-white transition-colors duration-200 text-center sm:text-left"
            >
              <span>Explorar todos los repositorios y experimentos en GitHub</span>
              <RaycastArrow className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Disponible para nuevos proyectos freelance o remoto</span>
            </div>
          </footer>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ProjectShowcase;
