import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Monitor, Zap, Euro, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Servizi = () => (
  <Layout>
    <SEO title="Servizi" description="Seduta Singola di Terapia, psicoterapia individuale in studio a Roma e online. Scopri i servizi e i costi." path="/servizi" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Come posso lavorare con te</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">I miei servizi</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Offro sedute singole di terapia e percorsi di psicoterapia, in presenza a Roma e online.
          </p>
        </motion.div>
      </div>
    </section>

    {/* SST - PRIMO SERVIZIO */}
    <section id="sst" className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-10 space-y-8 border border-primary/20 shadow-elevated">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">Seduta Singola di Terapia</h2>
                <p className="text-muted-foreground mt-1">90-120 minuti &mdash; Un incontro intensivo e mirato</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p className="font-script italic text-xl text-primary">
                &ldquo;A volte non serve iniziare subito un percorso lungo. A volte basta uno spazio per fermarsi, pensare e fare chiarezza.&rdquo;
              </p>
              <p>
                La Seduta Singola di Terapia &egrave; un incontro intensivo di <strong>90-120 minuti</strong>,
                pensato per lavorare in modo mirato su una difficolt&agrave; specifica. Durante la seduta esploreremo insieme
                la situazione che stai vivendo, individueremo schemi, dinamiche e punti di forza, e ti aiuter&ograve; a trovare
                nuove prospettive e possibilit&agrave; di cambiamento.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Per chi &egrave; utile:</p>
              <ul className="space-y-2 ml-1">
                {[
                  "Stai vivendo un momento di confusione o blocco",
                  "Devi prendere una decisione importante",
                  "Vuoi comprendere meglio una dinamica relazionale",
                  "Stai attraversando un momento di crisi o cambiamento",
                  "Desideri uno spazio di riflessione senza necessariamente iniziare un percorso continuativo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Cosa puoi ottenere:</p>
              <ul className="space-y-2 ml-1">
                {[
                  "Fare chiarezza su un problema o una decisione",
                  "Riconoscere schemi ricorrenti e dinamiche personali",
                  "Uscire con idee concrete e un nuovo punto di vista",
                  "Vivere un incontro intenso e mirato, senza impegnarti in un percorso lungo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-primary/10 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-serif font-bold text-primary">120&euro;</p>
                <p className="text-xs text-muted-foreground">a seduta</p>
              </div>
              <div className="bg-primary/10 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-serif font-bold text-primary">90-120</p>
                <p className="text-xs text-muted-foreground">minuti</p>
              </div>
              <div className="bg-primary/10 rounded-xl px-5 py-3 text-center">
                <p className="text-2xl font-serif font-bold text-primary">In studio</p>
                <p className="text-xs text-muted-foreground">o online</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Psicoterapia in presenza */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-card rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">Psicoterapia in presenza</h2>
                <p className="text-muted-foreground mt-1">Via Tuscolana 1168, 00172 Roma</p>
              </div>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Il mio studio si trova in <strong>zona Cinecitt&agrave;</strong>, facilmente raggiungibile con i
                mezzi pubblici e con possibilit&agrave; di parcheggio su strada o nei garage della zona. &Egrave; un ambiente caldo, riservato
                e accogliente, pensato per farti sentire a tuo agio fin dal primo momento.
              </p>
              <p>
                Le sedute in presenza permettono di lavorare in un contesto dedicato, lontano dalle distrazioni
                quotidiane, dove puoi concentrarti interamente su di te.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Psicoterapia online */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Monitor className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">Psicoterapia online</h2>
                <p className="text-muted-foreground mt-1">Comodamente da casa, ovunque tu sia</p>
              </div>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Le sedute online si svolgono in videoconsulto e hanno la <strong>stessa efficacia</strong> di
                quelle in presenza. Numerose ricerche lo confermano.
              </p>
              <p>
                Questa modalit&agrave; &egrave; ideale se vivi fuori Roma, hai difficolt&agrave; a spostarti, hai
                orari complessi o semplicemente preferisci la comodit&agrave; di fare terapia da casa.
                Ti serve solo una connessione stabile e uno spazio privato e tranquillo.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Info pratiche */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Info pratiche</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Euro,
              title: "Costi",
              description:
                "Psicoterapia in studio: 60\u20AC a seduta (50 min). Psicoterapia online: 50\u20AC a seduta (50 min). Seduta Singola: 120\u20AC (90-120 min). La fattura sanitaria \u00e8 detraibile nella dichiarazione dei redditi.",
            },
            {
              icon: Clock,
              title: "Frequenza",
              description:
                "La psicoterapia prevede sedute settimanali da 50 minuti. La Seduta Singola \u00e8 un unico incontro intensivo, senza impegno continuativo.",
            },
            {
              icon: MessageCircle,
              title: "Primo appuntamento",
              description:
                "Il primo incontro serve a conoscerci e capire quale servizio \u00e8 pi\u00f9 adatto a te. Ha lo stesso costo di una seduta regolare.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="card-elevated text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
          <h2 className="text-3xl font-serif text-foreground">Vuoi fare il primo passo?</h2>
          <p className="text-muted-foreground mt-4">
            Scrivimi su WhatsApp per prenotare un appuntamento o per qualsiasi domanda.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sui%20suoi%20servizi."
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

export default Servizi;
