import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background/60 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} J.Deepakgoud. All rights reserved.
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link 
              href="https://github.com/Deepakgoud0" 
              target="_blank" 
              className="hover:text-[#00ff88] transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link 
              href="https://www.linkedin.com/in/deepakgoudjagiryala0212/" 
              target="_blank" 
              className="hover:text-[#00ff88] transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:deepakgoud1979@gmail.com" 
              className="hover:text-[#00ff88] transition-colors duration-300"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 