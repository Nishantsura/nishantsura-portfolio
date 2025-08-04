import React from "react";
import { motion } from "framer-motion";
import AnimateOnScroll, { StaggerItem } from "@/components/animations/AnimateOnScroll";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const AboutMe = () => {
  return (
    <div className="min-h-full flex flex-col justify-start pt-20 pb-16 sm:py-20 md:py-32 bg-[#28282B] text-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 w-full">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-12 md:mb-16 w-full">
          {/* Left Column - About Label */}
          <AnimateOnScroll
            className="mb-6 md:mb-0"
            animation="fadeRight"
            once={true}
            margin="-100px"
          >
            <div className="flex items-center gap-2 md:sticky md:top-32 mb-4 md:mb-0">
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                👨‍💻
              </motion.span>
              <span className="text-gray-400 text-sm">ABOUT</span>
            </div>
          </AnimateOnScroll>
          
          {/* Right Column - About Content */}
          <AnimateOnScroll
            className="mt-2 md:mt-0"
            animation="fadeUp"
            once={true}
            margin="-100px"
          >
            <div className="text-gray-300">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-base break-words pl-8 md:pl-12 lg:pl-16"
              >
                With a background in <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >architecture</motion.span> and a deep passion for <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >problem-solving</motion.span>, I transitioned into <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >product design</motion.span> to craft experiences that are not only functional but also intuitive, elegant, and deeply human. Over the past few years, I've led design initiatives across both <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >startups and enterprises</motion.span>—shaping impactful platforms in <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >automotive tech</motion.span>, <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >fintech</motion.span>, and <motion.span 
                  className="font-semibold"
                  whileInView={{ color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >enterprise software</motion.span>.
              </motion.p>
              
              <motion.p 
                className="font-medium text-white mt-4 sm:mt-6 pl-8 md:pl-12 lg:pl-16 break-words"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                Based in Bengaluru. Designing for the world.
              </motion.p>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 w-full mt-6 md:mt-0">
          {/* Left Column - Achievements Label */}
          <AnimateOnScroll
            className="mb-6 md:mb-0"
            animation="fadeRight"
            once={true}
            margin="-100px"
          >
            <div className="flex items-center gap-2 md:sticky md:top-32 mb-4 md:mb-0">
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                whileHover={{ scale: 1.3, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
              >
                🏆
              </motion.span>
              <span className="text-gray-400 text-sm">ACHIEVEMENTS</span>
            </div>
          </AnimateOnScroll>
          
          {/* Right Column - Achievements Content */}
          <AnimateOnScroll
            className="mt-2 md:mt-0"
            animation="stagger"
            once={true}
            margin="-100px"
          >
            <ul className="space-y-5 list-none text-gray-300 break-words pl-8 md:pl-12 lg:pl-16">
              <StaggerItem className="flex items-start">
                <motion.span 
                  className="text-muted-teal mr-3 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
                  whileHover={{ color: "#4ade80" }}
                >
                  •
                </motion.span>
                <motion.p 
                  className="text-sm sm:text-base"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Improved <motion.span 
                    className="font-semibold"
                    whileHover={{ color: "#4ade80" }}
                  >investor engagement by 40%</motion.span> at Mirae Assets by redesigning fund investment flows, streamlining complex interactions into a user-friendly experience.
                </motion.p>
              </StaggerItem>
              
              <StaggerItem className="flex items-start">
                <motion.span 
                  className="text-muted-teal mr-3 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 0.5 }}
                >
                  •
                </motion.span>
                <p>
                  Reduced <span className="font-semibold">authentication-related crashes</span> at Dell Identity by optimizing enterprise security protocols and elevating the overall user experience.
                </p>
              </StaggerItem>
              
              <StaggerItem className="flex items-start">
                <motion.span 
                  className="text-muted-teal mr-3 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 1 }}
                >
                  •
                </motion.span>
                <p>
                  Led user research with <span className="font-semibold">200+ participants across 6 countries</span>, driving data-informed UX decisions that significantly boosted product adoption.
                </p>
              </StaggerItem>
              
              <StaggerItem className="flex items-start">
                <motion.span 
                  className="text-muted-teal mr-3 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 1.5 }}
                >
                  •
                </motion.span>
                <p>
                  Increased <span className="font-semibold">client retention 20×</span> by managing end-to-end UX and delivering key modules for Dell Premier, supporting enterprise clients globally.
                </p>
              </StaggerItem>
              
              <StaggerItem className="flex items-start">
                <motion.span 
                  className="text-muted-teal mr-3 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5, delay: 2 }}
                >
                  •
                </motion.span>
                <p>
                  Automated <span className="font-semibold">stock tracking</span> for AutoStock, reducing manual effort and improving operational efficiency through intelligent design workflows.
                </p>
              </StaggerItem>
            </ul>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
