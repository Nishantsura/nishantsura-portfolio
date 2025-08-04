import * as React from "react";
import { ChevronDown, Figma, Code, Zap, Database, Palette, Smartphone, Globe, ExternalLink } from "lucide-react";

// Tool icon components
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.811 0-3.893.913-5.861 2.804a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704c-1.968-1.891-4.05-2.804-5.861-2.804zm0 21.382c1.811 0 3.893-.913 5.861-2.804a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704c1.968 1.891 4.05 2.804 5.861 2.804zM5.135 9.26c-1.74-1.74-3.47-2.504-5.157-2.504-1.677 0-3.403.773-5.132 2.504a.5.5 0 0 0 .704.704c1.74-1.74 3.47-2.504 5.157-2.504 1.677 0 3.403.773 5.132 2.504a.5.5 0 0 0 .704-.704zm13.73 5.48c1.74 1.74 3.47 2.504 5.157 2.504 1.677 0 3.403-.773 5.132-2.504a.5.5 0 0 0-.704-.704c-1.74 1.74-3.47 2.504-5.157 2.504-1.677 0-3.403-.773-5.132-2.504a.5.5 0 0 0-.704.704z"/>
  </svg>
);

const ViteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.363.75h6.75v1.5H4.125v9.75H2.625v-9.75H.125z"/>
  </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  tools: Array<{
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
  }>;
  year: string;
  url?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, image, tools, year, url, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[380px] sm:h-[400px] w-full [perspective:1000px] p-2 ${className}`}
        {...props}
      >
        <div className="relative h-full rounded-[30px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-700 ease-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,8deg)]">
          {/* Glass overlay */}
          <div className="absolute inset-2 rounded-[35px] border-b border-l border-white/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          
          {/* Content */}
          <div className="absolute [transform:translate3d(0,0,26px)]">
            <div className="px-6 pt-6 pb-0">
              {/* Year badge */}
              <div className="mb-4">
                <span className="inline-block bg-white/10 text-white/80 text-xs font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                  {year}
                </span>
              </div>
              
              {/* Project image */}
              <div className="relative mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
              
              {/* Title */}
              <span className="block text-xl font-bold text-white mb-3">
                {title}
              </span>
              
              {/* Description */}
              <span className="block text-sm text-zinc-300 leading-relaxed">
                {description}
              </span>
            </div>
          </div>
          
          {/* Bottom section with tools and CTA */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            {/* Tools */}
            <div className="flex gap-3 [transform-style:preserve-3d]">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={index}
                    className="group/tool grid h-[32px] w-[32px] place-content-center rounded-full border-none bg-white/10 backdrop-blur-sm shadow-[rgba(0,0,0,0.5)_0px_7px_5px_-5px] transition-all duration-300 ease-out group-hover:[box-shadow:rgba(0,0,0,0.2)_-5px_20px_10px_0px] group-hover:[transform:translate3d(0,0,30px)] hover:bg-white/20 active:bg-yellow-400"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    title={tool.name}
                  >
                    <Icon className="h-4 w-4 stroke-white transition-colors" />
                  </button>
                );
              })}
            </div>
            
            {/* CTA */}
            <div 
              className={`flex w-2/5 items-center justify-end transition-all duration-300 ease-out hover:[transform:translate3d(0,0,8px)] ${url ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => {
                if (url) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <button className="border-none bg-none text-xs font-bold text-white transition-colors duration-300 hover:text-white/80">
                Watch live
              </button>
              <ExternalLink className="h-3 w-3 stroke-white ml-1 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "120px", pos: "8px", z: "20px", delay: "0s" },
              { size: "100px", pos: "10px", z: "40px", delay: "0.4s" },
              { size: "80px", pos: "17px", z: "60px", delay: "0.8s" },
              { size: "60px", pos: "23px", z: "80px", delay: "1.2s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-white/10 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-700 ease-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              ></div>
            ))}
            
            {/* Project logo */}
            <div
              className="absolute grid aspect-square w-[40px] place-content-center rounded-full bg-white/20 backdrop-blur-sm shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-700 ease-out [transform:translate3d(0,0,100px)] [transition-delay:1.2s] group-hover:[transform:translate3d(0,0,110px)]"
              style={{ top: "25px", right: "25px" }}
            >
              <Code className="w-4 stroke-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard; 