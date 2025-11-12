import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Users, Check, Clock, Lock } from "lucide-react";

const ExitIntentPopupV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [canShow, setCanShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [hasSeenPricing, setHasSeenPricing] = useState(false);

  const scrollCount = useRef(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero aproveitar a condição especial e proteger minha marca!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const isClient = typeof window !== "undefined";
  const isIframe = isClient && window.self !== window.top;
  const isMobile = isClient
    ? /Mobi|Android|iPhone|iPad|iPod|Tablet|Touch/i.test(navigator.userAgent) ||
      window.innerWidth < 1024 ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0)
    : false;

  useEffect(() => {
    if (!isClient) return;
    try {
      const popupShown = sessionStorage.getItem("exitPopupShown");
      if (popupShown) {
        setHasShown(true);
        return;
      }
    } catch {}

    const timer = setTimeout(() => setCanShow(true), 5000);
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
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isClient, hasShown]);

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

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 60000); // 1 minuto
      return () => clearInterval(timer);
    }
  }, [isOpen, timeLeft]);

  const openPopup = (trigger) => {
    console.log("🚀 Popup V2 aberto via:", trigger);
    setIsOpen(true);
    setHasShown(true);
    try {
      sessionStorage.setItem("exitPopupShown", "true");
    } catch {}
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[520px] max-w-[95vw] p-0 overflow-hidden border-2 border-red-500 max-h-[90vh] overflow-y-auto z-[99999]">
        {/* HEADER COM ÍCONE */}
        <div className="bg-white pt-6 pb-4 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          
          <DialogHeader className="space-y-3 px-6">
            <DialogTitle className="text-3xl font-black text-foreground flex items-center justify-center gap-2">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              ATENÇÃO!
            </DialogTitle>
            <DialogDescription className="sr-only">
              Oferta especial de registro de marca
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* CONTEÚDO */}
        <div className="px-4 sm:px-6 pb-6 space-y-4">
          {/* Box registre agora */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3">
            <p className="text-sm font-bold text-yellow-900 text-center">
              Registre agora e evite problemas futuros com sua marca
            </p>
          </div>

          {/* Texto urgência */}
          <p className="text-center text-sm text-foreground">
            Você está prestes a sair sem proteger sua marca!{" "}
            <span className="font-bold text-red-600">Não perca essa oportunidade.</span>
          </p>

          {/* Banner condição especial */}
          <div className="bg-yellow-500 rounded-lg p-3 text-center">
            <p className="text-sm font-black text-yellow-950">
              CONDIÇÃO ESPECIAL: MAIS R$ 200 DE DESCONTO!
            </p>
          </div>

          {/* Box de desconto */}
          <div className="border-2 border-green-500 bg-green-50 rounded-lg p-4 space-y-2">
            <p className="text-center text-sm font-bold text-green-700 mb-1">
              DESCONTO EXCLUSIVO PARA VOCÊ
            </p>
            <p className="text-center text-3xl font-black text-green-600">
              + R$ 200 OFF
            </p>
            <p className="text-center text-sm text-foreground mt-2">
              Chame agora no WhatsApp e garanta este desconto extra!
            </p>
          </div>

          {/* Lista de benefícios */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground">Economia total de R$ 200</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground">Garantia de devolução 100%</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-foreground">Suporte VIP prioritário</span>
            </div>
          </div>

          {/* Temporizador */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-red-600" />
            <p className="text-sm font-bold text-red-700">
              Oferta expira em {timeLeft} minutos!
            </p>
          </div>

          {/* Botões */}
          <div className="space-y-3 pt-2">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base h-14 rounded-lg flex items-center justify-center gap-2"
              onClick={handleWhatsAppClick}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com Especialista no WhatsApp
            </Button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sm text-muted-foreground hover:text-foreground underline transition-colors"
            >
              Não, vou arriscar perder minha marca
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopupV2;
