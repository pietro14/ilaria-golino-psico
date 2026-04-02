import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, MapPin, Clock, Shield, Mail, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20appuntamento.";

interface TemplateMessage {
  title: string;
  category: string;
  text: string;
}

const templates: TemplateMessage[] = [
  {
    title: "Dipendenza affettiva",
    category: "Dipendenza affettiva",
    text: "Buongiorno Dott.ssa Golino, la contatto perch\u00e9 mi ritrovo spesso in relazioni che mi fanno soffrire e sento di non riuscire a stare bene senza un partner. Vorrei capire se posso intraprendere un percorso con lei per lavorare su questo aspetto.",
  },
  {
    title: "Difficolt\u00e0 relazionali",
    category: "Difficolt\u00e0 relazionali",
    text: "Buongiorno Dott.ssa Golino, sto vivendo un momento di grande difficolt\u00e0 nella mia relazione e sento il bisogno di parlare con un professionista. Vorrei fissare un primo appuntamento per capire come poter affrontare questa situazione.",
  },
  {
    title: "Disturbi alimentari",
    category: "Disturbi alimentari",
    text: "Buongiorno Dott.ssa Golino, ho un rapporto complicato con il cibo e con il mio corpo da diverso tempo. Vorrei capire se il suo approccio pu\u00f2 aiutarmi a ritrovare un equilibrio pi\u00f9 sano.",
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

const infoCards = [
  {
    icon: MapPin,
    title: "Studio",
    lines: ["Via Tuscolana 1168", "00172 Roma (zona Cinecitt\u00e0)"],
  },
  {
    icon: Clock,
    title: "Orari",
    lines: ["Luned\u00ec \u2014 Venerd\u00ec", "9:00 \u2014 20:00"],
  },
  {
    icon: Shield,
    title: "Riservatezza",
    lines: ["Massima riservatezza garantita", "Rispetto del codice deontologico"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["ilaria.golino3@gmail.com", "PEC: ilaria.golino@psypec.it"],
  },
];

const Contatti = () => (
  <Layout>
    <SEO
      title="Contatti"
      description="Contattami per un primo appuntamento. Studio in Via Tuscolana 1168, Roma. WhatsApp: 351 549 9417."
      path="/contatti"
    />

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
          {/* Mobile-only quick WhatsApp CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Scrivimi su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>

    {/* Main content: Form + Sidebar */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form — takes 3/5 on desktop */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="rounded-2xl bg-card p-6 md:p-8 border border-border/50 shadow-soft">
                <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-2">
                  Richiedi un appuntamento
                </h2>
                <p className="text-center text-muted-foreground mb-6 text-sm md:text-base">
                  Compila il modulo e ti ricontatterò per fissare il primo appuntamento.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar — takes 2/5 on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp card */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl bg-[#25D366] p-6 text-center text-white space-y-3 shadow-elevated">
                <MessageCircle className="w-8 h-8 mx-auto" />
                <h3 className="text-lg font-serif font-bold">Scrivimi su WhatsApp</h3>
                <p className="text-white/90 text-sm">
                  Il modo più veloce per contattarmi. Rispondo di solito entro poche ore.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] px-5 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-md text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Apri WhatsApp
                </a>
                <p className="text-white/70 text-xs">+39 351 549 9417</p>
              </div>
            </AnimatedSection>

            {/* Info pratiche cards */}
            {infoCards.map((info, i) => (
              <AnimatedSection key={info.title} delay={0.2 + i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/50 shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm">
                      {info.title}
                    </h3>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Template messages — compact */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-2">
            Non sai cosa scrivere?
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto text-sm md:text-base">
            Ecco alcuni messaggi che puoi usare come punto di partenza.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {templates.map((template, i) => (
            <AnimatedSection key={template.title} delay={i * 0.1}>
              <div className="bg-background rounded-2xl p-5 border border-border/50 space-y-3 h-full flex flex-col">
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary self-start">
                  {template.category}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {template.text}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
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

    {/* Final CTA — simple */}
    <section className="section-padding bg-warm-blush">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="font-script italic text-xl md:text-2xl text-primary mb-3">
            Non c'è un momento perfetto per iniziare
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            C'è solo il momento in cui decidi di prenderti cura di te
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
          >
            <MessageCircle className="w-5 h-5" />
            Scrivimi su WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* Floating WhatsApp button — mobile only */}
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-float hover:scale-105 transition-transform"
      aria-label="Scrivimi su WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  </Layout>
);

export default Contatti;
