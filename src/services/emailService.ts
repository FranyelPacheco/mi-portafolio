import type { ContactFormDTO } from "../types/contact";

// Sanitización estricta contra inyecciones XSS y caracteres de control
export const sanitizeText = (value: string): string => {
  return value
    .replace(/[<>'"&`/\\]/g, "") // Remueve caracteres propensos a XSS
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remueve caracteres de control ASCII
    .trim();
};

/**
 * Servicio de envío de mensajes mediante Resend (vía Serverless Function /api/send).
 * Garantiza que las claves de API permanezcan 100% protegidas en el servidor.
 */
export const emailService = {
  enviarMensaje: async (datos: ContactFormDTO): Promise<void> => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.error || `Error ${response.status}: No se pudo procesar el envío del mensaje.`
      );
    }
  },
};
