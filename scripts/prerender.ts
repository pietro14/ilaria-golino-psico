import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const routes = [
  "/",
  "/chi-sono",
  "/aree-intervento",
  "/approccio",
  "/servizi",
  "/recensioni",
  "/domande-risposte",
  "/video",
  "/studio",
  "/approfondimenti",
  "/contatti",
  "/quiz",
  "/calcolatore-costo-terapia",
  "/psicologo-psicoterapeuta-psichiatra-differenze",
  "/test-relazioni-dannose",
  "/frasi",
  // Blog articles
  "/blog/dipendenza-affettiva-sintomi-cause-come-uscirne",
  "/blog/relazioni-tossiche-narcisismo-come-riconoscerle",
  "/blog/attacchi-di-panico-cosa-fare-sintomi",
  "/blog/terapia-seduta-singola-come-funziona",
  "/blog/ansia-sintomi-fisici-somatizzazione",
  "/blog/disturbo-borderline-personalita-sintomi-cura",
  "/blog/psicoterapia-online-funziona-guida",
  "/blog/disturbi-alimentari-cause-psicologiche",
  "/blog/quando-andare-dallo-psicoterapeuta",
  "/blog/analisi-transazionale-come-funziona",
  "/blog/autosabotaggio-relazioni-come-smettere",
  "/blog/stress-lavoro-burnout-sintomi-cosa-fare",
];

async function prerender() {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
  const serverEntry = await import(path.join(distDir, "server", "entry-server.js"));

  let count = 0;
  for (const route of routes) {
    const { html, head } = serverEntry.render(route);

    const finalHtml = template
      .replace("<!--app-html-->", html)
      .replace("</head>", `${head}\n</head>`);

    const filePath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, `${route}/index.html`);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, finalHtml);
    count++;
  }

  console.log(`Prerendered ${count} pages.`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
