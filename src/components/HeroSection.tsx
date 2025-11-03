import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onScrollToMenu: () => void;
}

export const HeroSection = ({ onScrollToMenu }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://cdn.poehali.dev/files/db2a3e11-c820-420f-a4e1-1aff51a0a020.JPG',
    'https://cdn.poehali.dev/files/c476aa22-80fe-4c26-baa1-196829acc1cd.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Роллы и Пицца
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Лучшие роллы и пицца в городе. Доставка за 60 минут!
        </p>
        <Button 
          size="lg" 
          onClick={onScrollToMenu}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
        >
          Смотреть меню
          <Icon name="ChevronDown" className="ml-2" size={24} />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
