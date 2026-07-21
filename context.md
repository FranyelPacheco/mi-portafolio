# Contexto del Proyecto: Portafolio Profesional

## 📌 Objetivo
Portafolio web personal enfocado en destacar competencias para vacantes remotas como Desarrollador Frontend (React / React Native / TypeScript).

## 🛠️ Stack Tecnológico
- **Build Tool:** Vite
- **Librería UI:** React 18+ (con TypeScript)
- **Estilos:** Tailwind CSS
- **Iconos:** `lucide-react`
- **Enrutado:** `react-router-dom`
- **Formularios:** React `useState` + `@emailjs/browser`
- **Animaciones:** CSS Keyframes + `canvas-confetti`

## 🏗️ Arquitectura de Carpetas
- `src/components/common/`: Componentes reutilizables (`ProjectCard.tsx`, `About.tsx`, `HyperText.tsx`, `TypingAnimation.tsx`, `ShimmerButton.tsx`).
- `src/components/layout/`: Componentes de layout (`Navbar.tsx`, `Skills.tsx`).
- `src/data/`: Datos estáticos (`projects.ts`).
- `src/views/`: Vistas principales del enrutador (`Home.tsx`, `Projects.tsx`, `Contact.tsx`, `NotFound.tsx`).
- `src/types/`: Contratos e interfaces estricta de TypeScript (`project.ts`, `skill.ts`, `navigation.ts`).
- `src/routes/`: Configuración centralizada de rutas.

## 🚨 Reglas de Código para la IA
1. **Tipado Estricto:** PROHIBIDO usar `any`. Utiliza siempre las interfaces de `src/types/`.
2. **Componentes Limpios:** Separa la lógica de presentación de la data. Las estructuras de datos van en `src/data/` o en los tipos.
3. **Estilos:** Usa exclusivamente utilidades de Tailwind CSS.
4. **Manejo de Estado:** Prefiere React Hooks estándar (`useState`, `useEffect`) y mantén el estado lo más cercano posible al componente que lo necesita.

## 🎓 Regla Pedagógica (para cada generación de código)
Una vez generado el código:
1. **Explicación breve** (máx. 3-4 viñetas) de la decisión técnica más importante.
2. **Mini prueba / pregunta rápida** (1-2 preguntas) para confirmar que el usuario entendió la lógica antes de continuar.