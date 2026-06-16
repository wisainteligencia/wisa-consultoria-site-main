import { Instagram, Facebook } from "lucide-react";
import logoWisaBranca from "@/assets/logo-wisa-branca.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoWisaBranca} alt="WiSa" className="h-14 opacity-90" />
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} WiSa Consultoria e Sistemas. Todos os direitos reservados.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
          <span>(32) 3198-0374</span>
          <span>suporte@hubwisa.com.br</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/hubwisa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/hubwisa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
