import { useEffect } from "react";
import { BASE_URL, DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, getMeta } from "@/data/seoMeta";

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

function upsertMeta(key: "name" | "property", value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Server returns null; prerender script writes head tags deterministically.
// On client, updates head imperatively as user navigates. seoMeta is the source
// of truth when a path is provided; props are the fallback.
const SEO = ({ title, description, path, noindex, article }: SEOProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const resolved = path ? getMeta(path) : null;
    const finalTitle = resolved?.title ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
    const finalDesc = resolved?.description ?? description ?? DEFAULT_DESCRIPTION;
    const finalUrl = `${BASE_URL}${path ?? ""}`;
    const finalType = article || resolved?.type === "article" ? "article" : "website";

    document.title = finalTitle;
    upsertMeta("name", "description", finalDesc);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsertLink("canonical", finalUrl);

    upsertMeta("property", "og:title", finalTitle);
    upsertMeta("property", "og:description", finalDesc);
    upsertMeta("property", "og:url", finalUrl);
    upsertMeta("property", "og:type", finalType);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "it_IT");
    upsertMeta("property", "og:image", OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", finalTitle);
    upsertMeta("name", "twitter:description", finalDesc);
    upsertMeta("name", "twitter:image", OG_IMAGE);
  }, [title, description, path, noindex, article]);

  return null;
};

export default SEO;
