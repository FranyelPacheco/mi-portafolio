import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../routes";
import { Code2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nombre con Ícono */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-wider hover:text-sky-400 transition-colors">
          <Code2 className="w-6 h-6 text-sky-400" />
          PORTAFOLIO
        </Link>

        {/* Menú de Enlaces Dinámicos */}
        <div className="flex gap-8">
          {AppRoutes.map((route) => {
            const isActive = location.pathname === route.path;
            return (
              <Link
                key={route.path}
                to={route.path}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {route.name}
                {isActive && (
                  <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
