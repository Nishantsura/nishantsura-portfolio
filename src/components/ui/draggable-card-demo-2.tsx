import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { RefreshCw, Check } from "lucide-react";

export default function DraggableCardDemo() {
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const resetFunctions = useRef<(() => void)[]>([]);

  const resetCards = useCallback(async () => {
    if (isResetting) return; // Prevent multiple clicks
    
    setIsResetting(true);
    setShowSuccess(false);
    
    // Clear previous reset functions
    resetFunctions.current = [];
    
    // Trigger all reset functions
    resetFunctions.current.forEach(resetFn => {
      if (resetFn) resetFn();
    });
    
    // Force re-render to ensure cards reset properly
    setResetTrigger(prev => prev + 1);
    
    // Shorter delay for more responsive feel
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Re-trigger reset after the new cards are mounted
    setTimeout(() => {
      resetFunctions.current.forEach(resetFn => {
        if (resetFn) resetFn();
      });
      
      // Show success feedback
      setShowSuccess(true);
      setIsResetting(false);
      
      // Hide success feedback after 1 second (shorter)
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }, 150); // Shorter delay
  }, [isResetting]);

  const addResetFunction = useCallback((resetFn: () => void) => {
    resetFunctions.current.push(resetFn);
  }, []);

  // Keyboard shortcut for reset (R key)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r' && !isResetting) {
        event.preventDefault();
        resetCards();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [resetCards, isResetting]);

  const items = [
    {
      title: "Autostock AI",
      image: "/images/projects/Autostock AI.png",
      description: "AI-powered stock insights and predictive analytics platform - Real-time market analysis and automated trading signals",
      className: "absolute top-20 left-[15%] rotate-[-5deg]",
      year: "2025",
      id: "000",
      url: "https://stockai-insight-pilot.vercel.app/"
    },
    {
      title: "ES Rentals, Dubai",
      image: "/images/projects/Autoluxe DXB.png",
      description: "Launched luxury car rental platform in 6 weeks - Integrated payment and booking system",
      className: "absolute top-60 left-[20%] rotate-[-7deg]",
      year: "2025",
      id: "001"
    },
    {
      title: "ProQuo Technologies",
      image: "/images/projects/Proquo.png",
      description: "Created B2B networking platform - Real-time messaging and profile matching",
      className: "absolute top-10 left-[35%] rotate-[8deg]",
      year: "2024",
      id: "002"
    },
    {
      title: "Swiggy Case Study",
      image: "/images/projects/swiggy.png",
      description: "Improved delivery partner experience - Research-driven UX optimization",
      className: "absolute top-50 left-[50%] rotate-[10deg]",
      year: "2024",
      id: "003"
    },
    {
      title: "Cactus IT Solutions",
      image: "/images/projects/CactusIT.png",
      description: "Enterprise software solutions - Custom development and consulting",
      className: "absolute top-30 right-[25%] rotate-[2deg]",
      year: "2024",
      id: "004"
    },
    {
      title: "Digilocker Integration",
      image: "/images/projects/Digilocker-.jpg",
      description: "Government document management system - Secure digital storage solution",
      className: "absolute top-70 left-[40%] rotate-[-7deg]",
      year: "2023",
      id: "005"
    },
    {
      title: "Webilize Platform",
      image: "/images/projects/autostock-ai.jpg",
      description: "Web development agency platform - Client management and project tracking",
      className: "absolute top-15 left-[25%] rotate-[4deg]",
      year: "2023",
      id: "006"
    },
  ];
  
  return (
    <div className="relative">
      {/* Enhanced Refresh Button */}
      <button
        onClick={resetCards}
        disabled={isResetting}
        className="absolute top-4 right-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
        title={isResetting ? "Resetting cards..." : "Reset cards to original position (or press R)"}
        aria-label="Reset cards to original position"
      >
        {showSuccess ? (
          <Check className="w-5 h-5 text-green-400 transition-all duration-200" />
        ) : (
          <RefreshCw 
            className={`w-5 h-5 text-white transition-all duration-300 ${
              isResetting 
                ? 'animate-spin' 
                : 'group-hover:rotate-90' // Smaller rotation
            }`} 
          />
        )}
      </button>
      
      <DraggableCardContainer className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-lg md:text-2xl font-black text-neutral-400 dark:text-neutral-800">
          Real projects. Real results. Real clients who keep coming back.
        </p>
        {items.map((item) => (
          <DraggableCardBody 
            key={`${item.id}-${resetTrigger}`} 
            className={`${item.className} ${item.url ? 'cursor-pointer' : ''}`}
            onReset={addResetFunction}
            onClick={() => {
              if (item.url) {
                window.open(item.url, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-60 w-60 md:h-80 md:w-80 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-highlight-red/90 text-white px-3 py-1 rounded text-sm font-medium">
                /{item.year}/{item.id}/
              </div>
              {item.url && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                  ↗
                </div>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-center text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
              <p className="text-center text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
} 