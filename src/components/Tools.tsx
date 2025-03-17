
import React from 'react';
import SectionHeading from './SectionHeading';
import { 
  Gauge, Database, BarChart3, FileSpreadsheet, Globe2 
} from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const Tools: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 1,
      name: "Power BI",
      description: "Advanced dashboard creation and data visualization",
      icon: <Gauge size={40} className="text-purple" />,
    },
    {
      id: 2,
      name: "Excel",
      description: "Advanced analytics, pivot tables, and power query",
      icon: <FileSpreadsheet size={40} className="text-purple" />,
    },
    {
      id: 3,
      name: "SQL",
      description: "Database querying and data management",
      icon: <Database size={40} className="text-purple" />,
    },
    {
      id: 4,
      name: "Python",
      description: "Data analysis, automation, and machine learning",
      icon: <BarChart3 size={40} className="text-purple" />,
    },
    {
      id: 5,
      name: "Google Analytics",
      description: "Web analytics and user behavior tracking",
      icon: <Globe2 size={40} className="text-purple" />,
    },
  ];

  return (
    <section id="tools" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Tools & Technologies" 
          subtitle="The platforms and technologies I use to create powerful data solutions"
          alignment="center"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={tool.id}
              className="tool-item animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tool.icon}
              <h3 className="text-xl font-bold text-white mt-2">{tool.name}</h3>
              <p className="text-gray-400 text-center text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Tools;
