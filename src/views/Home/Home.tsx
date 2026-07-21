import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Download, ExternalLink } from "lucide-react";
import Skills from "../../components/layout/Skills";
import About from "../../components/common/About";
import HyperText from "../../components/common/HyperText";
import TypingAnimation from "../../components/common/TypingAnimation";
import ShimmerButton from "../../components/common/ShimmerButton";
import avatar from "../../assets/avatar.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          
          {/* Bloque de Texto */}
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <p className="text-sky-400 font-mono text-sm tracking-widest uppercase">
              Disponible para trabajar remoto
            </p>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hola, soy{" "}
              <HyperText className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Franyel
              </HyperText>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-400">
              <TypingAnimation>
                Desarrollador Frontend React / TypeScript
              </TypingAnimation>
            </h2>
            
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Me apasiona construir aplicaciones web y móviles optimizadas, limpias 
              y escalables. Enfocado en escribir código sólido y dominar la 
              arquitectura de software de verdad.
            </p>

            {/* Botones de Acción con Íconos */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <ShimmerButton onClick={() => navigate("/projects")}>
                Ver Proyectos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </ShimmerButton>
              
              <button 
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all hover:bg-slate-800/40"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                Contáctame
              </button>

              <a
                href="/CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all hover:bg-slate-800/40"
              >
                <Download className="w-4 h-4 text-slate-400" />
                Descargar CV
              </a>

              <a
                href="https://www.linkedin.com/in/franyel-franyel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all hover:bg-slate-800/40"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 bg-slate-800 border-2 border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group animate-fade-in-up animation-delay-200">
            <span className="text-slate-500 font-mono text-xs group-hover:scale-110 transition-transform duration-300">
              <img src={avatar} alt="Avatar de Franyel" className="w-full h-full object-cover rounded-2xl" />
            </span>
          </div>

        </div>
      </section>

      {/* 2. Insertamos la sección de Sobre Mí */}
      <About />

      {/* 3. Insertamos la sección de Habilidades */}
      <Skills />
    </>
  );
};

export default Home;