import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { allRoutes, BASE_URL } from "../src/data/seoMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");
const distDir = path.resolve(__dirname, "../dist");

const today = new Date().toISOString().slice(0, 10);

const body = allRoutes
  .map((r) => {
    const changefreq = r.changefreq ?? "monthly";
    const priority = r.priority ?? 0.5;
    return `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

for (const dir of [publicDir, distDir]) {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, "sitemap.xml"), xml);
    console.log(`sitemap.xml written → ${path.relative(process.cwd(), dir)}/sitemap.xml (${allRoutes.length} urls, lastmod ${today})`);
  }
}
