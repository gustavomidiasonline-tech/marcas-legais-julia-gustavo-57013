import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const whatsappNumber = "5511912200912";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "legalmarkregistro@gmail.com";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="Marca Legal" className="h-12 sm:h-16 w-auto mb-2" loading="lazy" />
            <h3 className="text-lg sm:text-xl font-bold">Marca Legal</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80 leading-relaxed">
              Especialistas em Registro de Marca e Propriedade Intelectual. 
              Atendimento em todo o Brasil.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Serviços</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
              <li>Registro de Marca</li>
              <li>Análise de Viabilidade</li>
              <li>Acompanhamento INPI</li>
              <li>Defesa de Marca</li>
              <li>Renovação de Registro</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Contato</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>(11) 91220-0912</span>
              </a>
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>Atendimento em todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Informações</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Marca Legal. Todos os direitos reservados.</p>
          <p className="mt-2">
            Especialistas em Registro de Marca e Propriedade Intelectual – Atendimento em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
