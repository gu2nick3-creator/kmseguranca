import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import logoKm from "@/assets/km-logo.png";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de solicitar um atendimento.";

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/" },
      { label: "Serviços", href: "/servicos" },
      { label: "Treinamentos", href: "/treinamentos" },
      { label: "Meio Ambiente", href: "/meio-ambiente" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a empresa", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoKm} alt="Logo KM Segurança" className="w-11 h-11 object-contain" />
              <span className="text-lg font-bold text-green-50">
                KM Segurança
              </span>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-6 max-w-xs">
              Consultoria especializada em Segurança do Trabalho e Meio Ambiente.
              Protegemos empresas, pessoas e operações com atendimento técnico e ágil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold 
                transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-green-50 font-semibold text-sm mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-green-300 text-sm hover:text-green-50 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-green-50 font-semibold text-sm mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-green-300">
                <Mail className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                <a href="mailto:segurancakm1@gmail.com" className="hover:text-green-50 transition-colors">
                  segurancakm1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-green-300">
                <Phone className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+5511964427943" className="block hover:text-green-50 transition-colors">
                    (11) 96442-7943
                  </a>
                  <a href="tel:+5511913622511" className="block hover:text-green-50 transition-colors">
                    (11) 91362-2511
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-green-300">
                <MapPin className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-green-400">
            © {new Date().getFullYear()} KM Segurança do Trabalho e Meio Ambiente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
