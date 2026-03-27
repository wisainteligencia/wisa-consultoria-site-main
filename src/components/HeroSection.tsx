import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";

const AGENDA_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10baEhf2nfYpW2ekiKDw0qe5z_NCfTWJVTiWxzGMgfiazjT929J3HWw0iTm09Qo7cWhZJbFSTT";
const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá!%20Quero%20saber%20mais%20sobre%20como%20a%20WiSa%20pode%20organizar%20minha%20empresa.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-burgundy overflow-hidden pt-20">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Sua empresa está organizada...{" "}
            <span className="gradient-gold-text">
              ou você só está apagando incêndio todo mês?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Organize seu financeiro, elimine retrabalho e tenha controle real da sua operação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-wisa-burgundy-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
