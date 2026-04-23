export interface FAQItem {
  theme: string;
  category: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
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

export const faqCategories = ["Tutte", ...Array.from(new Set(faqItems.map((qa) => qa.category)))];

export const faqCategoryColors: Record<string, string> = {
  "Difficoltà relazionali": "bg-blue-100 text-blue-700",
  "Dipendenza affettiva": "bg-rose-100 text-rose-700",
  "Trattamento dell'ansia": "bg-amber-100 text-amber-700",
  "Disturbi alimentari": "bg-purple-100 text-purple-700",
  "Gestione dello stress": "bg-green-100 text-green-700",
};
