'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', category: 'Languages', icon: '/icons/icons8-python.svg' },
    { name: 'Java', category: 'Languages', icon: '/icons/icons8-java.svg' },
    { name: 'JavaScript', category: 'Languages', icon: '/icons/icons8-javascript.svg' },
    { name: 'TypeScript', category: 'Languages', icon: '/icons/icons8-typescript.svg' },
    { name: 'C++', category: 'Languages', icon: '/icons/cpp.svg' },
    
    // Frontend
    { name: 'React', category: 'Frontend', icon: '/icons/icons8-react-native.svg' },
    { name: 'Next.js', category: 'Frontend', icon: '/icons/icons8-next.js.svg' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '/icons/icons8-tailwindcss.svg' },
    { name: 'Vue.js', category: 'Frontend', icon: '/icons/vue.svg' },
    { name: 'Nuxt.js', category: 'Frontend', icon: '/icons/nuxt.svg' },
    { name: 'Django', category: 'Frontend', icon: '/icons/django.svg' },
    { name: 'HTML', category: 'Frontend', icon: '/icons/icons8-html-5.svg' },
    { name: 'CSS', category: 'Frontend', icon: '/icons/icons8-css3.svg' },
    
    // Backend & Database
    { name: 'Node.js', category: 'Backend', icon: '/icons/nodejs.svg' },
    { name: 'Django REST', category: 'Backend', icon: '/icons/django.svg' },
    { name: 'MongoDB', category: 'Backend', icon: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', category: 'Backend', icon: '/icons/postgresql.svg' },
    { name: 'MySQL', category: 'Backend', icon: '/icons/mysql.svg' },
    { name: 'Firebase', category: 'Backend', icon: '/icons/firebase.svg' },
    
    // Tools & DevOps
    { name: 'Git', category: 'Tools', icon: '/icons/icons8-git.svg' },
    { name: 'GitHub', category: 'Tools', icon: '/icons/icons8-github.svg' },
    { name: 'GitLab', category: 'Tools', icon: '/icons/icons8-gitlab.svg' },
    { name: 'Docker', category: 'Tools', icon: '/icons/docker.svg' },
    { name: 'AWS', category: 'Tools', icon: '/icons/aws.svg' },
    { name: 'GCP', category: 'Tools', icon: '/icons/gcp.svg' },
    { name: 'Azure', category: 'Tools', icon: '/icons/azure.svg' },
    { name: 'VS Code', category: 'Tools', icon: '/icons/vscode.svg' },
    { name: 'Postman', category: 'Tools', icon: '/icons/postman.svg' },
    { name: 'Streamlit', category: 'Tools', icon: '/icons/streamlit.svg' },

    // AI & Machine Learning
    { name: 'LangChain', category: 'AI/ML', icon: '/icons/langchain.svg' },
    { name: 'AWS Bedrock', category: 'AI/ML', icon: '/icons/aws-bedrock.svg' },
    { name: 'OpenAI', category: 'AI/ML', icon: '/icons/openai.svg' },
    { name: 'Groq', category: 'AI/ML', icon: '/icons/groq.svg' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '/icons/Tensorflow.svg' },
    { name: 'OpenCV', category: 'AI/ML', icon: '/icons/icons8-opencv.svg' },
  ];

  const categories = ['Languages', 'Frontend', 'Backend', 'Tools', 'AI/ML'];

  const getCategoryColor = (category: string) => {
    const colors = {
      Languages: 'from-blue-500 to-blue-600',
      Frontend: 'from-cyan-500 to-cyan-600',
      Backend: 'from-indigo-500 to-indigo-600',
      Tools: 'from-purple-500 to-purple-600',
      'AI/ML': 'from-emerald-500 to-emerald-600',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20">
      <div className="container-max section-padding">
        <div className={`backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-opacity-80 transition-opacity duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
              My technical skills and proficiency levels across various technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8 md:space-y-12">
            {categories.map((category) => (
              <div key={category} className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-slate-100 flex items-center">
                  <span className={`w-1 h-8 bg-gradient-to-b ${getCategoryColor(category)} rounded-full mr-3 md:mr-4`}></span>
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 p-2 md:p-4 bg-slate-700/60 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-600"
                      >
                        {skill.icon.startsWith('/') ? (
                          <Image 
                            src={skill.icon} 
                            alt={`${skill.name} logo`}
                            width={32}
                            height={32}
                            className="w-6 h-6 md:w-8 md:h-8"
                          />
                        ) : (
                          <span className="text-2xl">{skill.icon}</span>
                        )}
                        <span className="font-medium text-slate-100 text-xs md:text-sm lg:text-base">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications, Awards & Languages */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                Certifications
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs lg:text-sm text-slate-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">
                    ✓ GIAC Foundational Cybersecurity Technologies (GFACT)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                Awards & Recognition
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs lg:text-sm text-slate-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">
                    🏆 Dean&apos;s Scholar (4 semesters)
                  </span>
                  
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">
                    🏆 National Cyber Scholar (2024)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold text-slate-100 mb-3 md:mb-4">
                Languages
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs lg:text-sm text-slate-300">
                <li className="flex items-center">
                  <span className="text-emerald-400 mr-2">
                    🌍 English (Native)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-400 mr-2">
                    🌍 Mandarin (Native)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 