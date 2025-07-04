'use client';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden">
      <div className="flex justify-center items-center z-10 container-max section-padding text-center">
        <div className="backdrop-blur-xs border border-cyan-400/50 rounded-2xl p-12 backdrop-opacity-80">
          {/* Greeting */}
          <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
            Hello, I&apos;m
          </p>
          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Howard Wei</span>
          </h1>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-8 font-medium">
            Computer Science Undergraduate at{' '}
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent font-bold">
              San Jose State University
            </span>
          </h2>
          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Passionate about software development, machine learning, and creating innovative solutions. 
            Currently pursuing my degree while building real-world projects and expanding my technical skills.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
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