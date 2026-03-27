import logoWisaBranca from "@/assets/logo-wisa-branca.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoWisaBranca} alt="WiSa" className="h-8 opacity-60" />
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} WiSa Consultoria e Sistemas. Todos os direitos reservados.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
          <span>(32) 3198-0374</span>
          <span>wisa@wisaconsultoriaesistemas.com.br</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
