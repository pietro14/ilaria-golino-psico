import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ExternalLink, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface QA {
  theme: string;
  category: string;
  question: string;
  answer: string;
}

const qaData: QA[] = [
  {
    theme: "Relazione a distanza e dubbi",
    category: "Difficoltà relazionali",
    question:
      "Sono in una relazione a distanza da un anno e mezzo e ultimamente ho molti dubbi. Mi chiedo se sia giusto continuare così, se i miei sentimenti siano ancora gli stessi o se sto solo andando avanti per abitudine.",
    answer:
      "Le relazioni a distanza possono mettere a dura prova i sentimenti e far emergere dubbi che in una relazione di prossimità resterebbero sopiti. Il fatto che lei si stia ponendo queste domande è già un segnale importante di consapevolezza.",
  },
  {
    theme: "Insicurezza nelle relazioni",
    category: "Dipendenza affettiva",
    question:
      "Mi rendo conto di essere molto insicura nelle relazioni. Ho sempre bisogno di conferme dal mio partner e quando non le ricevo entro in ansia. Temo di essere dipendente affettivamente.",
    answer:
      "Quello che descrive è un pattern molto comune nelle persone che soffrono di dipendenza affettiva. Il bisogno costante di rassicurazione nasce spesso da esperienze relazionali precoci in cui il legame non era sicuro.",
  },
  {
    theme: "Paure intense e ansia",
    category: "Trattamento dell'ansia",
    question:
      "Soffro di attacchi di ansia molto intensi che mi bloccano nella vita quotidiana. Ho paura di uscire di casa da sola e questo sta influenzando il mio lavoro e le mie relazioni.",
    answer:
      "Gli attacchi di ansia possono essere molto invalidanti e comprendo quanto questa situazione stia impattando sulla sua vita. È importante sapere che l'ansia è un sintomo trattabile e che esistono percorsi terapeutici molto efficaci.",
  },
  {
    theme: "Disturbi del comportamento alimentare",
    category: "Disturbi alimentari",
    question:
      "Ho un rapporto complicato con il cibo da quando ero adolescente. Alterno periodi di restrizione a periodi in cui perdo il controllo. Mi vergogno molto di questa situazione.",
    answer:
      "I disturbi del comportamento alimentare sono condizioni complesse che coinvolgono aspetti emotivi, relazionali e legati all'immagine di sé. La vergogna che prova è molto comune ma non deve impedirle di chiedere aiuto.",
  },
  {
    theme: "Fine di una relazione e nuova storia",
    category: "Difficoltà relazionali",
    question:
      "Ho chiuso una relazione tossica di tre anni e ora sto frequentando una persona nuova. Mi rendo conto di ripetere gli stessi schemi e ho paura di ritrovarmi nella stessa situazione.",
    answer:
      "La consapevolezza di ripetere schemi relazionali è un primo passo fondamentale. Spesso tendiamo a ricercare dinamiche familiari anche quando sono dolorose, perché rappresentano ciò che conosciamo.",
  },
  {
    theme: "Ansia e senso di vergogna",
    category: "Trattamento dell'ansia",
    question:
      "Provo una forte ansia sociale e un senso di vergogna costante. Mi sento sempre giudicata dagli altri e questo mi porta a isolarmi sempre di più.",
    answer:
      "L'ansia sociale e il senso di vergogna sono spesso collegati a esperienze passate in cui ci siamo sentiti esposti o giudicati. Un percorso terapeutico può aiutarla a comprendere l'origine di queste emozioni.",
  },
  {
    theme: "Conflitto familiare sulla relazione",
    category: "Difficoltà relazionali",
    question:
      "La mia famiglia non approva la mia relazione e questo sta creando un conflitto enorme. Mi sento divisa tra il partner e la famiglia e non so come gestire questa situazione.",
    answer:
      "Trovarsi tra la propria famiglia di origine e il partner è una delle situazioni più dolorose e complesse. Spesso questo conflitto attiva dinamiche profonde legate al bisogno di approvazione e al processo di individuazione.",
  },
  {
    theme: "Gelosia ossessiva e paranoie",
    category: "Dipendenza affettiva",
    question:
      "La mia gelosia sta distruggendo la mia relazione. Controllo costantemente il telefono del mio partner e ho pensieri ossessivi che non riesco a fermare.",
    answer:
      "La gelosia ossessiva è spesso espressione di una profonda insicurezza e di una paura dell'abbandono che ha radici lontane. Il controllo diventa un tentativo di gestire l'ansia, ma finisce per alimentarla.",
  },
  {
    theme: "Gelosia e controllo",
    category: "Dipendenza affettiva",
    question:
      "Il mio partner mi accusa di essere troppo controllante e gelosa. Mi rendo conto che ha ragione ma non riesco a smettere. Ho paura che mi lasci se non cambio.",
    answer:
      "Riconoscere il problema è il primo passo verso il cambiamento. Il comportamento controllante nasce spesso dalla paura di perdere l'altro e da una difficoltà a fidarsi che può avere origini nell'infanzia.",
  },
  {
    theme: "Distanza nella coppia",
    category: "Difficoltà relazionali",
    question:
      "Sento che io e il mio partner ci stiamo allontanando sempre di più. Non litighiamo, ma è come se vivessimo vite parallele. Mi chiedo se sia normale dopo tanti anni insieme.",
    answer:
      "La sensazione di distanza in una relazione di lunga durata è più comune di quanto si pensi. Non significa necessariamente che l'amore sia finito, ma che la relazione ha bisogno di attenzione e cura.",
  },
  {
    theme: "Dubbi sulla relazione",
    category: "Difficoltà relazionali",
    question:
      "Non so se la mia relazione mi rende felice. Ci sono giorni in cui va tutto bene e altri in cui penso di voler lasciare il mio partner. Questa incertezza mi logora.",
    answer:
      "L'ambivalenza nelle relazioni è un'esperienza molto umana e non deve necessariamente spaventarla. Spesso i dubbi nascono da bisogni insoddisfatti o da conflitti interni che meritano di essere esplorati.",
  },
  {
    theme: "Burnout e perfezionismo",
    category: "Gestione dello stress",
    question:
      "Mi sento completamente esaurita dal lavoro. Sono una perfezionista e non riesco a staccare mai. L'ansia di non fare abbastanza mi accompagna costantemente.",
    answer:
      "Il burnout è spesso collegato a tratti perfezionistici e a un'incapacità di porre limiti. Il perfezionismo, anche se socialmente premiato, può diventare una gabbia che genera ansia e esaurimento.",
  },
];

const categories = ["Tutte", ...Array.from(new Set(qaData.map((qa) => qa.category)))];

const categoryColors: Record<string, string> = {
  "Difficoltà relazionali": "bg-blue-100 text-blue-700",
  "Dipendenza affettiva": "bg-rose-100 text-rose-700",
  "Trattamento dell'ansia": "bg-amber-100 text-amber-700",
  "Disturbi alimentari": "bg-purple-100 text-purple-700",
  "Gestione dello stress": "bg-green-100 text-green-700",
};

const DomandeRisposte = () => {
  const [activeCategory, setActiveCategory] = useState("Tutte");

  const filteredQA =
    activeCategory === "Tutte"
      ? qaData
      : qaData.filter((qa) => qa.category === activeCategory);

  return (
    <Layout>
      <SEO title="Domande e Risposte" description="Le domande più frequenti sulla psicoterapia, i costi, la durata del percorso e il mio approccio." path="/domande-risposte" />
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="font-script italic text-2xl text-primary">Domande e risposte</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Le domande che mi fanno più spesso
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Risposte professionali alle domande più comuni che ricevo su MioDottore. Qui trovi spunti utili per orientarti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="section-padding bg-card pb-0">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-background text-muted-foreground hover:bg-secondary border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Q&A cards */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredQA.map((qa, i) => (
              <AnimatedSection key={qa.theme} delay={i * 0.05}>
                <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full flex flex-col space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {qa.theme}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                        categoryColors[qa.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {qa.category}
                    </span>
                  </div>
                  <p className="italic text-sm text-foreground/80 leading-relaxed">
                    &ldquo;{qa.question}&rdquo;
                  </p>
                  <div className="bg-secondary/20 rounded-xl p-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MioDottore link */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Hai una domanda diversa?
            </h2>
            <p className="text-muted-foreground mt-4">
              Puoi inviarmi la tua domanda direttamente su MioDottore e riceverai una risposta personalizzata.
            </p>
            <a
              href="https://www.miodottore.it/ilaria-golino/psicologo-psicoterapeuta/roma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity mt-4"
            >
              Vai al profilo MioDottore
              <ExternalLink className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Vuoi parlarne di persona?
            </h2>
            <p className="text-muted-foreground mt-4">
              Se ti riconosci in una di queste domande, scrivimi senza impegno per un primo appuntamento.
            </p>
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20ho%20letto%20le%20domande%20e%20risposte%20sul%20suo%20sito%20e%20vorrei%20parlarne%20con%20lei."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated mt-6"
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

export default DomandeRisposte;
