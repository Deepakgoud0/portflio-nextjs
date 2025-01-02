"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks. Features include natural language processing for task input, automatic deadline suggestions, and intelligent task grouping.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    gradient: "from-blue-500 via-cyan-400 to-teal-300",
    liveUrl: "https://project1.demo",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking. Includes features for order processing, customer management, and revenue analytics.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redux", "Chart.js"],
    gradient: "from-purple-500 via-pink-400 to-red-400",
    liveUrl: "https://project2.demo",
    githubUrl: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Social Media Analytics Platform",
    description: "A platform that aggregates and analyzes social media metrics across multiple platforms. Provides insights on engagement rates, audience demographics, and content performance.",
    technologies: ["Vue.js", "Python", "FastAPI", "AWS", "D3.js"],
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/yourusername/project3"
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToProject = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newIndex > currentProject ? 1 : -1);
    setCurrentProject(newIndex);
  };

  const nextProject = () => {
    if (isAnimating) return;
    const next = (currentProject + 1) % projects.length;
    goToProject(next);
  };

  const prevProject = () => {
    if (isAnimating) return;
    const prev = (currentProject - 1 + projects.length) % projects.length;
    goToProject(prev);
  };

  // Auto-advance projects every 8 seconds if no interaction
  useEffect(() => {
    const timer = setInterval(nextProject, 8000);
    return () => clearInterval(timer);
  }, [currentProject]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? 45 : -45,
      rotateX: 15,
      opacity: 0,
      scale: 0.8,
      z: -500
    }),
    center: {
      x: 0,
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      z: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      rotateY: direction > 0 ? -45 : 45,
      rotateX: -15,
      opacity: 0,
      scale: 0.8,
      z: -500
    })
  };

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden flex items-center py-20">
      {/* Enhanced spotlight effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]">
            {/* Enhanced spotlight beam */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,136,0.2)_0%,_transparent_70%)]" />
            {/* Enhanced side spotlights */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-40 h-[300px] bg-[linear-gradient(90deg,_transparent_0%,_rgba(0,255,136,0.1)_100%)]" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-40 h-[300px] bg-[linear-gradient(270deg,_transparent_0%,_rgba(0,255,136,0.1)_100%)]" />
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 w-full relative">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        {/* Enhanced 3D Theater Screen Effect */}
        <div className="relative h-[500px] perspective-2000 mx-auto max-w-[800px]">
          {/* Enhanced screen border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-50 blur-xl bg-gradient-to-b from-[#00ff88]/20 via-transparent to-[#00ff88]/20" />
          
          <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
                mass: 1,
              }}
              className="absolute inset-0 w-full [transform-style:preserve-3d]"
              style={{
                perspective: "2000px",
              }}
            >
              {/* Enhanced 3D Project Card */}
              <div className="relative group h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00ff88]/10 to-transparent [transform:translateZ(-10px)] group-hover:[transform:translateZ(-20px)] transition-transform duration-700" />
                
                <div className="bg-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-full shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:translateZ(20px)]">
                  {/* Project Header with Enhanced 3D Gradient */}
                  <div className={`h-1/3 relative overflow-hidden bg-gradient-to-r ${projects[currentProject].gradient} p-8 [transform-style:preserve-3d]`}>
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/30 rounded-full blur-2xl transform -rotate-45 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="relative [transform:translateZ(30px)] transition-transform duration-700">
                      <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">
                        {projects[currentProject].title}
                      </h3>
                    </div>
                  </div>

                  {/* Enhanced 3D Project Content */}
                  <div className="p-8 h-2/3 flex flex-col justify-between backdrop-blur-md bg-white/5 [transform-style:preserve-3d]">
                    <div className="[transform:translateZ(20px)] transition-transform duration-700">
                      <p className="text-gray-100 text-lg mb-6 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {projects[currentProject].description}
                      </p>

                      {/* Technologies with 3D effect */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[currentProject].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.2)] hover:[transform:translateZ(10px)] transition-transform duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links with 3D effect */}
                    <div className="flex gap-6 [transform:translateZ(25px)] transition-transform duration-700">
                      {projects[currentProject].liveUrl && (
                        <a
                          href={projects[currentProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-[#00ff88] transition-all duration-300 group hover:[transform:translateZ(10px)]"
                        >
                          <span className="text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Live Demo</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {projects[currentProject].githubUrl && (
                        <a
                          href={projects[currentProject].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-[#00ff88] transition-all duration-300 group hover:[transform:translateZ(10px)]"
                        >
                          <span className="text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">GitHub</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300"
            disabled={isAnimating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enhanced Project Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                  index === currentProject ? 'bg-[#00ff88] w-4 scale-110' : 'bg-white/30 hover:bg-white/50'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 