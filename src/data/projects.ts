import type { ProjectConfig } from "../types/project";

export const projects: ProjectConfig[] = [
  {
    id: "1",
    title: "Impostor Royale",
    description:
      "Videojuego móvil multijugador desarrollado bajo la entidad FP Games Studio, implementando lógicas complejas de estado, sincronización en tiempo real y renderizado eficiente.",
    technologies: ["React Native", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/FranyelPacheco/Impostor-Royale",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.impostor.royale",
  },
  {
    id: "2",
    title: "Óptica Nur",
    description:
      "Sitio web institucional para óptica, diseñado con enfoque mobile-first y optimizado para SEO local. Desplegado en Cloudflare Pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/FranyelPacheco/Optica-nur-web",
    liveUrl: "https://optica-nur.pages.dev/",
  },
  {
    id: "3",
    title: "SP Perfect Color",
    description:
      "Aplicación web de gestión y servicios desarrollada con PHP, orientada a la administración de procesos internos con interfaz interactiva.",
    technologies: ["PHP", "JavaScript", "CSS"],
    githubUrl: "https://github.com/FranyelPacheco/SP-Perfect-Color",
  },
  {
    id: "4",
    title: "DolarAhora",
    description:
      "Aplicación web que muestra el precio del dólar en tiempo real con interfaz limpia y responsiva. Consumo de API externa para datos actualizados.",
    technologies: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/FranyelPacheco/DolarAhora",
  },
  {
    id: "5",
    title: "Mi Portafolio",
    description:
      "Portafolio web personal construido con React, TypeScript y Tailwind CSS. Incluye filtrado de proyectos, formulario con EmailJS y animaciones CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/FranyelPacheco/mi-portafolio",
    liveUrl: "https://mi-portafolio-eta.vercel.app/",
  },
];
