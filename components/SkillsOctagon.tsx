"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Skill {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' }
];

const SkillsOctagon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const octagonRef = useRef<THREE.Group | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    console.log('Initializing 3D scene');

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      canvas: document.createElement('canvas')
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create octagon group
    const octagonGroup = new THREE.Group();
    octagonRef.current = octagonGroup;
    scene.add(octagonGroup);

    // Create spherical arrangement of skill planes
    const radius = 2;
    const segments = skills.length;

    // Create planes with colored materials
    skills.forEach((skill, i) => {
      const angle = (i / segments) * Math.PI * 2;
      const geometry = new THREE.PlaneGeometry(1.2, 1.2);
      const material = new THREE.MeshBasicMaterial({
        color: skill.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = Math.sin(angle) * radius;
      mesh.lookAt(new THREE.Vector3(0, 0, 0));
      mesh.rotateY(Math.PI / 6);
      
      mesh.userData = { skillName: skill.name };
      octagonGroup.add(mesh);
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const targetY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mousePosition.current = {
        x: mousePosition.current.x + (targetX - mousePosition.current.x) * 0.1,
        y: mousePosition.current.y + (targetY - mousePosition.current.y) * 0.1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (octagonRef.current) {
        octagonRef.current.rotation.y += (mousePosition.current.x * 0.3 - octagonRef.current.rotation.y) * 0.05;
        octagonRef.current.rotation.x += (mousePosition.current.y * 0.3 - octagonRef.current.rotation.x) * 0.05;
        octagonRef.current.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[600px] relative bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none" />
    </div>
  );
};

export default SkillsOctagon; 