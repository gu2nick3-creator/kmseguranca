import { ShieldCheck, AlertTriangle, Scale, FileCheck, Headphones, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCard } from "@/components/RevealCard";

const benefits = [
  { icon: AlertTriangle, title: "Redução de Riscos", desc: "Identificação e controle de riscos operacionais com metodologia técnica comprovada." },
  { icon: ShieldCheck, title: "Prevenção de Acidentes", desc: "Processos e treinamentos que eliminam condições inseguras e protegem vidas." },
  { icon: Scale, title: "Segurança Jurídica", desc: "Documentação conforme as NRs que blinda sua empresa contra multas e processos." },
  { icon: FileCheck, title: "Conformidade Legal", desc: "Adequação total às normas regulamentadoras e legislações ambientais vigentes." },
  { icon: Headphones, title: "Suporte Especializado", desc: "Equipe técnica disponível para orientar sua operação com agilidade e precisão." },
  { icon: Settings, title: "Soluções Personalizadas", desc: "Cada empresa tem suas particularidades — adaptamos as soluções à sua realidade." },
];

export default function CredibilitySection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Credibilidade que protege seu negócio
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Atuamos com foco em resultado, conformidade técnica e segurança para empresas de todos os portes e segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <RevealCard
              key={b.title}
              delay={i * 80}
              className="group bg-card rounded-xl p-7 border border-border 
                shadow-sm hover:shadow-lg hover:shadow-green-500/5 
                transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 
                group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <b.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
