"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserCircle } from "lucide-react";
import AnimateOnScroll, { StaggerItem } from "@/components/animations/AnimateOnScroll";

function HeroGeometric() {
  // Get current time in the format HH:MM:SS AM/PM
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  // No longer using real-time clock
  const [time, setTime] = useState(getCurrentTime());
  
  // Scroll functions for navigation
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for when sections don't have IDs - find section by index
      const container = document.querySelector('.snap-container');
      const sections = document.querySelectorAll('.snap-section');
      if (!container || !sections.length) return;
      
      let sectionIndex = 0;
      
      switch(sectionId) {
        case 'about':
          sectionIndex = 2; // AboutMe is the third section (index 2)
          break;
        case 'projects':
          sectionIndex = 1; // WorkExperience is the second section (index 1)
          break;
        case 'contact':
          sectionIndex = 4; // Contact is the fifth section (index 4)
          break;
        default:
          sectionIndex = 0;
      }
      
      // Ensure the index is valid
      if (sectionIndex >= 0 && sectionIndex < sections.length) {
        const sectionHeight = window.innerHeight;
        container.scrollTo({
          top: sectionIndex * sectionHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const logoRevealVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-[#f7f7f9]">
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 md:px-8 h-full flex flex-col"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Top Navigation */}
        <motion.div 
          className="flex justify-between items-center w-full py-4 px-2 mb-[30px] sm:mb-[45px] md:mb-[60px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Theme Toggle */}
          <div className="flex items-center">
            <motion.button 
              className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-xs">☀️</span>
            </motion.button>
          </div>
          
          {/* Navigation Pills */}
          <motion.div 
            className="flex items-center gap-2"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="px-4 py-1.5 text-sm font-medium text-gray-800 hover:text-black transition-colors rounded-full border border-gray-200 bg-white"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
            >
              About
            </motion.button>
            <motion.button 
              className="px-4 py-1.5 text-sm font-medium text-gray-800 hover:text-black transition-colors rounded-full border border-gray-200 bg-white"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </motion.button>
            <motion.button 
              className="px-4 py-1.5 text-sm font-medium text-gray-800 hover:text-black transition-colors rounded-full border border-gray-200 bg-white"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Reach Out
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Main Heading with Photo - Exactly like the screenshot */}
        <motion.div 
          className="w-full mt-2 mb-3 border-b border-gray-200 pb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[80px] md:text-[140px] font-black tracking-tight leading-none flex items-center justify-center text-black">
            <motion.span 
              className="inline-block text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight" 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              SURA
            </motion.span>
            <motion.span 
              className="inline-block overflow-hidden rounded-xl mx-2" 
              style={{height: 'clamp(100px, 15vw, 140px)', width: 'clamp(140px, 25vw, 220px)'}}
              variants={logoRevealVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img 
                src="/b17cf252c4f0c1775e75de5b49c64923.jpg" 
                alt="Nishant Sura" 
                className="w-full h-full object-cover"
              />
            </motion.span>
            <motion.span 
              className="inline-block text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              DSGN
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Role and Location */}
        <motion.div 
          className="flex justify-between items-center w-full py-2"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItemVariants}>
            <h2 className="text-base font-normal text-gray-500">
              Digital Product Designer
            </h2>
          </motion.div>
          <motion.div className="text-right" variants={staggerItemVariants}>
            <div className="text-sm font-normal text-gray-500 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Bangalore, India
            </div>
          </motion.div>
        </motion.div>

        {/* Description at bottom */}
        <motion.div 
          className="mt-auto pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <motion.button 
                className="text-base sm:text-lg md:text-xl font-bold text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.img 
                  src="/Copy of nishant dp.JPG" 
                  alt="Nishant Sura" 
                  className="h-10 sm:h-11 w-auto rounded-full object-cover mr-2"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                Hey, I'm Nishant Sura
              </motion.button>
            </div>
            <motion.div 
              className="text-right text-xs text-gray-400 mt-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.1, color: "#000" }}
            >
              The Good Stuff <span className="inline-block">↓</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              I'm a digital product designer creating visually stunning experiences. Get to know more <motion.a 
                onClick={() => scrollToSection('about')}
                className="text-black hover:text-gray-600 underline underline-offset-4 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05, color: "#0066FF" }}
                whileFocus={{ scale: 1.05, color: "#0066FF" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >about me</motion.a>. Let's turn your ideas into impactful solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export { HeroGeometric };