import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Award, Heart, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChiSono = () => (
  <Layout>
    <SEO title="Chi Sono" description="Sono Ilaria Golino, Psicologa Psicoterapeuta e Analista Transazionale Certificata a Roma. Scopri la mia formazione e il mio approccio." path="/chi-sono" />
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center space-y-6">
          <p className="font-script italic text-2xl text-primary">Chi sono</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Dott.ssa Ilaria Golino</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Psicologa Psicoterapeuta, Analista Transazionale Certificata (CTA), membro EATA. Accompagno le persone a comprendersi meglio e a costruire relazioni più sane, in uno spazio sicuro e senza giudizio.
          </p>
          <p className="text-sm text-muted-foreground/80">Iscritta all'Ordine degli Psicologi del Lazio, Sezione A n. 24381.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-narrow space-y-8">
        <AnimatedSection>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>Sono Ilaria Golino, Psicologa Psicoterapeuta e <strong>Analista Transazionale Certificata (CTA)</strong>, membro dell'EATA (European Association for Transactional Analysis). Ricevo nel mio studio privato a Roma e online.</p>
            <p>Mi sono specializzata in <strong>Analisi Transazionale integrata</strong>, un approccio che mette al centro la relazione tra terapeuta e paziente e lavora su come ci relazioniamo con noi stessi e con gli altri. Lavoro principalmente con persone che vivono <strong>difficoltà nelle relazioni</strong>: chi si ritrova sempre in legami dolorosi, chi ha paura dell'abbandono, chi fa fatica a stare da solo/a o chi sente di non valere abbastanza.</p>
            <p>Mi occupo anche di <strong>disturbo borderline di personalità</strong>, <strong>disturbi alimentari</strong> e di <strong>orientamento professionale</strong>, aiutando le persone a ritrovare direzione e motivazione nel proprio percorso lavorativo.</p>
            <p>Credo che ogni persona abbia in sé le risorse per cambiare. Il mio compito è creare uno spazio sicuro dove poterle scoprire insieme, senza giudizio e con i tuoi tempi.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Perché mi occupo di queste tematiche</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Heart, title: "Le relazioni ci definiscono", description: "Le difficoltà relazionali sono spesso la manifestazione di ferite profonde. Lavorare sulle relazioni significa lavorare sul nucleo del malessere." },
            { icon: CheckCircle2, title: "Il cambiamento è possibile", description: "Anche i pattern più radicati possono essere trasformati. L'Analisi Transazionale offre strumenti concreti per cambiare schemi relazionali ripetitivi." },
            { icon: Award, title: "Formazione specifica", description: "Mi sono formata specificamente su dipendenza affettiva, disturbi di personalità e disturbi alimentari per offrire un supporto mirato ed efficace." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="text-center space-y-4">
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

    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Formazione e credenziali</h2>
        </AnimatedSection>
        <div className="space-y-6">
          {[
            { icon: GraduationCap, title: "Laurea Triennale in Psicologia", subtitle: "Scienze e Tecniche Psicologiche dei Processi Cognitivi — Sapienza Università di Roma" },
            { icon: GraduationCap, title: "Laurea Magistrale in Psicologia Clinica", subtitle: "Psicologia Clinica, della Salute e della Comunità — Università dell'Aquila" },
            { icon: Award, title: "Tirocinio professionalizzante", subtitle: "Centro di Psicologia Criminale e Istituto di Sessuologia Clinica di Roma" },
            { icon: Award, title: "Esame di Stato e Iscrizione all'Albo", subtitle: "Ordine degli Psicologi del Lazio — Sez. A n. 24381 (gennaio 2019)" },
            { icon: GraduationCap, title: "Master II Livello in Psicodiagnosi", subtitle: "Sapienza Università di Roma — MMPI, Rorschach, test proiettivi e psicodiagnostici" },
            { icon: GraduationCap, title: "Specializzazione in Psicoterapia", subtitle: "Analisi Transazionale integrata — Università Pontificia Salesiana di Roma" },
            { icon: Award, title: "CTA — Analista Transazionale Certificata", subtitle: "Membro EATA (European Association for Transactional Analysis)" },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-background">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Domande frequenti</h2>
        </AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Qual è la differenza tra psicologa e psicoterapeuta?", a: "La psicologa ha una laurea in psicologia e l'abilitazione. La psicoterapeuta ha inoltre completato una specializzazione di 4 anni che la abilita a fare psicoterapia, ovvero un percorso più profondo e strutturato. Io sono entrambe." },
            { q: "Cos'è l'Analisi Transazionale?", a: "È un approccio psicoterapeutico che si concentra sulle relazioni e sulla comunicazione. Aiuta a capire come ci relazioniamo con gli altri e con noi stessi, e a modificare i pattern che ci fanno stare male. È un approccio caldo, collaborativo e orientato al cambiamento concreto." },
            { q: "Come faccio a capire se ho bisogno di supporto psicologico?", a: "Se stai leggendo questa pagina, probabilmente qualcosa ti sta facendo soffrire. Non serve stare 'abbastanza male' per chiedere aiuto. Se senti che le tue relazioni, le tue emozioni o il rapporto con te stesso/a ti creano sofferenza, un primo colloquio può aiutarti a fare chiarezza." },
            { q: "Quanto dura un percorso di psicoterapia?", a: "Dipende dalla persona e dalle difficoltà. Un percorso può durare da alcuni mesi a qualche anno. Ne parliamo insieme e valutiamo periodicamente i progressi. L'obiettivo è sempre la tua autonomia." },
            { q: "Qual è la differenza tra psicoterapia e Seduta Singola?", a: "La psicoterapia è un percorso continuativo con sedute settimanali da 50 minuti, ideale per lavorare in profondità su difficoltà strutturate. La Seduta Singola è un incontro intensivo di 90-120 minuti, pensato per fare chiarezza su un problema specifico senza impegno continuativo." },
            { q: "Lavori anche online?", a: "Sì, offro sedute in videoconsulto con la stessa efficacia delle sedute in studio. Molte persone preferiscono questa modalità per comodità o perché vivono fuori Roma." },
            { q: "Il primo appuntamento è a pagamento?", a: "Sì, il primo incontro ha lo stesso costo di una seduta regolare. Serve a conoscerci e a capire insieme quale percorso è più adatto a te: non c'è obbligo di proseguire." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">Vuoi saperne di più?</h2>
          <p className="text-muted-foreground mt-4">Scrivimi per qualsiasi domanda o per prenotare un appuntamento.</p>
          <a href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20sul%20suo%20percorso%20e%20il%20suo%20approccio." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated mt-6">
            <MessageCircle className="w-5 h-5" />
            Scrivimi su WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ChiSono;
