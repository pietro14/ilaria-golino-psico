import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  allRoutes,
  BASE_URL,
  OG_IMAGE,
  SITE_NAME,
  type RouteMeta,
} from "../src/data/seoMeta.js";
import { faqItems } from "../src/data/faqItems.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderHead(route: RouteMeta): string {
  const url = `${BASE_URL}${route.path}`;
  const image = route.image ?? OG_IMAGE;
  const ogType = route.type ?? "website";
  const shortTitle = route.title.split(" | ")[0];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...(route.path === "/"
        ? []
        : route.type === "article"
          ? [
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/approfondimenti` },
              { "@type": "ListItem", position: 3, name: shortTitle, item: url },
            ]
          : [{ "@type": "ListItem", position: 2, name: shortTitle, item: url }]),
    ],
  };

  const tags: string[] = [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    route.noIndex
      ? `<meta name="robots" content="noindex, nofollow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    route.keywords ? `<meta name="keywords" content="${escapeAttr(route.keywords)}" />` : "",
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="it_IT" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>`,
  ];

  if (route.type === "article" && route.article) {
    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: shortTitle,
      description: route.description,
      url,
      image,
      datePublished: route.article.datePublished,
      dateModified: route.article.dateModified ?? route.article.datePublished,
      author: {
        "@type": "Person",
        name: route.article.author,
        jobTitle: "Psicologa Psicoterapeuta",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: BASE_URL,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(blogPosting)}</script>`);
  }

  if (route.path === "/domande-risposte") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((qa) => ({
        "@type": "Question",
        name: qa.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: qa.answer,
        },
      })),
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);
  }

  return tags.filter(Boolean).join("\n    ");
}

function stripDefaultSeo(template: string): string {
  return template
    .replace(/\s*<title>[^<]*<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/i, "")
    .replace(/\s*<meta\s+name="keywords"[^>]*>/i, "")
    .replace(/\s*<meta\s+name="robots"[^>]*>/i, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/i, "")
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
}

async function prerender() {
  const templateRaw = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
  const template = stripDefaultSeo(templateRaw);
  const serverEntry = await import(path.join(distDir, "server", "entry-server.js"));

  let count = 0;
  for (const route of allRoutes) {
    const { html } = serverEntry.render(route.path);
    const head = renderHead(route);

    const finalHtml = template
      .replace("<!--app-html-->", html)
      .replace("</head>", `    ${head}\n  </head>`);

    const filePath =
      route.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, `${route.path}/index.html`);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, finalHtml);
    count++;
  }

  console.log(`Prerendered ${count} pages with injected SEO head.`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
