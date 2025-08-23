import React, { useId } from 'react';

interface GlowButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children = 'Register', 
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  size = 'md'
}) => {
  const id = useId().replace(/:/g, '');
  const filters = {
    unopaq: `unopaq-${id}`,
    unopaq2: `unopaq2-${id}`,
    unopaq3: `unopaq3-${id}`,
  };

  // Size configurations
  const sizeConfig = {
    sm: {
      width: 'min-w-[120px]',
      height: 'h-[48px]',
      padding: 'px-4 py-2',
      text: 'text-xs'
    },
    md: {
      width: 'min-w-[140px]',
      height: 'h-[60px]',
      padding: 'px-6 py-3',
      text: 'text-sm'
    },
    lg: {
      width: 'min-w-[160px]',
      height: 'h-[72px]',
      padding: 'px-8 py-4',
      text: 'text-base'
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`relative group ${className}`}>
      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq2}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq3}>
          <feColorMatrix values="1 0 0 0.2 0 0 1 0 0.2 0 0 0 1 0.2 0 0 0 0 2 0" />
        </filter>
      </svg>

      {/* Hidden Button */}
      <button 
        className="absolute w-full h-full z-20 outline-none border-none rounded-[17px] cursor-pointer opacity-0"
        onClick={onClick}
        disabled={disabled}
        type={type}
      />

      {/* Backdrop */}
      <div className="absolute dark:inset-[-9900%] dark:bg-[radial-gradient(circle_at_50%_50%,#0000_0,#0000_20%,#111111aa_50%)] bg-[length:3px_3px] -z-10" />

      {/* Button Container */}
      <div className="relative">
        {/* Outer Glow Layer */}
        <div 
          className="absolute inset-0 -z-20 opacity-20 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-35 group-active:opacity-50"
          style={{ filter: `blur(1.5em) url(#${filters.unopaq})` }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #ff6b35 25%, #0000 50%, #4ecdc4 75%)',
            }}
          />
        </div>

        {/* Middle Glow Layer */}
        <div 
          className="absolute inset-[-0.125em] -z-20 opacity-25 overflow-hidden transition-opacity duration-300
                     group-hover:opacity-40 group-active:opacity-55"
          style={{ 
            filter: `blur(0.2em) url(#${filters.unopaq2})`,
            borderRadius: '0.75em'
          }}
        >
          <div 
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #ff8a65 20%, #0000 45% 55%, #81c784 80%)',
            }}
          />
        </div>

        {/* Button Border */}
        <div 
          className="p-0.5 bg-[#0005] rounded-[inherit]"
          style={{ 
            clipPath: 'path("M 90 0 C 121 0 126 5 126 33 C 126 61 121 66 90 66 L 33 66 C 5 66 0 61 0 33 C 0 5 5 0 33 0 Z")' 
          }}
        >
          <div className="relative">
            {/* Inner Glow Layer */}
            <div 
              className="absolute inset-[-2px] -z-10 opacity-30 overflow-hidden transition-opacity duration-300
                         group-hover:opacity-45 group-active:opacity-60"
              style={{ 
                filter: `blur(1.5px) url(#${filters.unopaq3})`,
                borderRadius: 'inherit'
              }}
            >
              <div 
                className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
                style={{ 
                  background: 'linear-gradient(90deg, #ffab91 25%, #0000 45% 55%, #a5d6a7 75%)',
                }}
              />
            </div>
            
            {/* Button Surface */}
            <div 
              className={`flex items-center justify-center ${config.width} ${config.height} ${config.padding} bg-[#111215] text-white overflow-hidden ${config.text} font-medium whitespace-nowrap`}
              style={{ 
                clipPath: 'path("M 90 0 C 115 0 120 5 120 30 C 120 55 115 60 90 60 L 30 60 C 5 60 0 55 0 30 C 0 5 5 0 30 0 Z")',
                borderRadius: '0.875em'
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes speen {
          0% { transform: rotate(10deg); }
          50% { transform: rotate(190deg); }
          100% { transform: rotate(370deg); }
        }
        @keyframes woah {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.75); }
        }
      `}</style>
    </div>
  );
};

export { GlowButton };
