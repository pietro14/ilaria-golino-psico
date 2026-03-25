import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SITE_NAME = "Dott.ssa Ilaria Golino — Psicologa Psicoterapeuta Roma";
const BASE_URL = "https://ilariagolino.it";
const DEFAULT_DESC = "Dott.ssa Ilaria Golino - Psicologa Psicoterapeuta a Roma. Specializzata in Analisi Transazionale, dipendenza affettiva, difficoltà relazionali, disturbo borderline e disturbi alimentari.";

const SEO = ({ title, description = DEFAULT_DESC, path = "" }: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
