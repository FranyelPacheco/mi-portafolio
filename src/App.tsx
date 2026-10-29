import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { AppRoutes } from "./routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./views/NotFound/NotFound";
import { useLenis } from "./shared/hooks/useLenis";
import { CursorGlow } from "./shared/components/CursorGlow";
import { ThemeProvider } from "./shared/context/ThemeContext";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
  exit:    { opacity: 0, transition: { duration: 0.2,  ease: "easeIn" } },
} as const;

const AppContent = () => {
  const location = useLocation();

  // Inicializa Lenis para scroll suave global a 60fps
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-500 relative">
      {/* Enlace accesible para lectores de pantalla y navegación por teclado (WCAG AAA) */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2.5 rounded-xl bg-[var(--accent-strong)] text-white font-mono text-xs font-bold shadow-[0_10px_25px_rgba(59,130,246,0.6)] outline-none ring-2 ring-white"
      >
        Saltar al contenido principal
      </a>

      {/* Atmósfera editorial: Halftone dot-grid en esquinas */}
      <div className="halftone-overlay" aria-hidden="true" />

      <CursorGlow />
      <Navbar />

      <main id="contenido-principal" className="flex-1 outline-none" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Suspense fallback={null}>
            <Routes location={location}>
              {AppRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;