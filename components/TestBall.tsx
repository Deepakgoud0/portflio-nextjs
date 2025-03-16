"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TestBall = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<THREE.Group | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotationOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene with background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    // Create camera with better position
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3, 3, 5);
    camera.lookAt(0, 0, 0);

    // Create renderer with better settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Create an octagonal sphere with larger segments
    const geometry = new THREE.SphereGeometry(1.5, 8, 6);
    
    // Create main material with metallic finish
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      metalness: 0.7,
      roughness: 0.2,
      side: THREE.DoubleSide,
      flatShading: true, // Enable flat shading for more geometric look
    });

    // Create wireframe material with thicker lines
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      wireframeLinewidth: 2,
    });

    // Create main shape
    const mainMesh = new THREE.Mesh(geometry, material);
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;

    // Create wireframe overlay
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    wireframe.scale.multiplyScalar(1.001); // Slightly larger

    // Create edges for sharper look
    const edgesGeometry = new THREE.EdgesGeometry(geometry, 15); // 15-degree threshold
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ff88,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

    // Group all meshes
    const group = new THREE.Group();
    group.add(mainMesh);
    group.add(wireframe);
    group.add(edges);
    shapeRef.current = group;
    scene.add(group);

    // Create ground plane for shadows
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.8,
      metalness: 0.2,
      side: THREE.DoubleSide,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Add lights for dramatic 3D effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const mainLight = new THREE.SpotLight(0xffffff, 1.5);
    mainLight.position.set(5, 8, 5);
    mainLight.angle = Math.PI / 4;
    mainLight.penumbra = 0.5;
    mainLight.castShadow = true;
    mainLight.shadow.bias = -0.001;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.1;
    mainLight.shadow.camera.far = 100;
    mainLight.shadow.camera.fov = 30;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x00ff88, 0.4);
    fillLight.position.set(-5, 0, 2);
    scene.add(fillLight);

    const backLight = new THREE.SpotLight(0xffffff, 0.7);
    backLight.position.set(-2, 3, -5);
    scene.add(backLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, -5, 0);
    scene.add(rimLight);

    // Mouse handlers for rotation
    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      if (shapeRef.current) {
        rotationOffset.current = {
          x: shapeRef.current.rotation.x,
          y: shapeRef.current.rotation.y
        };
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current || !shapeRef.current) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.current.x,
        y: event.clientY - previousMousePosition.current.y,
      };

      const rotationSpeed = 0.005;
      shapeRef.current.rotation.y += deltaMove.x * rotationSpeed;
      shapeRef.current.rotation.x += deltaMove.y * rotationSpeed;

      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    // Smooth auto-rotation with more pronounced movement
    const autoRotate = () => {
      if (!isDragging.current && shapeRef.current) {
        const time = Date.now() * 0.001;
        
        // Continuous rotation on all axes
        shapeRef.current.rotation.x += 0.01; // Constant rotation around X
        shapeRef.current.rotation.y += 0.02; // Faster rotation around Y
        
        // Add smooth oscillation for dynamic effect
        const oscillation = Math.sin(time) * 0.2;
        shapeRef.current.rotation.z = oscillation; // Gentle rocking motion
        
        // Smooth floating motion
        shapeRef.current.position.y = Math.sin(time * 2) * 0.1;
      }
    };

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      autoRotate();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-[400px] h-[400px] rounded-lg"
    />
  );
};

export default TestBall; 