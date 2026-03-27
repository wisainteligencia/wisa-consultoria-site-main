import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/553231980374?text=Olá!%20Quero%20organizar%20minha%20empresa%20e%20parar%20de%20trabalhar%20no%20escuro.";

const Bubble = forwardRef<HTMLDivElement, { onClose: () => void }>(({ onClose }, ref) => (
  <div ref={ref} className="glass-card-gold rounded-2xl rounded-br-md p-4 max-w-[280px] relative">
    <button onClick={onClose} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors">
      <X size={14} />
    </button>
   
      <p className="text-sm text-foreground">
        Quer organizar sua empresa e parar de trabalhar no escuro? Me chama aqui. 👇
      </p>
    </div>
  
));

Bubble.displayName = "Bubble";

const MotionBubble = motion.create(Bubble);

const IsaAssistant = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <MotionBubble
            key="bubble"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClose={() => setShowBubble(false)}
          />
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[90px] h-[90px] rounded-full shadow-xl animate-pulse-gold hover:opacity-90 transition-opacity overflow-hidden"
      >
        <img 
          src="/public/isa2.png" 
          alt="Isa" 
          className="w-[full] h-full object-cover"
        />
      </a>
    </div>
  );
};

export default IsaAssistant;
