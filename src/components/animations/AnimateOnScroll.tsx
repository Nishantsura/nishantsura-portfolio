import React, { ReactNode } from "react";
import { motion, Variant, Variants } from "framer-motion";

export interface AnimateProps {
  children: ReactNode;
  animation?: "fadeIn" | "fadeUp" | "fadeRight" | "fadeLeft" | "scale" | "stagger";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  threshold?: number;
  ease?: string;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  stagger: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

export const StaggerItem: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimateOnScroll: React.FC<AnimateProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration,
  className = "",
  once = true,
  margin = "-100px",
  threshold = 0.1,
  ease = "easeOut"
}) => {
  const selectedAnimation = animations[animation];

  // Apply custom duration or delay if provided
  if (duration || delay) {
    const customVariants = JSON.parse(JSON.stringify(selectedAnimation));
    
    if (duration) {
      customVariants.visible.transition.duration = duration;
    }
    
    if (delay) {
      customVariants.visible.transition.delay = delay;
    }
    
    if (ease) {
      customVariants.visible.transition.ease = ease;
    }

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin, amount: threshold }}
        variants={customVariants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin, amount: threshold }}
      variants={selectedAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
