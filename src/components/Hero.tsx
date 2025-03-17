
import React from 'react';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative pt-20 pb-32">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-3/5 animate-fadeIn">
            <div className="inline-block mb-3 rounded-full bg-purple/10 px-3 py-1 text-sm text-purple-light">
              Data Analyst
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Alex Morgan
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-gradient">
              Turning Data into Insights
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Transforming complex data into actionable business intelligence through
              powerful visualizations and data-driven storytelling.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:email@example.com"
                className="text-gray-400 hover:text-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* Placeholder for profile image - this would be replaced with your actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-purple-dark/20"></div>
                  <div className="w-full h-full bg-dark-200 flex items-center justify-center text-2xl font-bold text-gradient">
                    AM
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-purple-glow rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <ArrowDown className="text-purple" size={32} />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
