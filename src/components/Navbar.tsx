import { useState, useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-new.png";

interface NavLink {
  href: string;
  label: string;
}

interface NavDropdown {
  label: string;
  children: NavLink[];
}

type NavItem = NavLink | NavDropdown;

const isDropdown = (item: NavItem): item is NavDropdown => "children" in item;

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/aree-intervento", label: "Aree" },
  { href: "/approccio", label: "Approccio" },
  { href: "/servizi", label: "Servizi" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/studio", label: "Studio" },
  {
    label: "Risorse",
    children: [
      { href: "/video-instagram", label: "Video" },
      { href: "/approfondimenti", label: "Blog" },
      { href: "/quiz", label: "Faccio al caso tuo?" },
      { href: "/test-relazioni-dannose", label: "Test di auto-valutazione" },
      { href: "/calcolatore-costo-terapia", label: "Quanto costa la terapia?" },
      { href: "/psicologo-psicoterapeuta-psichiatra-differenze", label: "Psicologo vs Psicoterapeuta" },
      { href: "/domande-risposte", label: "Domande e Risposte" },
    ],
  },
  { href: "/contatti", label: "Contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileRisorseOpen, setMobileRisorseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileRisorseOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const isDropdownActive = (children: NavLink[]) =>
    children.some((c) => isActive(c.href));

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-warm-blush/95 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="Dott.ssa Ilaria Golino Logo" className="w-11 h-11" />
          <div className="flex flex-col">
            <span className="text-lg font-serif font-semibold text-foreground tracking-wide">
              Dott.ssa Ilaria Golino
            </span>
            <span className="text-xs text-muted-foreground">Psicoterapeuta</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-2xl text-sm font-medium transition-colors ${
                    isDropdownActive(item.children)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-background rounded-xl shadow-elevated border border-border/50 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/393515499417"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-2xl hover:bg-secondary transition-colors text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/50 px-6 pb-6 pt-2 space-y-2">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileRisorseOpen((v) => !v)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl font-medium transition-colors ${
                    isDropdownActive(item.children)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileRisorseOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileRisorseOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 rounded-2xl font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-border/30 mt-4">
            <a
              href="https://wa.me/393515499417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-foreground font-medium"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>Scrivimi su WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
