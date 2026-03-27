import { motion } from "framer-motion";

const TransitionSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O problema não é esforço.{" "}
            <span className="gradient-gold-text">É falta de estrutura.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A maioria das empresas não cresce porque não tem base. Sem organização 
            financeira e processos claros, qualquer aumento de vendas vira mais problema.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;
