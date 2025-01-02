import React from "react";
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import GetInTouch from '@/components/GetInTouch';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GetInTouch />
    </div>
  );
}
