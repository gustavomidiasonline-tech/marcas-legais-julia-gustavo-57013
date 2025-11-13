import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhatIsTrademarkRegistration from "@/components/WhatIsTrademarkRegistration";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import Guarantees from "@/components/Guarantees";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ExitIntentPopupV2 from "@/components/ExitIntentPopupV2";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProofNotification from "@/components/SocialProofNotification";

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
      <Header />
      <Hero />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-primary to-background"></div>
      
      <WhatIsTrademarkRegistration />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-background to-secondary/10"></div>
      
      <Process />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-secondary/10 to-background"></div>
      
      <Testimonials />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-background to-muted/20"></div>
      
      <WhyChooseUs />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-muted/20 to-background"></div>
      
      <PricingSection />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-background to-accent/5"></div>
      
      <Guarantees />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-accent/5 to-primary"></div>
      
      <FinalCTA />
      
      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-primary to-background"></div>
      
      <FAQ />
      <Footer />
      {showV2 ? <ExitIntentPopupV2 /> : <ExitIntentPopup />}
      <FloatingWhatsApp />
      <SocialProofNotification />
    </main>
  );
};

export default Index;
