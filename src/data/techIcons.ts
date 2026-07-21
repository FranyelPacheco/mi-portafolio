interface TechIcon {
  label: string;
  color: string;
  bg: string;
}

const techMap: Record<string, TechIcon> = {
  React: { label: "Re", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  "React Native": { label: "RN", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  TypeScript: { label: "TS", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  JavaScript: { label: "JS", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  "Tailwind CSS": { label: "Tw", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  Vite: { label: "Vi", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  PHP: { label: "PH", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  HTML: { label: "HT", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  CSS: { label: "CS", color: "text-blue-300", bg: "bg-blue-400/10 border-blue-400/20" },
  MySQL: { label: "My", color: "text-sky-500", bg: "bg-sky-600/10 border-sky-600/20" },
  MongoDB: { label: "Mo", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  "Node.js": { label: "No", color: "text-green-500", bg: "bg-green-600/10 border-green-600/20" },
  Git: { label: "Gi", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  GitHub: { label: "GH", color: "text-slate-300", bg: "bg-slate-500/10 border-slate-500/20" },
  Expo: { label: "Ex", color: "text-white", bg: "bg-slate-400/10 border-slate-400/20" },
};

const fallback: TechIcon = { label: "??", color: "text-slate-400", bg: "bg-slate-500/10 border-slate-500/20" };

export const getTechIcon = (tech: string): TechIcon => {
  return techMap[tech] ?? { ...fallback, label: tech.slice(0, 2).toUpperCase() };
};
