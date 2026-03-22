import { Target, TrendingUp, Fingerprint, Clock, ShieldCheck, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCardScale } from "@/components/RevealCard";

const diffs = [
  { icon: Target, title: "Atuação Prática", desc: "Vamos até sua operação para entender e resolver na prática." },
  { icon: TrendingUp, title: "Foco em Resultado", desc: "Cada ação gera impacto mensurável na segurança e compliance." },
  { icon: Fingerprint, title: "Soluções Personalizadas", desc: "Não vendemos pacote genérico — adequamos à sua realidade." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Resposta ágil e prazos cumpridos, sem enrolação." },
  { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Documentação robusta que blinda contra passivos." },
  { icon: Scale, title: "Custo-Benefício", desc: "Conformidade técnica sem comprometer seu orçamento." },
];

export default function DifferentialsSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Por que a KM Segurança é diferente
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((d, i) => (
            <RevealCardScale
              key={d.title}
              delay={i * 80}
              className="relative bg-card rounded-xl p-7 border border-border overflow-hidden group
                hover:shadow-lg hover:shadow-green-500/5 hover:border-green-200 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <d.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </RevealCardScale>
          ))}
        </div>
      </div>
    </section>
  );
}
