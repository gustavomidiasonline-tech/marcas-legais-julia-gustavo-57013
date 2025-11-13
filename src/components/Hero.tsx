import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-brand-protection.jpg";

const Hero = () => {
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de registrar minha marca.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          {/* Content */}
          <div className="text-white space-y-6 sm:space-y-8 relative z-20 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '0.1s' }}>
              <Badge variant="secondary" className="bg-accent/20 text-white border-accent/30 backdrop-blur-sm py-1 px-2 sm:py-1.5 sm:px-3 text-xs font-medium">
                <Shield className="w-3 h-3 mr-1" />
                +1.000 Marcas
              </Badge>
              <Badge variant="secondary" className="bg-gold/20 text-white border-gold/30 backdrop-blur-sm py-1 px-2 sm:py-1.5 sm:px-3 text-xs font-medium">
                <CheckCircle className="w-3 h-3 mr-1" />
                5+ Anos
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3 animate-fade-in-up text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold leading-tight drop-shadow-lg">
                Registre sua Marca no INPI e garanta exclusividade em todo o Brasil
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md max-w-2xl mx-auto lg:mx-0">
                Evite que outras empresas usem o nome do seu negócio. Nossa equipe cuida de todo o processo de registro, do início ao fim — rápido, seguro e sem burocracia.
              </p>
              
              {/* Quick Trust Seals */}
              <div className="grid grid-cols-2 gap-2 pt-1 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 text-white/90 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Atendimento WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Início em até 24h</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Pagamento Facilitado</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>+1.000 marcas</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-bounce-in flex justify-center lg:justify-start" style={{ animationDelay: '0.3s' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg min-h-[56px]"
              >
                <span>Falar com Especialista no WhatsApp</span>
              </a>
            </div>

            {/* Urgency Badge */}
            <div className="bg-accent/20 border border-accent/30 rounded-lg px-3 sm:px-4 py-2 backdrop-blur-sm text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-white text-xs sm:text-sm font-medium">
                <strong>ATENÇÃO:</strong> Atendemos até 10 novos clientes por mês
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 animate-fade-in mt-4 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Registro de Marca e Proteção de Propriedade Intelectual"
                className="w-full h-auto object-cover max-h-[250px] sm:max-h-[350px] lg:max-h-none"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gold text-gold-foreground p-3 sm:p-4 lg:p-5 rounded-lg shadow-lg z-30">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">+1.000</div>
              <div className="text-xs sm:text-sm font-medium">Marcas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
