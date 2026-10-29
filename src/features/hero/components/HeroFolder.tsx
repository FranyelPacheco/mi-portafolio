import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ShieldCheck, Smartphone } from "lucide-react";
import Folder, { type FolderItem } from "../../../shared/components/Folder/Folder";
import { GooglePlayIcon } from "../../projects/components/ProjectIllustrations";
import avatarImg from "../../../assets/avatar-original.jpg";
import "./HeroFolder.css";

const PLAY_URL = "https://play.google.com/store/apps/developer?id=FP+Games+Studio";
const PLAY_INDEX = 2;

// Las hojas se diseñan a este tamaño (docW ≈ 224 * 0.54 * 1.9) y escalan con la carpeta
const MAX_SIZE = 1.9;
const SHEET_W = 230;
const SHEET_H = 281;

// Tamaño de la carpeta y si hay ancho para mostrar las 3 fichas en fila (si no, se apilan)
const useFolderLayout = () => {
  const [state, setState] = useState({ size: MAX_SIZE, wide: false });
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      const wide = w >= 1280 || (w >= 760 && w < 1024);
      // En fila las hojas ocupan ~1.5x el ancho de la carpeta: se reduce para no invadir el texto
      setState({ size: Math.min(wide ? 1.6 : MAX_SIZE, Math.max(1.2, (w - 40) / 224)), wide });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return state;
};

const Sheet = ({ bg, children }: { bg: string; children: ReactNode }) => (
  <div
    className="origin-top-left p-4 text-left"
    style={{ width: SHEET_W, height: SHEET_H, background: bg, transform: `scale(calc(var(--folder-scale) / ${MAX_SIZE}))` }}
  >
    {children}
  </div>
);

const SheetHead = ({ icon, title, meta }: { icon: ReactNode; title: string; meta?: ReactNode }) => (
  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 gap-2">
    <span className="text-[10px] font-mono text-white uppercase tracking-wider flex items-center gap-1.5 font-bold">
      {icon}
      {title}
    </span>
    {meta}
  </div>
);

const LangBadge = ({ label, bg, ink }: { label: string; bg: string; ink: string }) => (
  <span
    className="w-14 h-14 rounded-lg flex items-center justify-center text-xl font-black tracking-tight shadow-md"
    style={{ background: bg, color: ink }}
  >
    {label}
  </span>
);

const FICHAS: FolderItem[] = [
  <Sheet key="perfil" bg="#1e1e28">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
        <img src={avatarImg} alt="Avatar de Franyel Pacheco" draggable={false} className="w-full h-full object-cover pointer-events-none" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-bold text-white tracking-tight truncate">Franyel Pacheco</h4>
        <p className="text-[11px] text-[var(--accent)] font-mono truncate">Frontend &amp; Mobile Developer</p>
      </div>
    </div>
    <p className="mt-3 text-[11px] text-[#cbd5e1] leading-relaxed">
      Con más de 3 años de experiencia, creo apps Android y webs rápidas y cuidadas con React, React Native y TypeScript.
    </p>
    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#cbd5e1]">
      <span className="flex items-center gap-1.5 text-emerald-400">
        <ShieldCheck className="w-3.5 h-3.5" />
        Disponible
      </span>
      <span className="flex items-center gap-1 text-[#94a3b8]">
        <Smartphone className="w-3.5 h-3.5 text-[var(--accent)]" />
        Mobile &amp; Web
      </span>
    </div>
    <p className="mt-2 text-[10px] font-mono text-[#94a3b8]">Venezuela · 100% remoto</p>
  </Sheet>,

  <Sheet key="lenguaje" bg="#14141a">
    <SheetHead icon={<span className="text-[var(--accent)]">{"</>"}</span>} title="Lenguaje favorito" />
    <div className="flex items-center gap-3">
      <LangBadge label="JS" bg="#F7DF1E" ink="#111111" />
      <span className="text-[#94a3b8] font-mono text-lg">/</span>
      <LangBadge label="TS" bg="#3178C6" ink="#ffffff" />
    </div>
    <h4 className="mt-4 text-sm font-bold text-white tracking-tight">JavaScript &amp; TypeScript</h4>
    <p className="mt-1 text-[11px] text-[#cbd5e1] leading-relaxed">
      TypeScript es mi favorito: código tipado, menos errores y apps más seguras de mantener.
    </p>
  </Sheet>,

  <Sheet key="play" bg="#181822">
    <SheetHead
      icon={<GooglePlayIcon className="w-3.5 h-3.5 text-[var(--accent)]" />}
      title="Google Play"
      meta={
        <span className="font-pixel text-[10px] px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
          EN PRODUCCIÓN
        </span>
      }
    />
    <h4 className="text-base font-black text-white tracking-tight">FP Games Studio</h4>
    <p className="mt-1 text-[11px] text-[#cbd5e1] leading-relaxed">
      Mi cuenta de desarrollador con mis party games: Impostor Royale y Pa&apos; que sufras.
    </p>
    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-strong)] text-white text-[11px] font-bold">
      Ver en Google Play <ArrowUpRight className="w-3.5 h-3.5" />
    </div>
  </Sheet>,
];

export const HeroFolder = () => {
  const { size, wide } = useFolderLayout();
  const [opened, setOpened] = useState(false);
  const fade = { opacity: opened ? 0 : 1 };

  return (
    <div className="flex flex-col items-center max-w-full">
      <div className="relative inline-block max-w-full">
        <Folder
          className="hero-folder"
          variant="matte"
          mode="flap"
          layout={wide ? "row" : "stack"}
          zoomOnClick={!wide}
          color="#14141a"
          paperColor="#14141a"
          theme="dark"
          label="EXPEDIENTE // 2026"
          tabPosition="left"
          size={size}
          tilt={0.6}
          items={FICHAS}
          onOpenChange={setOpened}
          onItemClick={(_, index) => {
            if (index === PLAY_INDEX) window.open(PLAY_URL, "_blank", "noopener,noreferrer");
          }}
        />

        {/* Bolsillo de vidrio del diseño original: sello, insignia y pie; se oculta al abrir porque la solapa gira */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[37%] bottom-0 p-5 flex flex-col justify-between transition-opacity duration-300"
          style={fade}
        >
          <div aria-hidden="true" className="absolute -top-3.5 right-3 rotate-[6deg]">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-3 py-1 rounded-md shadow-[0_8px_20px_rgba(59,130,246,0.55)] border border-blue-400/50 flex flex-col items-center">
              <span className="font-pixel text-xs sm:text-sm leading-none whitespace-nowrap">Google Play Store</span>
              <span className="font-pixel text-[9px] tracking-wider uppercase leading-tight mt-0.5 whitespace-nowrap text-blue-100">2 Apps Publicadas</span>
            </div>
          </div>

          <div aria-hidden="true" className="my-auto flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black tracking-tighter metallic-text">FP</span>
              <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              </span>
            </div>
            <p className="text-[11px] font-semibold text-[#a1a1aa] tracking-[0.3em] uppercase mt-1">Ingeniería &amp; Producto</p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8] pt-2 border-t border-white/5">
            <span aria-hidden="true" className="truncate">franyel.pachecocv@gmail.com</span>
            <a
              href="#proyectos"
              className="pointer-events-auto flex items-center gap-1 text-[var(--text-secondary)] hover:text-white transition-colors shrink-0"
            >
              Ver Proyectos <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[11px] font-mono text-[var(--text-muted)] text-center">
        Haz clic para abrir el expediente · toca la ficha de Google Play para visitar el estudio
      </p>
    </div>
  );
};

export default HeroFolder;
