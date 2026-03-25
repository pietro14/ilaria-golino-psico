import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MessageCircle,
  ClipboardCheck,
  ArrowLeft,
  ArrowRight,
  Heart,
  UtensilsCrossed,
  RotateCcw,
} from "lucide-react";

const relazioniStatements = [
  "Ho paura di essere abbandonata e faccio di tutto per evitarlo",
  "Il mio umore dipende quasi interamente dalla relazione con il partner",
  "Tendo a mettere sempre i bisogni dell'altro prima dei miei",
  "Mi sento vuota o persa quando non sono in una relazione",
  "Accetto comportamenti che mi fanno stare male pur di non perdere l'altro",
  "Sono molto gelosa e ho bisogno di continue rassicurazioni",
  "Mi ritrovo spesso nello stesso tipo di relazione dolorosa",
  "Faccio fatica a dire di no o a mettere dei confini",
  "Sento di non valere abbastanza senza qualcuno accanto",
  "Mi è capitato di restare in relazioni che sapevo essere tossiche",
];

const alimentariStatements = [
  "Penso spesso al cibo, al peso o alla forma del mio corpo",
  "Uso il cibo per gestire le emozioni",
  "Mi sento in colpa dopo aver mangiato",
  "Evito situazioni sociali che coinvolgono il cibo",
  "Controllo in modo rigido le calorie, le porzioni o l'esercizio fisico",
  "Ho episodi in cui mangio grandi quantità di cibo senza controllo",
  "Il mio valore come persona è legato al mio peso o al mio aspetto",
  "Ho comportamenti compensatori dopo aver mangiato",
  "Le persone vicine a me si preoccupano per il mio rapporto con il cibo",
  "Il rapporto con il cibo condiziona la mia vita quotidiana",
];

const ratingLabels = ["Mai", "Raramente", "Spesso", "Sempre"] as const;

interface ResultLevel {
  level: "low" | "moderate" | "high";
  label: string;
  color: string;
  bgColor: string;
  message: string;
}

function getResultLevel(score: number, maxScore: number, tab: string): ResultLevel {
  const pct = score / maxScore;
  if (pct <= 0.25) {
    return {
      level: "low",
      label: "Basso",
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
      message:
        tab === "relazioni"
          ? "Le tue risposte suggeriscono che al momento non ci sono segnali significativi di dinamiche relazionali dannose. Questo non significa che non possa essere utile un percorso di crescita personale, ma le relazioni sembrano non essere una fonte di sofferenza importante."
          : "Le tue risposte suggeriscono che al momento il rapporto con il cibo non sembra essere una fonte significativa di disagio. Continua ad ascoltarti e a prenderti cura di te.",
    };
  }
  if (pct <= 0.55) {
    return {
      level: "moderate",
      label: "Moderato",
      color: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
      message:
        tab === "relazioni"
          ? "Alcune delle tue risposte indicano la presenza di dinamiche relazionali che potrebbero crearti sofferenza. Potresti beneficiare di un percorso per esplorare questi schemi e imparare a costruire relazioni più sane e soddisfacenti."
          : "Alcune delle tue risposte indicano che il rapporto con il cibo potrebbe essere una fonte di disagio. Parlarne con un professionista potrebbe aiutarti a capire meglio cosa sta succedendo e a trovare un equilibrio più sereno.",
    };
  }
  return {
    level: "high",
    label: "Elevato",
    color: "text-red-600",
    bgColor: "bg-red-50 border-red-200",
    message:
      tab === "relazioni"
        ? "Le tue risposte suggeriscono la presenza di dinamiche relazionali significative che probabilmente ti stanno causando molta sofferenza. Un percorso di psicoterapia potrebbe aiutarti a comprendere e trasformare questi schemi. Non sei sola in questo."
        : "Le tue risposte suggeriscono un rapporto con il cibo che merita attenzione professionale. Non è colpa tua e non devi affrontare questo da sola. Un percorso mirato può fare una grande differenza.",
  };
}

const SelfAssessment = () => {
  const [tab, setTab] = useState<"relazioni" | "alimentari">("relazioni");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(10).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const statements =
    tab === "relazioni" ? relazioniStatements : alimentariStatements;

  const switchTab = (newTab: "relazioni" | "alimentari") => {
    setTab(newTab);
    setStep(0);
    setAnswers(Array(10).fill(null));
    setShowResult(false);
  };

  const selectRating = (rating: number) => {
    const next = [...answers];
    next[step] = rating;
    setAnswers(next);
  };

  const goNext = () => {
    if (step < statements.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers(Array(10).fill(null));
    setShowResult(false);
  };

  const totalScore = answers.reduce<number>(
    (sum, a) => sum + (a ?? 0),
    0
  );
  const maxScore = statements.length * 3;
  const progress = showResult
    ? 100
    : ((step + (answers[step] !== null ? 1 : 0)) / statements.length) * 100;

  const result = showResult ? getResultLevel(totalScore, maxScore, tab) : null;

  return (
    <Layout>
      <SEO title="Test di Auto-valutazione" description="Un breve test per riflettere sul tuo rapporto con le relazioni e il benessere emotivo." path="/test-relazioni-dannose" />
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              Test di auto-valutazione
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uno strumento di riflessione per capire meglio il tuo rapporto con
              le relazioni o con il cibo. Non è un test diagnostico, ma un punto
              di partenza per fare chiarezza.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Test */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl mx-auto">
          {/* Tab switcher */}
          <div className="flex gap-2 mb-10 bg-secondary/40 p-1.5 rounded-2xl">
            <button
              onClick={() => switchTab("relazioni")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                tab === "relazioni"
                  ? "bg-card text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart className="w-4 h-4" />
              Relazioni dannose
            </button>
            <button
              onClick={() => switchTab("alimentari")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                tab === "alimentari"
                  ? "bg-card text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              Rapporto con il cibo
            </button>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                {showResult
                  ? "Risultato"
                  : `Domanda ${step + 1} di ${statements.length}`}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!showResult ? (
            <div className="space-y-8">
              <h2 className="text-xl font-serif text-foreground leading-relaxed">
                &ldquo;{statements[step]}&rdquo;
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ratingLabels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => selectRating(i)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all ${
                      answers[step] === i
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border/50 bg-card hover:border-primary/30"
                    }`}
                  >
                    <p className="font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{i}/3</p>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" /> Indietro
                </button>
                <button
                  onClick={goNext}
                  disabled={answers[step] === null}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {step === statements.length - 1 ? "Vedi risultato" : "Avanti"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-8 text-center">
              {/* Score visual */}
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      className="text-secondary"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      className={result.color}
                      strokeWidth="3"
                      strokeDasharray={`${(totalScore / maxScore) * 100}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-serif font-semibold text-foreground">
                      {totalScore}/{maxScore}
                    </span>
                  </div>
                </div>
                <div
                  className={`inline-block px-4 py-2 rounded-full border text-sm font-medium ${result.bgColor} ${result.color}`}
                >
                  Livello: {result.label}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {result.message}
              </p>

              <p className="text-xs text-muted-foreground italic max-w-md mx-auto">
                Questo test non ha valore diagnostico. È uno strumento di
                auto-riflessione. Per una valutazione professionale, rivolgiti a
                un professionista.
              </p>

              <div className="pt-4 space-y-4">
                <a
                  href={`https://wa.me/393515499417?text=${encodeURIComponent(
                    tab === "relazioni"
                      ? "Buongiorno Dott.ssa Golino, ho fatto il test sulle relazioni sul suo sito e vorrei parlarne con lei. Vorrei informazioni per un primo colloquio."
                      : "Buongiorno Dott.ssa Golino, ho fatto il test sul rapporto con il cibo sul suo sito e vorrei parlarne con lei. Vorrei informazioni per un primo colloquio."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
                >
                  <MessageCircle className="w-5 h-5" />
                  Parliamone su WhatsApp
                </a>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <RotateCcw className="w-4 h-4" /> Rifai il test
                  </button>
                  <button
                    onClick={() =>
                      switchTab(
                        tab === "relazioni" ? "alimentari" : "relazioni"
                      )
                    }
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity text-sm font-medium"
                  >
                    Prova l'altro test <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default SelfAssessment;
