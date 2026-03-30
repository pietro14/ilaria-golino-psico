import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, MapPin, Clock, Shield, Mail, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface TemplateMessage {
  title: string;
  category: string;
  text: string;
}

const templates: TemplateMessage[] = [
  {
    title: "Dipendenza affettiva",
    category: "Dipendenza affettiva",
    text: "Buongiorno Dott.ssa Golino, la contatto perché mi ritrovo spesso in relazioni che mi fanno soffrire e sento di non riuscire a stare bene senza un partner. Vorrei capire se posso intraprendere un percorso con lei per lavorare su questo aspetto.",
  },
  {
    title: "Difficoltà relazionali",
    category: "Difficoltà relazionali",
    text: "Buongiorno Dott.ssa Golino, sto vivendo un momento di grande difficoltà nella mia relazione e sento il bisogno di parlare con un professionista. Vorrei fissare un primo appuntamento per capire come poter affrontare questa situazione.",
  },
  {
    title: "Disturbi alimentari",
    category: "Disturbi alimentari",
    text: "Buongiorno Dott.ssa Golino, ho un rapporto complicato con il cibo e con il mio corpo da diverso tempo. Vorrei capire se il suo approccio può aiutarmi a ritrovare un equilibrio più sano.",
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          Copiato!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copia testo
        </>
      )}
    </button>
  );
};

const Contatti = () => (
    <Layout>
      <SEO title="Contatti" description="Contattami per un primo appuntamento. Studio in Via Tuscolana 1168, Roma. WhatsApp: 351 549 9417." path="/contatti" />
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="font-script italic text-2xl text-primary">Contatti</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Parliamone insieme
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il primo passo è il più importante. Scrivimi per fissare un primo appuntamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#25D366] p-8 md:p-10 text-center text-white space-y-4 shadow-elevated">
              <MessageCircle className="w-12 h-12 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Scrivimi su WhatsApp
              </h2>
              <p className="text-white/90 max-w-lg mx-auto">
                Il modo più veloce per contattarmi. Rispondero il prima possibile, di solito entro poche ore.
              </p>
              <a
                href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-colors shadow-lg mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Apri WhatsApp
              </a>
              <p className="text-white/70 text-sm">+39 351 549 9417</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
              Richiedi un appuntamento
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
              Compila il modulo e ti ricontatterò per fissare il primo appuntamento.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Template messages */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
              Non sai cosa scrivere?
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
              Ecco alcuni messaggi pre-compilati che puoi usare come punto di partenza.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((template, i) => (
              <AnimatedSection key={template.title} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-6 border border-border/50 space-y-4 h-full flex flex-col">
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start">
                    {template.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground">{template.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {template.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <CopyButton text={template.text} />
                    <a
                      href={`https://wa.me/393515499417?text=${encodeURIComponent(template.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#25D366] font-medium hover:opacity-80 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Invia su WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info pratiche */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">
              Informazioni pratiche
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Studio",
                lines: ["Via Tuscolana 1168", "00172 Roma (zona Cinecittà)"],
              },
              {
                icon: Clock,
                title: "Orari",
                lines: ["Lunedì — Venerdì", "9:00 — 20:00"],
              },
              {
                icon: Shield,
                title: "Riservatezza",
                lines: [
                  "Massima riservatezza garantita",
                  "Rispetto del codice deontologico",
                ],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["Ilaria.golino3@gmail.com", "PEC: ilaria.golino@psypec.it"],
              },
            ].map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <div className="text-center space-y-4 p-6 bg-card rounded-2xl border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {info.title}
                  </h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance quote */}
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
              &ldquo;Chiedere aiuto non è un segno di debolezza, ma il primo atto di coraggio verso il cambiamento.&rdquo;
            </p>
            <p className="text-warm-gold text-sm md:text-base tracking-widest uppercase">
              — Ilaria Golino
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">Il primo passo è il più importante?</h2>
            <p className="text-muted-foreground mt-4">
              Non c'è un momento perfetto per iniziare. C'è solo il momento in cui decidi di prenderti cura di te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Scrivimi su WhatsApp
              </a>
              <a
                href="https://www.miodottore.it/ilaria-golino/psicologo-psicoterapeuta/roma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50"
              >
                Prenota su MioDottore
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
);

export default Contatti;
