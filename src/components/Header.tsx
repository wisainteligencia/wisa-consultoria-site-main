import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWisa from "@/assets/logo-wisa-branca.png";

const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá!%20Quero%20saber%20mais%20sobre%20como%20a%20WiSa%20pode%20organizar%20minha%20empresa.";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoWisa} alt="WiSa Consultoria e Sistemas" className="h-10" />
          <span className="text-foreground font-semibold text-base md:text-lg leading-tight">
            WiSa Consultoria e Sistemas
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#dor" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">O Problema</a>
          <a href="#solucao" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Como Atuamos</a>
          <a href="#resultado" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">Resultados</a>
          <a href="#hub" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">WiSa</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold-btn text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#dor" onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">O Problema</a>
              <a href="#solucao" onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">Como Atuamos</a>
              <a href="#resultado" onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">Resultados</a>
              <a href="#hub" onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">Hub WiSa</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold-btn text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Fale Conosco
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
