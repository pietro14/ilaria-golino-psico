import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FontProvider } from "@/components/FontContext";
import AppRoutes from "@/AppRoutes";

export function render(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <FontProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </FontProvider>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join("\n")
    : "";

  return { html, head };
}
