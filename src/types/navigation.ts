import type { ComponentType, LazyExoticComponent } from "react";

export interface RouteConfig {
  path: string;
  name: string;
  component: ComponentType | LazyExoticComponent<ComponentType>;
}