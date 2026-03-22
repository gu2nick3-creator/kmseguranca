import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageBanner from "@/components/PageBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Zap, Forklift, Cog, Flame, Wind, ArrowUpFromDot, MessageCircle, GraduationCap, ShieldCheck, Clock3 } from "lucide-react";
import trainingImg from "@/assets/training-hero.jpg";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de informações sobre treinamentos.";

const trainings = [
  { icon: Users, nr: "NR-05", title: "CIPA – Comissão Interna de Prevenção de Acidentes", desc: "Implantação completa e treinamento dos membros da CIPA conforme a norma, incluindo dimensionamento, eleição e capacitação." },
  { icon: Zap, nr: "NR-10", title: "Segurança em Eletricidade", desc: "Capacitação para profissionais que trabalham com instalações e serviços em eletricidade, cobrindo riscos elétricos e medidas de controle." },
  { icon: Forklift, nr: "NR-11", title: "Operação de Equipamentos", desc: "Treinamento para operação segura de empilhadeiras, pontes rolantes, talhas e equipamentos de movimentação de cargas." },
  { icon: Cog, nr: "NR-12", title: "Máquinas e Equipamentos", desc: "Capacitação para operação e manutenção segura de máquinas, com foco em proteções, dispositivos de segurança e procedimentos." },
  { icon: Flame, nr: "NR-23", title: "Brigada de Emergência e Primeiros Socorros", desc: "Formação de brigadistas com prática de combate a incêndio, evacuação, primeiros socorros e gestão de emergências." },
  { icon: Wind, nr: "NR-33", title: "Espaço Confinado", desc: "Capacitação para trabalho seguro em espaços confinados, incluindo avaliação atmosférica, resgate e procedimentos de entrada." },
  { icon: ArrowUpFromDot, nr: "NR-35", title: "Trabalho em Altura", desc: "Treinamento obrigatório para atividades acima de 2 metros, abordando planejamento, análise de risco, EPIs e resgate." },
];

const advantages = [
  { icon: GraduationCap, title: "Instrutores qualificados", desc: "Treinamentos conduzidos por profissionais habilitados." },
  { icon: ShieldCheck, title: "Conteúdo aplicável", desc: "Abordagem prática voltada à rotina da equipe." },
  { icon: Clock3, title: "Agilidade na execução", desc: "Organização rápida para empresas de diferentes portes." },
];

export default function TrainingPage() {
  const ref = useScrollReveal("up", 100);
  const imageRef = useScrollReveal("left");
  const contentRef = useScrollReveal("right", 120);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner title="Treinamentos" subtitle="Capacitações obrigatórias conforme as Normas Regulamentadoras" image={trainingImg} />

        <section className="section-padding bg-background">
          <div className="container mx-auto" ref={ref}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((t) => (
                <div
                  key={t.nr}
                  className="bg-card rounded-xl p-7 border border-border shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <t.icon className="w-5 h-5 text-green-700 group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-bold text-accent">{t.nr}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div ref={imageRef} className="relative overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10">
                <img src={trainingImg} alt="Treinamentos corporativos de segurança" className="w-full h-[320px] lg:h-[430px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent" />
                <div className="absolute top-6 left-6 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-bold">
                  Capacitações in company
                </div>
              </div>

              <div ref={contentRef}>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Treinamento com impacto</span>
                <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-5" style={{ lineHeight: "1.15" }}>
                  Preparação real para equipes mais seguras
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossos treinamentos combinam teoria, prática e foco na rotina operacional da empresa, garantindo uma capacitação que gera segurança, consciência e conformidade legal.
                </p>

                <div className="space-y-4 mb-8">
                  {advantages.map((item) => (
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

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold
                    shadow-lg shadow-green-600/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar treinamento
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
