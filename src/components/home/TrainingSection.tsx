import { Users, Zap, Forklift, Cog, Flame, Wind, ArrowUpFromDot, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCardRight } from "@/components/RevealCard";
import { Link } from "react-router-dom";
import trainingImg from "@/assets/training-hero.jpg";

const trainings = [
  { icon: Users, nr: "NR-05", title: "CIPA", desc: "Implantação e treinamento da Comissão Interna" },
  { icon: Zap, nr: "NR-10", title: "Eletricidade", desc: "Segurança em instalações e serviços elétricos" },
  { icon: Forklift, nr: "NR-11", title: "Operação de Equipamentos", desc: "Empilhadeira, ponte rolante e talha" },
  { icon: Cog, nr: "NR-12", title: "Máquinas e Equipamentos", desc: "Segurança na operação e manutenção" },
  { icon: Flame, nr: "NR-23", title: "Brigada de Emergência", desc: "Combate a incêndio e primeiros socorros" },
  { icon: Wind, nr: "NR-33", title: "Espaço Confinado", desc: "Trabalho seguro em ambientes confinados" },
  { icon: ArrowUpFromDot, nr: "NR-35", title: "Trabalho em Altura", desc: "Prevenção de quedas e resgate" },
];

export default function TrainingSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10">
            <img src={trainingImg} alt="Treinamento corporativo de segurança" className="w-full h-80 lg:h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-bold">+7 NRs cobertas</span>
            </div>
          </div>

          <div>
            <div ref={titleRef}>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Capacitações</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4" style={{ lineHeight: "1.15" }}>
                Treinamentos obrigatórios
              </h2>
              <p className="text-muted-foreground mb-8">
                Capacitações práticas e teóricas conforme as Normas Regulamentadoras, ministradas por profissionais habilitados.
              </p>
            </div>

            <div className="space-y-3">
              {trainings.map((t, i) => (
                <RevealCardRight
                  key={t.nr}
                  delay={i * 60}
                  className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border 
                    hover:border-green-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <t.icon className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-accent">{t.nr}</span>
                      <h3 className="text-sm font-bold text-foreground">{t.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.desc}</p>
                  </div>
                </RevealCardRight>
              ))}
            </div>

            <Link to="/treinamentos" className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-6 hover:gap-3 transition-all duration-200">
              Conheça todos os treinamentos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
