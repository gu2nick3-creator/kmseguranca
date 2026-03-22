import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de solicitar um atendimento.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent text-accent-foreground 
        flex items-center justify-center shadow-xl shadow-green-600/30
        transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-green-600/40 
        active:scale-95 animate-fade-in-up"
      style={{ animationDelay: "1s" }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
