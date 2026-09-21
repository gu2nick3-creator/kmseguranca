import { Mail, Phone, MessageCircle, MapPin, Clock3 } from "lucide-react";
import logoKm from "@/assets/km-logo.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { FooterSection, type FooterColumn } from "@/components/ui/footer-section";

const WHATSAPP_URL = buildWhatsAppUrl("Olá! Gostaria de solicitar um atendimento.");

const citiesServed = [
  "Embu das Artes",
  "Taboão da Serra",
  "Itapecerica da Serra",
  "Cotia",
  "Osasco",
  "Carapicuíba",
  "Grande São Paulo",
];

const columns: FooterColumn[] = [
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
  {
    title: "Contato",
    links: [
      {
        label: "segurancakm1@gmail.com",
        href: "mailto:segurancakm1@gmail.com",
        external: true,
        icon: <Mail className="w-3.5 h-3.5" />,
      },
      {
        label: "(11) 96442-7943",
        href: "tel:+5511964427943",
        external: true,
        icon: <Phone className="w-3.5 h-3.5" />,
      },
      {
        label: "(11) 91362-2511",
        href: "tel:+5511913622511",
        external: true,
        icon: <Phone className="w-3.5 h-3.5" />,
      },
      {
        label: "São Paulo, SP — Grande São Paulo e região (sem endereço fixo, atendimento externo)",
        href: "/contato",
        icon: <MapPin className="w-3.5 h-3.5" />,
      },
      {
        label: "Todos os dias, das 6h às 22h",
        href: "/contato",
        icon: <Clock3 className="w-3.5 h-3.5" />,
      },
    ],
  },
];

export default function Footer() {
  return (
    <FooterSection
      brand={
        <div className="flex items-center gap-3">
          <img
            src={logoKm}
            alt="Logo KM Segurança do Trabalho e Meio Ambiente"
            className="w-11 h-11 object-contain"
          />
          <span className="text-lg font-bold text-green-50">
            KM Segurança do Trabalho e Meio Ambiente
          </span>
        </div>
      }
      description={`Consultoria especializada em Segurança do Trabalho e Meio Ambiente. Protegemos empresas, pessoas e operações com atendimento técnico e ágil. Atendemos ${citiesServed.join(", ")} e região.`}
      cta={
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { local: "footer" })}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold
            transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      }
      columns={columns}
      bottomNote={`© ${new Date().getFullYear()} KM Segurança do Trabalho e Meio Ambiente. Todos os direitos reservados.`}
    />
  );
}
