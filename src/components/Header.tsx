import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const phoneNumber = "5511912200912";
  const phoneDisplay = "(11) 91220-0912";
  const telLink = `tel:+${phoneNumber}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logo} 
              alt="Marca Legal" 
              className="h-8 sm:h-10 w-auto" 
              loading="eager"
            />
            <span className="font-bold text-base sm:text-lg text-foreground hidden sm:inline">
              Marca Legal
            </span>
          </div>

          {/* Phone Number - Desktop */}
          <a
            href={telLink}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-smooth shadow-sm hover:shadow-md group"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium opacity-90">Ligue Agora</span>
              <span className="text-base font-bold">{phoneDisplay} 📞</span>
            </div>
          </a>

          {/* Phone Number - Mobile */}
          <a
            href={telLink}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-smooth shadow-sm text-sm font-bold"
          >
            <Phone className="w-4 h-4" />
            <span>{phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;