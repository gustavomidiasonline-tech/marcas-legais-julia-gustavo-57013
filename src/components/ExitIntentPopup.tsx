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
  const [hasSeenPricing, setHasSeenPricing] = useState(false);

  const scrollCount = useRef(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent(
    "Olá! Não quero perder a oportunidade de proteger minha marca!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Detecta ambiente
  const isClient = typeof window !== "undefined";
  const isIframe = isClient && window.self !== window.top;
  const isMobile = isClient
    ? /Mobi|Android|iPhone|iPad|iPod|Tablet|Touch/i.test(navigator.userAgent) ||
      window.innerWidth < 1024 ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0)
    : false;

  // Delay curto para ativar popup
  useEffect(() => {
    if (!isClient) return;
    try {
      const popupShown = sessionStorage.getItem("exitPopupShown");
      if (popupShown) {
        setHasShown(true);
        return;
      }
    } catch {}

    const timer = setTimeout(() => setCanShow(true), 5000); // 5 segundos
    return () => clearTimeout(timer);
  }, [isClient]);

  // Detectar quando usuário vê a seção de preços
  useEffect(() => {
    if (!isClient || hasShown) return;

    const checkScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 60) {
        setHasSeenPricing(true);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll(); // Check initial position
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isClient, hasShown]);

  // Desktop: sair do topo
  useEffect(() => {
    if (!isClient || !canShow || hasShown || isMobile || !hasSeenPricing) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !isOpen && !hasShown) {
        openPopup("mouse_leave");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isClient, canShow, hasShown, isOpen, isMobile, hasSeenPricing]);

  // Mobile: 4 scrolls + fallback de 30s (só após ver preços)
  useEffect(() => {
    if (!isClient || !canShow || hasShown || !isMobile || !hasSeenPricing) return;

    const scrollThreshold = 50;
    lastScrollY.current = window.scrollY;
    const target = isIframe ? document : window;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastScrollY.current);
      if (diff > scrollThreshold) {
        scrollCount.current += 1;
        lastScrollY.current = currentY;
        console.log(`📱 Scroll ${scrollCount.current}/4`);
        if (scrollCount.current >= 4 && !isOpen && !hasShown) {
          openPopup("4_scrolls");
        }
      }
    };

    // Fallback de 30 segundos
    timeoutRef.current = setTimeout(() => {
      if (!isOpen && !hasShown) {
        openPopup("timeout_30s");
      }
    }, 30000);

    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, [isClient, canShow, hasShown, isOpen, isMobile, isIframe, hasSeenPricing]);

  // Função para abrir popup
  const openPopup = (trigger) => {
    console.log("🚀 Popup aberto via:", trigger);
    setIsOpen(true);
    setHasShown(true);
    try {
      sessionStorage.setItem("exitPopupShown", "true");
    } catch {}
  };

  // Clique WhatsApp
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-w-[95vw] p-0 overflow-hidden border-2 border-primary max-h-[90vh] overflow-y-auto z-[99999]">
        {/* HEADER */}
        <div className="bg-gradient-primary text-white p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
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
              🚨 <span className="text-red-600">URGENTE:</span> Não deixe sua marca desprotegida. Outras empresas podem registrá-la antes de você!
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg mb-4">
            <p className="text-sm sm:text-base text-foreground font-bold text-center">
              💰 <span className="text-green-600">DESCONTO ESPECIAL:</span> Mais R$ 200 de desconto exclusivo! Chame agora para garantir.
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

          <div className="space-y-3">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full group text-sm sm:text-base"
              onClick={handleWhatsAppClick}
            >
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com Especialista no WhatsApp 💬
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
