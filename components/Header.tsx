"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  // If not mounted yet, render a placeholder with the same structure
  // to prevent layout shifts during hydration
  if (!isMounted) {
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6`}>
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#00ff88]">Portfolio</div>
            <div className="hidden md:flex items-center gap-8">
              <div className="text-white">About</div>
              <div className="text-white">Projects</div>
              <div className="text-white">Skills</div>
              <div className="text-white">Experience</div>
              <div className="px-6 py-2 bg-[#00ff88] text-black rounded-lg font-semibold">Get in Touch</div>
            </div>
            <div className="md:hidden">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-bold text-[#00ff88] hover:text-[#00ffaa] transition-colors"
            suppressHydrationWarning
          >
            Portfolio
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00ff88] transition-colors"
              suppressHydrationWarning
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-[#00ff88] transition-colors"
              suppressHydrationWarning
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-[#00ff88] transition-colors"
              suppressHydrationWarning
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-[#00ff88] transition-colors"
              suppressHydrationWarning
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#00ff88] text-black rounded-lg font-semibold 
                hover:bg-[#00ffaa] transform hover:scale-105 transition-all duration-300"
              suppressHydrationWarning
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md py-4 px-4 flex flex-col gap-4 shadow-lg">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00ff88] transition-colors py-2 text-left"
              suppressHydrationWarning
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-[#00ff88] transition-colors py-2 text-left"
              suppressHydrationWarning
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-[#00ff88] transition-colors py-2 text-left"
              suppressHydrationWarning
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-[#00ff88] transition-colors py-2 text-left"
              suppressHydrationWarning
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#00ff88] text-black rounded-lg font-semibold 
                hover:bg-[#00ffaa] transform hover:scale-105 transition-all duration-300 w-full text-center mt-2"
              suppressHydrationWarning
            >
              Get in Touch
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 