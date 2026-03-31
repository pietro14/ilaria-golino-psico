import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Heart, Shield, Leaf, Brain, Flame, Star, AlertCircle, MessageCircle, CheckCircle2, ArrowRight, CloudRain, Compass } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const aree = [
  {
    icon: Heart,
    title: "Dipendenza affettiva e difficoltà relazionali",
    id: "dipendenza-affettiva",
    intro: "La dipendenza affettiva è un pattern relazionale in cui il proprio valore e benessere dipendono completamente dall'altra persona. Non è amore: è paura.",
    segnali: [
      "Terrore dell'abbandono che ti porta ad accettare qualsiasi cosa",
      "Bisogno costante di rassicurazioni dal partner",
      "Perdita della propria identità nella relazione",
      "Difficoltà a stare da soli senza sentirsi vuoti",
      "Relazioni con partner emotivamente non disponibili",
      "Gelosia intensa e controllo ossessivo",
      "Mettere sempre i bisogni dell'altro prima dei propri",
    ],
    come: "Lavoriamo insieme per capire l'origine di questi schemi, spesso legati a esperienze relazionali precoci. Attraverso l'Analisi Transazionale, impari a riconoscere i tuoi bisogni autentici, a mettere confini sani e a costruire relazioni basate sulla reciprocità, non sulla paura.",
  },
  {
    icon: Shield,
    title: "Disturbo borderline di personalità",
    id: "disturbo-borderline",
    intro: "Il disturbo borderline si caratterizza per un'intensa instabilità emotiva, relazionale e dell'immagine di sé. Non è una condanna: con il giusto supporto, si può imparare a gestirlo.",
    segnali: [
      "Emozioni molto intense e difficili da regolare",
      "Relazioni instabili: idealizzazione e svalutazione alternate",
      "Paura intensa dell'abbandono, reale o immaginario",
      "Senso di vuoto cronico",
      "Impulsività (spese eccessive, abbuffate, comportamenti a rischio)",
      "Immagine di sé instabile, non sai chi sei davvero",
      "Rabbia intensa e inappropriata",
    ],
    come: "La psicoterapia con il disturbo borderline richiede un lavoro profondo sulla regolazione emotiva e sulla stabilità relazionale. Creo un ambiente terapeutico sicuro e prevedibile, dove puoi esplorare le tue emozioni senza sentirti giudicato/a. Lavoriamo sulla mentalizzazione, sulla gestione dell'impulsività e sulla costruzione di un'identità più stabile.",
  },
  {
    icon: Leaf,
    title: "Disturbi alimentari",
    id: "disturbi-alimentari",
    intro: "I disturbi alimentari non riguardano solo il cibo: sono l'espressione di un disagio profondo che tocca l'identità, le relazioni e il modo di regolare le emozioni.",
    segnali: [
      "Rapporto conflittuale con il cibo (restrizione, abbuffate, purghe)",
      "Pensiero ossessivo sul peso e sulla forma del corpo",
      "Usare il cibo per regolare le emozioni",
      "Evitamento sociale legato al cibo o al corpo",
      "Senso di colpa e vergogna dopo aver mangiato",
      "Controllo eccessivo su calorie, porzioni, esercizio fisico",
    ],
    come: "Non lavoro sulla dieta ma sulla relazione con il cibo, con il corpo e con te stesso/a. Esploriamo insieme il significato emotivo del sintomo alimentare e lavoriamo sulle difficoltà relazionali e identitarie che lo alimentano. Quando necessario, collaboro con nutrizionisti e medici per un approccio integrato.",
  },
  {
    icon: Shield,
    title: "Disturbi di personalità",
    id: "disturbi-personalita",
    intro: "I disturbi di personalità — borderline, narcisistico, dipendente e altri — si caratterizzano per schemi rigidi e pervasivi nel modo di percepire sé stessi, gli altri e il mondo.",
    segnali: [
      "Relazioni instabili: idealizzazione e svalutazione alternate",
      "Dipendenza eccessiva dagli altri per il proprio valore personale",
      "Bisogno costante di ammirazione e difficoltà nell'empatia",
      "Emozioni molto intense e difficili da regolare",
      "Paura intensa dell'abbandono",
      "Senso di vuoto cronico e instabilità dell'immagine di sé",
      "Impulsività e difficoltà nella regolazione della rabbia",
    ],
    come: "La psicoterapia con i disturbi di personalità richiede un lavoro profondo sulla regolazione emotiva e sulla stabilità relazionale. Creo un ambiente terapeutico sicuro e prevedibile, dove puoi esplorare le tue emozioni senza sentirti giudicato/a.",
  },
  {
    icon: Brain,
    title: "Trattamento dell'ansia",
    id: "ansia",
    intro: "L'ansia è una risposta naturale del corpo, ma quando diventa pervasiva e incontrollabile può paralizzare la tua vita quotidiana, le tue relazioni e il tuo benessere.",
    segnali: [
      "Preoccupazione costante e difficile da controllare",
      "Tensione muscolare, tachicardia, difficoltà respiratorie",
      "Attacchi di panico o forte paura che accadano",
      "Evitamento di situazioni sociali o luoghi specifici",
      "Difficoltà a dormire o sonno disturbato",
      "Sensazione di essere sempre in allerta",
    ],
    come: "Lavoriamo insieme per capire cosa alimenta la tua ansia: spesso dietro c'è una difficoltà relazionale, una paura dell'abbandono o un bisogno di controllo. Attraverso l'Analisi Transazionale, impari a riconoscere i tuoi schemi ansiosi e a sviluppare strategie concrete per gestirli.",
  },
  {
    icon: Flame,
    title: "Gestione dello stress",
    id: "stress",
    intro: "Lo stress cronico non è solo stanchezza: è un segnale che qualcosa nella tua vita ha bisogno di attenzione.",
    segnali: [
      "Sensazione costante di essere sopraffatti",
      "Irritabilità e reazioni sproporzionate",
      "Difficoltà di concentrazione e memoria",
      "Stanchezza cronica che non migliora con il riposo",
      "Somatizzazioni: mal di testa, problemi digestivi, tensione",
      "Ritiro sociale e perdita di interesse per le attività piacevoli",
    ],
    come: "Esploriamo insieme le fonti del tuo stress e le convinzioni che ti impediscono di rallentare. Lavoriamo su confini sani, gestione delle priorità e su come prenderti cura di te senza sensi di colpa.",
  },
  {
    icon: Star,
    title: "Autostima e crescita personale",
    id: "autostima-crescita",
    intro: "Bassa autostima, sensazione di non valere, autocritica costante: spesso sono il risultato di esperienze relazionali che ci hanno insegnato a non fidarci di noi stessi.",
    segnali: [
      "Sensazione costante di non essere abbastanza",
      "Autocritica costante e dialogo interno negativo",
      "Difficoltà ad accettare complimenti o riconoscimenti",
      "Tendenza a confrontarsi con gli altri sentendosi inferiori",
      "Difficoltà a prendere decisioni per paura di sbagliare",
      "Umore basso, mancanza di energia e motivazione",
      "Momenti di crisi legati a separazioni, lutti, cambiamenti di vita",
    ],
    come: "Lavoriamo sul tuo dialogo interno e su come ti sei costruito/a un'immagine di te che non ti corrisponde. Attraverso l'Analisi Transazionale, esploriamo le convinzioni su te stesso/a che hai interiorizzato e che oggi ti limitano.",
  },
  {
    icon: CloudRain,
    title: "Elaborazione del lutto",
    id: "lutto",
    intro: "La perdita di una persona cara è tra le esperienze più dolorose che possiamo vivere. Il lutto ha i suoi tempi e non esiste un modo giusto o sbagliato di attraversarlo, ma quando il dolore diventa paralizzante o sembra non trovare una via d'uscita, chiedere aiuto è un atto di cura verso se stessi.",
    segnali: [
      "Dolore intenso che non accenna a diminuire con il passare del tempo",
      "Difficoltà a riprendere le attività quotidiane e a trovare motivazione",
      "Senso di colpa, rabbia o rimpianto legati alla perdita",
      "Isolamento sociale e ritiro dalle relazioni",
      "Sensazione di vuoto persistente o di aver perso una parte di sé",
      "Difficoltà a parlare della persona cara senza essere travolti dall'emozione",
    ],
    come: "Lavoriamo insieme per dare spazio al dolore senza esserne sopraffatti. Il percorso terapeutico ti aiuta a elaborare la perdita, a trovare un significato in ciò che è accaduto e a integrare l'assenza nella tua vita, conservando il legame con la persona cara in una forma nuova.",
  },
  {
    icon: Compass,
    title: "Trauma",
    id: "trauma",
    intro: "Il trauma non è solo ciò che è accaduto, ma l'effetto che ha lasciato su di te. Esperienze dolorose — relazionali, familiari o di altro tipo — possono continuare a influenzare il modo in cui vivi, ti relazioni e percepisci te stesso/a, anche a distanza di anni.",
    segnali: [
      "Ricordi intrusivi, flashback o incubi legati a un evento doloroso",
      "Evitamento di situazioni, luoghi o persone che richiamano il trauma",
      "Stato di allerta costante, ipervigilanza o reazioni eccessive a stimoli innocui",
      "Difficoltà a fidarsi degli altri e a sentirsi al sicuro nelle relazioni",
      "Senso di distacco emotivo, intorpidimento o disconnessione da sé",
      "Difficoltà a regolare le emozioni: esplosioni di rabbia, pianto improvviso, ansia intensa",
    ],
    come: "Il lavoro sul trauma richiede un ambiente terapeutico sicuro e un ritmo che rispetti i tuoi tempi. Attraverso l'Analisi Transazionale, esploriamo l'impatto delle esperienze traumatiche sui tuoi schemi relazionali e sulla tua immagine di te, lavorando per restituirti un senso di sicurezza e di padronanza sulla tua vita.",
  },
];

const faq = [
  { q: "Non sono sicura di avere un disturbo. Posso comunque venire?", a: "Assolutamente sì. Non serve un'etichetta diagnostica per chiedere aiuto. Se stai soffrendo, questo è sufficiente." },
  { q: "La dipendenza affettiva è una malattia?", a: "Non è una diagnosi clinica nel senso stretto, ma è un pattern relazionale che causa molta sofferenza. È assolutamente trattabile con la psicoterapia." },
  { q: "Lavori anche con gli uomini?", a: "Certo. Le difficoltà relazionali, la dipendenza affettiva e i disturbi alimentari non riguardano solo le donne. Accolgo chiunque senta di averne bisogno." },
  { q: "Posso fare terapia se sto già prendendo farmaci?", a: "Sì, psicoterapia e farmacoterapia possono lavorare in sinergia. Se necessario, collaboro con lo psichiatra che ti segue." },
];

const quandoChiedereAiuto = [
  "La sofferenza dura da tempo e non riesci a gestirla da solo/a",
  "Le tue relazioni seguono sempre lo stesso schema doloroso",
  "Le emozioni ti travolgono e condizionano la tua vita quotidiana",
  "Il rapporto con il cibo o con il tuo corpo è diventato un problema",
  "Ti senti bloccato/a e non sai come andare avanti",
  "Le persone vicine ti hanno suggerito di parlare con qualcuno",
];

const AreeIntervento = () => (
  <Layout>
    <SEO title="Aree di Intervento" description="Dipendenza affettiva, disturbi di personalità, disturbi alimentari, ansia e stress. Scopri le aree in cui posso aiutarti." path="/aree-intervento" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
          <p className="font-script italic text-2xl text-primary">Aree di intervento</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Di cosa mi occupo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Queste sono le aree in cui mi sono specializzata e che trovi descritte in dettaglio qui sotto. Se la tua difficoltà non rientra tra quelle elencate, contattami: potrei comunque esserti d'aiuto.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Aree di intervento */}
    {aree.map((area, i) => (
      <section key={area.id} id={area.id} className={`section-padding ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
        <div className="container-narrow space-y-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">{area.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{area.intro}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Segnali a cui prestare attenzione
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {area.segnali.map((segnale) => (
                  <div key={segnale} className="flex items-start gap-3 p-3 rounded-2xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{segnale}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="p-6 rounded-2xl bg-secondary/20 shadow-elevated">
              <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-primary" />
                Come lavoro
              </h3>
              <p className="text-muted-foreground leading-relaxed">{area.come}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    ))}

    {/* Quando chiedere aiuto */}
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Quando chiedere aiuto</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {quandoChiedereAiuto.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.1}>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Domande frequenti</h2>
        </AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">Riconosci qualcosa di tuo?</h2>
          <p className="text-muted-foreground mt-4">Il primo passo è il più difficile, ma non devi farlo da solo/a. Scrivimi per un primo appuntamento.</p>
          <a href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sulle%20aree%20di%20intervento." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated mt-6">
            <MessageCircle className="w-5 h-5" />
            Scrivimi su WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default AreeIntervento;
