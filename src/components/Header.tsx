import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const phoneNumber = "5511912200912";
  const phoneDisplay = "(11) 91220-0912";
  const telLink = `tel:+${phoneNumber}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src={logo} 
              alt="Marca Legal" 
              className="h-12 sm:h-16 w-auto" 
              loading="eager"
            />
            <span className="font-bold text-xl sm:text-2xl text-foreground">
              Marca Legal
            </span>
          </div>

          {/* Phone Number - Desktop */}
          <a
            href={telLink}
            className="hidden md:flex items-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium opacity-90">Ligue Agora</span>
              <span className="text-lg font-bold">{phoneDisplay}</span>
            </div>
          </a>

          {/* Phone Number - Mobile */}
          <a
            href={telLink}
            className="md:hidden flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 shadow-md text-sm font-bold min-h-[48px]"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;