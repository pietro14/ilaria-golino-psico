import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Approfondimenti = () => (
  <Layout>
    <SEO title="Approfondimenti" description="Articoli e approfondimenti su psicologia, relazioni e crescita personale." path="/approfondimenti" />
    {/* Hero */}
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Articoli e risorse</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Approfondimenti</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contenuti per aiutarti a comprendere meglio te stessa e le tue relazioni.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Coming soon */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="bg-background rounded-2xl p-8 md:p-12 text-center space-y-6 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">In arrivo</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sto preparando articoli e risorse su dipendenza affettiva, relazioni, emozioni e benessere
              psicologico. Presto troverai qui contenuti utili per approfondire le tematiche di cui mi occupo.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-foreground font-medium">Nel frattempo, puoi seguirmi su Instagram o scrivermi direttamente:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/ilariagolino.psicologa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50"
                >
                  Seguimi su Instagram
                </a>
                <a
                  href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
                >
                  <MessageCircle className="w-5 h-5" />
                  Scrivimi su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Approfondimenti;
