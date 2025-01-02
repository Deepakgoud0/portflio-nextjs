"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-bold text-[#00ff88] hover:text-[#00ffaa] transition-colors"
          >
            Portfolio
          </button>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00ff88] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-[#00ff88] transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-[#00ff88] transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-[#00ff88] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#00ff88] text-black rounded-lg font-semibold 
                hover:bg-[#00ffaa] transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 