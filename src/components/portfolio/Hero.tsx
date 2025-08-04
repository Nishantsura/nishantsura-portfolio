import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Scroll functions for navigation
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-full snap-section flex items-center justify-center py-16 px-6 sm:py-20 sm:px-10 md:py-24 md:px-16 bg-[#F5F5F5] text-[#28282B] overflow-hidden" id="hero">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full">
        {/* Top Navigation */}
        <div className="flex justify-end items-center w-full py-4 mb-8 sm:mb-10">
          <nav className="flex items-center gap-6 sm:gap-10">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')} 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Reach Out
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center">
          {/* Logo with Photo */}
          <div className="mb-6 sm:mb-10">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight flex flex-wrap sm:flex-nowrap items-center justify-center">
              <span>SURA</span>
              <div className="mx-2 overflow-hidden rounded-xl" style={{height: 'clamp(60px, 15vw, 120px)', width: 'clamp(80px, 20vw, 180px)'}}>
                <img 
                  src="/b17cf252c4f0c1775e75de5b49c64923.jpg" 
                  alt="Nishant Sura" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span>BUILDS</span>
            </h1>
          </div>
          
          {/* Info line */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3 sm:gap-0 mb-14 sm:mb-32 md:mb-40">
            <div className="flex items-center">
              <span className="text-xl mr-2">👨‍💻</span>
              <p className="text-sm sm:text-base text-gray-600">Product Manager</p>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2">📍</span>
              <span className="text-sm sm:text-base text-gray-600">Bangalore, India</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-2">📧</span>
              <a href="mailto:nishantsura95@gmail.com" className="text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors">
                nishantsura95@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto">
            {/* Intro */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6 sm:mb-4">
              <div className="flex items-center">
                <img 
                  src="/Copy of nishant dp.JPG" 
                  alt="Nishant Sura" 
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover mr-2 sm:mr-3"
                />
                <span className="text-base sm:text-lg font-medium">Hey, I'm Nishant Sura</span>
              </div>
              <div className="text-xs text-gray-500 sm:text-right">
                The Good Stuff ↓
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <div className="max-w-2xl mb-2 sm:mb-0">
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  I'm a product manager who ships fast, solves real problems, and builds with teams that think like startups. Get to know more <button 
                    onClick={() => scrollToSection('about')}
                    className="text-black hover:text-gray-600 underline underline-offset-4 transition-colors cursor-pointer"
                  >about me</button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
