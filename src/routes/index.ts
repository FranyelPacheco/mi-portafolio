import type { RouteConfig } from "../types/navigation";
import Home from "../views/Home/Home";
import Projects from "../views/Projects/Projects";
import Contact from "../views/Contact/Contact";

// Array centralizado con todas las páginas del portafolio, protegido por nuestro molde
export const AppRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/projects",
    name: "Proyectos",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contacto",
    component: Contact,
  },
];