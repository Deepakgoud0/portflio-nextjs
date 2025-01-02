"use client";

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-2xl font-bold text-[#00ff88] mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a love for creating elegant, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I specialize in building responsive and scalable solutions.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-2xl font-bold text-[#00ffff] mb-4">What I Do</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Develop full-stack web applications with modern technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Create responsive and intuitive user interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Implement efficient backend solutions and APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Optimize application performance and user experience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-4xl font-bold text-[#00ff88] mb-2">3+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-4xl font-bold text-[#00ff88] mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-4xl font-bold text-[#00ff88] mb-2">20+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:border-[#00ff88]">
              <div className="text-4xl font-bold text-[#00ff88] mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 