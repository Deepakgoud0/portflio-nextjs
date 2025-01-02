"use client";

import React, { useEffect, useRef, useState } from "react";
import { Experience as ExperienceType } from '@/types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "Vectorsoft",
    position: "Junior Software Developer",
    duration: "Nov 2024 - Present",
    description: [
      "Led development of key features",
      "Managed team of 5 developers",
      "Improved application performance by 40%"
    ]
  },
  {
    id: 2,
    company: "TechCorp",
    position: "Software Engineering Intern",
    duration: "May 2023 - Oct 2023",
    description: [
      "Developed responsive web applications",
      "Collaborated with senior developers",
      "Implemented new features using React"
    ]
  },
  {
    id: 3,
    company: "WebSolutions",
    position: "Web Development Intern",
    duration: "Jan 2023 - Apr 2023",
    description: [
      "Built and maintained client websites",
      "Worked with modern web technologies",
      "Optimized website performance"
    ]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate how far through the section we've scrolled
      const scrollPercentage = Math.max(0, Math.min(1, 
        (scrollY - sectionTop + windowHeight * 0.5) / (sectionHeight)
      ));

      setScrollProgress(scrollPercentage * 100);

      // Calculate which experience should be active
      const newIndex = Math.min(
        experiences.length - 1,
        Math.floor(scrollPercentage * (experiences.length + 0.5))
      );
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section ref={sectionRef} id="experience" className="py-20 min-h-screen relative">
      {/* Progress Bar */}
      <div className="fixed left-0 top-0 h-1 bg-gray-200 w-full z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#00ff88] to-[#00ffff] transition-all duration-500 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-24 gradient-text text-center">Experience</h2>
        
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform -translate-x-1/2">
            <div 
              className="w-full bg-gradient-to-b from-[#00ff88] to-[#00ffff] transition-all duration-500 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-32">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={exp.id}
                  className={`relative grid grid-cols-2 gap-8 ${
                    isLeft ? 'direction-left' : 'direction-right'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-1/2 top-8 w-4 h-4 rounded-full transform -translate-x-1/2 transition-all duration-700 ease-out ${
                      index <= activeIndex 
                        ? 'bg-[#00ff88] scale-125 shadow-glow' 
                        : 'bg-gray-600 scale-100'
                    }`}
                  />

                  {/* Experience Content */}
                  <div 
                    className={`transition-all duration-700 ease-out ${
                      isLeft 
                        ? 'col-start-1 text-right pr-12' 
                        : 'col-start-2 text-left pl-12'
                    } ${
                      index <= activeIndex
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-20'
                    }`}
                  >
                    <div className={`bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 
                      transform transition-all duration-500 hover:border-[#00ff88] hover:scale-105
                      ${isLeft ? 'hover:-translate-x-2' : 'hover:translate-x-2'}
                    `}>
                      <h3 className="text-2xl font-bold text-[#00ff88] mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-gray-300 mb-4">
                        {exp.company} | {exp.duration}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li 
                            key={i}
                            className={`flex items-center text-gray-300 ${
                              isLeft ? 'flex-row-reverse' : 'flex-row'
                            }`}
                          >
                            <span className={`text-[#00ff88] ${
                              isLeft ? 'ml-2' : 'mr-2'
                            }`}>•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .direction-left .animate-in {
          animation: slideInLeft 0.7s ease-out forwards;
        }
        
        .direction-right .animate-in {
          animation: slideInRight 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience; 