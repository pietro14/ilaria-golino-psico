import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FontProvider } from "@/components/FontContext";
import AppRoutes from "@/AppRoutes";

const App = () => (
  <HelmetProvider>
  <FontProvider>
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  </FontProvider>
  </HelmetProvider>
);

export default App;
