import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 bg-slate-900">
      <div className="text-center space-y-6">
        <p className="text-7xl sm:text-9xl font-extrabold text-sky-400/20 select-none">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Página no encontrada
        </h1>
        <p className="text-slate-400 max-w-md mx-auto">
          La ruta que buscas no existe o fue movida a otra ubicación.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-slate-900 font-semibold rounded-lg shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </button>
      </div>
    </section>
  );
};

export default NotFound;
