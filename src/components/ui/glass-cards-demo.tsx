import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./glass-card";
import { Figma, Code, Zap, Database, Palette, Smartphone, Globe, MessageSquare, CreditCard, Truck, Play, Music, Wine, Building2, Car, Calculator, ChevronLeft, ChevronRight } from "lucide-react";

// Additional icon components
const FirestoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.01 2C3.346 2 2.01 3.346 2.01 5v14c0 1.654 1.336 3 2.99 3h13.98c1.654 0 2.99-1.346 2.99-3V5c0-1.654-1.336-3-2.99-3H5.01zM7 6h10v2H7V6zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
  </svg>
);

const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ReactNativeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.811 0-3.893.913-5.861 2.804a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704c-1.968-1.891-4.05-2.804-5.861-2.804zm0 21.382c1.811 0 3.893-.913 5.861-2.804a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704c1.968 1.891 4.05 2.804 5.861 2.804zM5.135 9.26c-1.74-1.74-3.47-2.504-5.157-2.504-1.677 0-3.403.773-5.132 2.504a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704zm13.73 5.48c1.74 1.74 3.47 2.504 5.157 2.504 1.677 0 3.403-.773 5.132-2.504a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704z"/>
  </svg>
);

const ClaudeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.411-.66.39.12.75.42.976.736.35.506.486.83.486 1.486v.073H22.034zm-3.971-1.691c-.051.32-.669.995-1.977 1.378-.201.076-.414.116-.627.116-.535 0-1.022-.234-1.319-.639-.223-.354-.278-.814-.278-1.458v-.073h1.977v.073c0 .422.105.63.105.63.105.21.315.315.525.315.21 0 .42-.105.525-.315.105-.105.105-.21.105-.63v-.073h1.977v.073c0 .644-.055 1.104-.278 1.458-.297.405-.784.639-1.319.639-.213 0-.426-.04-.627-.116-.308-.383-1.926-1.058-1.977-1.378z"/>
  </svg>
);

// Tool icon components
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.811 0-3.893.913-5.861 2.804a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704c-1.968-1.891-4.05-2.804-5.861-2.804zm0 21.382c1.811 0 3.893-.913 5.861-2.804a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704c1.968 1.891 4.05 2.804 5.861 2.804zM5.135 9.26c-1.74-1.74-3.47-2.504-5.157-2.504-1.677 0-3.403.773-5.132 2.504a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704zm13.73 5.48c1.74 1.74 3.47 2.504 5.157 2.504 1.677 0 3.403-.773 5.132-2.504a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704z"/>
  </svg>
);

const ViteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.363.75h6.75v1.5H4.125v9.75H2.625v-9.75H.125z"/>
  </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

export default function GlassCardsDemo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    console.log('Scroll left clicked');
    if (scrollContainerRef.current) {
      console.log('Current scroll position:', scrollContainerRef.current.scrollLeft);
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
      console.log('Scrolling left by 400px');
    } else {
      console.log('Scroll container ref is null');
    }
  };

  const scrollRight = () => {
    console.log('Scroll right clicked');
    if (scrollContainerRef.current) {
      console.log('Current scroll position:', scrollContainerRef.current.scrollLeft);
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
      console.log('Scrolling right by 400px');
    } else {
      console.log('Scroll container ref is null');
    }
  };

  // Debug scroll container on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      console.log('Scroll container mounted:', scrollContainerRef.current);
      console.log('Container scrollWidth:', scrollContainerRef.current.scrollWidth);
      console.log('Container clientWidth:', scrollContainerRef.current.clientWidth);
      console.log('Can scroll:', scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth);
      
      // Test scroll functionality
      setTimeout(() => {
        if (scrollContainerRef.current) {
          console.log('Testing scroll functionality...');
          scrollContainerRef.current.scrollLeft = 100;
          console.log('Scroll position after test:', scrollContainerRef.current.scrollLeft);
        }
      }, 1000);
    }
  }, []);

  // Handle scroll events
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    }
  };

  const projects = [
    {
      title: "Autostock AI",
      description: "AI-powered inventory management system for automotive dealers with intelligent design workflows.",
      image: "/images/projects/Autostock AI.png",
      year: "Webapp",
      url: "",
      tools: [
        { name: "React", icon: ReactIcon, color: "#61DAFB" },
        { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
        { name: "Tailwind", icon: TailwindIcon, color: "#06B6D4" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Claude", icon: ClaudeIcon, color: "#FF6B35" },
      ]
    },
    {
      title: "ES Rentals",
      description: "Designed and developed a luxury car rental platform in Dubai — start to finish.",
      image: "/images/projects/Autoluxe DXB.png",
      year: "Webapp",
      url: "https://www.esrentacar.ae/",
      tools: [
        { name: "Vite", icon: ViteIcon, color: "#646CFF" },
        { name: "Firestore", icon: FirestoreIcon, color: "#FF6B35" },
        { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Claude", icon: ClaudeIcon, color: "#FF6B35" },
      ]
    },
    {
      title: "Cactus IT Solutions",
      description: "Handled the full-stack dev for a clean, high-converting IT consultancy landing page.",
      image: "/images/projects/CactusIT.png",
      year: "Webapp",
      url: "https://www.cactusits.com/",
      tools: [
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Supabase", icon: SupabaseIcon, color: "#3ECF8E" },
        { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
        { name: "Vite", icon: ViteIcon, color: "#646CFF" },
      ]
    },
    {
      title: "Proquo",
      description: "Cofounded and crafted Proquo — where I lead both design and dev for client projects.",
      image: "/images/projects/Proquo.png",
      year: "Webapp",
      url: "https://giant-walkthroughs-221939.framer.app/",
      tools: [
        { name: "Framer", icon: FramerIcon, color: "#0055FF" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
      ]
    },
    {
      title: "Mixtales",
      description: "Designed the UI and built the full app to explore drink recipes in a playful way.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center",
      year: "Mobile App",
      url: "",
      tools: [
        { name: "React Native", icon: ReactNativeIcon, color: "#61DAFB" },
        { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Supabase", icon: SupabaseIcon, color: "#3ECF8E" },
        { name: "Claude", icon: ClaudeIcon, color: "#FF6B35" },
      ]
    },
    {
      title: "Bebop",
      description: "Designed and developed a music-saving tool that syncs with Spotify and YouTube.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
      year: "Mobile App",
      url: "",
      tools: [
        { name: "React Native", icon: ReactNativeIcon, color: "#61DAFB" },
        { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
        { name: "Figma", icon: Figma, color: "#F24E1E" },
        { name: "Supabase", icon: SupabaseIcon, color: "#3ECF8E" },
        { name: "Claude", icon: ClaudeIcon, color: "#FF6B35" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* Single scroll controls - positioned above cards */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className={`p-2 rounded-full transition-colors ${
                isScrolling 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
              }`}
              aria-label="Scroll left"
              disabled={isScrolling}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className={`p-2 rounded-full transition-colors ${
                isScrolling 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
              }`}
              aria-label="Scroll right"
              disabled={isScrolling}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Cards container with proper horizontal scrolling */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="cards-horizontal-scroll"
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] snap-start"
                variants={cardVariants}
              >
                <GlassCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tools={project.tools}
                  year={project.year}
                  url={project.url}
                  className="w-full h-auto transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlay to indicate more content */}
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
} 