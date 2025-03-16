"use client";

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* About Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 md:p-8 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-xl md:text-2xl font-bold text-[#00ff88] mb-2 md:mb-4">Who I Am</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                I'm a passionate Full Stack Developer with a love for creating elegant, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I specialize in building responsive and scalable solutions.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 md:p-8 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-xl md:text-2xl font-bold text-[#00ffff] mb-2 md:mb-4">What I Do</h3>
              <ul className="text-gray-300 space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Develop full-stack web applications with modern technologies</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Create responsive and intuitive user interfaces</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Implement efficient backend solutions and APIs</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Optimize application performance and user experience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-0">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 md:p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff88] mb-1 md:mb-2">3+</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Years of Experience</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 md:p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff88] mb-1 md:mb-2">50+</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 md:p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff88] mb-1 md:mb-2">20+</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 md:p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00ff88] mb-1 md:mb-2">100%</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 