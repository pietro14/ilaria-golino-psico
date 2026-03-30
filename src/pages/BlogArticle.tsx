import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, MessageCircle, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { blogArticles } from "@/data/blogArticles";
import NotFound from "@/pages/NotFound";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  return (
    <Layout>
      <SEO title={article.title} description={article.metaDescription} path={`/blog/${article.slug}`} />
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link
              to="/approfondimenti"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} min di lettura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-foreground prose-p:leading-relaxed
                prose-li:text-foreground
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Author + CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-background rounded-2xl p-8 space-y-6">
              <div className="space-y-3">
                <p className="font-serif text-xl font-semibold text-foreground">Dott.ssa Ilaria Golino</p>
                <p className="text-muted-foreground text-sm">
                  Psicologa Psicoterapeuta, Analista Transazionale Certificata (CTA). Ricevo in studio a Roma (Via Tuscolana 1168, zona Cinecittà) e online.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20vorrei%20informazioni%20per%20un%20appuntamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Scrivimi su WhatsApp
                </a>
                <Link
                  to="/servizi#sst"
                  className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-6 py-3 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50 text-sm"
                >
                  Scopri la Seduta Singola
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle;
