
import { useEffect } from "react";

export const useTimelineAnimation = (timelineRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const createParticles = () => {
      if (!timelineRef.current) return;
      
      const connector = timelineRef.current.querySelector('.timeline-connector');
      if (!connector) return;
      
      // Clear existing particles
      const existingParticles = connector.querySelectorAll('.timeline-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.classList.add('timeline-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        connector.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles periodically
    const interval = setInterval(createParticles, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [timelineRef]);
};

