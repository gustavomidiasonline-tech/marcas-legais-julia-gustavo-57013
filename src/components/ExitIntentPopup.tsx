"use client";
// components/BulletproofPopup.jsx
import { useEffect, useRef, useState } from "react";

export default function BulletproofPopup() {
  const [open, setOpen] = useState(false);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  const openedRef = useRef(false);
  const scrollTriggeredRef = useRef(false);
  const enableTimer = useRef(null);
  const fallbackTimer = useRef(null);
  const lastY = useRef(0);

  const isClient = typeof window !== "undefined";
  const isMobile = isClient
    ? /Mobi|Android|iPhone|iPad|iPod|Tablet|Touch/i.test(navigator.userAgent) ||
      window.innerWidth < 1024 ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0)
    : false;

  // ---------- utils ----------
  const safeGet = (k, d = null) => {
    try { return window.localStorage.getItem(k) ?? d; } catch { return d; }
  };
  const safeSet = (k, v) => {
    try { window.localStorage.setItem(k, v); } catch {}
  };

  const track = (type, payload={}) => {
    // Meta Pixel
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      if (type === "popup_shown") window.fbq("trackCustom", "PopupShown", payload);
      if (type === "lead_click") window.fbq("track", "Lead", payload);
    }
    // GA4
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (type === "popup_shown") window.gtag("event", "popup_shown", payload);
      if (type === "lead_click") window.gtag("event", "whatsapp_click", { category: "Popup", ...payload });
    }
  };

  const openPopup = (reason) => {
    if (openedRef.current || shown) return;
    openedRef.current = true;
    setOpen(true);
    setShown(true);
    safeSet("exit_popup_shown_v1", "1");
    track("popup_shown", { reason });
    // console.log("[Popup] OPEN via:", reason); // debug opcional
  };

  // ---------- mount/arm ----------
  useEffect(() => {
    if (!isClient) return;
    if (safeGet("exit_popup_shown_v1") === "1") { setShown(true); return; }

    // Armar depois de 800ms (evita abrir na hora do load)
    enableTimer.current = setTimeout(() => setArmed(true), 800);

    // Fallback agressivo: abre em 6s se nada disparar
    fallbackTimer.current = setTimeout(() => {
      if (!openedRef.current) openPopup("timeout_6s");
    }, 6000);

    return () => {
      clearTimeout(enableTimer.current);
      clearTimeout(fallbackTimer.current);
    };
  }, [isClient]);

  // ---------- desktop: mouse saindo pelo topo ----------
  useEffect(() => {
    if (!isClient || !armed || shown || isMobile) return;

    const onLeave = (e) => {
      if (e.clientY <= 10) openPopup("mouse_leave_top");
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [isClient, armed, shown, isMobile]);

  // ---------- mobile: scroll >= 100px OU 2 movimentos ----------
  useEffect(() => {
    if (!isClient || !armed || shown || !isMobile) return;

    lastY.current = window.scrollY;
    let moves = 0;

    const handleScroll = () => {
      const cy = window.scrollY;
      const diff = Math.abs(cy - lastY.current);
      if (diff >= 100 && !scrollTriggeredRef.current) {
        scrollTriggeredRef.current = true;
        openPopup("scroll_100px");
        return;
      }
      // Contador de dois movimentos significativos (>=60px)
      if (diff >= 60) {
        moves += 1;
        lastY.current = cy;
        if (moves >= 2 && !openedRef.current) {
          openPopup("two_scroll_moves");
        }
      }
    };

    // escuta no document para pegar scroll em wrappers
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [isClient, armed, shown, isMobile]);

  // ---------- ação: WhatsApp ----------
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent(
    "Olá! Não quero perder a oportunidade de proteger minha marca!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const onWhatsApp = () => {
    track("lead_click", { origin: "popup" });
    window.open(whatsappLink, "_blank");
    setOpen(false);
  };

  if (!open) return null;

  // ---------- UI do popup (Tailwind) ----------
  return (
    <div
      id="bulletproof-popup"
      className="fixed inset-0 z-[999999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-primary bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 text-center relative rounded-t-2xl">
          <div className="inline-flex p-3 rounded-full bg-white/15 backdrop-blur mb-3">
            {/* ícone simples */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold">⚠️ Espere! Proteja sua marca</h3>
          <p className="text-white/90 mt-1">
            Outras empresas podem registrar nomes semelhantes. Garanta a sua prioridade.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="bg-red-50 border border-red-200 p-3 rounded">
            <p className="text-sm font-semibold text-red-700 text-center">
              🚨 URGENTE: Registre sua marca antes que alguém o faça.
            </p>
          </div>

          <ul className="space-y-3 text-[15px] text-gray-800">
            <li><b>Sem registro</b>, você pode ser impedido de usar o próprio nome.</li>
            <li><b>Prejuízo certo</b>: troca de logo, materiais e perda de reputação.</li>
            <li>Fale agora no WhatsApp e resolva isso em minutos.</li>
          </ul>

          <button
            onClick={onWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 px-4 font-semibold text-white bg-green-600 hover:bg-green-700 transition"
          >
            Registrar Minha Marca Agora
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-full rounded-lg py-3 px-4 border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            Continuar Navegando
          </button>

          <p className="text-xs text-center text-gray-500">🔒 Atendimento rápido e confidencial</p>
        </div>
      </div>
    </div>
  );
}
