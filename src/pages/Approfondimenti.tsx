import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Clock, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const Approfondimenti = () => (
  <Layout>
    <SEO
      title="Blog - Approfondimenti"
      description="Articoli su dipendenza affettiva, ansia, relazioni tossiche, disturbi alimentari e benessere psicologico. Risorse gratuite della Dott.ssa Ilaria Golino, psicoterapeuta a Roma."
      path="/approfondimenti"
    />
    <section className="section-padding bg-warm-blush">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="font-script italic text-2xl text-primary">Articoli e risorse</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Blog</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Approfondimenti su psicologia, relazioni, emozioni e benessere per aiutarti a comprendere meglio te stesso/a.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.05}>
              <Link
                to={`/blog/${article.slug}`}
                className="block bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min
                    </span>
                  </div>
                  <h2 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    Leggi l'articolo <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="container-narrow text-center space-y-6">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-foreground">Hai bisogno di un supporto personalizzato?</h2>
          <p className="text-muted-foreground mt-4">
            Gli articoli possono aiutarti a capire, ma ogni situazione è unica. Scrivimi per un appuntamento.
          </p>
          <a
            href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20appuntamento."
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

export default Approfondimenti;
