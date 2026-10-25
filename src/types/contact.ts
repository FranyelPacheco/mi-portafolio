export type BudgetOption = "menos de 1000$" | "1000-1500$" | "más de 1500$";
export type DecisionMakerOption = "yo" | "mi equipo de trabajo" | "mi jefe";
export type StartDateOption = "esta semana" | "este mes" | "solo estoy curioseando";

export type LeadClassification =
  | "🟢 Llama ya (tiene interes y quiere hacerlo pronto)"
  | "🟡 Seguimiento (tiene interes pero sin prisa)"
  | "🔴 Regálale algo útil (solo curiosea)";

export interface LeadScoreResult {
  score: number;
  category: LeadClassification;
  priority: "ALTA" | "MEDIA" | "BAJA";
  tag: string;
}

export interface ContactFormDTO {
  name: string;
  email: string;
  problem: string;
  budget: BudgetOption | "";
  decisionMaker: DecisionMakerOption | "";
  startDate: StartDateOption | "";
  message?: string;
  leadScore?: LeadScoreResult;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  problem?: string;
  budget?: string;
  decisionMaker?: string;
  startDate?: string;
  general?: string;
}
