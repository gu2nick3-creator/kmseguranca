import { Recycle, FileCheck, TreePine, Trash2, Leaf, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealCard } from "@/components/RevealCard";
import { Link } from "react-router-dom";
import envImg from "@/assets/environment-hero.jpg";

const envServices = [
  { icon: Recycle, title: "PGRS e PGA", desc: "Planos de gerenciamento de resíduos sólidos e gestão ambiental" },
  { icon: FileCheck, title: "Licenciamento Ambiental", desc: "Obtenção e renovação de licenças ambientais" },
  { icon: TreePine, title: "IBAMA – CTF e DOF+", desc: "Cadastro técnico federal e controle de produtos florestais" },
  { icon: Trash2, title: "Gestão de Resíduos", desc: "Destinação correta e rastreável de resíduos da operação" },
  { icon: Leaf, title: "Regularização Completa", desc: "Suporte ambiental do diagnóstico à conformidade total" },
];

export default function EnvironmentSection() {
  const titleRef = useScrollReveal("up");

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={envImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-900/90 to-green-900/70" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl" ref={titleRef}>
          <span className="text-xs font-semibold text-green-300 uppercase tracking-widest">Meio Ambiente</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-50 mt-2 mb-4" style={{ lineHeight: "1.15" }}>
            Regularização e gestão ambiental
          </h2>
          <p className="text-green-200 mb-10">
            Mantenha sua empresa em conformidade com a legislação ambiental. Atuamos do diagnóstico à regularização completa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {envServices.map((s, i) => (
            <RevealCard
              key={s.title}
              delay={i * 80}
              className="bg-green-50/10 border border-green-50/15 rounded-xl p-6 backdrop-blur-sm
                hover:bg-green-50/15 hover:border-green-50/25 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-green-50/15 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-green-300" />
              </div>
              <h3 className="text-base font-bold text-green-50 mb-1.5">{s.title}</h3>
              <p className="text-sm text-green-300 leading-relaxed">{s.desc}</p>
            </RevealCard>
          ))}
        </div>

        <Link to="/meio-ambiente" className="inline-flex items-center gap-2 text-green-300 font-semibold text-sm mt-8 hover:gap-3 hover:text-green-50 transition-all duration-200">
          Saiba mais sobre meio ambiente <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
