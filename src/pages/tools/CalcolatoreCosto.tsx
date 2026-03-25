import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Calculator, MessageCircle, Euro, CalendarDays, TrendingDown } from "lucide-react";

const COST_PER_SESSION = 60;

const CalcolatoreCosto = () => {
  const [frequency, setFrequency] = useState<"settimanale" | "bisettimanale">(
    "settimanale"
  );
  const [months, setMonths] = useState(6);

  const sessionsPerMonth = frequency === "settimanale" ? 4 : 2;
  const monthlyCost = sessionsPerMonth * COST_PER_SESSION;
  const totalCost = monthlyCost * months;
  const dailyCost = totalCost / (months * 30);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              Quanto costa la terapia?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un calcolatore trasparente per pianificare il tuo investimento nel
              benessere psicologico. Nessuna sorpresa, solo chiarezza.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl mx-auto space-y-10">
          {/* Cost per session */}
          <div className="text-center">
            <p className="text-muted-foreground mb-1">Costo per seduta</p>
            <p className="text-4xl font-serif text-foreground font-semibold">
              {COST_PER_SESSION}&euro;
            </p>
          </div>

          {/* Frequency toggle */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Frequenza delle sedute
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["settimanale", "bisettimanale"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`p-4 rounded-2xl border-2 text-center transition-all ${
                    frequency === f
                      ? "border-primary bg-primary/5 shadow-soft"
                      : "border-border/50 bg-card hover:border-primary/30"
                  }`}
                >
                  <p className="font-medium text-foreground capitalize">{f}</p>
                  <p className="text-sm text-muted-foreground">
                    {f === "settimanale" ? "4 sedute/mese" : "2 sedute/mese"}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Duration slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Durata del percorso
              </label>
              <span className="text-primary font-serif text-lg font-semibold">
                {months} mesi
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={24}
              step={3}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>3 mesi</span>
              <span>12 mesi</span>
              <span>24 mesi</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-2">
              <CalendarDays className="w-6 h-6 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Costo mensile</p>
              <p className="text-2xl font-serif font-semibold text-foreground">
                {monthlyCost}&euro;
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary text-center space-y-2">
              <Euro className="w-6 h-6 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Costo totale</p>
              <p className="text-3xl font-serif font-semibold text-foreground">
                {totalCost.toLocaleString("it-IT")}&euro;
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center space-y-2">
              <TrendingDown className="w-6 h-6 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Costo giornaliero</p>
              <p className="text-2xl font-serif font-semibold text-foreground">
                {dailyCost.toFixed(2).replace(".", ",")}&euro;
              </p>
            </div>
          </div>

          {/* Deductibility note */}
          <div className="bg-secondary/40 rounded-2xl p-6 space-y-2">
            <p className="font-medium text-foreground">
              Detraibilità fiscale
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le spese per la psicoterapia sono detraibili al 19% nella
              dichiarazione dei redditi come spese sanitarie. Su un totale di{" "}
              <strong>{totalCost.toLocaleString("it-IT")}&euro;</strong>,
              potresti recuperare fino a{" "}
              <strong>
                {Math.round(totalCost * 0.19).toLocaleString("it-IT")}&euro;
              </strong>
              .
            </p>
          </div>

          {/* Quote */}
          <div className="text-center py-6">
            <p className="font-script italic text-2xl text-primary leading-relaxed">
              &ldquo;Investire nella propria salute mentale non è un lusso, è un atto
              d'amore verso te stessa.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Il primo colloquio conoscitivo serve per capire insieme se posso
                esserti d'aiuto. Nessun impegno.
              </p>
              <a
                href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sul%20costo%20e%20la%20frequenza%20delle%20sedute."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Chiedi informazioni su WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CalcolatoreCosto;
