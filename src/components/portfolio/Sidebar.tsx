import React from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onSectionChange?.(sectionId);
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Home', path: '/Home' },
    { id: 'work', label: 'Builds', path: '/Builds' },
    { id: 'about', label: 'About', path: '/About' },
    { id: 'featured-projects', label: 'Case Studies', path: '/Case Studies', tag: '/002/' },
    { id: 'contact', label: 'Connect', path: '/Connect' },
  ];

  return (
    <motion.div
      initial={{ x: -256 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-screen flex flex-col bg-white overflow-hidden"
    >


      {/* Top CTA Banner - Enhanced */}
      <div className="sticky top-0 bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-3 hover:scale-[1.02] transition-all duration-300 cursor-pointer z-10 shadow-lg group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-red-400/50 transition-all duration-300">
              <img 
                src="/Copy of nishant dp.JPG" 
                alt="Nishant Sura"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold group-hover:text-red-400 transition-colors duration-300">Book a Call</span>
              <span className="text-highlight-red mx-1 animate-pulse">/</span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">with me</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 px-6">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-2 pt-6"
        >
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              onClick={() => scrollToSection(item.id)}
              className={`
                block w-full text-left text-body font-bold transition-all duration-300 flex items-center justify-between py-3 px-4 rounded-xl group relative overflow-hidden
                ${activeSection === item.id
                  ? 'text-highlight-red bg-gradient-to-r from-red-50 to-orange-50 shadow-sm border border-red-100'
                  : 'text-black hover:text-highlight-red hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                }
              `}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="flex items-center relative z-10">
                <span className="group-hover:translate-x-1 transition-transform duration-300">{item.path}</span>
              </span>
              {item.tag && (
                <span className="text-highlight-red text-xs font-bold bg-red-100 px-2 py-1 rounded-full relative z-10 shadow-sm group-hover:shadow-md transition-shadow duration-300">{item.tag}</span>
              )}
            </motion.button>
          ))}
        </motion.nav>

        {/* Profile Section - Moved here */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-6 pb-4 border-b border-gray-100"
        >
          <div className="flex items-center space-x-3">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <img 
                  src="/Copy of nishant dp.JPG" 
                  alt="Nishant Sura"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* Online Status Indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Name Only */}
            <div>
              <h3 className="text-base font-bold text-black tracking-tight">Nishant Sura</h3>
            </div>
          </div>
          
          {/* Social Media Icons - Under Profile Card */}
          <div className="flex space-x-3 mt-4">
            {/* X (Twitter) */}
            <a
              href="https://x.com/wooobac"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-highlight-red hover:bg-red-50 transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Pinterest */}
            <a
              href="https://in.pinterest.com/nishan1sura/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-highlight-red hover:bg-red-50 transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/brahmasura/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-highlight-red hover:bg-red-50 transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Fixed Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-6 py-4 border-t border-gray-100"
      >
        {/* Contact Information */}
        <div className="mb-4">
          <div className="space-y-1">
            <p className="text-xs text-gray-600 font-medium">+91 9121883163</p>
            <p className="text-xs text-gray-600">nishantsura95@gmail.com</p>
          </div>
        </div>



        {/* Decorative Element - Refined dots */}
        <div className="flex justify-end mb-4">
          <div className="grid grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center pt-3 border-t border-gray-100">
          <p>© 2025 Nishant Sura. All rights reserved.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar; 