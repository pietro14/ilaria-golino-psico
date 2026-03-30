import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Train, Car, Monitor, Shield, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import studioPoltrona from "@/assets/studio-poltrona.png";
import studioPanoramica from "@/assets/studio-panoramica.png";
import studioAngolo from "@/assets/studio-angolo.png";

const Studio = () => (
  <Layout>
    <SEO title="Lo Studio" description="Il mio studio a Roma, zona Cinecittà, vicino Metro A Giulio Agricola. Ricevo anche online in videoconsulto." path="/studio" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Uno spazio sicuro e accogliente</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Lo studio</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ricevo in studio a Roma, in zona Cinecittà — a pochi passi dalla Metro A
            &ldquo;Giulio Agricola&rdquo; — oppure online in videoconsulto.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Location + first photo */}
    <section className="section-padding bg-card">
      <div className="container-wide max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground">Dove mi trovi</h2>
                  <p className="text-muted-foreground mt-1">Via Tuscolana 1168, 00172 Roma</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Lo studio si trova in <strong>zona Cinecittà</strong>, a pochi minuti a piedi dalla
                fermata <strong>Metro A &ldquo;Giulio Agricola&rdquo;</strong>. È un ambiente riservato,
                luminoso e pensato per farti sentire accolta fin dal primo momento.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                  <Train className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Metro e bus</p>
                    <p className="text-sm text-muted-foreground">
                      Metro A fermata &ldquo;Giulio Agricola&rdquo;, poi 5 minuti a piedi.
                      Diverse linee bus nelle vicinanze.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background">
                  <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">In auto</p>
                    <p className="text-sm text-muted-foreground">
                      Ampia disponibilità di parcheggio gratuito nelle vie limitrofe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={studioPanoramica}
                alt="Studio Dott.ssa Ilaria Golino - vista panoramica"
                className="w-full object-contain hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Second photo + environment info */}
    <section className="section-padding bg-background">
      <div className="container-wide max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={studioPoltrona}
                alt="Studio - area colloquio con poltrona"
                className="w-full object-contain hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                L'ambiente terapeutico
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ho scelto ogni dettaglio perché chi entra nel mio studio possa sentirsi subito
                a proprio agio. Un ambiente caldo, sobrio e accogliente — lo spazio giusto per
                lasciarsi andare e iniziare a lavorare su di sé.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Privacy garantita",
                    text: "Uno spazio completamente riservato. Nessuno saprà che sei qui.",
                  },
                  {
                    icon: Clock,
                    title: "Orari flessibili",
                    text: "Disponibilità dal lunedì al venerdì, 9:00 — 20:00.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Spazio curato nei dettagli",
                    text: "Ogni elemento è pensato per favorire il benessere e il lavoro terapeutico.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Third photo + online section */}
    <section className="section-padding bg-card">
      <div className="container-wide max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground">Anche online</h2>
                  <p className="text-muted-foreground mt-1">Videoconsulto con la stessa efficacia</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Se non puoi venire in studio, offro sedute in videoconsulto con la stessa
                efficacia delle sedute in presenza. È la soluzione ideale se vivi fuori Roma,
                hai impegni che rendono difficile spostarti o semplicemente preferisci la
                comodità di casa tua.
              </p>
              <div className="space-y-3">
                {[
                  "Piattaforma sicura e riservata",
                  "Stessa durata e qualità delle sedute in studio",
                  "Flessibilità di orario e nessun tempo di spostamento",
                  "Ideale per chi vive fuori Roma o all'estero",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={studioAngolo}
                alt="Studio - angolo accogliente"
                className="w-full object-contain hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Google Maps */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4">
            Come raggiungermi
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">
            Metro A &ldquo;Giulio Agricola&rdquo; — Via Tuscolana 1168, Roma
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl overflow-hidden shadow-elevated max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.5!2d12.5736!3d41.8506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a0c1e3f2b7f%3A0x0!2sVia+Tuscolana+1168%2C+00172+Roma+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Dott.ssa Ilaria Golino - Via Tuscolana 1168, Roma"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">Vuoi venire a trovarmi?</h2>
          <p className="text-muted-foreground mt-4">
            Scrivimi per prenotare un primo appuntamento, in studio o online.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20prenotare%20un%20primo%20colloquio."
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

export default Studio;
