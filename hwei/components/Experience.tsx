'use client';

import { useState, useEffect } from 'react';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'club';
}

const Experience = () => {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const experiences: ExperienceItem[] = [
    {
      title: 'Clinical Systems Specialist',
      organization: 'Cytokinetics',
      period: 'Sept 2025 - Present',
      description: 'Performing data transformations and analytics on clinical datasets for multi-platform clinical data systems, ensuring compliance with HIPAA and other regulatory standards.',
      achievements: [
        'Engineering a HIPAA-compliant multi-agent architecture via LangChain for clinical data system risk analysis.',
        'Streamlined clinical data review using Python and Pandas, cutting outstanding review time by 10 days.',
      ],
      skills: [
        'Python',
        'LangChain',
        'CrewAI',
        'AWS Bedrock',
        'AWS Lambda',
        'AWS S3',
        'Spotfire',
        'HIPAA Compliance',
        'Data Visualization',
        'GitLab',
        'Jira',
        'Agile',
      ],
      type: 'work'
    },
    {
      title: 'Informatics Intern',
      organization: 'Cytokinetics',
      period: 'May 2025 - Aug 2025',
      description: 'Designing and delivering an LLM-powered analytics platform that helps clinical and scientific teams safely explore massive biomedical datasets.',
      achievements: [
        'Built an end-to-end agentic AI dashboard in Python on top of AWS Bedrock, Lambda, and S3 that lets hundreds of scientists spin up rich visualizations over millions of records in a single workflow.',
        'Created a custom Spotfire integration using IronPython and JavaScript APIs to render advanced visualizations for complex chemical structures, cutting dashboard load times by roughly 50%.',
        'Implemented an asynchronous MQTT messaging layer that orchestrates long-running data extraction and visualization jobs and streams incremental results into a Vue.js frontend.',
        'Provisioned a PostgreSQL-backed memory layer that maintains user and agent context across concurrent sessions, enabling more coherent multi-step analysis.',
      ],
      skills: [
        'Python',
        'AWS Bedrock',
        'AWS Lambda',
        'AWS S3',
        'Vue.js',
        'Spotfire',
        'PostgreSQL',
        'MQTT',
        'Data Visualization',
        'GitLab',
        'Jira',
        'Agile',
      ],
      type: 'work'
    },
    {
      title: 'Software Engineering Lead Developer',
      organization: 'Google Developer Group',
      period: 'Sept 2024 - Dec 2024',
      description: 'Led the end-to-end delivery of a cloud-hosted paper trading platform that analyzes retail trading behavior and surfaces personalized investing insights.',
      achievements: [
        'Deployed the core platform on AWS EC2, RDS, and Lambda to reliably ingest and process simulated trades while keeping operating costs low for a student-led organization.',
        'Recruited, onboarded, and mentored a distributed team of 25 machine learning engineers across multiple universities, running Kanban sprints in Jira and owning CI/CD pipelines for model testing and deployment.',
        'Designed and shipped a data ETL pipeline that feeds market signals from MySQL and Django REST services into a Llama 3 70B endpoint, boosting the quality of investor recommendations across seven tracked performance metrics.',
      ],
      skills: [
        'Python',
        'AWS EC2',
        'AWS RDS',
        'AWS Lambda',
        'Machine Learning',
        'MySQL',
        'Django REST',
        'Llama 3 70B',
        'Agile',
        'Kanban',
        'Jira',
        'CI/CD',
        'Team Leadership',
      ],
      type: 'club'
    },
    {
      title: 'Software Engineer',
      organization: 'Machine Learning at SJSU',
      period: 'Sept 2024 - May 2025',
      description: 'Designed and built a full-stack web application with a cloud-based backend and responsive frontend to serve the ML Club community.',
      achievements: [
        'Developed 5 RESTful API endpoints for saving and retrieving user forum posts and readings with a PostgreSQL cloud database.',
        'Created a responsive and interactive frontend with React, Tailwind CSS, and SWR for seamless data fetching.',
        'Collaborated effectively on a team of developers using Git workflows, GitHub project boards, and rigorous code reviews.',
      ],
      skills: ['React', 'PostgreSQL', 'Tailwind CSS', 'SWR', 'RESTful API', 'Git', 'GitHub', 'Full-stack Development', 'Team Collaboration'],
      type: 'club'
    },
    {
      title: 'Event Coordinator',
      organization: 'Spartan Gaming',
      period: 'Feb 2024 - Present',
      description: 'Built and maintained the club\'s web presence and organized large-scale gaming events and tournaments for the community.',
      achievements: [
        'Engineered a dynamic, mobile-friendly website from scratch using Nuxt, Vue, and TypeScript.',
        'Designed and implemented a comprehensive event management system with a focus on user experience and accessibility.',
        'Coordinated and ran monthly competitive tournaments for over 3,000 SJSU and external participants, awarding cash and physical prizes.',
        'Co-organized fundraising initiatives to support club operations and partner charities.',

      ],
      skills: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS', 'Event Management', 'Project Coordination', 'Fundraising', 'Community Building', 'Tournament Organization'],
      type: 'club'
    }
  ];

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const clubExperiences = experiences.filter(exp => exp.type === 'club');

  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20">
      <div className="container-max section-padding">
        <div className={`backdrop-blur-xl border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-opacity-90 transition-opacity duration-1000
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
              My professional work experience and leadership roles in student organizations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Work Experience */}
            <div className="space-y-6 md:space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">
                  Work Experience
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-4 md:space-y-6">
                {workExperiences.map((experience, index) => (
                  <div key={index} className="bg-slate-700/60 p-4 md:p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-semibold text-slate-100">
                          {experience.title}
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base text-cyan-400 font-medium">
                          {experience.organization}
                        </p>
                      </div>
                      <span className="text-xs lg:text-sm text-slate-400 text-center bg-slate-600/60 px-2 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <p className="text-xs md:text-sm lg:text-base text-slate-300 mb-3 md:mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1 md:px-2 py-1 bg-blue-900/30 text-blue-300 text-xs lg:text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="hidden md:flex md:flex-col md:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-xs md:text-sm text-slate-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Club Experience */}
            <div className="space-y-6 md:space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">
                  Leadership & Clubs
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-4 md:space-y-6">
                {clubExperiences.map((experience, index) => (
                  <div key={index} className="bg-slate-700/60 p-4 md:p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-semibold text-slate-100">
                          {experience.title}
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base text-purple-400 font-medium">
                          {experience.organization}
                        </p>
                      </div>
                      <span className="text-xs lg:text-sm text-slate-400 text-center bg-slate-600/60 px-2 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <p className="text-xs md:text-sm lg:text-base text-slate-300 mb-3 md:mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1 md:px-2 py-1 bg-purple-900/30 text-purple-300 text-xs lg:text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="hidden md:flex md:flex-col md:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span className="text-xs md:text-sm text-slate-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Experience; 