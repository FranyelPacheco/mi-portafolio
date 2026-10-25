import { Resend } from "resend";

export type BudgetOption = "menos de 1000$" | "1000-1500$" | "más de 1500$";
export type DecisionMakerOption = "yo" | "mi equipo de trabajo" | "mi jefe";
export type StartDateOption = "esta semana" | "este mes" | "solo estoy curioseando";

export type LeadClassification =
  | "🟢 Llama ya (tiene interes y quiere hacerlo pronto)"
  | "🟡 Seguimiento (tiene interes pero sin prisa)"
  | "🔴 Regálale algo útil (solo curiosea)";

interface LeadScoreResult {
  score: number;
  category: LeadClassification;
  priority: "ALTA" | "MEDIA" | "BAJA";
  tag: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

const calculateLeadScore = (datos: {
  budget: string;
  decisionMaker: string;
  startDate: string;
}): LeadScoreResult => {
  if (datos.startDate === "solo estoy curioseando") {
    return {
      score: 1,
      category: "🔴 Regálale algo útil (solo curiosea)",
      priority: "BAJA",
      tag: "CURIOSO_EXPLORATORIO",
      badgeBg: "#fef2f2",
      badgeBorder: "#f87171",
      badgeText: "#991b1b",
    };
  }

  let score = 0;

  if (datos.budget === "más de 1500$") score += 3;
  else if (datos.budget === "1000-1500$") score += 2;
  else if (datos.budget === "menos de 1000$") score += 1;

  if (datos.decisionMaker === "yo") score += 3;
  else if (datos.decisionMaker === "mi equipo de trabajo") score += 2;
  else if (datos.decisionMaker === "mi jefe") score += 1;

  if (datos.startDate === "esta semana") score += 4;
  else if (datos.startDate === "este mes") score += 2;

  if (datos.startDate === "esta semana" || score >= 7) {
    return {
      score,
      category: "🟢 Llama ya (tiene interes y quiere hacerlo pronto)",
      priority: "ALTA",
      tag: "PRIORITARIO_HOT_LEAD",
      badgeBg: "#f0fdf4",
      badgeBorder: "#4ade80",
      badgeText: "#166534",
    };
  }

  if (score >= 4) {
    return {
      score,
      category: "🟡 Seguimiento (tiene interes pero sin prisa)",
      priority: "MEDIA",
      tag: "SEGUIMIENTO_REGULAR",
      badgeBg: "#fefce8",
      badgeBorder: "#facc15",
      badgeText: "#854d0e",
    };
  }

  return {
    score,
    category: "🔴 Regálale algo útil (solo curiosea)",
    priority: "BAJA",
    tag: "NURTURING_RECURSOS",
    badgeBg: "#fef2f2",
    badgeBorder: "#f87171",
    badgeText: "#991b1b",
  };
};

const sanitize = (str: unknown): string => {
  if (typeof str !== "string") return "";
  return str.replace(/[<>'"&`/\\]/g, "").trim();
};

export default async function handler(req: any, res: any) {
  // CORS & Options
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido. Usa POST." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const problem = sanitize(body.problem || body.message);
    const budget = sanitize(body.budget);
    const decisionMaker = sanitize(body.decisionMaker);
    const startDate = sanitize(body.startDate);

    // Validación básica de campos requeridos
    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Nombre requerido (mínimo 2 caracteres)." });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Correo electrónico inválido." });
    }
    if (!problem || problem.length < 10) {
      return res.status(400).json({ error: "Descripción del problema requerida (mínimo 10 caracteres)." });
    }

    // Lead scoring automático
    const leadScore = calculateLeadScore({ budget, decisionMaker, startDate });

    let apiKey = process.env.RESEND_API_KEY;

    // Fallback para entorno local si no se inyectó en process.env
    if (!apiKey) {
      try {
        const fs = await import("fs");
        const path = await import("path");
        const envPath = path.resolve(process.cwd(), ".env");
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, "utf-8");
          const match = content.match(/RESEND_API_KEY=(.*)/);
          if (match && match[1]) {
            apiKey = match[1].trim();
          }
        }
      } catch {
        // Ignorar si no está en entorno Node con fs
      }
    }

    // Si aún no se configuró RESEND_API_KEY en local o Vercel
    if (!apiKey) {
      console.warn(
        "⚠️ [Resend]: RESEND_API_KEY no encontrada en las variables de entorno. Simulación de envío exitosa."
      );
      return res.status(200).json({
        success: true,
        simulated: true,
        leadScore,
        message: "Mensaje procesado en modo simulación local (sin API Key).",
      });
    }

    const resend = new Resend(apiKey);

    // Plantilla HTML profesional con estética Dark Titanium y Lead Scoring
    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo Lead - Portafolio</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0c10; color: #f4f4f5; margin: 0; padding: 32px 16px;">
  <div style="max-width: 600px; margin: 0 auto; background: #13141b; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);">
    
    <!-- Header -->
    <div style="padding: 28px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 70%);">
      <div style="font-size: 11px; font-family: monospace; letter-spacing: 2px; color: #60a5fa; text-transform: uppercase; margin-bottom: 6px;">
        PORTAFOLIO // CONTACTO DIRECTO
      </div>
      <h1 style="font-size: 22px; font-weight: 800; color: #ffffff; margin: 0 0 12px 0; letter-spacing: -0.5px;">
        Nuevo Mensaje de ${name}
      </h1>
      
      <!-- Lead Scoring Tag -->
      <div style="display: inline-block; padding: 6px 14px; border-radius: 100px; background-color: ${leadScore.badgeBg}; border: 1px solid ${leadScore.badgeBorder}; color: ${leadScore.badgeText}; font-size: 12px; font-weight: bold; font-family: monospace;">
        ${leadScore.category} · Score: ${leadScore.score}/10
      </div>
    </div>

    <!-- Body -->
    <div style="padding: 32px;">
      
      <!-- Datos del remitente -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #a1a1aa; font-family: monospace; width: 140px;">NOMBRE:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #a1a1aa; font-family: monospace;">CORREO:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #60a5fa;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
        </tr>
      </table>

      <!-- Problema a resolver -->
      <div style="margin-bottom: 24px;">
        <div style="font-size: 12px; font-family: monospace; color: #a1a1aa; text-transform: uppercase; margin-bottom: 8px;">
          ¿QUÉ PROBLEMA QUIERE RESOLVER?
        </div>
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">
${problem}
        </div>
      </div>

      <!-- Parámetros del Cuestionario -->
      <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 14px; padding: 18px; margin-bottom: 28px;">
        <div style="font-size: 11px; font-family: monospace; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
          PARÁMETROS DEL PROYECTO
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr>
            <td style="padding: 6px 0; color: #a1a1aa;">💰 Inversión estimada:</td>
            <td style="padding: 6px 0; color: #ffffff; font-weight: bold; text-align: right;">${budget || "No especificada"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #a1a1aa;">👥 Tomador de decisión:</td>
            <td style="padding: 6px 0; color: #ffffff; font-weight: bold; text-align: right;">${decisionMaker || "No especificado"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #a1a1aa;">📅 Fecha de inicio deseada:</td>
            <td style="padding: 6px 0; color: #ffffff; font-weight: bold; text-align: right;">${startDate || "No especificada"}</td>
          </tr>
        </table>
      </div>

      <!-- Action Button -->
      <div style="text-align: center;">
        <a href="mailto:${email}?subject=Re:%20Contacto%20Portafolio%20-%20Franyel%20Pacheco" style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 100px; font-size: 13px; font-weight: 600; font-family: monospace; letter-spacing: 0.5px;">
          Responder Directamente a ${name}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding: 16px 32px; background: rgba(0, 0, 0, 0.4); border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 11px; font-family: monospace; color: #71717a; text-align: center;">
      Enviado automáticamente vía Resend API · Portafolio de Franyel Pacheco
    </div>

  </div>
</body>
</html>
    `.trim();

    const textEmail = `
[${leadScore.category}]
Nuevo contacto desde tu portafolio:

Nombre: ${name}
Correo: ${email}

¿Qué problema quiere resolver?
${problem}

Parámetros del proyecto:
- Inversión estimada: ${budget}
- Tomador de decisión: ${decisionMaker}
- Fecha de inicio deseada: ${startDate}

Score Interno: ${leadScore.score}/10 | Prioridad: ${leadScore.priority} | Tag: ${leadScore.tag}
    `.trim();

    const recipient = process.env.RECIPIENT_EMAIL || "franyel.pachecocv@gmail.com";

    const { data: sendData, error: sendError } = await resend.emails.send({
      from: "Portafolio Franyel <onboarding@resend.dev>",
      to: [recipient],
      reply_to: email,
      subject: `[${leadScore.category}] Lead: ${name}`,
      html: htmlEmail,
      text: textEmail,
    });

    if (sendError) {
      console.error("[Error Resend API]:", sendError);
      return res.status(400).json({
        error: sendError.message || "Error al enviar el correo a través de Resend.",
      });
    }

    return res.status(200).json({ success: true, data: sendData, leadScore });
  } catch (err: any) {
    console.error("[Error en handler /api/send]:", err);
    return res.status(500).json({
      error: err?.message || "Ocurrió un error al procesar el envío de correo con Resend.",
    });
  }
}
