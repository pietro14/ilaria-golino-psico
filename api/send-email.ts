import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "Ilaria.golino3@gmail.com";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nome, email, telefono, motivo, disponibilita, messaggio } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email sono obbligatori" });
  }

  try {
    await resend.emails.send({
      from: "Sito Web <noreply@ilariagolino.it>",
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
    });

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
