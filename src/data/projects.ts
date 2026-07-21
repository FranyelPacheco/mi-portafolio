import type { ProjectConfig } from "../types/project";

export const projects: ProjectConfig[] = [
  {
    id: "1",
    title: "Pa' que sufras - Juego de Cartas",
    description:
      "Proyecto de juego de mesa/fiesta multijugador offline diseñado para dispositivos móviles. Enfoque en optimización de rendimiento y experiencia de usuario fluida.",
    technologies: ["React Native", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/FranyelPacheco/Pa-que-sufras",
  },
  {
    id: "2",
    title: "Impostor Royale",
    description:
      "Videojuego móvil multijugador desarrollado bajo la entidad FP Games Studio, implementando lógicas complejas de estado y renderizado eficiente.",
    technologies: ["React Native", "TypeScript", "JavaScript"],
    githubUrl:
      "https://play.google.com/store/apps/details?id=com.impostor.royale",
  },
];
