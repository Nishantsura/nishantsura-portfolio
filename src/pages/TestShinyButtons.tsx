import React from "react";
import { GlowButton } from "@/components/ui/shiny-button-1";
import { Briefcase, ArrowUpRight } from "lucide-react";

export default function TestShinyButtons() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Shiny Button Showcase</h1>
          <p className="text-xl text-gray-300">All buttons from your portfolio with the new shiny design</p>
        </div>

        {/* Hero Section Buttons */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">Hero Section Buttons</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <GlowButton
              onClick={() => scrollToSection('work')}
              className="flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Let's Build Together
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </GlowButton>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <GlowButton
                onClick={() => scrollToSection('work')}
              >
                See My Process
              </GlowButton>
              <p className="text-body text-white/70 max-w-xs">
                From early product experiments to polished launches, I've worked with 15+ teams to take ideas from sketch → prototype → production.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Button */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">Contact Form Button</h2>
          <div className="max-w-md">
            <GlowButton type="submit" className="w-full">
              Send Message
            </GlowButton>
          </div>
        </div>

        {/* Additional Button Variations */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">Additional Variations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlowButton onClick={() => console.log('Book Call clicked')}>
              Book a Call
            </GlowButton>
            <GlowButton onClick={() => console.log('View Resume clicked')}>
              View Resume
            </GlowButton>
            <GlowButton onClick={() => console.log('Download CV clicked')}>
              Download CV
            </GlowButton>
            <GlowButton onClick={() => console.log('Get Quote clicked')}>
              Get Quote
            </GlowButton>
            <GlowButton onClick={() => console.log('Start Project clicked')}>
              Start Project
            </GlowButton>
            <GlowButton onClick={() => console.log('Learn More clicked')}>
              Learn More
            </GlowButton>
          </div>
        </div>

        {/* Button with Icons */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-6">
            <GlowButton className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Project
            </GlowButton>
            <GlowButton className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Like Project
            </GlowButton>
            <GlowButton className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
