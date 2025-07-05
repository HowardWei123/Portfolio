'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('home');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden pt-16">
      <div className="flex justify-center items-center z-10 container-max section-padding text-center">
        <div className={`backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-opacity-80 transition-opacity duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Greeting */}
          <p className="text-base md:text-lg lg:text-xl text-cyan-400 font-medium mb-2 md:mb-4">
            Hello, I&apos;m
          </p>
          {/* Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Howard Wei</span>
          </h1>
          {/* Title */}
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-300 mb-6 md:mb-8 font-medium">
            Computer Science Undergraduate at{' '}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent font-bold">
              San Jose State University
            </span>
          </h2>
          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
            I&apos;m an experienced developer with a passion for software development, machine learning, and creating innovative solutions. 
            Currently pursuing my degree while building real-world projects and expanding my technical skills.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 sm:px-8 md:py-4 bg-gradient-to-r text-sm md:text-base from-blue-600/80 to-cyan-600/80 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 sm:px-8 md:py-4 border-2 text-sm md:text-base border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 