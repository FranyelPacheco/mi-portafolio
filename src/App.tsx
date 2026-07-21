import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";
import Navbar from "./components/layout/Navbar";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    // 1. BrowserRouter: Activa el sistema de escucha de URLs en el navegador
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900">
        
        <Navbar /> {/* uso global */}
        
        {/* interruptor que decide qué página mostrar */}
        <Routes>
          {/*lista de rutas para generar los enlaces dinámicamente */}
          {AppRoutes.map((route) => (
            <Route 
              key={route.path}          // Identificador único para que React sea eficiente
              path={route.path}         // La URL que debe coincidir
              element={<route.component />} // El componente que se monta en pantalla
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;