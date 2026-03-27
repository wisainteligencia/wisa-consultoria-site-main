import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, RefreshCw, UserX } from "lucide-react";

const pains = [
  { icon: TrendingDown, text: "Você não sabe exatamente quanto lucra por mês" },
  { icon: AlertTriangle, text: "O dinheiro entra, mas não sobra" },
  { icon: RefreshCw, text: "Processos são manuais e repetitivos" },
  { icon: UserX, text: "Você depende de você para tudo" },
];

const PainSection = () => {
  return (
    <section id="dor" className="py-20 md:py-28 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Se você não tem controle,{" "}
            <span className="gradient-gold-text">você não tem crescimento</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-gold rounded-xl p-6 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <pain.icon size={22} />
              </div>
              <p className="text-foreground/90 font-medium">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary font-semibold text-lg max-w-2xl mx-auto"
        >
          Isso trava sua empresa e impede qualquer crescimento sustentável.
        </motion.p>
      </div>
    </section>
  );
};

export default PainSection;
