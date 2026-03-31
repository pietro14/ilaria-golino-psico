import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => (
  <footer className="bg-warm-dark text-warm-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-semibold">Dott.ssa Ilaria Golino</h3>
          <p className="text-warm-cream/70 text-sm leading-relaxed">
            Psicologa Psicoterapeuta<br />
            Analista Transazionale<br />
            Albo Psicologi del Lazio, Sez. A n. 24381
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif font-semibold">Pagine</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/chi-sono" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Chi Sono</Link>
            <Link to="/aree-intervento" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Aree di Intervento</Link>
            <Link to="/approccio" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Approccio</Link>
            <Link to="/servizi" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Servizi</Link>
            <Link to="/recensioni" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Recensioni</Link>
            <Link to="/studio" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Lo Studio</Link>
            <Link to="/approfondimenti" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Approfondimenti</Link>
            <Link to="/contatti" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Contatti</Link>
          </nav>
          <h4 className="font-serif font-semibold pt-2">Risorse</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/quiz" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Quiz: faccio al caso tuo?</Link>
            <Link to="/test-relazioni-dannose" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Test di auto-valutazione</Link>

            <Link to="/psicologo-psicoterapeuta-psichiatra-differenze" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Psicologo vs Psicoterapeuta</Link>
            <Link to="/domande-risposte" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Domande e Risposte</Link>
            <Link to="/video" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Video</Link>
            <Link to="/frasi" className="text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">Frasi e riflessioni</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif font-semibold">Contatti</h4>
          <div className="space-y-3">
            <a href="https://wa.me/393515499417" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">
              <MessageCircle className="w-4 h-4 text-warm-gold" />
              <span>351 549 9417</span>
            </a>
            <div className="flex items-start gap-3 text-warm-cream/70 text-sm">
              <MapPin className="w-4 h-4 text-warm-gold mt-0.5" />
              <span>Via Tuscolana 1168<br />00172 Roma</span>
            </div>
            <a href="https://www.instagram.com/ilariagolino.psicologa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">
              <InstagramIcon className="w-4 h-4 text-warm-gold" />
              <span>@ilariagolino.psicologa</span>
            </a>
            <a href="https://www.linkedin.com/in/ilaria-golino-psicologia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">
              <LinkedinIcon className="w-4 h-4 text-warm-gold" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:Ilaria.golino3@gmail.com" className="flex items-center gap-3 text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">
              <Mail className="w-4 h-4 text-warm-gold" />
              <span>Ilaria.golino3@gmail.com</span>
            </a>
            <a href="mailto:ilaria.golino@psypec.it" className="flex items-center gap-3 text-warm-cream/70 hover:text-warm-cream transition-colors text-sm">
              <Mail className="w-4 h-4 text-warm-gold" />
              <span>ilaria.golino@psypec.it (PEC)</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif font-semibold">Nota</h4>
          <p className="text-warm-cream/50 text-xs leading-relaxed">
            Le informazioni contenute in questo sito non sostituiscono in alcun modo una consulenza professionale. Per qualsiasi dubbio o necessità, contattami direttamente.
          </p>
        </div>
      </div>

      <div className="border-t border-warm-brown/30 mt-12 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-warm-cream/60 text-xs">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>Numero Antiviolenza e Stalking: <a href="tel:1522" className="text-warm-cream/80 hover:text-warm-cream font-medium">1522</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>Emergenze: <a href="tel:112" className="text-warm-cream/80 hover:text-warm-cream font-medium">112</a></span>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-brown/30 mt-6 pt-6 text-center">
        <p className="text-warm-cream/50 text-sm">
          &copy; {new Date().getFullYear()} Dott.ssa Ilaria Golino &mdash; Tutti i diritti riservati
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
