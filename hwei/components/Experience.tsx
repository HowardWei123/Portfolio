'use client';

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

  const experiences: ExperienceItem[] = [
    {
      title: 'AI Data Scientist Intern',
      organization: 'Cytokinetics',
      period: 'May 2025 - Present',
      description: 'Pioneered LLM-driven visualization platform that processes and visualizes large datasets to help researchers and clinicians understand complex biological data.',
      achievements: [
        'Developed a Python-based data processing pipeline that transforms raw data from Postgres into a format suitable for visualization.',
        'Created a Vue-based visualization dashboard that allows users to interact with the data and explore patterns and relationships.',
        'Integrated agentic analysis tools to provide insights and recommendations for data interpretation through AWS (Bedrock, Lambda, and S3).',
        'Collaborated with a team of researchers and clinicians to ensure the platform meets their needs and provides meaningful insights.',
      ],
      skills: ['Python', 'Vue.js', 'AWS', 'PostgreSQL', 'Data Visualization', 'LLM', 'GitLab', 'Jira', 'Agile', 'Scrums', 'Team Collaboration'],
      type: 'work'
    },
    {
      title: 'Lead Machine Learning Engineer',
      organization: 'Google Developer Group',
      period: 'Sept 2024 - Dec 2024',
      description: 'Led the design and development of a machine learning-powered paper trading platform and managed a cross-university ML team.',
      achievements: [
        'Built a platform on AWS (Lambda, EC2, RDS) that analyzes investor trading habits and provides actionable insights using GPT-4o and Groq APIs across 7 financial metrics.',
        'Recruited, onboarded, and managed a team of 25 ML engineers from 5 universities, fostering collaboration through Agile (Kanban), GitHub Pro, and Jira.',
        'Integrated real-time and historical market data from Django REST API from Alpaca Markets into a robust MySQL database.',
      ],
      skills: ['Python', 'AWS', 'Machine Learning', 'MySQL', 'Django REST', 'Agile', 'Kanban', 'GitHub Pro', 'Jira', 'Team Leadership'],
      type: 'club'
    },
    {
      title: 'Fullstack Developer',
      organization: 'Machine Learning at SJSU',
      period: 'Sept 2024 - Present',
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
    <section id="experience" className="py-20">
      <div className="container-max section-padding">
        <div className="backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-12 backdrop-opacity-80">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              My professional work experience and leadership roles in student organizations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-semibold text-slate-100 mb-2">
                  Work Experience
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {workExperiences.map((experience, index) => (
                  <div key={index} className="bg-slate-700/60 p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          {experience.title}
                        </h4>
                        <p className="text-cyan-400 font-medium">
                          {experience.organization}
                        </p>
                      </div>
                      <span className="text-sm text-slate-400 bg-slate-600/60 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="hidden md:flex md:flex-col md:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-slate-300 text-sm">
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
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-semibold text-slate-100 mb-2">
                  Leadership & Clubs
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {clubExperiences.map((experience, index) => (
                  <div key={index} className="bg-slate-700/60 p-6 rounded-xl shadow-lg card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          {experience.title}
                        </h4>
                        <p className="text-purple-400 font-medium">
                          {experience.organization}
                        </p>
                      </div>
                      <span className="text-sm text-slate-400 bg-slate-600/60 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="hidden md:flex md:flex-col md:space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span className="text-slate-300 text-sm">
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