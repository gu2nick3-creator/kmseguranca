import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCard } from "@/components/RevealCard";
import { Building2, FileCheck, GraduationCap, Users } from "lucide-react";

const stats = [
  { icon: Building2, value: "150+", label: "Empresas atendidas" },
  { icon: FileCheck, value: "800+", label: "Documentos entregues" },
  { icon: GraduationCap, value: "2.000+", label: "Profissionais treinados" },
  { icon: Users, value: "98%", label: "Satisfação dos clientes" },
];

export default function SocialProofSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding-sm bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12" ref={titleRef}>
          <span className="text-xs font-semibold text-green-300 uppercase tracking-widest">Resultados</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Números que comprovam nossa atuação
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <RevealCard key={s.label} delay={i * 100} className="text-center bg-green-50/10 rounded-xl p-8 border border-green-50/10">
              <s.icon className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground tabular-nums mb-1">{s.value}</div>
              <p className="text-sm text-green-200">{s.label}</p>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
