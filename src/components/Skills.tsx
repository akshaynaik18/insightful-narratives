
import React from 'react';
import SectionHeading from './SectionHeading';
import ProgressBar from './ProgressBar';
import { BarChart3, LineChart, PieChart, Database, FileSpreadsheet } from 'lucide-react';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: { name: string; percentage: number }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Data Analysis",
      icon: <LineChart size={36} className="text-purple" />,
      skills: [
        { name: "Data Cleaning & Transformation", percentage: 95 },
        { name: "Exploratory Data Analysis", percentage: 90 },
        { name: "Statistical Analysis", percentage: 85 },
        { name: "Data Mining", percentage: 80 },
      ],
    },
    {
      id: 2,
      title: "Data Visualization",
      icon: <BarChart3 size={36} className="text-purple" />,
      skills: [
        { name: "Dashboard Creation", percentage: 95 },
        { name: "Report Development", percentage: 90 },
        { name: "Visual Storytelling", percentage: 90 },
        { name: "Chart Selection", percentage: 85 },
      ],
    },
    {
      id: 3,
      title: "Statistical Marketing",
      icon: <PieChart size={36} className="text-purple" />,
      skills: [
        { name: "Customer Segmentation", percentage: 85 },
        { name: "Trend Forecasting", percentage: 80 },
        { name: "A/B Testing", percentage: 75 },
        { name: "Conversion Rate Analysis", percentage: 90 },
      ],
    },
    {
      id: 4,
      title: "Database Management",
      icon: <Database size={36} className="text-purple" />,
      skills: [
        { name: "SQL Queries", percentage: 90 },
        { name: "Database Design", percentage: 80 },
        { name: "Query Optimization", percentage: 75 },
        { name: "Data Modeling", percentage: 70 },
      ],
    },
    {
      id: 5,
      title: "Business Intelligence",
      icon: <FileSpreadsheet size={36} className="text-purple" />,
      skills: [
        { name: "KPI Tracking", percentage: 95 },
        { name: "Performance Analysis", percentage: 90 },
        { name: "Business Reporting", percentage: 85 },
        { name: "Strategy Development", percentage: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-dark-200/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Specialized Skills" 
          subtitle="Proficiencies and expertise in data analysis and visualization"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className="glass-panel p-8 rounded-xl animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple/10 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, i) => (
                  <ProgressBar 
                    key={i}
                    label={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
