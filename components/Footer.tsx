import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background/60 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://github.com/Deepakgoud0" target="_blank" className="hover:text-gray-600 dark:hover:text-gray-300">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/deepakgoudjagiryala0212/" target="_blank" className="hover:text-gray-600 dark:hover:text-gray-300">
              LinkedIn
            </Link>
            <Link href="mailto:deepakgoud1979@gmail.com" className="hover:text-gray-600 dark:hover:text-gray-300">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 