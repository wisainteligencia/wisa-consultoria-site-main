import { motion } from "framer-motion";
import { Eye, Zap, Clock, TrendingUp } from "lucide-react";

const results = [
  { icon: Eye, text: "Clareza total do financeiro" },
  { icon: Zap, text: "Redução de retrabalho" },
  { icon: Clock, text: "Mais tempo para o dono" },
  { icon: TrendingUp, text: "Base sólida para crescer" },
];

const ResultSection = () => {
  return (
    <section id="resultado" className="py-20 md:py-28 section-darker">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          O que muda{" "}
          <span className="gradient-gold-text">na prática</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-gold rounded-xl p-6 text-center flex flex-col items-center gap-4"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <item.icon size={28} />
              </div>
              <p className="text-foreground font-medium text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
