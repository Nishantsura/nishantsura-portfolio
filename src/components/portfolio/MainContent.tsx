import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import GlassCardsDemo from "@/components/ui/glass-cards-demo";

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
      image: "/images/projects/swiggy.png",
      featured: true,
      url: "https://tremendous-banjo-b0b.notion.site/Improve-The-Swiggy-Experience-For-The-Delivery-Partners-149d914b24114f90b562b5a90e050301"
    },
    {
      id: "002", 
      year: "2023",
      name: "Redesigning DigiLocker- A Visual Design case study",
      description: "To analyze the DigiLocker application and redesign the home screen using the Design principles. As the content got more detailed, I explored various concepts like heuristics, principles of UI design, color, layout, typography, accessibility and working with adaptive and responsive interfaces.",
      image: "/images/projects/Proquo.png",
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

  return (
    <div className="main-content overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 relative overflow-hidden snap-start">
        {/* Top Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center"
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
        <div className="flex-1 flex flex-col justify-center space-y-8">
          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-body-large text-white/80 max-w-2xl leading-relaxed"
          >
            I build websites, apps & campaigns<br />
            that actually <span className="text-highlight-red text-xl font-semibold">move the needle</span><br />
            for growing brands.
          </motion.p>

          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-display leading-none text-white">
              <span>THOUGHT</span> <span>/BUILT</span><br />
              <span>SHIPPED.</span>
            </h1>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="bg-highlight-red text-white px-6 py-4 rounded-lg font-medium flex items-center gap-2 group hover:bg-highlight-red/90 transition-all duration-200"
            >
              <Briefcase className="w-4 h-4" />
              Hire me
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-white text-black border border-black px-6 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-200"
              >
                Explore my work
              </button>
              <p className="text-body text-white/70 max-w-xs">
                I've helped 15+ businesses hit their targets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="min-h-screen snap-start">
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden cursor-pointer"
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
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              {/* Top Row */}
              <div className="flex justify-between items-start">
                {/* Year Tag - Top Left */}
                <span className="text-caption text-white/60 font-mono">
                  /{project.year}
                </span>
                
                {/* Project Index - Top Right */}
                <span className="text-caption text-white font-mono">
                  /{String(index + 1).padStart(3, '0')}/
                </span>
              </div>

              {/* Center Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-2xl">
                  {/* Project Title */}
                  <h2 className="text-headline text-white font-bold mb-4">
                    {project.name}
                  </h2>
                  
                  {/* Project Description */}
                  <p className="text-body-large text-white/80">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-end">
                {/* Featured Tag - Bottom Left */}
                <span className="text-caption text-highlight-red font-semibold bg-white/10 px-3 py-1 rounded">
                  Featured
                </span>
                
                {/* Project Brand/Name - Bottom Right */}
                <div className="text-right">
                  <span className="text-body text-white/60 font-medium">
                    {project.name.includes('Swiggy') ? 'Swiggy' : 
                     project.name.includes('DigiLocker') ? 'DigiLocker' : 
                     project.name.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 bg-white relative snap-start">
        <div className="max-w-6xl mx-auto w-full">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full">
            {/* Left Column - Logo/Name */}
            <div className="lg:col-span-2 flex items-start justify-start pt-8 lg:pt-0">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-black mb-2">(n) nishant sura</h3>
                <p className="text-sm text-gray-600">Product Manager & Designer</p>
              </div>
            </div>
            
            {/* Center Column - Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-label text-trifecta-red">About Me</span>
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-caption text-muted-foreground">15+ Projects delivered</span>
                </div>

                <h2 className="text-headline mb-8 text-black pl-8 md:pl-12 lg:pl-16 max-w-full">
                  From captivating product design and development to performance-driven 
                  strategies, I offer end-to-end services to accelerate your brand's success.
                </h2>

                <p className="text-body-large text-black/70 mb-8 pl-8 md:pl-12 lg:pl-16 max-w-full">
                  My cross-functional approach combines product management, UX design, and 
                  strategic thinking to deliver exceptional results across all digital touchpoints.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8 md:pl-12 lg:pl-16">
                  <div>
                    <h3 className="text-body font-semibold mb-4 text-black">What I Do</h3>
                    <ul className="space-y-2 text-body text-black/70">
                      <li>• Product Strategy & Roadmapping</li>
                      <li>• User Experience Design</li>
                      <li>• Product Management</li>
                      <li>• Product Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-body font-semibold mb-4 text-black">Industries</h3>
                    <ul className="space-y-2 text-body text-black/70">
                      <li>• FinTech & Financial Services</li>
                      <li>• E-commerce & Retail</li>
                      <li>• Healthcare Technology</li>
                      <li>• B2B SaaS Platforms</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Empty space for spacing */}
            <div className="lg:col-span-2"></div>
          </div>
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

          <div className="relative">
            <GlassCardsDemo />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32 bg-white snap-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-display mb-8 text-black">
            <span className="text-slash">Let's</span>Talk.
          </h2>
          
          <p className="text-body-large text-black/70 mb-12 max-w-2xl">
            Contact me today for a free consultation and let's discuss your next project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-body font-semibold mb-6 text-black">Get In Touch</h3>
              <div className="space-y-4">
                <p className="text-body text-black">+91 9121883163</p>
                <p className="text-body text-black">nishantsura95@gmail.com</p>
                <p className="text-black/70">Bangalore, India</p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/Copy of nishant dp.JPG" 
                  alt="Nishant Sura"
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-caption font-semibold text-black">Nishant Sura</p>
                <p className="text-caption text-black/70">Product Manager</p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-4 border border-border rounded-lg transition-all duration-200"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-4 border border-border rounded-lg transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full p-4 border border-border rounded-lg transition-all duration-200"
                  />
                </div>
                <button type="submit" className="btn-trifecta-primary w-full">
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