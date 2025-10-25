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

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentClient, setCurrentClient] = useState("");

  useEffect(() => {
    const showNotification = () => {
      // Seleciona um nome aleatório
      const randomClient = clientNames[Math.floor(Math.random() * clientNames.length)];
      setCurrentClient(randomClient);
      setIsVisible(true);

      // Esconde a notificação após 5 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Primeira notificação após 15 segundos
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 15000);

    // Notificações subsequentes a cada 15 segundos
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 animate-fade-in">
      <div className="bg-card border-2 border-accent/20 rounded-lg shadow-lg p-4 max-w-sm backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">
              🔥 Nova marca registrada!
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="font-medium text-foreground">{currentClient}</span> acabou de registrar sua marca com a Legal Marcas
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 h-6 w-6"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
