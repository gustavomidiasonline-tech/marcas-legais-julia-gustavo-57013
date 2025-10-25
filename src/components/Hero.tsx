import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, CheckCircle } from "lucide-react";
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
            <div className="space-y-2 sm:space-y-3 animate-fade-in text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
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

            {/* CTA */}
            <div className="flex flex-col gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="whatsapp" 
                size="default"
                asChild
                className="group w-full sm:w-auto text-xs sm:text-sm shadow-lg hover:shadow-xl py-5 sm:py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Verificar disponibilidade da minha marca</span>
                </a>
              </Button>
              
              {/* Urgency Badge */}
              <div className="bg-accent/20 border border-accent/30 rounded-lg px-3 py-1.5 backdrop-blur-sm text-center">
                <p className="text-white text-xs font-medium">
                  ⚡ <strong>Atenção:</strong> Restam poucas vagas nesta semana
                </p>
              </div>
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
