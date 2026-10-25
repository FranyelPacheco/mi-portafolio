import type { ProjectConfig } from "../types/project";

export const projects: ProjectConfig[] = [
  {
    id: "01",
    title: "Impostor Royale",
    category: "Party Game & Deducción Social · Google Play",
    filterCategory: "apps",
    description:
      "Juego móvil nativo de deducción social offline (Pass & Play) para 3 a 10 jugadores en un solo teléfono, sin necesidad de internet ni descargas múltiples.",
    problemSolved:
      "Elimina la molestia de que todos tengan que instalar la app y conectarse a internet para jugar en grupo presencialmente.",
    keyHighlight:
      "Algoritmo anti-repetición O(1) con memoria FIFO para 180+ cartas, navegación atómica anti-trampas y compresión WebP.",
    technologies: ["React Native", "Expo Router", "TypeScript", "AsyncStorage"],
    githubUrl: "https://github.com/FranyelPacheco/impostor-royale-privacy",
    liveUrl: "https://play.google.com/store/apps/details?id=com.impostor.royale",
    featured: true,
    icon: "/images/projects/impostor-icon.webp",
    screenshots: [
      "/images/projects/impostor-shot-1.webp",
      "/images/projects/impostor-shot-2.webp",
      "/images/projects/impostor-shot-3.webp",
      "/images/projects/impostor-shot-4.webp",
    ],
    themeColor: {
      glow: "rgba(37, 99, 235, 0.22)",
      border: "rgba(59, 130, 246, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(28, 48, 110, 0.5) 0%, rgba(12, 16, 32, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
  },
  {
    id: "02",
    title: "Pa' que sufras",
    category: "Party Game de Tensión Social · Google Play",
    filterCategory: "apps",
    description:
      "Party game móvil de tensión social con más de 750 preguntas curadas, 3 niveles de intensidad psicológica, temporizador dinámico y modo personalizado.",
    problemSolved:
      "Elimina los clichés de verdad o reto y las suscripciones de pago abusivas con una experiencia 100% offline.",
    keyHighlight:
      "Persistencia C++ con MMKV (30x más rápida que AsyncStorage), Reanimated 4 a 60 fps y 19 pruebas unitarias en Jest.",
    technologies: ["React Native", "Expo SDK", "TypeScript", "MMKV"],
    githubUrl: "https://github.com/FranyelPacheco/Pa-que-sufras",
    liveUrl: "https://play.google.com/store/apps/details?id=com.franyel_pacheco.paquesufras",
    featured: true,
    icon: "/images/projects/paquesufras-icon.webp",
    screenshots: [
      "/images/projects/paquesufras-shot-1.webp",
      "/images/projects/paquesufras-shot-2.webp",
      "/images/projects/paquesufras-shot-3.webp",
      "/images/projects/paquesufras-shot-4.webp",
    ],
    themeColor: {
      glow: "rgba(225, 29, 72, 0.22)",
      border: "rgba(244, 63, 94, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(120, 15, 42, 0.5) 0%, rgba(24, 10, 16, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
  },
  {
    id: "03",
    title: "TikSticker Bot",
    category: "Automatización & Multimedia · WhatsApp",
    filterCategory: "utilidades",
    description:
      "Bot autónomo de WhatsApp que convierte automáticamente videos de TikTok, Instagram Reels y YouTube Shorts en stickers animados WebP en segundos.",
    problemSolved:
      "Evita descargar aplicaciones de terceros con publicidad invasiva para crear stickers animados compatibles con WhatsApp.",
    keyHighlight:
      "Transcodificación con FFmpeg a WebP (512x512, <500 KB), colas FIFO asíncronas por usuario y WebSocket persistente.",
    technologies: ["TypeScript", "Node.js", "FFmpeg", "Baileys (WhatsApp)"],
    featured: true,
    icon: "/images/projects/tiksticker-icon.svg",
    themeColor: {
      glow: "rgba(245, 158, 11, 0.22)",
      border: "rgba(251, 191, 36, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(110, 60, 15, 0.5) 0%, rgba(26, 16, 10, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  },
  {
    id: "04",
    title: "Óptica Nur",
    category: "Sitio Web Comercial & Catálogo Digital",
    filterCategory: "webs",
    description:
      "Plataforma web comercial con catálogo digital de monturas y cristales formulados, geolocalización de sedes físicas y contacto directo vía WhatsApp.",
    problemSolved:
      "Permite explorar monturas y cristales desde el móvil sin ir a la tienda física y ubica las sucursales rápidamente con Google Maps.",
    keyHighlight:
      "Carga instantánea en redes móviles sin frameworks pesados, diseño responsive y 99.9% de disponibilidad en Cloudflare Pages.",
    technologies: ["HTML5 Semántico", "CSS3 Grid", "JavaScript ES6+", "Cloudflare Pages"],
    githubUrl: "https://github.com/FranyelPacheco/Optica-nur-web",
    liveUrl: "https://optica-nur.pages.dev/",
    featured: false,
    icon: "/images/projects/optica-nur-logo.svg",
    screenshots: [
      "/images/projects/optica-nur-preview.webp",
      "/images/projects/optica-nur-catalogo.webp",
    ],
    themeColor: {
      glow: "rgba(13, 148, 136, 0.22)",
      border: "rgba(20, 184, 166, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(13, 95, 85, 0.5) 0%, rgba(10, 24, 22, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
  },
  {
    id: "05",
    title: "SP Perfect Color",
    category: "Sistema ERP & Colorimetría Automotriz",
    filterCategory: "webs",
    description:
      "Sistema ERP empresarial que gestiona el ciclo comercial completo, inventario en fracciones de galón (1/128) y fórmulas de colorimetría automotriz.",
    problemSolved:
      "Controla el stock exacto de mezclas en milímetros y fracciones mínimas (hasta 1/128 de galón) sin mermas fantasma.",
    keyHighlight:
      "Arquitectura MVC en PHP POO con transacciones PDO atómicas, base de datos en 3FN y cobranzas multimoneda auditadas.",
    technologies: ["PHP 8.2 (MVC)", "MySQL (PDO)", "Bootstrap 5.3", "JavaScript"],
    githubUrl: "https://github.com/FranyelPacheco/SP-Perfect-Color",
    featured: false,
    icon: "/images/projects/sp-perfect-color-logo.webp",
    screenshots: [
      "/images/projects/sp-perfect-color-dashboard.webp",
      "/images/projects/sp-perfect-color-inventario.webp",
    ],
    themeColor: {
      glow: "rgba(124, 58, 237, 0.22)",
      border: "rgba(147, 51, 234, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(80, 25, 130, 0.5) 0%, rgba(18, 10, 30, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  },
  {
    id: "06",
    title: "DolarAhora",
    category: "Monitor Financiero & Calculadora",
    filterCategory: "webs",
    description:
      "Monitor financiero ultraligero que consulta en tiempo real tasas oficiales y paralelas (USD, EUR, USDT en VES) con calculadora instantánea.",
    problemSolved:
      "Permite calcular y consultar el tipo de cambio real al instante sin publicidad invasiva ni recargas lentas de página.",
    keyHighlight:
      "Consumo directo de APIs de Binance P2P y ExchangeRate, cálculo reactivo en milisegundos y privacidad total sin cookies.",
    technologies: ["JavaScript ES6+", "Binance P2P API", "ExchangeRate API", "CSS3 Flex/Grid"],
    githubUrl: "https://github.com/FranyelPacheco/DolarAhora",
    featured: false,
    icon: "/images/projects/dolarahora-logo.svg",
    screenshots: ["/images/projects/dolarahora-preview.webp"],
    themeColor: {
      glow: "rgba(22, 163, 74, 0.22)",
      border: "rgba(34, 197, 94, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(18, 75, 36, 0.5) 0%, rgba(8, 26, 14, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  },
  {
    id: "07",
    title: "Portafolio Frontend & Architect",
    category: "Ingeniería Frontend & Arquitectura Web",
    filterCategory: "webs",
    description:
      "Portafolio de alta ingeniería frontend con stack 3D interactivo CardSwap, navbar inteligente con dirección de scroll y rendimiento a 60 FPS.",
    problemSolved:
      "Demuestra arquitectura modular y micro-interacciones 3D fluidas a 60 FPS con código semántico estricto y accesible.",
    keyHighlight:
      "Stack 3D interactivo, navbar reactivo a la inercia del scroll, cero divitis y envío seguro con Resend Serverless.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Resend API"],
    githubUrl: "https://github.com/FranyelPacheco/mi-portafolio",
    liveUrl: "https://mi-portafolio-eta.vercel.app/",
    featured: false,
    icon: "/images/projects/portfolio-icon.svg",
    themeColor: {
      glow: "rgba(56, 189, 248, 0.22)",
      border: "rgba(56, 189, 248, 0.28)",
      gradient: "radial-gradient(100% 70% at 50% 15%, rgba(20, 65, 100, 0.5) 0%, rgba(12, 20, 32, 0.65) 60%, rgba(8, 9, 13, 0.95) 100%)",
      badge: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
  },
];
