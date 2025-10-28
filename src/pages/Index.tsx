import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WhatIsTrademarkRegistration from "@/components/WhatIsTrademarkRegistration";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ExitIntentPopupV2 from "@/components/ExitIntentPopupV2";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProofNotification from "@/components/SocialProofNotification";
import ScarcityBanner from "@/components/ScarcityBanner";

const Index = () => {
  const [showV2, setShowV2] = useState(false);

  useEffect(() => {
    // A/B Testing: 50% chance de mostrar cada versão
    // Verifica se já foi definido na sessão para consistência
    const storedVersion = sessionStorage.getItem("popupVersion");
    
    if (storedVersion) {
      setShowV2(storedVersion === "v2");
    } else {
      const randomVersion = Math.random() < 0.5;
      setShowV2(randomVersion);
      sessionStorage.setItem("popupVersion", randomVersion ? "v2" : "v1");
    }
  }, []);

  return (
    <main className="min-h-screen">
      <ScarcityBanner />
      <Hero />
      <WhatIsTrademarkRegistration />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <PricingSection />
      <FinalCTA />
      <FAQ />
      <Footer />
      {showV2 ? <ExitIntentPopupV2 /> : <ExitIntentPopup />}
      <FloatingWhatsApp />
      <SocialProofNotification />
    </main>
  );
};

export default Index;
