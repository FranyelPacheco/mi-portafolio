export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;   // Opcional por si algún proyecto no está desplegado aún
}