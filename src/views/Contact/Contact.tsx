import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Estados para manejar el feedback visual al usuario
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormInvalid = !name.trim() || !email.trim() || !message.trim() || isSending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Reemplaza estos 3 valores con las claves de tu panel de EmailJS
    const SERVICE_ID = "service_j6j2djs";
    const TEMPLATE_ID = "template_io3zadn";
    const PUBLIC_KEY = "6cJCsFkLrX2El22G8";

    // Mapeamos los estados de React con las variables de la plantilla de EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#34d399", "#ffffff"],
        });

        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        setIsSending(false);
        alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] py-16 px-6 bg-slate-900 flex items-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        
        {/* Bloque Izquierdo */}
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Tienes un proyecto en mente? <span className="text-sky-400">Hablemos.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Estoy buscando activamente oportunidades para incorporarme a un equipo como 
            desarrollador remoto. Si buscas a alguien enfocado en escribir código estructurado, 
            buenas prácticas y con ganas de aportar valor, ¡escríbeme!
          </p>
        </div>

        {/* Bloque Derecho */}
        <div className="bg-slate-800/40 border border-slate-800 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative">
          
          {/* Alerta de Éxito */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>¡Mensaje enviado con éxito! Te responderé lo antes posible.</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Nombre Completo
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Correo Electrónico
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="john@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Mensaje
              </label>
              <textarea 
                id="message"
                rows={4}
                placeholder="Cuéntame sobre tu proyecto o vacante..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isFormInvalid}
              className={`w-full py-3 font-semibold rounded-lg shadow-lg transition-all pt-3 flex items-center justify-center gap-2
                ${isFormInvalid 
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed shadow-none" 
                  : "bg-sky-500 hover:bg-sky-600 text-slate-900 shadow-sky-500/10 hover:-translate-y-0.5"
                }`}
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;