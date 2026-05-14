import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Minha empresa é obrigada a ter esses documentos?",
    a: "Sim. A legislação trabalhista e as Normas Regulamentadoras (NRs) do Ministério do Trabalho exigem que todas as empresas com empregados registrados mantenham documentação atualizada de SST, como PGR, LTCAT, PPP e laudos técnicos. O descumprimento pode gerar multas, interdições e passivos trabalhistas.",
  },
  {
    q: "Quais treinamentos são exigidos para minha operação?",
    a: "Depende das atividades e riscos envolvidos na sua operação. Treinamentos como NR-10 (Eletricidade), NR-35 (Altura), NR-33 (Espaço Confinado), NR-12 (Máquinas) e NR-05 (CIPA) estão entre os mais comuns. Fazemos um diagnóstico para identificar exatamente quais são obrigatórios para seu caso.",
  },
  {
    q: "Vocês atendem perícias trabalhistas?",
    a: "Sim. Oferecemos suporte técnico e assistência em perícias judiciais de segurança do trabalho, com profissionais qualificados para defender tecnicamente sua empresa em processos de insalubridade e periculosidade.",
  },
  {
    q: "Fazem regularização ambiental completa?",
    a: "Sim. Atuamos desde o diagnóstico ambiental até a obtenção de licenças, CTF/IBAMA, PGRS, PGA, gestão e destinação de resíduos. Nosso objetivo é garantir que sua empresa esteja 100% regular perante os órgãos ambientais.",
  },
  {
    q: "O atendimento é personalizado conforme o tipo de empresa?",
    a: "Absolutamente. Cada empresa possui riscos, processos e necessidades específicas. Nosso atendimento é customizado — analisamos sua operação para entregar soluções que realmente façam sentido para o seu negócio.",
  },
  {
    q: "Como solicitar um diagnóstico?",
    a: "É simples: entre em contato pelo WhatsApp, e-mail ou formulário do site. Nossa equipe retorna rapidamente para entender sua demanda e agendar uma análise inicial da sua operação, sem compromisso.",
  },
];

export default function FAQSection() {
  const titleRef = useScrollReveal("up");
  const accordionRef = useScrollReveal<HTMLDivElement>("up", 150);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            Perguntas e respostas
          </h2>
        </div>

        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-green-200 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
