'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
          {
        id: 1,
        title: 'EmotionAI',
        description: 'A real-time emotion recognition system using computer vision and machine learning. The application can detect and classify human emotions from facial expressions with high accuracy.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit', 'Neural Networks', 'Computer Vision'],
        image: '/projImgs/EmotionAIDemo.png',
        githubUrl: 'https://github.com/HowardWei123/EmotionAI',
      },
    {
      id: 2,
      title: 'ByTech',
      description: 'An AI-driven programming classroom for teachers. This website allows teachers to create, edit, and publish programming lessons, using AI assistants for grading and test case generation.',
      technologies: ['Python','OpenAI', 'Firebase', 'Cloud Firestore', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/projImgs/ByTechProj.png',
      githubUrl: 'https://github.com/Teddygat0r/dualhacks',
      liveUrl: 'https://dualhacks.vercel.app',
    },
  ];



  return (
    <section id="projects" className="py-20">
      <div className="container-max section-padding">
        <div className="backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-12 backdrop-opacity-80">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and projects that demonstrate my skills and passion for development
            </p>
          </div>



          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .map((project) => (
                  <div key={project.id} className="bg-slate-700/60 rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.opacity = '1';
                        }}
                        style={{ opacity: 0 }}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-slate-100 mb-3">
                        {project.title}
                      </h4>
                      <p className="md:flex hidden text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-700/60 text-white border border-slate-200 text-center py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors"
                        >
                          View Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600/50 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-6">
              Interested in working together or want to see more of my work?
            </p>
            <a
              href="https://github.com/HowardWei123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700/60 text-white px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 