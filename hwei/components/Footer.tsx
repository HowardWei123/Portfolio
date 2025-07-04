'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-xs border-t border-cyan-400/50 p-12 backdrop-opacity-80">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HW</span>
              </div>
              <span className="text-xl font-bold gradient-text">Howard Wei</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Computer Science undergraduate passionate about creating innovative solutions 
              and building meaningful applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">
                <span className="text-blue-400">Email:</span> howardwei21@gmail.com
              </p>
              <p className="text-slate-300">
                <span className="text-blue-400">Location:</span> San Jose, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-300 text-sm">
            © {currentYear} Howard Wei. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="https://github.com/HowardWei123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/weihoward"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:howardwei21@gmail.com"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 