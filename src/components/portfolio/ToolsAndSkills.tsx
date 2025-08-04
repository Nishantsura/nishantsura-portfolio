import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimateOnScroll, { StaggerItem } from "@/components/animations/AnimateOnScroll";
import { AnimatedCardDemo } from "@/components/ui/feature-block-animated-card-demo";

interface SkillProps {
  name: string;
  rating: number;
}



const SkillRating: React.FC<SkillProps> = ({ name, rating }) => {
  return (
    <motion.div 
      className="flex justify-between items-center mb-6"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.span 
        className="text-white font-medium"
        whileHover={{ color: "#4fd1c5" }}
      >
        {name}
      </motion.span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 400 }}>
            <Star 
              size={18} 
              className={`${i < rating ? "fill-muted-teal text-muted-teal" : "text-gray-600"} ml-1.5`} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ToolsAndSkills = () => {


  const skills = [
    { name: "Product Management & Strategy", rating: 5 },
    { name: "UX/UI & Prototyping", rating: 5 },
    { name: "Product Development", rating: 4 }
  ];

  return (
    <div className="min-h-full snap-section flex flex-col justify-center py-16 sm:py-20 md:py-24 bg-[#28282B] text-white section-wrapper" id="tools-skills">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left Column - Label */}
          <AnimateOnScroll
            className="space-y-6"
            animation="fadeRight"
            once={true}
            margin="-100px"
          >
            <div className="flex items-center gap-2">
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                💻
              </motion.span>
              <span className="text-gray-400 text-sm">TOOLS</span>
            </div>
          </AnimateOnScroll>
          
          {/* Right Column - Animated Card */}
          <AnimateOnScroll
            className="space-y-6"
            animation="fadeUp"
            once={true}
            margin="-100px"
          >
            <AnimatedCardDemo />
          </AnimateOnScroll>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Label */}
          <AnimateOnScroll
            className="space-y-6"
            animation="fadeRight"
            once={true}
            margin="-100px"
          >
            <div className="flex items-center gap-2">
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                💪
              </motion.span>
              <span className="text-gray-400 text-sm">SKILLS</span>
            </div>
          </AnimateOnScroll>
          
          {/* Right Column - Content */}
          <AnimateOnScroll
            className="space-y-6"
            animation="fadeUp"
            once={true}
            margin="-100px"
            delay={0.3}
          >
            <motion.div 
              className="space-y-6 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="max-w-md">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <SkillRating name={skill.name} rating={skill.rating} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndSkills;
