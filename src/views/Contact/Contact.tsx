import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Copy,
  Check,
  DollarSign,
  Users,
  Calendar,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useContactActions } from "../../hooks/useContactActions";
import { ScrollReveal } from "../../shared/components/ScrollReveal";
import type { BudgetOption, DecisionMakerOption, StartDateOption } from "../../types/contact";

interface DropdownOption<T extends string> {
  id: T;
  label: string;
  hint?: string;
  icon?: string;
}

const BUDGET_OPTIONS: DropdownOption<BudgetOption>[] = [
  { id: "menos de 1000$", label: "Menos de 1.000$", hint: "MVPs & landing pages rápidas" },
  { id: "1000-1500$", label: "1.000$ - 1.500$", hint: "Apps móviles o plataformas completas" },
  { id: "más de 1500$", label: "Más de 1.500$", hint: "Sistemas ERP & arquitecturas a medida" },
];

const DECISION_MAKER_OPTIONS: DropdownOption<DecisionMakerOption>[] = [
  { id: "yo", label: "Yo", hint: "Tomo la decisión técnica y comercial directamente", icon: "👤" },
  { id: "mi equipo de trabajo", label: "Mi equipo de trabajo", hint: "Evaluación conjunta con mi equipo técnico", icon: "👥" },
  { id: "mi jefe", label: "Mi jefe", hint: "Requiere aprobación de gerencia o directiva", icon: "🏢" },
];

const START_DATE_OPTIONS: DropdownOption<StartDateOption>[] = [
  { id: "esta semana", label: "Esta semana", hint: "Prioritario · Inicio y desarrollo inmediato" },
  { id: "este mes", label: "Este mes", hint: "Planificación a corto plazo con sprint definido" },
  { id: "solo estoy curioseando", label: "Solo estoy curioseando", hint: "Explorando estimaciones, alcance y viabilidad" },
];

/* ──────────────────────────────────────────────
   Componente de Menú Desplegable Reutilizable
────────────────────────────────────────────── */
interface CustomDropdownProps<T extends string> {
  id: string;
  label: string;
  placeholder: string;
  value: T | "";
  options: DropdownOption<T>[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (val: T) => void;
  icon: React.ReactNode;
  error?: string;
}

const CustomDropdown = <T extends string>({
  id,
  label,
  placeholder,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
  icon,
  error,
}: CustomDropdownProps<T>) => {
  const selectedOption = options.find((opt) => opt.id === value);

  return (
    <div className="relative space-y-1.5" data-dropdown-id={id}>
      <div className="flex justify-between items-center text-xs font-mono">
        <label
          htmlFor={`btn-${id}`}
          className="text-[var(--text-primary)] uppercase tracking-wider font-semibold flex items-center gap-1.5"
        >
          {icon}
          <span>{label} *</span>
        </label>
        {selectedOption && (
          <span className="text-blue-400 font-semibold">{selectedOption.label}</span>
        )}
      </div>

      {/* Botón Disparador del Menú Desplegable */}
      <button
        type="button"
        id={`btn-${id}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-xl text-left flex items-center justify-between transition-all duration-200 min-h-[46px] cursor-pointer shadow-sm ${
          error
            ? "border-rose-500"
            : isOpen
            ? "border-blue-500 ring-2 ring-blue-500/20 bg-white/[0.04]"
            : value
            ? "border-blue-500/50 text-[var(--text-primary)]"
            : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-white/20 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {selectedOption?.icon && <span className="text-base shrink-0">{selectedOption.icon}</span>}
          <div className="truncate">
            <span
              className={`text-sm font-sans block truncate ${
                selectedOption ? "text-white font-medium" : "text-zinc-400"
              }`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      {/* Menú Desplegable Flotante */}
      {isOpen && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#0e0f15]/95 backdrop-blur-2xl border border-white/12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-1.5 space-y-1 list-none m-0 animate-fade-in-up"
        >
          {options.map((opt) => {
            const isSelected = value === opt.id;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => onSelect(opt.id)}
                  className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600/20 border border-blue-500/40 text-white shadow-sm"
                      : "text-zinc-300 hover:bg-white/[0.08] hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    {opt.icon && <span className="text-base shrink-0">{opt.icon}</span>}
                    <div>
                      <span className="text-xs sm:text-sm font-medium block text-white">
                        {opt.label}
                      </span>
                      {opt.hint && (
                        <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                          {opt.hint}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? "border-blue-400 bg-blue-500 text-white"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="text-xs text-rose-400 font-mono mt-1">{error}</p>}
    </div>
  );
};

/* ──────────────────────────────────────────────
   Página Principal de Contacto
────────────────────────────────────────────── */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    name, setName,
    email, setEmail,
    problem, setProblem,
    budget, setBudget,
    decisionMaker, setDecisionMaker,
    startDate, setStartDate,
    honeypot, setHoneypot,
    errors, isSending, isSuccess, canSubmit,
    handleSubmit,
  } = useContactActions();

  // Cerrar menús desplegables al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown-id]")) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("franyel.pachecocv@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contacto" className="min-h-[calc(100dvh-130px)] pt-24 sm:pt-32 pb-20 px-4 sm:px-6 bg-[var(--bg-base)] flex items-center transition-colors duration-500 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 w-full items-start">

        {/* ── Columna izquierda: contexto ── */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CANAL DIRECTO // CONTACTO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight uppercase leading-[0.95]">
            Hablemos de tu{" "}
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">próximo</span>{" "}
            proyecto.
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            Completa estas breves preguntas desplegables con el problema que deseas resolver, tu presupuesto y fecha estimada. Te responderé directamente en menos de 24 horas con una propuesta técnica honesta y los pasos de ejecución.
          </p>

          {/* Datos de contacto rápidos */}
          <div className="border-t border-[var(--border-subtle)] pt-6 space-y-3 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[var(--text-muted)] gap-1">
              <span>DISPONIBILIDAD</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Inmediata · Remoto / Freelance
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[var(--text-muted)] gap-1">
              <span>UBICACIÓN</span>
              <span className="text-[var(--text-secondary)]">Venezuela (Zona Horaria GMT-4)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[var(--text-muted)] gap-1">
              <span>RESPUESTA</span>
              <span className="text-[var(--text-secondary)]">Menos de 24 horas garantizado</span>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] hover:border-blue-500/50 hover:bg-white/[0.06] text-xs font-mono text-[var(--text-secondary)] hover:text-white transition-all min-h-[44px] cursor-pointer"
                title="Copiar correo al portapapeles"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                )}
                <span>{copied ? "¡Correo copiado!" : "franyel.pachecocv@gmail.com"}</span>
              </button>

              <a
                href="https://www.linkedin.com/in/franyel-franyel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:underline uppercase tracking-wider min-h-[44px] text-xs font-mono"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Formulario Estructurado con Menús Desplegables ── */}
        <ScrollReveal className="lg:col-span-7" delay={0.08}>
          <div className="bg-[var(--bg-surface)] border border-[var(--border-strong)] p-6 sm:p-9 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all duration-300">
            
            {/* Mensaje de éxito */}
            {isSuccess && (
              <div
                role="status"
                className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3 text-sm rounded-2xl text-emerald-300"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-300">¡Mensaje y detalles recibidos con éxito!</p>
                  <p className="text-zinc-300 text-xs mt-0.5">
                    Revisaré tu problema y presupuesto para responderte en menos de 24 horas con una solución a medida.
                  </p>
                </div>
              </div>
            )}

            {/* Error general */}
            {errors.general && (
              <div
                role="alert"
                className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 flex items-start gap-3 text-sm rounded-2xl text-rose-300"
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p>{errors.general}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Campo Honeypot anti-spam */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Sitio Web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Fila: Nombre y Correo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nombre */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label htmlFor="contact-name" className="text-[var(--text-primary)] uppercase tracking-wider font-semibold">
                      Nombre completo *
                    </label>
                    <span className="text-[var(--text-muted)]">{name.length}/80</span>
                  </div>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    maxLength={80}
                    required
                    placeholder="Tu nombre o empresa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-xl text-sm font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors min-h-[44px] ${
                      errors.name ? "border-rose-500" : "border-[var(--border-subtle)]"
                    }`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                  {errors.name && (
                    <p id="error-name" className="text-xs text-rose-400 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label htmlFor="contact-email" className="text-[var(--text-primary)] uppercase tracking-wider font-semibold">
                      Correo electrónico *
                    </label>
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    maxLength={120}
                    required
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-xl text-sm font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors min-h-[44px] ${
                      errors.email ? "border-rose-500" : "border-[var(--border-subtle)]"
                    }`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                  />
                  {errors.email && (
                    <p id="error-email" className="text-xs text-rose-400 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* ¿Qué problema quiere resolver? */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="contact-problem" className="text-[var(--text-primary)] uppercase tracking-wider font-semibold">
                    ¿Qué problema quieres resolver? *
                  </label>
                  <span className="text-[var(--text-muted)]">{problem.length}/1500</span>
                </div>
                <textarea
                  id="contact-problem"
                  name="problem"
                  rows={3}
                  maxLength={1500}
                  required
                  placeholder="Describe la idea, reto técnico o producto que necesitas desarrollar (ej: App móvil con sincronización offline, refactorizar dashboard web, automatizar procesos...)"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className={`w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-xl text-sm font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors resize-none leading-relaxed ${
                    errors.problem ? "border-rose-500" : "border-[var(--border-subtle)]"
                  }`}
                  aria-invalid={Boolean(errors.problem)}
                  aria-describedby={errors.problem ? "error-problem" : undefined}
                />
                {errors.problem && (
                  <p id="error-problem" className="text-xs text-rose-400 font-mono">
                    {errors.problem}
                  </p>
                )}
              </div>

              {/* ── Cuestionario con Menús Desplegables ── */}
              <div className="space-y-4 pt-1">
                {/* 1. Menú Desplegable: ¿Cuánto piensa invertir? */}
                <CustomDropdown
                  id="budget"
                  label="¿Cuánto piensas invertir?"
                  placeholder="Selecciona el rango de inversión estimado..."
                  value={budget}
                  options={BUDGET_OPTIONS}
                  isOpen={openDropdown === "budget"}
                  onToggle={() => toggleDropdown("budget")}
                  onSelect={(val) => {
                    setBudget(val);
                    setOpenDropdown(null);
                  }}
                  icon={<DollarSign className="w-3.5 h-3.5 text-blue-400" />}
                  error={errors.budget}
                />

                {/* 2. Menú Desplegable: ¿Quién toma la decisión? */}
                <CustomDropdown
                  id="decisionMaker"
                  label="¿Quién toma la decisión?"
                  placeholder="Selecciona quién aprueba el proyecto..."
                  value={decisionMaker}
                  options={DECISION_MAKER_OPTIONS}
                  isOpen={openDropdown === "decisionMaker"}
                  onToggle={() => toggleDropdown("decisionMaker")}
                  onSelect={(val) => {
                    setDecisionMaker(val);
                    setOpenDropdown(null);
                  }}
                  icon={<Users className="w-3.5 h-3.5 text-blue-400" />}
                  error={errors.decisionMaker}
                />

                {/* 3. Menú Desplegable: ¿Cuándo quiere empezar? */}
                <CustomDropdown
                  id="startDate"
                  label="¿Cuándo quieres empezar?"
                  placeholder="Selecciona la fecha estimada de inicio..."
                  value={startDate}
                  options={START_DATE_OPTIONS}
                  isOpen={openDropdown === "startDate"}
                  onToggle={() => toggleDropdown("startDate")}
                  onSelect={(val) => {
                    setStartDate(val);
                    setOpenDropdown(null);
                  }}
                  icon={<Calendar className="w-3.5 h-3.5 text-blue-400" />}
                  error={errors.startDate}
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={!canSubmit || isSending}
                className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 min-h-[48px] cursor-pointer mt-3"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando propuesta...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Enviar Detalles del Proyecto</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
