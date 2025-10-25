import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Zap } from "lucide-react";
import iconSecurity from "@/assets/icon-security.png";

const benefits = [
  "Análise de viabilidade completa",
  "Protocolo no INPI em até 48h",
  "Acompanhamento durante todo processo",
  "Suporte jurídico especializado",
  "Garantia de registro",
  "Sem taxas ocultas ou mensalidades",
  "Certificado de registro oficial"
];

const PricingSection = () => {
  const whatsappNumber = "5511912200912";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre os planos de registro de marca.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Invista na Proteção da Sua Marca
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Planos <strong>A PARTIR</strong> de R$ 1.500 reais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4">
                <img src={iconSecurity} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Plano de Registro Completo
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-lg sm:text-xl text-muted-foreground mr-2">A partir de</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                  R$ 1.500
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tudo incluso para proteger sua marca
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Payment Options */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 sm:p-6 mb-6">
              <h4 className="font-semibold text-base sm:text-lg text-foreground mb-3 sm:mb-4 text-center">
                💳 Formas de Pagamento
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-card p-3 sm:p-4 rounded-lg">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-foreground">Cartão de Crédito</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Em até 12x</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-accent/10 p-3 sm:p-4 rounded-lg border border-accent/20">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-foreground">PIX à Vista</p>
                    <p className="text-xs sm:text-sm text-accent font-semibold">10% de desconto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency CTA */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6 text-center">
              <p className="text-sm sm:text-base text-foreground font-semibold mb-1">
                🔥 ATENÇÃO: Apenas 5 vagas disponíveis hoje!
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Garanta sua vaga agora e evite perder o nome da sua empresa
              </p>
            </div>

            <Button 
              variant="whatsapp" 
              size="lg"
              asChild
              className="w-full text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Fazer Consultar disponibilidade da minha marca</span>
              </a>
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Pagamento 100% seguro • Atendimento imediato via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
