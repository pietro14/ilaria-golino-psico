import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "p.meloni14@gmail.com";
const FROM = "Dott.ssa Ilaria Golino <ilaria@ilariagolino.it>";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nome, email, telefono, motivo, disponibilita, messaggio } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email sono obbligatori" });
  }

  try {
    // Send both emails in parallel
    const [therapistResult, patientResult] = await Promise.allSettled([
      // Email notification to the therapist
      resend.emails.send({
        from: FROM,
        to: RECIPIENT,
        replyTo: email,
        subject: `Nuova richiesta colloquio — ${motivo || "Primo contatto"}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #8B6F5E; border-bottom: 2px solid #E8D5C4; padding-bottom: 12px;">
              Nuova richiesta dal sito
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #5C4A3A; width: 140px;">Nome</td>
                <td style="padding: 8px 12px;">${escapeHtml(nome)}</td>
              </tr>
              <tr style="background: #FAF6F1;">
                <td style="padding: 8px 12px; font-weight: bold; color: #5C4A3A;">Email</td>
                <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              ${telefono ? `<tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #5C4A3A;">Telefono</td>
                <td style="padding: 8px 12px;"><a href="tel:${escapeHtml(telefono)}">${escapeHtml(telefono)}</a></td>
              </tr>` : ""}
              ${motivo ? `<tr style="background: #FAF6F1;">
                <td style="padding: 8px 12px; font-weight: bold; color: #5C4A3A;">Motivo</td>
                <td style="padding: 8px 12px;">${escapeHtml(motivo)}</td>
              </tr>` : ""}
              ${disponibilita ? `<tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #5C4A3A;">Disponibilità</td>
                <td style="padding: 8px 12px;">${escapeHtml(disponibilita)}</td>
              </tr>` : ""}
            </table>
            ${messaggio ? `
              <div style="background: #FAF6F1; border-left: 3px solid #8B6F5E; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0 0 8px; font-weight: bold; color: #5C4A3A;">Messaggio:</p>
                <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(messaggio)}</p>
              </div>
            ` : ""}
            <p style="color: #999; font-size: 12px; margin-top: 30px;">
              Inviato dal form di contatto su ilariagolino.it
            </p>
          </div>
        `,
      }),
      // Confirmation email to the patient
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Ho ricevuto la tua richiesta — Dott.ssa Ilaria Golino",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #8B6F5E; border-bottom: 2px solid #E8D5C4; padding-bottom: 12px;">
              Grazie per avermi contattata, ${escapeHtml(nome)}
            </h2>
            <p style="color: #5C4A3A; line-height: 1.7; margin: 20px 0;">
              Ho ricevuto la tua richiesta e ti risponderò il prima possibile, di solito entro 24 ore.
            </p>
            <p style="color: #5C4A3A; line-height: 1.7; margin: 20px 0;">
              Nel frattempo, se preferisci puoi anche scrivermi direttamente su WhatsApp per una risposta più rapida:
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/393515499417" style="display: inline-block; background: #25D366; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold;">
                Scrivimi su WhatsApp
              </a>
            </div>
            <p style="color: #5C4A3A; line-height: 1.7;">
              A presto,<br />
              <strong>Dott.ssa Ilaria Golino</strong><br />
              <span style="color: #999; font-size: 14px;">Psicologa Psicoterapeuta — Analista Transazionale</span>
            </p>
            <hr style="border: none; border-top: 1px solid #E8D5C4; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              Via Tuscolana 1168, 00172 Roma<br />
              Tel: 351 549 9417
            </p>
          </div>
        `,
      }),
    ]);

    if (therapistResult.status === "rejected") {
      console.error("Errore email terapeuta:", therapistResult.reason);
    }
    if (patientResult.status === "rejected") {
      console.error("Errore email paziente:", patientResult.reason);
    }

    if (therapistResult.status === "rejected" && patientResult.status === "rejected") {
      return res.status(500).json({ error: "Errore nell'invio delle email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Errore nell'invio dell'email" });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
