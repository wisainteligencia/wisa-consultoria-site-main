import logoWisaBranca from "@/assets/logo-wisa-branca.png";
  import { Instagram } from "lucide-react"
  import { Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoWisaBranca} alt="WiSa" className="h-14 opacity-90" />
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} WiSa Consultoria e Sistemas. Todos os direitos reservados.
        </p>
       <a
       href= "https://instagram.com/hubwisa"
       target="_blank"
       rel="noopener noreferrer">
       <Instagram size = {24} />
       </a>
       <a
       href= "https://facebook.com/hubwisa"
       target="_blank"
       rel="noopener noreferrer">
       <Facebook />
       </a>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
          <span>(32) 3198-0374</span>
          <span>suporte@hubwisa.com.br</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
