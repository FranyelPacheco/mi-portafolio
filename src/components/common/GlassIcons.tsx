// Colección de iconos e insignias 3D en titanio, vidrio esmerilado y acentos azul cobalto

export const BlueMedalBadge = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_8px_24px_rgba(59,130,246,0.5)] ${className}`}
    aria-hidden="true"
  >
    <defs>
      {/* Degradados metálicos en azul cobalto y titanio */}
      <linearGradient id="blueRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="35%" stopColor="#3B82F6" />
        <stop offset="70%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>

      <radialGradient id="blueInner" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#EFF6FF" />
        <stop offset="40%" stopColor="#60A5FA" />
        <stop offset="80%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </radialGradient>

      <linearGradient id="blueRibbonLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>

      <linearGradient id="blueRibbonRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>

      <filter id="blueShine" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Cintas de la medalla */}
    <g filter="url(#blueShine)">
      <path
        d="M32 72 L22 112 L35 104 L48 112 L42 72 Z"
        fill="url(#blueRibbonLeft)"
        stroke="#1E3A8A"
        strokeWidth="1"
      />
      <path
        d="M58 72 L52 112 L65 104 L78 112 L68 72 Z"
        fill="url(#blueRibbonRight)"
        stroke="#1E3A8A"
        strokeWidth="1"
      />
    </g>

    {/* Borde exterior */}
    <circle
      cx="50"
      cy="48"
      r="40"
      fill="url(#blueRim)"
      stroke="#DBEAFE"
      strokeWidth="1.5"
    />

    {/* Anillo de profundidad intermedio */}
    <circle
      cx="50"
      cy="48"
      r="34"
      fill="#0F172A"
      opacity="0.4"
    />

    {/* Disco central de brillo azul */}
    <circle
      cx="50"
      cy="48"
      r="32"
      fill="url(#blueInner)"
      stroke="#BFDBFE"
      strokeWidth="1.2"
    />

    {/* Anillo punteado de micro-alineación */}
    <circle
      cx="50"
      cy="48"
      r="28"
      stroke="#FFFFFF"
      strokeWidth="0.8"
      strokeDasharray="2 3"
      opacity="0.85"
    />

    {/* Estrella central 3D */}
    <path
      d="M50 28 L54.5 40.5 L68 41.5 L57.5 50 L61 63 L50 55.5 L39 63 L42.5 50 L32 41.5 L45.5 40.5 Z"
      fill="#FFFFFF"
      stroke="#1D4ED8"
      strokeWidth="1.2"
      strokeLinejoin="round"
      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
    />
  </svg>
);

// Icono 3D de Vidrio Esmerilado: Usuario / Perfil
export const GlassUserIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="glassStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="35%" stopColor="#93C5FD" stopOpacity="0.35" />
        <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="glassFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#0B132B" stopOpacity="0.45" />
      </linearGradient>
    </defs>

    <circle
      cx="50"
      cy="32"
      r="17"
      fill="url(#glassFill)"
      stroke="url(#glassStroke)"
      strokeWidth="3.5"
    />
    <ellipse
      cx="45"
      cy="24"
      rx="7"
      ry="3.5"
      fill="#FFFFFF"
      opacity="0.4"
      transform="rotate(-20 45 24)"
    />

    <path
      d="M20 84 C20 64 34 54 50 54 C66 54 80 64 80 84"
      fill="url(#glassFill)"
      stroke="url(#glassStroke)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M26 80 C28 69 36 60 48 58"
      stroke="#93C5FD"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

// Icono 3D de Vidrio Esmerilado: Puntero / Cursor
export const GlassCursorIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="cursorGlassStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="40%" stopColor="#93C5FD" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="cursorGlassFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
        <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.20" />
        <stop offset="100%" stopColor="#050505" stopOpacity="0.60" />
      </linearGradient>
    </defs>

    <path
      d="M24 16 L24 74 L40 58 L54 84 L64 78 L50 52 L72 52 Z"
      fill="url(#cursorGlassFill)"
      stroke="url(#cursorGlassStroke)"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    <path
      d="M28 24 L28 66 L38 56"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M44 54 L64 54"
      stroke="#93C5FD"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

// Iconos Blueprint / Wireframe a línea sutil (Pie de sección adaptado a Franyel: Frontend, Mobile, Arquitectura & Craft)
export const BlueprintIcons = ({ className = "w-full" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-8 sm:gap-14 opacity-30 ${className}`} aria-hidden="true">
    {/* 1. Pluma Vectorial / UI Craft (como en la referencia) */}
    <div className="flex flex-col items-center gap-1.5 group/icon">
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#a1a1aa] group-hover/icon:text-[var(--accent)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
      <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Craft</span>
    </div>

    {/* 2. Arquitectura de Componentes & Bounding Box (como en la referencia) */}
    <div className="flex flex-col items-center gap-1.5 group/icon">
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#a1a1aa] group-hover/icon:text-[var(--accent)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="5" width="14" height="14" rx="2" strokeDasharray="3 3" />
        <rect x="3" y="3" width="4" height="4" fill="currentColor" />
        <rect x="17" y="3" width="4" height="4" fill="currentColor" />
        <rect x="3" y="17" width="4" height="4" fill="currentColor" />
        <rect x="17" y="17" width="4" height="4" fill="currentColor" />
        <path d="M10 14l2-2 2 2" />
      </svg>
      <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Layout</span>
    </div>

    {/* 3. Dispositivo Móvil / Mobile Screen (Especialidad de Franyel) */}
    <div className="flex flex-col items-center gap-1.5 group/icon">
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#a1a1aa] group-hover/icon:text-[var(--accent)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <line x1="10" y1="5" x2="14" y2="5" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
      <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Mobile</span>
    </div>

    {/* 4. Terminal de Código / TypeScript (Especialidad de Franyel) */}
    <div className="flex flex-col items-center gap-1.5 group/icon">
      <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#a1a1aa] group-hover/icon:text-[var(--accent)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
      <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Core</span>
    </div>
  </div>
);
