import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { FontProvider } from "@/components/FontContext";
import AppRoutes from "@/AppRoutes";

export function render(url: string) {
  const html = renderToString(
    <FontProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </FontProvider>
  );

  return { html };
}
