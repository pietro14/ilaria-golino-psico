import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const giorni = ["Lun", "Mar", "Mer", "Gio", "Ven"];
const fasce = [
  { label: "Mattina", range: "9-12" },
  { label: "Pomeriggio", range: "14-17" },
  { label: "Sera", range: "17-20" },
];

const motivoOptions = [
  "Dipendenza affettiva",
  "Difficoltà relazionali",
  "Disturbi alimentari",
  "Ansia e stress",
  "Disturbi di personalità",
  "Altro",
];

type Status = "idle" | "sending" | "sent" | "error";

const ContactForm = ({ compact }: { compact?: boolean } = {}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [motivo, setMotivo] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [disponibilita, setDisponibilita] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  // When status changes to "sent", scroll to keep the confirmation visible
  useEffect(() => {
    if (status === "sent" && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const toggleSlot = (slot: string) => {
    setDisponibilita((prev) => {
      const next = new Set(prev);
      if (next.has(slot)) next.delete(slot);
      else next.add(slot);
      return next;
    });
  };

  const formatDisponibilita = () => {
    if (disponibilita.size === 0) return "";
    return Array.from(disponibilita)
      .sort()
      .map((s) => {
        const [giorno, fascia] = s.split("-");
        return `${giorno} ${fascia}`;
      })
      .join(", ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          telefono,
          motivo,
          disponibilita: formatDisponibilita(),
          messaggio,
        }),
      });

      if (!res.ok) throw new Error("Errore invio");

      setStatus("sent");
      setNome("");
      setEmail("");
      setTelefono("");
      setMotivo("");
      setMessaggio("");
      setDisponibilita(new Set());
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div ref={containerRef} className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-serif text-foreground">Richiesta inviata!</h3>
        <p className="text-muted-foreground">
          Grazie per avermi contattata. Ti risponderò il prima possibile, di solito entro 24 ore.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-medium hover:opacity-80 transition-opacity text-sm"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor={`nome-${compact ? "c" : "f"}`} className="text-sm font-medium text-foreground">
            Nome e cognome *
          </label>
          <input
            id={`nome-${compact ? "c" : "f"}`}
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Il tuo nome"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`email-${compact ? "c" : "f"}`} className="text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            id={`email-${compact ? "c" : "f"}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="La tua email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor={`telefono-${compact ? "c" : "f"}`} className="text-sm font-medium text-foreground">
            Telefono
          </label>
          <input
            id={`telefono-${compact ? "c" : "f"}`}
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Il tuo numero"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`motivo-${compact ? "c" : "f"}`} className="text-sm font-medium text-foreground">
            Motivo del contatto
          </label>
          <select
            id={`motivo-${compact ? "c" : "f"}`}
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            <option value="">Seleziona...</option>
            {motivoOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Day/time availability grid */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Quando sei disponibile?
        </label>
        <p className="text-xs text-muted-foreground">
          Clicca sulle fasce orarie in cui preferisci essere ricontattata
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-xs text-muted-foreground font-normal text-left" />
                {giorni.map((g) => (
                  <th
                    key={g}
                    className="p-2 text-xs font-medium text-muted-foreground text-center"
                  >
                    {g}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fasce.map((fascia) => (
                <tr key={fascia.label}>
                  <td className="p-2 text-xs text-muted-foreground whitespace-nowrap">
                    {fascia.label}
                    <span className="hidden sm:inline text-muted-foreground/60">
                      {" "}({fascia.range})
                    </span>
                  </td>
                  {giorni.map((g) => {
                    const slot = `${g}-${fascia.label}`;
                    const selected = disponibilita.has(slot);
                    return (
                      <td key={slot} className="p-1 text-center">
                        <button
                          type="button"
                          onClick={() => toggleSlot(slot)}
                          className={`w-full h-10 rounded-lg border-2 transition-all duration-150 ${
                            selected
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-background border-border/50 hover:border-primary/30 text-transparent"
                          }`}
                          aria-label={`${g} ${fascia.label}`}
                          aria-pressed={selected}
                        >
                          {selected && (
                            <svg className="w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={`messaggio-${compact ? "c" : "f"}`} className="text-sm font-medium text-foreground">
          Messaggio
        </label>
        <textarea
          id={`messaggio-${compact ? "c" : "f"}`}
          rows={4}
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
          placeholder="Raccontami brevemente cosa stai vivendo o cosa vorresti affrontare..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>
            Si è verificato un errore. Riprova oppure{" "}
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              scrivimi su WhatsApp
            </a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Invia richiesta
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        I tuoi dati verranno utilizzati esclusivamente per ricontattarti.
      </p>
    </form>
  );
};

export default ContactForm;
