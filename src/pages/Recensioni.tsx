import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote, Star, ChevronDown, ChevronUp, MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import facebookLogo from "@/assets/facebook-logo.svg";
import miodottoreLogo from "@/assets/miodottore-logo.jpg";

interface Review {
  name: string;
  date?: string;
  platform: "facebook" | "miodottore";
  type?: string;
  text: string;
  reply?: {
    date: string;
    text: string;
  };
}

const reviews: Review[] = [
  // Facebook reviews
  {
    name: "Alessandro Dibello",
    platform: "facebook",
    text: "Il proprio IO non è un abito già confezionato, ma è semplicemente quella stoffa lasciata nelle mani di chi saprà cucirti addosso la versione migliore di te stesso!!! La Dott.ssa Golino è il top!",
  },
  {
    name: "Mauro Silei",
    platform: "facebook",
    text: "Eticamente professionale e riservata.",
  },
  // MioDottore reviews — first 8 with full text and replies
  {
    name: "Giuseppe D.",
    date: "28/02/2025",
    platform: "miodottore",
    type: "Psicoterapia individuale",
    text: "Sono arrivato dalla Dottoressa Golino in un momento molto difficile della mia vita, in cui l'ansia e le preoccupazioni mi stavano sopraffacendo. Fin dal primo appuntamento mi sono sentito accolto e ascoltato senza giudizio. La Dottoressa ha saputo creare un ambiente sicuro in cui potermi aprire e affrontare le mie difficoltà. Grazie al percorso intrapreso insieme, ho imparato a gestire meglio le mie emozioni e a ritrovare un equilibrio che pensavo di aver perso. La consiglio vivamente a chiunque stia attraversando un momento di difficoltà.",
    reply: {
      date: "03/03/2025",
      text: "Grazie Giuseppe per le sue parole. È stato un piacere accompagnarla in questo percorso e vedere i progressi che ha fatto. La strada è ancora lunga ma i risultati sono già evidenti. Continui così!",
    },
  },
  {
    name: "D.",
    date: "25/02/2025",
    platform: "miodottore",
    type: "Colloquio psicologico",
    text: "Professionista empatica e competente. Mi sono sentita subito a mio agio durante il primo appuntamento. La Dottoressa Golino ha dimostrato grande capacità di ascolto e mi ha aiutata a vedere le cose da una prospettiva diversa. Il suo approccio è delicato ma efficace, e mi ha dato strumenti concreti per affrontare le mie difficoltà quotidiane.",
    reply: {
      date: "03/03/2025",
      text: "La ringrazio per la fiducia e per aver condiviso la sua esperienza. Sono contenta che si sia sentita accolta e che il nostro lavoro insieme stia portando risultati concreti nella sua vita quotidiana.",
    },
  },
  {
    name: "Stefania",
    date: "28/01/2025",
    platform: "miodottore",
    text: "Sono quasi un anno che ho iniziato il percorso con la Dott.ssa Golino e posso dire che è stata una delle scelte migliori della mia vita. Eccellente professionista, attenta, empatica e preparata. Mi ha aiutata a capire dinamiche che si ripetevano nelle mie relazioni e a lavorare su me stessa in modo profondo. La consiglio a chiunque voglia intraprendere un percorso di crescita personale serio e ben strutturato.",
    reply: {
      date: "29/01/2025",
      text: "Grazie Stefania, le sue parole mi toccano profondamente. Il percorso che ha fatto è stato possibile grazie al suo impegno e alla sua voglia di mettersi in gioco. Sono orgogliosa dei progressi che ha raggiunto.",
    },
  },
  {
    name: "G. M.",
    date: "28/01/2025",
    platform: "miodottore",
    text: "Seguo un percorso con la Dottoressa Golino da oltre un anno e mi ha aiutato enormemente. È una professionista seria, preparata e molto umana. Sa creare un clima di fiducia e sicurezza che permette di affrontare anche i temi più difficili. Grazie a lei ho imparato a conoscermi meglio e a gestire situazioni che prima mi sembravano insormontabili.",
    reply: {
      date: "29/01/2025",
      text: "Grazie per la sua testimonianza. Il lavoro che sta facendo su di sé è davvero ammirevole e i risultati parlano da soli. Continuiamo così!",
    },
  },
  {
    name: "Davide",
    date: "28/01/2025",
    platform: "miodottore",
    type: "Psicoterapia individuale",
    text: "Mi sentivo perso e solo quando ho iniziato il percorso con la Dott.ssa Golino. Non sapevo cosa aspettarmi dalla terapia, ma lei ha saputo mettermi subito a mio agio. Con pazienza e professionalità mi ha aiutato a capire le dinamiche che mi portavano a stare male e a trovare strategie concrete per il cambiamento. Oggi mi sento una persona diversa, più consapevole e più serena.",
    reply: {
      date: "29/01/2025",
      text: "Davide, grazie per aver condiviso la sua esperienza. Il coraggio di chiedere aiuto è il primo passo e lei lo ha fatto nel momento giusto. I cambiamenti che ha raggiunto sono merito del suo impegno nel percorso.",
    },
  },
  {
    name: "M.R",
    date: "28/01/2025",
    platform: "miodottore",
    text: "Mi sono trovata subito a mio agio con la Dottoressa Golino. È una professionista che sa ascoltare davvero, senza giudizio, e che ti guida con delicatezza verso una maggiore consapevolezza di te stessa. Il percorso con lei mi sta aiutando a comprendere le mie emozioni e a costruire relazioni più sane.",
    reply: {
      date: "29/01/2025",
      text: "Grazie per le sue parole. Il percorso che sta facendo è molto significativo e sono felice di poterla accompagnare in questo processo di crescita e consapevolezza.",
    },
  },
  {
    name: "LN",
    date: "28/01/2025",
    platform: "miodottore",
    text: "Dopo un anno di percorso con la Dott.ssa Golino posso dire di aver raggiunto risultati importanti. Mi ha aiutata a uscire da una situazione di dipendenza affettiva che mi faceva soffrire da anni. La sua professionalità, unita a una grande umanità, rende il percorso terapeutico un'esperienza trasformativa. La raccomando con tutto il cuore.",
    reply: {
      date: "29/01/2025",
      text: "La ringrazio di cuore per questa bellissima testimonianza. Il percorso che ha fatto sulla dipendenza affettiva è stato intenso e coraggioso. Sono molto contenta dei traguardi che ha raggiunto.",
    },
  },
  {
    name: "Daniele",
    date: "27/04/2022",
    platform: "miodottore",
    type: "Psicoterapia individuale",
    text: "Professionista eccellente. La Dott.ssa Golino mi ha aiutato in un momento molto difficile della mia vita con grande competenza e sensibilità.",
  },
  // Remaining MioDottore reviews — abbreviated
  {
    name: "I.A",
    date: "22/01/2022",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Ottima professionista, empatica e preparata. Mi sono sentita accolta fin dal primo momento.",
  },
  {
    name: "Sp",
    date: "22/11/2021",
    platform: "miodottore",
    type: "Psicoterapia individuale",
    text: "Consiglio vivamente la Dott.ssa Golino. Professionale, attenta e disponibile.",
  },
  {
    name: "C.",
    date: "09/11/2021",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Un'esperienza molto positiva. La dottoressa sa mettere a proprio agio e offre strumenti concreti.",
  },
  {
    name: "D.",
    date: "27/09/2021",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Molto brava e professionale. Mi ha aiutato a vedere le cose in modo diverso.",
  },
  {
    name: "S.D.",
    date: "20/09/2021",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Percorso online molto efficace. La Dottoressa è competente e disponibile.",
  },
  {
    name: "P.",
    date: "16/09/2021",
    platform: "miodottore",
    text: "Professionalità e umanità. Mi sono sentito capito e supportato nel mio percorso.",
  },
  {
    name: "U. C.",
    date: "13/09/2021",
    platform: "miodottore",
    text: "Ottima terapeuta. Competente, seria e molto empatica.",
  },
  {
    name: "Mariangela C.",
    date: "13/09/2021",
    platform: "miodottore",
    text: "La consiglio a tutti. La Dott.ssa Golino è una professionista preparata e sensibile.",
  },
  {
    name: "Giovanna",
    date: "13/09/2021",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Esperienza molto positiva anche online. La dottoressa è bravissima e molto disponibile.",
  },
  {
    name: "Maria R.",
    date: "13/09/2021",
    platform: "miodottore",
    type: "Psicoterapia individuale",
    text: "Eccellente professionista. Mi ha aiutata a ritrovare me stessa dopo un periodo molto buio.",
  },
  {
    name: "TM",
    date: "13/09/2021",
    platform: "miodottore",
    type: "Psicoterapia online",
    text: "Sono molto soddisfatto del percorso. La Dottoressa Golino è preparata e attenta.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
        <Quote className="w-8 h-8 text-primary/30 mb-3 flex-shrink-0" />
        <p className="italic text-foreground leading-relaxed text-sm flex-1">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-4 space-y-3">
          <StarRating />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground text-sm">{review.name}</p>
              {review.date && (
                <p className="text-xs text-muted-foreground">{review.date}</p>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <img
                src={review.platform === "facebook" ? facebookLogo : miodottoreLogo}
                alt={review.platform === "facebook" ? "Facebook" : "MioDottore"}
                className={`h-5 w-5 object-contain ${review.platform === "miodottore" ? "rounded-md" : ""}`}
              />
              <span className="text-xs text-muted-foreground">
                {review.platform === "facebook" ? "Facebook" : "MioDottore"}
              </span>
            </div>
          </div>
          {review.type && (
            <p className="text-xs text-muted-foreground">{review.type}</p>
          )}
          {review.reply && (
            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-xs text-primary font-medium hover:opacity-80 transition-opacity"
              >
                {expanded ? "Nascondi risposta" : "Leggi la risposta della Dott.ssa"}
                {expanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
              {expanded && (
                <div className="mt-3 p-4 bg-secondary/40 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">
                    Risposta della Dott.ssa Golino — {review.reply.date}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {review.reply.text}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Recensioni = () => (
  <Layout>
    <SEO title="Recensioni" description="Cosa dicono di me i miei pazienti. 21 recensioni verificate su Facebook e MioDottore con valutazione 5 su 5." path="/recensioni" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Recensioni</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">
            Cosa dicono di me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Le parole di chi ha intrapreso un percorso con me. Ogni recensione è una storia di coraggio e cambiamento.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-serif font-bold text-foreground">5.0</span>
                <span className="text-2xl text-muted-foreground">/5</span>
              </div>
              <div className="flex justify-center">
                <StarRating />
              </div>
              <p className="text-sm text-muted-foreground">Valutazione media</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-serif font-bold text-foreground">21</p>
              <p className="text-sm text-muted-foreground">Recensioni verificate</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-serif font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Lo consiglierebbero</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Reviews grid */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
            Tutte le recensioni
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* MioDottore link */}
    <section className="section-padding bg-card">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">
            Leggi altre recensioni
          </h2>
          <p className="text-muted-foreground mt-4">
            Puoi trovare tutte le recensioni verificate sul mio profilo MioDottore.
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

    {/* Link to Q&A */}
    <section className="section-padding bg-background">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-2xl font-serif text-foreground">Hai delle domande?</h2>
          <p className="text-muted-foreground mt-2">
            Consulta le risposte alle domande più frequenti che ricevo.
          </p>
          <Link
            to="/domande-risposte"
            className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity mt-4"
          >
            Vai alle Domande e Risposte
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">
            Vuoi iniziare il tuo percorso?
          </h2>
          <p className="text-muted-foreground mt-4">
            Scrivimi. Il primo appuntamento serve a conoscerci e a capire se posso essere la professionista giusta per te.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
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

export default Recensioni;
