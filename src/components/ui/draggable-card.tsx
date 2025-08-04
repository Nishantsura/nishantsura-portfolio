"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
  onReset,
}: {
  className?: string;
  children?: React.ReactNode;
  onReset?: (resetFn: () => void) => void;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  // Motion values to track current position
  const currentX = useMotionValue(0);
  const currentY = useMotionValue(0);
  
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // Store original position for reset
  const originalPosition = useRef({ x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 });

  // Reset position with smooth animation from current position
  useEffect(() => {
    if (onReset) {
      const resetPosition = () => {
        // Stop any ongoing animations
        controls.stop();
        
        // Get current position from motion values
        const currentPosX = currentX.get();
        const currentPosY = currentY.get();
        
        // Calculate distance for very subtle timing
        const distance = Math.sqrt(currentPosX * currentPosX + currentPosY * currentPosY);
        const baseDuration = 0.6; // Even shorter duration
        const adjustedDuration = Math.min(baseDuration, Math.max(0.3, distance / 600)); // Very subtle timing
        
        // Reset motion values
        mouseX.set(0);
        mouseY.set(0);
        
        // Animate from current position back to original position with very subtle easing
        controls.start({
          x: [currentPosX, originalPosition.current.x],
          y: [currentPosY, originalPosition.current.y],
          rotateX: [0, originalPosition.current.rotateX],
          rotateY: [0, originalPosition.current.rotateY],
          scale: [1, originalPosition.current.scale],
          transition: {
            type: "tween", // Use tween for more predictable timing
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for natural feel
            duration: adjustedDuration,
          },
        }).then(() => {
          // Minimal bounce effect
          controls.start({
            scale: [1, 1.01, 1], // Very minimal bounce
            transition: {
              duration: 0.15, // Very short bounce
              ease: "easeOut",
            },
          });
        });
      };
      
      // Pass the reset function to parent
      onReset(resetPosition);
    }
  }, [onReset, controls, mouseX, mouseY, currentX, currentY]);

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig,
  );

  useEffect(() => {
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY,
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      onDrag={(event, info) => {
        // Update current position during drag
        currentX.set(info.point.x);
        currentY.set(info.point.y);
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-72 w-60 md:min-h-96 md:w-80 overflow-hidden rounded-md bg-neutral-100 p-4 md:p-6 shadow-2xl transform-3d dark:bg-neutral-900 transition-shadow duration-300",
        className,
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
}; 