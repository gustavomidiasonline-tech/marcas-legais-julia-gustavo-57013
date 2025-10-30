import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const clientNames = [
  "Maria Silva",
  "João Santos",
  "Ana Costa",
  "Pedro Oliveira",
  "Carla Mendes",
  "Lucas Ferreira",
  "Juliana Alves",
  "Ricardo Souza",
  "Patricia Lima",
  "Fernando Rocha",
  "Camila Martins",
  "Rafael Barbosa",
  "Amanda Cardoso",
  "Gustavo Pereira",
  "Beatriz Rodrigues"
];

const cities = [
  "São Paulo", "Campinas", "Atibaia", "Belo Horizonte", 
  "Rio de Janeiro", "Curitiba", "Porto Alegre", "Salvador",
  "Recife", "Brasília", "Fortaleza", "Manaus", "Goiânia",
  "Ribeirão Preto", "Sorocaba", "Santos", "Jundiaí", "Pouso Alegre",
  "Florianópolis", "Vitória", "Natal", "João Pessoa"
];

const businessTypes = [
  "Restaurante Bella Vista",
  "Loja de Roupas Fashion",
  "Consultoria Empresarial Pro",
  "E-commerce TechStore",
  "Academia FitLife",
  "Salão de Beleza Elegance",
  "Escritório de Advocacia Silva & Santos",
  "Clínica Médica Saúde Mais",
  "Agência de Marketing Digital",
  "Padaria Pão Quente",
  "Cafeteria Aroma",
  "Pet Shop Amigo Fiel",
  "Farmácia Vida Saudável",
  "Lanchonete Sabor Express",
  "Autoescola Direção Segura",
  "Imobiliária Prime",
  "Oficina Auto Mecânica",
  "Pizzaria Napolitana",
  "Hamburgueria Burger House",
  "Sorveteria Gelato"
];

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentClient, setCurrentClient] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentBusiness, setCurrentBusiness] = useState("");

  useEffect(() => {
    console.log('🔔 SocialProofNotification component mounted');
    
    const showNotification = () => {
      const randomClient = clientNames[Math.floor(Math.random() * clientNames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomBusiness = businessTypes[Math.floor(Math.random() * businessTypes.length)];
      
      setCurrentClient(randomClient);
      setCurrentCity(randomCity);
      setCurrentBusiness(randomBusiness);
      setIsVisible(true);
      console.log('✅ Showing notification for:', randomClient, '-', randomBusiness, 'em', randomCity);

      setTimeout(() => {
        setIsVisible(false);
        console.log('❌ Hiding notification');
      }, 5000); // Visível por 5 segundos
    };

    // Primeira notificação após 5 segundos (reduzido para teste)
    const initialTimer = setTimeout(() => {
      console.log('⏰ First notification triggered');
      showNotification();
    }, 5000);

    // Notificações subsequentes a cada 15 segundos
    const interval = setInterval(() => {
      console.log('⏰ Interval notification triggered');
      showNotification();
    }, 15000);

    return () => {
      console.log('🔔 SocialProofNotification component unmounted');
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-24 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-[9999] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-card border-2 border-accent/20 rounded-lg shadow-2xl p-3 sm:p-4 w-full sm:max-w-sm backdrop-blur-md">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              🔥 Nova marca registrada!
            </p>
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
              <span className="font-medium text-foreground">{currentClient}</span> da empresa <span className="font-medium text-foreground">{currentBusiness}</span> em <span className="font-medium text-foreground">{currentCity}</span> acabou de registrar sua marca com a Legal Marcas
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 -mt-1"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
