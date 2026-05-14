import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageBanner from "@/components/PageBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Target, Users, Award, MessageCircle } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de conhecer mais sobre a empresa.";

const values = [
  { icon: Shield, title: "Proteção", desc: "Proteger pessoas, empresas e operações é a razão de existir da KM Segurança." },
  { icon: Target, title: "Resultado", desc: "Toda ação técnica precisa gerar resultado prático e mensurável." },
  { icon: Users, title: "Compromisso", desc: "Tratamos cada cliente com dedicação, transparência e responsabilidade." },
  { icon: Award, title: "Excelência", desc: "Buscamos entregar o melhor em cada documento, treinamento e consultoria." },
];

export default function AboutPage() {
  const textRef = useScrollReveal("left");
  const imgRef = useScrollReveal<HTMLImageElement>("right", 150);
  const valuesRef = useScrollReveal("up", 100);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner title="Sobre a KM Segurança" subtitle="Experiência, comprometimento e foco em proteger empresas e pessoas" image={aboutImg} />

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
              <div ref={textRef}>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Quem somos
                </span>
                <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-6" style={{ lineHeight: "1.15" }}>
                  Consultoria que entende sua operação
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A KM Segurança do Trabalho e Meio Ambiente nasceu da necessidade de oferecer soluções técnicas 
                    reais para empresas que precisam de conformidade, segurança e tranquilidade jurídica sem burocracia 
                    desnecessária e com foco total em resultado.
                  </p>
                  <p>
                    Atuamos com profissionais habilitados e experientes em diversos segmentos: indústrias, comércios, 
                    operações logísticas, construção civil e empresas de serviços. Nossa missão é proteger pessoas, 
                    operações e negócios, entregando soluções que fazem diferença no dia a dia.
                  </p>
                  <p>
                    Mais do que documentos e laudos, entregamos segurança, prevenção e a certeza de que sua empresa 
                    está preparada para qualquer fiscalização ou demanda trabalhista.
                  </p>
                </div>
              </div>

              <img
                ref={imgRef}
                src={aboutImg}
                alt="Equipe KM Segurança"
                className="w-full h-80 lg:h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div ref={valuesRef}>
              <h3 className="text-2xl font-extrabold text-foreground text-center mb-10">Nossos valores</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v) => (
                  <div key={v.title} className="text-center bg-secondary/50 rounded-xl p-7 border border-border">
                    <v.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-foreground mb-2">{v.title}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-14">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold
                  shadow-lg shadow-green-600/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com a equipe
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
