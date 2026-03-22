import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageBanner from "@/components/PageBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, ClipboardCheck, FileSearch, AlertOctagon, Thermometer, Gavel, HardHat, Cog, MessageCircle, BadgeCheck } from "lucide-react";
import safetyImg from "@/assets/hero-safety.jpg";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de saber mais sobre os serviços.";

const services = [
  { icon: FileText, title: "Elaboração de PGR", desc: "Programa de Gerenciamento de Riscos conforme a NR-01, incluindo inventário de riscos ocupacionais e plano de ação com medidas de prevenção." },
  { icon: ClipboardCheck, title: "LTCAT", desc: "Laudo Técnico das Condições Ambientais do Trabalho para fins previdenciários, com avaliações quantitativas e qualitativas dos agentes nocivos." },
  { icon: FileSearch, title: "PPP", desc: "Perfil Profissiográfico Previdenciário completo e atualizado conforme a legislação vigente para fins de aposentadoria especial." },
  { icon: AlertOctagon, title: "Análise Preliminar de Riscos (APR)", desc: "Identificação, avaliação e controle de riscos antes do início de operações críticas e atividades especiais." },
  { icon: Thermometer, title: "Laudos de Insalubridade e Periculosidade", desc: "Avaliações técnicas com medições quantitativas e qualitativas para caracterização ou descaracterização de insalubridade e periculosidade." },
  { icon: Gavel, title: "Assistência em Perícias Trabalhistas", desc: "Suporte técnico especializado e assistência em perícias judiciais, com defesa técnica fundamentada e acompanhamento processual." },
  { icon: HardHat, title: "Acompanhamento e Gestão de Riscos", desc: "Monitoramento contínuo das operações com identificação de riscos emergentes, métricas de desempenho e planos de ação corretiva." },
  { icon: Cog, title: "Implantação de Processos de SST", desc: "Desenvolvimento e implantação de cultura de segurança, procedimentos operacionais, SIPAT e integração de novos colaboradores." },
];

const highlights = [
  "Diagnóstico técnico da realidade da empresa",
  "Documentação organizada para fiscalização",
  "Apoio consultivo direto no WhatsApp",
  "Planos de ação práticos para reduzir riscos",
];

export default function ServicesPage() {
  const gridRef = useScrollReveal("up", 100);
  const imageRef = useScrollReveal("left");
  const contentRef = useScrollReveal("right", 120);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Nossos Serviços"
          subtitle="Documentação, laudos, gestão de riscos e implantação de processos de segurança para sua empresa."
          image={safetyImg}
        />

        <section className="section-padding bg-background">
          <div className="container mx-auto" ref={gridRef}>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-green-700 group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div ref={imageRef} className="relative overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10">
                <img src={safetyImg} alt="Equipe técnica em segurança do trabalho" className="w-full h-[320px] lg:h-[430px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/65 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 max-w-xs">
                  <p className="text-sm font-semibold text-primary">Atendimento técnico e estratégico</p>
                  <p className="text-sm text-muted-foreground mt-1">Soluções pensadas para reduzir risco, evitar passivos e manter a operação segura.</p>
                </div>
              </div>

              <div ref={contentRef}>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Consultoria completa</span>
                <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-5" style={{ lineHeight: "1.15" }}>
                  Entregamos mais do que documentos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A KM Segurança atua lado a lado com sua empresa para estruturar processos, orientar decisões e transformar exigências legais em uma rotina mais organizada e segura.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                      <BadgeCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold
                    shadow-lg shadow-green-600/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar orçamento
                </a>
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
