import type { ProjectConfig } from "../types/project";

export const projects: ProjectConfig[] = [
  {
    id: "1",
    title: "Plataforma de Analíticas Deportivas",
    description:
      "Aplicación web enfocada en el seguimiento exhaustivo de estadísticas de futbolistas en tiempo real. Construida con una arquitectura escalable y base de datos relacional robusta.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Pa' que sufras - Juego de Cartas",
    description:
      "Proyecto de juego de mesa/fiesta multijugador offline diseñado para dispositivos móviles. Enfoque en optimización de rendimiento y experiencia de usuario fluida.",
    technologies: ["React Native", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/FranyelPacheco/Pa-que-sufras",
  },
  {
    id: "3",
    title: "Impostor Royale",
    description:
      "Videojuego móvil multijugador desarrollado bajo la entidad FP Games Studio, implementando lógicas complejas de estado y renderizado eficiente.",
    technologies: ["React Native", "TypeScript", "JavaScript"],
    githubUrl:
      "https://play.google.com/store/apps/details?id=com.impostor.royale",
  },
];
