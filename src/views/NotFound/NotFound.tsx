import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100dvh-130px)] flex items-center justify-center px-4 sm:px-6 bg-[var(--bg-base)] transition-colors duration-500">
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      <img
        src="/images/personaje-404.webp"
        alt="Franyel en pixel art con las manos en la cabeza, sorprendido"
        width={169}
        height={320}
        className="h-52 sm:h-72 md:h-80 w-auto shrink-0 select-none"
        style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 8px rgba(59,130,246,0.55))" }}
      />
      <div className="max-w-md w-full border border-[var(--border-strong)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-base)] p-8 sm:p-12 text-center space-y-6 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          [ 404 // RUTA NO ENCONTRADA ]
        </div>
        <p className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--accent)] to-[var(--text-secondary)] tracking-tight tabular-nums select-none drop-shadow-[0_0_30px_var(--accent-glow)]">
          404
        </p>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Esta dirección no existe, o la rompí en el último deploy. Sospechoso. Vuelve al inicio y seguimos construyendo.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider font-bold bg-[var(--accent-strong)] text-[var(--accent-contrast)] hover:opacity-90 rounded-full btn-press cursor-pointer shadow-[0_0_20px_var(--accent-glow)] min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default NotFound;
