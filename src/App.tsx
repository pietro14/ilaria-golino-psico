import { BrowserRouter } from "react-router-dom";
import { FontProvider } from "@/components/FontContext";
import AppRoutes from "@/AppRoutes";

const App = () => (
  <FontProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </FontProvider>
);

export default App;
