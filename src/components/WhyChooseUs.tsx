import { Shield, Clock, Award, ThumbsUp, CheckCircle, AlertCircle } from "lucide-react";

const stats = [
  {
    icon: Shield,
    number: "1.000+",
    label: "Marcas Protegidas",
    description: "Empresas que confiaram em nosso trabalho"
  },
  {
    icon: Clock,
    number: "98%",
    label: "Taxa de Aprovação",
    description: "Alto índice de sucesso nos registros"
  },
  {
    icon: Award,
    number: "5+",
    label: "Anos de Experiência",
    description: "Especialização em propriedade intelectual"
  },
  {
    icon: ThumbsUp,
    number: "100%",
    label: "Satisfação",
    description: "Clientes satisfeitos com nosso atendimento"
  }
];

const ourServices = [
  "Registro completo",
  "Advogados experientes",
  "Protocolo em 48h",
  "Garantia de registro",
  "Sem mensalidades",
  "Sem anuidades",
  "Preço justo",
  "Sem cobranças abusivas",
  "Pagamento único na contratação",
  "Clientes satisfeitos",
  "Sem Reclame Aqui"
];

const theirProblems = [
  "Registro Incompleto",
  "Sem acompanhamento",
  "Clientes insatisfeitos",
  "Taxas abusivas",
  "Cobranças extras",
  "Serviço caro",
  "Cobrança a cada ato processual",
  "Reclamações"
];


const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Por Que Escolher a Marca Legal?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise e dedicação para proteger o que é seu
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-smooth border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block bg-card px-4 py-2 rounded-lg mb-4">
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Nosso registro é completo
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que você deveria contratar a Legal Marcas?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              A resposta é simples: somos uma das melhores empresas do mercado e você pode comparar isso facilmente com as demais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Nós - Secure Marcas */}
            <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <h4 className="text-lg sm:text-xl font-bold text-white">Nós</h4>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6">
                <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-2">
                  Legal Marcas
                </h5>
                <p className="text-white/80 text-center text-sm sm:text-base">
                  Registro Completo
                </p>
              </div>
              <div className="space-y-3">
                {ourServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-white animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-background text-foreground hover:bg-background/90 font-semibold py-3 px-6 rounded-lg transition-smooth text-sm sm:text-base">
                Registre sua marca conosco →
              </button>
            </div>

            {/* Eles - Concorrência */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">Eles</h4>
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6 mb-6">
                <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-2">
                  Concorrência*
                </h5>
                <p className="text-muted-foreground text-center text-sm sm:text-base">
                  Registro Incompleto
                </p>
              </div>
              <div className="space-y-3">
                {theirProblems.map((problem, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-destructive mt-0.5" />
                    <span className="text-sm sm:text-base">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-smooth text-sm sm:text-base inline-flex items-center gap-2 shadow-lg">
              <Shield className="w-5 h-5" />
              Registrar com a Legal Marcas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
