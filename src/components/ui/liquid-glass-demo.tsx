import React from "react";
import { LiquidCard } from "./liquid-glass-card";

export default function LiquidGlassDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Liquid Glass Cards Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LiquidCard className="w-full min-w-[350px] p-2">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
                alt="Project Image"
                className="h-[420px] w-full rounded-sm object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop&crop=center"
                alt="Overlay Image"
                className="absolute top-36 left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
              />
               
              <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-8">
                <div>
                  <h1 className="text-2xl text-white">ES Rentals, Dubai</h1>
                  <p className="text-sm text-white/80">
                    Launched luxury car rental platform in 6 weeks – Integrated payment and booking system
                  </p>
                  <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard className="w-full min-w-[350px] p-2">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center"
                alt="Project Image"
                className="h-[420px] w-full rounded-sm object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center"
                alt="Overlay Image"
                className="absolute top-36 left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
              />
               
              <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-8">
                <div>
                  <h1 className="text-2xl text-white">ProQuo Technologies</h1>
                  <p className="text-sm text-white/80">
                    Created B2B networking platform – Real-time messaging and profile matching
                  </p>
                  <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard className="w-full min-w-[350px] p-2">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
                alt="Project Image"
                className="h-[420px] w-full rounded-sm object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop&crop=center"
                alt="Overlay Image"
                className="absolute top-36 left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-md border-4 object-cover shadow-xl transition-all duration-500 hover:scale-105"
              />
               
              <div className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-8">
                <div>
                  <h1 className="text-2xl text-white">Swiggy Case Study</h1>
                  <p className="text-sm text-white/80">
                    Improved delivery partner experience – Research-driven UX optimization
                  </p>
                  <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </div>
  );
} 