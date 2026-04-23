import { blogArticles } from "./blogArticles";

export const SITE_NAME = "Dott.ssa Ilaria Golino — Psicologa Psicoterapeuta Roma";
export const BASE_URL = "https://www.ilariagolino.it";
export const DEFAULT_DESCRIPTION =
  "Dott.ssa Ilaria Golino, Psicologa Psicoterapeuta e Analista Transazionale Certificata a Roma. Specializzata in dipendenza affettiva, difficoltà relazionali, disturbo borderline e disturbi alimentari. Studio in zona Cinecittà (Tuscolana) e online.";
export const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
export const DEFAULT_KEYWORDS =
  "psicologa roma, psicoterapeuta roma, analisi transazionale, dipendenza affettiva, disturbo borderline, disturbi alimentari, psicologa cinecittà, psicologa tuscolana, psicologa ciampino, psicoterapia online";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  type?: "website" | "article";
  article?: { datePublished: string; dateModified?: string; author: string };
  image?: string;
  noIndex?: boolean;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
}

const staticRoutes: RouteMeta[] = [
  {
    path: "/",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/chi-sono",
    title: `Chi Sono | ${SITE_NAME}`,
    description:
      "Sono Ilaria Golino, Psicologa Psicoterapeuta e Analista Transazionale Certificata (CTA) a Roma. Iscritta all'Ordine degli Psicologi del Lazio n. 24381. Scopri la mia formazione e il mio approccio.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/aree-intervento",
    title: `Aree di Intervento | ${SITE_NAME}`,
    description:
      "Dipendenza affettiva, disturbi di personalità, disturbi alimentari, ansia, trauma, lutto. Scopri le aree in cui posso aiutarti come psicoterapeuta a Roma.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/approccio",
    title: `Il Mio Approccio | ${SITE_NAME}`,
    description:
      "Analisi Transazionale integrata: un approccio caldo, collaborativo e orientato al cambiamento concreto. Come lavoro in psicoterapia a Roma.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/servizi",
    title: `Servizi e Costi | ${SITE_NAME}`,
    description:
      "Seduta Singola di Terapia e psicoterapia individuale in studio a Roma (zona Cinecittà/Tuscolana) e online. Costi trasparenti e modalità di lavoro.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/recensioni",
    title: `Recensioni | ${SITE_NAME}`,
    description:
      "Cosa dicono di me i miei pazienti. Recensioni verificate su MioDottore con valutazione 5 su 5 per la Dott.ssa Ilaria Golino, psicoterapeuta a Roma.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/domande-risposte",
    title: `Domande e Risposte | ${SITE_NAME}`,
    description:
      "Le domande più frequenti sulla psicoterapia: costi, durata del percorso, come funziona il primo colloquio, psicoterapia online.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/video",
    title: `Video e Contenuti | ${SITE_NAME}`,
    description:
      "Video, pillole e approfondimenti su relazioni, emozioni, dipendenza affettiva e crescita personale. Dott.ssa Ilaria Golino.",
    changefreq: "weekly",
    priority: 0.6,
  },
  {
    path: "/studio",
    title: `Lo Studio a Roma | ${SITE_NAME}`,
    description:
      "Lo studio di psicoterapia a Roma, zona Cinecittà, Via Tuscolana 1168. A pochi passi dalla Metro A Giulio Agricola. Ricevo anche online.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/approfondimenti",
    title: `Blog e Approfondimenti | ${SITE_NAME}`,
    description:
      "Articoli su dipendenza affettiva, ansia, relazioni tossiche, disturbi alimentari, burnout e benessere psicologico. Risorse gratuite della Dott.ssa Ilaria Golino.",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/contatti",
    title: `Contatti | ${SITE_NAME}`,
    description:
      "Contattami per un primo appuntamento. Studio in Via Tuscolana 1168, Roma (zona Cinecittà). WhatsApp 351 549 9417. Risposta entro 24 ore.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/quiz",
    title: `Quiz: Faccio al Caso Tuo? | ${SITE_NAME}`,
    description:
      "Rispondi a 6 domande per capire se il mio approccio come psicoterapeuta è adatto alle tue esigenze. Test gratuito e riservato.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/calcolatore-costo-terapia",
    title: `Quanto Costa la Psicoterapia | ${SITE_NAME}`,
    description:
      "Calcolatore trasparente per stimare l'investimento in psicoterapia: costo seduta, durata percorso, detrazioni fiscali. Guida pratica.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/psicologo-psicoterapeuta-psichiatra-differenze",
    title: `Psicologo, Psicoterapeuta, Psichiatra: le Differenze | ${SITE_NAME}`,
    description:
      "Le differenze tra psicologo, psicoterapeuta e psichiatra spiegate in modo chiaro. Quando rivolgersi all'uno o all'altro professionista.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/test-relazioni-dannose",
    title: `Test: Sei in una Relazione Dannosa? | ${SITE_NAME}`,
    description:
      "Un breve test di auto-valutazione per riflettere sul tuo rapporto con le relazioni, la dipendenza affettiva e il tuo benessere emotivo.",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/frasi",
    title: `Frasi e Riflessioni | ${SITE_NAME}`,
    description:
      "Pensieri, spunti e riflessioni su autostima, relazioni, dipendenza affettiva, crescita personale e benessere emotivo.",
    changefreq: "weekly",
    priority: 0.5,
  },
];

const blogRoutes: RouteMeta[] = blogArticles.map((a) => ({
  path: `/blog/${a.slug}`,
  title: `${a.title} | ${SITE_NAME}`,
  description: a.metaDescription,
  type: "article",
  article: {
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    author: "Dott.ssa Ilaria Golino",
  },
  changefreq: "monthly",
  priority: 0.7,
}));

export const allRoutes: RouteMeta[] = [...staticRoutes, ...blogRoutes];

export const metaByPath: Record<string, RouteMeta> = Object.fromEntries(
  allRoutes.map((r) => [r.path, r])
);

export function getMeta(path: string): RouteMeta {
  return metaByPath[path] ?? staticRoutes[0];
}
