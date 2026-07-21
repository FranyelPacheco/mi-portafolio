import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 bg-slate-900">
      <div className="text-center space-y-4">
        <p className="text-8xl sm:text-9xl font-extrabold text-sky-400/20 select-none">
          404
        </p>
        <p className="text-slate-400 text-lg">
          Esta página no existe.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 text-sm font-medium text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
      </div>
    </section>
  );
};

export default NotFound;
