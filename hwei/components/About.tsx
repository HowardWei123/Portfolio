'use client';

import { useState, useEffect } from 'react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="container-max section-padding">
        <div className={`backdrop-blur-xl border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-opacity-90 transition-opacity duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <a
              href="/Howard_Wei_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
              <div className="md:flex md:flex-col space-y-4 md:space-y-6 hidden">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Who I Am
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed">
                    I&apos;m a passionate Computer Science undergraduate student with specializtions in 
                    software engineering, machine learning, and ETL pipelines. My journey in tech
                    began with modding Minecraft tools at 10 years old and has evolved into a full-fledged career.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    What I Do
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed">
                    I specialize in full-stack development, with expertise in machine learning frameworks and data science 
                    such as LangChain, PostgreSQL, and AWS. My current focus areas include agentic AI and cloud computing
                    oriented around making a difference in people&apos;s lives.
                  </p>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="space-y-4 md:space-y-6">
              {/* Education Card */}
              <div className="bg-slate-700/60 p-4 md:p-6 rounded-xl shadow-lg card-hover">
                <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                  Education
                </h4>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h5 className="text-xs md:text-sm lg:text-base font-medium text-cyan-400">
                      Bachelor of Science in Computer Science
                    </h5>
                    <p className="text-xs lg:text-sm text-slate-300">
                      San Jose State University • Expected 2027
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="bg-slate-700/60 p-4 md:p-6 rounded-xl shadow-lg card-hover">
                <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                  Interests & Hobbies
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {[
                    'Agentic LLM Systems',
                    'Machine Learning',
                    'Data Science',
                    'Fullstack Development',
                    'Systems Architecture',
                    'Bioinformatics',
                    'Open Source',
                    'Problem Solving',
                    'Data Structures',
                    'Algorithms',
                    'Cloud Computing',
                    'Gaming',
                    'Sports',
                    'Formula 1',
                    'Rock Climbing',
                    'Entertainment'
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-1 md:px-2 py-1 bg-blue-900/30 text-blue-300 text-xs md:text-sm rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 