import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageBanner from "@/components/PageBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Recycle, FileCheck, TreePine, Trash2, Leaf, MessageCircle, ShieldCheck, ClipboardList, LineChart } from "lucide-react";
import envImg from "@/assets/environment-hero.jpg";

const WHATSAPP_URL = "https://wa.me/5511964427943?text=Olá! Gostaria de informações sobre meio ambiente.";

const services = [
  { icon: Recycle, title: "PGRS e PGA", desc: "Elaboração de Planos de Gerenciamento de Resíduos Sólidos e Planos de Gestão Ambiental, atendendo às exigências legais e de licenciamento." },
  { icon: FileCheck, title: "Licenciamento Ambiental", desc: "Condução completa do processo de licenciamento junto aos órgãos competentes: licença prévia, de instalação e de operação." },
  { icon: TreePine, title: "IBAMA – CTF e DOF+", desc: "Cadastro Técnico Federal e sistema DOF+ para controle de produtos florestais, garantindo regularidade perante o IBAMA." },
  { icon: Trash2, title: "Gestão e Destinação de Resíduos", desc: "Diagnóstico, classificação, acondicionamento e destinação final correta e rastreável de todos os resíduos da operação." },
  { icon: Leaf, title: "Regularização e Suporte Ambiental", desc: "Acompanhamento contínuo para manter a empresa em conformidade, incluindo auditorias, condicionantes e renovações." },
];

const commitments = [
  { icon: ShieldCheck, title: "Conformidade", desc: "Atendimento às exigências ambientais com mais segurança jurídica." },
  { icon: ClipboardList, title: "Organização", desc: "Processos e documentos claros para facilitar auditorias e renovações." },
  { icon: LineChart, title: "Controle", desc: "Acompanhamento técnico para manter a operação em dia." },
];

export default function EnvironmentPage() {
  const ref = useScrollReveal("up", 100);
  const imageRef = useScrollReveal("left");
  const contentRef = useScrollReveal("right", 120);

  return (
    <>
      <Navbar />
      <main>
        <PageBanner title="Meio Ambiente" subtitle="Regularização ambiental completa para sua empresa" image={envImg} />

        <section className="section-padding bg-background">
          <div className="container mx-auto" ref={ref}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-card rounded-xl p-7 border border-border shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 group"
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
                <img src={envImg} alt="Gestão e regularização ambiental" className="w-full h-[320px] lg:h-[430px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/65 to-transparent" />
                <div className="absolute right-6 bottom-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 max-w-xs">
                  <p className="text-sm font-semibold text-primary">Gestão ambiental com visão prática</p>
                  <p className="text-sm text-muted-foreground mt-1">Do licenciamento ao controle de resíduos, cuidamos do processo completo.</p>
                </div>
              </div>

              <div ref={contentRef}>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Atuação ambiental</span>
                <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-5" style={{ lineHeight: "1.15" }}>
                  Suporte para manter sua empresa regularizada
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Estruturamos a rotina ambiental da empresa com foco em conformidade, rastreabilidade e acompanhamento contínuo, evitando falhas que podem gerar multas e bloqueios operacionais.
                </p>

                <div className="space-y-4 mb-8">
                  {commitments.map((item) => (
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
                  Falar sobre meio ambiente
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
