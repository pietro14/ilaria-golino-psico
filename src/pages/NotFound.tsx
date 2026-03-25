import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Layout>
    <SEO title="Pagina non trovata" description="La pagina che cerchi non esiste." />
    <section className="section-padding bg-warm-blush min-h-[60vh] flex items-center">
      <div className="container-narrow text-center space-y-6">
        <h1 className="text-6xl font-serif text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Pagina non trovata</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
        >
          Torna alla home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFound;
