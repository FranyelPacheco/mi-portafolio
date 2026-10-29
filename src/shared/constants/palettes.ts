export interface ColorPalette {
  id: "monochrome";
  name: string;
  tagline: string;
  swatch: string[];
  tokens: {
    bgBase: string;
    bgSurface: string;
    bgElevated: string;
    borderSubtle: string;
    borderStrong: string;
    accent: string;
    accentHover: string;
    accentGlow: string;
    accentContrastText: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    auraGradient: string;
    badgeBg: string;
    badgeBorder: string;
  };
}

// Identidad de marca "Programador en camino": sistema Hyper Cobalt
export const MONO_TITANIUM_PALETTE: ColorPalette = {
  id: "monochrome",
  name: "Hyper Cobalt",
  tagline: "Fondo casi negro azulado, texto blanco y acento cobalto",
  swatch: ["#06080E", "#0C111E", "#141C30", "#3B82F6", "#FFFFFF"],
  tokens: {
    bgBase: "#06080E",
    bgSurface: "#0C111E",
    bgElevated: "#141C30",
    borderSubtle: "rgba(59, 130, 246, 0.14)",
    borderStrong: "rgba(59, 130, 246, 0.32)",
    accent: "#3B82F6",
    accentHover: "#1D4ED8",
    accentGlow: "rgba(59, 130, 246, 0.45)",
    accentContrastText: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#93C5FD",
    textMuted: "#8190A8",
    auraGradient:
      "radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(29, 78, 216, 0.18) 45%, rgba(6, 8, 14, 0) 70%)",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    badgeBorder: "rgba(59, 130, 246, 0.35)",
  },
};
