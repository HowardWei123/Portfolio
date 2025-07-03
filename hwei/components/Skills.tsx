'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container-max section-padding">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              My technical skills and proficiency levels across various technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                  <span className={`w-1 h-8 bg-gradient-to-b ${getCategoryColor(category)} rounded-full mr-4`}></span>
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-600"
                      >
                        {skill.icon.startsWith('/') ? (
                          <Image 
                            src={skill.icon} 
                            alt={`${skill.name} logo`}
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        ) : (
                          <span className="text-2xl">{skill.icon}</span>
                        )}
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications, Awards & Languages */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Certifications
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  GIAC Foundational Cybersecurity Technologies (GFACT)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  National Cyber Scholar
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Awards & Recognition
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">🏆</span>
                  Dean&apos;s List (4 semesters)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Languages
              </h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🌍</span>
                  English (Native)
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🌍</span>
                  Mandarin (Native)
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