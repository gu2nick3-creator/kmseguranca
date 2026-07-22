import { Link } from "react-router-dom";
import { Shield, MessageCircle, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-safety.jpg";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_URL = buildWhatsAppUrl("Olá! Gostaria de solicitar um atendimento.");

const highlights = [
  "Conformidade com NRs",
  "Regularização ambiental",
  "Prevenção de multas",
];

const cities = [
  "Embu das Artes",
  "Taboão da Serra",
  "Itapecerica da Serra",
  "Cotia",
  "Osasco",
  "Carapicuíba",
  "Grande São Paulo",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Equipe de segurança do trabalho em inspeção industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/80 to-green-900/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-green-50/10 border border-green-50/20 rounded-full px-4 py-1.5 mb-6 
              opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Shield className="w-4 h-4 text-green-300" />
            <span className="text-xs font-semibold text-green-200 uppercase tracking-wider">
              Consultoria especializada em Segurança, Saúde e Meio Ambiente
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-50 mb-6 opacity-0 animate-fade-in-up"
            style={{ lineHeight: "1.08", animationDelay: "0.5s" }}
          >
            Proteja sua empresa contra{" "}
            <span className="text-green-300">multas, acidentes</span> e passivos trabalhistas
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-green-200 mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Soluções completas em Segurança do Trabalho e Meio Ambiente com conformidade 
            às NRs e legislações ambientais — de forma prática, rápida e com preço justo.
          </p>

          {/* Highlights */}
          <div
            className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.85s" }}
          >
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-100 font-medium">{h}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { local: "hero" })}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-bold text-base
                shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40 
                transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link
              to="/contato"
              onClick={() => trackEvent("solicitar_atendimento_click", { local: "hero" })}
              className="inline-flex items-center gap-2 bg-green-50/10 border border-green-50/30 text-green-50 px-7 py-3.5 rounded-lg font-bold text-base
                hover:bg-green-50/20 transition-all duration-200 active:scale-[0.97]"
            >
              Solicitar atendimento
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cidades atendidas */}
          <div
            className="flex items-start gap-2 mt-8 text-green-200 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.15s" }}
          >
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-green-300" />
            <p className="text-sm leading-relaxed">
              Atendemos {cities.slice(0, -1).join(", ")} e {cities[cities.length - 1]}, além de cidades próximas.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
