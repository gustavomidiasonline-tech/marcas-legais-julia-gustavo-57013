import { Shield, Zap, Users, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Acompanhamento Completo",
    description: "Cuidamos de todo o processo até a aprovação no INPI, você não precisa se preocupar com nada.",
  },
  {
    icon: Zap,
    title: "Processo Rápido",
    description: "Protocolo ágil e transparente, com atualizações constantes sobre o andamento do seu registro.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes em Propriedade Intelectual prontos para defender seus direitos.",
  },
  {
    icon: Award,
    title: "Segurança Jurídica",
    description: "Proteção legal garantida em todo território nacional contra cópias e uso indevido.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Humanizado",
    description: "Atendimento ágil e personalizado, sempre disponível para tirar suas dúvidas.",
  },
];

const Benefits = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Por que Registrar Sua Marca com a Gente?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Oferecemos um serviço completo e profissional para proteger o que você construiu com tanto esforço.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-xl transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
