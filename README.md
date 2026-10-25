# Franyel Pacheco — Portafolio

Portafolio web personal para destacar mis competencias como **Desarrollador Frontend** enfocado en vacantes remotas (React / React Native / TypeScript).

**[Ver Portafolio en Vivo →](https://mi-portafolio-eta.vercel.app/)**

---

## Stack Tecnológico

- **Build Tool:** Vite
- **UI Library:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Iconos:** lucide-react
- **Enrutado:** react-router-dom v7
- **Formularios:** EmailJS
- **Animaciones:** CSS Keyframes + canvas-confetti

## Características

- Diseño dark mode responsive (mobile-first)
- Hero section con **HyperText** (efecto scramble al hover), **TypingAnimation** y **ShimmerButton**
- Glow orb de fondo y avatar con borde animado
- Sección "Sobre mí" con stats de proyectos y tecnologías
- Tech Stack organizado por categorías con **iconos color-coded** por tecnología
- Vista de Proyectos con **filtrado por tecnología**
- Formulario de contacto con validaciones en tiempo real, integración EmailJS y **confeti al enviar**
- Navbar con indicador de ruta activa
- Página 404 minimalista
- Smooth scroll entre secciones
- SEO optimizado con meta tags y Open Graph

## Proyectos Destacados

| Proyecto | Tecnologías | Link |
|----------|-------------|------|
| Impostor Royale | React Native, TypeScript | [Play Store](https://play.google.com/store/apps/details?id=com.impostor.royale) |
| Óptica Nur | HTML, CSS, JavaScript | [Demo](https://optica-nur.pages.dev/) |
| SP Perfect Color | PHP, JavaScript, CSS | [GitHub](https://github.com/FranyelPacheco/SP-Perfect-Color) |
| DolarAhora | HTML, JavaScript, CSS | [GitHub](https://github.com/FranyelPacheco/DolarAhora) |
| Mi Portafolio | React, TypeScript, Tailwind | [GitHub](https://github.com/FranyelPacheco/mi-portafolio) |

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Reutilizables (ProjectCard, About, HyperText, TypingAnimation, ShimmerButton)
│   └── layout/          # Layout (Navbar, Skills)
├── data/                # Datos estáticos (projects.ts, techIcons.ts)
├── routes/              # Configuración de rutas
├── types/               # Interfaces TypeScript (project, skill, navigation)
└── views/               # Vistas del router (Home, Projects, Contact, NotFound)
```

## Instalación y Ejecución

```bash
git clone https://github.com/FranyelPacheco/mi-portafolio.git
cd mi-portafolio
npm install
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción (TypeScript + Vite) |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Análisis con ESLint |

---

**Franyel Pacheco** · Desarrollador Frontend React / TypeScript
