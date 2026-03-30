import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  article?: {
    datePublished: string;
    author: string;
  };
}

const SITE_NAME = "Dott.ssa Ilaria Golino — Psicologa Psicoterapeuta Roma";
const BASE_URL = "https://ilariagolino.it";
const DEFAULT_DESC = "Dott.ssa Ilaria Golino - Psicologa Psicoterapeuta a Roma. Specializzata in Analisi Transazionale, dipendenza affettiva, difficoltà relazionali, disturbo borderline e disturbi alimentari.";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEO = ({ title, description = DEFAULT_DESC, path = "", noindex, article }: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Article structured data */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            url,
            image: OG_IMAGE,
            datePublished: article.datePublished,
            dateModified: article.datePublished,
            author: {
              "@type": "Person",
              name: article.author,
              jobTitle: "Psicologa Psicoterapeuta",
              url: BASE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: BASE_URL,
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
