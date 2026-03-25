import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MessageCircle,
  Brain,
  Heart,
  Pill,
  GraduationCap,
  Stethoscope,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
} from "lucide-react";

interface Professional {
  icon: typeof Brain;
  title: string;
  highlighted: boolean;
  formazione: string;
  cosaFa: string;
  quandoRivolgersi: string;
  farmaci: boolean;
  durataFormazione: string;
}

const professionals: Professional[] = [
  {
    icon: Brain,
    title: "Psicologo",
    highlighted: false,
    formazione:
      "Laurea magistrale in Psicologia (5 anni) + tirocinio + Esame di Stato + iscrizione all'Albo.",
    cosaFa:
      "Colloqui di sostegno psicologico, consulenze, valutazioni psicodiagnostiche, interventi di prevenzione. Non può fare psicoterapia.",
    quandoRivolgersi:
      "Quando hai bisogno di orientamento, supporto in un momento difficile o una valutazione psicologica.",
    farmaci: false,
    durataFormazione: "5 anni + tirocinio",
  },
  {
    icon: Heart,
    title: "Psicoterapeuta",
    highlighted: true,
    formazione:
      "Laurea in Psicologia o Medicina + Specializzazione in Psicoterapia (4 anni) presso una scuola riconosciuta dal MIUR.",
    cosaFa:
      "Psicoterapia individuale, di coppia o di gruppo. Lavora sulle cause profonde del disagio con tecniche specifiche per produrre un cambiamento strutturale e duraturo.",
    quandoRivolgersi:
      "Quando il disagio è radicato, ricorrente o compromette la qualità della vita. Per dipendenza affettiva, disturbi di personalità, disturbi alimentari, ansia cronica.",
    farmaci: false,
    durataFormazione: "5 + 4 anni di specializzazione",
  },
  {
    icon: Stethoscope,
    title: "Psichiatra",
    highlighted: false,
    formazione:
      "Laurea in Medicina e Chirurgia (6 anni) + Specializzazione in Psichiatria (4 anni).",
    cosaFa:
      "Diagnosi di disturbi mentali, prescrizione e gestione di farmaci psicotropi. Può fare anche psicoterapia se ha la formazione.",
    quandoRivolgersi:
      "Quando è necessaria una valutazione farmacologica, in caso di disturbi gravi (depressione severa, disturbo bipolare, psicosi) o quando la terapia da sola non basta.",
    farmaci: true,
    durataFormazione: "6 + 4 anni di specializzazione",
  },
];

interface QuizQuestion {
  question: string;
  options: { label: string; tag: string }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual è la natura della tua difficoltà?",
    options: [
      { label: "Un momento di crisi o una decisione importante", tag: "psicologo" },
      { label: "Un disagio profondo che dura da tempo", tag: "psicoterapeuta" },
      { label: "Sintomi intensi che compromettono il funzionamento quotidiano", tag: "psichiatra" },
      { label: "Non so bene, vorrei capirci di più", tag: "psicoterapeuta" },
    ],
  },
  {
    question: "Cosa ti aspetti dal percorso?",
    options: [
      { label: "Orientamento e supporto a breve termine", tag: "psicologo" },
      { label: "Un cambiamento profondo e duraturo", tag: "psicoterapeuta" },
      { label: "Un aiuto farmacologico per stare meglio subito", tag: "psichiatra" },
      { label: "Capire le cause dei miei comportamenti ricorrenti", tag: "psicoterapeuta" },
    ],
  },
  {
    question: "Il tuo disagio riguarda principalmente...",
    options: [
      { label: "Relazioni, autostima, difficoltà emotive", tag: "psicoterapeuta" },
      { label: "Stress lavorativo o un evento specifico", tag: "psicologo" },
      { label: "Disturbi del sonno, dell'umore o sintomi fisici intensi", tag: "psichiatra" },
      { label: "Schemi ripetitivi che non riesco a cambiare", tag: "psicoterapeuta" },
    ],
  },
  {
    question: "Hai già provato un percorso di supporto psicologico?",
    options: [
      { label: "No, sarebbe la prima volta", tag: "psicologo" },
      { label: "Sì, ma sento il bisogno di un lavoro più profondo", tag: "psicoterapeuta" },
      { label: "Sì, ma sento che servirebbe anche un supporto farmacologico", tag: "psichiatra" },
      { label: "No, ma sento che il mio problema è radicato", tag: "psicoterapeuta" },
    ],
  },
];

function getQuizResult(answers: number[]) {
  const counts: Record<string, number> = {};
  answers.forEach((ansIdx, qIdx) => {
    const tag = quizQuestions[qIdx].options[ansIdx]?.tag;
    if (tag) counts[tag] = (counts[tag] ?? 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted[0]?.[0] ?? "psicoterapeuta";
}

const resultMessages: Record<string, { title: string; message: string }> = {
  psicologo: {
    title: "Potresti iniziare da uno Psicologo",
    message:
      "Dalle tue risposte sembra che tu stia attraversando un momento specifico in cui un supporto psicologico potrebbe essere sufficiente. Se però il disagio si rivelasse più profondo, lo psicologo potrà indirizzarti verso una psicoterapia.",
  },
  psicoterapeuta: {
    title: "Uno Psicoterapeuta potrebbe fare al caso tuo",
    message:
      "Le tue risposte suggeriscono che potresti beneficiare di un percorso di psicoterapia: un lavoro più profondo e strutturato per affrontare le cause del tuo disagio e produrre un cambiamento duraturo. Questo è esattamente quello che faccio.",
  },
  psichiatra: {
    title: "Potrebbe essere utile anche uno Psichiatra",
    message:
      "Dalle tue risposte emerge che potrebbe essere utile una valutazione psichiatrica per capire se un supporto farmacologico può aiutarti. Spesso il percorso migliore combina farmaci e psicoterapia. Posso aiutarti a orientarti.",
  },
};

const DifferenzeProfessionisti = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const selectQuizOption = (idx: number) => {
    const next = [...quizAnswers];
    next[quizStep] = idx;
    setQuizAnswers(next);
  };

  const quizNext = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const quizBack = () => {
    if (showQuizResult) {
      setShowQuizResult(false);
    } else if (quizStep > 0) {
      setQuizStep(quizStep - 1);
    }
  };

  const quizRestart = () => {
    setQuizStep(0);
    setQuizAnswers(Array(quizQuestions.length).fill(null));
    setShowQuizResult(false);
    setQuizStarted(false);
  };

  const quizResultKey = showQuizResult
    ? getQuizResult(quizAnswers.filter((a): a is number => a !== null))
    : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              Psicologo, Psicoterapeuta o Psichiatra?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capire le differenze tra queste figure professionali ti aiuta a
              scegliere il percorso più adatto a te.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <div
                key={pro.title}
                className={`rounded-2xl p-7 space-y-5 ${
                  pro.highlighted
                    ? "border-2 border-primary bg-primary/5 shadow-elevated"
                    : "border border-border/50 bg-card"
                }`}
              >
                <div className="text-center space-y-3">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${
                      pro.highlighted ? "bg-primary/15" : "bg-primary/10"
                    }`}
                  >
                    <pro.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground">
                    {pro.title}
                  </h3>
                  {pro.highlighted && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Il mio ruolo
                    </span>
                  )}
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Formazione
                    </p>
                    <p className="text-muted-foreground">{pro.formazione}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      Cosa fa
                    </p>
                    <p className="text-muted-foreground">{pro.cosaFa}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      Quando rivolgersi
                    </p>
                    <p className="text-muted-foreground">
                      {pro.quandoRivolgersi}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pill className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Farmaci:</span>
                    {pro.farmaci ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-4 h-4" /> Sì
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <XCircle className="w-4 h-4" /> No
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>{pro.durataFormazione}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Quiz */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-foreground mb-3">
              Quale professionista fa per te?
            </h2>
            <p className="text-muted-foreground">
              Rispondi a 4 domande per avere un orientamento.
            </p>
          </div>

          {!quizStarted ? (
            <div className="text-center">
              <button
                onClick={() => setQuizStarted(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity"
              >
                Inizia il quiz <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : !showQuizResult ? (
            <div className="space-y-8">
              {/* Progress */}
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>
                  Domanda {quizStep + 1} di {quizQuestions.length}
                </span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{
                    width: `${((quizStep + (quizAnswers[quizStep] !== null ? 1 : 0)) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="text-xl font-serif text-foreground">
                {quizQuestions[quizStep].question}
              </h3>
              <div className="space-y-3">
                {quizQuestions[quizStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectQuizOption(i)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                      quizAnswers[quizStep] === i
                        ? "border-primary bg-primary/5"
                        : "border-border/50 bg-card hover:border-primary/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={quizBack}
                  disabled={quizStep === 0}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" /> Indietro
                </button>
                <button
                  onClick={quizNext}
                  disabled={quizAnswers[quizStep] === null}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {quizStep === quizQuestions.length - 1
                    ? "Vedi risultato"
                    : "Avanti"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : quizResultKey ? (
            <div className="text-center space-y-6">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-serif text-foreground">
                {resultMessages[quizResultKey].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {resultMessages[quizResultKey].message}
              </p>
              <div className="pt-2 space-y-3">
                <a
                  href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20capire%20quale%20percorso%20è%20più%20adatto%20a%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
                >
                  <MessageCircle className="w-5 h-5" />
                  Parliamone su WhatsApp
                </a>
                <div>
                  <button
                    onClick={quizRestart}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Rifai il quiz
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Explanation */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif text-foreground text-center">
            Perché è importante conoscere la differenza
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              In Italia, i termini &ldquo;psicologo&rdquo;,
              &ldquo;psicoterapeuta&rdquo; e &ldquo;psichiatra&rdquo; vengono
              spesso confusi, ma indicano percorsi formativi e competenze molto
              diversi.
            </p>
            <p>
              Lo <strong className="text-foreground">psicologo</strong> ha una
              laurea magistrale in psicologia e può fare colloqui di supporto,
              consulenze e valutazioni, ma{" "}
              <em>non può fare psicoterapia</em>.
            </p>
            <p>
              Lo{" "}
              <strong className="text-foreground">psicoterapeuta</strong> è uno
              psicologo o un medico che ha completato una scuola di
              specializzazione di 4 anni. Questo lo abilita a trattare disturbi
              psicologici con tecniche specifiche, lavorando sulle cause
              profonde del disagio.
            </p>
            <p>
              Lo <strong className="text-foreground">psichiatra</strong> è un
              medico specializzato che può prescrivere farmaci. Spesso il
              percorso più efficace prevede una collaborazione tra psicoterapeuta
              e psichiatra.
            </p>
            <p className="font-script italic text-xl text-primary text-center pt-4">
              Scegliere il professionista giusto è il primo passo verso il
              benessere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Hai ancora dubbi?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              Scrivimi senza impegno: posso aiutarti a capire quale percorso è
              più adatto alla tua situazione.
            </p>
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20capire%20quale%20professionista%20è%20più%20adatto%20alla%20mia%20situazione."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivimi su WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DifferenzeProfessionisti;
