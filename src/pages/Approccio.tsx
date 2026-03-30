import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, Shield, CheckCircle2, Monitor, Zap, Calendar, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Approccio = () => (
  <Layout>
    <SEO title="Il Mio Approccio" description="Analisi Transazionale integrata: un approccio caldo, collaborativo e orientato al cambiamento concreto." path="/approccio" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Come lavoro con te</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Il mio approccio</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un percorso basato sulla relazione, sulla comprensione profonda e su strumenti concreti per il cambiamento.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Analisi Transazionale */}
    <section className="section-padding bg-card">
      <div className="container-narrow space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-8">L'Analisi Transazionale</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              L'<strong>Analisi Transazionale (AT)</strong> è un approccio psicoterapeutico che mette al centro la
              relazione tra terapeuta e paziente. Si basa sull'idea che ognuno di noi, fin dall'infanzia, sviluppa
              dei <strong>pattern relazionali</strong> — modi ricorrenti di pensare, sentire e comportarsi — che
              influenzano profondamente la nostra vita adulta.
            </p>
            <p>
              Attraverso l'AT, lavoriamo insieme per riconoscere questi schemi, capire come si sono formati e
              trasformarli in modi più sani di relazionarsi con sé stessi e con gli altri. È un approccio
              <strong> caldo, collaborativo e orientato al cambiamento concreto</strong>.
            </p>
            <p>
              Non è un percorso in cui ti dico cosa fare: è un percorso in cui ti aiuto a capire cosa ti succede
              e a trovare le tue risposte, rispettando i tuoi tempi e la tua unicità.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Cosa rende il mio approccio diverso */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
            Cosa rende il mio approccio diverso
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Heart,
              title: "Relazione autentica",
              description: "La relazione terapeutica è il cuore del cambiamento. Con me trovi uno spazio vero, non un ruolo distante.",
            },
            {
              icon: Users,
              title: "Focus sulle relazioni",
              description: "Lavoriamo su come ti relazioni con gli altri e con te stessa, perché è lì che si gioca gran parte del benessere.",
            },
            {
              icon: Shield,
              title: "Spazio sicuro",
              description: "Un ambiente protetto, senza giudizio, dove puoi esprimerti liberamente e sentirti accolta.",
            },
            {
              icon: CheckCircle2,
              title: "Strumenti concreti",
              description: "Non solo ascolto: ti offro strumenti pratici per comprendere i tuoi schemi e iniziare a cambiarli.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Cosa aspettarsi dal percorso */}
    <section className="section-padding bg-secondary/40">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
            Cosa aspettarsi dal percorso
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Conoscersi e capire",
              description:
                "Nei primi incontri ci conosciamo. Mi racconti la tua storia, le tue difficoltà, cosa ti ha portato qui. Insieme definiamo gli obiettivi del percorso.",
            },
            {
              step: "02",
              title: "Lavorare in profondità",
              description:
                "Esploriamo i tuoi pattern relazionali, le emozioni che li accompagnano e le esperienze che li hanno generati. È la fase del cambiamento profondo.",
            },
            {
              step: "03",
              title: "Verso l'autonomia",
              description:
                "Man mano che cresci nel percorso, conquisti sempre più autonomia emotiva. L'obiettivo finale è che tu possa stare bene senza la terapia.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.15}>
              <div className="text-center space-y-4">
                <span className="font-script italic text-3xl text-primary">{item.step}</span>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Psicoterapia Online + SST */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-background rounded-2xl p-6 md:p-8 h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Psicoterapia Online</h3>
              <p className="text-muted-foreground leading-relaxed">
                Le sedute online hanno la stessa efficacia di quelle in presenza. Ti permettono di fare terapia
                comodamente da casa tua, ovunque tu sia. Ideale se vivi fuori Roma, hai difficoltà a spostarti
                o semplicemente preferisci la comodità del videoconsulto.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-background rounded-2xl p-6 md:p-8 h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">SST — Single Session Therapy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Una singola seduta mirata per affrontare un problema specifico. Non sostituisce la psicoterapia,
                ma può essere utile per momenti di crisi, decisioni importanti o quando hai bisogno di uno
                sguardo professionale su una situazione precisa.
              </p>
              <Link to="/servizi#sst" className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity text-sm">
                Scopri di più sulla SST
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Frequenza e durata */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Frequenza e durata</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="card-elevated text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Frequenza settimanale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Le sedute hanno cadenza settimanale. La regolarità è fondamentale per costruire un percorso
                efficace e mantenere la continuità del lavoro terapeutico.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="card-elevated text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">50 minuti a seduta</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ogni seduta dura 50 minuti, un tempo che permette di lavorare in profondità mantenendo
                concentrazione e intensità.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Domande frequenti</h2>
        </AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              q: "L'Analisi Transazionale è adatta a tutti?",
              a: "Sì, l'AT è un approccio versatile che si adatta a diverse problematiche e tipologie di persone. È particolarmente efficace per chi vuole lavorare sulle relazioni e sui pattern emotivi ricorrenti.",
            },
            {
              q: "Quanto dura un percorso di psicoterapia?",
              a: "Non esiste una durata standard. Dipende dalle tue difficoltà, dai tuoi obiettivi e dal tuo ritmo. Un percorso può durare da alcuni mesi a qualche anno. Ne parliamo insieme e valutiamo periodicamente i progressi.",
            },
            {
              q: "La terapia online è efficace quanto quella in presenza?",
              a: "Sì, numerose ricerche confermano che la psicoterapia online ha la stessa efficacia di quella in studio. L'importante è avere una connessione stabile e uno spazio privato e tranquillo.",
            },
            {
              q: "Il primo colloquio è vincolante?",
              a: "Assolutamente no. Il primo colloquio serve a conoscerci e a capire se posso essere la professionista giusta per te. Non c'è nessun obbligo di proseguire.",
            },
            {
              q: "Come faccio a sapere se ho bisogno di psicoterapia?",
              a: "Se senti che qualcosa nella tua vita non funziona — nelle relazioni, nelle emozioni, nel rapporto con te stessa — un primo colloquio può aiutarti a fare chiarezza. Non serve stare 'abbastanza male' per chiedere aiuto.",
            },
            {
              q: "Cosa succede durante una seduta?",
              a: "Parliamo. Ti ascolto, ti faccio domande, ti aiuto a vedere le cose da prospettive diverse. A volte lavoriamo su episodi specifici, altre volte su schemi più ampi. Ogni seduta è diversa e si adatta a ciò che porti.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">Vuoi iniziare un percorso?</h2>
          <p className="text-muted-foreground mt-4">
            Scrivimi per un primo appuntamento. Insieme capiremo se il mio approccio fa per te.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sul%20suo%20approccio%20terapeutico."
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

export default Approccio;
