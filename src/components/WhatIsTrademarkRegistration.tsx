import { Shield, Award, Lock, TrendingUp, AlertTriangle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Proteção Legal Completa",
    description: "Garanta os direitos exclusivos sobre sua marca em todo território nacional",
  },
  {
    icon: Award,
    title: "Reconhecimento Oficial",
    description: "Certificado INPI que comprova a propriedade da sua marca",
  },
  {
    icon: Lock,
    title: "Exclusividade Garantida",
    description: "Ninguém poderá usar sua marca sem autorização",
  },
  {
    icon: TrendingUp,
    title: "Valorização do Negócio",
    description: "Empresas com marca registrada valem até 3x mais",
  },
];

const risks = [
  "Perder sua marca para um concorrente que registrar antes",
  "Ser processado por uso indevido de marca registrada por terceiros",
  "Ter que mudar todo seu material de marketing e identidade visual",
  "Perder a confiança dos seus clientes e credibilidade no mercado",
];

const WhatIsTrademarkRegistration = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Alerta de atenção no topo */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 animate-fade-in">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 rounded-r-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm font-semibold text-yellow-800">
              ATENÇÃO: 60% das empresas perdem suas marcas por não registrarem
            </p>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            O Que É <span className="text-primary">Registro de Marca?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4 mb-4">
            É o processo oficial que garante a você o direito exclusivo de usar sua marca comercial. 
            Sem ele, <span className="font-bold text-destructive">qualquer pessoa pode copiar seu nome, logo e identidade</span>.
          </p>
        </div>

        {/* Cards de Benefícios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-xl transition-smooth group animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                    <div className="p-3 sm:p-4 rounded-xl bg-primary text-primary-foreground">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Box de Alerta de Riscos */}
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-destructive rounded-lg p-6 sm:p-8 shadow-lg">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="p-2 bg-destructive rounded-lg flex-shrink-0">
                <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-destructive">
                Sem registro, você corre o risco de:
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {risks.map((risk, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="p-1 rounded-full bg-destructive/10 flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    {risk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTrademarkRegistration;
