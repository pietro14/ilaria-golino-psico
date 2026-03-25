import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, AlertCircle } from "lucide-react";

interface Question {
  question: string;
  options: { label: string; tag?: string }[];
}

const questions: Question[] = [
  {
    question: "Qual è la difficoltà principale che stai vivendo?",
    options: [
      { label: "Relazioni in cui mi perdo completamente nell'altro", tag: "dipendenza" },
      { label: "Emozioni intense che non riesco a controllare", tag: "borderline" },
      { label: "Un rapporto complicato con il cibo o con il mio corpo", tag: "alimentari" },
      { label: "Bassa autostima e senso di inadeguatezza", tag: "autostima" },
      { label: "Ansia, stress o un momento di crisi generale", tag: "generico" },
    ],
  },
  {
    question: "Puoi descrivere meglio la tua situazione?",
    options: [
      { label: "Difficoltà emotive o relazionali che influenzano la mia vita quotidiana" },
      { label: "Vorrei capire meglio me stessa e crescere come persona" },
      { label: "Sento voci, ho esperienze dissociative o stati alterati di coscienza", tag: "fuori_campo" },
      { label: "Ho una dipendenza da sostanze o alcol che non riesco a gestire", tag: "fuori_campo" },
      { label: "Ho una diagnosi psichiatrica e ho bisogno di supporto farmacologico", tag: "fuori_campo" },
    ],
  },
  {
    question: "Da quanto tempo dura questa situazione?",
    options: [
      { label: "Da poche settimane o mesi" },
      { label: "Da circa un anno" },
      { label: "Da diversi anni" },
      { label: "Da sempre, per quanto mi ricordi" },
    ],
  },
  {
    question: "Come sono le tue relazioni sentimentali o affettive?",
    options: [
      { label: "Tendo a dipendere emotivamente dal partner", tag: "dipendenza" },
      { label: "Alterno tra idealizzazione e delusione totale", tag: "borderline" },
      { label: "Faccio fatica a fidarmi degli altri", tag: "fiducia" },
      { label: "Generalmente stabili, ma vorrei migliorarle", tag: "altro" },
    ],
  },
  {
    question: "Hai mai provato a chiedere aiuto a un professionista?",
    options: [
      { label: "No, sarebbe la prima volta" },
      { label: "Sì, ma non mi sono trovata bene" },
      { label: "Sì, e mi ha aiutato, ma sento il bisogno di ricominciare" },
      { label: "Ci sto pensando, per questo sono qui" },
    ],
  },
  {
    question: "Cosa cerchi in una psicoterapeuta?",
    options: [
      { label: "Qualcuno che mi faccia sentire capita e non giudicata" },
      { label: "Un approccio pratico con strumenti concreti" },
      { label: "Qualcuno specializzato nella mia difficoltà specifica" },
      { label: "Un percorso che mi aiuti a diventare più autonoma emotivamente" },
    ],
  },
];

function getResult(answers: number[]) {
  const tags: string[] = [];
  answers.forEach((ansIdx, qIdx) => {
    const tag = questions[qIdx].options[ansIdx]?.tag;
    if (tag) tags.push(tag);
  });

  if (tags.includes("fuori_campo")) {
    return {
      title: "Posso orientarti verso il professionista giusto",
      message:
        "Dalla tua descrizione, la tua situazione potrebbe richiedere un tipo di intervento diverso dal mio ambito di specializzazione. Questo non significa che non posso aiutarti: posso consigliarti un collega o una struttura più adatti alle tue esigenze specifiche. Scrivimi senza impegno e ti orienterò verso il percorso più indicato per te.",
      whatsappText:
        "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e vorrei un orientamento verso il professionista più adatto alla mia situazione.",
      isFuoriCampo: true,
    };
  }
  if (tags.includes("dipendenza")) {
    return {
      title: "Dipendenza affettiva e relazioni",
      message:
        "Dalle tue risposte sembra che le relazioni affettive siano un tema centrale nella tua vita. La dipendenza affettiva è una delle mie aree di specializzazione: lavoro ogni giorno con persone che, come te, sentono di perdersi nelle relazioni. Posso aiutarti a costruire un modo più sano e libero di amare.",
      whatsappText:
        "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e credo di avere difficoltà legate alla dipendenza affettiva. Vorrei informazioni per un primo colloquio.",
    };
  }
  if (tags.includes("borderline")) {
    return {
      title: "Regolazione emotiva e identità",
      message:
        "Le emozioni intense e l'instabilità nelle relazioni possono essere molto faticose da gestire. Ho una formazione specifica nel trattamento dei disturbi di personalità e nella regolazione emotiva. Insieme possiamo lavorare per aiutarti a sentirti più stabile e a costruire relazioni più serene.",
      whatsappText:
        "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e credo di avere difficoltà nella gestione delle emozioni. Vorrei informazioni per un primo colloquio.",
    };
  }
  if (tags.includes("alimentari")) {
    return {
      title: "Rapporto con il cibo e il corpo",
      message:
        "Il rapporto con il cibo e con il proprio corpo può diventare una prigione silenziosa. Mi occupo di disturbi alimentari con un approccio che non giudica e non colpevolizza. Posso accompagnarti in un percorso per ritrovare un rapporto più sereno con il cibo e con te stessa.",
      whatsappText:
        "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e credo di avere difficoltà nel rapporto con il cibo. Vorrei informazioni per un primo colloquio.",
    };
  }
  if (tags.includes("autostima")) {
    return {
      title: "Autostima e crescita personale",
      message:
        "La bassa autostima può condizionare ogni aspetto della vita: le relazioni, il lavoro, le scelte quotidiane. Nel mio percorso terapeutico lavoro molto sull'immagine di sé e sulla costruzione di un senso di valore autentico. Posso accompagnarti in un cammino per riscoprire le tue risorse e imparare a volerti bene davvero.",
      whatsappText:
        "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e credo di avere difficoltà legate all'autostima. Vorrei informazioni per un primo colloquio.",
    };
  }
  return {
    title: "Posso aiutarti",
    message:
      "Dalle tue risposte emerge che stai attraversando un momento in cui senti il bisogno di uno spazio per te. Il mio approccio è caldo, non giudicante e personalizzato. Qualunque sia la difficoltà che stai vivendo, il primo passo è parlarne insieme. Non devi avere tutto chiaro: ci pensiamo insieme.",
    whatsappText:
      "Buongiorno Dott.ssa Golino, ho fatto il quiz sul suo sito e vorrei informazioni per un primo colloquio.",
  };
}

const QuizFaccioAlCasoTuo = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const progress = showResult
    ? 100
    : ((step + (answers[step] !== null ? 1 : 0)) / questions.length) * 100;

  const selectOption = (optionIdx: number) => {
    const next = [...answers];
    next[step] = optionIdx;
    setAnswers(next);
  };

  const goNext = () => {
    if (step < questions.length - 1) {
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
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  const result = showResult
    ? getResult(answers.filter((a): a is number => a !== null))
    : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              Faccio al caso tuo?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rispondi a 6 brevi domande per capire se il mio approccio è adatto
              alle tue esigenze. Non è un test diagnostico, ma uno strumento per
              orientarti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quiz */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                {showResult
                  ? "Risultato"
                  : `Domanda ${step + 1} di ${questions.length}`}
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
              <h2 className="text-2xl font-serif text-foreground">
                {questions[step].question}
              </h2>
              <div className="space-y-3">
                {questions[step].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                      answers[step] === i
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border/50 bg-card hover:border-primary/30 hover:bg-secondary/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          answers[step] === i
                            ? "border-primary bg-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {answers[step] === i && (
                          <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className="text-foreground">{option.label}</span>
                    </div>
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
                  {step === questions.length - 1 ? "Vedi risultato" : "Avanti"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-8 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${result.isFuoriCampo ? "bg-amber-100" : "bg-primary/10"}`}>
                {result.isFuoriCampo ? (
                  <AlertCircle className="w-10 h-10 text-amber-600" />
                ) : (
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                )}
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                {result.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {result.message}
              </p>
              <div className="pt-4 space-y-4">
                <a
                  href={`https://wa.me/393515499417?text=${encodeURIComponent(result.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
                >
                  <MessageCircle className="w-5 h-5" />
                  Scrivimi su WhatsApp
                </a>
                <div>
                  <button
                    onClick={restart}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Rifai il quiz
                  </button>
                </div>
              </div>
              <div className="flex justify-start pt-2">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Torna all'ultima domanda
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default QuizFaccioAlCasoTuo;
