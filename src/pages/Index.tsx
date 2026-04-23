import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { Heart, Brain, Shield, Leaf, ArrowRight, CheckCircle2, MessageCircle, HandHeart, HelpCircle, ClipboardCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ilariaGolino from "@/assets/ilaria-golino-new.jpg";
const Index = () => {
  return (
  <Layout>
    <SEO path="/" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <p className="font-script italic text-2xl md:text-3xl text-primary">
              Uno spazio sicuro per prenderti cura di te
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-foreground">
              Psicoterapeuta a Roma specializzata in relazioni e dipendenza affettiva{" "}
              <span className="text-primary italic">— Cinecittà e online</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A volte non serve iniziare subito un percorso lungo. A volte basta uno spazio per fermarsi, pensare e fare chiarezza. Ti accompagno con sedute singole mirate o percorsi di psicoterapia personalizzati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20appuntamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Prenota un appuntamento
              </a>
              <Link
                to="/servizi#sst"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50"
              >
                Scopri la Seduta Singola
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={ilariaGolino}
                alt="Dott.ssa Ilaria Golino - Psicoterapeuta Roma"
                className="w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-3xl shadow-float object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* SST Highlight */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 border border-primary/20 shadow-elevated">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                  Seduta Singola di Terapia
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un incontro intensivo di 90-120 minuti, pensato per lavorare in modo mirato su una difficoltà specifica. Fare chiarezza, comprendere la tua situazione e trovare possibili passi concreti.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-medium">90-120 minuti</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-medium">120 €</span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-medium">In studio o online</span>
                </div>
                <Link
                  to="/servizi#sst"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity mt-2"
                >
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Ti riconosci */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="text-primary font-script text-6xl leading-none mb-2" aria-hidden>&ldquo;</div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Ti riconosci in queste situazioni?
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Hai paura di restare solo/a e accetti relazioni che ti fanno stare male",
            "Ti senti vuoto/a o perso/a quando non sei in una relazione",
            "Fai fatica a mettere confini e dici sempre di sì",
            "Hai la sensazione di non valere abbastanza, di non meritare amore",
            "Il tuo umore dipende completamente da come va la relazione",
            "Ti ritrovi sempre nello stesso tipo di relazione dolorosa",
            "Hai un rapporto difficile con il cibo o con il tuo corpo",
            "Le emozioni ti travolgono e fai fatica a gestirle",
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card hover:bg-secondary/30 transition-colors border border-border/30">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <p className="text-center text-muted-foreground mt-10 text-lg max-w-2xl mx-auto">
            Se ti riconosci in anche solo una di queste frasi, sappi che{" "}
            <span className="font-script italic text-xl text-primary">non c'è nulla di sbagliato in te</span>.
            Hai solo bisogno di uno spazio sicuro dove capire cosa ti succede.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Aree di intervento */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">In cosa posso aiutarti</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Mi occupo di difficoltà specifiche, con un approccio caldo e personalizzato.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Dipendenza affettiva", description: "Liberarti da relazioni tossiche e dalla paura dell'abbandono per costruire legami sani." },
            { icon: Shield, title: "Disturbi di personalità", description: "Gestire l'intensità emotiva, l'instabilità relazionale e costruire un'identità più stabile." },
            { icon: Brain, title: "Ansia e stress", description: "Ritrovare la calma interiore, gestire le preoccupazioni e riprendere il controllo della tua vita." },
            { icon: Leaf, title: "Disturbi alimentari", description: "Ritrovare un rapporto sereno con il cibo e con il tuo corpo, senza giudizio." },
          ].map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.1}>
              <div className="bg-background rounded-2xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="text-center mt-10">
            <Link to="/aree-intervento" className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity">
              Scopri tutte le aree di intervento <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Come posso lavorare con te */}
    <section className="section-padding bg-secondary/40">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground mb-12">
            Come posso lavorare con te
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", icon: Zap, title: "Seduta Singola", description: "Un incontro intensivo di 90-120 minuti per fare chiarezza su una situazione specifica, prendere una decisione o esplorare un momento di crisi. Non richiede un impegno continuativo." },
            { step: "02", icon: HandHeart, title: "Psicoterapia", description: "Un percorso strutturato con sedute settimanali da 50 minuti. Lavoriamo insieme sulle tue difficoltà con strumenti concreti e un ritmo che rispetta i tuoi tempi." },
            { step: "03", icon: MessageCircle, title: "Online o in studio", description: "Entrambe le modalità hanno la stessa efficacia. Scegli quella più comoda: in studio a Roma zona Cinecittà oppure in videoconsulto da dove preferisci." },
          ].map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.15}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mx-auto shadow-soft">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-script italic text-3xl text-primary">{item.step}</span>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Citazione */}
    <section className="section-padding bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-warm-rose/30 blur-3xl" />
      </div>
      <div className="container-wide text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script italic text-3xl md:text-5xl text-warm-cream leading-tight mb-6">
            &ldquo;Non puoi cambiare ciò che è successo, ma puoi cambiare il modo in cui lo vivi oggi.&rdquo;
          </p>
          <p className="text-warm-gold text-sm md:text-base tracking-widest uppercase">
            — Ilaria Golino
          </p>
        </motion.div>
      </div>
    </section>

    {/* A chi mi rivolgo */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">A chi mi rivolgo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lavoro con adulti e giovani adulti che sentono di vivere relazioni che li fanno soffrire,
                che faticano a gestire le emozioni o che hanno un rapporto complicato con se stessi.
              </p>
              <div className="space-y-4">
                {[
                  "Persone che si sentono intrappolate in relazioni tossiche o di dipendenza",
                  "Chi vive emozioni intense e travolgenti",
                  "Chi ha difficoltà con il cibo o con l'immagine corporea",
                  "Chi vuole lavorare sull'autostima e imparare a volersi bene",
                  "Persone che stanno attraversando un momento di crisi o cambiamento",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="card-elevated bg-secondary/30 space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Modalità di lavoro</h3>
              <div className="space-y-4">
                {[
                  { title: "In studio a Roma", sub: "Via Tuscolana 1168 - zona Cinecittà" },
                  { title: "Online in videoconsulto", sub: "Comodamente da casa, stessa efficacia" },
                  { title: "Seduta singola o percorso continuativo", sub: "In base alle tue esigenze e ai tuoi obiettivi" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Risorse utili */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Risorse utili</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Strumenti gratuiti per aiutarti a fare chiarezza sulla tua situazione.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: HelpCircle, title: "Faccio al caso tuo?", description: "Un breve quiz per capire se il mio approccio è adatto alle tue esigenze.", link: "/quiz" },
            { icon: ClipboardCheck, title: "Test di auto-valutazione", description: "Rispondi a poche domande per riflettere sul tuo rapporto con le relazioni o con il cibo.", link: "/test-relazioni-dannose" },
            { icon: Brain, title: "Psicologo o Psicoterapeuta?", description: "Scopri le differenze tra le figure professionali della salute mentale.", link: "/psicologo-psicoterapeuta-psichiatra-differenze" },
          ].map((tool, i) => (
            <AnimatedSection key={tool.title} delay={i * 0.1}>
              <Link to={tool.link} className="card-elevated text-center space-y-4 hover:shadow-float transition-shadow bg-background border border-border/50 group block h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/15 transition-colors">
                  <tool.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">{tool.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Provalo <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
            Richiedi un appuntamento
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Compila il modulo e ti ricontatterò per fissare un appuntamento.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ContactForm compact />
        </AnimatedSection>
      </div>
    </section>

    {/* CTA Finale */}
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Il primo passo è il più importante
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
            Non devi avere tutto chiaro per iniziare. Scrivimi e raccontami cosa stai vivendo:
            insieme capiremo se posso esserti d'aiuto.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20appuntamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated text-lg mt-6"
          >
            <MessageCircle className="w-5 h-5" />
            Scrivimi su WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

}

export default Index;

