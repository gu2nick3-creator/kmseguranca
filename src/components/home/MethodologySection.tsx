import { Search, ClipboardList, FileText, Wrench, GraduationCap, Headphones, LayoutList } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCard, RevealCardRight } from "@/components/RevealCard";

const steps = [
  { icon: Search, num: "01", title: "Diagnóstico", desc: "Análise completa da operação e identificação de gaps" },
  { icon: ClipboardList, num: "02", title: "Levantamento", desc: "Riscos, exigências legais e normas aplicáveis" },
  { icon: LayoutList, num: "03", title: "Planejamento", desc: "Plano técnico customizado para sua realidade" },
  { icon: FileText, num: "04", title: "Documentação", desc: "Elaboração de laudos, programas e relatórios" },
  { icon: Wrench, num: "05", title: "Implantação", desc: "Melhorias práticas e adequações nas operações" },
  { icon: GraduationCap, num: "06", title: "Treinamentos", desc: "Capacitações obrigatórias e reciclagens" },
  { icon: Headphones, num: "07", title: "Suporte Contínuo", desc: "Acompanhamento e assessoria permanente" },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const isLeft = index % 2 === 0;
  const Wrapper = isLeft ? RevealCard : RevealCardRight;

  return (
    <div className={`md:flex items-center gap-8 ${index > 0 ? "md:mt-8" : ""}`}>
      <div className={`md:w-1/2 ${isLeft ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
        <Wrapper delay={index * 100} className="w-full">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <span className="text-xs font-bold text-accent">{step.num}</span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        </Wrapper>
      </div>
      <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md shrink-0 absolute left-1/2 -translate-x-1/2" />
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-2" : ""}`} />
    </div>
  );
}

export default function MethodologySection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Passo a passo do nosso atendimento
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Um processo claro e organizado para levar sua empresa à conformidade total.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-200 via-accent to-green-200 hidden md:block" />
          <div className="space-y-0">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
