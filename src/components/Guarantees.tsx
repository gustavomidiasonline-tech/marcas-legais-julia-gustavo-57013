import { Shield, CheckCircle, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de Registro",
    description: "Se sua marca não for aprovada pelo INPI, refazemos o processo sem custo adicional.",
    color: "text-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    icon: CheckCircle,
    title: "Garantia de Satisfação",
    description: "Se não ficar satisfeito com nosso atendimento nos primeiros 7 dias, devolvemos 100% do valor.",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Eye,
    title: "Garantia de Transparência",
    description: "Você acompanha cada etapa do processo em tempo real pelo nosso sistema.",
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
];

const Guarantees = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            🛡️ Nossas Garantias
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Seu investimento está protegido. Trabalhamos com total transparência e comprometimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Card
                key={index}
                className={`border-2 ${guarantee.borderColor} ${guarantee.bgColor} shadow-md hover:shadow-xl transition-smooth animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full ${guarantee.bgColor} border-2 ${guarantee.borderColor}`}>
                    <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${guarantee.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {guarantee.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Trust Message */}
        <div className="text-center mt-10 sm:mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-base sm:text-lg text-foreground font-semibold max-w-3xl mx-auto">
            ✅ Mais de 1.000 marcas registradas com sucesso • 
            <span className="text-primary"> Satisfação garantida ou seu dinheiro de volta</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;