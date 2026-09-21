import { Quote, Building2, HardHat, Factory } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Illustrative copy only — attributed to a sector/city, never a named
 * individual or photo, so it can't be mistaken for a real client's review.
 * Swap each quote for a real client testimonial (with their permission)
 * as they come in.
 */
const mockTestimonials = [
  {
    quote:
      "A regularização do PGR e do LTCAT foi resolvida rápido, sem burocracia. Hoje temos toda a documentação em dia e muito mais tranquilidade nas fiscalizações.",
    role: "Diretor de operações",
    sector: "Indústria metalúrgica — Cotia/SP",
    icon: Factory,
  },
  {
    quote:
      "Contratamos os treinamentos de NR-35 e NR-10 para a equipe toda. Didática muito boa e o certificado saiu no prazo combinado.",
    role: "Gestora de RH",
    sector: "Empresa de logística — Osasco/SP",
    icon: Building2,
  },
  {
    quote:
      "Precisávamos de suporte técnico numa perícia trabalhista e o acompanhamento foi essencial para o desfecho positivo do processo.",
    role: "Engenheiro de segurança",
    sector: "Construtora — Taboão da Serra/SP",
    icon: HardHat,
  },
];

export default function TestimonialsSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto" ref={titleRef}>
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2" style={{ lineHeight: "1.15" }}>
            O que nossos clientes dizem
          </h2>
          <p className="text-xs text-muted-foreground mt-3">
            Conteúdo ilustrativo — em breve, depoimentos reais de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockTestimonials.map((t) => (
            <div
              key={t.role}
              className="flex flex-col gap-4 p-7 rounded-2xl border border-border bg-card shadow-sm
                hover:shadow-md hover:border-green-200 transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-accent/70" />
              <p className="text-sm text-foreground leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3 mt-2 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.sector}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
