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
      badgeBg: "#1A2234",
      badgeBorder: "#8190A8",
      badgeText: "#C7D0DE",
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
      badgeBg: "#2A1F08",
      badgeBorder: "#F59E0B",
      badgeText: "#FCD34D",
    };
  }

  if (score >= 4) {
    return {
      score,
      category: "🟡 Seguimiento (tiene interes pero sin prisa)",
      priority: "MEDIA",
      tag: "SEGUIMIENTO_REGULAR",
      badgeBg: "#0F2147",
      badgeBorder: "#3B82F6",
      badgeText: "#93C5FD",
    };
  }

  return {
    score,
    category: "🔴 Regálale algo útil (solo curiosea)",
    priority: "BAJA",
    tag: "NURTURING_RECURSOS",
    badgeBg: "#1A2234",
    badgeBorder: "#8190A8",
    badgeText: "#C7D0DE",
  };
};

const SITE_URL = process.env.SITE_URL || "https://mi-portafolio-seven-psi.vercel.app";

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

    // Plantilla con la marca Programador en camino (Hyper Cobalt). Tablas y estilos en línea: es lo que soportan los clientes de correo.
    const MONO = "'JetBrains Mono','SFMono-Regular',Consolas,Menlo,monospace";
    const segments = Array.from({ length: 10 }, (_, i) =>
      `<td width="14" height="6" style="width:14px;height:6px;border-radius:3px;background:${i < leadScore.score ? leadScore.badgeBorder : "#1B2640"};font-size:0;line-height:0;">&nbsp;</td><td width="3" style="width:3px;font-size:0;">&nbsp;</td>`
    ).join("");
    const card = (label: string, value: string) => `
            <td valign="top" style="background:#141C30;border:1px solid #1B2A4A;border-radius:12px;padding:14px;">
              <div style="font-family:${MONO};font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#8190A8;margin-bottom:6px;">${label}</div>
              <div style="font-size:14px;font-weight:700;color:#FFFFFF;line-height:1.3;">${value}</div>
            </td>`;

    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Nuevo mensaje · Programador en camino</title>
</head>
<body style="margin:0;padding:0;background:#06080E;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#06080E;">${name} te escribió desde tu portafolio · ${leadScore.category}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#06080E;">
    <tr><td align="center" style="padding:32px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#0C111E;border:1px solid #1E3A8A;border-radius:20px;overflow:hidden;font-family:-apple-system,'Segoe UI',Inter,Roboto,Helvetica,Arial,sans-serif;color:#FFFFFF;">

        <!-- Cabecera -->
        <tr><td style="padding:28px 32px 20px 32px;background:#0C111E;background-image:linear-gradient(135deg,#0C111E 0%,#14234A 100%);border-bottom:1px solid #1B2A4A;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td valign="middle" style="padding-right:16px;">
              <img src="${SITE_URL}/email-logo.png" width="60" height="60" alt="Programador en camino" style="display:block;width:60px;height:60px;border-radius:30px;border:2px solid #3B82F6;">
            </td>
            <td valign="middle">
              <div style="font-family:${MONO};font-size:11px;letter-spacing:2px;color:#60A5FA;text-transform:uppercase;margin-bottom:6px;">Programador en camino // Contacto</div>
              <div style="font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">Nuevo mensaje de ${name}</div>
            </td>
          </tr></table>
        </td></tr>

        <!-- Prioridad y score -->
        <tr><td style="padding:20px 32px 0 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
            <td>
              <span style="display:inline-block;padding:7px 14px;border-radius:100px;background:${leadScore.badgeBg};border:1px solid ${leadScore.badgeBorder};color:${leadScore.badgeText};font-family:${MONO};font-size:12px;font-weight:700;">${leadScore.category}</span>
            </td>
          </tr><tr>
            <td style="padding-top:14px;">
              <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="font-family:${MONO};font-size:11px;color:#8190A8;padding-right:10px;">SCORE ${leadScore.score}/10</td>
                ${segments}
              </tr></table>
            </td>
          </tr></table>
        </td></tr>

        <!-- Remitente -->
        <tr><td style="padding:24px 32px 0 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;"><tr>
            ${card("Nombre", name)}
            <td width="10" style="width:10px;font-size:0;">&nbsp;</td>
            ${card("Correo", `<a href="mailto:${email}" style="color:#93C5FD;text-decoration:none;">${email}</a>`)}
          </tr></table>
        </td></tr>

        <!-- Problema -->
        <tr><td style="padding:24px 32px 0 32px;">
          <div style="font-family:${MONO};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#60A5FA;margin-bottom:10px;">¿Qué problema quiere resolver?</div>
          <div style="background:#141C30;border-left:3px solid #3B82F6;border-radius:6px 12px 12px 6px;padding:16px 18px;font-size:15px;line-height:1.65;color:#E2E8F0;white-space:pre-wrap;">${problem}</div>
        </td></tr>

        <!-- Parámetros del proyecto -->
        <tr><td style="padding:24px 32px 0 32px;">
          <div style="font-family:${MONO};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#60A5FA;margin-bottom:10px;">Parámetros del proyecto</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;"><tr>
            ${card("Inversión", budget || "No especificada")}
            <td width="8" style="width:8px;font-size:0;">&nbsp;</td>
            ${card("Decide", decisionMaker || "No especificado")}
            <td width="8" style="width:8px;font-size:0;">&nbsp;</td>
            ${card("Inicio", startDate || "No especificada")}
          </tr></table>
        </td></tr>

        <!-- Acción -->
        <tr><td align="center" style="padding:30px 32px 32px 32px;">
          <a href="mailto:${email}?subject=Re:%20Contacto%20Portafolio%20-%20Franyel%20Pacheco" style="display:inline-block;background:#2563EB;color:#FFFFFF;text-decoration:none;padding:14px 30px;border-radius:100px;font-size:14px;font-weight:700;">Responder a ${name} &rarr;</a>
          <div style="margin-top:14px;font-family:${MONO};font-size:11px;"><a href="${SITE_URL}" style="color:#93C5FD;text-decoration:none;">ver portafolio &#8599;</a></div>
        </td></tr>

        <!-- Pie -->
        <tr><td align="center" style="padding:18px 32px;background:#080C16;border-top:1px solid #1B2A4A;">
          <div style="font-family:${MONO};font-size:12px;color:#93C5FD;">@programadorencamino</div>
          <div style="font-size:12px;color:#8190A8;margin-top:6px;">Hoy programamos bien, pero mañana lo haremos mejor.</div>
          <div style="font-family:${MONO};font-size:10px;color:#566175;margin-top:10px;">Enviado automáticamente desde tu portafolio</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
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
      replyTo: email,
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
