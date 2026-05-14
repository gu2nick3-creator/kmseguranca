import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de regularizar minha empresa.";

export default function FinalCTASection() {
  const ref = useScrollReveal("up");

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-primary to-green-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(152 60% 50% / 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(152 60% 50% / 0.2) 0%, transparent 50%)`
      }} />

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
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-base
              shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40 
              transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href="mailto:segurancakm1@gmail.com"
            className="inline-flex items-center gap-2 bg-green-50/10 border border-green-50/30 text-green-50 px-8 py-4 rounded-lg font-bold text-base
              hover:bg-green-50/20 transition-all duration-200 active:scale-[0.97]"
          >
            <Mail className="w-5 h-5" />
            Enviar e-mail
          </a>
          <Link
            to="/contato"
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
