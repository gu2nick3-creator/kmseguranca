import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logoKm from "@/assets/km-logo.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Meio Ambiente", href: "/meio-ambiente" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de solicitar um atendimento.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-lg shadow-green-900/5 border-b border-green-200/50"
          : "bg-transparent"
      }`}
      style={{ animation: "slide-down 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group min-w-0">
          <img
            src={logoKm}
            alt="Logo KM Segurança"
            className="w-11 h-11 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
          />
          <div className="min-w-0">
            <span className="block text-lg font-bold text-foreground tracking-tight leading-none">
              KM <span className="text-accent">Segurança</span>
            </span>
            <span className="hidden sm:block text-[11px] text-muted-foreground tracking-[0.22em] uppercase mt-1">
              SST e Meio Ambiente
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                  after:content-[''] after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 
                  after:bg-accent after:rounded-full after:transition-transform after:duration-300 after:origin-left
                  ${active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold 
            shadow-md shadow-green-600/20 hover:shadow-lg hover:shadow-green-600/30 
            transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
        >
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors active:scale-95"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass-nav border-t border-green-200/50 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
