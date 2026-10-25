import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Clock, Layers, Mail, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import Folder, { type FolderItem } from "../../../shared/components/Folder/Folder";
import avatarImg from "../../../assets/avatar-original.jpg";
import "./HeroFolder.css";

// Las hojas se diseñan a este tamaño (docW ≈ 224 * 0.54 * 1.9) y escalan con la carpeta
const MAX_SIZE = 1.9;
const SHEET_W = 230;
const SHEET_H = 281;

const useFolderSize = () => {
  const [size, setSize] = useState(MAX_SIZE);
  useEffect(() => {
    const fit = () => setSize(Math.min(MAX_SIZE, Math.max(1.2, (window.innerWidth - 40) / 224)));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return size;
};

const Sheet = ({ bg, children }: { bg: string; children: ReactNode }) => (
  <div
    className="origin-top-left p-4 text-left"
    style={{ width: SHEET_W, height: SHEET_H, background: bg, transform: `scale(calc(var(--folder-scale) / ${MAX_SIZE}))` }}
  >
    {children}
  </div>
);

const SheetHead = ({ icon, title, meta }: { icon: ReactNode; title: string; meta: ReactNode }) => (
  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 gap-2">
    <span className="text-[10px] font-mono text-white uppercase tracking-wider flex items-center gap-1.5 font-bold">
      {icon}
      {title}
    </span>
    {meta}
  </div>
);

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5">{children}</span>
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
    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#cbd5e1]">
      <span className="flex items-center gap-1.5 text-emerald-400">
        <ShieldCheck className="w-3.5 h-3.5" />
        Disponible
      </span>
      <span className="flex items-center gap-1 text-[#94a3b8]">
        <Smartphone className="w-3.5 h-3.5 text-[var(--accent)]" />
        Mobile &amp; Web
      </span>
    </div>
    <div className="mt-4 space-y-1.5 text-[11px] font-mono text-[#94a3b8]">
      <p className="text-white font-semibold">+3 años de experiencia</p>
      <p>• Venezuela · 100% remoto</p>
      <p>• Freelance y tiempo completo</p>
    </div>
  </Sheet>,

  <Sheet key="arquitectura" bg="#14141a">
    <SheetHead
      icon={<Layers className="w-3.5 h-3.5 text-[var(--accent)]" />}
      title="Arquitectura"
      meta={<span className="text-[10px] font-mono text-[var(--accent)] font-bold">60 FPS · &lt;30ms</span>}
    />
    <div className="space-y-2 text-[11px] font-mono text-[#94a3b8]">
      <p className="text-white font-semibold">Stack: React Native + React + TS</p>
      <p>• Carga instantánea y fluidez a 60 FPS</p>
      <p>• Sincronización en tiempo real sin retrasos</p>
      <p>• Código limpio, modular y fácil de mantener</p>
    </div>
  </Sheet>,

  <Sheet key="play" bg="#181822">
    <SheetHead
      icon={<Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />}
      title="Google Play"
      meta={
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
          EN PRODUCCIÓN
        </span>
      }
    />
    <p className="text-[11px] text-[#cbd5e1] leading-relaxed">
      Impostor Royale y Pa que sufras: software móvil completo en tiendas oficiales, probado con usuarios y validado comercialmente.
    </p>
    <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#94a3b8]">
      <Chip>React Native</Chip>
      <Chip>Expo</Chip>
      <Chip>TypeScript</Chip>
    </div>
  </Sheet>,

  <Sheet key="contacto" bg="#14141a">
    <SheetHead
      icon={<Clock className="w-3.5 h-3.5 text-[var(--accent)]" />}
      title="Contacto"
      meta={<span className="text-[10px] font-mono text-emerald-400 font-bold">&lt;24 h</span>}
    />
    <div className="space-y-2 text-[11px] font-mono text-[#94a3b8]">
      <p className="text-white font-semibold">Respuesta en menos de 24 horas</p>
      <p className="flex items-center gap-1.5 break-all">
        <Mail className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
        franyel.pachecocv@gmail.com
      </p>
      <p>• github.com/FranyelPacheco</p>
      <p>• Zona horaria GMT-4</p>
    </div>
  </Sheet>,
];

export const HeroFolder = () => {
  const size = useFolderSize();
  const [opened, setOpened] = useState(false);
  const fade = { opacity: opened ? 0 : 1 };

  return (
    <div className="flex flex-col items-center max-w-full">
      <div className="relative inline-block max-w-full">
        <Folder
          className="hero-folder"
          variant="matte"
          mode="flap"
          layout="stack"
          color="#14141a"
          paperColor="#14141a"
          theme="dark"
          label="EXPEDIENTE // 2026"
          tabPosition="left"
          size={size}
          tilt={0.6}
          items={FICHAS}
          onOpenChange={setOpened}
        />

        {/* Bolsillo de vidrio del diseño original: sello, insignia y pie; se oculta al abrir porque la solapa gira */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[37%] bottom-0 p-5 flex flex-col justify-between transition-opacity duration-300"
          style={fade}
        >
          <div aria-hidden="true" className="absolute -top-3.5 right-3 rotate-[6deg]">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-3 py-1 rounded-md shadow-[0_8px_20px_rgba(59,130,246,0.55)] border border-blue-400/50 flex flex-col items-center">
              <span className="text-[11px] sm:text-xs font-black tracking-tight leading-none whitespace-nowrap">Google Play Store</span>
              <span className="text-[8px] font-bold tracking-wider uppercase leading-tight mt-0.5 whitespace-nowrap text-blue-100">2 Apps Publicadas</span>
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
        Haz clic para abrir el expediente · arrastra las fichas
      </p>
    </div>
  );
};

export default HeroFolder;
