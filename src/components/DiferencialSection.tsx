import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const DiferencialSection = () => {
  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card-gold rounded-2xl p-10 md:p-14"
        >
          <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mx-auto mb-6">
            <Shield size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Você{" "}
            <span className="gradient-gold-text">não precisa trocar</span>{" "}
            de contador
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A WiSa se adapta à sua realidade. Se quiser, você mantém seu contador atual. 
            Se preferir, pode integrar tudo em um único fluxo com nosso backoffice contábil.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiferencialSection;
