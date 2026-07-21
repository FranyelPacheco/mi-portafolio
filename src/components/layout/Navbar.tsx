import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes";
import { Code2 } from "lucide-react"; // 1. Importamos el ícono Code2

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nombre con Ícono */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-wider hover:text-sky-400 transition-colors">
          <Code2 className="w-6 h-6 text-sky-400" /> {/* 2. Colocamos el ícono */}
          PORTAFOLIO
        </Link>

        {/* Menú de Enlaces Dinámicos */}
        <div className="flex gap-8">
          {AppRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {route.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;