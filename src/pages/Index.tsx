import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <PricingSection />
      <FinalCTA />
      <FAQ />
      <Footer />
      <ExitIntentPopup />
      <FloatingWhatsApp />
      <SocialProofNotification />
    </main>
  );
};

export default Index;
