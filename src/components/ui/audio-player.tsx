import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  audioSrc: string;
  className?: string;
}

export function AudioPlayer({ audioSrc, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Simplified state
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Simplified - no time tracking

  // Play/Pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Removed mute toggle and time formatting

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <motion.button
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Pause size={16} className="text-[#28282B]" />
        ) : (
          <Play size={16} className="text-[#28282B] ml-0.5" />
        )}
      </motion.button>
      
      <span className="text-sm text-gray-500 ml-1">Play while browsing my website :)</span>
    </div>
  );
}
