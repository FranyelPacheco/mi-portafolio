import { Globe, TrendingUp, FileSpreadsheet, Code2 } from "lucide-react";
import type { ProjectConfig } from "../../../types/project";


/* ──────────────────────────────────────────────
   Icons
────────────────────────────────────────────── */
export const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const RaycastArrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.75 3.75 10.25 8l-4.5 4.25"
    />
  </svg>
);

export const GooglePlayIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.008 2.008 0 0 1-.61-1.428V3.242c0-.53.22-1.036.609-1.428zM15.207 13.414l2.586 2.586-12.72 7.344 10.134-9.93zm0-2.828L5.073.656l12.72 7.344-2.586 2.586zm1.414 1.414l3.586 2.071a1.5 1.5 0 0 0 0-2.598l-3.586-2.072 1.414 2.599z" />
  </svg>
);

/* ──────────────────────────────────────────────
   Filter definitions
────────────────────────────────────────────── */
export type FilterId = "todas" | "apps" | "webs" | "utilidades";

export const FILTERS: { id: FilterId; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "apps", label: "Apps" },
  { id: "webs", label: "Webs" },
  { id: "utilidades", label: "Utilidades" },
];

/* ──────────────────────────────────────────────
   Card Inner Illustrations
────────────────────────────────────────────── */

// 1. Mobile Phone Mockup Illustration (Pa que sufras & Impostor Royale)
export const CardMobileIllustration = ({
  project,
}: {
  project: ProjectConfig;
}) => {
  const screens = project.screenshots || [];

  return (
    <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl overflow-hidden flex flex-col items-center justify-end m-0">
      <figcaption className="sr-only">Captura de {project.title}</figcaption>

      {/* Dynamic ambient halo behind phone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[50px] pointer-events-none opacity-50"
        style={{ background: project.themeColor?.glow || "rgba(59,130,246,0.3)" }}
        aria-hidden="true"
      />

      {/* Floating Pill Badge */}
      <div className="absolute top-1 z-20 flex items-center justify-start w-full px-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {project.id === "01" ? "Pass & Play · 60 FPS" : "750+ Preguntas · Google Play"}
        </span>
      </div>

      {/* Phone Hardware Mockup Frame */}
      <div className="relative w-[170px] sm:w-[185px] h-[155px] sm:h-[165px] rounded-t-[24px] border-t-2 border-x-2 border-white/15 bg-[#0a0a0f] shadow-[0_-12px_28px_rgba(0,0,0,0.85)] p-1 pb-0 flex flex-col">
        {/* Dynamic Island / Speaker */}
        <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1 flex items-center justify-center border border-white/10" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-[#15151e] mr-1" />
          <div className="w-1 h-1 rounded-full bg-blue-500/40" />
        </div>

        {/* Screen Content */}
        <div className="w-full flex-1 rounded-t-[18px] overflow-hidden bg-black relative">
          {screens.length > 0 ? (
            <img loading="lazy" decoding="async"
              src={screens[0]}
              alt={`${project.title} captura`}
              className="w-full h-full object-cover object-top select-none"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-xs">
              Preview
            </div>
          )}

          {/* Fade inferior gradual */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08090d] via-[#08090d]/80 to-transparent pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </figure>
  );
};

// 2. Óptica Nur (Catálogo Comercial & Monturas)
export const CardOpticaIllustration = () => (
  <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl overflow-hidden m-0 border border-teal-500/25 bg-[#071317] flex flex-col justify-between shadow-lg">
    <figcaption className="sr-only">Sitio web comercial Óptica Nur</figcaption>

    {/* Mini browser topbar */}
    <div className="h-6 bg-[#0a1b1f] border-b border-teal-500/20 px-2.5 flex items-center justify-between z-10 flex-shrink-0">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-red-500/80" />
        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
      </div>
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[9px] font-mono text-teal-300">
        <Globe className="w-2.5 h-2.5 text-teal-400" />
        <span>optica-nur.pages.dev</span>
      </div>
      <span className="text-[8px] font-mono text-emerald-400 font-semibold">99.9% Up</span>
    </div>

    {/* Screenshot viewport */}
    <div className="relative flex-1 w-full overflow-hidden bg-black">
      <img loading="lazy" decoding="async"
        src="/images/projects/optica-nur-preview.webp"
        alt="Óptica Nur Sitio Web"
        className="w-full h-full object-cover object-top select-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061518] via-transparent to-transparent pointer-events-none" />

      {/* Floating brand pill */}
      <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-teal-400/30 text-white shadow-md">
          <img loading="lazy" decoding="async"
            src="/images/projects/optica-nur-logo.svg"
            alt="Óptica Nur Logo"
            className="w-4 h-4 object-contain"
          />
          <span className="text-[10px] font-bold tracking-tight">Óptica Nur Barquisimeto</span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 font-semibold backdrop-blur-md">
          Catálogo Digital
        </span>
      </div>
    </div>
  </figure>
);

// 3. DolarAhora (Monitor Financiero en Tiempo Real)
export const CardDolarIllustration = () => (
  <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl overflow-hidden m-0 border border-emerald-500/25 bg-[#051a10] flex flex-col justify-between shadow-lg">
    <figcaption className="sr-only">Monitor de divisas DolarAhora</figcaption>

    {/* Mini browser topbar */}
    <div className="h-6 bg-[#082215] border-b border-emerald-500/20 px-2.5 flex items-center justify-between z-10 flex-shrink-0">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-red-500/80" />
        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
      </div>
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[9px] font-mono text-emerald-300">
        <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
        <span>dolarahora.com / binance-p2p</span>
      </div>
      <span className="text-[8px] font-mono text-emerald-400 font-semibold animate-pulse">En Vivo</span>
    </div>

    {/* Screenshot viewport */}
    <div className="relative flex-1 w-full overflow-hidden bg-black">
      <img loading="lazy" decoding="async"
        src="/images/projects/dolarahora-preview.webp"
        alt="DolarAhora Monitor Financiero"
        className="w-full h-full object-cover object-top select-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04150d] via-transparent to-transparent pointer-events-none" />

      {/* Floating brand pill */}
      <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-emerald-400/30 text-white shadow-md">
          <img loading="lazy" decoding="async"
            src="/images/projects/dolarahora-logo.svg"
            alt="DolarAhora Logo"
            className="w-4 h-4 object-contain"
          />
          <span className="text-[10px] font-bold tracking-tight">DolarAhora Monitor</span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold backdrop-blur-md">
          &lt; 50ms Cache
        </span>
      </div>
    </div>
  </figure>
);

// 4. SP Perfect Color (Formulación y Base de Datos)
export const CardSPIllustration = () => (
  <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl overflow-hidden m-0 border border-purple-500/25 bg-[#120b1e] flex flex-col justify-between shadow-lg">
    <figcaption className="sr-only">Dashboard ERP SP Perfect Color</figcaption>

    {/* Mini browser / ERP desktop topbar */}
    <div className="h-6 bg-[#160d26] border-b border-purple-500/20 px-2.5 flex items-center justify-between z-10 flex-shrink-0">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-red-500/80" />
        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
      </div>
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[9px] font-mono text-purple-300">
        <FileSpreadsheet className="w-2.5 h-2.5 text-purple-400" />
        <span>sp-perfect-color/dashboard</span>
      </div>
      <span className="text-[8px] font-mono text-purple-300 font-semibold">PHP 8.2 MVC</span>
    </div>

    {/* Screenshot viewport */}
    <div className="relative flex-1 w-full overflow-hidden bg-black">
      <img loading="lazy" decoding="async"
        src="/images/projects/sp-perfect-color-dashboard.webp"
        alt="SP Perfect Color ERP Dashboard"
        className="w-full h-full object-cover object-top select-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0719] via-transparent to-transparent pointer-events-none" />

      {/* Floating brand pill */}
      <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-purple-400/30 text-white shadow-md">
          <img loading="lazy" decoding="async"
            src="/images/projects/sp-perfect-color-logo.webp"
            alt="SP Perfect Color Logo"
            className="w-4 h-4 object-contain"
          />
          <span className="text-[10px] font-bold tracking-tight">SP Perfect Color ERP</span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-semibold backdrop-blur-md">
          1/128 Galón Stock
        </span>
      </div>
    </div>
  </figure>
);

// 6. Portafolio Editorial & Architect
export const CardPortafolioIllustration = () => (
  <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl bg-gradient-to-b from-[#0c4a6e]/35 via-[#0c4a6e]/10 to-transparent p-3 flex flex-col justify-between overflow-hidden m-0 border border-sky-500/20">
    <figcaption className="sr-only">Arquitectura de software con React y TypeScript</figcaption>

    <div className="flex items-center justify-between text-sky-300 font-mono text-[9px]">
      <span className="flex items-center gap-1">
        <Code2 className="w-3 h-3 text-sky-400" /> React 19 + TypeScript
      </span>
      <span className="text-emerald-400 font-bold">60 FPS</span>
    </div>

    {/* Real Monogram & Code Terminal View */}
    <div className="my-auto bg-[#070b14]/90 rounded-lg p-2.5 border border-sky-500/20 font-mono text-[10px] leading-relaxed shadow-lg">
      <div className="flex items-center justify-between mb-1 pb-1 border-b border-white/5" aria-hidden="true">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[8px] text-zinc-500 ml-1">portfolio.config.ts</span>
        </div>
        <img loading="lazy" decoding="async"
          src="/images/projects/portfolio-icon.webp"
          alt="Portfolio Icon"
          className="w-4 h-4 object-contain"
        />
      </div>
      <p className="text-sky-300">
        <span className="text-purple-400">const</span> stack = &#123; ui: <span className="text-emerald-300">&quot;CardSwap 3D&quot;</span>, fps: <span className="text-amber-300">60</span> &#125;;
      </p>
    </div>

    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
      <span>Titanium Dark Architecture</span>
      <span className="text-sky-400 font-bold">100 Lighthouse</span>
    </div>
  </figure>
);

// 7. TikTok to WhatsApp Stickers (Utilidad / Script)
export const CardTikTokIllustration = () => (
  <figure className="relative w-full h-[175px] sm:h-[185px] rounded-xl bg-gradient-to-b from-[#78350f]/35 via-[#451a03]/20 to-transparent p-3 flex flex-col justify-between overflow-hidden m-0 border border-amber-500/20">
    <figcaption className="sr-only">Proceso automatizado de conversión a stickers</figcaption>

    <div className="flex items-center justify-between text-amber-300 font-mono text-[9px]">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        BOT ACTIVO · WHATSAPP
      </span>
      <span className="text-zinc-400">TypeScript</span>
    </div>

    {/* Visual pipeline with Real TikSticker Brand Logo */}
    <div className="my-auto py-1 space-y-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5" aria-hidden="true">
      <div className="flex items-center gap-2.5">
        <img loading="lazy" decoding="async"
          src="/images/projects/tiksticker-icon.svg"
          alt="TikSticker"
          className="w-9 h-9 rounded-xl object-contain bg-black/60 border border-amber-400/30 p-0.5 flex-shrink-0"
        />
        <div className="min-w-0">
          <div className="text-[10px] font-bold text-white truncate">TikSticker WhatsApp Bot</div>
          <div className="text-[8px] font-mono text-amber-300">TikTok, Reels &amp; Shorts ➔ WebP</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[8px] font-mono text-zinc-300 pt-1 border-t border-white/5">
        <span>Transcodificación &lt; 2s</span>
        <span className="text-emerald-400 font-semibold">WebP 512x512</span>
      </div>
    </div>

    <div className="bg-black/40 backdrop-blur-md rounded-lg p-1.5 border border-white/[0.06] flex items-center justify-between text-[9px] font-mono">
      <span className="text-zinc-300">WhatsApp</span>
      <span className="text-amber-400 font-bold">Sin Anuncios</span>
    </div>
  </figure>
);

