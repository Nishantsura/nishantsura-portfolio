import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { LiquidCard } from "./liquid-glass-card";

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  className: string;
}

interface DraggableCardBodyProps {
  children: React.ReactNode;
  className?: string;
  onReset?: (resetFunction: () => void) => void;
}

const DraggableCardBody: React.FC<DraggableCardBodyProps> = ({ 
  children, 
  className = "", 
  onReset 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = useCallback((event: any, info: PanInfo) => {
    if (info.offset.x > 200) {
      x.set(500);
      y.set(100);
    } else if (info.offset.x < -200) {
      x.set(-500);
      y.set(100);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [x, y]);

  const resetCard = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    if (onReset) {
      onReset(resetCard);
    }
  }, [onReset, resetCard]);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x, y, rotate, opacity }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

const DraggableCardContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default function LiquidGlassCardsDemo() {
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const resetFunctions: (() => void)[] = [];

  const addResetFunction = useCallback((resetFunction: () => void) => {
    resetFunctions.push(resetFunction);
  }, []);

  const resetCards = useCallback(() => {
    setIsResetting(true);
    resetFunctions.forEach(reset => reset());
    setTimeout(() => {
      setIsResetting(false);
      setResetTrigger(prev => prev + 1);
    }, 300);
  }, [resetFunctions]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'r' || event.key === 'R') {
        resetCards();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [resetCards, isResetting]);

  const items: CardItem[] = [
    {
      title: "ES Rentals, Dubai",
      image: "/images/projects/Autoluxe DXB.png",
      description: "Launched luxury car rental platform in 6 weeks - Integrated payment and booking system",
      className: "absolute top-20 left-[15%] rotate-[-5deg]",
      year: "2025",
      id: "001"
    },
    {
      title: "ProQuo Technologies",
      image: "/images/projects/Proquo.png",
      description: "Created B2B networking platform - Real-time messaging and profile matching",
      className: "absolute top-60 left-[20%] rotate-[-7deg]",
      year: "2024",
      id: "002"
    },
    {
      title: "Swiggy Case Study",
      image: "/images/projects/swiggy.png",
      description: "Improved delivery partner experience - Research-driven UX optimization",
      className: "absolute top-10 left-[35%] rotate-[8deg]",
      year: "2024",
      id: "003"
    },
    {
      title: "Autostock AI",
      image: "/images/projects/Autostock AI.png",
      description: "AI-powered inventory management system - Predictive analytics and automation",
      className: "absolute top-50 left-[50%] rotate-[10deg]",
      year: "2024",
      id: "004"
    },
    {
      title: "Cactus IT Solutions",
      image: "/images/projects/CactusIT.png",
      description: "Enterprise software solutions - Custom development and consulting",
      className: "absolute top-30 right-[25%] rotate-[2deg]",
      year: "2024",
      id: "005"
    },
    {
      title: "Digilocker Integration",
      image: "/images/projects/Digilocker-.jpg",
      description: "Government document management system - Secure digital storage solution",
      className: "absolute top-70 left-[40%] rotate-[-7deg]",
      year: "2023",
      id: "006"
    },
    {
      title: "Webilize Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      description: "Web development agency platform - Client management and project tracking",
      className: "absolute top-40 right-[15%] rotate-[5deg]",
      year: "2023",
      id: "007"
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={resetCards}
        disabled={isResetting}
        className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
        title="Reset cards (or press R)"
      >
        <RefreshCw 
          className={`w-4 h-4 text-white ${isResetting ? 'animate-spin' : ''}`} 
        />
      </button>
      
      <DraggableCardContainer className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-lg md:text-2xl font-black text-neutral-400 dark:text-neutral-800">
          Real projects. Real results. Real clients who keep coming back.
        </p>
        {items.map((item) => (
          <DraggableCardBody 
            key={`${item.id}-${resetTrigger}`} 
            className={item.className}
            onReset={addResetFunction}
          >
            <LiquidCard className="w-60 md:w-80 p-2">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-60 w-full object-cover rounded-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center`;
                  }}
                />
                <div className="absolute top-4 left-4 bg-highlight-red/90 text-white px-3 py-1 rounded text-sm font-medium">
                  /{item.year}/{item.id}/
                </div>
                <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </LiquidCard>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
} 