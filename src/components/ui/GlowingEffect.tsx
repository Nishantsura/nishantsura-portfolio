import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface GlowingEffectProps {
  children: React.ReactNode;
  glowColor?: string;
  intensity?: number;
  duration?: number;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  children,
  glowColor = "#fff",
  intensity = 1,
  duration = 2,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const scale = useTransform(
    isHovered ? 1 : 0,
    [0, 1],
    [1, 1.05]
  );

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".glowing-effect");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsHovered(isInView);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        filter: `drop-shadow(0 0 ${intensity}px ${glowColor})`,
        scale,
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
