import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/393515499417"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp text-white px-5 py-4 rounded-full shadow-float hover:bg-whatsapp-hover transition-all duration-300 hover:scale-105"
    aria-label="Contattami su WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="hidden sm:inline font-medium">Scrivimi</span>
  </a>
);

export default WhatsAppButton;
