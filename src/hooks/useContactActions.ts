import { useState } from "react";
import * as z from "zod/mini";
import confetti from "canvas-confetti";
import { emailService, sanitizeText } from "../services/emailService";
import type {
  ContactFormErrors,
  BudgetOption,
  DecisionMakerOption,
  StartDateOption,
} from "../types/contact";

// Schema Zod para validación estricta del nuevo flujo de contacto
// zod/mini: misma validación que zod completo, pero tree-shakeable (el chunk de Contacto baja a la mitad)
const contactSchema = z.object({
  name: z.pipe(
    z.string().check(z.minLength(2, "Ingresa tu nombre (mínimo 2 caracteres)."), z.maxLength(80, "El nombre no puede superar los 80 caracteres.")),
    z.transform((v: string) => sanitizeText(v))
  ),
  email: z.pipe(
    z.string().check(z.maxLength(120, "El correo no puede superar los 120 caracteres.")).check(z.email("Ingresa un correo electrónico válido.")),
    z.transform((v: string) => sanitizeText(v))
  ),
  problem: z.pipe(
    z.string().check(z.minLength(10, "Describe brevemente el problema que quieres resolver (mínimo 10 caracteres)."), z.maxLength(1500, "La descripción no puede superar los 1500 caracteres.")),
    z.transform((v: string) => sanitizeText(v))
  ),
  budget: z.enum(["menos de 1000$", "1000-1500$", "más de 1500$"], { error: "Selecciona el rango de inversión estimado." }),
  decisionMaker: z.enum(["yo", "mi equipo de trabajo", "mi jefe"], { error: "Indica quién toma la decisión del proyecto." }),
  startDate: z.enum(["esta semana", "este mes", "solo estoy curioseando"], { error: "Selecciona cuándo te gustaría empezar." }),
});

type ContactSchema = z.infer<typeof contactSchema>;

const COOLDOWN_MS = 60_000;
const STORAGE_KEY = "portafolio_last_contact_ts";

export interface UseContactActionsReturn {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  problem: string;
  setProblem: (value: string) => void;
  budget: BudgetOption | "";
  setBudget: (value: BudgetOption) => void;
  decisionMaker: DecisionMakerOption | "";
  setDecisionMaker: (value: DecisionMakerOption) => void;
  startDate: StartDateOption | "";
  setStartDate: (value: StartDateOption) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
  errors: ContactFormErrors;
  isSending: boolean;
  isSuccess: boolean;
  canSubmit: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useContactActions = (): UseContactActionsReturn => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [budget, setBudget] = useState<BudgetOption | "">("");
  const [decisionMaker, setDecisionMaker] = useState<DecisionMakerOption | "">("");
  const [startDate, setStartDate] = useState<StartDateOption | "">("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const canSubmit =
    name.trim().length >= 2 &&
    email.trim().length >= 5 &&
    problem.trim().length >= 10 &&
    Boolean(budget) &&
    Boolean(decisionMaker) &&
    Boolean(startDate) &&
    !isSending;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Honeypot anti-spam
    if (honeypot.trim().length > 0) {
      setIsSuccess(true);
      return;
    }

    // Cooldown de 60s entre envíos
    const ultimoEnvio = Number(sessionStorage.getItem(STORAGE_KEY) ?? "0");
    const tiempoTranscurrido = Date.now() - ultimoEnvio;
    if (ultimoEnvio > 0 && tiempoTranscurrido < COOLDOWN_MS) {
      const seg = Math.ceil((COOLDOWN_MS - tiempoTranscurrido) / 1000);
      setErrors({ general: `Ya enviaste un mensaje recientemente. Espera ${seg}s antes de enviar otro.` });
      return;
    }

    // Validación con Zod
    const result = contactSchema.safeParse({
      name,
      email,
      problem,
      budget,
      decisionMaker,
      startDate,
    });

    if (!result.success) {
      const flat: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = String(issue.path[0]);
        flat[field] ??= issue.message;
      }
      const fieldErrors: ContactFormErrors = {
        name: flat.name,
        email: flat.email,
        problem: flat.problem,
        budget: flat.budget,
        decisionMaker: flat.decisionMaker,
        startDate: flat.startDate,
      };
      setErrors(fieldErrors);
      return;
    }

    setIsSending(true);

    try {
      const validated = result.data as ContactSchema;
      await emailService.enviarMensaje(validated);
      sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
      setIsSending(false);
      setIsSuccess(true);

      // Limpiar formulario tras envío exitoso
      setName("");
      setEmail("");
      setProblem("");
      setBudget("");
      setDecisionMaker("");
      setStartDate("");

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduceMotion) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ["#3B82F6", "#60A5FA", "#FFFFFF", "#1D4ED8"],
        });
      }

      setTimeout(() => setIsSuccess(false), 7000);
    } catch (error) {
      console.error("[Error al enviar mensaje de contacto]:", error);
      setIsSending(false);
      setErrors({
        general: "No se pudo enviar el mensaje en este momento. Verifica tu conexión o escríbeme directamente a mi correo.",
      });
    }
  };

  return {
    name, setName,
    email, setEmail,
    problem, setProblem,
    budget, setBudget,
    decisionMaker, setDecisionMaker,
    startDate, setStartDate,
    honeypot, setHoneypot,
    errors, isSending, isSuccess, canSubmit,
    handleSubmit,
  };
};
