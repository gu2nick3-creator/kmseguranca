import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import GradientBackground from "@/components/ui/gradient-background";

const WHATSAPP_URL = buildWhatsAppUrl("Olá! Gostaria de regularizar minha empresa.");

export default function FinalCTASection() {
  const ref = useScrollReveal("up");

  return (
    <section className="relative section-padding overflow-hidden">
      <GradientBackground className="opacity-90" />
      <div className="absolute inset-0 bg-green-900/40" />

      <div className="container mx-auto relative z-10 text-center" ref={ref}>
        <h2
          className="text-3xl md:text-5xl font-extrabold text-green-50 mb-6 max-w-3xl mx-auto"
          style={{ lineHeight: "1.1" }}
        >
          Regularize sua empresa, reduza riscos e proteja seu negócio
        </h2>
        <p className="text-lg text-green-200 mb-10 max-w-xl mx-auto">
          Fale com nossa equipe técnica e descubra como podemos ajudar sua operação a alcançar a conformidade total.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { local: "final_cta" })}
            className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_0_25px_rgba(221,240,200,0.25)] rounded-full p-[1px] relative items-center justify-center"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#DDF0C8_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 rounded-full bg-green-800 transition-opacity duration-300 group-hover:opacity-0" />
            <span className="flex items-center gap-2 font-bold text-base text-green-50 bg-gradient-to-b from-green-800 to-green-900 py-4 px-8 rounded-full relative shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Falar no WhatsApp</span>
            </span>
          </a>
          <a
            href="mailto:segurancakm1@gmail.com"
            onClick={() => trackEvent("email_click", { local: "final_cta" })}
            className="inline-flex items-center gap-2 bg-green-50/10 border border-green-50/30 text-green-50 px-8 py-4 rounded-lg font-bold text-base
              hover:bg-green-50/20 transition-all duration-200 active:scale-[0.97]"
          >
            <Mail className="w-5 h-5" />
            Enviar e-mail
          </a>
          <Link
            to="/contato"
            onClick={() => trackEvent("solicitar_atendimento_click", { local: "final_cta" })}
            className="inline-flex items-center gap-2 bg-green-50/10 border border-green-50/30 text-green-50 px-8 py-4 rounded-lg font-bold text-base
              hover:bg-green-50/20 transition-all duration-200 active:scale-[0.97]"
          >
            Formulário de contato
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
