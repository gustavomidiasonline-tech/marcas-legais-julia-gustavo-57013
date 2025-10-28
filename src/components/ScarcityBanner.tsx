import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

const ScarcityBanner = () => {
  const [location, setLocation] = useState("sua região");
  const [timeLeft, setTimeLeft] = useState("");
  const [spots, setSpots] = useState(3);

  useEffect(() => {
    // Buscar localização via IP
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
          setLocation(data.city);
        }
      } catch (error) {
        console.log('Usando localização padrão');
      }
    };

    fetchLocation();

    // Gerar número aleatório de vagas (2-5)
    setSpots(Math.floor(Math.random() * 4) + 2);
  }, []);

  useEffect(() => {
    // Countdown até 23:59 de hoje
    const updateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
      } else {
        setTimeLeft("00:00:00");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <span className="text-sm sm:text-base font-bold">
            🔥 ATENÇÃO: Apenas {spots} vagas disponíveis para registro em {location}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg">
          <span className="text-xs sm:text-sm font-semibold">Termina em:</span>
          <span className="text-lg sm:text-xl font-black tabular-nums">
            {timeLeft}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScarcityBanner;
