import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, MessageCircle, Shield } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [canShow, setCanShow] = useState(false);

  const scrollCount = useRef(0);
  const lastScrollY = useRef(0);
  const triggerTimeout = useRef(null);
  const scrollTimeout = useRef(null);

  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent(
    "Olá! Não quero perder a oportunidade de proteger minha marca!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Detecta se é mobile
  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      window.innerWidth < 768 ||
      "ontouchstart" in window
    );
  };

  // Delay inicial para permitir que o visitante leia a página antes de aparecer algo
  useEffect(() => {
    const popupShown = sessionStorage.getItem("exitPopupShown");
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const enableTimer = setTimeout(() => {
      setCanShow(true);
    }, 3000);

    return () => clearTimeout(enableTimer);
  }, []);

  // Exit intent para DESKTOP (mouse saindo do topo)
  useEffect(() => {
    if (!canShow || hasShown || isMobile()) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [canShow, hasShown, isOpen]);

  // Exit intent para MOBILE (3 scrolls detectados)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!canShow || hasShown || !isMobile()) return;

    const scrollThreshold = 80; // pixels mínimos para contar um scroll
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const distance = Math.abs(currentScrollY - lastScrollY.current);

      // evita contagem excessiva (debounce leve)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (distance > scrollThreshold) {
          scrollCount.current += 1;
          lastScrollY.current = currentScrollY;
          console.log(`Scroll ${scrollCount.current}/3`);

          if (scrollCount.current >= 3 && !hasShown && !isOpen) {
            console.log("Popup mobile acionado por 3 scrolls");
            setIsOpen(true);
            setHasShown(true);
            sessionStorage.setItem("exitPopupShown", "true");
          }
        }
      }, 150);
    };

    // Fallback — mostra após 20s se não foi exibido ainda
    triggerTimeout.current = setTimeout(() => {
      if (!hasShown && !isOpen) {
        console.log("Popup mobile acionado por tempo limite (20s)");
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }, 20000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(triggerTimeout.current);
      clearTimeout(scrollTimeout.current);
    };
  }, [canShow, hasShown, isOpen]);

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-w-[95vw] p-0 overflow-hidden border-2 border-primary max-h-[90vh] overflow-y-auto z-[9999]">
        {/* Header com gradiente */}
        <div className="bg-gradient-primary text-white p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="relative z-10">
            <div className="inline-flex p-3 rounded-full bg-accent/20 backdrop-blur-sm mb-4">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
            </div>
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                ⚠️ Espere! Você Está Prestes a Perder Sua Marca
              </DialogTitle>
              <DialogDescription className="text-base sm:text-lg text-white/90">
                <strong>ALERTA:</strong> Outras empresas estão tentando registrar marcas semelhantes à sua.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Corpo do popup */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg mb-4">
            <p className="text-sm sm:text-base text-foreground font-bold text-center">
              🚨 <span className="text-red-600">URGENTE:</span> 3 empresas consultaram marcas similares à sua hoje. Registre a sua marca PRIMEIRO!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-foreground">
                <strong>Sem registro, você pode perder tudo:</strong> Outra empresa pode registrar seu nome e te impedir de usar sua própria marca.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-foreground">
                <strong>Prejuízo garantido:</strong> você terá que mudar nome, logo, materiais e perderá toda reputação construída.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-foreground">
                Converse conosco AGORA e regularize isso ANTES que seja tarde demais.
              </p>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-accent/40">
            <p className="text-xs sm:text-sm text-center font-bold text-foreground">
              ⚡ <span className="text-accent-foreground">VAGAS LIMITADAS:</span> Apenas 5 vagas para análise gratuita hoje.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full group text-sm sm:text-base"
              onClick={handleWhatsAppClick}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Registrar Minha Marca Agora
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full text-sm sm:text-base"
              onClick={() => setIsOpen(false)}
            >
              Continuar Navegando
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            🔒 Atendimento rápido e confidencial
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
