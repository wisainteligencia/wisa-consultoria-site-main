import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";

const AGENDA_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10baEhf2nfYpW2ekiKDw0qe5z_NCfTWJVTiWxzGMgfiazjT929J3HWw0iTm09Qo7cWhZJbFSTT";
const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá!%20Quero%20saber%20mais%20sobre%20como%20a%20WiSa%20pode%20organizar%20minha%20empresa.";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vamos{" "}
            <span className="gradient-gold-text">organizar sua empresa?</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Sem compromisso. Direto ao ponto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold-btn text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg"
            >
              <CalendarCheck size={22} />
              Agendar Diagnóstico da Operação
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary/40 text-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-all"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
