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

// Identidad Oficial Definitiva: Mono Titanium con Acentos Azules Identitarios
export const MONO_TITANIUM_PALETTE: ColorPalette = {
  id: "monochrome",
  name: "Mono Titanium & Blue Accent",
  tagline: "Titanio carbón mate, tipografía cromo y acentos azul cobalto",
  swatch: ["#050505", "#0E0E0E", "#181818", "#3B82F6", "#FFFFFF"],
  tokens: {
    bgBase: "#050505",
    bgSurface: "#0C0C0F",
    bgElevated: "#141418",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(59, 130, 246, 0.28)",
    accent: "#3B82F6",
    accentHover: "#2563EB",
    accentGlow: "rgba(59, 130, 246, 0.40)",
    accentContrastText: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A1AA",
    textMuted: "#52525B",
    auraGradient:
      "radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(255, 255, 255, 0.04) 40%, rgba(5, 5, 5, 0) 70%)",
    badgeBg: "rgba(59, 130, 246, 0.10)",
    badgeBorder: "rgba(59, 130, 246, 0.30)",
  },
};
