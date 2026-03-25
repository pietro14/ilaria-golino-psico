import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import ChiSono from "@/pages/ChiSono";
import AreeIntervento from "@/pages/AreeIntervento";
import Approccio from "@/pages/Approccio";
import Servizi from "@/pages/Servizi";
import Recensioni from "@/pages/Recensioni";
import DomandeRisposte from "@/pages/DomandeRisposte";
import Instagram from "@/pages/Instagram";
import Studio from "@/pages/Studio";
import Approfondimenti from "@/pages/Approfondimenti";
import Contatti from "@/pages/Contatti";
import QuizFaccioAlCasoTuo from "@/pages/tools/QuizFaccioAlCasoTuo";
import CalcolatoreCosto from "@/pages/tools/CalcolatoreCosto";
import DifferenzeProfessionisti from "@/pages/tools/DifferenzeProfessionisti";
import SelfAssessment from "@/pages/tools/SelfAssessment";
import FrasiContenuti from "@/pages/FrasiContenuti";
import NotFound from "@/pages/NotFound";

const App = () => (
  <HelmetProvider>
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chi-sono" element={<ChiSono />} />
      <Route path="/aree-intervento" element={<AreeIntervento />} />
      <Route path="/approccio" element={<Approccio />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/recensioni" element={<Recensioni />} />
      <Route path="/domande-risposte" element={<DomandeRisposte />} />
      <Route path="/video" element={<Instagram />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/approfondimenti" element={<Approfondimenti />} />
      <Route path="/contatti" element={<Contatti />} />
      <Route path="/quiz" element={<QuizFaccioAlCasoTuo />} />
      <Route path="/calcolatore-costo-terapia" element={<CalcolatoreCosto />} />
      <Route path="/psicologo-psicoterapeuta-psichiatra-differenze" element={<DifferenzeProfessionisti />} />
      <Route path="/test-relazioni-dannose" element={<SelfAssessment />} />
      <Route path="/frasi" element={<FrasiContenuti />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </HelmetProvider>
);

export default App;
