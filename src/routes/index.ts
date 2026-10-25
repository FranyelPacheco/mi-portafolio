import { lazy } from "react";
import type { RouteConfig } from "../types/navigation";
import Home from "../views/Home/Home";
const Projects = lazy(() => import("../views/Projects/Projects"));
const Contact = lazy(() => import("../views/Contact/Contact"));

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