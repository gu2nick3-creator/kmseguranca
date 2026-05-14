import { FileText, ClipboardCheck, FileSearch, AlertOctagon, Thermometer, Gavel, HardHat, Cog, Stethoscope, SendToBack, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCard } from "@/components/RevealCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: FileText, title: "Elaboração de PGR", desc: "Programa de Gerenciamento de Riscos conforme a NR-01, com inventário de riscos ocupacionais e plano de ação." },
  { icon: Stethoscope, title: "Gestão do PCMSO / Medicina do Trabalho", desc: "ASO, exames admissionais, demissionais, periódicos e monitoramento da saúde ocupacional." },
  { icon: ShieldAlert, title: "Gestão de Riscos Psicossociais (NR-01)", desc: "Implementação e atualização do PGR com identificação e gerenciamento dos riscos psicossociais." },
  { icon: SendToBack, title: "Envio de eventos do eSocial", desc: "Envio dos eventos S-2210, S-2220, S-2240 e S-2221 com apoio técnico especializado." },
  { icon: ClipboardCheck, title: "LTCAT", desc: "Laudo Técnico das Condições Ambientais do Trabalho para fins previdenciários." },
  { icon: FileSearch, title: "PPP", desc: "Perfil Profissiográfico Previdenciário atualizado conforme legislação vigente." },
  { icon: AlertOctagon, title: "APR", desc: "Análise Preliminar de Riscos para operações críticas e atividades especiais." },
  { icon: Thermometer, title: "Laudos Técnicos", desc: "Insalubridade e Periculosidade com medições quantitativas e qualitativas." },
  { icon: Gavel, title: "Perícias Trabalhistas", desc: "Suporte técnico e assistência em perícias judiciais de segurança do trabalho." },
  { icon: HardHat, title: "Gestão de Riscos", desc: "Acompanhamento contínuo das operações com identificação e mitigação de riscos." },
  { icon: Cog, title: "Implantação de SST", desc: "Processos de segurança, prevenção e cultura de SST integrada à operação." },
];

export default function ServicesSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-14" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Como ajudamos sua empresa
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Documentação, laudos, gestão de riscos e implantação de processos de segurança para manter sua operação em conformidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <RevealCard
              key={s.title}
              delay={i * 60}
              className="group bg-card rounded-xl p-6 border border-border shadow-sm 
                hover:shadow-lg hover:shadow-green-500/5 hover:border-green-200
                transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center mb-4 
                group-hover:bg-accent transition-colors duration-300">
                <s.icon className="w-5 h-5 text-green-700 group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </RevealCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Ver todos os serviços <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
