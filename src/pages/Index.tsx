import React, { useState, useEffect } from "react";
import Sidebar from "@/components/portfolio/Sidebar";
import MainContent from "@/components/portfolio/MainContent";
import { motion } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'contact'];
      const scrollContainer = document.querySelector('.scroll-snap-container');
      
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight / 2;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        // Fallback to window scroll
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    const scrollContainer = document.querySelector('.scroll-snap-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Mobile menu toggle
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Find the scroll container
      const scrollContainer = document.querySelector('.scroll-snap-container');
      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const scrollTop = scrollContainer.scrollTop;
        const targetScrollTop = scrollTop + sectionRect.top - containerRect.top;
        
        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      } else {
        // Fallback to regular scrollIntoView
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-bg text-text-primary">
      {/* Left Sidebar - Fixed position */}
      <div className="hidden lg:block w-[256px] flex-shrink-0 bg-white fixed top-0 left-0 h-screen z-40">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Main Content - Scrollable with left margin for sidebar */}
      <div className="flex-1 bg-black lg:ml-[256px] overflow-x-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/20 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">(t)</span>
              <span className="text-sm opacity-60">®</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg"
            >
              <nav className="space-y-4">
                {[
                  { id: 'hero', label: '/Home' },
                  { id: 'about', label: '/About' },
                  { id: 'work', label: '/Case Studies' },
                  { id: 'blog', label: '/Blog' },
                  { id: 'contact', label: '/Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      block w-full text-left text-body font-medium transition-all duration-200
                      ${activeSection === item.id 
                        ? 'text-highlight-red' 
                        : 'text-white hover:text-highlight-red'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-2 text-caption">
                  <p className="text-white font-medium">+91 9121883163</p>
                  <p className="text-white/60">nishantsura95@gmail.com</p>
                </div>
                
                {/* Mobile CTA */}
                <motion.div
                  className="bg-highlight-red text-white rounded-lg p-3 mt-4 cursor-pointer"
                  onClick={() => scrollToSection('contact')}
                >
                  <p className="text-sm font-semibold">Book a 30-Min Call</p>
                  <p className="text-xs opacity-90">with me</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Main Content Area with Scroll Snap */}
        <div className="pt-20 lg:pt-0 w-full scroll-snap-container">
          <MainContent />
        </div>

        {/* Floating Action Button - Mobile Only */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
          onClick={() => scrollToSection('contact')}
          className="lg:hidden fixed bottom-6 right-6 z-40 bg-highlight-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Index;
