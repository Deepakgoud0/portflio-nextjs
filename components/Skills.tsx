"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BallCanvas from './BallCanvas';

// Dynamically import BallCanvas with no SSR
const BallCanvasDynamic = dynamic(() => import('./BallCanvas'), { ssr: false });

const technologies = [
  {
    name: "React",
    icon: "/skills/react.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
];

const Skills = () => {
  // Add state to control rendering of client-side components
  const [isMounted, setIsMounted] = useState(false);

  // Only render client components after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Skills & Technologies
        </h2>
        
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="w-full max-w-2xl space-y-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-2xl font-semibold mb-4 text-[#00ff88]">Core Technologies</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">•</span> React & Next.js Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">•</span> JavaScript/TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">•</span> HTML5 & Modern CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ff88]">•</span> Responsive Web Design
                </li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-2xl font-semibold mb-4 text-[#00ffff]">Tools & Practices</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#00ffff]">•</span> Version Control (Git)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ffff]">•</span> Modern Development Tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ffff]">•</span> Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ffff]">•</span> Clean Code Practices
                </li>
              </ul>
            </div>
          </div>

          {/* 3D Balls Grid - Only render on client side */}
          <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
            {isMounted && technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvasDynamic icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 