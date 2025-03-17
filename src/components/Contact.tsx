
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Send, Download, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-dark-200/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fadeIn">
            <SectionHeading title="View My Resume & Contact Me" />
            
            <p className="text-gray-300 mb-8 max-w-md">
              Interested in working together or have a question about data analytics? 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            
            <a 
              href="#" 
              className="btn-primary mb-8 inline-flex"
              onClick={(e) => {
                e.preventDefault();
                toast.info('Resume download would start here');
              }}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
            
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-purple transition-colors"
                >
                  <Linkedin size={20} className="mr-3" />
                  <span>linkedin.com/in/alexmorgan</span>
                </a>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-purple transition-colors"
                >
                  <Github size={20} className="mr-3" />
                  <span>github.com/alexmorgan</span>
                </a>
                
                <a 
                  href="mailto:email@example.com"
                  className="flex items-center text-gray-300 hover:text-purple transition-colors"
                >
                  <Send size={20} className="mr-3" />
                  <span>alex.morgan@example.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn animate-delay-200">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
