"use client";

import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Hi, I'm <span className="text-[#00ff88]">J.Deepakgoud</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#cccccc] glow-effect">
          Full Stack Developer
        </p>
        <button
          onClick={scrollToContact}
          className="mt-8 px-8 py-4 bg-[#00ff88] text-black rounded-lg font-semibold 
            hover:bg-[#00ffaa] transform hover:scale-105 transition-all duration-300"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero; 