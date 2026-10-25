export interface TechIcon {
  label: string;
  color: string;
  bg: string;
}

const codeMap: Record<string, string> = {
  React: "RE",
  "React Native": "RN",
  TypeScript: "TS",
  JavaScript: "JS",
  "Tailwind CSS": "TW",
  Vite: "VI",
  PHP: "PH",
  HTML: "HT",
  CSS: "CS",
  MySQL: "SQ",
  MongoDB: "MG",
  "Node.js": "ND",
  Git: "GT",
  GitHub: "GH",
  Expo: "EX",
};

export const getTechIcon = (tech: string): TechIcon => {
  const label = codeMap[tech] ?? tech.slice(0, 2).toUpperCase();
  return {
    label,
    color: "text-zinc-400",
    bg: "bg-zinc-900/90 border-zinc-800",
  };
};
