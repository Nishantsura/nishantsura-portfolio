import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Component as AnimatedBackground } from "@/components/ui/raycast-animated-background";
import { GlowButton } from "@/components/ui/shiny-button-1";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

const MainContent: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Find the scroll container
      const scrollContainer = document.querySelector('.scroll-snap-container');
      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const scrollTop = scrollContainer.scrollTop;
        const targetScrollTop = scrollTop + sectionRect.top - containerRect.top;
        
        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      } else {
        // Fallback to regular scrollIntoView
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const projects = [
    {
      id: "001",
      year: "2021",
      name: "Improving The Swiggy Experience For The Delivery Partners",
      description: "A UX case study where we looked at how we could improve the Swiggy delivery experience for the Delivery Partner by adding a new feature, changing an existing feature, or even removing a feature.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      featured: true,
      url: "https://tremendous-banjo-b0b.notion.site/Improve-The-Swiggy-Experience-For-The-Delivery-Partners-149d914b24114f90b562b5a90e050301"
    },
    {
      id: "002", 
      year: "2023",
      name: "Redesigning DigiLocker- A Visual Design case study",
      description: "To analyze the DigiLocker application and redesign the home screen using the Design principles. As the content got more detailed, I explored various concepts like heuristics, principles of UI design, color, layout, typography, accessibility and working with adaptive and responsive interfaces.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
      featured: true,
      url: "https://tremendous-banjo-b0b.notion.site/Redesigning-DigiLocker-A-Visual-Design-case-study-d8dbfb28243a4889ba64ef2a54a3d497"
    },
    {
      id: "003",
      year: "2024", 
      name: "Swiggy Case Study",
      description: "Improved delivery partner experience – Research-driven UX optimization",
      image: "/images/projects/swiggy.png",
      featured: false
    }
  ];

  // New project data for 3D Pin cards
  const projectCards = [
    {
      id: '01',
      title: 'Autostock AI',
      description: 'AI-powered inventory management system for automotive dealers',
      stats: {
        tech: 'React, Node.js, Hugging Face, MongoDB'
      },
      status: 'Live',
      url: 'https://stockai-insight-pilot.vercel.app/',
      color: 'rose'
    },
    {
      id: '02',
      title: 'ES Rentals',
      description: 'Luxury car rental platform with premium concierge services',
      stats: {
        tech: 'Vite, Firebase, Vercel'
      },
      status: 'Live',
      url: 'https://www.esrentacar.ae/',
      color: 'emerald'
    },
    {
      id: '03',
      title: 'CactusITS',
      description: 'Enterprise software solutions and custom development',
      stats: {
        tech: 'Vite, Supabase, Vercel'
      },
      status: 'Live',
      url: 'https://www.cactusits.com/',
      color: 'violet'
    },
    {
      id: '04',
      title: 'ProQuo',
      description: 'Professional business networking platform for tech professionals',
      stats: {
        tech: 'Node.js, Vite, Supabase, Vercel'
      },
      status: 'Live',
      url: 'https://giant-walkthroughs-221939.framer.app/',
      color: 'amber'
    }
  ];

  return (
    <div className="main-content overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 relative overflow-hidden snap-start">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-15">
          <AnimatedBackground />
        </div>
        
        {/* Top Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center relative z-10"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">(t)</span>
            <span className="text-sm opacity-60">®</span>
          </div>
          <div className="text-caption text-white/60">
            Working from <span className="text-white font-semibold">Bangalore</span>, India
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-body-large text-white/80 max-w-2xl leading-relaxed"
          >
            I move between design, frontend, and full-stack like it's one canvas. Call it design engineering, call it vibe coding. I'm where creativity meets code.
          </motion.p>

          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-display leading-none text-white">
              <span>DESIGNED</span> <span>/CODED</span><br />
              <span>SHIPPED.</span>
            </h1>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <GlowButton
              onClick={() => scrollToSection('work')}
            >
              <div className="flex items-center -ml-2">
                <Briefcase className="w-4 h-4" />
                <span className="ml-3">Hire me</span>
              </div>
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-label text-trifecta-red">Selected Work</span>
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-caption text-muted-foreground">2024-25©</span>
          </div>

          <h2 className="text-sm sm:text-base md:text-lg mb-8 text-white max-w-4xl leading-relaxed">
            Design is intriguing. It isn't just about making something look aesthetics. That is just the icing on the cake, for sure. But to me, design at its core, is method of problem solving. Solutions can sometimes be approached in a variety of ways, and design is a medium that helps you navigate and validate those possibilities, to reach the solution best suited to the problem
          </h2>

          {/* 3D Pin Project Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-24 justify-items-center">
              {projectCards.map((project) => {
                return (
                  <PinContainer
                    key={project.id}
                    title="view project"
                    href={project.url}
                    containerClassName="w-full max-w-sm"
                  >
                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] bg-gradient-to-b from-slate-800/50 to-slate-800/0 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                      {/* Header */}
                      <div className="flex items-center gap-2">
                        <div className={`size-3 rounded-full bg-${project.color}-400/60 animate-pulse`} />
                        <div className="text-xs text-slate-400">{project.status}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 mt-6 space-y-6">
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-slate-100">
                            {project.title}
                          </div>
                          
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Tech Stack */}
                        <div className="space-y-2">
                          <div className="text-xs text-slate-400 uppercase tracking-wider">Tech Stack</div>
                          <div className="text-xs text-slate-300 font-medium leading-relaxed">
                            {project.stats.tech}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end">
                          <div className="text-xs text-slate-400">
                            Project #{project.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 bg-black relative snap-start">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Content */}
          <div className="w-full max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-trifecta-red">About Me</span>
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-xs text-white/60">15+ Projects delivered</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white max-w-full leading-tight">
                Most AI startups fail not because their models don't work, but because their products don't. Research sits in notebooks, users wrestle with clunky interfaces, APIs misfire, and deployments break under load.{' '}
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-slow-gradient">
                  I solve these gaps.
                </span>
              </h2>

              <div className="w-full">
                <h3 className="text-lg font-semibold mb-6 text-white">
                  If you're in need of → Here's how I solve it ⬇️
                </h3>
                <FeaturesSectionWithHoverEffects />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="min-h-screen snap-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full flex items-center justify-center overflow-hidden cursor-pointer group"
              onClick={() => {
                if (project.url) {
                  window.open(project.url, '_blank');
                } else {
                  scrollToSection('work');
                }
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  {/* Year Tag - Top Left */}
                  <span className="text-sm text-white/70 font-mono bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    /{project.year}
                  </span>
                  
                  {/* Project Index - Top Right */}
                  <span className="text-sm text-white/70 font-mono bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    /{String(index + 1).padStart(2, '0')}/
                  </span>
                </div>

                {/* Center Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="max-w-lg">
                    {/* Project Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
                      {project.name}
                    </h2>
                    
                    {/* Project Description */}
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-end">
                  {/* Featured Tag - Bottom Left */}
                  <span className="text-sm text-highlight-red font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured Case Study
                  </span>
                  
                  {/* External Link Indicator */}
                  <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                    <span className="text-sm">View Case Study</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 bg-black snap-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-display mb-8 text-white">
            <span className="text-slash">Let's</span>Talk.
          </h2>
          
          <p className="text-body-large text-white/70 mb-12 max-w-2xl">
            Contact me today for a free consultation and let's discuss your next project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-body font-semibold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-4">
                <p className="text-body text-white">+91 9121883163</p>
                <p className="text-body text-white">nishantsura95@gmail.com</p>
                <p className="text-white/70">Bangalore, India</p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/Copy of nishant dp.JPG" 
                  alt="Nishant Sura"
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-caption font-semibold text-white">Nishant Sura</p>
                <p className="text-caption text-white/70">Product Manager</p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-4 border border-white/20 bg-white/5 text-white placeholder-white/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-4 border border-white/20 bg-white/5 text-white placeholder-white/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full p-4 border border-white/20 bg-white/5 text-white placeholder-white/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MainContent; 