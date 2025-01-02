"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<THREE.Points | null>(null);
  const initialPositions = useRef<Float32Array | null>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mousePlane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
    });

    // Set renderer size and position
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-1';
    renderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    // Create particles in a more visible range
    for(let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 5;     // x
      posArray[i + 1] = (Math.random() - 0.5) * 5; // y
      posArray[i + 2] = (Math.random() - 0.5) * 5; // z
    }

    initialPositions.current = posArray.slice();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material with slightly larger particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: '#2196f3',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particlesMesh;
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse move handler with improved coordinate calculation
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      // Update the raycaster and find intersection point
      raycaster.current.setFromCamera(mouse, camera);
      const intersectPoint = new THREE.Vector3();
      raycaster.current.ray.intersectPlane(mousePlane.current, intersectPoint);
      
      mousePosition.current = { x: intersectPoint.x, y: intersectPoint.y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current && initialPositions.current) {
        const positions = (particlesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        const repulsionRadius = 0.5;
        const repulsionStrength = 0.1;
        const returnStrength = 0.05;

        // Update each particle position
        for (let i = 0; i < positions.length; i += 3) {
          const particleX = positions[i];
          const particleY = positions[i + 1];

          // Calculate distance from mouse
          const dx = particleX - mousePosition.current.x;
          const dy = particleY - mousePosition.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Apply repulsion
          if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * repulsionStrength;
            positions[i] += (dx / distance) * force;
            positions[i + 1] += (dy / distance) * force;
          }

          // Return to original position
          const originalX = initialPositions.current[i];
          const originalY = initialPositions.current[i + 1];
          const originalZ = initialPositions.current[i + 2];

          positions[i] += (originalX - positions[i]) * returnStrength;
          positions[i + 1] += (originalY - positions[i + 1]) * returnStrength;
          positions[i + 2] += (originalZ - positions[i + 2]) * returnStrength;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Add subtle rotation
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005;
        particlesRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.dispatchEvent(new Event('resize')); // Force initial resize

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return null;
};

export default ThreeDBackground; 