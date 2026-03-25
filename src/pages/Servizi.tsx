import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Monitor, Zap, Euro, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Servizi = () => (
  <Layout>
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
            Offro percorsi di psicoterapia in presenza e online, oltre a sedute singole per esigenze specifiche.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Psicoterapia in presenza */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-8 space-y-6">
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
                mezzi pubblici e con ampia possibilit&agrave; di parcheggio. &Egrave; un ambiente caldo, riservato
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
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-card rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Monitor className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">Psicoterapia online</h2>
                <p className="text-muted-foreground mt-1">Comodamente da casa tua, ovunque tu sia</p>
              </div>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Le sedute online si svolgono in videoconsulto e hanno la <strong>stessa efficacia</strong> di
                quelle in presenza. Numerose ricerche lo confermano.
              </p>
              <p>
                Questa modalit&agrave; &egrave; ideale se vivi fuori Roma, hai difficolt&agrave; a spostarti, hai
                orari complessi o semplicemente preferisci la comodit&agrave; di fare terapia da casa tua.
                Ti serve solo una connessione stabile e uno spazio privato e tranquillo.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* SST */}
    <section id="sst" className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">SST &mdash; Single Session Therapy</h2>
                <p className="text-muted-foreground mt-1">Una seduta mirata per un problema specifico</p>
              </div>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                La <strong>Single Session Therapy</strong> &egrave; una singola seduta strutturata per affrontare un
                problema circoscritto. Non sostituisce la psicoterapia, ma pu&ograve; essere molto utile in
                situazioni specifiche.
              </p>
              <p className="font-semibold">Quando pu&ograve; essere utile:</p>
              <ul className="space-y-2 ml-1">
                {[
                  "Hai bisogno di chiarezza su una situazione specifica",
                  "Stai attraversando un momento di crisi",
                  "Devi prendere una decisione importante",
                  "Vuoi uno sguardo professionale su un problema preciso",
                  "Vuoi capire se la psicoterapia fa per te prima di iniziare un percorso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              title: "Costo: 60\u20AC a seduta",
              description:
                "Una tariffa accessibile e trasparente. La fattura sanitaria \u00e8 detraibile nella dichiarazione dei redditi.",
            },
            {
              icon: Clock,
              title: "Frequenza settimanale",
              description:
                "Le sedute hanno cadenza settimanale e durano 50 minuti. La regolarit\u00e0 \u00e8 fondamentale per un percorso efficace.",
            },
            {
              icon: MessageCircle,
              title: "Primo colloquio",
              description:
                "Il primo incontro serve a conoscerci e capire se posso aiutarti. Non \u00e8 vincolante e ha lo stesso costo di una seduta regolare.",
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
          <h2 className="text-3xl font-serif text-foreground">Pronta a iniziare?</h2>
          <p className="text-muted-foreground mt-4">
            Scrivimi su WhatsApp per prenotare un primo colloquio conoscitivo o per qualsiasi domanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sui%20suoi%20servizi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivimi su WhatsApp
            </a>
            <Link
              to="/calcolatore-costo-terapia"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50"
            >
              <Euro className="w-5 h-5" />
              Calcola il costo della terapia
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Servizi;
