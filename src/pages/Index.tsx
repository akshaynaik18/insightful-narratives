
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index: React.FC = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.animate-fadeIn');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    // Set initial opacity to 0 for fade-in elements
    const elements = document.querySelectorAll('.animate-fadeIn');
    elements.forEach((element) => {
      if (!element.classList.contains('opacity-100')) {
        element.classList.add('opacity-0');
      }
    });
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-dark-300/80 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-white">
              Alex<span className="text-purple">Morgan</span>
            </a>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-400 hover:text-purple transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-purple transition-colors">
                Skills
              </a>
              <a href="#tools" className="text-gray-400 hover:text-purple transition-colors">
                Tools
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple transition-colors">
                Contact
              </a>
            </nav>
            
            <a href="#contact" className="btn-primary py-2 hidden md:inline-block">
              Hire Me
            </a>
          </div>
        </div>
      </header>
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Tools />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
