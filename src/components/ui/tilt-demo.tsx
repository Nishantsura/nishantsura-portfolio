import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

function BasicTiltCard() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
          alt='Project showcase'
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            Project Title
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>Project description</p>
        </div>
      </div>
    </Tilt>
  );
}

function TiltSpotlight() {
  return (
    <div className='aspect-video max-w-sm'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-lg'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <img
          src='https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop'
          alt='Project showcase'
          className='h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0'
        />
      </Tilt>
      <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
        <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400'>
          Project Category
        </h3>
        <p className='text-sm text-black dark:text-white'>Project Name</p>
      </div>
    </div>
  );
}

export { BasicTiltCard, TiltSpotlight };
