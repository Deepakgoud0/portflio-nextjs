"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    let bounds: DOMRect;
    let requestId: number;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateTransform = () => {
      // Smooth interpolation
      currentRotateX = lerp(currentRotateX, targetRotateX, 0.1);
      currentRotateY = lerp(currentRotateY, targetRotateY, 0.1);

      form.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      requestId = requestAnimationFrame(updateTransform);
    };

    const rotateElement = (e: MouseEvent) => {
      bounds = form.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      
      // Calculate rotation based on mouse position
      const maxRotate = 15; // Increased maximum rotation
      targetRotateX = (-center.y / bounds.height) * maxRotate;
      targetRotateY = (center.x / bounds.width) * maxRotate;
    };

    const mouseLeave = () => {
      targetRotateX = 0;
      targetRotateY = 0;
      form.style.transition = 'transform 0.5s ease-out';
    };

    const mouseEnter = (e: MouseEvent) => {
      form.style.transition = 'none';
      rotateElement(e);
    };

    // Start animation loop
    requestId = requestAnimationFrame(updateTransform);

    form.addEventListener('mousemove', rotateElement);
    form.addEventListener('mouseleave', mouseLeave);
    form.addEventListener('mouseenter', mouseEnter);

    return () => {
      if (form) {
        form.removeEventListener('mousemove', rotateElement);
        form.removeEventListener('mouseleave', mouseLeave);
        form.removeEventListener('mouseenter', mouseEnter);
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transform transition-all duration-500 hover:border-[#00ff88]">
              <h3 className="text-2xl font-bold text-[#00ff88] mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                Have a question or want to work together? Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-[#00ff88] mr-3">•</span>
                  <a href="mailto:deepakgoud1979@gmail.com" className="hover:text-[#00ff88] transition-colors">
                    deepakgoud1979@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-[#00ff88] mr-3">•</span>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 space-y-6 
              transform transition-all duration-300 hover:border-[#00ff88]"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-gray-800'} 
                  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors`}
                placeholder="Your name"
                suppressHydrationWarning
              />
              {errors.name && (
                <p className="mt-1 text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-gray-800'} 
                  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors`}
                placeholder="Your email"
                suppressHydrationWarning
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows={5}
                className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-gray-800'} 
                  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors`}
                placeholder="Your message"
                suppressHydrationWarning
              />
              {errors.message && (
                <p className="mt-1 text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold transition-all duration-300
                ${isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-[#00ff88] hover:bg-[#00ffaa] text-black hover:scale-105'
                }`}
              suppressHydrationWarning
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch; 