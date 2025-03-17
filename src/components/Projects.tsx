
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Data Analysis Dashboard",
      description: "Analyzed sales trends, identified key performance indicators (KPIs), and created an interactive Excel dashboard for real-time monitoring.",
      tools: ["Excel", "Pivot Tables", "Power Query"],
      image: "bg-dark-200",
      link: "#",
    },
    {
      id: 2,
      title: "Power BI Sales Dashboard",
      description: "Built a dynamic Power BI dashboard for real-time sales tracking and forecasting, enabling better decision-making for the sales team.",
      tools: ["Power BI", "DAX", "SQL"],
      image: "bg-dark-200",
      link: "#",
    },
    {
      id: 3,
      title: "Financial Performance Dashboard",
      description: "Designed an interactive dashboard for tracking revenue, expenses, and profitability with drill-down capabilities for detailed analysis.",
      tools: ["Power BI", "SQL", "Python"],
      image: "bg-dark-200",
      link: "#",
    },
    {
      id: 4,
      title: "Marketing Analytics Dashboard",
      description: "Analyzed customer behavior, conversion rates, and ROI using Excel to provide actionable insights for marketing strategy optimization.",
      tools: ["Excel", "Power Query", "VBA"],
      image: "bg-dark-200",
      link: "#",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my data analysis work, dashboards, and visualizations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className={`h-48 rounded-lg mb-5 overflow-hidden ${project.image} flex items-center justify-center`}>
                <div className="text-3xl font-bold text-gradient opacity-30">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-purple/10 text-purple-light"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                className="inline-flex items-center text-purple hover:text-purple-light transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project 
                <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
