import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  href: string;
  isHash: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", href: "#inicio", isHash: true },
  { id: "proyectos", label: "Proyectos", href: "#proyectos", isHash: true },
  { id: "por-que-yo", label: "¿Por qué elegirme?", href: "#por-que-yo", isHash: true },
  { id: "herramientas", label: "Herramientas", href: "#herramientas", isHash: true },
  { id: "sobre-mi", label: "Sobre mí", href: "#sobre-mi", isHash: true },
  { id: "contacto", label: "Contacto", href: "#contacto", isHash: true },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    if (location.pathname !== "/") {
      if (location.pathname === "/projects") setActiveSection("proyectos");
      else if (location.pathname === "/contact") setActiveSection("contacto");
      return;
    }

    let ticking = false;
    const checkActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Estado de scroll desde arriba para sombras y blur
      setIsScrolled(scrollPosition > 20);

      // Comportamiento dinámico: desaparece al scrollear hacia abajo, reaparece completo al subir
      const currentScrollY = scrollPosition;
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 30) {
        // En el tope de la página siempre visible completo
        setIsVisible(true);
      } else if (scrollDiff > 6) {
        // Scrolleando hacia abajo -> ocultar navbar
        setIsVisible(false);
      } else if (scrollDiff < -6) {
        // Scrolleando hacia arriba -> reaparecer completo
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Si estamos al fondo de la página, activar contacto directamente
      if (scrollPosition + windowHeight >= fullHeight - 60) {
        setActiveSection("contacto");
        return;
      }

      // Línea focal: justo en la zona visual debajo del navbar flotante (35% del viewport)
      const focalLine = windowHeight * 0.35;

      for (let i = 0; i < NAV_ITEMS.length; i++) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom >= focalLine) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkActiveSection();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/${item.href}`);
      return;
    }

    const target = document.getElementById(item.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(item.id);
      // Al hacer click, aseguramos que el navbar se mantenga visible
      setIsVisible(true);
    }
  };

  return (
    <header
      className={`fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ease-out pointer-events-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className={`pointer-events-auto flex items-center p-1 sm:p-1.5 rounded-full max-w-full overflow-x-auto scrollbar-none transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-[#0C0C0F]/90 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
            : "bg-[#0C0C0F]/75 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        }`}
      >
        <ul className="flex items-center gap-0.5 sm:gap-1 list-none m-0 p-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-2.5 sm:px-4 py-1.5 text-[11px] sm:text-sm font-sans tracking-tight transition-all duration-200 rounded-full flex items-center justify-center whitespace-nowrap min-h-[36px] sm:min-h-[38px] ${
                    isActive
                      ? "bg-white/12 text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] border border-[var(--border-strong)]"
                      : "text-[#8e8e96] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
