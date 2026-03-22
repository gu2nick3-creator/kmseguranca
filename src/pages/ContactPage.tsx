import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageBanner from "@/components/PageBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Mail, Phone, Clock3, MapPin, FileCheck2, ArrowRight, ShieldCheck, Send, Building2, User2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const WHATSAPP_NUMBER = "5511964427943";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um atendimento.")}`;

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "(11) 96442-7943",
    href: WHATSAPP_URL,
    action: "Chamar agora",
  },
  {
    icon: Mail,
    title: "E-mail",
    detail: "segurancakm1@gmail.com",
    href: "mailto:segurancakm1@gmail.com",
    action: "Enviar e-mail",
  },
  {
    icon: Phone,
    title: "Telefone",
    detail: "(11) 96442-7943",
    href: "tel:+5511964427943",
    action: "Ligar agora",
  },
];

const steps = [
  "Preencha os dados principais da empresa e da sua necessidade.",
  "Ao tocar no botão, o WhatsApp abre com a mensagem pronta.",
  "Nossa equipe recebe as informações e retorna com agilidade.",
];

const differentials = [
  { icon: Clock3, title: "Resposta rápida", desc: "Atendimento direto para agilizar orçamento e suporte." },
  { icon: FileCheck2, title: "Solicitação completa", desc: "As informações já seguem organizadas na mensagem." },
  { icon: ShieldCheck, title: "Atuação profissional", desc: "Mais segurança para decisões técnicas e documentais." },
];

export default function ContactPage() {
  const cardsRef = useScrollReveal("up", 100);
  const imageRef = useScrollReveal("left");
  const contentRef = useScrollReveal("right", 120);

  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const whatsappHref = useMemo(() => {
    const texto = [
      "Olá! Gostaria de solicitar um atendimento para minha empresa.",
      "",
      `*Nome:* ${formData.nome || "Não informado"}`,
      `*Empresa:* ${formData.empresa || "Não informado"}`,
      `*E-mail:* ${formData.email || "Não informado"}`,
      `*Telefone:* ${formData.telefone || "Não informado"}`,
      `*Mensagem:* ${formData.mensagem || "Não informada"}`,
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  }, [formData]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main>
        <PageBanner title="Contato" subtitle="Fale com nossa equipe e receba um atendimento rápido e profissional" image={aboutImg} />

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <card.icon className="w-7 h-7 text-green-700 group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{card.title}</h2>
                  <p className="text-muted-foreground mt-2 mb-5">{card.detail}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                    {card.action} <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div ref={imageRef} className="relative overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10">
                <img src={aboutImg} alt="Atendimento consultivo da KM Segurança" className="w-full h-[320px] lg:h-[450px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/92 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-start gap-3 text-sm text-foreground">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Atendimento com base em São Paulo, SP</p>
                      <p className="text-muted-foreground mt-1">Contato digital ágil para orientar sua empresa e iniciar o atendimento rapidamente.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={contentRef}>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Contato inteligente</span>
                <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-5" style={{ lineHeight: "1.15" }}>
                  Envie sua solicitação direto para o WhatsApp
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Preencha os campos abaixo e toque no botão para abrir o WhatsApp com a mensagem pronta. Assim, o atendimento já começa com suas informações organizadas.
                </p>

                <div className="space-y-4 mb-8">
                  {differentials.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                      <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-border bg-card/95 p-6 md:p-7 shadow-xl shadow-green-950/5">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        <User2 className="w-4 h-4 text-accent" />
                        Nome
                      </span>
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        placeholder="Seu nome"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Building2 className="w-4 h-4 text-accent" />
                        Empresa
                      </span>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                        placeholder="Nome da empresa"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Mail className="w-4 h-4 text-accent" />
                        E-mail
                      </span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Phone className="w-4 h-4 text-accent" />
                        Telefone
                      </span>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleChange("telefone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>
                  </div>

                  <label className="block mb-5">
                    <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      <MessageCircle className="w-4 h-4 text-accent" />
                      Mensagem
                    </span>
                    <textarea
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => handleChange("mensagem", e.target.value)}
                      placeholder="Ex.: preciso de PGR, LTCAT, PPP, treinamentos ou suporte em perícia trabalhista."
                      className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-green-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Enviar pelo WhatsApp
                  </a>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6 mt-6">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Como funciona</p>
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm text-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
