import { useState } from "react";
import Folder, { type FolderItem } from "../../../shared/components/Folder/Folder";
import avatarImg from "../../../assets/avatar-original.jpg";

const SIZE = 1.4;
const MONO = '"JetBrains Mono", ui-monospace, monospace';
// El glass rasteriza estas fichas a canvas: solo texto, fondos planos e <img>
const px = (n: number) => `calc(${n}px * var(--folder-scale))`;

interface FichaProps {
  tag: string;
  title: string;
  lines: string[];
  avatar?: boolean;
}

const Ficha = ({ tag, title, lines, avatar }: FichaProps) => (
  <div
    style={{
      height: "100%",
      boxSizing: "border-box",
      padding: px(11),
      background: "#0f1626",
      display: "flex",
      flexDirection: "column",
      gap: px(5),
    }}
  >
    <span style={{ fontFamily: MONO, fontSize: px(7.5), fontWeight: 700, color: "#60a5fa" }}>{tag}</span>
    {avatar && (
      <div style={{ width: px(34), height: px(34), borderRadius: px(8), overflow: "hidden" }}>
        <img src={avatarImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    )}
    <span style={{ fontSize: px(12), fontWeight: 800, color: "#ffffff", lineHeight: 1.15 }}>{title}</span>
    {lines.map((line) => (
      <span key={line} style={{ fontFamily: MONO, fontSize: px(8), color: "#93c5fd", lineHeight: 1.35 }}>
        {line}
      </span>
    ))}
  </div>
);

const FICHAS: FolderItem[] = [
  <Ficha key="perfil" tag="FICHA 01 · PERFIL" title="Franyel Pacheco" avatar lines={["Frontend & Mobile Developer", "+3 años de experiencia", "Venezuela · 100% remoto"]} />,
  <Ficha key="stack" tag="FICHA 02 · STACK" title="React Native + Expo" lines={["React · TypeScript", "Tailwind · GSAP", "Supabase · Node.js"]} />,
  <Ficha key="produccion" tag="FICHA 03 · EN PRODUCCIÓN" title="2 apps en Google Play" lines={["Impostor Royale", "Pa' que sufras"]} />,
  <Ficha key="disponible" tag="FICHA 04 · DISPONIBLE" title="Freelance / Remoto" lines={["Respuesta en <24 h", "Zona horaria GMT-4"]} />,
  <Ficha key="contacto" tag="FICHA 05 · CONTACTO" title="Hablemos" lines={["franyel.pachecocv@gmail.com", "github.com/FranyelPacheco"]} />,
];

export const HeroFolder = () => {
  const [opened, setOpened] = useState(false);
  const fade = { opacity: opened ? 0 : 1 };

  return (
    <div className="flex flex-col items-center max-w-full">
      <div className="relative inline-block max-w-full">
        <Folder
          variant="glass"
          mode="flap"
          layout="stack"
          color="#1e3a8a"
          paperColor="#0f1626"
          theme="dark"
          label="EXPEDIENTE // 2026"
          tabPosition="left"
          size={SIZE}
          tilt={0.3}
          frost={0.7}
          items={FICHAS}
          onOpenChange={setOpened}
        />

        {/* Sello del diseño original sobre la solapa; se oculta al abrir porque la solapa gira */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[37%] bottom-0 flex flex-col items-center justify-center transition-opacity duration-300"
          style={fade}
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-black tracking-tighter metallic-text">FP</span>
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            </span>
          </div>
          <p className="text-[11px] font-semibold text-[#a1a1aa] tracking-[0.3em] uppercase mt-1">Ingeniería &amp; Producto</p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-[37%] -translate-y-1/2 rotate-[6deg] transition-opacity duration-300"
          style={fade}
        >
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-3 py-1 rounded-md shadow-[0_8px_20px_rgba(59,130,246,0.55)] border border-blue-400/50 flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-black tracking-tight leading-none whitespace-nowrap">Google Play Store</span>
            <span className="text-[8px] font-bold tracking-wider uppercase leading-tight mt-0.5 whitespace-nowrap text-blue-100">2 Apps Publicadas</span>
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
