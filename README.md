# Franyel Pacheco — Portafolio

Portafolio web personal para destacar mis competencias como **Desarrollador Frontend** enfocado en vacantes remotas (React / React Native / TypeScript).

---

## Stack Tecnológico

- **Build Tool:** Vite
- **UI Library:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Iconos:** lucide-react
- **Enrutado:** react-router-dom v7
- **Formularios:** EmailJS

## Características

- Diseño dark mode responsive (mobile-first)
- Hero section con llamada a la acción
- Sección de Tech Stack organizada por categorías
- Vista de Proyectos con filtrado por tecnología
- Formulario de contacto con validaciones en tiempo real e integración EmailJS
- Página 404 personalizada

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables (ProjectCard)
│   └── layout/          # Componentes de layout (Navbar, Skills)
├── data/                # Datos estáticos (projects.ts)
├── hooks/               # Custom hooks
├── routes/              # Configuración centralizada de rutas
├── types/               # Contratos e interfaces TypeScript
└── views/               # Vistas principales del enrutador
    ├── Contact/
    ├── Home/
    ├── NotFound/
    └── Projects/
```

## Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/FranyelPacheco/mi-portafolio.git

# Entrar al directorio
cd mi-portafolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción (TypeScript + Vite) |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Análisis de código con ESLint |

---

**Franyel Pacheco** · Desarrollador Frontend React / TypeScript
