import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Sparkles, Brain, Leaf, Baby, Eye, Sunrise, BookOpen, HelpCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  quotes: string[];
}

const categories: Category[] = [
  {
    id: "autostima",
    label: "Cura di sé",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    quotes: [
      "Sii gentile con te.",
      "Abbi cura di come ti parli. La tua autonarrazione diventerà la tua guida interiore.",
      "Sii paziente, la tua mente ed il tuo corpo ne hanno bisogno.",
      "Vai bene così come sei.",
      "Vai bene così come sei, con le tue caratteristiche.",
      "Sii compassionevole verso di te, hai fatto il meglio che potevi fare.",
      "Hai fatto il meglio che potevi. Oggi è un nuovo giorno e puoi darti nuove possibilità.",
      "Ogni giornata è diversa. Fai quello che puoi con le energie che hai.",
      "Ricorda che anche quando ti sembra che non stai facendo abbastanza, stai dando il massimo che hai e che puoi dare in quel momento. E questo è abbastanza.",
      "Sii il tuo posto sicuro.",
      "Semplicemente, lasciati essere.",
    ],
  },
  {
    id: "amore",
    label: "Amore e relazioni",
    icon: Heart,
    color: "bg-rose-100 text-rose-700",
    quotes: [
      "Ama l'altro fino al punto in cui non smetti di amare te.",
      "Puoi lasciarti amare.",
      "Scegli chi ti sceglie.",
      "Metterti al primo posto non è un atto egoista, è restituirti la priorità che meriti.",
      "Metterti al centro della tua vita è un atto di amore e rispetto verso di te.",
      "Gli amori e le amicizie sono fatti di scambi reciproci.",
      "Quando inizi ad amarti verrai amato.",
      "Sii gentile quando entri nella vita di una persona e assicurati che l'altro faccia lo stesso con te.",
      "Il miglior linguaggio dell'amore è esserci, in modo autentico e spontaneo.",
      "Ci vuole coraggio per amare.",
    ],
  },
  {
    id: "crescita",
    label: "Crescita personale",
    icon: Brain,
    color: "bg-violet-100 text-violet-700",
    quotes: [
      "Noi siamo le nostre abitudini. Abbi cura di quelle che scegli.",
      "Che sia un lavoro, una relazione, un oggetto: scegli ciò per cui sorridi.",
      "Scegli la tua felicità. Sempre.",
      "Scegli di cosa nutrirti: cibo, letture, relazioni.",
      "Chiediti: cosa voglio fare per me oggi? Cosa voglio lasciare andare?",
      "Non c'è il momento perfetto per iniziare. Parti da oggi.",
      "Inizia a fare il primo passo. Camminando riuscirai a vedere la strada.",
      "Ti meriti di poter cambiare e scegliere sempre il meglio per te.",
      "Credi in te senza accontentarti: puoi avere il meglio per te.",
    ],
  },
  {
    id: "emozioni",
    label: "Emozioni e benessere",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-700",
    quotes: [
      "Datti il tempo di curare le tue ferite.",
      "Il tuo passato è prezioso.",
      "Hai il diritto di fermarti ed esprimere i tuoi bisogni.",
      "Hai il diritto di ricevere amore.",
      "Hai il diritto di scegliere.",
      "Oggi puoi fermarti quando lo senti necessario.",
      "A volte è necessario allontanarsi per tornare a rifiorire.",
      "Lasciati sostenere e supportare.",
      "Concediti l'opportunità di perdonare e perdonarti.",
      "Se a Natale ti senti triste, va bene.",
    ],
  },
  {
    id: "bambino",
    label: "Bambino interiore",
    icon: Baby,
    color: "bg-sky-100 text-sky-700",
    quotes: [
      "Trattati come avresti voluto essere trattato quando eri piccolo.",
      "Hai il diritto che le tue ferite vengano accarezzate.",
      "Il tuo bambino interiore ha bisogno di sentire che va tutto bene.",
      "Frasi che il tuo bambino interiore ha bisogno di sentire: sei abbastanza, sei amato, sei al sicuro.",
    ],
  },
  {
    id: "consapevolezza",
    label: "Consapevolezza",
    icon: Eye,
    color: "bg-indigo-100 text-indigo-700",
    quotes: [
      "Adattarti agli altri non ti renderà più felice.",
      "Ricorda che combattere contro di te aumenterà la tua guerra interiore.",
      "Alleati con te.",
      "Il dire di no è riconoscere i propri bisogni.",
      "Impara a conoscerti mettendo da parte il giudizio.",
    ],
  },
  {
    id: "evocative",
    label: "Frasi evocative",
    icon: Sunrise,
    color: "bg-orange-100 text-orange-700",
    quotes: [
      "Come i fiori a primavera, sboccia anche tu.",
      "Lascia scorrere. Farà il suo corso.",
      "Se puoi perdonare, se puoi perdonarti.",
      "Il silenzio spesso crea delle voragini.",
      "Condividere la gioia equivale a moltiplicarla.",
      "Ricordati che prima di tutto e tutti ci sei tu.",
      "Abbi il coraggio di scegliere la libertà.",
      "Abbi il coraggio di andare oltre la paura.",
      "Cosa faresti oggi se non avessi paura?",
    ],
  },
];

const educationalContent = [
  {
    title: "I 3 Stati dell'Io",
    subtitle: "Chi guida i tuoi comportamenti?",
    items: ["Genitore — le regole e i valori interiorizzati", "Adulto — il pensiero razionale e il qui e ora", "Bambino — le emozioni, i bisogni e la creatività"],
  },
  {
    title: "I 3 assunti dell'Analisi Transazionale",
    subtitle: "I principi fondamentali del mio approccio",
    items: [
      "Ognuno è OK — ogni persona ha valore, dignità e capacità di scegliere",
      "Ognuno può pensare — tutti possono riflettere e prendere decisioni",
      "Le persone decidono il proprio destino — il copione di vita può essere cambiato",
    ],
  },
  {
    title: "Posso controllare",
    subtitle: "Cosa dipende da te e cosa no",
    items: [
      "Dove canalizzo la mia energia",
      "Il mio comportamento e le mie reazioni",
      "I miei obiettivi e le mie scelte",
      "Come tratto gli altri",
      "Il modo in cui mi amo",
    ],
    extra: "Non posso controllare: il passato, il futuro, se piaccio alle persone, come gli altri si sentono.",
  },
];

const reflectiveQuestions = [
  "Cosa faresti oggi se non avessi paura?",
  "Cosa voglio fare per me oggi?",
  "Cosa voglio lasciare andare?",
  "Perché scelgo sempre lo stesso partner?",
  "Qual è il copione di vita che sto seguendo? Posso modificarlo?",
];

const FrasiContenuti = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <Layout>
      <SEO title="Frasi e Riflessioni" description="Pensieri, spunti e riflessioni su autostima, relazioni, crescita personale e benessere emotivo." path="/frasi" />
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              Frasi e riflessioni
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pensieri, spunti e piccole verità raccolte nel tempo.
              Salvale, condividile, o semplicemente lascia che ti accompagnino.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-6 bg-background border-b border-border/30 sticky top-20 z-40 backdrop-blur-md bg-background/95">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              Tutte
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          {filtered.map((category) => (
            <AnimatedSection key={category.id}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif text-foreground">{category.label}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.quotes.map((quote, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="p-5 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-shadow"
                    >
                      <p className="text-foreground leading-relaxed italic font-serif">
                        &ldquo;{quote}&rdquo;
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Educational content */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
              Contenuti educativi
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationalContent.map((content, i) => (
              <AnimatedSection key={content.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border/50 h-full space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {content.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{content.subtitle}</p>
                  <ul className="space-y-2">
                    {content.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {content.extra && (
                    <p className="text-xs text-muted-foreground italic border-t border-border/30 pt-3 mt-3">
                      {content.extra}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reflective questions */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">Domande per riflettere</h2>
              <p className="text-muted-foreground mt-3">
                Fermati un momento e prova a rispondere con sincerità.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-4 max-w-xl mx-auto">
            {reflectiveQuestions.map((question, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-5 rounded-2xl bg-card border border-border/50 text-center">
                  <p className="text-lg font-serif text-foreground italic">
                    {question}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Una frase ti ha toccato?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Se qualcuna di queste parole ha risuonato in te, forse è il momento
              di fare il prossimo passo. Scrivimi per un primo appuntamento.
            </p>
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20ho%20letto%20le%20sue%20frasi%20sul%20sito%20e%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
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

export default FrasiContenuti;
