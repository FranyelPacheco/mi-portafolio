import { ComponentType } from 'react';

// Contrato que define la estructura obligatoria de cada ruta en la app
export interface RouteConfig {
  path: string; 
  name: string;
  component: ComponentType; 
}