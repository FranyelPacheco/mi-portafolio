import type {
  BudgetOption,
  DecisionMakerOption,
  StartDateOption,
  LeadScoreResult,
} from "../types/contact";

/**
 * Motor de scoring interno para clasificar leads entrantes según su potencial de conversión,
 * autoridad de decisión y urgencia de contratación.
 *
 * Clasificaciones:
 * - 🟢 Llama ya (tiene interes y quiere hacerlo pronto): Alta prioridad, alta urgencia o alto presupuesto.
 * - 🟡 Seguimiento (tiene interes pero sin prisa): Interés genuino, planificación a medio plazo.
 * - 🔴 Regálale algo útil (solo curiosea): Exploratorio, sin urgencia ni presupuesto definido.
 */
export const calculateLeadScore = (datos: {
  budget: BudgetOption | "";
  decisionMaker: DecisionMakerOption | "";
  startDate: StartDateOption | "";
}): LeadScoreResult => {
  // Regla absoluta: si el usuario indica explícitamente "solo estoy curioseando"
  if (datos.startDate === "solo estoy curioseando") {
    return {
      score: 1,
      category: "🔴 Regálale algo útil (solo curiosea)",
      priority: "BAJA",
      tag: "CURIOSO_EXPLORATORIO",
    };
  }

  let score = 0;

  // 1. Presupuesto estimado (1 a 3 puntos)
  if (datos.budget === "más de 1500$") {
    score += 3;
  } else if (datos.budget === "1000-1500$") {
    score += 2;
  } else if (datos.budget === "menos de 1000$") {
    score += 1;
  }

  // 2. Nivel de autoridad de decisión (1 a 3 puntos)
  if (datos.decisionMaker === "yo") {
    score += 3;
  } else if (datos.decisionMaker === "mi equipo de trabajo") {
    score += 2;
  } else if (datos.decisionMaker === "mi jefe") {
    score += 1;
  }

  // 3. Urgencia y horizonte temporal (2 a 4 puntos)
  if (datos.startDate === "esta semana") {
    score += 4;
  } else if (datos.startDate === "este mes") {
    score += 2;
  }

  // Evaluación y categorización estratégica:
  // - Si quiere empezar esta semana o acumula 7+ puntos -> 🟢 Llama ya
  if (datos.startDate === "esta semana" || score >= 7) {
    return {
      score,
      category: "🟢 Llama ya (tiene interes y quiere hacerlo pronto)",
      priority: "ALTA",
      tag: "PRIORITARIO_HOT_LEAD",
    };
  }

  // - Si tiene interés sólido y horizonte a corto plazo (score >= 4) -> 🟡 Seguimiento
  if (score >= 4) {
    return {
      score,
      category: "🟡 Seguimiento (tiene interes pero sin prisa)",
      priority: "MEDIA",
      tag: "SEGUIMIENTO_REGULAR",
    };
  }

  // - Resto de casos -> 🔴 Regálale algo útil
  return {
    score,
    category: "🔴 Regálale algo útil (solo curiosea)",
    priority: "BAJA",
    tag: "NURTURING_RECURSOS",
  };
};
