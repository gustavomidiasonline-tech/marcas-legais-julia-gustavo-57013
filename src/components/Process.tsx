import { Search, FileText, Eye, Award } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise de Viabilidade",
    description: "Verificamos se sua marca pode ser registrada e orientamos sobre a melhor estratégia.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Protocolo no INPI",
    description: "Preparamos toda documentação e protocolamos seu pedido no Instituto Nacional de Propriedade Industrial.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Acompanhamento e Defesa",
    description: "Monitoramos todo o processo e fazemos a defesa quando necessário para garantir a aprovação.",
  },
  {
    icon: Award,
    number: "04",
    title: "Entrega do Certificado",
    description: "Você recebe o certificado de registro e sua marca fica protegida por 10 anos, renovável.",
  },
];

const Process = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Como Funciona o Registro de Marca
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Um processo simples e transparente, dividido em 4 etapas essenciais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent/20 -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
