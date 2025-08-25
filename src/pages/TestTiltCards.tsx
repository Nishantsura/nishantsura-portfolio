import React from 'react';
import { BasicTiltCard, TiltSpotlight } from '@/components/ui/tilt-demo';
import { ProjectTiltCard } from '@/components/ui/project-tilt-card';

const TestTiltCards = () => {
  const sampleProject = {
    id: "01",
    name: "Sample Project",
    category: "Project",
    type: "Work",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    description: "This is a sample project description to test the tilt card functionality with a longer description to see how text wrapping works.",
    skills: "React, TypeScript, Tailwind CSS, Framer Motion",
    url: "https://example.com"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Tilt Card Components Test</h1>
        
        {/* Basic Tilt Card */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Basic Tilt Card</h2>
          <div className="flex justify-center">
            <BasicTiltCard />
          </div>
        </section>

        {/* Tilt Spotlight */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Tilt Spotlight</h2>
          <div className="flex justify-center">
            <TiltSpotlight />
          </div>
        </section>

        {/* Project Tilt Card */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Project Tilt Card</h2>
          <div className="flex justify-center">
            <ProjectTiltCard project={sampleProject} />
          </div>
        </section>

        {/* Multiple Project Cards */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Multiple Project Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ProjectTiltCard 
                key={i}
                project={{
                  ...sampleProject,
                  id: `0${i}`,
                  name: `Project ${i}`,
                  image: `https://images.unsplash.com/photo-${1551650975 + i}?w=500&h=300&fit=crop`
                }} 
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestTiltCards;
