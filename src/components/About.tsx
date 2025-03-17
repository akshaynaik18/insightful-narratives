
import React from 'react';
import SectionHeading from './SectionHeading';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Data analyst passionate about transforming complex information into meaningful insights."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 glass-panel p-8 rounded-xl animate-fadeIn">
            <p className="text-gray-300 text-lg mb-6">
              I'm a data analyst with a knack for translating complex datasets into actionable business intelligence. 
              My expertise lies in creating intuitive dashboards and comprehensive reports that help businesses make 
              informed decisions based on data-driven insights.
            </p>
            
            <p className="text-gray-300 text-lg">
              With a background in statistics and business analytics, I bring a unique perspective to data analysis, 
              focusing not just on what the numbers say, but what they mean for your business goals and future strategies.
            </p>
          </div>
          
          <div className="lg:col-span-2 glass-panel p-8 rounded-xl animate-fadeIn animate-delay-200">
            <h3 className="text-xl font-bold mb-6 text-white">Expertise</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 bg-purple/20 p-1 rounded-full text-purple mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-300">
                  Advanced experience in Excel, Power BI, and SQL for comprehensive business intelligence
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 bg-purple/20 p-1 rounded-full text-purple mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-300">
                  Skilled in creating data-driven insights and visual dashboards that tell compelling stories
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 bg-purple/20 p-1 rounded-full text-purple mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-300">
                  Specialized in finance, sales, and marketing analytics with a focus on KPI tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 bg-purple/20 p-1 rounded-full text-purple mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-300">
                  Passionate about data visualization and creating interactive user experiences
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
