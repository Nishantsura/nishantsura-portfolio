import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import { ExternalLink, Construction } from 'lucide-react';
import type { Project } from "@/types/experience";

interface ProjectTiltCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectTiltCard({ project, onClick }: ProjectTiltCardProps) {
  const handleClick = () => {
    if (project.isUnderConstruction) {
      // Handle under construction state
      return;
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="w-full max-w-[320px] sm:w-[320px] md:w-[360px]">
      <Tilt
        rotationFactor={5}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative cursor-pointer'
        onClick={handleClick}
      >
        <Spotlight
          className='z-10 from-red-500/30 via-orange-400/20 to-yellow-300/10 blur-xl'
          size={200}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        
        <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden border-b-2 border-black dark:border-white">
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`;
              }}
            />
            
            {/* Brutalist overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Status indicators */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              {project.isUnderConstruction ? (
                <div className="flex items-center gap-1 bg-black dark:bg-white text-white dark:text-black text-xs py-1 px-2 border border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <Construction size={12} />
                  <span className="font-mono font-bold">COMING SOON</span>
                </div>
              ) : project.url ? (
                <div className="bg-white dark:bg-black text-black dark:text-white p-1.5 border border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} />
                </div>
              ) : null}
            </div>
            
            {/* Project ID */}
            <div className="absolute top-3 left-3">
              <span className="bg-white dark:bg-black text-black dark:text-white text-xs font-mono px-2 py-1 border border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] font-bold">
                {project.id}.
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 bg-neutral-100 dark:bg-neutral-900">
            <div className="mb-3">
              <span className="text-xs text-black dark:text-white font-mono font-bold uppercase tracking-wider border-b-2 border-black dark:border-white pb-1">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-lg font-black text-black dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors uppercase tracking-wide">
              {project.name}
            </h3>
            
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 overflow-hidden font-mono leading-relaxed" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}>
              {project.description}
            </p>
            
            {/* Skills/Tools */}
            {project.skills && (
              <div className="flex flex-wrap gap-2">
                {project.skills.split(', ').slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white dark:bg-black text-black dark:text-white px-3 py-1 border border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] font-mono font-bold"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.split(', ').length > 3 && (
                  <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 font-mono">
                    +{project.skills.split(', ').length - 3} MORE
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  );
}
