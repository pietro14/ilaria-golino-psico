import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Train, Car, Monitor, Shield, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import studioPoltrona from "@/assets/studio-poltrona.png";
import studioPanoramica from "@/assets/studio-panoramica.png";
import studioAngolo from "@/assets/studio-angolo.png";

const Studio = () => (
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
          <p className="font-script italic text-2xl text-primary">Uno spazio sicuro e accogliente</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Lo studio</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un ambiente caldo e riservato dove sentirti a tuo agio, nel cuore di Roma.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Info studio */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-8 space-y-6">
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
              Lo studio si trova in <strong>zona Cinecitt&agrave;</strong>, in una posizione comoda e ben
              collegata. &Egrave; un ambiente riservato, luminoso e pensato per farti sentire accolta fin dal
              primo momento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card">
                <Train className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">In treno / metro</p>
                  <p className="text-sm text-muted-foreground">
                    Metro A fermata Cinecitt&agrave;, poi 5 minuti a piedi. Fermata bus nelle vicinanze.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card">
                <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">In auto</p>
                  <p className="text-sm text-muted-foreground">
                    Ampia disponibilit&agrave; di parcheggio gratuito nelle vie limitrofe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Foto studio */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">Il mio studio</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { src: studioPoltrona, alt: "Studio - area colloquio" },
            { src: studioPanoramica, alt: "Studio - vista panoramica" },
            { src: studioAngolo, alt: "Studio - angolo accogliente" },
          ].map((photo, i) => (
            <AnimatedSection key={photo.alt} delay={i * 0.15}>
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Online */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-6 md:p-8 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Monitor className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">Anche online</h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Se non puoi venire in studio, offro sedute in videoconsulto con la stessa efficacia delle sedute in
              presenza. Ideale se vivi fuori Roma o preferisci la comodit&agrave; di casa tua.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* L'ambiente terapeutico */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12">L'ambiente terapeutico</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Privacy garantita",
              description: "Uno spazio completamente riservato dove la tua privacy \u00e8 sempre tutelata. Nessuno sapr\u00e0 che sei qui.",
            },
            {
              icon: Clock,
              title: "Orari flessibili",
              description: "Disponibilit\u00e0 in diverse fasce orarie per adattarmi ai tuoi impegni di lavoro e vita quotidiana.",
            },
            {
              icon: CheckCircle2,
              title: "Spazio accogliente",
              description: "Un ambiente caldo e curato nei dettagli, pensato per farti sentire a tuo agio e favorire il lavoro terapeutico.",
            },
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

    {/* Google Maps */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-8">Come raggiungermi</h2>
        </AnimatedSection>
        <AnimatedSection>
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
            Scrivimi per prenotare un primo colloquio conoscitivo, in studio o online.
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
