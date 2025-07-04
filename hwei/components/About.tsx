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
        <div className={`backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-opacity-80 transition-opacity duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
              Get to know me better and understand my journey in computer science
            </p>
            <a
              href="/HWResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              download
            >
              Download Resume
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
                    I&apos;m a passionate Computer Science undergraduate student with a deep interest in 
                    software development, machine learning, and ETL pipelines. My journey in tech
                    began with curiosity and has evolved into a commitment to creating meaningful solutions.
                  </p>
                  <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed">
                    I believe in continuous learning and staying up-to-date with the latest technologies. 
                    When I&apos;m not coding, you can find me learning new frameworks, contributing to open-source  
                    projects, collaborating with fellow developers on innovative ideas, or watching various forms of entertainment.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    What I Do
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed">
                    I specialize in full-stack development, with expertise in machine learning frameworks and data science 
                    such as LangChain, PostgreSQL, and AWS. I enjoy building scalable applications and implementing efficient 
                    algorithms to solve complex problems. My current focus areas include agentic AI and cloud computing
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
                    <p className="text-xs lg:text-sm text-slate-300 mt-1">
                      GPA: 3.7
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
                    'Open Source',
                    'Problem Solving',
                    'Data Structures',
                    'Algorithms',
                    'Cloud Computing',
                    'UI/UX Design',
                    'Cybersecurity',
                    'Gaming',
                    'Sports',
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

              {/* Goals Card */}
              <div className="bg-slate-700/60 p-4 md:p-6 rounded-xl shadow-lg card-hover">
                <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                  Career Goals
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs lg:text-sm text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Contribute to impactful software projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Master advanced machine learning techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Build scalable and efficient applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Collaborate with talented developers worldwide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 