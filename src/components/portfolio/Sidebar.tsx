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
    { id: 'about', label: 'About', path: '/About' },
    { id: 'work', label: 'Case Studies', path: '/Case Studies', tag: '/002/' },
    { id: 'blog', label: 'Featured work', path: '/Featured work' },
    { id: 'contact', label: 'Contact', path: '/Contact' },
  ];

  return (
    <motion.div
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* Vertical Branding - Left Edge */}
      <div className="absolute left-8 bottom-20 transform -rotate-90 origin-left">
        <div className="flex items-center">
          <span className="text-sm font-bold tracking-tight text-black">
            (n)
          </span>
          <span className="text-xs ml-1 opacity-60">®</span>
          <span className="text-xs ml-2 font-medium tracking-wider opacity-60 text-black">
            nishant sura
          </span>
        </div>
      </div>

      {/* Top CTA Banner - Full width, single line, sticky top */}
      <div className="sticky top-0 bg-black text-white p-4 hover:scale-105 transition-transform cursor-pointer z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/Copy of nishant dp.JPG" 
              alt="Nishant Sura"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex items-center">
              <span className="text-sm font-bold">Book a 30-Min Call</span>
              <span className="text-highlight-red mx-1">/</span>
              <span className="text-sm text-gray-300">with me</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1" style={{ marginLeft: '80px', marginRight: '16px' }}>

        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-8 pt-8"
        >
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              onClick={() => scrollToSection(item.id)}
              className={`
                block w-full text-left text-body font-bold transition-all duration-200 flex items-center justify-between
                ${activeSection === item.id
                  ? 'text-highlight-red'
                  : 'text-black hover:text-highlight-red'
                }
              `}
            >
              <span>{item.path}</span>
              {item.tag && (
                <span className="text-highlight-red text-xs font-bold relative -top-1">{item.tag}</span>
              )}
            </motion.button>
          ))}
        </motion.nav>

      </div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="space-y-6"
        style={{ marginLeft: '80px', marginRight: '16px', paddingBottom: '16px' }}
      >
        {/* Barcode Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <svg className="w-24 h-8" viewBox="0 0 100 30" fill="currentColor">
            <rect x="0" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="3" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="5" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="9" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="11" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="14" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="16" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="19" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="21" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="25" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="27" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="30" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="32" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="35" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="37" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="41" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="43" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="46" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="48" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="51" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="53" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="57" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="59" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="62" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="64" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="67" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="69" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="73" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="75" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="78" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="80" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="83" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="85" y="0" width="3" height="30" fill="black" opacity="0.6"/>
            <rect x="89" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="91" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="94" y="0" width="1" height="30" fill="black" opacity="0.6"/>
            <rect x="96" y="0" width="2" height="30" fill="black" opacity="0.6"/>
            <rect x="99" y="0" width="1" height="30" fill="black" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* Contact Information */}
        <div className="space-y-3 text-caption">
          <p className="text-black font-medium">
            +91 9121883163
          </p>
          <p className="text-text-secondary">
            nishantsura95@gmail.com
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-text-secondary space-y-1 font-sans">
          <p>© 2025 nishantsura.</p>
          <p>All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {/* X (Twitter) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-highlight-red transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          {/* Pinterest */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-highlight-red transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
          
          {/* Music */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-highlight-red transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </a>
        </div>



        {/* Dot Grid */}
        <div className="absolute bottom-6 left-6">
          <div className="grid grid-cols-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-black" />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar; 