import React, { useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/experience";
import { ChevronLeft, ChevronRight, X, Car, Users, ShoppingBag, Database, Shield, Code } from "lucide-react";
import AnimateOnScroll, { StaggerItem } from "@/components/animations/AnimateOnScroll";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { ProjectTiltCard } from "@/components/ui/project-tilt-card";

const WorkExperience = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [viewMode, setViewMode] = useState<"cards" | "orbital">("cards");

  // Projects array for cards view
  const projects: Project[] = [
    {
      id: "01",
      name: "ES Rentals, Dubai",
      category: "Project",
      type: "Work",
      image: "/images/projects/Autoluxe DXB.png",
      description: "Premier luxury and exotic car rental platform with premium concierge services",
      skills: "UI/UX, React, Responsive Design, Payment Integration",
      url: "https://www.esrentacar.ae/"
    },
    {
      id: "02",
      name: "ProQuo",
      category: "Project",
      type: "Work",
      image: "/images/projects/Proquo.png",
      description: "Professional business networking platform for tech professionals",
      skills: "User Research, Wireframing, Prototyping",
      url: "https://www.proquotechnologies.com/"
    },
    {
      id: "03",
      name: "Swiggy Delivery Partner Experience",
      category: "Case Study",
      type: "Case Study",
      image: "/images/projects/swiggy.png",
      description: "Improving the experience for food delivery partners",
      skills: "UX Research, Service Design, Usability Testing",
      url: "https://tremendous-banjo-b0b.notion.site/Improve-The-Swiggy-Experience-For-The-Delivery-Partners-149d914b24114f90b562b5a90e050301C"
    },
    {
      id: "04",
      name: "Cactus IT Solutions",
      category: "Project",
      type: "Work",
      image: "/images/projects/CactusIT.png",
      description: "Enterprise IT solutions with modern interface design",
      skills: "Enterprise UX, System Design, Information Architecture",
      url: "https://cactusits.com/"
    },
    {
      id: "05",
      name: "Digilocker",
      category: "Case Study",
      type: "Case Study",
      image: "/images/projects/Digilocker-.jpg",
      description: "Redesigning the government digital document storage system",
      skills: "Government UX, Security Interface Design, Accessibility",
      url: "https://tremendous-banjo-b0b.notion.site/Redesigning-DigiLocker-A-Visual-Design-case-study-d8dbfb28243a4889ba64ef2a54a3d497"
    },
    {
      id: "06",
      name: "Autostock AI",
      category: "Project",
      type: "Work",
      image: "/images/projects/Autostock AI.png",
      description: "AI-powered inventory management system for automotive dealers",
      skills: "UX Research, Data Visualization, AI Interface",
      isUnderConstruction: true
    }
  ];

  // Timeline data for orbital view
  const timelineData = [
    {
      id: 1,
      title: "ES Rentals",
      date: "2024",
      content: "Premier luxury and exotic car rental platform with premium concierge services",
      category: "Project",
      icon: Car,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 95,
      url: "https://www.esrentacar.ae/",
      skills: "UI/UX, React, Responsive Design, Payment Integration"
    },
    {
      id: 2,
      title: "ProQuo",
      date: "2024",
      content: "Professional business networking platform for tech professionals",
      category: "Project",
      icon: Users,
      relatedIds: [1, 4],
      status: "completed" as const,
      energy: 90,
      url: "https://www.proquotechnologies.com/",
      skills: "User Research, Wireframing, Prototyping"
    },
    {
      id: 3,
      title: "Swiggy Delivery",
      date: "2024",
      content: "Improving the experience for food delivery partners",
      category: "Case Study",
      icon: ShoppingBag,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 85,
      url: "https://tremendous-banjo-b0b.notion.site/Improve-The-Swiggy-Experience-For-The-Delivery-Partners-149d914b24114f90b562b5a90e050301C",
      skills: "UX Research, Service Design, Usability Testing"
    },
    {
      id: 4,
      title: "Cactus IT",
      date: "2024",
      content: "Enterprise IT solutions with modern interface design",
      category: "Project",
      icon: Database,
      relatedIds: [2, 6],
      status: "completed" as const,
      energy: 80,
      url: "https://cactusits.com/",
      skills: "Enterprise UX, System Design, Information Architecture"
    },
    {
      id: 5,
      title: "Digilocker",
      date: "2024",
      content: "Redesigning the government digital document storage system",
      category: "Case Study",
      icon: Shield,
      relatedIds: [3, 6],
      status: "completed" as const,
      energy: 75,
      url: "https://tremendous-banjo-b0b.notion.site/Redesigning-DigiLocker-A-Visual-Design-case-study-d8dbfb28243a4889ba64ef2a54a3d497",
      skills: "Government UX, Security Interface Design, Accessibility"
    },
    {
      id: 6,
      title: "Autostock AI",
      date: "2024",
      content: "AI-powered inventory management system for automotive dealers",
      category: "Project",
      icon: Code,
      relatedIds: [4, 5],
      status: "in-progress" as const,
      energy: 60,
      skills: "UX Research, Data Visualization, AI Interface"
    }
  ];



  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-full snap-section bg-[#F5F5F5] text-[#28282B] py-10 pb-16 sm:py-16 md:py-20 section-wrapper" id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 h-full w-full section-inner section-content">
        {/* Header with Projects title and view toggle */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
          <AnimateOnScroll
            className=""
            animation="fadeRight"
            once={true}
            margin="-100px"
          >
            <h2 className="text-sm font-medium text-gray-500 mb-8">Projects</h2>
            
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed md:w-4/5">
                Design is intriguing. To me, design at its core, is a method of problem solving. Solutions can sometimes be approached in a variety of ways, and design is a medium that helps you navigate and validate those possibilities, to reach the solution best suited to the problem/brief.
              </p>
            </div>
          </AnimateOnScroll>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "cards" 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setViewMode("cards")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cards
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "orbital" 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setViewMode("orbital")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Orbital
            </motion.button>
          </div>
        </div>

        {/* Conditional Rendering based on view mode */}
        {viewMode === "cards" ? (
          <AnimateOnScroll
            className="relative overflow-hidden w-full"
            animation="fadeLeft"
            once={true}
            margin="-100px"
          >
            {/* Navigation sliders right above the cards */}
            <div className="flex items-center justify-end mb-4 pr-4">
              <motion.button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors mr-2 shadow-sm"
                onClick={scrollLeft}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={16} className="text-black" />
              </motion.button>
              <motion.button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-sm"
                onClick={scrollRight}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={16} className="text-black" />
              </motion.button>
            </div>
            <div 
              className="grid grid-cols-1 gap-6 sm:flex sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:scrollbar-hide pb-6"
              ref={scrollContainerRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 sm:mr-6 sm:last:mr-16 sm:snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <ProjectTiltCard 
                  project={project}
                  onClick={() => {
                    if (project.isUnderConstruction) {
                      setShowPopup(true);
                    }
                  }}
                />
              </motion.div>
            ))}
            </div>
          </AnimateOnScroll>
        ) : (
          <div className="h-[600px] bg-black rounded-lg overflow-hidden">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        )}
      </div>

      {/* Construction Popup */}
      {showPopup && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-lg p-8 max-w-md mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Under Construction</h3>
              <motion.button 
                onClick={() => setShowPopup(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            <p className="text-gray-600 mb-4">
              This project is still under construction. Please take a look at other work meanwhile.
            </p>
            <motion.button
              onClick={() => setShowPopup(false)}
              className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.03, backgroundColor: "#333", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkExperience;



