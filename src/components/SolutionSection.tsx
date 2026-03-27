import { motion } from "framer-motion";
import { DollarSign, LayoutGrid, Settings, FileCheck, ShieldCheck } from "lucide-react";

const CERT_URL = "https://certificadodigital.wisaconsultoriaesistemas.com.br/";

const solutions = [
  { icon: DollarSign, title: "Controle Financeiro", desc: "Saiba exatamente quanto entra, quanto sai e quanto sobra." },
  { icon: LayoutGrid, title: "Sistema ERP Integrado", desc: "Centralize sua operação e elimine retrabalho." },
  { icon: Settings, title: "Processos Organizacionais", desc: "Padronize sua operação e reduza erros." },
  { icon: FileCheck, title: "Integração com Contabilidade", desc: "Você pode manter seu contador ou ter tudo integrado em um só lugar." },
  { icon: ShieldCheck, title: "Certificado Digital", desc: "Segurança jurídica e conformidade legal para suas operações digitais.", link: CERT_URL },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 md:py-28 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Como a WiSa{" "}
            <span className="gradient-gold-text">organiza sua empresa</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-gold rounded-xl p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              {"link" in item && item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary text-sm font-semibold hover:underline"
                >
                  Saiba mais →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
