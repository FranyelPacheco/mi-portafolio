export interface ProjectConfig {
  id: string;
  title: string;
  category: string;
  filterCategory?: "apps" | "webs" | "utilidades";
  description: string;
  problemSolved?: string;
  keyHighlight?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  icon?: string;
  screenshots?: string[];
  themeColor?: {
    glow: string;
    border: string;
    gradient: string;
    badge: string;
  };
}
