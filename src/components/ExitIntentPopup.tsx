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
  const timeoutRef = useRef(null);

  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent(
    "Olá! Não quero perder a oportunidade de proteger minha marca!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // --- Detectar mobile / iframe / client ---
  const isClient = typeof window !== "undefined";
  const isIframe = isClient && window.self !== window.top;
  const isMobile = isClient
    ? /Mobi|Android|iPhone|iPad|iPod|Tablet|Touch/i.test(navigator.userAgent) ||
      window.innerWidth < 1024 ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0)
    : false;

  // --- Delay inicial para ativar popup ---
  useEffect(() => {
    if (!isClient) return;
    try {
      const popupShown = sessionStorage.getItem("exitPopupShown");
      if (popupShown) {
        setHasShown(true);
        return;
      }
    } catch (e) {
      console.warn("sessionStorage bloqueado:", e);
    }

    const timer = setTimeout(() => {
      setCanShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isClient]);

  // --- Exit Intent Desktop ---
  useEffect(() => {
    if (!isClient || !canShow || hasShown || isMobile) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !isOpen && !hasShown) {
        openPopup("mouse leave");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isClient, canShow, hasShown, isOpen, isMobile]);

  // --- Exit Intent Mobile ---
  useEffect(() => {
    if (!isClient || !canShow || hasShown || !isMobile) return;

    const scrollThreshold = 80;
    lastScrollY.current = window.scrollY;
    const target = isIframe ? document : window;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastScrollY.current);
      if (diff > scrollThreshold) {
        scrollCount.current += 1;
        lastScrollY.current = currentY;
        console.log(`📱 Scroll ${scrollCount.current}/3`);
        if (scrollCount.current >= 3 && !isOpen && !hasShown) {
          openPopup("3 scrolls");
        }
      }
    };

    // Fallback de tempo (12 segundos)
    timeoutRef.current = setTimeout(() => {
      if (!isOpen && !hasShown) {
        openPopup("timeout 12s");
      }
    }, 12000);

    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, [isClient, canShow, hasShown, isOpen, isMobile, isIframe]);

  // --- Abrir popup ---
  const openPopup = (trigger) => {
    console.log("🚀 Popup aberto via:", trigger);
    setIsOpen(true);
    setHasShown(true);
    try {
      sessionStorage.setItem("exitPopupShown", "true");
    } catch {
      /* ignora se storage for bloqueado */
    }
  };

  // --- Ação WhatsApp ---
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-w-[95vw] p-0 overflow-hidden border-2 border-primary max-h-[90vh] overflow-y-auto z-[99999]">
        {/* HEADER */}
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

        {/* CONTEÚDO */}
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
                <strong>Sem registro, você pode perder tudo:</strong> outra empresa pode registrar seu nome e te impedir de usar sua própria marca.
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
              Registrar Minha Marca Agora
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
