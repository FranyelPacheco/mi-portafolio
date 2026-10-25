export const DESIGN = {
  colors: {
    // Hyper Cobalt Design System (Oficial)
    base: "#06080E",
    surface: "#0C111E",
    elevated: "#141C30",
    border: "rgba(59, 130, 246, 0.14)",
    borderStrong: "rgba(59, 130, 246, 0.32)",
    accent: "#3B82F6",
    accentHover: "#2563EB",
    accentGlow: "rgba(59, 130, 246, 0.45)",
    textPrimary: "#FFFFFF",
    textSecondary: "#93C5FD",
    textMuted: "#64748B",
  },
  animation: {
    ease: [0.23, 1, 0.32, 1] as const,
    easeInOut: [0.77, 0, 0.175, 1] as const,
    spring: { type: "spring", duration: 0.3, bounce: 0 } as const,
  },
  radius: {
    badge: "9999px",
    card: "1rem", // 16px concéntrico
    button: "9999px",
  },
} as const;
