import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ExternalLink, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { faqItems, faqCategories, faqCategoryColors } from "@/data/faqItems";

const DomandeRisposte = () => {
  const [activeCategory, setActiveCategory] = useState("Tutte");

  const filteredQA =
    activeCategory === "Tutte"
      ? faqItems
      : faqItems.filter((qa) => qa.category === activeCategory);

  return (
    <Layout>
      <SEO title="Domande e Risposte" description="Le domande più frequenti sulla psicoterapia, i costi, la durata del percorso e il mio approccio." path="/domande-risposte" />
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="font-script italic text-2xl text-primary">Domande e risposte</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Le domande che mi fanno più spesso
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Risposte professionali alle domande più comuni che ricevo su MioDottore. Qui trovi spunti utili per orientarti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="section-padding bg-card pb-0">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-elevated"
                      : "bg-background text-muted-foreground hover:bg-secondary border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Q&A cards */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredQA.map((qa, i) => (
              <AnimatedSection key={qa.theme} delay={i * 0.05}>
                <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full flex flex-col space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {qa.theme}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                        faqCategoryColors[qa.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {qa.category}
                    </span>
                  </div>
                  <p className="italic text-sm text-foreground/80 leading-relaxed">
                    &ldquo;{qa.question}&rdquo;
                  </p>
                  <div className="bg-secondary/20 rounded-xl p-4 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MioDottore link */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Hai una domanda diversa?
            </h2>
            <p className="text-muted-foreground mt-4">
              Puoi inviarmi la tua domanda direttamente su MioDottore e riceverai una risposta personalizzata.
            </p>
            <a
              href="https://www.miodottore.it/ilaria-golino/psicologo-psicoterapeuta/roma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity mt-4"
            >
              Vai al profilo MioDottore
              <ExternalLink className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Vuoi parlarne di persona?
            </h2>
            <p className="text-muted-foreground mt-4">
              Se ti riconosci in una di queste domande, scrivimi senza impegno per un primo appuntamento.
            </p>
            <a
              href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20ho%20letto%20le%20domande%20e%20risposte%20sul%20suo%20sito%20e%20vorrei%20parlarne%20con%20lei."
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
};

export default DomandeRisposte;
