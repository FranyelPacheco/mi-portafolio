import { createContext, useContext, useEffect, type ReactNode } from "react";
import { MONO_TITANIUM_PALETTE, type ColorPalette } from "../constants/palettes";

interface ThemeContextValue {
  palette: ColorPalette;
}

const ThemeContext = createContext<ThemeContextValue>({
  palette: MONO_TITANIUM_PALETTE,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    const { tokens } = MONO_TITANIUM_PALETTE;

    root.style.setProperty("--bg-base", tokens.bgBase);
    root.style.setProperty("--bg-surface", tokens.bgSurface);
    root.style.setProperty("--bg-elevated", tokens.bgElevated);
    root.style.setProperty("--border-subtle", tokens.borderSubtle);
    root.style.setProperty("--border-strong", tokens.borderStrong);
    root.style.setProperty("--accent", tokens.accent);
    root.style.setProperty("--accent-hover", tokens.accentHover);
    root.style.setProperty("--accent-glow", tokens.accentGlow);
    root.style.setProperty("--accent-contrast", tokens.accentContrastText);
    root.style.setProperty("--text-primary", tokens.textPrimary);
    root.style.setProperty("--text-secondary", tokens.textSecondary);
    root.style.setProperty("--text-muted", tokens.textMuted);
    root.style.setProperty("--aura-gradient", tokens.auraGradient);
    root.style.setProperty("--badge-bg", tokens.badgeBg);
    root.style.setProperty("--badge-border", tokens.badgeBorder);

    document.body.style.backgroundColor = tokens.bgBase;
  }, []);

  return (
    <ThemeContext.Provider value={{ palette: MONO_TITANIUM_PALETTE }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};
